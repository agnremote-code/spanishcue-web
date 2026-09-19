export const BOARD_CONVERSATION_STYLE = "boards" as const;

export const boardCatalogMetadata = {
  category: "Conversación" as const,
  conversationMode: BOARD_CONVERSATION_STYLE,
  collection: "Tableros" as const,
  countryCollection: false as const,
  special: true as const,
};

export const boardLessonEntries = [
  {
    integrationKey: "boards-b1-de-eso-si-hablo",
    ...boardCatalogMetadata,
    level: "B1" as const,
    title: "De eso sí hablo",
    subtitle: "72 preguntas con historias, experiencias, lugares, aprendizajes y planes para sostener una conversación accesible",
    duration: "45 min · banco reutilizable",
    tag: "TABLERO · 72 PRINCIPALES · 12 FINALES",
    path: "/tablero-de-eso-si-hablo",
    goals: [
      "Conectar hechos y detalles en relatos breves comprensibles",
      "Describir experiencias y explicar razones con recursos B1",
      "Hacer y responder repreguntas para sostener la conversación",
    ],
    warmup: "Elegí una categoría cercana y contá qué tema te resulta más fácil desarrollar.",
    explanation: "Tablero B1 con seis categorías combinables, sorteo sin repetición, dos repreguntas específicas por principal y cierre abierto.",
    practice: [],
    speaking: [],
    homework: "",
  },
  {
    integrationKey: "boards-b2-no-es-tan-simple",
    ...boardCatalogMetadata,
    level: "B2" as const,
    title: "No es tan simple",
    subtitle: "72 preguntas para contrastar experiencias, argumentar y revisar una postura cuando aparece una condición nueva",
    duration: "45 min · banco reutilizable",
    tag: "TABLERO · 72 PRINCIPALES · 24 CAMBIOS",
    path: "/tablero-no-es-tan-simple",
    goals: [
      "Desarrollar argumentos cotidianos con ejemplos y contrastes",
      "Matizar una postura sin convertir cada tema en debate abstracto",
      "Revisar conclusiones cuando una condición relevante cambia",
    ],
    warmup: "Elegí un tema cotidiano en el que tu respuesta casi siempre dependa del contexto.",
    explanation: "Tablero B2 con seis categorías combinables, sorteo sin repetición, repreguntas específicas y 24 cambios opcionales de condición.",
    practice: [],
    speaking: [],
    homework: "",
  },
] as const;
