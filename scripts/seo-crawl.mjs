// Crawls the locally built Worker (the repository is the source of truth) from
// its sitemap and writes one JSON line per URL: status, title, description, h1,
// canonical, robots, internal links and the visible text of <main>.
// Usage: npm run build && node scripts/seo-crawl.mjs <out.jsonl> [paths.txt]
// With paths.txt (one path per line) it crawls only those paths, e.g. URLs that
// Search Console reports but the sitemap no longer lists.
import { spawn } from 'node:child_process';
import { mkdtemp, rm, readdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve as resolvePath } from 'node:path';
import { JSDOM } from 'jsdom';
const out = process.argv[2] || 'crawl.jsonl';
const state = await mkdtemp(join(tmpdir(), 'spanishcue-crawl-'));
const cli = 'node_modules/wrangler/bin/wrangler.js';
const config = 'dist/server/wrangler.json';
const env = { ...process.env, NODE_OPTIONS: [process.env.NODE_OPTIONS, `--require ${resolvePath('scripts/network-interfaces-shim.cjs')}`].filter(Boolean).join(' '), WRANGLER_SEND_METRICS: 'false' };
const run = (args) => new Promise((ok, ko) => { const c = spawn(process.execPath, args, { env, stdio: 'ignore' }); c.once('exit', (code) => code === 0 ? ok() : ko(new Error(`exit ${code}`))); });
let server;
try {
  for (const m of (await readdir('drizzle')).filter((f) => f.endsWith('.sql')).sort()) await run([cli, 'd1', 'execute', 'site-creator-d1', '--local', '--config', config, '--persist-to', state, '--file', `drizzle/${m}`]);
  server = spawn(process.execPath, [cli, 'dev', '--config', config, '--port', '0', '--ip', '127.0.0.1', '--local', '--persist-to', state], { env, stdio: ['ignore', 'pipe', 'pipe'] });
  const origin = await new Promise((ok, ko) => { let o = ''; const t = setTimeout(() => ko(new Error(o.slice(-2000))), 60000); const read = (c) => { o += c; const m = o.match(/Ready on (http:\/\/127\.0\.0\.1:\d+)/); if (m) { clearTimeout(t); ok(m[1]); } }; server.stdout.on('data', read); server.stderr.on('data', read); });
  let paths;
  if (process.argv[3]) {
    paths = [...new Set((await readFile(process.argv[3], 'utf8')).split('\n').map((l) => l.trim()).filter(Boolean))];
  } else {
    const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    paths = [...new Set(['/', ...urls.map((u) => new URL(u).pathname + new URL(u).search)])];
  }
  console.error(`${paths.length} URLs`);
  const lines = [];
  let i = 0;
  async function worker() {
    while (i < paths.length) {
      const path = paths[i++];
      let rec = { path };
      try {
        const res = await fetch(origin + path, { redirect: 'manual', headers: { 'user-agent': 'SpanishCueAudit/1.0' } });
        rec.status = res.status;
        if (res.status >= 300 && res.status < 400) rec.location = res.headers.get('location');
        rec.xRobots = res.headers.get('x-robots-tag');
        if (res.status === 200 && (res.headers.get('content-type') || '').includes('html')) {
          const d = new JSDOM(await res.text()).window.document;
          const meta = (n) => d.querySelector(`meta[name="${n}"]`)?.getAttribute('content') ?? null;
          rec.title = d.title;
          rec.description = meta('description');
          rec.robots = meta('robots');
          rec.canonical = d.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;
          rec.h1 = [...d.querySelectorAll('h1')].map((h) => h.textContent.trim());
          rec.links = [...new Set([...d.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')).filter((h) => h.startsWith('/') && !h.startsWith('//')).map((h) => h.split('#')[0]).filter(Boolean))];
          const main = d.querySelector('main') || d.body;
          for (const el of main.querySelectorAll('script,style,noscript,svg')) el.remove();
          rec.text = main.textContent.replace(/\s+/g, ' ').trim();
          rec.schema = [...d.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { const j = JSON.parse(s.textContent); return j['@type'] || (j['@graph'] ? j['@graph'].map((g) => g['@type']).join('+') : ''); } catch { return 'invalid'; } });
        }
      } catch (e) { rec.error = String(e); }
      lines.push(JSON.stringify(rec));
      if (lines.length % 200 === 0) console.error(lines.length);
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  await writeFile(out, lines.join('\n') + '\n');
} finally {
  if (server && server.exitCode === null) server.kill('SIGTERM');
  await rm(state, { recursive: true, force: true });
}
