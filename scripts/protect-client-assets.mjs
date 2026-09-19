/**
 * Keep paid-only browser modules and media out of the public asset namespace.
 *
 * Public lesson roots are explicit. Premium JavaScript is served directly by
 * the Worker after Firebase/D1 authorization. Premium audio is encrypted into
 * opaque static blobs and decrypted by the Worker only after the same check.
 */
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from "node:crypto";
import { build } from "esbuild";
import { tmpdir } from "node:os";
import { dirname, extname, relative, resolve } from "node:path";

const root = process.cwd();
const quarantineRoot = await mkdtemp(
  resolve(tmpdir(), "spanishcue-protected-build-"),
);
async function moveOutOfPublicBuild(source, destination) {
  const quarantined = resolve(quarantineRoot, destination);
  await mkdir(dirname(quarantined), { recursive: true });
  await rename(source, quarantined);
}
const built = await build({
  stdin: {
    contents:
      'export {lessons} from "./app/lesson-catalog"; export {freeAudioPrefixes,isFreeLesson} from "./app/access-policy";',
    resolveDir: root,
  },
  bundle: true,
  format: "esm",
  platform: "node",
  write: false,
});
const policy = await import(
  "data:text/javascript;base64," +
    Buffer.from(built.outputFiles[0].text).toString("base64")
);
const manifest = JSON.parse(
  await readFile("dist/client/.vite/manifest.json", "utf8"),
);

const publicRoots = new Set([
  "app/AuthSessionSync.tsx",
  "app/Library.tsx",
  "app/PasswordResetButton.tsx",
  "app/acceso/CheckoutButton.tsx",
  "app/acceso/FounderAccessForm.tsx",
  "app/error.tsx",
  "app/ingresar/AuthForm.tsx",
  "app/marketing/FreeLessonRegistrationGate.tsx",
  "app/marketing/GoogleAnalytics.tsx",
  "app/marketing/MarketingAttribution.tsx",
  "app/privacy/GoogleConsentMode.tsx",
  "app/not-found.tsx",
  "app/pro/success/SuccessClient.tsx",
  "app/student-tracker/StudentTracker.tsx",
  "app/sistema-verbal/page.tsx",
  "app/verbal-system/SystemHub.tsx",
  "app/grammar-worlds/GrammarWorld.tsx",
  "app/conversation-worlds/ConversationWorld.tsx",
  "virtual:vinext-app-browser-entry",
  ...Object.keys(manifest).filter((key) => /(^|\/)node_modules\//.test(key)),
]);
for (const lesson of policy.lessons) {
  if (policy.isFreeLesson(lesson.id) && lesson.path?.startsWith("/")) {
    publicRoots.add(`app${lesson.path}/page.tsx`);
  }
}

const publicFiles = new Set();
const visited = new Set();
function visit(key) {
  if (visited.has(key)) return;
  visited.add(key);
  const item = manifest[key];
  if (!item) return;
  publicFiles.add(item.file);
  for (const css of item.css ?? []) publicFiles.add(css);
  for (const dependency of item.imports ?? []) visit(dependency);
}
for (const key of publicRoots) visit(key);

const protectedFiles = [
  ...new Set(
    Object.values(manifest)
      .map((value) => value.file)
      .filter((file) => file.endsWith(".js") && !publicFiles.has(file)),
  ),
];
if (!protectedFiles.length) {
  throw new Error("Expected private client chunks; refusing an unprotected build.");
}

const clientAssets = {};
for (const file of protectedFiles) {
  clientAssets[`/${file}`] = await readFile(resolve("dist/client", file), "utf8");
}
await writeFile(
  "dist/server/private-client-assets.js",
  `export default ${JSON.stringify(clientAssets)};\n`,
);

const audioRoot = resolve("dist/client/audio");
const protectedAudioRoot = resolve("dist/client/_protected-audio");
const mediaKey = randomBytes(32);
const privateMediaAssets = {};
const protectedMediaFiles = [];
const publicMediaFiles = [];
const routedWebpAssets = {};
const contentTypes = {
  ".aac": "audio/aac",
  ".m4a": "audio/mp4",
  ".mp3": "audio/mpeg",
  ".oga": "audio/ogg",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".webm": "audio/webm",
};

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

await mkdir(protectedAudioRoot, { recursive: true });
for (const file of await walk(audioRoot)) {
  const relativePath = relative(audioRoot, file).split("\\").join("/");
  const [prefix] = relativePath.split("/");
  const publicPath = `/audio/${relativePath}`;
  if (policy.freeAudioPrefixes.has(prefix)) {
    publicMediaFiles.push(publicPath);
    continue;
  }

  const plain = await readFile(file);
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", mediaKey, iv);
  const encryptedBody = Buffer.concat([cipher.update(plain), cipher.final()]);
  const encrypted = Buffer.concat([encryptedBody, cipher.getAuthTag()]);

  // Verify every generated blob before deleting the source from public output.
  const decipher = createDecipheriv("aes-256-gcm", mediaKey, iv);
  decipher.setAuthTag(encrypted.subarray(encrypted.length - 16));
  const verified = Buffer.concat([
    decipher.update(encrypted.subarray(0, encrypted.length - 16)),
    decipher.final(),
  ]);
  if (!verified.equals(plain)) {
    throw new Error(`Encrypted media verification failed for ${publicPath}`);
  }

  const digest = createHash("sha256").update(encrypted).digest("hex");
  const assetPath = `/_protected-audio/${digest}.bin`;
  await writeFile(resolve("dist/client", assetPath.slice(1)), encrypted);
  privateMediaAssets[publicPath] = {
    assetPath,
    contentType:
      contentTypes[extname(relativePath).toLowerCase()] ??
      "application/octet-stream",
    etag: `"${createHash("sha256").update(plain).digest("hex")}"`,
    iv: iv.toString("base64"),
    size: plain.length,
  };
  protectedMediaFiles.push(publicPath);
  await moveOutOfPublicBuild(file, `audio/${relativePath}`);
}

// Sites can serve a matching static object before the Worker even when the
// generated Wrangler config requests worker-first routing. Its asset uploader
// currently records WebP files as application/octet-stream. Publish the same
// bytes under opaque internal .bin paths instead, so requests to the public
// .webp URLs necessarily reach the Worker and receive the correct media MIME.
const clientRoot = resolve("dist/client");
const routedWebpRoot = resolve(clientRoot, "_routed-webp");
const publicWebpFiles = (await walk(clientRoot)).filter(
  (file) => extname(file).toLowerCase() === ".webp",
);
await mkdir(routedWebpRoot, { recursive: true });
for (const file of publicWebpFiles) {
  const relativePath = relative(clientRoot, file).split("\\").join("/");
  const publicPath = `/${relativePath}`;
  const body = await readFile(file);
  const digest = createHash("sha256").update(body).digest("hex");
  const assetPath = `/_routed-webp/${digest}.bin`;
  await writeFile(resolve(clientRoot, assetPath.slice(1)), body);
  routedWebpAssets[publicPath] = assetPath;
  await moveOutOfPublicBuild(file, `webp/${relativePath}`);
}
if (!publicWebpFiles.length) {
  throw new Error("Expected public WebP assets; refusing an unrouted build.");
}
for (const publicPath of Object.keys(routedWebpAssets)) {
  // A synchronized checkout can recreate a public asset after the rename.
  // Remove that late copy before asserting; the finalizer and artifact
  // validator repeat this check after all build subprocesses have exited.
  await rm(resolve(clientRoot, publicPath.slice(1)), { force: true });
  try {
    await access(resolve(clientRoot, publicPath.slice(1)));
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
  }
  throw new Error(`Public WebP remained in static storage: ${publicPath}`);
}
await writeFile(
  "dist/server/public-webp-assets.js",
  `export default ${JSON.stringify(routedWebpAssets)};\n`,
);

if (!protectedMediaFiles.length) {
  throw new Error("Expected premium audio; refusing a build without protected media.");
}
for (const publicPath of protectedMediaFiles) {
  try {
    await access(resolve("dist/client", publicPath.slice(1)));
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
  }
  throw new Error(`Premium media remained public: ${publicPath}`);
}
await writeFile(
  "dist/server/private-media-assets.js",
  `export default ${JSON.stringify({
    assets: privateMediaAssets,
    key: mediaKey.toString("base64"),
  })};\n`,
);

const authRuntime = await build({
  entryPoints: ["worker/private-asset-auth.ts"],
  bundle: true,
  format: "esm",
  platform: "browser",
  write: false,
});
await writeFile(
  "dist/server/private-access-runtime.js",
  authRuntime.outputFiles[0].text,
);
await rename("dist/server/index.js", "dist/server/app-worker.js");
await writeFile(
  "dist/server/index.js",
  `import app from './app-worker.js';
import privateAssets from './private-client-assets.js';
import privateMedia from './private-media-assets.js';
import routedWebp from './public-webp-assets.js';
import {hasFullLibraryAccess} from './private-access-runtime.js';

const privateHeaders=()=>new Headers({'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});
const base64Bytes=value=>Uint8Array.from(atob(value),character=>character.charCodeAt(0));
const routedAssets=binding=>({fetch(input,init){
 const request=input instanceof Request?input:new Request(input,init);
 const url=new URL(request.url);
 const assetPath=routedWebp[url.pathname];
 if(!assetPath)return binding.fetch(input,init);
 url.pathname=assetPath;url.search='';
 return binding.fetch(new Request(url,request));
}});
let mediaKeyPromise;
const mediaKey=()=>mediaKeyPromise??=crypto.subtle.importKey('raw',base64Bytes(privateMedia.key),'AES-GCM',false,['decrypt']);
function requestedRange(value,size){
 if(!value)return undefined;
 const unit=/^([^=]+)=(.*)$/.exec(value.trim());
 if(!unit||unit[1].trim().toLowerCase()!=='bytes'||unit[2].includes(','))return undefined;
 const match=/^(\\d*)-(\\d*)$/.exec(unit[2].trim());
 if(!match||(!match[1]&&!match[2]))return undefined;
 const total=BigInt(size);
 if(!match[1]){
  const length=BigInt(match[2]);
  if(length===0n)return null;
  return {start:Number(length>=total?0n:total-length),end:size-1};
 }
 const start=BigInt(match[1]);
 if(start>=total)return null;
 const end=match[2]?BigInt(match[2]):total-1n;
 if(end<start)return null;
 return {start:Number(start),end:Number(end>=total?total-1n:end)};
}
async function servePrivateMedia(request,env,record){
 const headers=privateHeaders();
 headers.set('Accept-Ranges','bytes');
 headers.set('Content-Type',record.contentType);
 headers.set('ETag',record.etag);
 const requested=request.method==='GET'?request.headers.get('range'):null;
 const range=request.headers.get('if-range')&&request.headers.get('if-range')!==record.etag?undefined:requestedRange(requested,record.size);
 if(range===null){headers.set('Content-Range',\`bytes */\${record.size}\`);return new Response(null,{status:416,headers});}
 const start=range?.start??0,end=range?.end??record.size-1;
 headers.set('Content-Length',String(end-start+1));
 if(range)headers.set('Content-Range',\`bytes \${start}-\${end}/\${record.size}\`);
 const encryptedResponse=await env.ASSETS.fetch(new Request(new URL(record.assetPath,request.url),{method:request.method==='HEAD'?'HEAD':'GET'}));
 if(!encryptedResponse.ok)return new Response('Media unavailable',{status:502,headers:privateHeaders()});
 if(request.method==='HEAD')return new Response(null,{status:200,headers});
 try{
  const plain=new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv:base64Bytes(record.iv)},await mediaKey(),await encryptedResponse.arrayBuffer()));
  return new Response(range?plain.slice(start,end+1):plain,{status:range?206:200,headers});
 }catch{return new Response('Media unavailable',{status:502,headers:privateHeaders()});}
}
export {requestedRange as __testRequestedRange,servePrivateMedia as __testServePrivateMedia};

export default {async fetch(request,env,ctx){
 let path;try{path=decodeURIComponent(new URL(request.url).pathname)}catch{return new Response('Bad request',{status:400})}
 const media=privateMedia.assets[path];
 if(Object.hasOwn(privateAssets,path)||media){
  if(!await hasFullLibraryAccess(request,env))return new Response('Acceso restringido',{status:403,headers:privateHeaders()});
  if(request.method!=='GET'&&request.method!=='HEAD'){const headers=privateHeaders();headers.set('Allow','GET, HEAD');return new Response('Method not allowed',{status:405,headers});}
  if(media)return servePrivateMedia(request,env,media);
  return new Response(request.method==='HEAD'?null:privateAssets[path],{headers:{'Content-Type':'text/javascript; charset=utf-8','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
 }
 return app.fetch(request,{...env,ASSETS:routedAssets(env.ASSETS)},ctx);
}};
`,
);

for (const file of protectedFiles) {
  await moveOutOfPublicBuild(resolve("dist/client", file), file);
}
// Do not publish a map of internal source paths.
await moveOutOfPublicBuild(
  resolve("dist/client/.vite/manifest.json"),
  ".vite/manifest.json",
);
await writeFile(
  "dist/.openai/client-protection-report.json",
  JSON.stringify(
    {
      protectedFiles,
      protectedMediaFiles,
      encryptedMediaFiles: Object.values(privateMediaAssets).map(
        (record) => record.assetPath,
      ),
      routedWebpFiles: Object.keys(routedWebpAssets),
      routedWebpAssets: Object.values(routedWebpAssets),
      publicFiles: [...publicFiles],
      publicMediaFiles,
    },
    null,
    2,
  ),
);
await rm(quarantineRoot, { recursive: true, force: true });
console.log(
  `Protected ${protectedFiles.length} private client modules and ${protectedMediaFiles.length} premium media files; public samples retained.`,
);
