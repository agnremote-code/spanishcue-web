// Render gate (incident 2026-11-17, Cloudflare Error 1102 again).
//
// The isolate starts at ~80 MiB of its 128 MiB (the bundle is resident) and
// every page or `.rsc` render in flight holds a few more MiB until its stream
// ends. Nothing bounded how many renders ran at once: one visitor's browser
// prefetching ~35 payloads, or a crawler opening several pages in parallel,
// pushed the isolate over the limit and Cloudflare killed it with every
// request in flight (HTTP 503 for all of them).
//
// The gate lets at most `maxActive` renders run in one isolate. The rest wait
// in a FIFO queue (a waiting request costs almost nothing) and, if the queue
// is full or the wait is too long, get a cheap 503 with Retry-After instead of
// taking the whole isolate down. A slot is released when the response body has
// been fully streamed, is cancelled, fails, or after `holdMs` as a last resort
// so a stalled client can never keep a slot forever.

export const MAX_ACTIVE_RENDERS = 4;
export const MAX_QUEUED_RENDERS = 120;
export const MAX_WAIT_MS = 10_000;
export const MAX_HOLD_MS = 15_000;

type Options = { maxActive?: number; maxQueued?: number; waitMs?: number; holdMs?: number };
type Waiter = { grant: () => void; timer: ReturnType<typeof setTimeout> };

export class RenderGate {
  private active = 0;
  private readonly queue: Waiter[] = [];
  private readonly maxActive: number;
  private readonly maxQueued: number;
  private readonly waitMs: number;
  private readonly holdMs: number;
  /** Highest number of simultaneous renders seen (tests and diagnostics). */
  peak = 0;

  constructor(options: Options = {}) {
    this.maxActive = options.maxActive ?? MAX_ACTIVE_RENDERS;
    this.maxQueued = options.maxQueued ?? MAX_QUEUED_RENDERS;
    this.waitMs = options.waitMs ?? MAX_WAIT_MS;
    this.holdMs = options.holdMs ?? MAX_HOLD_MS;
  }

  get running(): number { return this.active; }
  get waiting(): number { return this.queue.length; }

  /** Resolves with a release function, or null when the request must be shed. */
  private acquire(): Promise<(() => void) | null> {
    if (this.active < this.maxActive) return Promise.resolve(this.take());
    if (this.queue.length >= this.maxQueued) return Promise.resolve(null);
    return new Promise((resolve) => {
      const waiter: Waiter = {
        grant: () => { clearTimeout(waiter.timer); resolve(this.take()); },
        timer: setTimeout(() => {
          const index = this.queue.indexOf(waiter);
          if (index >= 0) this.queue.splice(index, 1);
          resolve(null);
        }, this.waitMs),
      };
      this.queue.push(waiter);
    });
  }

  private take(): () => void {
    this.active += 1;
    if (this.active > this.peak) this.peak = this.active;
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      clearTimeout(timer);
      this.active -= 1;
      // The slot passes straight to the oldest waiter.
      this.queue.shift()?.grant();
    };
    const timer = setTimeout(release, this.holdMs);
    return release;
  }

  /**
   * Runs `render` inside a slot. The slot stays taken until the returned
   * response has finished streaming. Returns null when the request was shed.
   */
  async run(render: () => Promise<Response>): Promise<Response | null> {
    const release = await this.acquire();
    if (!release) return null;
    let response: Response;
    try {
      response = await render();
    } catch (error) {
      release();
      throw error;
    }
    if (!response.body) {
      release();
      return response;
    }
    const reader = response.body.getReader();
    const body = new ReadableStream<Uint8Array>({
      async pull(controller) {
        try {
          const { done, value } = await reader.read();
          if (done) { release(); controller.close(); return; }
          controller.enqueue(value);
        } catch (error) {
          release();
          controller.error(error);
        }
      },
      cancel(reason) {
        release();
        return reader.cancel(reason);
      },
    });
    return new Response(body, response);
  }
}

const BUSY = "El sitio está muy ocupado en este momento. Vuelve a intentarlo en unos segundos. / The site is very busy right now. Please try again in a few seconds.";

export function busyResponse(): Response {
  return new Response(BUSY, {
    status: 503,
    headers: { "content-type": "text/plain; charset=utf-8", "Cache-Control": "private, no-store", "Retry-After": "5" },
  });
}

/** Page and `.rsc` renders go through the gate; APIs, writes and static files do not. */
export function gatedRender(method: string, pathname: string): boolean {
  return method === "GET" && !pathname.startsWith("/api/");
}
