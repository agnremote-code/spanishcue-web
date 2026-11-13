import assert from 'node:assert/strict';
import test from 'node:test';
const origin=process.env.CHESPANISH_TEST_ORIGIN || 'http://127.0.0.1:8787';
const get=(path,init={})=>fetch(origin+path,{redirect:'manual',...init});

test('repeated slashes redirect to the canonical path before access checks',async()=>{
 for(const [path,target] of [['/api//admin/billing','/api/admin/billing'],['/api/admin//teachers','/api/admin/teachers'],['/autoestudio/a1//semana-3','/autoestudio/a1/semana-3'],['//gramatica/clase-inicial','/gramatica/clase-inicial'],['/noche-abierta//','/noche-abierta']]){
  const response=await get(path);await response.arrayBuffer();
  assert.equal(response.status,308,path);
  assert.equal(new URL(response.headers.get('location')).pathname,target,path);
 }
});

test('owner data and premium bodies stay closed to anonymous visitors',async()=>{
 for(const path of ['/api/admin/billing','/api/admin/teachers','/api/admin/export','/api/settings']){
  const response=await get(path);assert.equal(response.status,403,path);
  assert.doesNotMatch(await response.text(),/totalUsers|activePro/,path);
 }
 for(const path of ['/autoestudio/a1/semana-3','/autoestudio/a1/semana-3.rsc','/gramatica/genero-de-sustantivos','/gramatica/genero-de-sustantivos.rsc','/noche-abierta','/hospital-san-casi-vivo','/marketing-de-casinos']){
  const response=await get(path);await response.arrayBuffer();
  assert.equal(response.status,302,path);assert.match(response.headers.get('location'),path==='/autoestudio/a1/semana-3'?/\/autoestudio\/claim\?semana=/:/\/acceso\?returnTo=/,path);
 }
});

test('public SEO pages and free samples still render for anonymous visitors',async()=>{
 for(const path of ['/','/spanish-grammar-lessons','/resources','/para-profesores','/aprender-espanol','/demo/noche-abierta','/demo/hospital-san-casi-vivo','/gramatica/clase-inicial','/autoestudio','/autoestudio/a1/semana-1','/la-fabrica-de-los-nombres','/sitemap.xml','/robots.txt']){
  const response=await get(path);await response.arrayBuffer();assert.equal(response.status,200,path);
 }
});

test('AI crawlers and scraping tools are refused; search engines and visitors are served',async()=>{
 const as=(path,agent)=>get(path,{headers:{'user-agent':agent}});
 const googlebot='Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
 const bingbot='Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)';
 const chrome='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
 for(const agent of [googlebot,bingbot,chrome])for(const path of ['/','/material-ele','/material-ele/fichas','/material-ele/guia/como-ensenar-gustar','/spanish-grammar-lessons','/gramatica/clase-inicial','/demo/noche-abierta','/sitemap.xml']){
  const response=await as(path,agent);await response.arrayBuffer();assert.equal(response.status,200,`${agent} ${path}`);
 }
 for(const agent of ['Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)','Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)','Mozilla/5.0 (compatible; PerplexityBot/1.0)','Mozilla/5.0 (compatible; Bytespider)','CCBot/2.0 (https://commoncrawl.org/faq/)']){
  for(const path of ['/','/material-ele','/material-ele/fichas','/gramatica/clase-inicial','/demo/noche-abierta','/material-ele.rsc']){
   const response=await as(path,agent);assert.equal(response.status,403,`${agent} ${path}`);
   assert.doesNotMatch(await response.text(),/<html/i,path);
  }
  const robots=await as('/robots.txt',agent);assert.equal(robots.status,200);await robots.arrayBuffer();
 }
 for(const agent of ['python-requests/2.32.3','curl/8.5.0','Scrapy/2.11.2 (+https://scrapy.org)']){
  const page=await as('/material-ele/fichas',agent);await page.arrayBuffer();assert.equal(page.status,403,agent);
  for(const path of ['/','/sitemap.xml','/robots.txt']){const open=await as(path,agent);await open.arrayBuffer();assert.equal(open.status,200,`${agent} ${path}`);}
 }
});

test('robots.txt keeps search engines in and names the AI crawlers',async()=>{
 const text=await (await get('/robots.txt')).text();
 for(const token of ['GPTBot','ChatGPT-User','ClaudeBot','PerplexityBot','CCBot','Bytespider','Google-Extended','Applebot-Extended'])assert.match(text,new RegExp(`User-Agent: ${token}\\b`,'i'),token);
 assert.doesNotMatch(text,/User-Agent: (Googlebot|bingbot|Applebot|DuckDuckBot)\s/i);
 assert.match(text,/User-Agent: \*\s+Allow: \//i);
 assert.match(text,/Sitemap: https:\/\/spanishcue\.com\/sitemap\.xml/i);
});
