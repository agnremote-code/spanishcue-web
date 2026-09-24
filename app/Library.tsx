"use client";
import Link from "next/link";
import MoodTenseDisclosure from "./verbal-system/MoodTenseDisclosure";
import VerbalPosition from "./verbal-system/VerbalPosition";
import GrammarStep from "./grammar-steps/GrammarStep";
import LogoutButton from "./LogoutButton";
import LessonPreview from "./LessonPreview";
import { conversationLessonHref } from "./conversation-families/navigation";
import type { CEFRLevel } from "./conversation-families/types";
import "./conversation-families/families.css";
import LanguageSwitcher from "./i18n/LanguageSwitcher";
import { useI18n } from "./i18n/LocaleProvider";
import type { MessageKey } from "./i18n/messages";
import {
  SpanishCueFooter,
  SpanishCueHero,
  SpanishCueBrand,
  SpanishCueWordmark,
  SPANISH_SPEAKING_COUNTRY_COUNT,
} from "./SpanishCueBrand";
import {
  BenefitSection,
  CTASection,
  FAQ,
  FounderPricePill,
  HowItWorks,
  LibraryConversionBanner,
  MarketingLink,
  Pricing,
  ProblemSolution,
  ProductPreview,
  SocialProof,
} from "./marketing/MarketingSections";
import {
  audienceFromAccess,
  primaryCtaFor,
  secondaryCtaFor,
  subscriptionCtaFor,
} from "./marketing/cta-state";
import { trackMarketingEvent } from "./marketing/analytics";

import { useEffect, useMemo, useRef, useState } from "react";
import "./news.css";
import "./library-access.css";
import "./catalog-cards.css";
import "./top-area.css";
import "./library-brand.css";
import "./library-architecture.css";
import { conversationNews } from "./conversation-worlds/catalog";
import {
  filterLessons,
  availableLevels,
  familyLessonsForCategory,
  groupLessonsByLevel,
} from "./library-filters.mjs";

type Category =
  "Gramática" | "Conversación" | "Escucha" | "Fonética" | "Vocabulario";
export type CatalogItem = {
  familyId?: string;
  legacyLessonIds?: number[];
  searchAliases?: string[];
  countrySequence?: number;
  previewByLevel?: Partial<Record<CEFRLevel,{hook:string;image?:string}>>;
  free: boolean;
  href: string;
  id: number;
  level: string;
  levels?: string[];
  displayLevel?: string;
  category: Category;
  conversationMode?: "worlds" | "play" | "boards";
  collection?: string;
  countryCollection?: boolean;
  verbalSystem?: boolean;
  verbalMood?: string;
  temporalPlane?: string;
  productiveStatus?: string;
  title: string;
  subtitle: string;
  duration: string;
  tag: string;
  goals: string[];
  warmup: string;
  explanation: string;
  practice: string[];
  speaking: string[];
  homework: string;
  special?: boolean;
  path?: string;
  image: string;
  curriculumOrder?: number;
  curriculumSequence?: number;
  routeOrder: number;
  routeSequence: number;
  requires?: number[];
};

const levelNameKeys: Record<string, MessageKey> = {
  A1: "level.a1",
  A2: "level.a2",
  B1: "level.b1",
  B2: "level.b2",
  C1: "level.c1",
  C2: "level.c2",
};
const levelGroups = [
  {
    id: "basic",
    label: "level.group.basic" as MessageKey,
    copy: "level.group.basicCopy" as MessageKey,
    levels: ["A1", "A2"],
  },
  {
    id: "intermediate",
    label: "level.group.intermediate" as MessageKey,
    copy: "level.group.intermediateCopy" as MessageKey,
    levels: ["B1", "B2"],
  },
  {
    id: "advanced",
    label: "level.group.advanced" as MessageKey,
    copy: "level.group.advancedCopy" as MessageKey,
    levels: ["C1", "C2"],
  },
];

const categoryMessageKeys: Record<Category, MessageKey> = {
  Gramática: "category.grammar",
  Conversación: "category.conversation",
  Escucha: "category.listening",
  Fonética: "category.pronunciation",
  Vocabulario: "category.vocabulary",
};
const libraryNews = [
  {
    lessonId: 119,
    kicker: "NUEVA CLASE · GRAMÁTICA C1",
    route: "PCIC 12 · ARQUITECTURA VERBAL",
    title: "La Cámara de la Acción",
    copy: "La misma acción se observa desde el inicio, el proceso, el logro, la acumulación o el resultado. Diez pasos para interpretar la perspectiva antes de elegir la estructura.",
    symbol: "C1",
    words: ["enfocar", "acumular", "interpretar"],
  },
  {
    lessonId: 118,
    kicker: "NUEVA CLASE · GRAMÁTICA C1",
    route: "PCIC 10–11 · MATIZ Y AMBIGÜEDAD",
    title: "El Archivo de las Dos Lecturas",
    copy: "Una frase, dos hipótesis y una investigación: elipsis discursiva, dislocación, nominalizaciones, roles semánticos y reformulación deliberada.",
    symbol: "A/B",
    words: ["interpretar", "investigar", "reformular"],
  },
  {
    lessonId: 117,
    kicker: "NUEVA CLASE · GRAMÁTICA B2",
    route: "PCIC 12.2.5–12.2.6 · CONEXIONES VERBALES",
    title: "El Panel de Conexiones",
    copy: "Depender de, contar con, insistir en y otros patrones encajan con nombres, infinitivos u oraciones; los predicativos muestran cómo llega alguien o en qué estado queda algo.",
    symbol: "V+P",
    words: ["conectar", "significar", "precisar"],
  },
  {
    lessonId: 116,
    kicker: "NUEVA CLASE · GRAMÁTICA B2",
    route: "PCIC 10–11 · EDICIÓN Y AMBIGÜEDAD",
    title: "La Mesa del Editor",
    copy: "Titulares, anuncios y descripciones pasan por una mesa de edición para separar dos lecturas, ordenar complementos y elegir entre infinitivo y oración.",
    symbol: "ED",
    words: ["interpretar", "editar", "desambiguar"],
  },
  {
    lessonId: 115,
    kicker: "NUEVA CLASE · GRAMÁTICA B1",
    route: "PCIC 12.1 · PERÍFRASIS Y CAMBIO",
    title: "La Línea de los Cambios",
    copy: "Hábito, comienzo, continuidad, interrupción, repetición e inminencia se vuelven puntos visibles de una historia personal de 45 minutos.",
    symbol: "→",
    words: ["empezar", "seguir", "cambiar"],
  },
  {
    lessonId: 114,
    kicker: "NUEVA CLASE · GRAMÁTICA B1",
    route: "PCIC 10–11 · ELIPSIS Y MODIFICACIÓN",
    title: "El Laboratorio de la Segunda Versión",
    copy: "La misma información adopta una forma más natural: núcleos elípticos, aclaraciones entre comas, restricción e intensidad sin repeticiones innecesarias.",
    symbol: "Ø",
    words: ["quitar", "aclarar", "reformular"],
  },
  {
    lessonId: 113,
    kicker: "NUEVA CLASE · GRAMÁTICA A2",
    route: "PCIC 12–13 · ORACIÓN FLEXIBLE",
    title: "La Sala de las Posiciones",
    copy: "Tiempo, lugar y modo cambian de posición sin romper la frase. Preguntas disyuntivas, clima impersonal, exclamaciones y exhortaciones en 45 minutos reales.",
    symbol: "↔",
    words: ["mover", "enfocar", "transformar"],
  },
  {
    lessonId: 112,
    kicker: "NUEVA CLASE · GRAMÁTICA A2",
    route: "PCIC 10–11 · DESCRIPCIÓN PRECISA",
    title: "El Estudio del Detalle",
    copy: "Participios adjetivales, aposición, colectivos y comparaciones para describir, recomendar y reaccionar sin acumular palabras innecesarias.",
    symbol: "+",
    words: ["precisar", "comparar", "recomendar"],
  },
  {
    lessonId: 111,
    kicker: "NUEVA CLASE · GRAMÁTICA A1",
    route: "PCIC 12–13 · ORACIÓN SIMPLE",
    title: "La Mesa de Montaje",
    copy: "Quién, verbo e información se convierten en piezas visibles para construir, negar, preguntar y mover una oración completa.",
    symbol: "SVO",
    words: ["construir", "negar", "preguntar"],
  },
  {
    lessonId: 110,
    kicker: "NUEVA CLASE · GRAMÁTICA A1",
    route: "PCIC 10–11 · GRUPOS NOMINALES",
    title: "El Taller de las Capas",
    copy: "De casa a una casa grande con jardín: expansión progresiva, piezas móviles y conversación real sin volver a enseñar sustantivos, artículos o adjetivos.",
    symbol: "+",
    words: ["combinar", "expandir", "describir"],
  },
  {
    lessonId: 109,
    kicker: "NUEVA SIMULACIÓN · B1",
    route: "CONVERSACIÓN + NEGOCIACIÓN + SOCIEDAD",
    title: "La isla vota",
    copy: "Treinta y seis personas, recursos limitados y ocho decisiones fundacionales. Liderazgo, moneda, leyes, castigos, trabajos y reparto: primero se discute, después se vota.",
    symbol: "8",
    words: ["negociar", "votar", "acordar"],
  },
  {
    lessonId: 108,
    kicker: "NUEVA CLASE · VOCABULARIO A2–B1",
    route: "WORD BANK · 60 TARJETAS · 4 MODOS",
    title: "El Banco de Palabras",
    copy: "Seis mundos cotidianos, apoyo bilingüe opcional y cuatro recorridos para pasar de reconocer a usar: explorar, completar, emparejar y hablar.",
    symbol: "Ab",
    words: ["descubrir", "recuperar", "usar"],
  },
  {
    lessonId: 107,
    kicker: "NUEVA MINI CLASE · A1–C1",
    route: "SISTEMA VERBAL · CONSULTA RÁPIDA",
    title: "Modo vs. tiempo verbal",
    copy: "Una base breve para distinguir cómo presenta la acción el hablante y cuándo la sitúa. La misma ayuda aparece desplegable dentro de todas las clases verbales.",
    symbol: "M/T",
    words: ["distinguir", "ubicar", "comprender"],
  },
  {
    lessonId: 106,
    kicker: "NUEVA AVENTURA GRAMATICAL · A1 GUIADO",
    route: "OBJETO DIRECTO + INDIRECTO + PRONOMBRES",
    title: "La estación de los dos destinos",
    copy: "Una carta, un destinatario y dos funciones distintas. Ocho estaciones, cuarenta decisiones con explicación, una mesa de envíos interactiva y un atlas de consulta.",
    symbol: "OD / OI",
    words: ["entender", "distinguir", "hablar"],
  },
  {
    lessonId: 105,
    kicker: "NUEVA CLASE DE ESCUCHA · A2",
    route: "COMPRENSIÓN AUDITIVA + FANTASÍA",
    title: "El hotel de lo imposible",
    copy: "Diez habitaciones, diez historias nuevas y cien preguntas. Audios MP3 incrustados, dos escuchas, opción múltiple, respuestas abiertas y lectura final.",
    symbol: "♫",
    words: ["escuchar", "descubrir", "comprender"],
  },
  ...conversationNews,
  {
    lessonId: 46,
    kicker: "NUEVO MUNDO GRAMATICAL · A1–A2",
    route: "PCIC · 7. EL PRONOMBRE",
    title: "La Central de las Identidades",
    copy: "Una central nocturna para seguir sujetos, objetos, destinatarios y referencias sin repetir nombres. Cinco vías, práctica autocorregible y producción oral.",
    symbol: "07",
    words: ["referir", "conectar", "aclarar"],
  },
  {
    lessonId: 47,
    kicker: "NUEVO MUNDO GRAMATICAL · A1–A2",
    route: "PCIC · 8. EL ADVERBIO Y LAS LOCUCIONES ADVERBIALES",
    title: "La Torre de las Coordenadas",
    copy: "Una torre 3D para situar cada acción en lugar, tiempo, cantidad y modo, dominar muy/mucho y preguntar con dónde, cómo, cuándo y por qué.",
    symbol: "08",
    words: ["ubicar", "ordenar", "matizar"],
  },
  {
    lessonId: 48,
    kicker: "NUEVO MUNDO GRAMATICAL · A1–A2",
    route: "PCIC · 9. EL VERBO",
    title: "La Ciudad de los Motores",
    copy: "Una ciudad cinemática para construir el sistema verbal desde el presente y ser/estar/hay hasta los planes y las tres miradas básicas al pasado.",
    symbol: "09",
    words: ["conjugar", "situar", "narrar"],
  },
  {
    lessonId: 43,
    kicker: "NUEVO MUNDO GRAMATICAL · A1",
    route: "PCIC · 4. LOS DEMOSTRATIVOS",
    title: "El Observatorio de las Distancias",
    copy: "Un observatorio nocturno para dominar este, ese, aquel y las formas neutras. Cinco lentes progresivas, ocho coordenadas autocorregibles y producción oral.",
    symbol: "04",
    words: ["señalar", "ubicar", "contrastar"],
  },
  {
    lessonId: 44,
    kicker: "NUEVO MUNDO GRAMATICAL · A1",
    route: "PCIC · 5. LOS POSESIVOS",
    title: "La Casa de las Pertenencias",
    copy: "Una mansión de habitaciones y propietarios para comprender mi, tu, su, nuestro y las formas tónicas sin confundir quién posee con qué se posee.",
    symbol: "05",
    words: ["pertenecer", "aclarar", "comparar"],
  },
  {
    lessonId: 45,
    kicker: "NUEVO MUNDO GRAMATICAL · A1",
    route: "PCIC · 6. LOS CUANTIFICADORES",
    title: "El Mercado de las Cantidades",
    copy: "Un mercado nocturno donde números, poco, mucho, bastante, todo, otro, más y menos se convierten en decisiones reales y español útil.",
    symbol: "06",
    words: ["contar", "medir", "comparar"],
  },
  {
    lessonId: 40,
    kicker: "NUEVO MUNDO GRAMATICAL · A1",
    route: "PCIC · 1. EL SUSTANTIVO",
    title: "La Fábrica de los Nombres",
    copy: "El primer módulo de la nueva ruta gramatical: cinco estaciones para entender sustantivos, género y número desde cero, con teoría visual, ocho desafíos autocorregibles y producción oral.",
    symbol: "01",
    words: ["nombrar", "clasificar", "concordar"],
  },
  {
    lessonId: 41,
    kicker: "NUEVO MUNDO GRAMATICAL · A1",
    route: "GRAMÁTICA + CONCORDANCIA + 3D",
    title: "El Atelier de la Concordancia",
    copy: "Un atelier art déco donde sustantivos y adjetivos tienen que combinar en género y número. Cinco salas, errores frecuentes, práctica y tres encargos para hablar.",
    symbol: "02",
    words: ["describir", "combinar", "precisar"],
  },
  {
    lessonId: 42,
    kicker: "NUEVO MUNDO GRAMATICAL · A1",
    route: "GRAMÁTICA + ARTÍCULOS + 3D",
    title: "La Galería de los Artículos",
    copy: "Una galería nocturna para descubrir por qué elegimos el, la, un, una o ningún artículo. El significado guía cada decisión y cada recorrido termina hablando.",
    symbol: "03",
    words: ["presentar", "señalar", "elegir"],
  },
  {
    lessonId: 39,
    kicker: "NUEVA CIUDAD 3D · A2",
    route: "VIAJE + BUENOS AIRES + ESPAÑOL COTIDIANO",
    title: "Buenos Aires en la Calle",
    copy: "Una ciudad nocturna con 16 lugares vivos para practicar hotel, transporte, compras, comida, salud y salidas con vocabulario rioplatense real y un modo especial para días de poca energía.",
    symbol: "BA",
    words: ["entrar", "pedir", "resolver"],
  },
  {
    lessonId: 38,
    kicker: "NUEVO LABORATORIO · A1–C1",
    route: "FONÉTICA + BOCA + PRONUNCIACIÓN",
    title: "Spanish Mouth Lab",
    copy: "Un laboratorio inmersivo para ver dónde va la lengua, entrenar los cinco sonidos vocálicos, corregir la R y detectar hábitos que vienen del inglés y otros seis idiomas.",
    symbol: "ɾ",
    words: ["mirar", "colocar", "producir"],
  },
  {
    lessonId: 37,
    kicker: "NUEVA CLASE MAESTRA · C1",
    route: "GRAMÁTICA + PAÍS DE LAS MARAVILLAS",
    title: "El País del Subjuntivo",
    copy: "Siete mundos 3D para dominar los tiempos del subjuntivo, comparar significados y hablar con 28 desafíos progresivos. La base modo/tiempo queda disponible como ayuda desplegable.",
    symbol: "QUE",
    words: ["desear", "dudar", "decidir"],
  },
  {
    lessonId: 210,
    kicker: "NUEVO ATLAS · B1",
    route: "CONVERSACIÓN + MÉXICO + FORMAS DE VIVIR",
    title: "MÉXICO",
    copy: "Las 32 entidades como piezas vectoriales interactivas, 160 preguntas personales y seis modos para convertir un mapa en una clase completa de conversación.",
    symbol: "32",
    words: ["elegir", "comparar", "imaginar"],
  },
  {
    lessonId: 36,
    kicker: "NUEVO ATLAS 3D · A2–B1",
    route: "CONVERSACIÓN + ESTADOS UNIDOS",
    title: "ESTADOS UNIDOS",
    copy: "Los 50 estados como piezas 3D reales, 250 preguntas A2 que no exigen conocimientos previos, 50 extensiones B1 y seis modos de conversación.",
    symbol: "50",
    words: ["explorar", "comparar", "desarrollar"],
  },
  {
    lessonId: 34,
    kicker: "NUEVA EXPERIENCIA · C2",
    route: "CONVERSACIÓN + FILOSOFÍA + VOCACIÓN",
    title: "El Monasterio de las Ideas",
    copy: "Doce mundos interiores 3D con escenas que cobran vida y 36 preguntas C2 para discutir poder, lenguaje, cuidado, autoridad, memoria, placer, instituciones y reparación sin caer en los temas de siempre.",
    symbol: "C2",
    words: ["entrar", "observar", "reformular"],
  },
  {
    lessonId: 33,
    kicker: "NUEVA EXPEDICIÓN · B1",
    route: "CONVERSACIÓN + IRLANDA",
    title: "Irlanda en Relieve",
    copy: "Los 26 condados de la República en un mapa real 3D: 104 lugares concretos y 260 detonadores nacidos de su costa, sus ciudades, sus lenguas y sus decisiones locales.",
    symbol: "IE",
    words: ["recorrer", "comparar", "decidir"],
  },
  {
    lessonId: 32,
    kicker: "NUEVA EXPEDICIÓN · A2–B1",
    route: "CONVERSACIÓN + REINO UNIDO",
    title: "Reino Unido en Relieve",
    copy: "Las cuatro naciones y las nueve regiones inglesas en un mapa real: 48 lugares concretos y 144 detonadores que nacen de su geografía, sus ciudades y sus conexiones.",
    symbol: "UK",
    words: ["ubicar", "comparar", "conectar"],
  },
  {
    lessonId: 31,
    kicker: "NUEVA CLASE · B1",
    route: "GRAMÁTICA PURA · 100% EN ESPAÑOL",
    title: "Condicionales paso a paso",
    copy: "Condicional cero, primero, segundo, tercero y mixtos en cinco bloques separados, con diez tablas, veinte prácticas explicadas y una síntesis final.",
    symbol: "SI",
    words: ["entender", "conjugar", "dominar"],
  },
  {
    lessonId: 30,
    kicker: "NUEVA AVENTURA · A2–B1",
    route: "CONVERSACIÓN + AUSTRALIA",
    title: "Australia en Movimiento",
    copy: "Los 8 estados y territorios en un mapa 3D por capas, 48 preguntas completamente nuevas, 48 movimientos distintos y fuentes australianas.",
    symbol: "AU",
    words: ["explorar", "comparar", "hablar"],
  },
  {
    lessonId: 29,
    kicker: "NUEVA EXPEDICIÓN · B1",
    route: "CONVERSACIÓN + SUIZA",
    title: "Suiza en Relieve",
    copy: "Los 26 cantones reales, 104 lugares concretos y 260 detonadores B1 en un mapa 3D interactivo que demuestra qué hace diferente a cada territorio.",
    symbol: "26",
    words: ["recorrer", "comparar", "proponer"],
  },
  {
    lessonId: 28,
    kicker: "NUEVA EXPERIENCIA · A2",
    route: "COMPRENSIÓN AUDITIVA + ACENTOS",
    title: "Latinoamérica al Oído",
    copy: "Una radio interactiva con mapa, voces regionales, dos escuchas obligatorias, 10 preguntas por país y transcripciones ocultas.",
    symbol: "A2",
    words: ["escuchar", "captar", "comprobar"],
  },
  {
    lessonId: 27,
    kicker: "NUEVA AVENTURA · A1",
    route: "1000% CONVERSACIÓN + MUNDO",
    title: "El Mundo Fantástico",
    copy: "Los 6 continentes —América como uno solo—, 40 mundos, 400 preguntas mínimas y más de 120 palabras esenciales para hablar desde cero.",
    symbol: "40",
    words: ["elegir", "tocar", "hablar"],
  },
  {
    lessonId: 26,
    kicker: "NUEVA CLASE · A1",
    route: "CONVERSACIÓN + ESTADOS UNIDOS",
    title: "Estados Unidos · Coast to Coast",
    copy: "Un atlas interactivo con 20 paradas, 120 preguntas básicas y recursos bilingües para hablar de ciudades, naturaleza, música, comida y vida cotidiana.",
    symbol: "20",
    words: ["elegir", "describir", "hablar"],
  },
  {
    lessonId: 25,
    kicker: "NUEVA CLASE · B1",
    route: "CONVERSACIÓN + ISRAEL",
    title: "Israel en Capas",
    copy: "Nueve destinos, cinco lentes culturales y 98 preguntas B1 en un mapa interactivo para comparar ciudades, paisajes, idiomas, costumbres y decisiones reales.",
    symbol: "14",
    words: ["explorar", "comparar", "matizar"],
  },
  {
    lessonId: 24,
    kicker: "NUEVA CLASE · A1",
    route: "1000% CONVERSACIÓN + INDONESIA",
    title: "Indonesia Fantástica",
    copy: "Las 38 provincias reales en un atlas interactivo: lugares, comidas, culturas y animales auténticos con 380 preguntas bilingües para hablar desde cero.",
    symbol: "38",
    words: ["explorar", "descubrir", "hablar"],
  },
  {
    lessonId: 23,
    kicker: "NUEVA CLASE · B2–C1",
    route: "GRAMÁTICA + AVENTURA",
    title: "El Multiverso del ‘Si’",
    copy: "Todos los condicionales del español en cinco portales progresivos, con teoría bilingüe, ocho tablas completas, práctica con respuestas y una misión final.",
    symbol: "SI",
    words: ["realidad", "hipótesis", "consecuencia"],
  },
  {
    lessonId: 22,
    kicker: "NUEVA CLASE · B1",
    route: "CONVERSACIÓN + CIUDAD",
    title: "La Ciudad del Futuro",
    copy: "12 edificios realistas, 48 preguntas bilingües y una sola zona TECH. El alumno diseña cómo queremos vivir, no solamente qué tecnología va a existir.",
    symbol: "2076",
    words: ["imaginar", "decidir", "construir"],
  },
  {
    lessonId: 21,
    kicker: "NUEVA CLASE · A2",
    route: "CONVERSACIÓN + OPINIONES",
    title: "El Reino de las Preguntas Prohibidas · A2",
    copy: "Los mismos 14 mundos del reino, ahora con 56 preguntas realmente A2, nombres bilingües y apoyos simples para responder sin quedarse en blanco.",
    symbol: "A2",
    words: ["opinión", "porque", "ejemplo"],
  },
  {
    lessonId: 20,
    kicker: "NUEVA CLASE · B1",
    route: "CONVERSACIÓN + OPINIÓN",
    title: "El Reino de las Preguntas Prohibidas",
    copy: "14 puertas de castillo, 56 preguntas profundas, 6 torres prohibidas y power-ups bilingües para construir opiniones con matices.",
    symbol: "🏰",
    words: ["postura", "matiz", "conclusión"],
  },
  {
    lessonId: 19,
    kicker: "NUEVA CLASE · A1",
    route: "ROLEPLAYS + ESPAÑOL ARGENTINO",
    title: "Argento Roleplays",
    copy: "15 situaciones reales, 210 intervenciones bilingües y práctica guiada para hablar desde cero sin quedarse en blanco.",
    symbol: "🎭",
    words: ["mira", "reutiliza chunks", "habla"],
  },
  {
    lessonId: 18,
    kicker: "CLASE VISUAL · B1",
    route: "GRAMÁTICA + CONVERSACIÓN",
    title: "El Pasado",
    copy: "Indefinido, imperfecto y perfecto compuesto explicados como tres cámaras: película, foto y conexión con ahora.",
    symbol: "B1",
    words: ["película", "escenario", "ahora"],
  },
  {
    lessonId: 17,
    kicker: "NUEVA EXPERIENCIA · A2",
    route: "CONVERSACIÓN + JUEGO",
    title: "La Ruleta de Tu Vida",
    copy: "17 temas potentes, 51 preguntas diferentes, un desafío argentino y recursos bilingües para conversar de verdad.",
    symbol: "🎡",
    words: ["girar", "opinar", "conectar"],
  },
  {
    lessonId: 16,
    kicker: "NUEVA EXPERIENCIA · A1",
    route: "ESPAÑOL ARGENTINO",
    title: "ARGENTO",
    copy: "12 mundos argentinos con vocabulario bilingüe, preguntas, reacciones, roleplays y slang para hablar desde el primer día.",
    symbol: "🇦🇷",
    words: ["mate", "conectar", "hablar"],
  },
  {
    lessonId: 15,
    kicker: "NUEVA CLASE · A1",
    route: "CONVERSACIÓN INICIAL",
    title: "Let’s Talk · A1",
    copy: "15 temas bilingües y 150 preguntas cortas para que el alumno empiece a hablar desde el primer minuto.",
    symbol: "A1",
    words: ["entender", "responder", "hablar"],
  },
  {
    lessonId: 14,
    kicker: "NUEVA CLASE · A2",
    route: "CONVERSACIÓN BÁSICA",
    title: "Let’s Talk · A2",
    copy: "15 mundos bilingües y 150 preguntas accesibles. El alumno elige solo 3 y empieza a hablar.",
    symbol: "A2",
    words: ["elegir", "animarse", "hablar"],
  },
  {
    lessonId: 13,
    kicker: "ESTRENO · B1+",
    route: "CONVERSACIÓN",
    title: "Choose Your Conversation",
    copy: "15 mundos. El alumno elige 1 tema, solo 3 preguntas y empieza a hablar de verdad.",
    symbol: "💬",
    words: ["elegir", "conectar", "hablar"],
  },
  {
    lessonId: 3,
    kicker: "NUEVA RUTA · A1",
    route: "GRAMÁTICA + HABLA",
    title: "Presente con vos",
    copy: "Hablás, comés, vivís. Un patrón visual y sonoro para activar el español argentino.",
    symbol: "VOS",
    words: ["mira", "detecta", "úsalo"],
  },
  {
    lessonId: 11,
    kicker: "NUEVA CLASE · C1",
    route: "CONVERSACIÓN AVANZADA",
    title: "Preguntas que dan ganas de hablar",
    copy: "16 categorías y 80 preguntas profundas para pensar, elegir y conversar con libertad.",
    symbol: "C1",
    words: ["pensar", "profundizar", "conectar"],
  },
];

type Lesson = CatalogItem;

function NewsCarousel({
  lessons,
  onOpen,
  hrefFor,
  onNavigate,
}: {
  lessons: Lesson[];
  onOpen: (lesson: Lesson) => void;
  hrefFor: (lesson: Lesson) => string | null;
  onNavigate: (lesson: Lesson, placement: string) => void;
}) {
  const { locale, t } = useI18n();
  const latestNews = useMemo(
    () =>
      libraryNews.filter((item) =>
        lessons.some((lesson) => lesson.id === item.lessonId),
      ),
    [lessons],
  );
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsPaused, setNewsPaused] = useState(false);
  const [newsManuallyPaused, setNewsManuallyPaused] = useState(false);
  const isNewsPaused = newsPaused || newsManuallyPaused;
  const news = latestNews[newsIndex % Math.max(latestNews.length, 1)];
  const newsLesson = news
    ? lessons.find((lesson) => lesson.id === news.lessonId) || null
    : null;
  const newsHref = newsLesson ? hrefFor(newsLesson) : null;

  useEffect(() => {
    if (
      isNewsPaused ||
      latestNews.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(
      () => setNewsIndex((index) => (index + 1) % latestNews.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [isNewsPaused, latestNews.length]);

  if (!news || !newsLesson) return null;
  return (
    <section
      className={`news-carousel news-theme-${newsIndex} ${isNewsPaused ? "is-paused" : ""}`}
      aria-label={t("library.newsAria")}
      onMouseEnter={() => setNewsPaused(true)}
      onMouseLeave={() => setNewsPaused(false)}
      onFocus={() => setNewsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node))
          setNewsPaused(false);
      }}
    >
      <div className="news-head">
        <span>
          <i /> {t("library.news")}
        </span>
        <div className="news-head-actions">
          <button
            type="button"
            className="news-pause"
            aria-pressed={newsManuallyPaused}
            onClick={() => setNewsManuallyPaused((paused) => !paused)}
          >
            {newsManuallyPaused
              ? locale === "es" ? "Reanudar" : "Resume"
              : locale === "es" ? "Pausar" : "Pause"}
          </button>
          <b>
            {String(newsIndex + 1).padStart(2, "0")} /{" "}
            {String(latestNews.length).padStart(2, "0")}
          </b>
        </div>
      </div>
      <div className="news-slide" key={news.title}>
        <div className="news-copy">
          <div className="news-labels">
            <span>{news.kicker}</span>
            <em>{news.route}</em>
          </div>
          <h2>{news.title}</h2>
          <p>{news.copy}</p>
          {newsHref ? <a href={newsHref} onClick={() => onNavigate(newsLesson, "news_carousel")}>
            {t("library.openThisClass")} <span>→</span>
          </a> : <button onClick={() => onOpen(newsLesson)}>
            {t("library.openThisClass")} <span>→</span>
          </button>}
        </div>
        <div className="conversation-news-art" aria-hidden="true">
          <LessonPreview lesson={newsLesson} news />
        </div>
      </div>
      <div className="news-controls">
        <button
          aria-label={t("library.previousNews")}
          onClick={() =>
            setNewsIndex(
              (index) =>
                (index - 1 + latestNews.length) % latestNews.length,
            )
          }
        >
          ←
        </button>
        <div>
          {latestNews.map((item, index) => (
            <button
              key={item.title}
              className={index === newsIndex ? "active" : ""}
              aria-label={t("library.viewNews", { title: item.title })}
              aria-pressed={index === newsIndex}
              onClick={() => setNewsIndex(index)}
            />
          ))}
        </div>
        <button
          aria-label={t("library.nextNews")}
          onClick={() =>
            setNewsIndex((index) => (index + 1) % latestNews.length)
          }
        >
          →
        </button>
      </div>
      <div className="news-progress" key={`progress-${newsIndex}`}>
        <i />
      </div>
    </section>
  );
}

export default function Library({
  lessons,
  owner,
  signedIn,
  fullAccess,
}: {
  lessons: CatalogItem[];
  owner: boolean;
  signedIn: boolean;
  fullAccess: boolean;
}) {
  const { t, locale } = useI18n();
  const routeCount = new Set(lessons.map((lesson) => lesson.category)).size;
  const levelScale = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const levelsPresent = levelScale.filter((item) => lessons.some((lesson) => `${lesson.level} ${lesson.displayLevel || ""}`.includes(item)));
  const levelRange = levelsPresent.length ? `${levelsPresent[0]}–${levelsPresent[levelsPresent.length - 1]}` : "A1–C2";
  const categoryLabel = (value: Category) => t(categoryMessageKeys[value]);
  const levelName = (value: string) =>
    levelNameKeys[value] ? t(levelNameKeys[value]) : value;
  const canOpen = (lesson: Lesson) => fullAccess || lesson.free;
  const [view, setView] = useState<"Biblioteca" | "Plan" | "Favoritas">(
    "Biblioteca",
  );
  const [level, setLevel] = useState("Todos");
  const [category, setCategory] = useState<"Todas" | Category>("Todas");
  const [conversationMode, setConversationMode] = useState<"all" | "worlds" | "play" | "boards" | "countries">("all");
  const [grammarMode, setGrammarMode] = useState<"all" | "general" | "system">("general");
  const [query, setQuery] = useState("");
  const [catalogSearchActive, setCatalogSearchActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [planIds, setPlanIds] = useState<number[]>([]);
  const [storageReady, setStorageReady] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerCompact, setHeaderCompact] = useState(false);
  const [levelMenuOpen, setLevelMenuOpen] = useState(false);
  const [openLevelGroup, setOpenLevelGroup] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const modalReturnFocusRef = useRef<HTMLElement | null>(null);
  const levelFocusTargetRef = useRef<string | null>(null);
  const lastTrackedQuery = useRef("");
  useEffect(() => {
    if (levelFocusTargetRef.current !== level) return;
    const selectedLevel = document.querySelector<HTMLElement>(
      `.category-levels [data-level="${level}"]`,
    );
    levelFocusTargetRef.current = null;
    selectedLevel?.focus();
  }, [level]);
  const conversationFamilyLabel = (
    mode: "all" | "worlds" | "play" | "boards" | "countries",
  ) => {
    if (mode === "all") return locale === "es" ? "TODAS" : "ALL";
    if (mode === "worlds") return locale === "es" ? "UNIVERSOS" : "WORLDS";
    if (mode === "play") return locale === "es" ? "MODO PLAY" : "PLAY MODE";
    if (mode === "boards") return locale === "es" ? "TABLEROS" : "BOARDS";
    return t("library.countries").toUpperCase();
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
    window.requestAnimationFrame(() => menuTriggerRef.current?.focus());
  };
  const closeActiveLesson = () => {
    setActiveLesson(null);
    window.requestAnimationFrame(() => modalReturnFocusRef.current?.focus());
  };
  const rememberLesson = (lessonId: number) => {
    if (!signedIn) return;
    void fetch("/api/progress", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ lessonId, progressPercent: 0 }),
      credentials: "same-origin",
      keepalive: true,
    }).catch(() => undefined);
  };
  const lessonPath = (lesson: Lesson, selectedLevel = level) =>
    conversationLessonHref(lesson, selectedLevel) ||
    (lesson.special ? "/choose-conversation" : `/clase/${lesson.id}`);
  const lockedPath = (lesson: Lesson, selectedLevel = level) =>
    `/acceso?returnTo=${encodeURIComponent(lessonPath(lesson, selectedLevel))}`;
  const lessonHref = (lesson: Lesson, selectedLevel = level) =>
    canOpen(lesson)
      ? conversationLessonHref(lesson, selectedLevel) || (lesson.special ? "/choose-conversation" : null)
      : lockedPath(lesson, selectedLevel);
  const prepareLessonNavigation = (lesson: Lesson, placement = "library_card", selectedLevel = level) => {
    trackMarketingEvent("lesson_preview_open", {
      ...(lesson.familyId ? {family:lesson.familyId,level:lesson.levels?.includes(selectedLevel)?selectedLevel:lesson.level} : {}),
      lesson_id: lesson.id,
      lesson_title: lesson.title,
      category: lesson.category,
      access: canOpen(lesson) ? "open" : "locked",
      placement,
    });
    if (canOpen(lesson)) rememberLesson(lesson.id);
  };
  const openLesson = (lesson: Lesson, shouldTrack = true) => {
    // URL-backed lessons are rendered as anchors at every call site. This
    // handler is reserved for the inline lesson viewer, which is an action.
    if (lessonHref(lesson)) return;
    if (shouldTrack) prepareLessonNavigation(lesson);
    else rememberLesson(lesson.id);
    modalReturnFocusRef.current = document.activeElement as HTMLElement | null;
    setActiveLesson(lesson);
  };
  const countryLessons = useMemo(
    () => lessons.filter((lesson) => lesson.category === "Conversación" && lesson.countryCollection),
    [lessons],
  );
  const familyLessonSource = useMemo(() => {
    return familyLessonsForCategory(lessons, { category, conversationMode, grammarMode });
  }, [category, conversationMode, grammarMode, lessons]);
  const categoryLevels = useMemo(
    () => availableLevels(familyLessonSource, category),
    [category, familyLessonSource],
  );
  const levelCountSource = familyLessonSource;
  const catalogQuery = catalogSearchActive ? query : "";
  const searchMatches = useMemo(
    () => filterLessons(lessons, { query }) as Lesson[],
    [lessons, query],
  );
  const collectionBadgeFor = (lesson: Lesson) => {
    if (lesson.category === "Conversación") {
      if (lesson.countryCollection) return locale === "es" ? "PAÍSES" : "COUNTRIES";
      if (lesson.conversationMode === "play") return locale === "es" ? "MODO PLAY" : "PLAY MODE";
      if (lesson.conversationMode === "boards") return locale === "es" ? "TABLEROS" : "BOARDS";
      return locale === "es" ? "UNIVERSOS" : "WORLDS";
    }
    if (lesson.category === "Gramática" && lesson.verbalSystem) {
      return locale === "es" ? "SISTEMA VERBAL" : "VERB SYSTEM";
    }
    return categoryLabel(lesson.category).toUpperCase();
  };
  const filtered = useMemo(
    () => {
      const source = view === "Biblioteca" ? familyLessonSource : lessons;
      const items=filterLessons(source, { level, category, query: catalogQuery }) as Lesson[];
      if (view !== "Biblioteca") return items;
      if (category === "Todas") return items.filter((lesson) => !lesson.countryCollection && !lesson.verbalSystem);
      return items;
    },
    [level, category, catalogQuery, familyLessonSource, lessons, view],
  );
  const visibleLessons =
    view === "Favoritas"
      ? filtered.filter((lesson) => favoriteIds.includes(lesson.id))
      : filtered;
  const groupedLessons = groupLessonsByLevel(visibleLessons, categoryLevels, 4) as Array<{
    level: string;
    total: number;
    lessons: Lesson[];
  }>;
  const routeCountLabel = (targetCategory: Category) => {
    const destinationSource = familyLessonsForCategory(lessons, {
      category: targetCategory,
      conversationMode: "all",
      grammarMode: targetCategory === "Gramática" ? "all" : "general",
    });
    const count = filterLessons(destinationSource, {
      category: targetCategory,
    }).length;
    return `${count} ${count === 1 ? t("common.class") : t("common.classes")}`;
  };
  const plannedLessons = planIds
    .map((id) => lessons.find((lesson) => lesson.id === id))
    .filter((lesson): lesson is Lesson => Boolean(lesson));
  const scrollToResults = () =>
    window.requestAnimationFrame(() =>
      document
        .getElementById("library-results")
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        }),
    );
  const chooseLevel = (nextLevel: string, returnFocus = false) => {
    trackMarketingEvent("filter_used", { filter: "level", value: nextLevel });
    if (returnFocus) levelFocusTargetRef.current = nextLevel;
    setView("Biblioteca");
    setCatalogSearchActive(false);
    setLevel(nextLevel);
    if (sidebarOpen) closeSidebar();
    scrollToResults();
  };
  const chooseCategory = (nextCategory: "Todas" | Category) => {
    trackMarketingEvent("filter_used", { filter: "category", value: nextCategory });
    setView("Biblioteca");
    setCatalogSearchActive(false);
    setLevel("Todos");
    setCategory(nextCategory);
    if (nextCategory !== "Conversación") setConversationMode("all");
    setGrammarMode(nextCategory === "Gramática" ? "all" : "general");
    if (sidebarOpen) closeSidebar();
    scrollToResults();
  };
  const openView = (nextView: "Biblioteca" | "Plan" | "Favoritas") => {
    setView(nextView);
    setLevel("Todos");
    setCategory("Todas");
    setConversationMode("all");
    setGrammarMode("general");
    setQuery("");
    setCatalogSearchActive(false);
    setSearchOpen(false);
    if (sidebarOpen) closeSidebar();
    scrollToResults();
  };
  const toggleFavorite = (id: number) =>
    setFavoriteIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id],
    );
  const togglePlan = (id: number) =>
    setPlanIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id],
    );
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const canonicalIds = (ids: number[]) => [...new Set(ids.map(id => lessons.find(item => item.id === id || item.legacyLessonIds?.includes(id))?.id || id))];
        setFavoriteIds(
          canonicalIds(JSON.parse(
            window.localStorage.getItem("chespanish-favorites") || "[]",
          )),
        );
        setPlanIds(
          canonicalIds(JSON.parse(window.localStorage.getItem("chespanish-plan") || "[]")),
        );
      } catch {}
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [lessons]);
  useEffect(() => {
    const cleanQuery = query.trim();
    if (cleanQuery.length < 2 || cleanQuery === lastTrackedQuery.current) return;
    const timer = window.setTimeout(() => {
      lastTrackedQuery.current = cleanQuery;
      trackMarketingEvent("search_used", { query_length: cleanQuery.length });
    }, 650);
    return () => window.clearTimeout(timer);
  }, [query]);
  useEffect(() => {
    if (!storageReady) return;
    window.localStorage.setItem(
      "chespanish-favorites",
      JSON.stringify(favoriteIds),
    );
    window.localStorage.setItem("chespanish-plan", JSON.stringify(planIds));
  }, [favoriteIds, planIds, storageReady]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (!sidebarOpen) return;
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const previousOverflow = document.body.style.overflow;
    // eslint-disable-next-line react-hooks/immutability -- scroll locking is a deliberate DOM side effect
    document.body.style.overflow = "hidden";
    const focusable = () =>
      Array.from(
        sidebar.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
    focusable()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSidebar();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [sidebarOpen]);
  useEffect(() => {
    if (!activeLesson) return;
    const modal = modalRef.current;
    if (!modal) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalCloseRef.current?.focus();
    const focusable = () =>
      Array.from(
        modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeActiveLesson();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeLesson]);
  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const sampleHref =
    lessons.find((lesson) => lesson.id === 105 && lesson.free && lesson.path)?.path ||
    lessons.find((lesson) => lesson.free && lesson.path)?.path ||
    "#library-results";
  const audience = audienceFromAccess(signedIn, fullAccess);
  const primaryCta = primaryCtaFor(audience, sampleHref);
  const secondaryCta = secondaryCtaFor(audience, sampleHref);
  const subscriptionCta = subscriptionCtaFor(audience);
  const primaryCtaLabel = t(primaryCta.labelKey);
  const secondaryCtaLabel = t(secondaryCta.labelKey);
  const subscriptionCtaLabel = t(subscriptionCta.labelKey);
  const openCountries = () => {
    trackMarketingEvent("filter_used", { filter: "conversation_mode", value: "countries" });
    setView("Biblioteca");
    setCategory("Conversación");
    setConversationMode("countries");
    setLevel("Todos");
    setQuery("");
    setCatalogSearchActive(false);
    setSearchOpen(false);
    scrollToResults();
  };
  const openVerbalSystem = () => {
    trackMarketingEvent("filter_used", { filter: "grammar_collection", value: "verbal_system" });
    setView("Biblioteca");
    setCategory("Gramática");
    setGrammarMode("system");
    setConversationMode("all");
    setLevel("Todos");
    setQuery("");
    setCatalogSearchActive(false);
    setSearchOpen(false);
    scrollToResults();
  };
  const lessonGrid = (items: Lesson[], planned = false, includeCountryCard = false, selectedLevel = level) =>
    items.length || includeCountryCard ? (
      <div className="lesson-grid">
        {includeCountryCard && (
          <button className="lesson-card countries-card accent-b1" type="button" onClick={openCountries}>
            <LessonPreview lesson={{id:-1,title:t("library.countries"),image:"/catalog-thumbnails/countries-collection.webp"}} />
            <span className="countries-star" aria-hidden="true">★</span>
            <span className="card-content">
              <span className="card-top">
                <span className="card-badges">
                  <span className="level-badge">A1–B1</span>
                  <span className="countries-featured-badge">{t("library.countriesKicker")}</span>
                </span>
              </span>
              <span className="card-route-line">{countryLessons.length} {t("common.classes")} · {t("category.conversation")}</span>
              <span className="countries-card-title">{t("library.countries")}</span>
              <span className="countries-card-copy">{t("library.countriesCopy")}</span>
              <span className="card-bottom">
                <span className="card-meta">A1–B1 · {countryLessons.length} {t("common.classes")}</span>
                <span className="card-open">{t("library.countriesOpen")} →</span>
              </span>
            </span>
          </button>
        )}
        {items.map((l, i) => {
          const href = lessonHref(l, selectedLevel);
          return <article
            className={`lesson-card accent-${l.level.toLowerCase()} ${l.special ? "special-card" : ""} ${canOpen(l) ? "" : "lesson-locked"}`}
            data-access={canOpen(l) ? "open" : "locked"}
            data-curriculum-order={l.category === "Gramática" ? l.curriculumOrder : undefined}
            data-route-order={l.routeOrder}
            data-route-sequence={l.routeSequence}
            key={l.id}
          >
            {href ? <a
              className="card-hitarea"
              href={href}
              aria-label={canOpen(l) ? t("library.openAria", { title: l.title }) : t("library.lockedAria", { title: l.title })}
              onClick={() => prepareLessonNavigation(l, "library_card", selectedLevel)}
            /> : <button
              className="card-hitarea"
              type="button"
              aria-label={t("library.openAria", { title: l.title })}
              onClick={() => openLesson(l)}
            />}
            <LessonPreview lesson={{...l,image:l.previewByLevel?.[selectedLevel as CEFRLevel]?.image || l.image}} />
            {!canOpen(l) && (
              <span className="card-lock-mark" aria-hidden="true">
                <i />
              </span>
            )}
            <div className="card-content">
            <div className="card-top">
              <div className="card-badges">
                <span className="level-badge">{l.displayLevel || l.level}</span>
                <span className="collection-badge">{collectionBadgeFor(l)}</span>
                {!fullAccess && (
                  <span
                    className={`library-access-badge ${l.free ? "sample" : "locked"}`}
                  >
                    {!l.free && <i className="access-lock-icon" aria-hidden="true" />}
                    {l.free ? t("common.free") : t("common.locked")}
                  </span>
                )}
                {planned && (
                  <span className="plan-position">
                    POS. {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
              <div className="card-actions">
                <button
                  className={favoriteIds.includes(l.id) ? "saved" : ""}
                  aria-label={
                    favoriteIds.includes(l.id)
                      ? t("library.removeFavorite", { title: l.title })
                      : t("library.saveFavorite", { title: l.title })
                  }
                  title={t("library.favorite")}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(l.id);
                  }}
                >
                  {favoriteIds.includes(l.id) ? "★" : "☆"}
                </button>
                <button
                  className={planIds.includes(l.id) ? "saved" : ""}
                  aria-label={
                    planIds.includes(l.id)
                      ? t("library.removePlan", { title: l.title })
                      : t("library.addPlan", { title: l.title })
                  }
                  title={t("common.classPlan")}
                  onClick={(event) => {
                    event.stopPropagation();
                    togglePlan(l.id);
                  }}
                >
                  {planIds.includes(l.id) ? "✓" : "＋"}
                </button>
              </div>
            </div>
            <div className="card-route-line">
              {l.routeSequence && (
                <span className="curriculum-sequence route-sequence">
                  {t("library.classLabel", { number: String(l.routeSequence).padStart(2, "0") })}
                </span>
              )}
              <i aria-hidden="true">·</i>
              <span className="category-name">{categoryLabel(l.category)}</span>
            </div>
            <h3>{l.title}</h3>
            {l.familyId && (l.levels?.length || 0)>1 && <div className="family-levels">{locale === "es" ? "Disponible en" : "Available in"} {l.levels?.join(" · ")}</div>}
            <p>{l.previewByLevel?.[selectedLevel as CEFRLevel]?.hook || l.subtitle}</p>
            <div className="card-bottom">
              <div className="card-meta">
                <span>{l.duration}</span>
                <i aria-hidden="true">·</i>
                <span>{l.tag}</span>
              </div>
              <span className="card-open">{canOpen(l) ? t("common.open") : t("common.unlock")} →</span>
            </div>
            </div>
          </article>
        })}
      </div>
    ) : (
      <div className="empty-state">
        {view !== "Biblioteca" && (
          <img
            className="empty-mascot"
            src={view === "Plan" ? "/brand/mascot/standing.webp" : "/brand/mascot/seated.webp"}
            alt=""
          />
        )}
        <span>{view === "Plan" ? "▣" : view === "Favoritas" ? "☆" : "⌕"}</span>
        <h3>
          {view === "Plan"
            ? t("library.emptyPlanTitle")
            : view === "Favoritas"
              ? t("library.emptyFavoritesTitle")
              : t("library.emptySearchTitle")}
        </h3>
        <p>
          {view === "Plan"
            ? t("library.emptyPlanCopy")
            : view === "Favoritas"
              ? t("library.emptyFavoritesCopy")
              : t("library.emptySearchCopy")}
        </p>
        {view !== "Biblioteca" && (
          <button onClick={() => openView("Biblioteca")}>
            {t("library.goToLibrary")}
          </button>
        )}
      </div>
    );
  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main-content"
        aria-hidden={sidebarOpen || activeLesson ? true : undefined}
        tabIndex={sidebarOpen || activeLesson ? -1 : undefined}
      >
        {t("common.skipToContent")}
      </a>
      {sidebarOpen && <>
      <button
        className="sidebar-scrim visible"
        aria-label={t("nav.closeMenu")}
        onClick={closeSidebar}
      />
      <aside
        ref={sidebarRef}
        id="library-navigation"
        className="sidebar open"
        aria-label={t("nav.main")}
        role="dialog"
        aria-modal="true"
      >
        <div className="sidebar-head">
          <div className="brand">
            <SpanishCueBrand variant="full" tone="light" />
          </div>
          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label={t("nav.closeMenu")}
          >
            ×
          </button>
        </div>
        <nav className="main-nav" aria-label={t("nav.main")}>
          <button
            className={`nav-item ${view === "Biblioteca" ? "active" : ""}`}
            onClick={() => openView("Biblioteca")}
            aria-current={view === "Biblioteca" ? "page" : undefined}
          >
            <span className="nav-glyph nav-library" /> {t("common.myLibrary")}
          </button>
          <button
            className={`nav-item ${view === "Plan" ? "active" : ""}`}
            onClick={() => openView("Plan")}
            aria-current={view === "Plan" ? "page" : undefined}
          >
            <span className="nav-glyph nav-plan" /> {t("common.classPlan")}{" "}
            <b>{planIds.length || ""}</b>
          </button>
          <button
            className={`nav-item ${view === "Favoritas" ? "active" : ""}`}
            onClick={() => openView("Favoritas")}
            aria-current={view === "Favoritas" ? "page" : undefined}
          >
            <span className="nav-glyph nav-star" /> {t("common.favorites")}{" "}
            <b>{favoriteIds.length || ""}</b>
          </button>
        </nav>
        <p className="side-label">{t("common.contents")}</p>
        <div className="level-explorer">
          <button
            className={`all-lessons-toggle ${levelMenuOpen ? "expanded" : ""}`}
            onClick={() => setLevelMenuOpen((open) => !open)}
            aria-expanded={levelMenuOpen}
          >
            <span className="all-grid">
              <i />
              <i />
              <i />
              <i />
            </span>
            <div>
              <b>{category === "Todas" ? t("common.allClasses") : categoryLabel(category)}</b>
              <small>
                {category === "Todas"
                  ? t("library.readyExperiences", { count: lessons.length })
                  : categoryLabel(category)}
              </small>
            </div>
            <i className="level-chevron">⌄</i>
          </button>
          {levelMenuOpen && (
            <div className="level-groups">
              {levelGroups
                .filter((group) =>
                  group.levels.some((item) => categoryLevels.includes(item)),
                )
                .map((group) => (
                  <section
                    key={group.id}
                    className={`level-group group-${group.id}`}
                  >
                    <button
                      onClick={() =>
                        setOpenLevelGroup((current) =>
                          current === group.id ? null : group.id,
                        )
                      }
                      aria-expanded={openLevelGroup === group.id}
                    >
                      <span />
                      <div>
                        <b>{t(group.label)}</b>
                        <small>{t(group.copy)}</small>
                      </div>
                      <i>{openLevelGroup === group.id ? "−" : "+"}</i>
                    </button>
                    {openLevelGroup === group.id && (
                      <div className="level-subnav">
                        {group.levels
                          .filter((item) => categoryLevels.includes(item))
                          .map((item) => (
                            <button
                              key={item}
                              className={level === item ? "selected" : ""}
                              onClick={() => chooseLevel(item)}
                            >
                              <span
                                className={`level-dot level-${item.toLowerCase()}`}
                              >
                                {item}
                              </span>
                              <div>
                                <b>{levelName(item)}</b>
                                <small>{t("common.level")} {item}</small>
                              </div>
                              <strong>
                                {
                                  filterLessons(levelCountSource, {
                                    level: item,
                                    category,
                                    query: catalogQuery,
                                  }).length
                                }
                              </strong>
                            </button>
                          ))}
                      </div>
                    )}
                  </section>
                ))}
              <button
                className={`all-entry ${level === "Todos" ? "selected" : ""}`}
                onClick={() => chooseLevel("Todos")}
              >
                <span>∞</span>
                <b>
                  {t("common.allLevels")}
                  {category !== "Todas" ? ` · ${categoryLabel(category)}` : ""}
                </b>
              </button>
            </div>
          )}
        </div>
        <div className="mate-tip">
          <span className="tip-orbit">
            <i />
            <b>SC</b>
          </span>
          <div>
            <b>{t("library.growingTitle")}</b>
            <p>{t("library.growingCopy")}</p>
          </div>
        </div>
        <div className="library-access-nav">
          {owner ? (
            <>
              <a href="/admin">{t("nav.myPanel")}</a>
              <a href={fullAccess ? "/?vista=profesor" : "/"}>
                {fullAccess
                  ? t("nav.viewAsTeacher")
                  : t("nav.backToFullAccess")}
              </a>
            </>
          ) : signedIn ? (
            <>
              <a href="/cuenta">{t("nav.myTeacherAccount")}</a>
              <LogoutButton className="library-nav-logout" />
            </>
          ) : (
            <>
              <a href="/ingresar?modo=entrar">{t("nav.logIn")}</a>
              <a href="/ingresar?modo=registro">{t("nav.signUpTeacher")}</a>
            </>
          )}
        </div>
        <div className="profile">
          <span>{owner ? "AN" : "SC"}</span>
          <div>
            <b>{owner ? "Alejandro" : signedIn ? t("library.teacher") : "SPANISHCUE"}</b>
            <small>
              {fullAccess ? t("library.fullAccess") : t("library.freeByCategory")}
            </small>
          </div>
          <a
            href={
              signedIn ? "/cuenta" : "/ingresar?modo=entrar&returnTo=%2Fcuenta"
            }
            aria-label={t("nav.myAccount")}
          >
            •••
          </a>
        </div>
      </aside>
      </>}
      <main
        className="main-content"
        inert={sidebarOpen || activeLesson ? true : undefined}
        aria-hidden={sidebarOpen || activeLesson ? true : undefined}
      >
        <header className={`topbar ${headerCompact ? "compact" : ""}`}>
          <div className="topbar-primary">
            <div className="topbar-brand-block">
              <button
                ref={menuTriggerRef}
                className="menu-trigger"
                onClick={() => setSidebarOpen(true)}
                aria-label={t("nav.openMenu")}
                aria-expanded={sidebarOpen}
                aria-controls="library-navigation"
              >
                <i />
                <i />
                <i />
              </button>
              <Link className="topbar-brand" href="/">
                <SpanishCueWordmark compact />
              </Link>
              <span className="topbar-brand-promise">
                {t("nav.readyToTeach")}
              </span>
            </div>
            <nav className="topbar-navigation" aria-label={t("nav.main")}>
              <a href="#library-results">{t("common.library")}</a>
              <a href="#how-it-works">{t("nav.howItWorks")}</a>
              {!fullAccess && <a href="#pricing">{t("nav.plans")}</a>}
            </nav>
            <div className="topbar-actions">
              <LanguageSwitcher className="topbar-language" />
              <a
                className="topbar-account"
                href={signedIn ? "/cuenta" : "/ingresar?modo=entrar"}
              >
                {signedIn ? t("nav.myAccount") : t("nav.logIn")}
              </a>
              <MarketingLink className="topbar-primary-cta" cta={primaryCta} placement="header">
                {primaryCtaLabel}
                <span aria-hidden="true">→</span>
              </MarketingLink>
            </div>
          </div>
          <div className="topbar-utility">
            <div className="search-shell">
              <label className="search" aria-label={t("common.search")}>
                <span className="search-icon" aria-hidden="true" />
                <span className="search-field">
                  <small>{t("nav.findNextLesson")}</small>
                  <input
                    ref={searchInputRef}
                    value={query}
                    onFocus={() => setSearchOpen(true)}
                    onBlur={() => window.setTimeout(() => setSearchOpen(false), 140)}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setCatalogSearchActive(false);
                      setSearchOpen(true);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setSearchOpen(false);
                        event.currentTarget.blur();
                      }
                      if (event.key === "Enter" && query.trim()) {
                        event.preventDefault();
                        setCatalogSearchActive(true);
                        setSearchOpen(false);
                        scrollToResults();
                      }
                    }}
                    placeholder={t("common.searchPlaceholder")}
                  />
                </span>
                <kbd>⌘ K</kbd>
              </label>
              {searchOpen && query.trim() && (
                <section className="search-results-panel" aria-live="polite">
                  {searchMatches.length ? (
                    <>
                      <div className="search-results-head">
                        <span>{searchMatches.length} {searchMatches.length === 1 ? t("common.class") : t("common.classes")}</span>
                        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => { setCatalogSearchActive(true); setSearchOpen(false); scrollToResults(); }}>
                          {locale === "es" ? "VER EN BIBLIOTECA" : "VIEW IN LIBRARY"}
                        </button>
                      </div>
                      <div className="search-results-list">
                        {searchMatches.slice(0, 3).map((lesson) => {
                          const href = lessonHref(lesson);
                          const content = <><span>{lesson.displayLevel || lesson.level} · {categoryLabel(lesson.category)}</span><b>{lesson.title}</b><i aria-hidden="true">→</i></>;
                          const choose = () => {
                            setSearchOpen(false);
                            setQuery("");
                            setCatalogSearchActive(false);
                          };
                          return href
                            ? <a key={lesson.id} href={href} onClick={() => { choose(); prepareLessonNavigation(lesson, "search_suggestion"); }}>{content}</a>
                            : <button key={lesson.id} type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => { choose(); openLesson(lesson); }}>{content}</button>;
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="search-no-result"><b>{t("library.emptySearchTitle")}</b><span>{t("library.emptySearchCopy")}</span></div>
                  )}
                </section>
              )}
            </div>
          </div>
        </header>
        {owner && !fullAccess && (
          <div className="library-preview-note">
            {t("library.previewMode")}{" "}
            <Link href="/">{t("nav.backToFullAccess")} →</Link>
          </div>
        )}
        <SpanishCueHero />
        <section className="library-heading" id="library-results">
          <div>
            <p className="eyebrow">
              {view === "Biblioteca"
                ? t("common.library")
                : view === "Plan"
                  ? t("library.nextClass")
                  : t("library.personalCollection")}
            </p>
            <h2>
              {view === "Plan"
                ? t("common.classPlan")
                : view === "Favoritas"
                  ? t("common.favorites")
                  : conversationMode === "countries"
                    ? t("library.countries")
                    : category === "Gramática" && grammarMode === "system"
                      ? "★ Sistema verbal"
                    : category === "Conversación"
                      ? `${categoryLabel(category)} · ${conversationFamilyLabel(conversationMode)}`
                    : category !== "Todas"
                      ? categoryLabel(category)
                    : level === "Todos"
                        ? t("common.allClasses")
                        : `${level} · ${levelName(level)}`}
            </h2>
          </div>
          {view === "Biblioteca" && (
            <button
              className={`show-all ${category === "Todas" ? "active" : ""}`}
              onClick={() => chooseCategory("Todas")}
            >
              {t("common.viewAllClasses")}
            </button>
          )}
        </section>
        {view === "Biblioteca" && (
          <section
            className="route-divider"
            aria-label={t("library.chooseRoutes")}
          >
            <button
              className={`route-card grammar-route ${category === "Gramática" ? "active" : ""}`}
              onClick={() => chooseCategory("Gramática")}
              aria-pressed={category === "Gramática"}
            >
              <span className="route-mascot">
                <img src="/brand/mascot/pointing.webp" alt="" />
              </span>
              <div>
                <small>{t("common.route", { number: "01" })}</small>
                <b>{t("category.grammar")}</b>
                <em>{t("library.grammarCopy")}</em>
              </div>
              <i>{routeCountLabel("Gramática")}</i>
            </button>
            <button
              className={`route-card conversation-route ${category === "Conversación" ? "active" : ""}`}
              onClick={() => chooseCategory("Conversación")}
              aria-pressed={category === "Conversación"}
            >
              <span className="route-mascot">
                <img src="/brand/mascot/walking.webp" alt="" />
              </span>
              <div>
                <small>{t("common.route", { number: "02" })}</small>
                <b>{t("category.conversation")}</b>
                <em>{t("library.conversationCopy")}</em>
              </div>
              <i>{routeCountLabel("Conversación")}</i>
            </button>
            <button
              className={`route-card listening-route ${category === "Escucha" ? "active" : ""}`}
              onClick={() => chooseCategory("Escucha")}
              aria-pressed={category === "Escucha"}
            >
              <span className="route-mascot">
                <img src="/brand/mascot/seated.webp" alt="" />
              </span>
              <div>
                <small>{t("common.route", { number: "03" })}</small>
                <b>{t("category.listening")}</b>
                <em>{t("library.listeningCopy")}</em>
              </div>
              <i>{routeCountLabel("Escucha")}</i>
            </button>
            <button
              className={`route-card phonetics-route ${category === "Fonética" ? "active" : ""}`}
              onClick={() => chooseCategory("Fonética")}
              aria-pressed={category === "Fonética"}
            >
              <span className="route-mascot">
                <img src="/brand/mascot/speaking.webp" alt="" />
              </span>
              <div>
                <small>{t("common.route", { number: "04" })}</small>
                <b>{t("category.pronunciation")}</b>
                <em>{t("library.pronunciationCopy")}</em>
              </div>
              <i>{routeCountLabel("Fonética")}</i>
            </button>
            <button
              className={`route-card vocabulary-route ${category === "Vocabulario" ? "active" : ""}`}
              onClick={() => chooseCategory("Vocabulario")}
              aria-pressed={category === "Vocabulario"}
            >
              <span className="route-mascot">
                <img src="/brand/mascot/studying.webp" alt="" />
              </span>
              <div>
                <small>{t("common.route", { number: "05" })}</small>
                <b>{t("category.vocabulary")}</b>
                <em>{t("library.vocabularyCopy")}</em>
              </div>
              <i>{routeCountLabel("Vocabulario")}</i>
            </button>
          </section>
        )}
        {view === "Biblioteca" && category === "Conversación" && (
          <section className="conversation-family-filter" aria-label={locale === "es" ? "Familias de conversación" : "Conversation families"}>
            <div>
              <small>{locale === "es" ? "FAMILIAS DE CONVERSACIÓN" : "CONVERSATION FAMILIES"}</small>
              <strong>{conversationFamilyLabel(conversationMode)}</strong>
            </div>
            <nav aria-label={locale === "es" ? "Familias de conversación" : "Conversation families"}>
              {([
                "all",
                "worlds",
                "play",
                "boards",
                "countries",
              ] as const).map((value) => {
                const destination = familyLessonsForCategory(lessons, {
                  category: "Conversación",
                  conversationMode: value,
                });
                const count = filterLessons(destination, {
                  category: "Conversación",
                }).length;
                return <button key={value} className={`${conversationMode===value?"active":""} ${value==="countries"?"countries-tab":""}`} aria-pressed={conversationMode===value} onClick={()=>{if(value==="countries"){openCountries();return}trackMarketingEvent("filter_used",{filter:"conversation_mode",value});setConversationMode(value);setLevel("Todos");setCatalogSearchActive(false);scrollToResults()}}><span>{value==="play"?"▶":value==="boards"?"▦":value==="worlds"?"◈":value==="countries"?"★":"●"}</span><b>{conversationFamilyLabel(value)}</b><small>{count}</small></button>;
              })}
            </nav>
          </section>
        )}
        {view === "Biblioteca" && category === "Gramática" && (
          <section className="grammar-family-filter" aria-label="Colecciones de Gramática">
            <div>
              <small>COLECCIONES DE GRAMÁTICA</small>
              <strong>{grammarMode === "system" ? "★ SISTEMA VERBAL" : grammarMode === "general" ? "RUTA GENERAL" : "TODAS"}</strong>
            </div>
            <nav aria-label="Colecciones de Gramática">
              <button className={grammarMode === "all" ? "active" : ""} aria-pressed={grammarMode === "all"} onClick={()=>{setGrammarMode("all");setLevel("Todos");setCatalogSearchActive(false);scrollToResults()}}><span>●</span><b>TODAS</b><small>{filterLessons(familyLessonsForCategory(lessons, {category:"Gramática", grammarMode:"all"}), {category:"Gramática"}).length}</small></button>
              <button className={`verbal-tab ${grammarMode === "system" ? "active" : ""}`} aria-pressed={grammarMode === "system"} onClick={openVerbalSystem}><span>★</span><b>SISTEMA VERBAL</b><small>{filterLessons(familyLessonsForCategory(lessons, {category:"Gramática", grammarMode:"system"}), {category:"Gramática"}).length}</small></button>
              <button className={grammarMode === "general" ? "active" : ""} aria-pressed={grammarMode === "general"} onClick={()=>{setGrammarMode("general");setLevel("Todos");setCatalogSearchActive(false);scrollToResults()}}><span>01</span><b>GRAMÁTICA GENERAL</b><small>{filterLessons(familyLessonsForCategory(lessons, {category:"Gramática", grammarMode:"general"}), {category:"Gramática"}).length}</small></button>
              <Link href="/sistema-verbal"><span>↗</span><b>MAPA MODO / TIEMPO</b><small>ABRIR</small></Link>
            </nav>
          </section>
        )}
        {view === "Biblioteca" && (
          <section
            className="category-levels"
            aria-label={
              category === "Todas"
                ? t("common.availableLevels")
                : t("common.levelsOf", { category: categoryLabel(category) })
            }
          >
            <div>
              <b>{category === "Todas" ? t("common.allContent") : categoryLabel(category)}</b>
              <span>{t("common.chooseLevelInCategory")}</span>
            </div>
            <nav aria-label={t("common.chooseLevel")}>
              <button
                data-level="Todos"
                aria-pressed={level === "Todos"}
                onClick={() => chooseLevel("Todos")}
              >
                {t("common.all")}{" "}
                <small>
                  {filterLessons(levelCountSource, { category, query: catalogQuery }).length}
                </small>
              </button>
              {categoryLevels.map((item) => (
                <button
                  key={item}
                  data-level={item}
                  aria-pressed={level === item}
                  onClick={() => chooseLevel(item)}
                >
                  {item}{" "}
                  <small>
                    {
                      filterLessons(levelCountSource, { level: item, category, query: catalogQuery })
                        .length
                    }
                  </small>
                </button>
              ))}
            </nav>
          </section>
        )}
        {view === "Biblioteca" && (
          <div className="catalog-status" role="status" aria-live="polite">
            <span>
              {filtered.length}{" "}
              {locale === "es"
                ? filtered.length === 1 ? "resultado" : "resultados"
                : filtered.length === 1 ? "result" : "results"}
            </span>
            <small>
              {lessons.length} {locale === "es" ? "clases totales" : "total lessons"}
            </small>
          </div>
        )}
        {view === "Plan" && plannedLessons.length > 0 && (
          <div className="plan-summary">
            <img src="/brand/mascot/standing-crossed.webp" alt="" width="900" height="1350" />
            <div>
              <b>
                {plannedLessons.length === 1
                  ? t("library.planPreparedOne")
                  : t("library.planPreparedMany", { count: plannedLessons.length })}
              </b>
              <p>{t("library.planCopy")}</p>
            </div>
            <button onClick={() => setPlanIds([])}>{t("library.emptyPlan")}</button>
          </div>
        )}
        {view === "Biblioteca" && category === "Conversación" && conversationMode === "countries" && (
          <section className="countries-collection-head" aria-labelledby="countries-collection-title">
            <img src="/catalog-thumbnails/countries-collection.webp" alt="" width="1200" height="800" />
            <div>
              <span>★ {t("library.countriesKicker")}</span>
              <h3 id="countries-collection-title">{t("library.countries")}</h3>
              <p>{t("library.countriesCopy")}</p>
              <strong>{filtered.length} {filtered.length === 1 ? t("common.class") : t("common.classes")}</strong>
              <button onClick={() => {setConversationMode("all");setLevel("Todos");scrollToResults()}}>← {t("library.countriesBack")}</button>
            </div>
          </section>
        )}
        {view === "Biblioteca" && category !== "Conversación" && level === "Todos" && !catalogSearchActive ? (
          <section className="level-catalog-sections" aria-label={locale === "es" ? "Clases por nivel" : "Lessons by level"}>
            {groupedLessons.map((group) => (
              <section className="level-catalog-section" key={group.level} aria-labelledby={`level-${group.level}-title`}>
                <header>
                  <div>
                    <span>{locale === "es" ? "NIVEL" : "LEVEL"}</span>
                    <h3 id={`level-${group.level}-title`}>{group.level} · {levelName(group.level)}</h3>
                  </div>
                  <small>{group.total} {group.total === 1 ? t("common.class") : t("common.classes")}</small>
                </header>
                {lessonGrid(group.lessons, false, false, group.level)}
                {group.total > group.lessons.length && (
                  <button className="view-level-lessons" type="button" onClick={() => chooseLevel(group.level, true)}>
                    {locale === "es" ? `Ver todas las clases ${group.level}` : `View all ${group.level} lessons`} <span aria-hidden="true">→</span>
                  </button>
                )}
              </section>
            ))}
          </section>
        ) : lessonGrid(
          view === "Plan" ? plannedLessons : visibleLessons,
          view === "Plan",
        )}
        {view === "Biblioteca" && category === "Todas" && level === "Todos" && !catalogSearchActive && (
          <ProductPreview lessons={lessons} />
        )}
        {view === "Biblioteca" && !fullAccess && (
          <LibraryConversionBanner
            primary={primaryCta}
            primaryLabel={primaryCtaLabel}
            secondary={secondaryCta}
            secondaryLabel={secondaryCtaLabel}
          />
        )}
        {view === "Biblioteca" && (
          <>
            <HowItWorks />
            <NewsCarousel lessons={lessons} onOpen={openLesson} hrefFor={lessonHref} onNavigate={prepareLessonNavigation} />
            <ProblemSolution primary={primaryCta} primaryLabel={primaryCtaLabel} />
            <BenefitSection primary={primaryCta} primaryLabel={primaryCtaLabel} />
            <SocialProof lessonCount={lessons.length} routeCount={routeCount} levelRange={levelRange} cultureCount={SPANISH_SPEAKING_COUNTRY_COUNT} />
            <Pricing audience={audience} primary={subscriptionCta} primaryLabel={subscriptionCtaLabel} />
            <FAQ />
            <CTASection
              audience={audience}
              primary={primaryCta}
              primaryLabel={primaryCtaLabel}
              secondary={secondaryCta}
              secondaryLabel={secondaryCtaLabel}
            />
          </>
        )}
        <SpanishCueFooter />
      </main>
      <FounderPricePill audience={audience} />
      {activeLesson && (
        <div
          className="modal-backdrop"
          onMouseDown={closeActiveLesson}
        >
          <section
            ref={modalRef}
            className="lesson-viewer"
            onMouseDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lesson-viewer-title"
          >
            <header
              className={`viewer-header accent-${activeLesson.level.toLowerCase()}`}
            >
              <button
                ref={modalCloseRef}
                className="close"
                onClick={closeActiveLesson}
                aria-label={t("common.close")}
              >
                ×
              </button>
              <div className="viewer-brand"><SpanishCueBrand variant="compact" tone="light" context={t("library.classMode")} /></div>
              <div className="viewer-title">
                <span>{activeLesson.level}</span>
                <div>
                  <p>{categoryLabel(activeLesson.category)}</p>
                  <h2 id="lesson-viewer-title">{activeLesson.title}</h2>
                  <small>{activeLesson.subtitle}</small>
                </div>
              </div>
              <div className="viewer-meta">
                <span>◷ {activeLesson.duration}</span>
                <span>◎ {activeLesson.tag}</span>
                <span>✓ {t("common.readyToTeach")}</span>
              </div>
            </header>
            <div className="viewer-body">
              {activeLesson.category === "Gramática" ? (
                <div className="grammar-step-stack viewer-grammar-steps">
                  <GrammarStep
                    number="01"
                    eyebrow="INICIO"
                    title="Objetivos y activación"
                    description="Abre para decidir desde dónde empezar."
                  >
                    <section className="objective-box">
                      <div>01</div>
                      <article>
                        <span>OBJETIVOS DE HOY</span>
                        <h3>Al final de la clase, el alumno puede…</h3>
                        <ul>
                          {activeLesson.goals.map((x) => (
                            <li key={x}>✓ {x}</li>
                          ))}
                        </ul>
                      </article>
                    </section>
                    <section className="lesson-section">
                      <div className="section-number">02</div>
                      <article>
                        <span>ACTIVACIÓN · 5 MIN</span>
                        <h3>Empezamos hablando</h3>
                        <p>{activeLesson.warmup}</p>
                        <div className="teacher-note">
                          💡 <b>Nota para ti:</b> no corrijas todavía. Escucha
                          qué recursos ya tiene el alumno.
                        </div>
                      </article>
                    </section>
                  </GrammarStep>
                  {activeLesson.id === 3 && <MoodTenseDisclosure />}
                  <GrammarStep
                    number="02"
                    eyebrow="IDEA Y ESTRUCTURA"
                    title="¿Qué es y cómo funciona?"
                    description="La explicación central y su lugar en el sistema verbal."
                  >
                    <section className="lesson-section">
                      <article>
                        {activeLesson.id === 3 && (
                          <VerbalPosition
                            items={["presente"]}
                            context="El voseo elige la persona «vos». No es un modo ni un tiempo aparte: «hablás», «comés» y «vivís» están en presente de indicativo."
                          />
                        )}
                        <p className="big-explanation">
                          {activeLesson.explanation}
                        </p>
                      </article>
                    </section>
                  </GrammarStep>
                  <GrammarStep
                    number="03"
                    eyebrow="PRÁCTICA"
                    title="Completa y justifica"
                    description="Resolvé una actividad por vez."
                  >
                    <section className="lesson-section">
                      <article>
                        <div className="exercise-grid">
                          {activeLesson.practice.map((x, i) => (
                            <div key={x}>
                              <b>{i + 1}</b>
                              <p>{x}</p>
                              <button
                                onClick={(e) => {
                                  e.currentTarget.textContent =
                                    e.currentTarget.textContent === "Ver pista"
                                      ? "Pensá en el contexto"
                                      : "Ver pista";
                                }}
                              >
                                Ver pista
                              </button>
                            </div>
                          ))}
                        </div>
                      </article>
                    </section>
                  </GrammarStep>
                  <GrammarStep
                    number="04"
                    eyebrow="PRODUCCIÓN"
                    title="Conversación"
                    description="Usa la estructura para hablar."
                  >
                    <section className="lesson-section speaking-section">
                      <article>
                        <div className="prompt-list">
                          {activeLesson.speaking.map((x, i) => (
                            <div key={x}>
                              <span>{["🗣️", "🎭", "⚡"][i]}</span>
                              <p>
                                <b>Ronda {i + 1}</b>
                                {x}
                              </p>
                            </div>
                          ))}
                        </div>
                      </article>
                    </section>
                  </GrammarStep>
                  <GrammarStep number="05" eyebrow="CIERRE" title="Para seguir">
                    <section className="homework">
                      <span>↗</span>
                      <div>
                        <small>PARA SEGUIR</small>
                        <h3>Tarea breve</h3>
                        <p>{activeLesson.homework}</p>
                      </div>
                    </section>
                  </GrammarStep>
                </div>
              ) : (
                <>
                  <section className="objective-box">
                    <div>01</div>
                    <article>
                      <span>OBJETIVOS DE HOY</span>
                      <h3>Al final de la clase, el alumno puede…</h3>
                      <ul>
                        {activeLesson.goals.map((x) => (
                          <li key={x}>✓ {x}</li>
                        ))}
                      </ul>
                    </article>
                  </section>
                  <section className="lesson-section">
                    <div className="section-number">02</div>
                    <article>
                      <span>ACTIVACIÓN · 5 MIN</span>
                      <h3>Empezamos hablando</h3>
                      <p>{activeLesson.warmup}</p>
                      <div className="teacher-note">
                        💡 <b>Nota para ti:</b> no corrijas todavía. Escucha
                        qué recursos ya tiene el alumno.
                      </div>
                    </article>
                  </section>
                  <section className="lesson-section">
                    <div className="section-number">03</div>
                    <article>
                      <span>CLAVE DEL TEMA</span>
                      <h3>La idea simple</h3>
                      <p className="big-explanation">
                        {activeLesson.explanation}
                      </p>
                    </article>
                  </section>
                  <section className="lesson-section">
                    <div className="section-number">04</div>
                    <article>
                      <span>PRÁCTICA GUIADA</span>
                      <h3>Completa y justifica</h3>
                      <div className="exercise-grid">
                        {activeLesson.practice.map((x, i) => (
                          <div key={x}>
                            <b>{i + 1}</b>
                            <p>{x}</p>
                            <button
                              onClick={(e) => {
                                e.currentTarget.textContent =
                                  e.currentTarget.textContent === "Ver pista"
                                    ? "Pensá en el contexto"
                                    : "Ver pista";
                              }}
                            >
                              Ver pista
                            </button>
                          </div>
                        ))}
                      </div>
                    </article>
                  </section>
                  <section className="lesson-section speaking-section">
                    <div className="section-number">05</div>
                    <article>
                      <span>AHORA HABLAMOS</span>
                      <h3>De práctica a conversación real</h3>
                      <div className="prompt-list">
                        {activeLesson.speaking.map((x, i) => (
                          <div key={x}>
                            <span>{["🗣️", "🎭", "⚡"][i]}</span>
                            <p>
                              <b>Ronda {i + 1}</b>
                              {x}
                            </p>
                          </div>
                        ))}
                      </div>
                    </article>
                  </section>
                  <section className="homework">
                    <span>↗</span>
                    <div>
                      <small>PARA SEGUIR</small>
                      <h3>Tarea breve</h3>
                      <p>{activeLesson.homework}</p>
                    </div>
                  </section>
                </>
              )}
            </div>
            <footer className="viewer-footer">
              <SpanishCueBrand variant="compact" />
              <button onClick={() => window.print()}>⤓ {t("common.printClass")}</button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}
