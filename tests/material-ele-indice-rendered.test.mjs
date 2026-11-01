import assert from 'node:assert/strict';
import test from 'node:test';
import {JSDOM} from 'jsdom';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';

test('the full Material ELE index is an indexable HTML list of every page',async()=>{
 const response=await fetch(origin+'/material-ele/indice');assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 assert.equal(d.documentElement.lang,'es');assert.equal(d.querySelectorAll('h1').length,1);
 assert.equal(d.querySelector('link[rel="canonical"]').href,'https://spanishcue.com/material-ele/indice');
 assert.equal(d.querySelector('link[rel="alternate"][type="application/atom+xml"]')?.href,'https://spanishcue.com/material-ele/feed.xml');
 assert.doesNotMatch(d.querySelector('meta[name="robots"]')?.content||'',/noindex/);
 const links=new Set([...d.querySelectorAll('main a[href^="/material-ele/"]')].map(a=>a.getAttribute('href')));
 assert.ok(links.size>=500,`only ${links.size} links`);
 for(const p of ['/material-ele/gramatica/presente-de-indicativo','/material-ele/gramatica/presente-de-indicativo/a1','/material-ele/vocabulario/comida-y-restaurante/a2','/material-ele/actividades','/material-ele/preguntas/b1'])assert.ok(links.has(p),p);
 dom.window.close();
});

test('the Atom feed is served as XML for anonymous visitors',async()=>{
 const response=await fetch(origin+'/material-ele/feed.xml');assert.equal(response.status,200);
 assert.match(response.headers.get('content-type'),/application\/atom\+xml/);
 const xml=await response.text();
 assert.ok(xml.startsWith('<?xml'));assert.ok((xml.match(/<entry>/g)||[]).length>=500);
 assert.match(xml,/<id>https:\/\/spanishcue.com\/material-ele\/gramatica\/presente-de-indicativo\/a1<\/id>/);
});

test('the home page links every Material ELE topic for visitors without PRO',async()=>{
 const response=await fetch(origin+'/');assert.equal(response.status,200);
 const dom=new JSDOM(await response.text());const d=dom.window.document;
 const section=d.querySelector('#material-ele');assert.ok(section,'home index section');
 const links=new Set([...section.querySelectorAll('a[href^="/material-ele/"]')].map(a=>a.getAttribute('href')));
 assert.ok(links.size>=100,`only ${links.size} links`);
 for(const p of ['/material-ele/gramatica','/material-ele/gramatica/presente-de-indicativo','/material-ele/cultura/argentina','/material-ele/indice','/material-ele/actividades','/material-ele/a1'])assert.ok(links.has(p),p);
 dom.window.close();
});
