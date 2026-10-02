import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
const built=await build({stdin:{contents:"export * from './worker/autoestudio-access';",resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',write:false,logLevel:'silent'});
const boundary=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const session={passId:'a'.repeat(48),learnerId:'b'.repeat(48),level:'a2',alias:'雪 Luna',revision:1};
test('Worker removes forged pass headers even with no valid session',()=>{
 const headers=new Headers({'x-autoestudio-level':'c2','x-autoestudio-pass-id':'forged','x-autoestudio-alias':'admin','x-autoestudio-extra':'forged'});
 boundary.applyShareHeaders(headers,null);assert.equal([...headers.keys()].filter(k=>k.startsWith('x-autoestudio-')).length,0);
});
test('Worker records trusted unicode display identity without broadening library access',()=>{
 const headers=new Headers();boundary.applyShareHeaders(headers,session);assert.equal(headers.get('x-autoestudio-level'),'a2');assert.equal(decodeURIComponent(headers.get('x-autoestudio-alias')),'雪 Luna');assert.equal(headers.get('x-chespanish-access-level'),null);
});
test('assigned level authorizes matching module HTML and RSC only',()=>{
 for(const path of ['/autoestudio/a2/semana-3','/autoestudio/a2/semana-3.rsc','/autoestudio/a2/semana-20/'])assert.equal(boundary.shareAllowsPath(path,session),true,path);
 for(const path of ['/autoestudio/b1/semana-3','/autoestudio/b1/semana-3.rsc','/cuenta','/admin','/api/students','/clase/30','/autoestudio/a2/semana-21','/autoestudio/a2/semana-0'])assert.equal(boundary.shareAllowsPath(path,session),false,path);
 assert.equal(boundary.shareAllowsPath('/autoestudio/a2/semana-3',null),false);
});
