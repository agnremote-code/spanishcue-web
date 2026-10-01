import type { LevelId, LevelMeta } from "./types";

/** Level metadata. Week counts come from the objective map, not from here. */
export const levels: LevelMeta[] = [
  {
    id: "a1",
    code: "A1",
    name: "Primeros pasos",
    nameEn: "First steps",
    outcome: "Te presentas, hablas de tu vida diaria, tus gustos y tus planes, y resuelves situaciones básicas.",
    outcomeEn: "Introduce yourself, talk about daily life, likes and plans, and handle basic situations.",
    route: "México y Centroamérica",
    routeEn: "Mexico and Central America",
    support: "strong",
    color: "#30bda2",
    mascot: "/brand/mascot/walking.webp",
  },
  {
    id: "a2",
    code: "A2",
    name: "Vida cotidiana",
    nameEn: "Everyday life",
    outcome: "Cuentas lo que pasó, comparas, das instrucciones, resuelves gestiones y das tu opinión.",
    outcomeEn: "Tell what happened, compare, give instructions, handle services and give your opinion.",
    route: "El Caribe, Colombia y Venezuela",
    routeEn: "The Caribbean, Colombia and Venezuela",
    support: "moderate",
    color: "#77b94a",
    mascot: "/brand/mascot/pointing.webp",
  },
  {
    id: "b1",
    code: "B1",
    name: "Independiente",
    nameEn: "Independent",
    outcome: "Narras con todos los pasados, aconsejas, opinas, imaginas, reclamas y organizas un texto.",
    outcomeEn: "Narrate with every past tense, advise, give opinions, imagine, complain and organise a text.",
    route: "Los Andes",
    routeEn: "The Andes",
    support: "spanish-first",
    color: "#f4a52d",
    mascot: "/brand/mascot/studying.webp",
  },
  {
    id: "b2",
    code: "B2",
    name: "Precisión",
    nameEn: "Precision",
    outcome: "Eliges modo y tiempo con seguridad, argumentas, negocias, mitigas y entiendes varias variedades.",
    outcomeEn: "Choose mood and tense confidently, argue, negotiate, soften and follow several varieties.",
    route: "El Cono Sur",
    routeEn: "The Southern Cone",
    support: "mostly-spanish",
    color: "#f1754d",
    mascot: "/brand/mascot/speaking.webp",
  },
  {
    id: "c1",
    code: "C1",
    name: "Dominio operativo",
    nameEn: "Effective proficiency",
    outcome: "Entiendes lo implícito, reformulas, sintetizas fuentes y adecuas registro y estilo.",
    outcomeEn: "Understand what is implied, reformulate, synthesise sources and adapt register and style.",
    route: "España",
    routeEn: "Spain",
    support: "spanish-only",
    color: "#9d70d4",
    mascot: "/brand/mascot/seated.webp",
  },
  {
    id: "c2",
    code: "C2",
    name: "Maestría",
    nameEn: "Mastery",
    outcome: "Interpretas ambigüedad, ironía y subtexto, cambias de registro, medias y escribes con estilo propio.",
    outcomeEn: "Interpret ambiguity, irony and subtext, switch register, mediate and write with your own style.",
    route: "La gran gira hispana",
    routeEn: "The grand Hispanic tour",
    support: "spanish-only",
    color: "#374f76",
    mascot: "/brand/mascot/standing-crossed.webp",
  },
];

export const levelIds: LevelId[] = levels.map((level) => level.id);

export function levelMeta(id: string): LevelMeta | undefined {
  return levels.find((level) => level.id === id);
}
