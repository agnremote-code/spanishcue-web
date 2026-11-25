import type { CountryMeta, Pair } from './types';

// Roleplays del mundo hispano (2026-11-24): one A1–A2 roleplay class per
// Spanish-speaking country, after Argento Roleplays (19). Each country has its
// own route app/roleplays-<slug>, its own flag and its own expressions; the
// engine and the look are shared (app/roleplays-hispanos/Roleplays.tsx).
const m = (slug: string, id: number, name: string, flag: string, accent: string, accent2: string, hero: [string, string, string], trato: Pair, variedad: string): CountryMeta => ({ slug, id, name, flag, accent, accent2, hero, trato, variedad });

export const PAISES: CountryMeta[] = [
  m('mexico', 265, 'México', 'mx', '#006847', '#ce1126', ['¿Qué onda?', '¡Órale!', 'Chido'], ['Entre amigos se usa tú; con mayores y en tiendas, usted.', 'Friends use tú; older people and shops get usted.'] as Pair, 'el español de México'),
  m('guatemala', 266, 'Guatemala', 'gt', '#2f86c9', '#4997d0', ['¡Qué chilero!', 'Patojo', '¡Va pues!'], ['Entre amigos se usa vos; con desconocidos, usted.', 'Friends use vos; strangers get usted.'] as Pair, 'el español de Guatemala'),
  m('honduras', 267, 'Honduras', 'hn', '#0073cf', '#18c3df', ['¡Qué macizo!', 'Cipote', '¡Púchica!'], ['Entre amigos se usa vos; con desconocidos, usted.', 'Friends use vos; strangers get usted.'] as Pair, 'el español de Honduras'),
  m('el-salvador', 268, 'El Salvador', 'sv', '#0f47af', '#3d6fd1', ['¡Qué chivo!', 'Chero', 'Cipote'], ['Entre amigos se usa vos; con desconocidos, usted.', 'Friends use vos; strangers get usted.'] as Pair, 'el español de El Salvador'),
  m('nicaragua', 269, 'Nicaragua', 'ni', '#0067c6', '#3b8fe0', ['¡Ideay!', 'Tuani', 'Chunche'], ['Entre amigos se usa vos; con desconocidos, usted.', 'Friends use vos; strangers get usted.'] as Pair, 'el español de Nicaragua'),
  m('costa-rica', 270, 'Costa Rica', 'cr', '#002b7f', '#ce1126', ['¡Pura vida!', 'Mae', 'Tuanis'], ['Se usa mucho usted, también entre amigos; tú casi no se usa.', 'Usted is used a lot, even among friends; tú is rare.'] as Pair, 'el español de Costa Rica'),
  m('panama', 271, 'Panamá', 'pa', '#005293', '#d21034', ['¡Qué xopá!', 'Chuleta', 'Buco'], ['Entre amigos se usa tú; con desconocidos, usted.', 'Friends use tú; strangers get usted.'] as Pair, 'el español de Panamá'),
  m('cuba', 272, 'Cuba', 'cu', '#002a8f', '#cf142b', ['¿Qué bolá?', 'Asere', 'La guagua'], ['Casi siempre se usa tú.', 'Tú is used almost everywhere.'] as Pair, 'el español de Cuba'),
  m('republica-dominicana', 273, 'República Dominicana', 'do', '#002d62', '#ce1126', ['¿Qué lo que?', 'Un chin', 'Jevi'], ['Entre amigos se usa tú; con mayores, usted.', 'Friends use tú; older people get usted.'] as Pair, 'el español dominicano'),
  m('puerto-rico', 274, 'Puerto Rico', 'pr', '#0050f0', '#ed0000', ['¡Wepa!', 'Brutal', 'Janguear'], ['Casi siempre se usa tú.', 'Tú is used almost everywhere.'] as Pair, 'el español de Puerto Rico'),
  m('colombia', 275, 'Colombia', 'co', '#003893', '#c8a400', ['¿Qué más?', 'Bacano', 'Parce'], ['Se usa mucho usted, también con amigos; tú depende de la región.', 'Usted is common, even with friends; tú depends on the region.'] as Pair, 'el español de Colombia'),
  m('venezuela', 276, 'Venezuela', 've', '#00247d', '#cf142b', ['¡Épale!', 'Chamo', 'Chévere'], ['Entre amigos se usa tú; con mayores, usted.', 'Friends use tú; older people get usted.'] as Pair, 'el español de Venezuela'),
  m('ecuador', 277, 'Ecuador', 'ec', '#034ea2', '#c79a00', ['¿Qué fue?', '¡Chuta!', 'Ñaño'], ['Entre amigos se usa tú; usted es muy común y amable.', 'Friends use tú; usted is very common and polite.'] as Pair, 'el español de Ecuador'),
  m('peru', 278, 'Perú', 'pe', '#d91023', '#a30c1a', ['¡Habla, causa!', 'Bacán', 'Jato'], ['Entre amigos se usa tú; con mayores, usted.', 'Friends use tú; older people get usted.'] as Pair, 'el español de Perú'),
  m('bolivia', 279, 'Bolivia', 'bo', '#007934', '#d52b1e', ['¡Qué macana!', 'Yapa', 'Nomás'], ['Entre amigos se usa tú (en el oriente, vos); con mayores, usted.', 'Friends use tú (vos in the east); older people get usted.'] as Pair, 'el español de Bolivia'),
  m('chile', 280, 'Chile', 'cl', '#0039a6', '#d52b1e', ['¿Cachai?', 'Bacán', 'Al tiro'], ['Entre amigos se usa tú; con mayores y en trámites, usted.', 'Friends use tú; older people and offices get usted.'] as Pair, 'el español de Chile'),
  m('paraguay', 281, 'Paraguay', 'py', '#0038a8', '#d52b1e', ['¡Nde!', 'Tereré', 'Luego'], ['Entre amigos se usa vos; con desconocidos, usted.', 'Friends use vos; strangers get usted.'] as Pair, 'el español de Paraguay'),
  m('uruguay', 282, 'Uruguay', 'uy', '#0038a8', '#c49102', ['Ta', '¡Qué bárbaro!', 'Botija'], ['Entre amigos se usa vos (a veces tú); con desconocidos, usted.', 'Friends use vos (sometimes tú); strangers get usted.'] as Pair, 'el español de Uruguay'),
  m('espana', 283, 'España', 'es', '#aa151b', '#c99700', ['Vale', 'Guay', '¡Qué fuerte!'], ['Se usa tú con casi todo el mundo, y vosotros para el plural.', 'Tú is used with almost everyone, and vosotros for the plural.'] as Pair, 'el español de España'),
  m('guinea-ecuatorial', 284, 'Guinea Ecuatorial', 'gq', '#3e9a00', '#e32118', ['Mbolo', 'Castizar', '¡No dispares!'], ['Se usa mucho usted, sobre todo con mayores; tú entre amigos.', 'Usted is very common, above all with elders; tú among friends.'] as Pair, 'el español de Guinea Ecuatorial'),
];

export const paisBySlug = (slug: string) => {
  const pais = PAISES.find((item) => item.slug === slug);
  if (!pais) throw new Error(`Unknown roleplay country: ${slug}`);
  return pais;
};
