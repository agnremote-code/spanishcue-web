import test from 'node:test'; import assert from 'node:assert/strict'; import {selectNews} from '../app/news-selector.mjs';
test('news uses metadata with real preview and route, ordered by addition date',()=>{
 const item=(id,addedAt,featured=true)=>({id,news:{addedAt,featured},image:'/preview.webp',href:'/lesson-'+id});
 assert.deepEqual(selectNews([item(999,'2026-01-01',false),item(2,'2026-10-02'),item(3,'2026-09-30'),{id:888}, {...item(4,'2026-10-03'),href:'https://evil.test'}]).map(l=>l.id),[2,3]);
});
