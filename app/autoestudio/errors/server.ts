/**
 * Homework error history: learner writes through the pass session, teacher
 * reads through the owner-scoped session. Imported only by route handlers.
 * The history is append-only; a later correct answer only fills corrected_at.
 */
import { SECTION_ORDER, type SectionKey } from "../curriculum/types";
import { findModule } from "../curriculum/course";
import { resolveItem } from "../curriculum/lookup";
import { categorize, categories, defaultExplanation, type CategoryId } from "./categorize";
import { classesFor, type RecommendedClass } from "./catalog";
import { evolution, summarizeActivities, summarizeCategories, summarizeWeeks, type ErrorRecord, type TeacherNote } from "./model";
import { buildClassPlan } from "./plan";
import { configured, fail, idPattern, randomId, rateLimit, readJson, response, sameOrigin, teacher, verifyShareSession, type ShareEnvironment } from "../share/server";

type ErrorRow = { id: string; module_id: string; section: SectionKey; exercise_id: string; item_index: number; exercise_type: string; question: string; answer_given: string; answer_correct: string; explanation: string; category: CategoryId; category_label: string; attempt: number; verdict: "wrong" | "accent"; created_at: string; corrected_at: string | null };
type NoteRow = { id: string; category: string; kind: "note" | "worked"; text: string; created_at: string };
type EventRow = { kind: string; lesson_id: number; category: string; module_id: string; created_at: string };

const toRecord = (r: ErrorRow): ErrorRecord => ({ id: r.id, moduleId: r.module_id, section: r.section, exerciseId: r.exercise_id, itemIndex: r.item_index, type: r.exercise_type, question: r.question, given: r.answer_given, correct: r.answer_correct, explanation: r.explanation, category: r.category, categoryLabel: r.category_label, attempt: r.attempt, verdict: r.verdict, createdAt: r.created_at, correctedAt: r.corrected_at });
const toNote = (n: NoteRow): TeacherNote => ({ id: n.id, category: n.category as TeacherNote["category"], kind: n.kind, text: n.text, createdAt: n.created_at });
const text = (value: unknown, max: number) => (typeof value === "string" ? value.normalize("NFC").trim().slice(0, max) : "");

async function ownerOfPass(env: ShareEnvironment, passId: string) {
  const row = await env.DB.prepare("SELECT owner_id FROM autoestudio_passes WHERE id=? AND revoked_at IS NULL").bind(passId).first<{ owner_id: string }>();
  if (!row) fail(401, "invalid_pass");
  return row.owner_id;
}

/** POST /api/autoestudio/errors — a checked answer from the learner's own pass. */
export async function recordAnswer(request: Request, env: ShareEnvironment) {
  sameOrigin(request); configured(env);
  const identity = await verifyShareSession(request.headers.get("cookie"), env);
  if (!identity) fail(401, "invalid_pass");
  await rateLimit(env, `errors-write:${identity.passId}`, 240);
  const data = await readJson(request);
  if (Object.keys(data).some((k) => !["passId", "revision", "moduleId", "section", "exerciseId", "itemIndex", "given", "verdict", "attempt"].includes(k)) || data.passId !== identity.passId || data.revision !== identity.revision) fail(409, "session_changed");
  const moduleId = text(data.moduleId, 8);
  if (!new RegExp(`^${identity.level}-(0[1-9]|1[0-9]|20)$`).test(moduleId)) fail(403, "outside_level");
  const section = data.section as SectionKey;
  if (!SECTION_ORDER.includes(section)) fail(400, "invalid_error");
  const exerciseId = text(data.exerciseId, 80), itemIndex = Number(data.itemIndex), attempt = Number(data.attempt), verdict = data.verdict;
  if (!exerciseId || !Number.isInteger(itemIndex) || itemIndex < 0 || itemIndex > 99 || !Number.isInteger(attempt) || attempt < 1 || attempt > 999 || !["correct", "accent", "wrong"].includes(String(verdict))) fail(400, "invalid_error");
  const mod = findModule(identity.level, `semana-${Number(moduleId.split("-")[1])}`);
  const item = mod ? resolveItem(mod, section, exerciseId, itemIndex) : null;
  if (!mod || !item) fail(404, "exercise_not_found");
  const now = new Date().toISOString();
  if (verdict === "correct") {
    // The original mistake stays; only its later correction is noted, once.
    const result = await env.DB.prepare("UPDATE homework_errors SET corrected_at=? WHERE learner_id=? AND module_id=? AND section=? AND exercise_id=? AND item_index=? AND corrected_at IS NULL").bind(now, identity.learnerId, moduleId, section, exerciseId, itemIndex).run();
    return response({ corrected: result.meta?.changes ?? 0 });
  }
  const given = text(data.given, 400);
  if (!given) fail(400, "invalid_error");
  const category = categorize({ section, given, correct: item.correct, question: item.question, why: item.why, verdict: verdict as "wrong" | "accent", objectives: mod.newObjectives });
  const correct = item.correct.join(" · ");
  const id = randomId();
  await env.DB.prepare("INSERT INTO homework_errors(id,learner_id,owner_id,pass_id,level,module_id,section,exercise_id,item_index,exercise_type,question,answer_given,answer_correct,explanation,category,category_label,attempt,verdict,created_at) SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE EXISTS(SELECT 1 FROM autoestudio_passes WHERE id=? AND learner_id=? AND revision=? AND revoked_at IS NULL)")
    .bind(id, identity.learnerId, await ownerOfPass(env, identity.passId), identity.passId, identity.level, moduleId, section, exerciseId, itemIndex, item.type, item.question.slice(0, 600), given, correct.slice(0, 600), (item.why ?? defaultExplanation(category.id, given, item.correct[0] ?? "")).slice(0, 800), category.id, category.label, attempt, verdict, now, identity.passId, identity.learnerId, identity.revision).run();
  return response({ recorded: id, category: category.id, label: category.label }, 201);
}

/** POST /api/autoestudio/events — the learner saw/opened/previewed a recommended class. */
export async function recordEvent(request: Request, env: ShareEnvironment) {
  sameOrigin(request); configured(env);
  const identity = await verifyShareSession(request.headers.get("cookie"), env);
  if (!identity) fail(401, "invalid_pass");
  await rateLimit(env, `events:${identity.passId}`, 120);
  const data = await readJson(request);
  const kind = String(data.kind), lessonId = Number(data.lessonId), category = text(data.category, 40), moduleId = text(data.moduleId, 8);
  if (!["recommended", "opened", "previewed", "gated"].includes(kind) || !Number.isInteger(lessonId) || lessonId < 1 || !(category in categories)) fail(400, "invalid_event");
  await env.DB.prepare("INSERT INTO homework_events(id,learner_id,owner_id,kind,lesson_id,category,module_id,created_at) VALUES(?,?,?,?,?,?,?,?)").bind(randomId(), identity.learnerId, await ownerOfPass(env, identity.passId), kind, lessonId, category, moduleId, new Date().toISOString()).run();
  return response({ ok: true }, 201);
}

async function ownedLearner(env: ShareEnvironment, owner: string, id: string) {
  if (!idPattern.test(id)) fail(404, "learner_not_found");
  const learner = await env.DB.prepare("SELECT id,alias,created_at AS createdAt FROM autoestudio_learners WHERE id=? AND owner_id=?").bind(id, owner).first<{ id: string; alias: string | null; createdAt: string }>();
  if (!learner) fail(404, "learner_not_found");
  const pass = await env.DB.prepare("SELECT level FROM autoestudio_passes WHERE learner_id=? AND owner_id=? ORDER BY created_at DESC LIMIT 1").bind(id, owner).first<{ level: string }>();
  return { learner, level: pass?.level ?? "a1" };
}

export type LearnerErrorsResponse = {
  learner: { id: string; alias: string | null; createdAt: string };
  level: string;
  errors: ErrorRecord[];
  notes: TeacherNote[];
  events: { kind: string; lessonId: number; category: string; moduleId: string; createdAt: string }[];
  categories: ReturnType<typeof summarizeCategories>;
  weeks: ReturnType<typeof summarizeWeeks>;
  activities: ReturnType<typeof summarizeActivities>;
  evolution: ReturnType<typeof evolution>;
  plan: ReturnType<typeof buildClassPlan>;
  recommendations: { category: CategoryId; label: string; score: number; reason: string; classes: RecommendedClass[]; opened: boolean; previewed: boolean; shown: number }[];
};

/** GET /api/autoestudio/learners/:id/errors — teacher view of one learner. */
export async function learnerErrors(request: Request, id: string, env: ShareEnvironment) {
  const owner = teacher(request); configured(env); await rateLimit(env, `teacher:${owner}`);
  const { learner, level } = await ownedLearner(env, owner, id);
  const [errorRows, noteRows, eventRows] = await Promise.all([
    env.DB.prepare("SELECT * FROM homework_errors WHERE learner_id=? AND owner_id=? ORDER BY created_at DESC LIMIT 2000").bind(id, owner).all<ErrorRow>(),
    env.DB.prepare("SELECT id,category,kind,text,created_at FROM homework_teacher_notes WHERE learner_id=? AND owner_id=? ORDER BY created_at DESC LIMIT 500").bind(id, owner).all<NoteRow>(),
    env.DB.prepare("SELECT kind,lesson_id,category,module_id,created_at FROM homework_events WHERE learner_id=? AND owner_id=? ORDER BY created_at DESC LIMIT 500").bind(id, owner).all<EventRow>(),
  ]);
  const errors = errorRows.results.map(toRecord), notes = noteRows.results.map(toNote);
  const events = eventRows.results.map((e) => ({ kind: e.kind, lessonId: e.lesson_id, category: e.category, moduleId: e.module_id, createdAt: e.created_at }));
  const summaries = summarizeCategories(errors, notes);
  const recommendations: LearnerErrorsResponse["recommendations"] = [];
  const classIds: Partial<Record<CategoryId, number[]>> = {};
  for (const s of summaries) {
    const classes = classesFor(s.category, level);
    if (!classes.length) continue;
    classIds[s.category] = classes.map((c) => c.id);
    if (s.status === "superado") continue;
    const own = events.filter((e) => e.category === s.category);
    recommendations.push({ category: s.category, label: s.label, score: s.score, reason: `${s.errors} ${s.errors === 1 ? "error" : "errores"}${s.recurrent ? `, ${s.recurrent} recurrentes` : ""}${s.corrected ? `, ${s.corrected} corregidos` : ""}`, classes, opened: own.some((e) => e.kind === "opened"), previewed: own.some((e) => e.kind === "previewed" || e.kind === "gated"), shown: own.filter((e) => e.kind === "recommended").length });
  }
  const body: LearnerErrorsResponse = { learner, level, errors, notes, events, categories: summaries, weeks: summarizeWeeks(errors), activities: summarizeActivities(errors), evolution: evolution(errors), plan: buildClassPlan(learner.alias ?? "El alumno", level, errors, notes, classIds), recommendations };
  return response(body);
}

/** POST /api/autoestudio/learners/:id/notes — a teacher note or «worked in class» mark. */
export async function addTeacherNote(request: Request, id: string, env: ShareEnvironment) {
  sameOrigin(request); const owner = teacher(request); configured(env); await rateLimit(env, `notes:${owner}`, 60);
  await ownedLearner(env, owner, id);
  const data = await readJson(request);
  const kind = data.kind === "worked" ? "worked" : data.kind === "note" ? "note" : null;
  const category = text(data.category, 40);
  const body = text(data.text, 1000);
  if (!kind || !(category === "general" || category in categories) || (kind === "note" && !body)) fail(400, "invalid_note");
  const note: TeacherNote = { id: randomId(), category: category as TeacherNote["category"], kind, text: body, createdAt: new Date().toISOString() };
  await env.DB.prepare("INSERT INTO homework_teacher_notes(id,owner_id,learner_id,category,kind,text,created_at) VALUES(?,?,?,?,?,?,?)").bind(note.id, owner, id, note.category, note.kind, note.text, note.createdAt).run();
  return response({ note }, 201);
}
