#!/usr/bin/env node
// Short-video factory: script → native voices (Edge TTS) → 1080x1920 MP4 with captions,
// a 3D-class background clip and the free page URL on screen.
//
//   node scripts/shorts/build.mjs --series ser-estar|por-para --out <dir> --clips <dir with 3D clips> [--only id,id] [--limit n]
//
// Needs: ffmpeg, `edge-tts` (pip), Playwright with Chromium. Writes <out>/<id>.mp4 and <out>/manifest.json
// (title, description with UTM link, tags) for the uploader.
import { mkdirSync, writeFileSync, existsSync, readdirSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { serEstarShorts } from "./ser-estar.mjs";
import { porParaShorts } from "./por-para.mjs";

const SERIES = { "ser-estar": serEstarShorts, "por-para": porParaShorts };

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "../..");
const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, all) => (v.startsWith("--") ? [...a, [v.slice(2), all[i + 1] && !all[i + 1].startsWith("--") ? all[i + 1] : true]] : a), []));
const OUT = resolve(args.out || join(repo, "build/shorts"));
const CLIPS = args.clips ? resolve(args.clips) : null;
mkdirSync(OUT, { recursive: true });
const tmp = join(OUT, ".work");
mkdirSync(tmp, { recursive: true });

const VOICES = { en: "en-US-AndrewNeural", f: "es-MX-DaliaNeural", m: "es-MX-JorgeNeural" };
const W = 1080, H = 1920, FPS = 30;

function tts(text, voice, file) {
  if (!existsSync(file)) execFileSync("python3", [join(here, "tts.py"), voice, voice.startsWith("en") ? "+12%" : "-4%", text, file], { stdio: ["ignore", "ignore", "inherit"] });
  return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString().trim());
}

function ding() {
  const f = join(tmp, "ding.wav");
  if (!existsSync(f)) execFileSync("ffmpeg", ["-y", "-v", "error", "-f", "lavfi", "-i", "sine=f=1318:d=0.5", "-f", "lavfi", "-i", "sine=f=1760:d=0.5", "-filter_complex", "[0][1]amix=2,afade=t=out:st=0.05:d=0.45,volume=0.35", f]);
  return f;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const mark = (sentence, form) => esc(sentence).replace(esc(form), `<b class="hl">${esc(form)}</b>`);
const font = (f) => `url(data:font/woff2;base64,${readFileSync(join(here, f)).toString("base64")})`;
const CSS = `
@font-face{font-family:Sora;font-weight:800;src:${font("sora-800.woff2")}}
@font-face{font-family:PJS;font-weight:500;src:${font("pjs-500.woff2")}}
@font-face{font-family:PJS;font-weight:700;src:${font("pjs-700.woff2")}}
@font-face{font-family:PJS;font-weight:800;src:${font("pjs-800.woff2")}}
*{margin:0;box-sizing:border-box}html,body{width:${W}px;height:${H}px;background:transparent;font-family:PJS,sans-serif;color:#fff}
.top{position:absolute;top:120px;left:0;right:0;text-align:center;font:800 40px PJS;letter-spacing:.14em;color:#ffd84d;text-shadow:0 3px 12px #000a}
.card{position:absolute;left:70px;right:70px;top:50%;transform:translateY(-50%);background:rgba(12,14,30,.86);border-radius:48px;padding:70px 64px;box-shadow:0 30px 80px #0009;border:3px solid rgba(255,255,255,.12)}
.tag{display:inline-block;font:800 44px Sora;padding:10px 30px;border-radius:999px;margin-bottom:34px}
.ser{background:#4f8cff}.estar{background:#ff7a45}.q{background:#ffd84d;color:#111}
.big{font:800 112px/1.05 Sora;letter-spacing:-.02em}
.vs{font:800 64px Sora;color:#ffd84d;margin:26px 0}
.eq{font:700 64px/1.2 PJS;margin-bottom:40px}.eq em{font-style:normal;color:#ffd84d}
.ex{font:500 54px/1.35 PJS;color:#e8ebff;border-left:8px solid #ffffff55;padding-left:32px}
.hl{color:#ffd84d;font-weight:800}
.gap{font:700 66px/1.3 PJS}.blank{display:inline-block;min-width:210px;border-bottom:8px solid #ffd84d}
.opts{display:flex;gap:30px;margin-top:50px}.opts div{flex:1;text-align:center;font:800 58px Sora;padding:26px 0;border-radius:28px;background:#ffffff1c}
.opts .ok{background:#2fbf71}
.url{font:800 64px/1.2 Sora;color:#ffd84d;margin:30px 0 20px}
.small{font:700 46px/1.3 PJS;color:#cfd5ff}
.mascot{position:absolute;right:40px;bottom:120px;width:420px}
.brand{position:absolute;bottom:70px;left:0;right:0;text-align:center;font:800 40px Sora;letter-spacing:.08em;opacity:.9;text-shadow:0 2px 10px #000}
`;

function cards(s) {
  const top = `<div class="top">SPANISH IN 30 SECONDS</div>`;
  const brand = `<div class="brand">SPANISHCUE</div>`;
  const mascot = `<img class="mascot" src="data:image/webp;base64,${readFileSync(join(repo, "public/brand/mascot/pointing.webp")).toString("base64")}">`;
  const q = s.quiz;
  const opts = (reveal) => `<div class="opts">${q.options.map((o, i) => `<div class="${reveal && i === q.answer ? "ok" : ""}">${esc(o)}</div>`).join("")}</div>`;
  const out = {
    hook: `${top}<div class="card" style="text-align:center"><div class="big">${esc(s.hook.lines[0])}</div><div class="vs">${esc(s.hook.sep)}</div><div class="big">${esc(s.hook.lines[1])}</div></div>${brand}`,
  };
  s.teach.forEach((t, i) => {
    out[`teach${i}`] = `${top}<div class="card"><span class="tag ${t.tagClass}">${esc(t.tag)}</span><div class="eq">${esc(t.eq[0])} = <em>${esc(t.eq[1])}</em></div><div class="ex">${mark(t.ex.full, t.ex.form)}</div></div>${brand}`;
  });
  out.quiz = `${top}<div class="card"><span class="tag q">YOUR TURN</span><div class="gap">${esc(q.gap).replace("___", '<span class="blank"></span>')}</div>${opts(false)}</div>${brand}`;
  out.answer = `${top}<div class="card"><span class="tag q">ANSWER</span><div class="gap">${mark(q.full, q.form)}</div>${opts(true)}</div>${brand}`;
  out.cta = `${top}<div class="card" style="right:70px"><div class="small">Free practice quiz</div><div class="url">spanishcue.com<br>${esc(s.path)}</div><div class="small">Teachers: ready-made Spanish classes</div></div>${mascot}${brand}`;
  return out;
}

async function renderPngs(page, s, dir) {
  const c = cards(s);
  for (const [k, body] of Object.entries(c)) {
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${body}</body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: join(dir, `${k}.png`), omitBackground: true });
  }
}

/** Scenes: [card, [[text, voice], ...], minimum seconds on screen]. Only native Spanish voices speak
 *  (Ale rejected English/American TTS voices); English lives on screen. */
function scenes(s) {
  return [
    ["hook", [[s.hook.say, "f"]], 2.6],
    ...s.teach.map((t, i) => [`teach${i}`, [[t.ex.full, t.ex.voice || (i % 2 ? "m" : "f")]], 5.2]),
    ["quiz", [[s.quiz.say, "m"]], 4.2],
    ["answer", [["__ding__", null], [s.quiz.full, s.quiz.voice || "f"]], 4.2],
    ["cta", [[s.cta.say, "m"]], 4.0],
  ];
}

function buildOne(s, clip) {
  const dir = join(tmp, s.id);
  const parts = [];
  let t = 0;
  const overlays = [];
  scenes(s).forEach(([card, lines, min], si) => {
    const start = t;
    t += 0.35;
    lines.forEach(([text, v], li) => {
      if (text === "__ding__") { parts.push({ f: ding(), at: t }); t += 0.25; return; }
      const f = join(dir, `a${si}-${li}.mp3`);
      const d = tts(text, VOICES[v], f);
      parts.push({ f, at: t });
      t += d + 0.15;
    });
    t = Math.max(t, start + min);
    overlays.push({ card, start, end: t });
  });
  const total = t;
  const inputs = ["-stream_loop", "-1", "-i", clip];
  overlays.forEach((o) => inputs.push("-loop", "1", "-t", total.toFixed(2), "-i", join(dir, `${o.card}.png`)));
  parts.forEach((p) => inputs.push("-i", p.f));
  const bg = `[0:v]scale=-2:2200,crop=${W}:${H}:(iw-${W})/2:150,boxblur=6:1,eq=brightness=-0.12:saturation=1.1,fps=${FPS},trim=duration=${total.toFixed(2)},setpts=PTS-STARTPTS[bg]`;
  let chain = bg, last = "bg";
  overlays.forEach((o, i) => {
    const fade = 0.18;
    chain += `;[${i + 1}:v]format=rgba,fade=t=in:st=${o.start.toFixed(2)}:d=${fade}:alpha=1,fade=t=out:st=${(o.end - fade).toFixed(2)}:d=${fade}:alpha=1[o${i}];[${last}][o${i}]overlay=0:0:enable='between(t,${o.start.toFixed(2)},${o.end.toFixed(2)})'[v${i}]`;
    last = `v${i}`;
  });
  const aBase = 1 + overlays.length;
  parts.forEach((p, i) => (chain += `;[${aBase + i}:a]adelay=${Math.round(p.at * 1000)}|${Math.round(p.at * 1000)},aformat=channel_layouts=stereo[a${i}]`));
  chain += `;${parts.map((_, i) => `[a${i}]`).join("")}amix=inputs=${parts.length}:normalize=0,apad,atrim=duration=${total.toFixed(2)},loudnorm=I=-14:TP=-1.5[a]`;
  const out = join(OUT, `${s.id}.mp4`);
  execFileSync("ffmpeg", ["-y", "-v", "error", ...inputs, "-filter_complex", chain, "-map", `[${last}]`, "-map", "[a]", "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-pix_fmt", "yuv420p", "-r", String(FPS), "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-movflags", "+faststart", "-t", total.toFixed(2), out]);
  return { out, seconds: Math.round(total * 10) / 10 };
}

function meta(s) {
  const utm = `https://spanishcue.com${s.path}?utm_source=youtube&utm_medium=shorts&utm_campaign=shorts-${s.series}&utm_content=${s.id}`;
  return {
    id: s.id,
    title: s.title,
    description: [
      ...s.meta.lines,
      `Free practice quiz: ${utm}`,
      `Spanish teachers: ready-to-teach classes at https://spanishcue.com/?utm_source=youtube&utm_medium=shorts&utm_campaign=shorts-${s.series}`,
      s.meta.hashtags,
    ].join("\n\n"),
    tags: s.meta.tags,
    link: utm,
  };
}

const series = String(args.series || "ser-estar");
if (!SERIES[series]) throw new Error(`--series must be one of ${Object.keys(SERIES).join(", ")}`);
const all = SERIES[series](repo);
const only = args.only ? String(args.only).split(",") : null;
const list = all.filter((s) => !only || only.includes(s.id)).slice(0, args.limit ? Number(args.limit) : undefined);
const clips = CLIPS ? readdirSync(CLIPS).filter((f) => f.endsWith(".mp4")).sort().map((f) => join(CLIPS, f)) : [];
if (!clips.length) throw new Error("--clips <dir> with .mp4 background clips is required");

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H } });
const manifestFile = join(OUT, "manifest.json");
const manifest = existsSync(manifestFile) ? JSON.parse(readFileSync(manifestFile, "utf8")) : {};
for (const s of list) {
  const dir = join(tmp, s.id);
  mkdirSync(dir, { recursive: true });
  await renderPngs(page, s, dir);
  const r = buildOne(s, clips[s.index % clips.length]);
  manifest[s.id] = { ...meta(s), file: `${s.id}.mp4`, seconds: r.seconds };
  writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));
  console.log(`${s.id}: ${r.seconds}s`);
}
await browser.close();
