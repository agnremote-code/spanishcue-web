/**
 * Prints the free teacher templates to public/plantillas (PDF in A4 and US Letter, plus a
 * preview image) and their Pinterest image to public/pinterest/plantilla-<slug>.jpg.
 * Run by hand after changing a design: `node scripts/plantillas/build.mjs`. Needs a local
 * Playwright with Chromium; it is not part of the build or of CI. The files are static
 * assets: nothing here enters the Worker bundle.
 */
import { createRequire } from "node:module";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { designs } from "./designs.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const logo = `data:image/png;base64,${(await readFile("public/brand/spanishcue-logo.png")).toString("base64")}`;
const only = process.argv.slice(2);

const css = `
*{box-sizing:border-box;margin:0;padding:0}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:Inter,system-ui,sans-serif;color:#0b1b3f;font-size:10.5pt;line-height:1.35}
.sheet{width:100%;height:100vh;display:flex;flex-direction:column;page-break-after:always;break-after:page;overflow:hidden}
.sheet:last-child{page-break-after:auto;break-after:auto}
header{display:flex;align-items:center;gap:12pt;padding:0 0 9pt;border-bottom:2.5pt solid #0a66ff}
header img{width:30pt;height:30pt}
header h1{font-family:"Inter Display",Inter,sans-serif;font-size:17pt;font-weight:800;letter-spacing:-.3pt;flex:1;color:#0a2472}
header span{font-size:8.5pt;font-weight:700;color:#0a66ff;letter-spacing:.6pt}
main{flex:1;display:flex;flex-direction:column;gap:9pt;padding:11pt 0 8pt;min-height:0}
footer{display:flex;justify-content:space-between;gap:12pt;font-size:7.5pt;color:#4a5878;border-top:1pt solid #d7e4f5;padding-top:6pt}
footer b{color:#0a2472}
.row{display:flex;gap:12pt}
.field{display:flex;flex-direction:column;gap:11pt;min-width:0}
.field span{font-size:7.5pt;font-weight:700;color:#4a5878;text-transform:uppercase;letter-spacing:.5pt}
.field i{border-bottom:1pt solid #8fa3c7;height:1pt}
.lines{display:flex;flex-direction:column;gap:15pt;padding-top:13pt}
.lines i{border-bottom:1pt solid #c3d0e6;height:1pt}
.box{border:1pt solid #c9d8f0;border-radius:8pt;padding:8pt 10pt 10pt;flex:1;min-width:0;background:#fff}
.box h3{font-size:8.5pt;font-weight:800;color:#0a2472;text-transform:uppercase;letter-spacing:.5pt}
.box h3 small{font-weight:500;text-transform:none;letter-spacing:0;color:#4a5878;margin-left:6pt}
.cols{display:flex;gap:10pt}
.checks{display:flex;flex-wrap:wrap;gap:6pt 16pt;padding-top:8pt;font-size:9.5pt}
.checks span{display:flex;align-items:center;gap:5pt}
.checks b{width:9pt;height:9pt;border:1pt solid #0a2472;border-radius:2pt;display:inline-block}
table{width:100%;border-collapse:collapse;table-layout:fixed;flex:1}
th{background:#0a2472;color:#fff;font-size:8pt;font-weight:700;text-align:left;padding:5pt 6pt;letter-spacing:.3pt}
td{border:1pt solid #c9d8f0;padding:5pt 6pt;vertical-align:top;font-size:9pt}
tbody tr:nth-child(even) td{background:#f4f8ff}
td em{display:block;font-style:normal;font-size:7.8pt;color:#4a5878;margin-top:2pt}
.time{color:#0a66ff;font-size:11pt}
.note{font-size:8.3pt;color:#4a5878;background:#fff7e3;border-left:3pt solid #ffc454;padding:6pt 9pt;border-radius:0 6pt 6pt 0}
.terms p{font-size:9.6pt;margin-top:8pt;line-height:1.5}
.bingo{display:grid;gap:0;flex:1;border:2pt solid #0a2472;border-radius:8pt;overflow:hidden}
.bingo div{border:1pt solid #8fa3c7;display:flex;align-items:center;justify-content:center;min-height:40pt}
.bingo b{color:#0a66ff;font-size:13pt;letter-spacing:1pt}
.twoBingo{display:flex;flex-direction:column;gap:10pt;flex:1}
.cards{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:0;flex:1;border:1pt dashed #8fa3c7}
.card{border:1pt dashed #8fa3c7;padding:11pt 13pt;display:flex;flex-direction:column;gap:6pt}
.card small{font-size:7.5pt;font-weight:800;color:#0a66ff;letter-spacing:.8pt;text-transform:uppercase}
.card p{font-size:13pt;font-weight:700;line-height:1.3;flex:1;color:#0a2472}
.card .lines{flex:1}
.card em{font-style:normal;font-size:7.8pt;color:#4a5878}
.wheel{flex:1;min-height:0;width:100%}
.cert{flex:1;border:3pt solid #0a2472;outline:1pt solid #ffc454;outline-offset:-7pt;border-radius:10pt;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11pt;padding:26pt 60pt;text-align:center}
.certKicker{font-size:10pt;font-weight:800;letter-spacing:4pt;color:#0a66ff}
.cert h2{font-family:"Inter Display",Inter,sans-serif;font-size:27pt;font-weight:800;color:#0a2472;letter-spacing:-.5pt}
.certText{font-size:12pt;line-height:2;max-width:560pt}
.certName{width:70%;border-bottom:1.5pt solid #0a2472;height:26pt}
.gap{display:inline-block;width:70pt;border-bottom:1pt solid #0a2472}.gap.short{width:40pt}
.certSign{display:flex;gap:70pt;margin-top:20pt}
.certSign div{display:flex;flex-direction:column;gap:5pt;width:190pt;font-size:8.5pt;color:#4a5878}
.certSign i{border-bottom:1pt solid #0a2472;height:1pt}
.certNote{font-size:7.8pt;color:#4a5878}
`;

const sheetHtml = (design, page, index) => `<div class="sheet">
  <header><img src="${logo}" alt=""><h1>${page.heading || design.title}</h1><span>SPANISHCUE</span></header>
  <main>${page.body}</main>
  <footer><span><b>Plantilla gratuita de SpanishCue.</b> Puedes imprimirla y usarla con tus alumnos.</span><span>spanishcue.com/material-ele/plantillas${design.pages.length > 1 ? ` · ${index + 1}/${design.pages.length}` : ""}</span></footer>
</div>`;
const documentHtml = (design, pages = design.pages) => `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${css}</style></head><body>${pages.map((page, index) => sheetHtml(design, page, design.pages.indexOf(page) >= 0 ? design.pages.indexOf(page) : index)).join("")}</body></html>`;

const pinHtml = (design, preview) => {
  const size = design.title.length > 34 ? 62 : design.title.length > 24 ? 72 : 84;
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}body{width:1000px;height:1500px;font-family:Inter,sans-serif;background:#f6f8fc;display:flex;flex-direction:column;color:#0b1b3f;overflow:hidden}
.top{background:linear-gradient(135deg,#0a66ff 0%,#0b3fb8 55%,#0a2472 100%);color:#fff;padding:54px 64px 50px;position:relative;overflow:hidden}
.top:after{content:"";position:absolute;right:-120px;bottom:-190px;width:420px;height:420px;border-radius:50%;background:rgba(255,196,84,.20)}
.k{font-size:25px;font-weight:800;letter-spacing:4px;opacity:.92}
.lv{position:absolute;right:64px;top:42px;background:#ffc454;color:#0a2472;font-weight:900;font-size:30px;padding:10px 22px;border-radius:16px}
h1{font-family:'Inter Display',Inter;font-weight:900;font-size:${size}px;line-height:1.06;letter-spacing:-1.5px;margin-top:30px;max-width:860px;position:relative;z-index:1}
.sub{font-size:30px;line-height:1.36;margin-top:20px;opacity:.94;max-width:820px;position:relative;z-index:1}
.mid{flex:1;min-height:0;display:flex;align-items:flex-start;justify-content:center;padding:44px 0 0;overflow:hidden}
.mid img{width:${design.landscape ? 880 : 700}px;border-radius:14px;box-shadow:0 18px 50px rgba(10,36,114,.22);border:1px solid #d7e4f5;${design.landscape ? "transform:rotate(-2deg);margin-top:40px" : "transform:rotate(-1.5deg)"}}
.bot{padding:26px 64px 44px;display:flex;align-items:center;justify-content:space-between;background:#f6f8fc;position:relative;z-index:2;box-shadow:0 -30px 40px #f6f8fc}
.tag{font-size:26px;font-weight:600;color:#4a5878;line-height:1.4}
.brand{display:flex;align-items:center;gap:14px;background:#0a2472;color:#fff;border-radius:999px;padding:14px 28px 14px 16px;font-size:28px;font-weight:800}
.brand img{width:46px;height:46px;background:#fff;border-radius:50%;padding:5px}
</style></head><body>
<div class="top"><div class="k">PLANTILLA PARA PROFES DE ESPAÑOL</div><div class="lv">PDF GRATIS</div><h1>${design.title}</h1><p class="sub">${design.subtitle}</p></div>
<div class="mid"><img src="${preview}" alt=""></div>
<div class="bot"><p class="tag">Para imprimir en A4 o carta.<br>Sin registro.</p><div class="brand"><img src="${logo}" alt="">spanishcue.com</div></div>
</body></html>`;
};

await mkdir("public/plantillas", { recursive: true });
await mkdir("public/pinterest", { recursive: true });
const browser = await chromium.launch();
for (const [slug, design] of Object.entries(designs)) {
  if (only.length && !only.includes(slug)) continue;
  const page = await browser.newPage();
  await page.setContent(documentHtml(design), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const margin = { top: "13mm", bottom: "11mm", left: "14mm", right: "14mm" };
  for (const [format, suffix] of [["A4", ""], ["Letter", "-carta"]]) {
    await page.pdf({ path: `public/plantillas/${slug}${suffix}.pdf`, format, landscape: Boolean(design.landscape), margin, printBackground: true });
  }
  await page.close();

  // Preview of the first sheet at A4 proportions (the PDF itself stays vector).
  const [width, height] = design.landscape ? [1123, 794] : [794, 1123];
  const shot = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1.5 });
  await shot.setContent(documentHtml(design, [design.pages[0]]).replace("</style>", "body{padding:13mm 14mm 11mm}.sheet{height:calc(100vh - 24mm)}</style>"), { waitUntil: "load" });
  await shot.evaluate(() => document.fonts.ready);
  const preview = await shot.screenshot({ type: "jpeg", quality: 82 });
  await writeFile(`public/plantillas/${slug}.jpg`, preview);
  await shot.close();

  const pin = await browser.newPage({ viewport: { width: 1000, height: 1500 }, deviceScaleFactor: 1 });
  await pin.setContent(pinHtml(design, `data:image/jpeg;base64,${preview.toString("base64")}`), { waitUntil: "load" });
  await pin.evaluate(() => document.fonts.ready);
  await pin.screenshot({ path: `public/pinterest/plantilla-${slug}.jpg`, type: "jpeg", quality: 88 });
  await pin.close();
  console.log("built", slug);
}
await browser.close();
