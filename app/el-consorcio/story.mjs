// El consorcio · who is who. Edificio Las Glicinas, Medrano 1417, Almagro,
// Buenos Aires: a 1958 building with eight floors (planta baja and seven
// pisos), a terrace and an elevator with a folding grille that everybody
// loves and nobody trusts. You move into 4.° B today, and at 21:00 there is an
// extraordinary meeting of the consorcio on the terrace: replace the elevator
// (and pay much higher expensas) or keep it. You are new, so the building
// names you secretary of the meeting. Every character keeps one voice for
// the whole class (scenes and the listenings of every level), taken from
// the Edge neural voices in app/escucha-3d/voices.json.
// The 18 white circles are listed in the order the evening walks them.

export const CAST = {
  ramon: { name: 'Ramón', full: 'Don Ramón Giménez', role: 'Encargado del edificio desde 1991', gender: 'm', voice: 'es-PY-MarioNeural', country: 'Paraguay' },
  freddy: { name: 'Freddy', full: 'Freddy Choque', role: 'Fletero de tu mudanza', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  elvira: { name: 'Elvira', full: 'Doña Elvira Pazos', role: 'Vecina del 1.° A que lo sabe todo', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  nahuel: { name: 'Nahuel', full: 'Nahuel Acosta', role: 'Repartidor en bicicleta', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  marta: { name: 'Marta', full: 'Licenciada Marta Goldstein', role: 'Psicoanalista que atiende en el 1.° B', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina' },
  federico: { name: 'Federico', full: 'Federico Lamas', role: 'Paciente de los jueves', gender: 'm', voice: 'es-NI-FedericoNeural', country: 'Nicaragua' },
  thiago: { name: 'Thiago', full: 'Thiago Brenes', role: 'Baterista de dieciséis años del 1.° C', gender: 'm', voice: 'es-CR-JuanNeural', country: 'Costa Rica' },
  noelia: { name: 'Noelia', full: 'Noelia Brenes', role: 'Madre de Thiago', gender: 'f', voice: 'es-CR-MariaNeural', country: 'Costa Rica' },
  wilson: { name: 'Wilson', full: 'Wilson Mamani', role: 'Vecino del 2.° A con una gotera', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  carla: { name: 'Carla', full: 'Carla Mamani', role: 'Esposa de Wilson', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
  pocha: { name: 'Pocha', full: 'Doña Pocha Ledesma', role: 'Vecina del 2.° D con catorce gatos', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  gaston: { name: 'Gastón', full: 'Gastón Urbina', role: 'Plomero de confianza (dice él)', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela' },
  yuliana: { name: 'Yuliana', full: 'Yuliana Rangel', role: 'Programadora que trabaja desde el 3.° A', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  iker: { name: 'Iker', full: 'Iker Etxeberria', role: 'Turista del 3.° C', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  nerea: { name: 'Nerea', full: 'Nerea Etxeberria', role: 'Turista del 3.° C', gender: 'f', voice: 'es-ES-XimenaNeural', country: 'España' },
  amalia: { name: 'Amalia', full: 'Señora Amalia Ferreyra', role: 'Dueña del 4.° B, tu casera', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  washington: { name: 'Washington', full: 'Don Washington Olivera', role: 'Jubilado y profesor de tango del 4.° C', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  jennifer: { name: 'Jennifer', full: 'Jennifer Ospina', role: 'Madre del cumpleañero del 5.° D', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  pochoclo: { name: 'Pochoclo', full: 'Payaso Pochoclo', role: 'Payaso contratado para el cumpleaños', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  aurelio: { name: 'Aurelio', full: 'Don Aurelio Funes', role: 'Vecino de noventa y un años del 5.° A', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  daisy: { name: 'Daisy', full: 'Daisy Mejía', role: 'Cuidadora de don Aurelio', gender: 'f', voice: 'es-HN-KarlaNeural', country: 'Honduras' },
  barrionuevo: { name: 'Barrionuevo', full: 'Contador Ernesto Barrionuevo', role: 'Administrador del consorcio', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  mirta: { name: 'Mirta', full: 'Mirta Pereyra', role: 'Heredera del 6.° B', gender: 'f', voice: 'es-PA-MargaritaNeural', country: 'Panamá' },
  ruben: { name: 'Rubén', full: 'Rubén Pereyra', role: 'Heredero del 6.° B, hermano de Mirta', gender: 'm', voice: 'es-PA-RobertoNeural', country: 'Panamá' },
  ibarra: { name: 'Ibarra', full: 'Señor Ibarra', role: 'El vecino del 7.° D que nadie ve desde hace once años', gender: 'm', voice: 'es-SV-RodrigoNeural', country: 'El Salvador' },
  lili: { name: 'Lili', full: 'Lili Arévalo', role: 'Vecina del 7.° B que le deja comida', gender: 'f', voice: 'es-SV-LorenaNeural', country: 'El Salvador' },
  brian: { name: 'Brian', full: 'Brian Sosa', role: 'Dueño del 7.° A y de una obra secreta', gender: 'm', voice: 'es-PR-VictorNeural', country: 'Puerto Rico' },
  cirilo: { name: 'Cirilo', full: 'Don Cirilo Paz', role: 'Albañil de la obra secreta', gender: 'm', voice: 'es-HN-CarlosNeural', country: 'Honduras' },
  hilda: { name: 'Hilda', full: 'Doña Hilda Quiroga', role: 'Vecina del 6.° C y dueña de las sogas de la terraza', gender: 'f', voice: 'es-BO-SofiaNeural', country: 'Bolivia' },
  kevin: { name: 'Kevin', full: 'Kevin Andrade', role: 'Vecino del 3.° B y asador clandestino', gender: 'm', voice: 'es-EC-LuisNeural', country: 'Ecuador' },
  portero: { name: 'Celeste', full: 'Celeste Duarte', role: 'La voz del portero eléctrico', gender: 'f', voice: 'es-PY-TaniaNeural', country: 'Paraguay' },
};

// The 18 circles: sector, floor, who is there (first = the person you talk to).
// Floor 0 is the planta baja, 1–7 the pisos, 8 the terrace.
export const STORY = [
  { id: 'llegada', sector: 'Puerta del edificio', floor: 0, cast: ['ramon', 'freddy'] },
  { id: 'buzones', sector: 'Hall y buzones', floor: 0, cast: ['elvira', 'nahuel'] },
  { id: 'consultorio', sector: 'Consultorio del 1.° B', floor: 1, cast: ['marta', 'federico'] },
  { id: 'bateria', sector: 'Palier del primero', floor: 1, cast: ['noelia', 'thiago'] },
  { id: 'gotera', sector: 'Departamento 2.° A', floor: 2, cast: ['wilson', 'carla'] },
  { id: 'gatos', sector: 'Departamento 2.° D', floor: 2, cast: ['pocha', 'gaston'] },
  { id: 'teletrabajo', sector: 'Departamento 3.° A', floor: 3, cast: ['yuliana', 'wilson'] },
  { id: 'turistas', sector: 'Palier del tercero', floor: 3, cast: ['iker', 'nerea'] },
  { id: 'mudanza', sector: 'Tu departamento: 4.° B', floor: 4, cast: ['amalia', 'freddy'] },
  { id: 'tango', sector: 'Departamento 4.° C', floor: 4, cast: ['washington'] },
  { id: 'cumple', sector: 'Departamento 5.° D', floor: 5, cast: ['jennifer', 'pochoclo'] },
  { id: 'ataud', sector: 'Departamento 5.° A', floor: 5, cast: ['aurelio', 'daisy'] },
  { id: 'administrador', sector: 'Palier del sexto', floor: 6, cast: ['barrionuevo', 'ramon'] },
  { id: 'herencia', sector: 'Departamento 6.° B', floor: 6, cast: ['mirta', 'ruben'] },
  { id: 'misterio', sector: 'Palier del séptimo', floor: 7, cast: ['ibarra', 'lili'] },
  { id: 'obra', sector: 'Departamento 7.° A', floor: 7, cast: ['brian', 'cirilo'] },
  { id: 'sogas', sector: 'Terraza: las sogas', floor: 8, cast: ['hilda', 'kevin'] },
  { id: 'asamblea', sector: 'Terraza: la asamblea', floor: 8, cast: ['barrionuevo', 'elvira', 'ramon'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 75], A1: [35, 100], A2: [55, 135], B1: [75, 170], B2: [95, 205], C1: [110, 240], C2: [125, 275] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];

// The evening on your clipboard: the building, your flat, the meeting.
export const BUILDING = {
  name: 'Edificio Las Glicinas',
  address: 'Medrano 1417 · Almagro',
  flat: '4.° B',
  units: 28,
  quorum: 15,
  start: [18, 0],
  meeting: [21, 0],
};

// The clock of the evening: 18:00 with nothing played, 21:00 when every circle is done.
export function eveningClock(done, total = STORY.length) {
  const start = BUILDING.start[0] * 60 + BUILDING.start[1];
  const end = BUILDING.meeting[0] * 60 + BUILDING.meeting[1];
  const k = Math.max(0, Math.min(1, done / total));
  const minutes = Math.round((start + (end - start) * k) / 5) * 5;
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}

// The secretary's clipboard: which units will come to the meeting. Every
// circle played before the meeting brings the units of the people in it
// (the encargado counts as the portería); the terrace meeting closes it.
export const UNITS = {
  llegada: ['PB'], buzones: ['1A'], consultorio: ['1B'], bateria: ['1C'], gotera: ['2A'], gatos: ['2D'],
  teletrabajo: ['3A'], turistas: ['3C'], mudanza: ['4B'], tango: ['4C'], cumple: ['5D'], ataud: ['5A'],
  administrador: [], herencia: ['6B'], misterio: ['7D', '7B'], obra: ['7A'], sogas: ['6C', '3B'],
};
export function clipboard(done) {
  const units = [...new Set(done.flatMap((id) => UNITS[id] ?? []))];
  const voted = done.includes('asamblea');
  if (voted) return { state: 'votado', units: units.length, label: 'Acta firmada' };
  if (units.length >= BUILDING.quorum) return { state: 'quorum', units: units.length, label: 'Hay quórum' };
  return { state: 'juntando', units: units.length, label: 'Sin quórum todavía' };
}
