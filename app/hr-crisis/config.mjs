// HR Crisis · the student profile. Everything personal in the class (the
// mascot's name and flag, the help tab's language, the professional field,
// the level, the target vocabulary and the objectives) comes from here, so the
// same company can be reused for any student: change the profile, not the
// class. The default profile is Tizia, a Brazilian HR professional at A1.

export const STORAGE_KEY = 'spanishcue:hr-crisis:v1';
export const PROFILE_KEY = 'spanishcue:hr-crisis:perfil';

export const LEVEL_IDS = ['A1', 'A2', 'B1', 'B2', 'C1'];

// Countries the mascot can wear: flag drawing, clothing colours and the
// adjective used in the dialogue (feminine / masculine).
export const COUNTRIES = {
  BR: { name: 'Brasil', adj: ['brasileña', 'brasileño'], emoji: '🇧🇷', top: '#f6d21c', bottom: '#1f9a48', accent: '#1d3f9a' },
  PT: { name: 'Portugal', adj: ['portuguesa', 'portugués'], emoji: '🇵🇹', top: '#c8262c', bottom: '#1f7a3a', accent: '#f2c230' },
  US: { name: 'Estados Unidos', adj: ['estadounidense', 'estadounidense'], emoji: '🇺🇸', top: '#ffffff', bottom: '#25386e', accent: '#c8262c' },
  GB: { name: 'Reino Unido', adj: ['británica', 'británico'], emoji: '🇬🇧', top: '#25386e', bottom: '#2a2f3a', accent: '#c8262c' },
  FR: { name: 'Francia', adj: ['francesa', 'francés'], emoji: '🇫🇷', top: '#ffffff', bottom: '#25386e', accent: '#d8323a' },
  IT: { name: 'Italia', adj: ['italiana', 'italiano'], emoji: '🇮🇹', top: '#ffffff', bottom: '#1f8a4a', accent: '#d8323a' },
  DE: { name: 'Alemania', adj: ['alemana', 'alemán'], emoji: '🇩🇪', top: '#2a2a2a', bottom: '#3a3a40', accent: '#f2c230' },
  NL: { name: 'Países Bajos', adj: ['neerlandesa', 'neerlandés'], emoji: '🇳🇱', top: '#f08a24', bottom: '#25386e', accent: '#ffffff' },
  SE: { name: 'Suecia', adj: ['sueca', 'sueco'], emoji: '🇸🇪', top: '#2a6ab0', bottom: '#2a3a5a', accent: '#f2c230' },
  JP: { name: 'Japón', adj: ['japonesa', 'japonés'], emoji: '🇯🇵', top: '#ffffff', bottom: '#2a2f3a', accent: '#c8262c' },
  CN: { name: 'China', adj: ['china', 'chino'], emoji: '🇨🇳', top: '#c8262c', bottom: '#2a2f3a', accent: '#f2c230' },
  CA: { name: 'Canadá', adj: ['canadiense', 'canadiense'], emoji: '🇨🇦', top: '#d8323a', bottom: '#2a2f3a', accent: '#ffffff' },
};

// Native languages. Only Portuguese has a full help tab (translations,
// grammar in Portuguese, false friends); any other language gets the help in
// simple Spanish (glossary and grammar), never an automatic translation.
export const NATIVE = {
  pt: { name: 'portugués', tab: '🇧🇷 Ajuda em português', full: true },
  otro: { name: 'otra lengua', tab: '📘 Ayuda en español fácil', full: false },
};

export const DEFAULT_PROFILE = {
  nombre: 'Tizia',
  genero: 'f',
  pais: 'BR',
  lengua: 'pt',
  area: 'Recursos Humanos',
  nivel: 'A1',
  vocabulario: ['entrevista', 'candidato', 'contrato', 'nómina', 'salario', 'despido', 'vacaciones', 'horario', 'queja', 'reunión'],
  objetivos: [
    'Participar en conversaciones básicas de Recursos Humanos',
    'Hacer entrevistas sencillas',
    'Entender los problemas de los empleados',
    'Hablar de temas administrativos: números, fechas y salarios',
    'Comunicar decisiones profesionales con seguridad',
  ],
};

const clean = (v, max = 40) => String(v ?? '').replace(/[<>{}]/g, '').trim().slice(0, max);
const list = (v, max) => (Array.isArray(v) ? v : String(v ?? '').split(/[,;\n]/)).map(x => clean(x, 120)).filter(Boolean).slice(0, max);

export function normaliseLevel(value) {
  const v = String(value ?? '').toUpperCase().trim();
  return LEVEL_IDS.includes(v) ? v : null;
}

/** A profile with every field valid; unknown values fall back to Tizia's. */
export function normaliseProfile(raw) {
  const p = raw && typeof raw === 'object' ? raw : {};
  const d = DEFAULT_PROFILE;
  const vocab = list(p.vocabulario, 20);
  const goals = list(p.objetivos, 8);
  return {
    nombre: clean(p.nombre, 24) || d.nombre,
    genero: p.genero === 'm' ? 'm' : 'f',
    pais: COUNTRIES[String(p.pais ?? '').toUpperCase()] ? String(p.pais).toUpperCase() : d.pais,
    lengua: NATIVE[p.lengua] ? p.lengua : (p.lengua ? 'otro' : d.lengua),
    area: clean(p.area, 40) || d.area,
    nivel: normaliseLevel(p.nivel) ?? d.nivel,
    vocabulario: vocab.length ? vocab : d.vocabulario,
    objetivos: goals.length ? goals : d.objetivos,
  };
}

/** Query parameters a teacher can put in the link: ?alumno=Ana&pais=IT&lengua=otro&nivel=B1&area=Ventas */
export function profileFromQuery(search, base = DEFAULT_PROFILE) {
  const q = new URLSearchParams(search);
  const pick = (...keys) => keys.map(k => q.get(k)).find(v => v != null && v !== '');
  const next = { ...base };
  const nombre = pick('alumno', 'nombre', 'name');
  if (nombre) next.nombre = nombre;
  const genero = pick('genero');
  if (genero) next.genero = genero;
  const pais = pick('pais', 'flag');
  if (pais) next.pais = pais;
  const lengua = pick('lengua');
  if (lengua) next.lengua = lengua;
  const area = pick('area');
  if (area) next.area = area;
  const nivel = pick('nivel', 'level');
  if (nivel) next.nivel = nivel;
  const vocab = pick('vocabulario');
  if (vocab) next.vocabulario = vocab;
  return normaliseProfile(next);
}

/**
 * Fills a text with the profile: {nombre}, {pais}, {nacionalidad}, {area}
 * and gendered endings written as [a|o] (feminine first).
 */
export function fill(text, profile) {
  if (typeof text !== 'string') return text;
  const p = profile ?? DEFAULT_PROFILE;
  const country = COUNTRIES[p.pais] ?? COUNTRIES.BR;
  const f = p.genero !== 'm';
  return text
    .replace(/\{nombre\}/g, p.nombre)
    .replace(/\{pais\}/g, country.name)
    .replace(/\{nacionalidad\}/g, country.adj[f ? 0 : 1])
    .replace(/\{area\}/g, p.area)
    .replace(/\{area-min\}/g, p.area.toLocaleLowerCase('es'))
    .replace(/\[([^|\]]*)\|([^\]]*)\]/g, (_, fem, masc) => (f ? fem : masc));
}
