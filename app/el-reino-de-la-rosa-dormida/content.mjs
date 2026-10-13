/** Original Valdoria campaign: characters, items, spells and the eight chapters. Conversations live in conversations.mjs. */
export const LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const NPCS = [
  { id: 'nox', name: 'Nox', role: 'Cuervo del camino', color: '#bcb1ed' },
  { id: 'ines', name: 'Inés', role: 'Posadera de Valdoria', color: '#edbd81' },
  { id: 'bruno', name: 'Bruno', role: 'Herrero y guardián del molino', color: '#e39a62' },
  { id: 'liora', name: 'Liora', role: 'Hada del bosque', color: '#99e9c9' },
  { id: 'aldren', name: 'Sir Aldren', role: 'Guardián del puente', color: '#afc5e2' },
  { id: 'celina', name: 'Celina', role: 'Jardinera de las rosas', color: '#ed91b3' },
  { id: 'baltasar', name: 'Baltasar', role: 'Mago de la biblioteca', color: '#af9ae7' },
  { id: 'teobaldo', name: 'Teobaldo', role: 'Cronista de los recuerdos', color: '#b8dbe3' },
  { id: 'brum', name: 'Brum', role: 'Guardián de fuego', color: '#efa675' },
  { id: 'tejedora', name: 'La Tejedora de Espinas', role: 'Guardiana del sueño', color: '#d49bed' },
  { id: 'elara', name: 'Elara', role: 'Princesa de Valdoria', color: '#efc991' },
];
export const ITEMS = [
  { id: 'key', name: 'Llave del castillo', icon: '⚿', description: 'Bruno la entrega cuando reparas el molino. Abre el portón tras liberar el jardín.' },
  { id: 'scroll', name: 'Pergamino antiguo', icon: '▤', description: 'Conserva las palabras de Elara: «Un refugio debe tener una salida». Es la prueba que necesita Baltasar.' },
  { id: 'rose', name: 'Rosa encantada', icon: '✿', description: 'Una rosa que crece sin espinas. Floralis la despierta; representa la vida en el ritual de la torre.' },
  { id: 'crystal', name: 'Cristal del amanecer', icon: '◈', description: 'Brum custodia la última luz del reino. Canaliza Aurora cuando el guardián confía en ti.' },
];
export const SPELLS = [
  { id: 'lumaria', name: 'Lumaria', key: '1', color: '#efdea0', description: 'Revela la luz del bosque y enciende la primera parte del ritual.' },
  { id: 'ventaria', name: 'Ventaria', key: '2', color: '#a6dff4', description: 'Dirige una corriente de aire y devuelve el movimiento al molino.' },
  { id: 'floralis', name: 'Floralis', key: '3', color: '#e997bc', description: 'Transforma las espinas en flores y devuelve la vida al jardín.' },
  { id: 'aurora', name: 'Aurora', key: '4', color: '#b9abff', description: 'Forma un escudo ante el fuego de Brum y libera la luz del cristal.' },
];
export const QUESTS = [
  { id: 'q1', number: 1, title: 'El viajero desconocido', description: 'Conoce a Nox y descubre por qué Valdoria duerme.', reward: 'El camino de la aldea' },
  { id: 'q2', number: 2, title: 'Los secretos de la aldea', description: 'Escucha a Inés y Bruno, repara el molino y recoge la llave.', reward: 'Ventaria y la llave del castillo' },
  { id: 'q3', number: 3, title: 'El hada del bosque', description: 'Ayuda a Liora a devolver la luz al bosque.', reward: 'Lumaria y el camino iluminado' },
  { id: 'q4', number: 4, title: 'El puente prohibido', description: 'Gana la confianza de Sir Aldren para cruzar el puente.', reward: 'Acceso a los jardines' },
  { id: 'q5', number: 5, title: 'El laberinto de rosas', description: 'Conversa con Celina, transforma las espinas y recoge la rosa encantada.', reward: 'Floralis y la entrada al castillo' },
  { id: 'q6', number: 6, title: 'Los secretos del castillo', description: 'Encuentra el pergamino y conversa con Baltasar y Teobaldo.', reward: 'Aurora y la verdad del hechizo' },
  { id: 'q7', number: 7, title: 'El guardián de fuego', description: 'Protégete con Aurora, escucha a Brum y recupera el cristal.', reward: 'La confianza del dragón' },
  { id: 'q8', number: 8, title: 'El despertar de Elara', description: 'Conversa con la Tejedora, completa el ritual y despierta a Elara.', reward: 'Un nuevo amanecer para Valdoria' },
];
