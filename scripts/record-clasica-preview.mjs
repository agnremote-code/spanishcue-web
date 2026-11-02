// Records the hover preview of a classic conversation class (public/conversation-previews/<id>.mp4):
// a static copy of the ClassicConversation markup with clasica.css and the class's real content,
// five states screenshotted and cross-faded by ffmpeg. Usage: node scripts/record-clasica-preview.mjs [slug]
import { createRequire } from 'node:module';
import { readFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
const repo = process.cwd();
const { chromium } = createRequire(repo + '/package.json')('playwright');
const { CLASES } = await import(pathToFileURL(repo + '/app/conversacion-clasica/clases.mjs').href);
const css = readFileSync(repo + '/app/conversacion-clasica/clasica.css', 'utf8');
const only = process.argv[2];
const browser = await chromium.launch();
for (const c of CLASES.filter(c => !only || c.slug === only)) {
  const page_tsx = readFileSync(`${repo}/app/${c.slug}/page.tsx`, 'utf8');
  const accent = page_tsx.match(/accent:\s*'([^']+)'/)[1];
  const content = {};
  for (const l of ['A0','B1']) content[l] = (await import(pathToFileURL(`${repo}/app/${c.slug}/content/${l.toLowerCase()}.mjs`).href)).default;
  const img = 'data:image/webp;base64,' + readFileSync(`${repo}/public/conversation-classics/${c.slug}.webp`).toString('base64');
  const mascot = 'data:image/webp;base64,' + readFileSync(`${repo}/public/brand/mascot/pointing.webp`).toString('base64');
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0}${css}</style></head><body><div id="r"></div></body></html>`);
  const render = (state) => page.evaluate(({ state, content, c, accent, img, mascot }) => {
    const es = v => typeof v === 'string' ? v : v.es; const en = v => typeof v === 'string' ? null : v.en;
    const T = (v, tag = 'span', cls = '') => `<${tag} class="${cls}">${es(v)}${en(v) ? `<small class="cc-en">${en(v)}</small>` : ''}</${tag}>`;
    const L = content[state.level]; const cat = L.categorias[state.active];
    const total = L.categorias.reduce((n, k) => n + k.questions.length, 0);
    document.getElementById('r').innerHTML = `<main class="cc" style="--cc-accent:${accent};--cc-ink:#14213d">
<header class="cc-hero"><div class="cc-hero-text"><a class="cc-back">← Biblioteca</a><p class="cc-kicker">Conversación · ${state.level}</p><h1>${c.title}</h1>${T(L.intro,'p','cc-intro')}
<div class="cc-levels">${['A0','A1','A2','B1','B2','C1','C2'].map(id => `<button class="${id===state.level?'is-on':''}">${id}</button>`).join('')}</div>
<p class="cc-howto">Elige una categoría. Elige una pregunta. Responde con una historia tuya. <b>${L.categorias.length} categorías · ${total} preguntas</b></p></div>
<div class="cc-art"><img src="${img}"></div></header>
<nav class="cc-cats">${L.categorias.map((k,i)=>`<button class="${i===state.active?'is-on':''}">${k.icon} ${es(k.title)}</button>`).join('')}</nav>
<div class="cc-body"><section class="cc-panel"><div class="cc-panel-head"><span class="cc-icon">${cat.icon}</span>${T(cat.title,'h2')}<b>0${state.active+1} / 06</b></div>
<div class="cc-qs">${cat.questions.map((q,i)=>`<button class="${state.sel===i?'is-on':''}"><span class="cc-n">0${i+1}</span>${T(q,'p')}${state.sel===i?'<i>HABLEMOS DE ESTA →</i>':''}</button>`).join('')}</div>
<div class="cc-starters"><p>Para empezar a responder</p><ul>${cat.starters.map(s=>`<li>${T(s)}</li>`).join('')}</ul></div></section>
<aside class="cc-mascot"><img src="${mascot}"></aside></div></main>`;
    window.scrollTo(0, state.y);
  }, { state, content, c, accent, img, mascot });
  const dir = mkdtempSync(join(tmpdir(), `clasica-${c.id}-`));
  const shots = [
    { level: 'B1', active: 0, sel: null, y: 0 },
    { level: 'B1', active: 0, sel: null, y: 330 },
    { level: 'B1', active: 0, sel: 1, y: 330 },
    { level: 'B1', active: 2, sel: 3, y: 330 },
    { level: 'A0', active: 4, sel: 0, y: 330 },
  ];
  for (const [i, s] of shots.entries()) { await render(s); await page.waitForTimeout(150); await page.screenshot({ path: `${dir}/${i}.png` }); }
  await page.close();
  // 5 stills × 1.6 s with 0.4 s crossfades → 8 s, 640×360 H.264.
  const inputs = shots.flatMap((_, i) => ['-loop', '1', '-t', '2', '-i', `${dir}/${i}.png`]);
  let f = '', last = '[0:v]';
  for (let i = 1; i < shots.length; i++) { const o = i === shots.length - 1 ? '[v]' : `[x${i}]`; f += `${last}[${i}:v]xfade=transition=fade:duration=0.4:offset=${(i * 1.6).toFixed(1)}${o};`; last = o; }
  f += '[v]scale=640:360:flags=lanczos,format=yuv420p[out]';
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', ...inputs, '-filter_complex', f, '-map', '[out]', '-r', '24', '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-movflags', '+faststart', '-an', `${repo}/public/conversation-previews/${c.id}.mp4`], { stdio: 'inherit' });
  if (r.status) throw new Error('ffmpeg failed ' + c.slug);
  console.log(c.id, c.slug, 'ok');
}
await browser.close();
