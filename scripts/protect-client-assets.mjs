/** Remove paid-only client code from public assets and serve it through the owner gate.
 * Free roots are explicit; follow static dependencies only, not the framework's lazy registry.
 */
import { readFile,writeFile,rename,unlink } from 'node:fs/promises';
import { build } from 'esbuild';
import { resolve } from 'node:path';
const root=process.cwd();
const built=await build({stdin:{contents:'export {lessons} from "./app/lesson-catalog"; export {isFreeLesson,ownerFromHeaders} from "./app/access-policy";',resolveDir:root},bundle:true,format:'esm',platform:'node',write:false});
const policy=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const manifest=JSON.parse(await readFile('dist/client/.vite/manifest.json','utf8'));
const publicRoots=new Set(['app/Library.tsx','app/grammar-worlds/GrammarWorld.tsx','app/conversation-worlds/ConversationWorld.tsx','virtual:vinext-app-browser-entry',...Object.keys(manifest).filter(k=>k.startsWith('node_modules/'))]);
for(const l of policy.lessons)if(policy.isFreeLesson(l.id)&&l.path?.startsWith('/'))publicRoots.add(`app${l.path}/page.tsx`);
const publicFiles=new Set(),visited=new Set();
function visit(key){if(visited.has(key))return;visited.add(key);const item=manifest[key];if(!item)return;publicFiles.add(item.file);for(const css of item.css??[])publicFiles.add(css);for(const dep of item.imports??[])visit(dep)}
for(const k of publicRoots)visit(k);
const protectedFiles=[...new Set(Object.values(manifest).map(v=>v.file).filter(file=>file.endsWith('.js')&&!publicFiles.has(file)))];
if(!protectedFiles.length)throw new Error('Expected private client chunks; refusing an unprotected build.');
const assets={};
for(const file of protectedFiles)assets['/'+file]=await readFile(resolve('dist/client',file),'utf8');
await writeFile('dist/server/private-client-assets.js','export default '+JSON.stringify(assets)+';\n');
await rename('dist/server/index.js','dist/server/app-worker.js');
await writeFile('dist/server/index.js',`import app from './app-worker.js';
import privateAssets from './private-client-assets.js';
const isOwner=${policy.ownerFromHeaders.toString()};
export default {async fetch(request,env,ctx){
 let path;try{path=decodeURIComponent(new URL(request.url).pathname)}catch{return new Response('Bad request',{status:400})}
 if(Object.hasOwn(privateAssets,path)){
  if(!isOwner(request.headers))return new Response('Acceso restringido',{status:403,headers:{'Cache-Control':'private, no-store'}});
  if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405});
  return new Response(request.method==='HEAD'?null:privateAssets[path],{headers:{'Content-Type':'text/javascript; charset=utf-8','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
 }
 return app.fetch(request,env,ctx);
}};\n`);
for(const file of protectedFiles)await unlink(resolve('dist/client',file));
// Do not publish a map of internal source paths.
await unlink('dist/client/.vite/manifest.json');
await writeFile('dist/.openai/client-protection-report.json',JSON.stringify({protectedFiles,publicFiles:[...publicFiles]},null,2));
console.log(`Protected ${protectedFiles.length} private client modules; public sample modules retained.`);
