#!/usr/bin/env node
/**
 * IndexNow: tell Bing, DuckDuckGo, Yandex, Seznam and Naver which public URLs
 * are new (or changed) right after a production deploy. Google ignores
 * IndexNow; it keeps crawling the sitemap. The key is public by design: the
 * engines verify it by fetching https://spanishcue.com/<key>.txt.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs --before before.xml [--after https://spanishcue.com/sitemap.xml]
 *   node scripts/indexnow-ping.mjs --all                 # resubmit every sitemap URL (manual use)
 *
 * --before: the sitemap captured before the deploy; only URLs absent from it are
 * submitted, so unchanged pages are never resubmitted on every deploy.
 */
import { readFileSync } from 'node:fs';

export const INDEXNOW_KEY = '644c3f7ecabe04d2135933a3118a3bb3';
export const INDEXNOW_HOST = 'spanishcue.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

export function sitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(m => m[1]).filter(u => u.startsWith(`https://${INDEXNOW_HOST}/`));
}

export function newUrls(beforeXml, afterXml) {
  const before = new Set(sitemapUrls(beforeXml));
  return sitemapUrls(afterXml).filter(u => !before.has(u));
}

async function main() {
  const args = process.argv.slice(2);
  const opt = name => { const i = args.indexOf(name); return i === -1 ? undefined : args[i + 1]; };
  const after = opt('--after') ?? `https://${INDEXNOW_HOST}/sitemap.xml`;
  const afterXml = await (await fetch(after)).text();
  const urls = args.includes('--all') ? sitemapUrls(afterXml) : newUrls(opt('--before') ? readFileSync(opt('--before'), 'utf8') : '', afterXml);
  if (!urls.length) { console.log('IndexNow: no new URLs to submit.'); return; }
  const body = { host: INDEXNOW_HOST, key: INDEXNOW_KEY, keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`, urlList: urls.slice(0, 10000) };
  const response = await fetch(ENDPOINT, { method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
  console.log(`IndexNow: submitted ${body.urlList.length} URLs, HTTP ${response.status}`);
  for (const url of body.urlList.slice(0, 50)) console.log(`  ${url}`);
  if (response.status >= 400) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) await main();
