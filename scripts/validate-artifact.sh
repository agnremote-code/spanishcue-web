#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"
protection="${SITES_PROJECT_ROOT}/dist/.openai/client-protection-report.json"
client_root="${SITES_PROJECT_ROOT}/dist/client"

[[ -f "${worker}" ]] || {
  echo "Missing Sites Worker entry: dist/server/index.js" >&2
  exit 66
}
[[ -f "${hosting}" ]] || {
  echo "Missing packaged Sites manifest: dist/.openai/hosting.json" >&2
  exit 66
}
[[ -f "${protection}" ]] || {
  echo "Missing client protection report" >&2
  exit 66
}

node --import "${script_dir}/worker-shape-loader.mjs" --input-type=module - "${worker}" "${hosting}" "${protection}" "${client_root}" <<'NODE'
import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath, protectionPath, clientRoot] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));
const report=JSON.parse(await readFile(protectionPath,"utf8"));
if(!report.protectedFiles?.length||!report.protectedMediaFiles?.length){
  throw new Error("Expected protected code and premium media in the build report");
}
if(report.encryptedMediaFiles?.length!==report.protectedMediaFiles.length){
  throw new Error("Each premium media file must have one encrypted asset");
}
for(const assetPath of report.protectedFiles){
  try{await access(resolve(clientRoot,assetPath));throw new Error(`Private client chunk remained public: ${assetPath}`)}
  catch(error){if(error?.code!=="ENOENT")throw error}
}
for(const publicPath of report.protectedMediaFiles){
  try{await access(clientRoot+publicPath);throw new Error(`Premium media remained public: ${publicPath}`)}
  catch(error){if(error?.code!=="ENOENT")throw error}
}
for(const publicPath of report.publicMediaFiles??[])await access(clientRoot+publicPath);
for(const assetPath of report.encryptedMediaFiles)await access(clientRoot+assetPath);

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("sites-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/server/index.js must have an ESM default export with fetch(request, env, ctx)");
}
if(typeof worker.__testServePrivateMedia!=="function"){
  throw new Error("Private media runtime validation hook is missing");
}
const mediaModule=await import(pathToFileURL(resolve(dirname(workerPath),"private-media-assets.js")).href);
const webpModule=await import(pathToFileURL(resolve(dirname(workerPath),"public-webp-assets.js")).href);
if(!Object.keys(webpModule.default).length)throw new Error("Public WebP routing manifest is empty");
if(Object.keys(webpModule.default).length!==report.routedWebpFiles?.length){
  throw new Error("Public WebP routing report does not match its manifest");
}
for(const [publicPath,assetPath] of Object.entries(webpModule.default)){
  try{await access(clientRoot+publicPath);throw new Error(`Public WebP remained static: ${publicPath}`)}
  catch(error){if(error?.code!=="ENOENT")throw error}
  await access(clientRoot+assetPath);
}
const [publicPath,record]=Object.entries(mediaModule.default.assets)[0]??[];
if(!publicPath||!record)throw new Error("Private media manifest is empty");
const mockEnv={ASSETS:{fetch:async(request)=>{
  try{return new Response(await readFile(clientRoot+new URL(request.url).pathname))}
  catch{return new Response(null,{status:404})}
}}};
const range=await worker.__testServePrivateMedia(new Request(`https://spanishcue.test${publicPath}`,{headers:{Range:"bytes=0-31"}}),mockEnv,record);
if(range.status!==206||range.headers.get("content-range")!==`bytes 0-31/${record.size}`){
  throw new Error("Private media byte-range response is invalid");
}
const expected=await readFile(resolve(clientRoot,"../..",`public${publicPath}`));
const actual=Buffer.from(await range.arrayBuffer());
if(actual.length!==32||!actual.equals(expected.subarray(0,32))){
  throw new Error("Private media decryption did not reproduce the source bytes");
}
const head=await worker.__testServePrivateMedia(new Request(`https://spanishcue.test${publicPath}`,{method:"HEAD"}),mockEnv,record);
if(head.status!==200||head.headers.get("content-length")!==String(record.size)){
  throw new Error("Private media HEAD response is invalid");
}
const headWithRange=await worker.__testServePrivateMedia(new Request(`https://spanishcue.test${publicPath}`,{method:"HEAD",headers:{Range:"bytes=0-31"}}),mockEnv,record);
if(headWithRange.status!==200||headWithRange.headers.has("content-range")||headWithRange.headers.get("content-length")!==String(record.size)){
  throw new Error("Private media HEAD must ignore Range");
}
const staleRange=await worker.__testServePrivateMedia(new Request(`https://spanishcue.test${publicPath}`,{headers:{Range:"bytes=0-31","If-Range":"\"stale\""}}),mockEnv,record);
if(staleRange.status!==200||staleRange.headers.has("content-range")||Buffer.from(await staleRange.arrayBuffer()).length!==record.size){
  throw new Error("Private media must ignore a stale If-Range request");
}
const unknownRange=await worker.__testServePrivateMedia(new Request(`https://spanishcue.test${publicPath}`,{headers:{Range:"items=0-1"}}),mockEnv,record);
if(unknownRange.status!==200||unknownRange.headers.has("content-range")){
  throw new Error("Private media must ignore unknown range units");
}
NODE

echo "Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present."
