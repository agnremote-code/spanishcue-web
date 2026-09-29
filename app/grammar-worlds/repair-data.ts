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
      '4 min · Observá el pedido y anticipá qué falta en la canasta.',
      '9 min · Puestos 1 y 2: números y concordancia. Elegí dos ejemplos por puesto.',
      '8 min · Armá la canasta, comprobá y corregí las cantidades.',
      '8 min · Práctica 1, 2, 3 y 5; después, segundo pedido sin modelo.',
      '11 min · Compra en pareja: pedí, escuchá una falta y ajustá.',
      '5 min · Repetí el pedido final sin ayuda y comprobá si se entiende.',
    ],
    optional: 'Los puestos 3–5, la práctica 4 y 6–8 y las misiones largas amplían hacia A2. Elegí solo lo útil para tu grupo; no son requisitos del núcleo A1.',
    criterion: 'El comprador pide cantidades comprensibles, concuerda el nombre y ajusta una cantidad. Aceptá números en cifras al planificar y distintas formulaciones válidas al hablar.',
  },
  coordinate: {
    outcome: 'Ayudar a otra persona a encontrar un objeto y ubicar una acción en el tiempo.',
    route: [
      '4 min · Mirá la mesa y la caja. Anticipá dónde están las llaves.',
      '10 min · Pisos 1–3: lugar, tiempo y muy/mucho. Elegí dos ejemplos por piso.',
      '8 min · Mové las llaves y describí cada cambio con ayuda opcional.',
      '8 min · Práctica 1–4; después, nueva posición sin modelo y una secuencia oral.',
      '10 min · Buscá las llaves en pareja y acordá cuándo usarlas.',
      '5 min · Cambiá de rol y repetí sin leer una oración completa.',
    ],
    optional: 'En A1 priorizá aquí/ahí, hoy/mañana y muy/mucho; usá las posiciones de la escena como frases apoyadas. Pisos 4–5, práctica 5–8 y misiones largas: extensión A2, no requisitos para cerrar.',
    criterion: 'La otra persona identifica el lugar y el momento. Aceptá sobre/encima de, bajo/debajo de y en/dentro de la caja cuando describan la escena. En A2 agregá modo o una causa.',
  },
} as const;
export const closings = {
  quantity: {
    title: 'Un pedido que sí podemos preparar',
    instruction: 'En pareja: el comprador pide tres productos con cantidades. El vendedor elige uno y dice que tiene menos. El comprador cambia el pedido y lo confirma; después cambian de rol.',
    cue: 'Productos posibles: botellas de agua, manzanas y panes. El vendedor anota solo números; al final comprueba si puede preparar ese pedido.',
    model: '—Quiero tres botellas, cuatro manzanas y dos panes. —Solo tengo dos botellas. —Entonces, dos botellas. ¿Tenés cuatro manzanas?',
    criterion: 'Observación docente: se entienden las tres cantidades, hay concordancia y el comprador repara una falta. Ayudá con una palabra si hace falta; no hace falta repetir el modelo.',
  },
  coordinate: {
    title: 'Encontrá las llaves y acordá cuándo',
    instruction: 'En pareja: quien describe elige una posición de las llaves; la otra persona mira hacia otro lado. Describí dónde están y decí si las necesitás hoy o mañana. La otra persona pregunta, confirma el lugar y el momento; después cambian de rol.',
    cue: 'Volvé a la escena para elegir una posición. Después señalá el lugar real o dibujalo sin mostrarlo. En A2 agregá cómo usar las llaves o una razón.',
    model: '—Las llaves están dentro de la caja. Las necesito mañana. —¿En la caja, para mañana? —Sí. / —¿Dónde están? —Ahí, encima de la mesa.',
    criterion: 'Observación docente: la otra persona localiza el objeto y confirma cuándo se necesita. Aceptá equivalentes como sobre la mesa o en la caja; evaluá el mensaje, no una frase única.',
  },
} as const;
