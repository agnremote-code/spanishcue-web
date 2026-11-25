import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

test('the embeddable conjugator can be framed, is script-free and links back',async()=>{
 const response=await fetch(origin+'/embed/conjugador?v=hacer');
 assert.equal(response.status,200);
 assert.equal(response.headers.get('x-frame-options'),null);
 assert.match(response.headers.get('content-security-policy')||'',/frame-ancestors \*/);
 assert.match(response.headers.get('content-security-policy')||'',/default-src 'none'/);
 assert.ok(!response.headers.has('set-cookie'));
 assert.match(response.headers.get('x-robots-tag')||'',/noindex/);
 const d=new JSDOM(await response.text()).window.document;
 assert.equal(d.querySelectorAll('script').length,0);
 assert.equal(d.querySelector('h1').textContent,'Conjugación de hacer');
 assert.ok([...d.querySelectorAll('td.i')].some(td=>td.textContent==='hice'));
 assert.ok(d.querySelector('a[href="https://spanishcue.com/conjugacion/hacer"]'));
 const unknown=new JSDOM(await (await fetch(origin+'/embed/conjugador?v=%3Cscript%3E')).text()).window.document;
 assert.equal(unknown.querySelectorAll('script').length,0);
});
test('every other page stays unframeable',async()=>{
 for(const path of ['/','/conjugacion/tener','/material-ele/conjugador-para-tu-web'])assert.equal((await fetch(origin+path)).headers.get('x-frame-options'),'DENY',path);
});
test('the embed landing page explains and offers the code',async()=>{
 const response=await fetch(origin+'/material-ele/conjugador-para-tu-web');assert.equal(response.status,200);
 const d=new JSDOM(await response.text()).window.document;
 assert.ok(d.querySelector('iframe[src="/embed/conjugador?v=tener"]'));
 assert.match(d.querySelector('textarea').value,/https:\/\/spanishcue\.com\/conjugacion/);
});
