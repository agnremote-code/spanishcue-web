export type RepairKind = 'quantity' | 'coordinate';
export const orders = [
  { bottles: 3, apples: 4 },
  { bottles: 2, apples: 3 },
] as const;
// SVG coordinates refer to the table surface at y=95 and the box interior
// x=405..540, y=60..155. Caption and marker always use this same record.
export const positions = [
  { id: 'on', x: 190, y: 91, phrase: 'encima de la mesa', alternatives: ['sobre la mesa'] },
  { id: 'under', x: 190, y: 173, phrase: 'debajo de la mesa', alternatives: ['bajo la mesa'] },
  { id: 'inside', x: 470, y: 115, phrase: 'dentro de la caja', alternatives: ['en la caja'] },
] as const;
export const repairGuides = {
  quantity: {
    outcome: 'Hacer un pedido breve y ajustarlo cuando falta un producto.',
    route: [
      '4 min · Observa el pedido y anticipa qué falta en la canasta.',
      '9 min · Puestos 1 y 2: números y concordancia. Elige dos ejemplos por puesto.',
      '8 min · Arma la canasta, comprueba y corrige las cantidades.',
      '8 min · Práctica 1, 2, 3 y 5; después, segundo pedido sin modelo.',
      '11 min · Compra en pareja: pide, escucha una falta y ajusta.',
      '5 min · Repite el pedido final sin ayuda y comprueba si se entiende.',
    ],
    optional: 'Los puestos 3–5, la práctica 4 y 6–8 y las misiones largas amplían hacia A2. Elige solo lo útil para tu grupo; no son requisitos del núcleo A1.',
    criterion: 'El comprador pide cantidades comprensibles, concuerda el nombre y ajusta una cantidad. Acepta números en cifras al planificar y distintas formulaciones válidas al hablar.',
  },
  coordinate: {
    outcome: 'Ayudar a otra persona a encontrar un objeto y ubicar una acción en el tiempo.',
    route: [
      '4 min · Mira la mesa y la caja. Anticipa dónde están las llaves.',
      '10 min · Pisos 1–3: lugar, tiempo y muy/mucho. Elige dos ejemplos por piso.',
      '8 min · Mueve las llaves y describe cada cambio con ayuda opcional.',
      '8 min · Práctica 1–4; después, nueva posición sin modelo y una secuencia oral.',
      '10 min · Busca las llaves en pareja y acuerda cuándo usarlas.',
      '5 min · Cambia de rol y repite sin leer una oración completa.',
    ],
    optional: 'En A1 prioriza aquí/ahí, hoy/mañana y muy/mucho; usa las posiciones de la escena como frases apoyadas. Pisos 4–5, práctica 5–8 y misiones largas: extensión A2, no requisitos para cerrar.',
    criterion: 'La otra persona identifica el lugar y el momento. Acepta sobre/encima de, bajo/debajo de y en/dentro de la caja cuando describan la escena. En A2 agrega modo o una causa.',
  },
} as const;
export const closings = {
  quantity: {
    title: 'Un pedido que sí podemos preparar',
    instruction: 'En pareja: el comprador pide tres productos con cantidades. El vendedor elige uno y dice que tiene menos. El comprador cambia el pedido y lo confirma; después cambian de rol.',
    cue: 'Productos posibles: botellas de agua, manzanas y panes. El vendedor anota solo números; al final comprueba si puede preparar ese pedido.',
    model: '—Quiero tres botellas, cuatro manzanas y dos panes. —Solo tengo dos botellas. —Entonces, dos botellas. ¿Tienes cuatro manzanas?',
    criterion: 'Observación docente: se entienden las tres cantidades, hay concordancia y el comprador repara una falta. Ayuda con una palabra si hace falta; no hace falta repetir el modelo.',
  },
  coordinate: {
    title: 'Encuentra las llaves y acuerda cuándo',
    instruction: 'En pareja: quien describe elige una posición de las llaves; la otra persona mira hacia otro lado. Describe dónde están y di si las necesitas hoy o mañana. La otra persona pregunta, confirma el lugar y el momento; después cambian de rol.',
    cue: 'Vuelve a la escena para elegir una posición. Después señala el lugar real o dibújalo sin mostrarlo. En A2 agrega cómo usar las llaves o una razón.',
    model: '—Las llaves están dentro de la caja. Las necesito mañana. —¿En la caja, para mañana? —Sí. / —¿Dónde están? —Ahí, encima de la mesa.',
    criterion: 'Observación docente: la otra persona localiza el objeto y confirma cuándo se necesita. Acepta equivalentes como sobre la mesa o en la caja; evalúa el mensaje, no una frase única.',
  },
} as const;
