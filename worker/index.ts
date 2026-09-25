import {
  accountIdFromHeaders,
  freeAudioPrefixes,
  fullAccessFromHeaders,
  isFreeLesson,
  lessonAtPath,
  localLessonPath,
  ownerFromHeaders,
} from "../app/access-policy";
import { lessons } from "../app/lesson-catalog";
import { isPremiumBoardPath } from "../app/boards/access";
import {
  authenticatedRequestHeaders,
  firebaseTokenFromHeaders,
  getFirebaseUserFromHeaders,
  ownerIdentityFromEnvironment,
} from "../app/firebase-session";
import { resolveFirebaseAccount } from "../db/accounts";
import { saveLessonProgress } from "../db/progress";
import {
  LOCALE_COOKIE,
  localeFromHeaders,
  normalizeLocale,
} from "../app/i18n/messages";
/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { withDeploymentHeaders } from "./deployment-headers";
import { writeFreezeActive, writeFreezeResponse } from "./write-freeze";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  CHESPANISH_OWNER_UID?: string;
  CHESPANISH_OWNER_EMAIL?: string;
  SPANISHCUE_DEPLOYMENT?: string;
  SPANISHCUE_WRITE_FREEZE?: string;
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

function setSecurityHeaders(headers: Headers, url: URL, locale: string): void {
  headers.set('X-Content-Type-Options','nosniff');
  headers.set('Referrer-Policy','strict-origin-when-cross-origin');
  headers.set('X-Frame-Options','DENY');
  headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=()');
  headers.set('Content-Language',locale);
  if (url.protocol === 'https:') {
    headers.set('Strict-Transport-Security','max-age=31536000; includeSubDomains');
  }
}

function noStoreRedirect(target: URL, locale: string, status = 302): Response {
  const headers = new Headers({
    Location: target.toString(),
    'Cache-Control': 'private, no-store',
  });
  setSecurityHeaders(headers, target, locale);
  return new Response(null, {
    status,
    headers,
  });
}

const assetContentTypes: Record<string, string> = {
  avif: "image/avif",
  gif: "image/gif",
  ico: "image/x-icon",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  m4a: "audio/mp4",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  ogg: "audio/ogg",
  png: "image/png",
  svg: "image/svg+xml; charset=utf-8",
  ttf: "font/ttf",
  wav: "audio/wav",
  webm: "video/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
};

function assetResponse(response: Response, pathname: string): Response {
  const extension = pathname.split(".").pop()?.toLowerCase() || "";
  const headers = new Headers(response.headers);
  const contentType = assetContentTypes[extension];
  if (contentType) headers.set("Content-Type", contentType);
  // Public lesson media is always rendered or played in-browser. A stale
  // object-store attachment header must never turn navigation into a download.
  headers.delete("Content-Disposition");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const app = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Coalesce host, scheme, legacy lesson slugs and trailing slashes into one
    // permanent redirect. Local preview hosts intentionally remain untouched.
    const spanishCueHost = url.hostname === "spanishcue.com" || url.hostname === "www.spanishcue.com";
    let canonicalRedirect = false;
    if (spanishCueHost && (url.protocol !== "https:" || url.hostname === "www.spanishcue.com")) {
      url.protocol = "https:";
      url.hostname = "spanishcue.com";
      canonicalRedirect = true;
    }

    // Some browsers still request the conventional ICO URL even though the
    // document advertises the SVG favicon explicitly. Keep that fallback
    // valid instead of generating a harmless-but-noisy 404 on every visit.
    if (url.pathname === "/favicon.ico") {
      return noStoreRedirect(
        new URL("/favicon.svg", url),
        localeFromHeaders(request.headers),
        308,
      );
    }

    // Preserve links shared before the catalog adopted descriptive slugs.
    // Explicit local routes are canonical; inline lessons remain at /clase/:id.
    const legacyLessonMatch = url.pathname.match(/^\/clase\/(\d+)\/?$/);
    if (legacyLessonMatch) {
      const legacyLesson = lessons.find((item) => String(item.id) === legacyLessonMatch[1]);
      const canonicalPath = legacyLesson ? localLessonPath(legacyLesson) : null;
      if (canonicalPath && canonicalPath !== `/clase/${legacyLessonMatch[1]}`) {
        url.pathname = canonicalPath;
        canonicalRedirect = true;
      }
    }

    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "");
      canonicalRedirect = true;
    }
    if (canonicalRedirect) return Response.redirect(url, 308);

    const requestedLocale = normalizeLocale(url.searchParams.get("lang"));
    const routedHeaders = new Headers(request.headers);
    routedHeaders.set("x-spanishcue-pathname", url.pathname);
    if (requestedLocale) routedHeaders.set("x-spanishcue-locale", requestedLocale);
    const routedRequest = new Request(request, { headers: routedHeaders });

    let pathname:string;try{pathname=decodeURIComponent(url.pathname).replace(/\/+$/, '')||'/'}catch{return new Response('Bad request',{status:400})}
    const lesson=lessonAtPath(pathname,lessons);
    const premiumBoard=isPremiumBoardPath(pathname);
    const audioPrefix = pathname.match(/^\/audio\/([^/]+)\//)?.[1] || null;
    const premiumAudio = Boolean(audioPrefix && !freeAudioPrefixes.has(audioPrefix));
    const administrative=pathname==='/admin'||pathname.startsWith('/api/settings')||pathname.startsWith('/api/admin/');
    const identityAware=pathname==='/'||pathname==='/ingresar'||pathname==='/cuenta'||pathname==='/acceso'||pathname==='/pricing'||pathname==='/pro'||pathname.startsWith('/pro/')||pathname.startsWith('/api/progress')||pathname.startsWith('/api/founder-access')||pathname.startsWith('/api/billing/')||administrative||premiumAudio||premiumBoard||Boolean(lesson);
    const verifiedUser=identityAware&&firebaseTokenFromHeaders(routedHeaders)
      ? await getFirebaseUserFromHeaders(routedHeaders)
      : null;
    const ownerIdentity=ownerIdentityFromEnvironment(env);
    const account=verifiedUser
      ? await resolveFirebaseAccount(env.DB,verifiedUser).catch(()=>null)
      : null;
    const verifiedHeaders=authenticatedRequestHeaders(routedHeaders,verifiedUser,account,ownerIdentity);
    const verifiedRequest=new Request(routedRequest,{headers:verifiedHeaders});
    const owner=ownerFromHeaders(verifiedHeaders);
    const fullAccess=fullAccessFromHeaders(verifiedHeaders);
    const verifiedLocale=localeFromHeaders(verifiedHeaders);
    if (premiumAudio && !fullAccess) {
      const headers = new Headers({'Cache-Control':'private, no-store'});
      setSecurityHeaders(headers,url,verifiedLocale);
      return new Response('Forbidden',{status:403,headers});
    }
    if ((administrative&&!owner)||(lesson&&!isFreeLesson(lesson.id)&&!fullAccess)||(premiumBoard&&!fullAccess)) {
      if(pathname.startsWith('/api/')) {
        const headers = new Headers({'content-type':'application/json','Cache-Control':'private, no-store'});
        setSecurityHeaders(headers,url,verifiedLocale);
        return new Response(JSON.stringify({error:'Acceso exclusivo del propietario.'}),{status:403,headers});
      }
      if(administrative&&!verifiedUser) return noStoreRedirect(new URL('/ingresar?modo=entrar&returnTo=%2Fadmin',url),verifiedLocale);
      if(administrative) return noStoreRedirect(new URL('/cuenta',url),verifiedLocale);
      return noStoreRedirect(new URL(`/acceso?returnTo=${encodeURIComponent(url.pathname+url.search)}`,url),verifiedLocale);
    }
    const accountId=accountIdFromHeaders(verifiedHeaders);
    if (accountId&&lesson&&request.method==='GET'&&!writeFreezeActive(env.SPANISHCUE_WRITE_FREEZE)) {
      ctx.waitUntil(saveLessonProgress(env.DB,accountId,lesson.id).catch(()=>undefined));
    }
    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(verifiedRequest, {
        fetchAsset: async (path) => {
          const assetUrl = new URL(path, request.url);
          return assetResponse(await env.ASSETS.fetch(new Request(assetUrl)), assetUrl.pathname);
        },
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const immutableAsset = url.pathname.startsWith('/assets/') || url.pathname.startsWith('/_next/static/');
    const publicMedia = /\.(?:avif|gif|ico|jpe?g|m4a|mp3|mp4|ogg|png|svg|ttf|wav|webm|webp|woff2?)$/i.test(url.pathname);
    const response = immutableAsset || publicMedia
      ? await env.ASSETS.fetch(verifiedRequest)
      : await handler.fetch(verifiedRequest, env, ctx);
    const safeResponse=publicMedia
      ? assetResponse(response,url.pathname)
      : new Response(response.body,response);
    const publicCacheAllowed = request.method === 'GET'
      && response.ok
      && !requestedLocale
      && !safeResponse.headers.has('Set-Cookie');
    safeResponse.headers.set(
      'Cache-Control',
      publicCacheAllowed && immutableAsset
        ? 'public, max-age=31536000, immutable'
        : publicCacheAllowed && publicMedia
          ? 'public, max-age=86400, stale-while-revalidate=604800'
          : 'private, no-store',
    );
    setSecurityHeaders(safeResponse.headers,url,verifiedLocale);
    if (requestedLocale) {
      safeResponse.headers.append(
        'Set-Cookie',
        `${LOCALE_COOKIE}=${requestedLocale}; Max-Age=31536000; Path=/; SameSite=Lax`,
      );
    }
    return safeResponse;
  },
};

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const frozen = writeFreezeResponse(request, env.SPANISHCUE_WRITE_FREEZE);
    return withDeploymentHeaders(frozen ?? await app.fetch(request, env, ctx), env.SPANISHCUE_DEPLOYMENT);
  },
};

export default worker;
