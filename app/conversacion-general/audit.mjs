// Conversación general · editorial checks for the open questions that close a
// scene. A scene may be absurd, violent or dangerous; its questions are about
// the learner's real life and the human theme behind the scene (trust, power,
// first impressions, love, mistakes…), never a safety course. These checks are
// pure and shared: Noche abierta runs them in its tests and in
// scripts/check-noche-talk.mjs, and any other 3D class can run them too.

// The human themes a conversation can open. A set names one or two of them,
// the first being its main one.
export const TOPICS = Object.freeze([
  "relaciones", "viajes", "trabajo", "dinero", "ambicion", "amistad", "familia", "amor", "costumbres",
  "personalidad", "verguenza", "conflictos", "confianza", "mala-suerte", "decisiones", "recuerdos", "cultura",
  "humor", "incomodidad", "cambios", "errores", "suenos", "dilemas", "absurdo",
  "poder", "prejuicios", "ayuda", "emociones", "ciudad", "comida", "tiempo-libre", "salud",
]);

export const QUESTIONS_PER_SET = 5;

// Spanish words per question, by level: short and spoken at A0–A1, longer
// and more nuanced at C1–C2.
export const WORD_LIMITS = Object.freeze({
  A0: [2, 12], A1: [2, 12], A2: [3, 16], B1: [4, 22], B2: [5, 28], C1: [6, 34], C2: [6, 40],
});

// Naming a weapon turns a life question back into the object.
export const WEAPON_WORDS = /\b(armas?|armad[oa]s?|pistolas?|rev[oó]lver\w*|cuchillos?|navajas?|c[uú]ter|granadas?|gas pimienta|dispar\w*|balas?|balazos?|bombas?|explosiv\w*|apuñal\w*|tiroteo\w*)\b/iu;
// Safety, crime and emergency vocabulary: at most one question of a set.
export const RISK_WORDS = /\b(seguridad|insegur\w*|peligr\w*|polic[ií]a\w*|comisar[ií]a\w*|amenaz\w*|violen\w*|rob(o|os|ar|aron|aste|ó|an|ado|ada)\b|ladr[oó]n\w*|ladrones|asalt\w*|defender\w*|defensa|ambulancia\w*|emergencia\w*|denunci\w*|crimen\w*|criminal\w*|delincu\w*|agresi[oó]n\w*|atac\w*)/iu;
// Procedures and instructions are not conversation.
export const PROCEDURE_WORDS = /(c[oó]mo (debemos|debes|deber[ií]as|hay que|se debe) (actuar|reaccionar)|qu[eé] (debemos|debes|hay que|se debe) hacer|procedimiento|primeros auxilios|seguro m[eé]dico|protocolo|n[uú]mero de emergencias)/iu;

const STOP = new Set(("a al alguna alguien algo alguno algunos algunas como con cual cuales cuando de del donde el ella ellos en entre era es esa ese eso esta este esto fue ha haces hay la las le les lo los mas me mi mis muy no o para pero por porque que quien se si sin sobre su sus te tener tienes tu tus un una uno unos y ya yo vez veces tú ti").split(" "));
const fold = (text) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
export const normalize = (text) => fold(text).replace(/[^a-zñ0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
export const wordsOf = (text) => normalize(text).split(" ").filter(Boolean);
const contentWords = (text) => new Set(wordsOf(text).filter((word) => !STOP.has(word) && word.length > 2));
export function similarity(a, b) {
  const x = contentWords(a); const y = contentWords(b);
  if (!x.size || !y.size) return 0;
  let both = 0;
  for (const word of x) if (y.has(word)) both++;
  return both / (x.size + y.size - both);
}
// Two questions this close read as the same question.
export const NEAR_DUPLICATE = 0.6;

// One open question (two short ones at most), optionally followed by a short
// spoken prompt: «¿Tienes una cafetería favorita? Cuenta cómo la conociste.»
const isQuestion = (text) => /¿[^¿?]+\?/.test(text) && /\?["»”)]?(\s+[A-ZÁÉÍÓÚÑ][^¿?]{2,90}\.)?$/u.test(text.trim()) && (text.match(/¿/g) || []).length <= 2;

/**
 * Checks one set of questions for one level. `es` reads the Spanish half of a
 * bilingual string (A0). Returns a list of problems; empty means it passes.
 */
export function auditSet(questions, level, { es = (text) => text, names = [] } = {}) {
  const problems = [];
  if (!Array.isArray(questions) || questions.length !== QUESTIONS_PER_SET) return [`${level}: needs exactly ${QUESTIONS_PER_SET} questions`];
  const [min, max] = WORD_LIMITS[level] ?? [1, 60];
  let risky = 0;
  const openings = new Map();
  questions.forEach((question, i) => {
    const text = es(question);
    if (typeof text !== "string" || !text.trim()) { problems.push(`${level}#${i + 1}: empty`); return; }
    if (!isQuestion(text)) problems.push(`${level}#${i + 1}: not one open question: ${text}`);
    const count = wordsOf(text).length;
    if (count < min || count > max) problems.push(`${level}#${i + 1}: ${count} words (expected ${min}–${max}): ${text}`);
    if (WEAPON_WORDS.test(text)) problems.push(`${level}#${i + 1}: names a weapon: ${text}`);
    if (PROCEDURE_WORDS.test(text)) problems.push(`${level}#${i + 1}: asks for a procedure: ${text}`);
    if (RISK_WORDS.test(text)) risky++;
    for (const name of names) if (name && new RegExp(`\\b${name}\\b`, "u").test(text)) problems.push(`${level}#${i + 1}: asks about the story (${name}), not the learner: ${text}`);
    const opening = wordsOf(text).slice(0, 2).join(" ");
    openings.set(opening, (openings.get(opening) ?? 0) + 1);
  });
  if (risky > 1) problems.push(`${level}: ${risky} questions about safety, crime or emergencies (max 1)`);
  for (const [opening, n] of openings) if (n > 2) problems.push(`${level}: ${n} questions open with «${opening}…»`);
  for (let i = 0; i < questions.length; i++) for (let j = i + 1; j < questions.length; j++) {
    if (similarity(es(questions[i]), es(questions[j])) >= NEAR_DUPLICATE) problems.push(`${level}: #${i + 1} and #${j + 1} ask the same thing`);
  }
  return problems;
}

/**
 * Checks the levels of one scene against each other: no question repeated
 * across levels, and longer, richer questions as the level goes up.
 */
export function auditLevels(byLevel, { es = (text) => text } = {}) {
  const problems = [];
  const seen = new Map();
  const average = (level) => {
    const list = byLevel[level] ?? [];
    return list.reduce((sum, q) => sum + wordsOf(es(q)).length, 0) / Math.max(1, list.length);
  };
  for (const [level, list] of Object.entries(byLevel)) for (const question of list ?? []) {
    const key = normalize(es(question));
    if (seen.has(key)) problems.push(`${level}: repeats a ${seen.get(key)} question: ${es(question)}`);
    else seen.set(key, level);
  }
  const bands = [["A1", "A2"], ["B1", "B2"], ["C1", "C2"]].map((band) => band.filter((level) => byLevel[level]));
  const means = bands.filter((band) => band.length).map((band) => band.reduce((sum, level) => sum + average(level), 0) / band.length);
  for (let i = 1; i < means.length; i++) if (means[i] <= means[i - 1]) problems.push(`levels: band ${i + 1} is not richer than band ${i} (${means[i - 1].toFixed(1)} → ${means[i].toFixed(1)} words)`);
  return problems;
}

export function auditTopics(topics) {
  if (!Array.isArray(topics) || topics.length < 1 || topics.length > 2) return ["topics: one or two"];
  return topics.filter((topic) => !TOPICS.includes(topic)).map((topic) => `topics: unknown «${topic}»`);
}

/**
 * Checks a whole class: the same question never appears twice, two scenes in
 * a row never share their main theme, and no theme takes over.
 */
export function auditCorpus(entries, { es = (text) => text, maxShare = 0.15 } = {}) {
  const problems = [];
  const seen = new Map();
  for (const { id, sets } of entries) for (const [level, list] of Object.entries(sets)) for (const question of list) {
    const key = normalize(es(question));
    const where = `${id}/${level}`;
    if (seen.has(key)) problems.push(`${where}: same question as ${seen.get(key)}: ${es(question)}`);
    else seen.set(key, where);
  }
  const counts = new Map();
  entries.forEach(({ id, topics }, i) => {
    const main = topics?.[0];
    counts.set(main, (counts.get(main) ?? 0) + 1);
    const before = entries[i - 1];
    if (before && before.topics?.[0] === main) problems.push(`${id}: same main theme as ${before.id} right before it (${main})`);
  });
  const limit = Math.max(2, Math.ceil(entries.length * maxShare));
  for (const [topic, n] of counts) if (n > limit) problems.push(`theme «${topic}» is the main one of ${n} scenes (max ${limit})`);
  return problems;
}
