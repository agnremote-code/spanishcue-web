#!/usr/bin/env node
// The curriculum's existing enumerator and audioKey remain the only source of truth.
import { build } from 'esbuild';
const compiled=await build({stdin:{contents:"export {modulesByLevel} from './app/autoestudio/curriculum/course'; export {moduleClips} from './app/autoestudio/curriculum/audio-clips'; export {isFreeAutoestudioModule,modulePath} from './app/autoestudio/access';",resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',logLevel:'error'});
const {modulesByLevel,moduleClips,isFreeAutoestudioModule,modulePath}=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const unique=new Map();
const access={};
for(const module of Object.values(modulesByLevel).flat())for(const clip of moduleClips(module)){
 const record=access[clip.key]??={levels:[],free:false};
 if(!record.levels.includes(module.level))record.levels.push(module.level);
 record.free ||= isFreeAutoestudioModule(modulePath(module.level,module.week));
 const previous=unique.get(clip.key);
 const normalize=c=>JSON.stringify([c.text.normalize('NFC').trim(),c.voice??'es-MX-f']);
 if(previous&&normalize(previous)!==normalize(clip))throw new Error(`Audio key collision: ${clip.key}`);
 if(!previous)unique.set(clip.key,clip);
}
console.log(JSON.stringify(process.argv.includes('--access')?Object.fromEntries(Object.entries(access).sort(([a],[b])=>a.localeCompare(b))):[...unique.values()].sort((a,b)=>a.key.localeCompare(b.key))));
