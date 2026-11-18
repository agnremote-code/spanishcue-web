// Preloaded (node --import) into the test processes that talk to the local
// Worker started by scripts/test-worker.mjs.
//
// In CI a GET to `wrangler dev` now and then never gets its response headers:
// the socket stays open and Node's fetch only gives up after 300 s with
// "fetch failed". It has hit different tests (classic classes, the student
// pass) on routes that answer in 2 ms, and a re-run always passes, so it is the
// local workerd proxy transport, not the application. Each occurrence cost a
// 5 minute wait plus a full CI re-run.
//
// This guard bounds the wait for response headers from the test origin and
// retries a GET/HEAD without a body on a fresh connection, loudly. It never
// retries an HTTP response of any status, never retries a write, and leaves
// requests to other origins and requests that carry their own signal alone.
// A route that really hangs still fails: three attempts, then the error.
const origin = process.env.CHESPANISH_TEST_ORIGIN;
const timeoutMs = Number(process.env.SPANISHCUE_TEST_FETCH_TIMEOUT_MS) || 30_000;
const attempts = 3;
const nativeFetch = globalThis.fetch;

function target(input) {
  if (typeof input === 'string') return input;
  if (input instanceof URL) return input.href;
  return input?.url ?? '';
}

async function guardedFetch(input, init) {
  const url = target(input);
  const request = typeof input === 'object' && !(input instanceof URL) ? input : null;
  const method = String(init?.method ?? request?.method ?? 'GET').toUpperCase();
  if (!origin || !(url === origin || url.startsWith(`${origin}/`)) || init?.signal || request?.signal?.aborted) return nativeFetch(input, init);
  const retryable = (method === 'GET' || method === 'HEAD') && init?.body == null && !request;
  for (let attempt = 1; ; attempt++) {
    const controller = new AbortController();
    let timedOut = false;
    const timer = setTimeout(() => { timedOut = true; controller.abort(); }, timeoutMs);
    try {
      // Only the wait for headers is bounded; the body is read at the caller's pace.
      return await nativeFetch(input, { ...init, signal: controller.signal });
    } catch (error) {
      const transport = timedOut || error instanceof TypeError;
      if (!retryable || !transport || attempt >= attempts) {
        if (timedOut) throw new Error(`Local Worker sent no response headers within ${timeoutMs} ms: ${method} ${url} (attempt ${attempt})`, { cause: error });
        throw error;
      }
      console.warn(`Retrying local Worker transport: ${method} ${url} (${timedOut ? `no headers in ${timeoutMs} ms` : error.cause?.code ?? error.message}), attempt ${attempt + 1}/${attempts}`);
    } finally {
      clearTimeout(timer);
    }
  }
}

if (origin) globalThis.fetch = guardedFetch;
