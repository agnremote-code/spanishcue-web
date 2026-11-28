// Series «Por o para»: one Short per use. Sentences come from app/por-o-para/usos.ts (the items of
// the free page /por-o-para/<slug>); only the English labels are written here.
import { readFileSync } from "node:fs";

export const USE_EN = {
  causa: "cause, reason",
  "lugar-de-paso": "moving through a place",
  "partes-del-dia": "parts of the day",
  duracion: "how long something lasts",
  medio: "means: phone, email, internet",
  "intercambio-y-precio": "exchange and price",
  "agente-de-la-pasiva": "who did it (passive)",
  "expresiones-con-por": "fixed expressions",
  finalidad: "purpose, goal",
  destinatario: "who it's for",
  destino: "destination",
  plazo: "deadline",
  opinion: "opinion",
  comparacion: "compared to what you expect",
  utilidad: "what it's used for",
};

export function loadUsos(repoRoot) {
  const src = readFileSync(`${repoRoot}/app/por-o-para/usos.ts`, "utf8");
  const out = [];
  const re = /\{ slug: "([^"]+)", name: "([^"]+)", prep: "(por|para)",[\s\S]*?items: \[\s*([\s\S]*?)\] \}/g;
  let m;
  while ((m = re.exec(src))) out.push({ slug: m[1], name: m[2], prep: m[3], items: [...m[4].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1]) });
  return out;
}

const fill = (gap, prep) => { const [b, a] = gap.split("___"); return { full: `${b}${prep}${a}`, form: prep, gap }; };

export function porParaShorts(repoRoot) {
  return loadUsos(repoRoot).filter((u) => USE_EN[u.slug]).map((u, i) => {
    const P = u.prep.toUpperCase();
    const [e1, e2, q] = u.items.map((g) => fill(g, u.prep));
    const en = USE_EN[u.slug];
    return {
      id: `por-para-${u.slug}`,
      series: "por-para",
      index: i,
      path: `/por-o-para/${u.slug}`,
      title: `POR or PARA? ${en[0].toUpperCase()}${en.slice(1)} → ${P} | Spanish in 30 seconds`,
      hook: { lines: ["POR o PARA?", en], sep: "↓", say: "¿Por o para?" },
      teach: [
        { tag: P, tagClass: u.prep === "por" ? "ser" : "estar", eq: [en, P], ex: { ...e1, voice: "f" } },
        { tag: P, tagClass: u.prep === "por" ? "ser" : "estar", eq: [u.name, P], ex: { ...e2, voice: "m" } },
      ],
      quiz: { gap: q.gap, options: ["POR", "PARA"], answer: u.prep === "por" ? 0 : 1, full: q.full, form: q.form, voice: "f", say: "¿Por o para?" },
      cta: { say: "Practica gratis en SpanishCue." },
      meta: {
        lines: [`${en[0].toUpperCase()}${en.slice(1)} → ${P} (${u.name}).`, `${e1.full}\n${e2.full}`],
        hashtags: "#spanish #learnspanish #porVsPara #spanishgrammar #español #shorts",
        tags: ["learn spanish", "por vs para", `por o para`, en, "spanish grammar", "spanish lesson", "español"],
      },
    };
  });
}
