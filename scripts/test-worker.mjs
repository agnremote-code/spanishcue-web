import { spawn } from 'node:child_process';
import { mkdtemp,rm,readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const state=await mkdtemp(join(tmpdir(),'chespanish-test-'));
const cli='node_modules/wrangler/bin/wrangler.js';
const config='dist/server/wrangler.json';
let server;
const run=(args,env=process.env)=>new Promise((resolve,reject)=>{const child=spawn(process.execPath,args,{env,stdio:'inherit'});child.once('error',reject);child.once('exit',code=>code===0?resolve():reject(new Error(`Test command exited ${code}`)))});
try{
 for(const migration of (await readdir('drizzle')).filter(f=>f.endsWith('.sql')).sort())await run([cli,'d1','execute','site-creator-d1','--local','--config',config,'--persist-to',state,'--file',`drizzle/${migration}`]);
 server=spawn(process.execPath,[cli,'dev','--config',config,'--port','0','--ip','127.0.0.1','--local','--persist-to',state],{env:{...process.env,WRANGLER_SEND_METRICS:'false'},stdio:['ignore','pipe','pipe']});
 const origin=await new Promise((resolve,reject)=>{let output='';const timer=setTimeout(()=>reject(new Error('Worker startup timed out')),30000);function read(chunk){output+=chunk.toString();const m=output.match(/Ready on (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(timer);resolve(m[1])}}server.stdout.on('data',read);server.stderr.on('data',read);server.once('error',reject);server.once('exit',code=>{clearTimeout(timer);reject(new Error(`Worker exited ${code}: ${output.slice(-1200)}`))})});
 await run(['--test','tests/teacher-access.test.mjs','tests/library-filters.test.mjs','tests/rendered-html.test.mjs'],{...process.env,CHESPANISH_TEST_ORIGIN:origin});
}finally{if(server&&server.exitCode===null){server.kill('SIGTERM');await new Promise(resolve=>{server.once('exit',resolve);setTimeout(()=>{server.kill('SIGKILL');resolve()},3000).unref()})}await rm(state,{recursive:true,force:true})}
