import assert from 'node:assert/strict';
import test from 'node:test';
import {existsSync,readFileSync} from 'node:fs';
import {INDEXNOW_KEY,INDEXNOW_HOST,changedUrls,newUrls,removedUrls,sitemapUrls} from '../scripts/indexnow-ping.mjs';
test('the IndexNow key file is published at the site root and matches the script',()=>{
 assert.match(INDEXNOW_KEY,/^[a-f0-9]{32}$/);assert.equal(INDEXNOW_HOST,'spanishcue.com');
 const file=`public/${INDEXNOW_KEY}.txt`;assert.ok(existsSync(file),file);assert.equal(readFileSync(file,'utf8').trim(),INDEXNOW_KEY);
});
test('only URLs absent from the previous sitemap are submitted',()=>{
 const before='<urlset><url><loc>https://spanishcue.com/</loc></url><url><loc>https://spanishcue.com/a</loc></url></urlset>';
 const after='<urlset><url><loc>https://spanishcue.com/</loc></url><url><loc>https://spanishcue.com/a</loc></url><url><loc> https://spanishcue.com/b </loc></url><url><loc>https://other.example/x</loc></url></urlset>';
 assert.deepEqual(sitemapUrls(after),['https://spanishcue.com/','https://spanishcue.com/a','https://spanishcue.com/b']);
 assert.deepEqual(newUrls(before,after),['https://spanishcue.com/b']);
 assert.deepEqual(newUrls('',before),['https://spanishcue.com/','https://spanishcue.com/a']);
});
test('URLs that left the sitemap (301 or noindex) are submitted once, so engines see the change',()=>{
 const before='<urlset><url><loc>https://spanishcue.com/</loc></url><url><loc>https://spanishcue.com/old</loc></url></urlset>';
 const after='<urlset><url><loc>https://spanishcue.com/</loc></url><url><loc>https://spanishcue.com/new</loc></url></urlset>';
 assert.deepEqual(removedUrls(before,after),['https://spanishcue.com/old']);
 assert.deepEqual(changedUrls(before,after),['https://spanishcue.com/new','https://spanishcue.com/old']);
 assert.deepEqual(removedUrls('',after),[],'a failed capture of the previous sitemap submits no removals');
 assert.deepEqual(changedUrls(after,after),[]);
});
