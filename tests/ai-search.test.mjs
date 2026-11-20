import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {llmsTxt,LLMS_PATH,LLMS_PRICE} from "./app/llms.ts"; export {guiaRespuestas} from "./app/material-ele/guia-respuestas.ts"; export {guiaPages} from "./app/material-ele/guias.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isBlockedCrawlerAgent,AI_SEARCH_AGENTS} from "./app/crawler-policy.ts"; export {isSearchPrivatePath} from "./app/seo.ts";',resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('llms.txt follows the convention and only links open pages that exist in the sitemap',()=>{
 const text=m.llmsTxt();
 assert.match(text,/^# SpanishCue\n\n> /);
 assert.ok(text.length<20000,'short enough to be read whole');
 const urls=[...text.matchAll(/\]\((https:\/\/spanishcue\.com[^)]*)\)/g)].map(x=>x[1]);
 assert.ok(urls.length>=25);
 const known=new Set(m.sitemap().map(x=>x.url.replace(/\/$/,'')));
 for(const url of urls){
  const path=new URL(url).pathname;
  assert.equal(m.isSearchPrivatePath(path),false,url);
  if(path==='/material-ele/feed.xml')continue;
  assert.ok(known.has(url.replace(/\/$/,''))||known.has(url),`${url} is not in the sitemap`);
 }
 for(const g of m.guiaPages)assert.ok(text.includes(`https://spanishcue.com${g.path}`),g.slug);
 assert.doesNotMatch(text,/testimoni|mejor plataforma|n\.º 1|número uno/i,'facts only, no self-praise');
 assert.equal(m.isSearchPrivatePath(m.LLMS_PATH),false);
 assert.ok(readFileSync('app/material-ele/components.tsx','utf8').includes(`PRICE_LABEL = "${m.LLMS_PRICE}"`),'llms.txt price matches the site price');
});

test('every long guide opens with a short quotable answer and steps',()=>{
 for(const g of m.guiaPages){
  const a=m.guiaRespuestas[g.slug];
  assert.ok(a,`${g.slug} has no short answer`);
  const words=a.answer.split(/\s+/).length;
  assert.ok(words>=25&&words<=70,`${g.slug} answer has ${words} words`);
  assert.ok(a.steps.length>=3&&a.steps.length<=4,g.slug);
  assert.doesNotMatch(a.answer+a.steps.join(' '),/\bA0\b|\d+ ?€|\$\d/);
 }
 for(const slug of Object.keys(m.guiaRespuestas))assert.ok(m.guiaPages.some(g=>g.slug===slug),`${slug} is not a guide`);
 const page=readFileSync('app/material-ele/guia/[articulo]/page.tsx','utf8');
 assert.ok(page.indexOf('en-pocas-palabras')<page.indexOf('page.sections.map'),'the answer comes before the prose');
});

test('AI search agents stay allowed and Bing ownership stays verifiable',()=>{
 for(const agent of ['Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot','Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)','Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)'])assert.equal(m.isBlockedCrawlerAgent(agent),false,agent);
 assert.equal(m.isBlockedCrawlerAgent('Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)'),true,'training crawler stays blocked');
 const code=readFileSync('public/BingSiteAuth.xml','utf8').match(/<user>([0-9A-F]{32})<\/user>/)?.[1];
 assert.ok(code);
 assert.ok(readFileSync('app/layout.tsx','utf8').includes(`"msvalidate.01": "${code}"`));
});

test('the «clases listas para dar» answer page is indexed, Spanish-first and listed for AI assistants',async()=>{
 const {build}=await import('esbuild');
 const r2=await build({stdin:{contents:'export {isEdgeCacheablePath,isEnglishDefaultPath,isSearchPrivatePath} from "./app/seo.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {llmsTxt} from "./app/llms.ts";',resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node'});
 const s=await import('data:text/javascript;base64,'+Buffer.from(r2.outputFiles[0].text).toString('base64'));
 const path='/clases-de-espanol-listas-para-dar';
 assert.ok(s.sitemap().some(x=>x.url==='https://spanishcue.com'+path));
 assert.ok(s.llmsTxt().includes('https://spanishcue.com'+path));
 assert.equal(s.isEdgeCacheablePath(path),true);assert.equal(s.isEnglishDefaultPath(path),false);assert.equal(s.isSearchPrivatePath(path),false);
 const page=readFileSync('app/clases-de-espanol-listas-para-dar/page.tsx','utf8');
 assert.ok(page.indexOf('en-pocas-palabras')<page.indexOf('lado a lado'),'short answer first');
 assert.doesNotMatch(page,/\d+ ?€|US?\$\d|\$\d/,'no hand-typed prices; PRICE_LABEL only');
 assert.match(page,/const CHECKED = "/,'facts about other sites carry their check date');
});
