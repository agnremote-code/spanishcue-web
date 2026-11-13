// El mundo en blanco · who is who and where. A world folded out of paper has
// lost its ink: everything is white, creased and silent. You arrive with the
// only pencil left. Twelve paper beings wait in four regions; each one has a
// problem and ONE deep question. Nothing is right or wrong: when an encounter
// closes, the ink comes back around that being and colour floods the paper.
// At the end the class gathers your answers into «tu página».
// Every character keeps one voice for the whole class: the browser voice of
// the conversation follows `gender`; the neural voice of the listenings is
// `voice` (app/escucha-3d/voices.json).

export const ZONES = [
  { id: 'muelle', name: 'El Muelle de las Cartas', ink: '#2f6fb3', hook: 'Un mar de papel de seda, una grulla que espera y cartas que nunca salieron.' },
  { id: 'bosque', name: 'El Bosque de los Borradores', ink: '#3f8f5a', hook: 'Árboles de hojas arrugadas donde vive todo lo que alguien tiró a la papelera.' },
  { id: 'ciudad', name: 'La Ciudad Recortable', ink: '#d2553f', hook: 'Edificios que se abren como un libro y vecinos hechos con tijera.' },
  { id: 'cumbre', name: 'La Montaña del Último Pliegue', ink: '#8a55b8', hook: 'Un farolillo, una ballena que nada entre las nubes y, arriba, una hoja sin escribir.' },
];
export const ZONE_IDS = ZONES.map((z) => z.id);
export const zoneById = (id) => ZONES.find((z) => z.id === id) ?? null;

// kind: what the being is folded into (app/el-mundo-en-blanco/seres3d.ts builds each one by hand).
// ink: the colour that comes back with them.
export const CAST = {
  senba: { name: 'Senba', full: 'Senba, la grulla número mil', role: 'La última grulla de una cadena de mil: nunca supo si el deseo se cumplió', kind: 'grulla', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú', ink: '#e8506a' },
  pliego: { name: 'Capitán Pliego', full: 'El Capitán Pliego', role: 'Barco de papel de periódico que nunca tocó el agua', kind: 'barco', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España', ink: '#2f6fb3' },
  remite: { name: 'Remite', full: 'Remite, el zorro cartero', role: 'Guarda las cartas que alguien escribió y no se atrevió a enviar', kind: 'zorro', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia', ink: '#e8862e' },
  borra: { name: 'Borra', full: 'Borra, la bola de papel', role: 'Fue una idea; alguien la arrugó y la tiró antes de terminarla', kind: 'bola', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina', ink: '#c9a24a' },
  brinca: { name: 'Brinca', full: 'Brinca, la rana saltarina', role: 'Solo sabe saltar hacia delante: no puede volver atrás', kind: 'rana', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México', ink: '#3f8f5a' },
  margen: { name: 'Don Margen', full: 'Don Margen, el búho', role: 'Vive en los márgenes y corrige en rojo todo lo que ve', kind: 'buho', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile', ink: '#b23a3a' },
  lina: { name: 'Lina', full: 'Lina, la tercera muñeca', role: 'Una de cinco muñecas recortadas de la mano: quiere soltarse', kind: 'munecas', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela', ink: '#e06aa0' },
  dardo: { name: 'Dardo', full: 'Dardo, el avión de papel', role: 'Un niño lo lanzó por la ventana de un aula hace treinta años y todavía no ha aterrizado', kind: 'avion', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay', ink: '#3aa7c9' },
  titular: { name: 'Titular', full: 'Titular, el dragón de periódico', role: 'Está hecho de noticias de ayer: lo sabe todo y lo olvida todo', kind: 'dragon', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba', ink: '#d2553f' },
  candela: { name: 'Candela', full: 'Candela, el farolillo', role: 'Lleva fuego dentro de un cuerpo de papel', kind: 'farol', gender: 'f', voice: 'es-DO-RamonaNeural', country: 'República Dominicana', ink: '#f0b429' },
  mar: { name: 'Mar', full: 'Mar, la ballena de papel', role: 'Carga un pueblo entero sobre la espalda y nunca ha pedido ayuda', kind: 'ballena', gender: 'f', voice: 'es-CR-MariaNeural', country: 'Costa Rica', ink: '#4d6fd0' },
  hoja: { name: 'La Hoja', full: 'La Hoja en Blanco', role: 'La última página del mundo: todavía no tiene dueño', kind: 'hoja', gender: 'f', voice: 'es-EC-AndreaNeural', country: 'Ecuador', ink: '#8a55b8' },
};

// The twelve encounters, in the order of the walk (south to north).
export const SPOTS = [
  { id: 'grulla', zone: 'muelle', cast: ['senba'] },
  { id: 'barco', zone: 'muelle', cast: ['pliego'] },
  { id: 'zorro', zone: 'muelle', cast: ['remite'] },
  { id: 'bola', zone: 'bosque', cast: ['borra'] },
  { id: 'rana', zone: 'bosque', cast: ['brinca'] },
  { id: 'buho', zone: 'bosque', cast: ['margen'] },
  { id: 'munecas', zone: 'ciudad', cast: ['lina'] },
  { id: 'avion', zone: 'ciudad', cast: ['dardo'] },
  { id: 'dragon', zone: 'ciudad', cast: ['titular'] },
  { id: 'farol', zone: 'cumbre', cast: ['candela'] },
  { id: 'ballena', zone: 'cumbre', cast: ['mar'] },
  { id: 'hoja', zone: 'cumbre', cast: ['hoja'] },
];
export const SPOT_IDS = SPOTS.map((s) => s.id);
export const spotById = (id) => SPOTS.find((s) => s.id === id) ?? null;
export const OPTIONS = 3;
export const TALKS = 3;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue (A0 counts the Spanish half): short on purpose,
// the question is the heart of every encounter.
export const SCENE_WORDS = { A0: [18, 90], A1: [30, 115], A2: [50, 145], B1: [65, 175], B2: [80, 205], C1: [90, 225], C2: [95, 245] };
// The open questions that follow each answer: long enough to ask for a real answer.
export const TALK_MIN_WORDS = { A0: 3, A1: 4, A2: 7, B1: 9, B2: 10, C1: 11, C2: 11 };
