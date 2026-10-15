// Hospital San Casi Vivo · who is who. Every character has one voice for the
// whole class (conversation scenes and the listenings of every level), taken
// from the Edge neural voices of their country in app/escucha-3d/voices.json.
// The 21 white circles are listed in the order the class walks them.

export const CAST = {
  norma: { name: 'Norma', full: 'Norma Quiroga', role: 'Recepcionista', gender: 'f', voice: 'es-AR-ElenaNeural', country: 'Argentina' },
  susana: { name: 'Susana', full: 'Susana Quiroga', role: 'Hermana de Norma', gender: 'f', voice: 'es-UY-ValentinaNeural', country: 'Uruguay' },
  anselmo: { name: 'Anselmo', full: 'Don Anselmo Ferreyra', role: 'Paciente con dolor de garganta', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay' },
  andres: { name: 'Andrés', full: 'Andrés Monterroso', role: 'Recién llegado a la sala de espera', gender: 'm', voice: 'es-GT-AndresNeural', country: 'Guatemala' },
  pilar: { name: 'Pilar', full: 'Doña Pilar de la Vega', role: 'Paciente que exige trato VIP', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  ximena: { name: 'Ximena', full: 'Ximena de la Vega', role: 'Hija de Pilar', gender: 'f', voice: 'es-ES-XimenaNeural', country: 'España' },
  vidal: { name: 'Alonso', full: 'Dr. Alonso Vidal', role: 'Director del hospital, de incógnito', gender: 'm', voice: 'es-US-AlonsoNeural', country: 'Estados Unidos' },
  gladys: { name: 'Gladys', full: 'Gladys Peralta', role: 'Paciente convencida de que se muere', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México' },
  wilson: { name: 'Wilson', full: 'Wilson Cabrera', role: 'Enfermero de triaje', gender: 'm', voice: 'es-DO-EmilioNeural', country: 'República Dominicana' },
  inigo: { name: 'Íñigo', full: 'Dr. Íñigo Salazar', role: 'Médico de guardia, treinta horas sin dormir', gender: 'm', voice: 'es-ES-AlvaroNeural', country: 'España' },
  catalina: { name: 'Catalina', full: 'Dra. Catalina Rojas', role: 'Traumatóloga', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  yamile: { name: 'Yamilé', full: 'Yamilé Ortiz', role: 'Paramédica', gender: 'f', voice: 'es-CU-BelkysNeural', country: 'Cuba' },
  manuel: { name: 'Manuel', full: 'Manuel Ortiz', role: 'Conductor de ambulancia', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  kevin: { name: 'Kevin', full: 'Kevin Rosario', role: 'Accidentado que transmite en directo', gender: 'm', voice: 'es-PR-VictorNeural', country: 'Puerto Rico' },
  ezequiel: { name: 'Ezequiel', full: 'Ezequiel Ledesma', role: 'Se cayó de una escalera por un gato', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina' },
  paola: { name: 'Paola', full: 'Paola Briceño', role: 'Vecina de Ezequiel', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  benigno: { name: 'Benigno', full: 'Don Benigno Paz', role: 'Paciente grave y demasiado educado', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  camila: { name: 'Camila', full: 'Camila Paz', role: 'Nieta de Benigno', gender: 'f', voice: 'es-PE-CamilaNeural', country: 'Perú' },
  rufino: { name: 'Rufino', full: 'Rufino Aguilera', role: 'Paciente con un anzuelo en la ceja', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela' },
  marta: { name: 'Marta', full: 'Marta Chinchilla', role: 'Enfermera de curaciones', gender: 'f', voice: 'es-GT-MartaNeural', country: 'Guatemala' },
  ramona: { name: 'Ramona', full: 'Doña Ramona Jiménez', role: 'Cocinera de la cafetería', gender: 'f', voice: 'es-DO-RamonaNeural', country: 'República Dominicana' },
  federico: { name: 'Federico', full: 'Federico Lacayo', role: 'Técnico de radiología', gender: 'm', voice: 'es-NI-FedericoNeural', country: 'Nicaragua' },
  gonzalo: { name: 'Gonzalo', full: 'Gonzalo Pereira', role: 'Administrativo de facturación', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  jorge: { name: 'Jorge', full: 'Jorge Treviño', role: 'Paciente que no quiere pagar', gender: 'm', voice: 'es-MX-JorgeNeural', country: 'México' },
  andrea: { name: 'Andrea', full: 'Andrea Villacís', role: 'Técnica de laboratorio', gender: 'f', voice: 'es-EC-AndreaNeural', country: 'Ecuador' },
  luis: { name: 'Luis', full: 'Luis Andrade', role: 'Técnico de laboratorio', gender: 'm', voice: 'es-EC-LuisNeural', country: 'Ecuador' },
  karla: { name: 'Karla', full: 'Karla Mejía', role: 'Paciente que se tragó un anillo', gender: 'f', voice: 'es-HN-KarlaNeural', country: 'Honduras' },
  yolanda: { name: 'Yolanda', full: 'Yolanda Ruiz', role: 'Amiga de Karla', gender: 'f', voice: 'es-NI-YolandaNeural', country: 'Nicaragua' },
  lorenzo: { name: 'Lorenzo', full: 'Dr. Lorenzo Undurraga', role: 'Cirujano', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  mercedes: { name: 'Mercedes', full: 'Dra. Mercedes Ibarra', role: 'Cirujana', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia' },
  tania: { name: 'Tania', full: 'Tania Benítez', role: 'Residente de primer año', gender: 'f', voice: 'es-PY-TaniaNeural', country: 'Paraguay' },
  rodrigo: { name: 'Rodrigo', full: 'Dr. Rodrigo Funes', role: 'Anestesista que solo quiere dormir', gender: 'm', voice: 'es-SV-RodrigoNeural', country: 'El Salvador' },
  margarita: { name: 'Margarita', full: 'Margarita Solís', role: 'Jefa de enfermería', gender: 'f', voice: 'es-PA-MargaritaNeural', country: 'Panamá' },
  roberto: { name: 'Roberto', full: 'Roberto Quintero', role: 'Enfermero del turno noche', gender: 'm', voice: 'es-PA-RobertoNeural', country: 'Panamá' },
  mario: { name: 'Mario', full: 'Don Mario Giménez', role: 'Paciente que se escapa a fumar', gender: 'm', voice: 'es-PY-MarioNeural', country: 'Paraguay' },
  karina: { name: 'Karina', full: 'Doña Karina Velázquez', role: 'Paciente que celebra su cumpleaños', gender: 'f', voice: 'es-PR-KarinaNeural', country: 'Puerto Rico' },
  juan: { name: 'Juan', full: 'Juan Arias', role: 'Compañero de habitación', gender: 'm', voice: 'es-CR-JuanNeural', country: 'Costa Rica' },
  paloma: { name: 'Paloma', full: 'Paloma Rivas', role: 'Hija de un paciente de la UCI', gender: 'f', voice: 'es-US-PalomaNeural', country: 'Estados Unidos' },
  zelaya: { name: 'Carlos', full: 'Dr. Carlos Zelaya', role: 'Médico intensivista', gender: 'm', voice: 'es-HN-CarlosNeural', country: 'Honduras' },
  marcelo: { name: 'Marcelo', full: 'Don Marcelo Arce', role: 'Encargado de la morgue', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  sofia: { name: 'Sofía', full: 'Sofía Mamani', role: 'Practicante nueva', gender: 'f', voice: 'es-BO-SofiaNeural', country: 'Bolivia' },
  lorena: { name: 'Lorena', full: 'Doña Lorena Cáceres', role: 'Personal de limpieza', gender: 'f', voice: 'es-SV-LorenaNeural', country: 'El Salvador' },
  maria: { name: 'María', full: 'María Solano', role: 'Estudiante de enfermería', gender: 'f', voice: 'es-CR-MariaNeural', country: 'Costa Rica' },
};

// The 21 circles: sector, floor, who is there (first = the person you talk to).
export const STORY = [
  { id: 'recepcion', sector: 'Entrada y recepción', floor: 1, cast: ['norma'] },
  { id: 'espera', sector: 'Sala de espera', floor: 1, cast: ['anselmo', 'andres'] },
  { id: 'vip', sector: 'Sala de espera', floor: 1, cast: ['pilar', 'vidal'] },
  { id: 'triage', sector: 'Triaje de urgencias', floor: 1, cast: ['gladys', 'wilson'] },
  { id: 'guardia', sector: 'Guardia de emergencias', floor: 1, cast: ['inigo', 'catalina'] },
  { id: 'ambulancias', sector: 'Pasillo de ambulancias', floor: 1, cast: ['yamile', 'kevin', 'manuel'] },
  { id: 'trauma', sector: 'Sala de traumatología', floor: 1, cast: ['ezequiel', 'catalina', 'paola'] },
  { id: 'observacion', sector: 'Observación', floor: 1, cast: ['benigno', 'camila'] },
  { id: 'curaciones', sector: 'Sala de curaciones', floor: 1, cast: ['rufino', 'marta'] },
  { id: 'cafeteria', sector: 'Cafetería', floor: 1, cast: ['ramona', 'federico'] },
  { id: 'facturacion', sector: 'Administración y facturación', floor: 1, cast: ['gonzalo', 'jorge'] },
  { id: 'laboratorio', sector: 'Laboratorio', floor: 2, cast: ['andrea', 'luis'] },
  { id: 'radiologia', sector: 'Radiología', floor: 2, cast: ['karla', 'federico', 'yolanda'] },
  { id: 'quirofano', sector: 'Área quirúrgica', floor: 2, cast: ['tania', 'lorenzo', 'mercedes'] },
  { id: 'descanso', sector: 'Sala de descanso de médicos', floor: 2, cast: ['rodrigo', 'tania'] },
  { id: 'enfermeria', sector: 'Estación de enfermería', floor: 3, cast: ['margarita', 'roberto'] },
  { id: 'internacion', sector: 'Pasillos de internación', floor: 3, cast: ['mario', 'lorena'] },
  { id: 'habitacion', sector: 'Habitación 402', floor: 3, cast: ['karina', 'juan'] },
  { id: 'uci', sector: 'Unidad de Cuidados Intensivos', floor: 3, cast: ['paloma', 'zelaya'] },
  { id: 'morgue', sector: 'Morgue', floor: 0, cast: ['marcelo', 'sofia'] },
  { id: 'limpieza', sector: 'Pasillos de servicio', floor: 0, cast: ['lorena', 'sofia'] },
];
export const STORY_IDS = STORY.map((s) => s.id);
export const castByName = (name) => Object.entries(CAST).find(([, c]) => c.name === name)?.[0] ?? null;

export const LEVEL_IDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Words of situation + dialogue + question for each level (A0 counts the Spanish half).
export const SCENE_WORDS = { A0: [20, 70], A1: [35, 95], A2: [55, 130], B1: [75, 165], B2: [95, 200], C1: [110, 235], C2: [125, 270] };
// What the white circle can show after a choice: the person's face changes.
export const MOODS = ['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious'];
