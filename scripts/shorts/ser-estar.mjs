// Series «Ser o estar»: one Short per adjective that changes meaning.
// Spanish sentences come from app/ser-o-estar/contenido.ts (same items as the free page);
// the English glosses are the only text written here.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const SER = ["soy", "eres", "es", "somos", "sois", "son"];
const ESTAR = ["estoy", "estás", "está", "estamos", "estáis", "están"];

export const GLOSS = {
  listo: ["smart", "ready"],
  malo: ["bad (a bad person or poor quality)", "sick, or gone bad"],
  bueno: ["good (a good person or good quality)", "tasty"],
  rico: ["rich", "delicious"],
  aburrido: ["boring", "bored"],
  despierto: ["sharp, quick-witted", "awake"],
  vivo: ["clever, street-smart", "alive"],
  verde: ["green (the color)", "unripe, or inexperienced"],
  orgulloso: ["arrogant, too proud", "proud of someone"],
  atento: ["kind, considerate", "paying attention"],
  abierto: ["open-minded", "open, not closed"],
  interesado: ["self-serving", "interested"],
  seguro: ["safe", "sure"],
  molesto: ["annoying", "annoyed"],
  libre: ["free, with freedom", "free, available"],
  cansado: ["tiring", "tired"],
  delicado: ["fragile, sensitive", "in poor health"],
  grave: ["serious (a problem)", "seriously ill"],
};

/** Parses the `adjetivos` array out of the TS source without a TS toolchain. */
export function loadAdjetivos(repoRoot) {
  const src = readFileSync(`${repoRoot}/app/ser-o-estar/contenido.ts`, "utf8");
  const block = src.slice(src.indexOf("export const adjetivos"));
  const out = [];
  const re = /\{ slug: "([^"]+)", adj: "([^"]+)",[^\n]*?items: \[\s*([\s\S]*?)\] \}/g;
  let m;
  while ((m = re.exec(block))) {
    const items = [...m[3].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1]);
    out.push({ slug: m[1], adj: m[2], items });
  }
  return out;
}

function fill(raw) {
  const [sentence, person, which] = raw.split("|");
  const form = (which === "s" ? SER : ESTAR)[Number(person)];
  const [before, after] = sentence.split("___");
  const full = `${before}${form}${after}`;
  // Voice gender must match the speaker: first-person feminine → female voice, masculine → male.
  let voice = null;
  if (/^(Yo|Hoy|Todavía)?\s*___/.test(sentence) || /\byo ___/i.test(sentence) || Number(person) === 0) {
    const word = after.trim().split(/[\s,.:;!?]/)[0];
    voice = /as?$/.test(word) ? "f" : /os?$/.test(word) ? "m" : null;
  }
  return { gap: `${before}___${after}`, form, full, verb: which === "s" ? "ser" : "estar", voice };
}

export function serEstarShorts(repoRoot) {
  return loadAdjetivos(repoRoot).filter((a) => GLOSS[a.adj]).map((a, i) => {
    const filled = a.items.map(fill);
    const notYo = (f) => !/^Yo /.test(f.full) && f.voice === null;
    const serEx = filled.find((f) => f.verb === "ser" && notYo(f)) || filled.find((f) => f.verb === "ser");
    const estarEx = filled.find((f) => f.verb === "estar" && notYo(f)) || filled.find((f) => f.verb === "estar");
    const quiz = filled.find((f) => f !== serEx && f !== estarEx && notYo(f)) || filled.find((f) => f !== serEx && f !== estarEx);
    const [gSer, gEstar] = GLOSS[a.adj];
    const path = `/ser-o-estar/${a.slug}`;
    return {
      id: `ser-estar-${a.slug}`,
      series: "ser-estar",
      index: i,
      path,
      title: `SER ${a.adj} vs ESTAR ${a.adj} | Spanish in 30 seconds`,
      hook: { big: [`SER ${a.adj}`, `ESTAR ${a.adj}`], say: `¿Ser ${a.adj} o estar ${a.adj}?` },
      ser: { gloss: gSer, ex: serEx, say: `With ser, ${a.adj} means: ${gSer.replace(/\(.*?\)/g, "").trim()}.` },
      estar: { gloss: gEstar, ex: estarEx, say: `With estar, it means: ${gEstar.replace(/\(.*?\)/g, "").trim()}.` },
      quiz: { ex: quiz, say: "¿Ser o estar?" },
      cta: { say: "Practica gratis en SpanishCue.", url: `spanishcue.com${path}` },
    };
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(serEstarShorts(process.argv[2] || "."), null, 2));
}
