import { ownerFromHeaders, isFreeLesson } from "../app/access-policy";
import { lessons } from "../app/lesson-catalog";
/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    let pathname:string;try{pathname=decodeURIComponent(url.pathname).replace(/\/+$/, '')||'/'}catch{return new Response('Bad request',{status:400})}
    const owner=ownerFromHeaders(request.headers);
    const lesson=lessons.find(l=>(l.path||(l.special?'/choose-conversation':`/clase/${l.id}`))===pathname);
    const administrative=pathname==='/admin'||pathname.startsWith('/api/settings');
    if ((administrative&&!owner)||(lesson&&!isFreeLesson(lesson.id)&&!owner)) {
      if(pathname.startsWith('/api/')) return Response.json({error:'Acceso exclusivo del propietario.'},{status:403});
      if(administrative&&!request.headers.get('oai-authenticated-user-id')) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin',url),302);
      return Response.redirect(new URL('/acceso',url),302);
    }
    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response=await handler.fetch(request, env, ctx);
    const safeResponse=new Response(response.body,response);
    safeResponse.headers.set('Cache-Control','private, no-store');
    safeResponse.headers.set('X-Content-Type-Options','nosniff');
    return safeResponse;
  },
};

export default worker;
