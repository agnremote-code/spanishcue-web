import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import { build } from "esbuild";
import { HUB_WORLDS } from "../app/jugar/worlds.mjs";

/**
 * Teacher's pass (owner decision 2026-11-16): a student who opened their
 * teacher's /s/ link plays the PRO 3D worlds of the hub while that teacher has
 * full access. It opens those worlds, their chunks and the 3D listening audio.
 * Nothing else, and never from a browser-supplied header or query.
 */
const compiled = await build({
  stdin: {
    contents: 'export * from "./app/jugar/student-pass.ts"; export * as share from "./app/autoestudio/share/server.ts"; export { lessons } from "./app/lesson-catalog.ts"; export { isFreeLesson } from "./app/access-policy.ts"; export { mayReadStudentAsset, mayReadPrivateMedia } from "./worker/private-asset-auth.ts";',
    resolveDir: process.cwd(),
  },
  bundle: true, write: false, format: "esm", platform: "node", loader: { ".ts": "ts", ".tsx": "tsx" }, logLevel: "silent",
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);
const read = (path) => readFileSync(path, "utf8");

const sqlite = new DatabaseSync(":memory:");
sqlite.exec("PRAGMA foreign_keys = ON");
for (const name of (await readdir("drizzle")).filter((file) => file.endsWith(".sql")).sort()) {
  sqlite.exec((await readFile(`drizzle/${name}`, "utf8")).replaceAll("--> statement-breakpoint", ""));
}
const statement = (sql, args = []) => ({
  bind: (...values) => statement(sql, values),
  run: async () => ({ meta: { changes: Number(sqlite.prepare(sql).run(...args).changes) } }),
  first: async () => sqlite.prepare(sql).get(...args) ?? null,
  all: async () => ({ results: sqlite.prepare(sql).all(...args) }),
});
const DB = { prepare: (sql) => statement(sql), batch: async (list) => { for (const item of list) await item.run(); } };
const env = { DB, AUTOESTUDIO_SHARE_SECRET: "test-only-secret-not-used-in-any-deployment-0000000000", CHESPANISH_OWNER_UID: "uid-owner", CHESPANISH_OWNER_EMAIL: "owner@example.test" };

const NOW = Math.floor(Date.now() / 1000);
function seedTeacher(id, pro) {
  sqlite.prepare(`INSERT INTO users (id, email, normalized_email, role, status, created_at, updated_at, last_sign_in_at) VALUES (?, ?, ?, 'teacher', 'active', 1, 1, 1)`).run(id, `${id}@example.test`, `${id}@example.test`);
  sqlite.prepare(`INSERT INTO auth_identities (user_id, provider, provider_subject, provider_email, email_verified, created_at, last_seen_at) VALUES (?, 'firebase', ?, ?, 1, 1, 1)`).run(id, `uid-${id}`, `${id}@example.test`);
  if (pro) sqlite.prepare(`INSERT INTO access_grants (user_id, product_code, access_level, status, source, starts_at, created_at, updated_at) VALUES (?, 'teacher_library', 'full', 'active', 'manual', 1, 1, 1)`).run(id);
}
seedTeacher("pro", true);
seedTeacher("free", false);

const teacherRequest = (uid, body) => new Request("https://spanishcue.test/api/autoestudio/passes", { method: "POST", headers: { origin: "https://spanishcue.test", "content-type": "application/json", "x-chespanish-user-uid": uid, "x-chespanish-access-level": "full" }, body: JSON.stringify(body) });
const cookieOf = (response) => response.headers.get("set-cookie").split(";")[0];
/** A teacher mints a pass; the student opens the link and gives a name. */
async function studentCookie(uid, alias) {
  const made = await (await mod.share.createPass(teacherRequest(uid, { level: "a1" }), env)).json();
  const pending = cookieOf(await mod.share.redeem(new Request("https://spanishcue.test/s/x"), made.link.split("/s/")[1], env));
  const claimed = await mod.share.claim(new Request("https://spanishcue.test/api/autoestudio/claim", { method: "POST", headers: { origin: "https://spanishcue.test", "content-type": "application/json", cookie: pending }, body: JSON.stringify({ alias, passId: made.pass.id, revision: 1 }) }), env);
  return { cookie: cookieOf(claimed), pending, passId: made.pass.id };
}
const pro = await studentCookie("uid-pro", "Emma");
const free = await studentCookie("uid-free", "Noah");
const owner = await studentCookie("uid-owner", "Liam");

test("the pass opens exactly the hub's PRO worlds", () => {
  const ids = mod.studentWorldLessonIds();
  assert.equal(ids.length, HUB_WORLDS.filter((world) => !mod.isFreeLesson(world.id)).length);
  assert.ok(ids.length >= 12);
  for (const id of ids) {
    assert.equal(mod.isFreeLesson(id), false);
    assert.ok(HUB_WORLDS.some((world) => world.id === id));
  }
  assert.equal(mod.isStudentWorldLesson(245), true, "El consorcio is a hub world");
  for (const lesson of mod.lessons) if (!HUB_WORLDS.some((world) => world.id === lesson.id)) assert.equal(mod.isStudentWorldLesson(lesson.id), false, `${lesson.id} is not a hub world`);
  assert.equal(mod.isStudentWorldLesson(null), false);
  assert.equal(mod.isStudentWorldLesson(undefined), false);
  assert.equal(mod.studentPassScope("/jugar", null), true);
  assert.equal(mod.studentPassScope("/el-consorcio", 245), true);
  assert.equal(mod.studentPassScope("/audio/escucha-3d/consorcio/a1/x.mp3", null), true);
  for (const path of ["/", "/cuenta", "/audio/grammar-live/x.mp3", "/audio/escucha-3dx/x.mp3", "/api/live-class", "/jugar/otro"]) assert.equal(mod.studentPassScope(path, null), false, path);
});

test("a claimed pass from a PRO teacher or the owner is a student pass; anything else is not", async () => {
  assert.equal((await mod.studentWorldPass(pro.cookie, env)).alias, "Emma");
  assert.equal((await mod.studentWorldPass(owner.cookie, env)).alias, "Liam");
  assert.equal(await mod.studentWorldPass(free.cookie, env), null, "the teacher is not PRO");
  assert.equal(await mod.studentWorldPass(pro.pending, env), null, "a pass without a name is not a session yet");
  assert.equal(await mod.studentWorldPass(null, env), null);
  assert.equal(await mod.studentWorldPass("", env), null);
  assert.equal(await mod.studentWorldPass(`${pro.cookie}x`, env), null, "tampered cookie");
  assert.equal(await mod.studentWorldPass(pro.cookie, { ...env, AUTOESTUDIO_SHARE_SECRET: undefined }), null, "no secret: closed");
  assert.equal(await mod.studentWorldPass(pro.cookie, { ...env, AUTOESTUDIO_SHARE_SECRET: "another-secret-another-secret-another-secret-0000" }), null);
});

test("access follows the teacher: it ends when PRO ends or the pass is revoked", async () => {
  const later = await studentCookie("uid-pro", "Mia");
  assert.ok(await mod.studentWorldPass(later.cookie, env));
  sqlite.prepare("UPDATE access_grants SET status='revoked' WHERE user_id='pro'").run();
  assert.equal(await mod.studentWorldPass(later.cookie, env), null, "the teacher lost PRO");
  sqlite.prepare("UPDATE access_grants SET status='active' WHERE user_id='pro'").run();
  assert.ok(await mod.studentWorldPass(later.cookie, env));
  sqlite.prepare("UPDATE autoestudio_passes SET revoked_at=? WHERE id=?").run(new Date().toISOString(), later.passId);
  assert.equal(await mod.studentWorldPass(later.cookie, env), null, "revoked pass");
  sqlite.prepare("UPDATE users SET status='disabled' WHERE id='pro'").run();
  assert.equal(await mod.studentWorldPass(pro.cookie, env), null, "disabled teacher");
  sqlite.prepare("UPDATE users SET status='active' WHERE id='pro'").run();
});

test("private assets: only flagged world chunks and 3D listening audio, only with a valid pass", async () => {
  const request = (cookie) => new Request("https://spanishcue.test/assets/x.js", { headers: cookie ? { cookie } : {} });
  assert.equal(await mod.mayReadStudentAsset(request(pro.cookie), env, "/assets/world.js", true), true);
  assert.equal(await mod.mayReadStudentAsset(request(pro.cookie), env, "/assets/other-class.js", false), false, "a chunk outside the worlds stays closed");
  assert.equal(await mod.mayReadStudentAsset(request(pro.cookie), env, "/audio/escucha-3d/consorcio/a1/1.mp3", false), true);
  assert.equal(await mod.mayReadStudentAsset(request(pro.cookie), env, "/audio/grammar-live/1.mp3", false), false);
  assert.equal(await mod.mayReadStudentAsset(request(free.cookie), env, "/assets/world.js", true), false);
  assert.equal(await mod.mayReadStudentAsset(request(null), env, "/assets/world.js", true), false);
  assert.equal(await mod.mayReadPrivateMedia(request(pro.cookie), env, "/assets/world.js"), false, "a pass is never full library access");
});

test("headers are recreated by the Worker, never trusted from the browser", () => {
  const headers = new Headers({ "x-spanishcue-student-pass": "1", "x-spanishcue-student-alias": "Evil" });
  mod.applyStudentPassHeaders(headers, null);
  assert.equal(mod.studentPassFromHeaders(headers), false);
  assert.equal(mod.studentAliasFromHeaders(headers), "");
  mod.applyStudentPassHeaders(headers, { passId: "p", learnerId: "l", level: "a1", alias: "Zoë Ñ", revision: 1 });
  assert.equal(mod.studentPassFromHeaders(headers), true);
  assert.equal(mod.studentAliasFromHeaders(headers), "Zoë Ñ");
});

test("the Worker, the build and the hub wire the pass and nothing wider", () => {
  const worker = read("worker/index.ts");
  assert.match(worker, /const studentPass=!fullAccess&&studentPassScope\(pathname,lesson\?\.id\)\s*\? await studentWorldPass\(routedHeaders\.get\("cookie"\),env\)\.catch\(\(\)=>null\)\s*: null;/);
  assert.match(worker, /applyStudentPassHeaders\(verifiedHeaders,studentPass\);/);
  assert.match(worker, /const studentWorld=Boolean\(studentPass\)&&isStudentWorldLesson\(lesson\?\.id\);/);
  assert.match(worker, /\(lesson&&!isFreeLesson\(lesson\.id\)&&!fullAccess&&!gifted&&!studentWorld\)/);
  assert.match(worker, /premiumAudio && !fullAccess && !gifted && !\(topicAudio && shareFull\) && !studentAudio/);
  assert.match(worker, /\|\|Boolean\(lesson\)\|\|pathname==='\/jugar';/, "the hub is never served from the shared HTML cache");
  assert.doesNotMatch(worker, /VERIFIED_ACCESS_HEADER|set\(['"]x-chespanish-access-level/, "a pass never becomes a full-access header");
  const protect = read("scripts/protect-client-assets.mjs");
  assert.match(protect, /if \(studentFiles\.has\(file\)\) clientAssets\[`\/\$\{file\}`\]\.student = true;/);
  assert.match(protect, /!await mayReadPrivateMedia\(request,env,path\)&&!await mayReadStudentAsset\(request,env,path,media\.student===true\)/);
  assert.match(protect, /studentProtectedFiles\.length > protectedFiles\.length \* 0\.9/, "the build refuses a pass that covers the library");
  const page = read("app/jugar/page.tsx");
  assert.match(page, /const href = fullAccess \|\| studentPass \? lesson\.path : world\.open \?\? null;/);
  assert.match(page, /studentPassFromHeaders\(requestHeaders\)/);
  assert.doesNotMatch(read("app/jugar/StudentHub.tsx"), /student-pass/, "the client chunk never imports the server pass module");
});
