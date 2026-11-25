import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { build } from "esbuild";
import { HUB_PATH, HUB_STORAGE_KEY, HUB_WORLDS } from "../app/jugar/worlds.mjs";
import { MILESTONES, RANKS, cleanName, createHub, passport, rankFor, restoreHub, scenesDone, serialiseHub, visit, worldStatus } from "../app/jugar/progress.mjs";

/**
 * Student hub (/jugar, 2026-11-16): a map of the 3D worlds a student plays as
 * games, a passport built from the saves each world already keeps in the
 * browser, and an installable web app. It never grants access and sells nothing.
 */
async function load() {
  const result = await build({
    stdin: { contents: 'export { lessons } from "./app/lesson-catalog.ts"; export { isFreeLesson } from "./app/access-policy.ts";', resolveDir: process.cwd() },
    bundle: true, format: "esm", platform: "node", write: false, loader: { ".ts": "ts", ".tsx": "tsx" }, logLevel: "silent",
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
}
const { lessons, isFreeLesson } = await load();
const read = (path) => readFileSync(path, "utf8");
const world = (slug) => HUB_WORLDS.find((item) => item.slug === slug);

test("every hub world is a routed class of the catalog, listed once", () => {
  assert.equal(new Set(HUB_WORLDS.map((item) => item.id)).size, HUB_WORLDS.length);
  for (const item of HUB_WORLDS) {
    const lesson = lessons.find((entry) => entry.id === item.id);
    assert.ok(lesson?.path?.startsWith("/"), `world ${item.id} has a class route`);
    assert.ok(lesson.image, `world ${item.id} has a cover`);
    assert.match(item.tint, /^#[0-9a-f]{6}$/);
  }
});

test("a public door is a free demo or a FREE lesson, never a PRO class", () => {
  const open = HUB_WORLDS.filter((item) => item.open);
  assert.ok(open.length >= 4, "a student can play several worlds without PRO");
  for (const item of open) {
    const lesson = lessons.find((entry) => entry.id === item.id);
    if (item.open.startsWith("/demo/")) continue;
    assert.equal(item.open, lesson.path);
    assert.equal(isFreeLesson(item.id), true, `${item.slug} is in the free ledger`);
  }
  assert.match(read("app/demo/noche-abierta/page.tsx"), /params\.from==='jugar'\?'\/jugar'/, "the demo knows its way back to the hub");
  const page = read("app/jugar/page.tsx");
  assert.match(page, /fullAccess \|\| studentPass \? lesson\.path : world\.open \?\? null/, "PRO routes are linked only with full access or a teacher's pass");
  for (const source of [page, read("app/jugar/StudentHub.tsx")]) assert.doesNotMatch(source, /CheckoutButton|\/pricing|\/acceso|US\$|\$\d/, "no student checkout or price");
});

test("scene totals and save keys match each world's own engine", async () => {
  const engines = {
    "hospital-san-casi-vivo": "../app/hospital-san-casi-vivo/engine-core.mjs",
    "el-tren-de-las-2340": "../app/el-tren-de-las-2340/engine.mjs",
    "vuelo-cancelado": "../app/vuelo-cancelado/engine.mjs",
    "la-boda": "../app/la-boda/engine.mjs",
    "la-casa-del-reality": "../app/la-casa-del-reality/engine.mjs",
    "ultimo-crucero": "../app/ultimo-crucero/engine.mjs",
    "objetos-perdidos": "../app/objetos-perdidos/engine.mjs",
    "lluvia-de-estrellas": "../app/lluvia-de-estrellas/engine.mjs",
    "el-taller-de-la-greda": "../app/el-taller-de-la-greda/engine.mjs",
    "el-consorcio": "../app/el-consorcio/engine.mjs",
    "marketing-de-casinos": "../app/marketing-de-casinos/engine.mjs",
  };
  for (const [slug, path] of Object.entries(engines)) {
    const engine = await import(path);
    assert.equal(world(slug).save.key, engine.STORAGE_KEY, slug);
    assert.equal(world(slug).total, engine.progress(engine.createState()).total, slug);
    assert.equal(scenesDone(engine.serialise(engine.createState()), "levels"), 0, slug);
  }
  const madrid = await import("../app/madrid-infectada/engine.mjs");
  assert.equal(world("madrid-infectada").save.key, madrid.STORAGE_KEY);
  assert.equal(world("madrid-infectada").total, madrid.ALL_KEYS.length);
  const blanco = await import("../app/el-mundo-en-blanco/engine.mjs");
  assert.equal(world("el-mundo-en-blanco").save.key, blanco.STORAGE_KEY);
  assert.equal(world("el-mundo-en-blanco").total, (await import("../app/el-mundo-en-blanco/story.mjs")).SPOT_IDS.length);
  const masAlla = await import("../app/mas-alla/engine.mjs");
  assert.equal(world("mas-alla").save.key, masAlla.STORAGE_KEY);
  assert.equal(world("mas-alla").total, (await import("../app/mas-alla/story.mjs")).SPOT_IDS.length);
  const feria = await import("../app/la-feria-de-villaluz/engine.mjs");
  assert.equal(world("la-feria-de-villaluz").save.key, feria.STORAGE_KEY);
  assert.equal(world("la-feria-de-villaluz").total, (await import("../app/la-feria-de-villaluz/layout.mjs")).CIRCLE_IDS.length);
  assert.equal(world("hr-crisis").save.key, (await import("../app/hr-crisis/config.mjs")).STORAGE_KEY);
  const { storageKey } = await import("../app/mundo-3d/progress.mjs");
  for (const slug of ["mexico", "estados-unidos", "argentina", "espana"]) assert.equal(world(slug).save.key, storageKey(slug), slug);
});

test("scenes come from the world's save; the best level counts and junk is ignored", () => {
  assert.equal(scenesDone(null, "levels"), 0);
  assert.equal(scenesDone("{", "levels"), 0);
  assert.equal(scenesDone(JSON.stringify({ done: { A1: ["a", "b", "b"], B1: ["a", "b", "c"] } }), "levels"), 3);
  assert.equal(scenesDone(JSON.stringify({ done: { A1: "abc", B1: [1, 2] } }), "levels"), 0);
  assert.equal(scenesDone(JSON.stringify({ done: ["a", "b"] }), "list"), 2);
  assert.equal(scenesDone(JSON.stringify({ done: { A1: ["a"] } }), "list"), 0);
});

test("the passport reads real play: states, ranks, milestones and where to continue", () => {
  const saves = {
    [world("la-boda").save.key]: JSON.stringify({ done: { A2: Array.from({ length: 18 }, (_, i) => `s${i}`) } }),
    [world("mexico").save.key]: JSON.stringify({ done: { A1: ["cdmx/mercado", "cdmx/metro"] } }),
    [world("estados-unidos").save.key]: JSON.stringify({ done: { A1: ["florida/playa"] } }),
  };
  const readSave = (key) => saves[key] ?? null;
  let hub = visit(createHub(), 223, 1000);
  hub = visit(hub, 210, 2000);
  hub = visit(hub, 257, 3000);
  const book = passport(readSave, hub);
  const status = (slug) => book.statuses.find((item) => item.id === world(slug).id);
  assert.equal(status("la-boda").state, "completo");
  assert.equal(status("mexico").state, "en-curso");
  assert.equal(status("noche-abierta").state, "en-curso", "a visited world without a readable save counts as explored");
  assert.equal(status("el-consorcio").state, "nuevo");
  assert.deepEqual(book.summary, { scenes: 21, started: 4, complete: 1, countries: 2 });
  assert.equal(book.rank.id, "viajero");
  assert.equal(book.next.id, "explorador");
  assert.equal(book.toNext, 4);
  assert.equal(book.continueId, 210, "continue where the student last was, skipping finished worlds");
  const met = Object.fromEntries(book.milestones.map((item) => [item.id, item.met]));
  assert.deepEqual(met, { "primera-escena": true, "diez-escenas": true, "tres-mundos": true, "dos-paises": true, "mundo-completo": true, "cincuenta-escenas": false, "tres-completos": false });
  assert.equal(passport(() => null, createHub()).summary.scenes, 0);
  assert.equal(worldStatus(world("la-boda"), () => JSON.stringify({ done: { A1: Array.from({ length: 40 }, (_, i) => `x${i}`) } }), createHub()).done, 18, "never more than the world has");
  assert.equal(rankFor(0).rank.id, "turista");
  assert.equal(rankFor(10 ** 6).next, null);
  assert.ok(RANKS.every((rank, i) => i === 0 || rank.from > RANKS[i - 1].from));
  assert.ok(MILESTONES.every((item) => item.es.length === 2 && item.en.length === 2));
});

test("the hub's own save survives junk and keeps only known worlds", () => {
  assert.deepEqual(restoreHub("nope"), createHub());
  const restored = restoreHub(JSON.stringify({ name: "  <b>Ana</b>  ", visits: { 223: 5, 999: 5, 210: "x" } }));
  assert.deepEqual(restored, { name: "bAna/b", visits: { 223: 5 } });
  assert.deepEqual(restoreHub(serialiseHub(restored)), restored);
  assert.equal(cleanName("x".repeat(60)).length, 24);
  assert.equal(HUB_STORAGE_KEY, "spanishcue:jugar:v1");
});

test("the hub installs as its own app and stays out of the worlds' saves", () => {
  const page = read("app/jugar/page.tsx");
  const layout = read("app/layout.tsx");
  assert.match(layout, /\|ingresar\|jugar\|/, "no teacher sales bar or chat on the student hub");
  assert.match(page, /robots: \{ index: false, follow: true \}/);
  const manifest = read("app/jugar/manifest/route.ts");
  assert.match(manifest, /start_url: `\$\{HUB_PATH\}\?app=1`/);
  assert.match(manifest, /display: "standalone"/);
  assert.equal(HUB_PATH, "/jugar");
  const hub = read("app/jugar/StudentHub.tsx");
  assert.match(hub, /beforeinstallprompt/);
  assert.match(hub, /link\[rel="manifest"\]'\)\?\.setAttribute\("href", `\$\{HUB_PATH\}\/manifest`\)/, "the hub links its own manifest");
  assert.match(manifest, /application\/manifest\+json/);
  assert.equal(hub.match(/localStorage\.setItem\(/g).length, 1, "the hub writes only its own save");
  assert.match(hub, /localStorage\.setItem\(HUB_STORAGE_KEY/);
  assert.doesNotMatch(hub, /ranking|leaderboard|monedas|coins/i, "no coins, no scoreboards");
  assert.match(read("scripts/protect-client-assets.mjs"), /"app\/jugar\/StudentHub\.tsx"/, "the hub chunk is a public root");
  assert.match(read("app/sitemap.ts"), /aprender-espanol/);
});
