// Noche Abierta · ambient urban events, as data.
//
// Things that can happen on any corner while the learner walks: a thief, a
// chase, a fight, someone hurt on the pavement, a car on fire, a helicopter,
// a protest, a crash, a drunk. The renderer (events3d.ts) builds and moves
// them; this file says which districts favour which event, how often they
// happen, how long they last, and what the people shout, by level band.
//
// Pure data and pure functions: no three.js, no DOM, so the tests can read it.

import { CITY_BOUNDS, CITY_PARKED, CITY_PROPS, DISTRICT_ZONES, GROUNDS, ROADS, WALKER_ROUTES, districtAt, pathLength, pointOnPath } from "./city.mjs";

export const EVENT_KINDS = ["ladron", "persecucion", "pelea", "caido", "incendio", "helicoptero", "protesta", "choque", "borracho"];

// How the events are dealt out: never closer than `near` nor farther than
// `far` from the learner, at most `maxActive` at once, one more every
// `everyMin`–`everyMax` seconds of walking, each `minLength`–`maxLength` s.
export const EVENT_TIMING = { near: 40, far: 110, hide: 110, maxActive: 2, everyMin: 25, everyMax: 50, minLength: 20, maxLength: 60 };

// Which events each district favours (weights). Everything can happen
// anywhere, but the Barrio Viejo has more thieves and the Barrio Alto more
// helicopters.
export const EVENT_FLAVOUR = {
  centro: { ladron: 3, persecucion: 2, pelea: 1, caido: 2, incendio: 1, helicoptero: 1, protesta: 2, choque: 3, borracho: 2 },
  viejo: { ladron: 4, persecucion: 3, pelea: 3, caido: 2, incendio: 2, helicoptero: 1, protesta: 0, choque: 1, borracho: 4 },
  alto: { ladron: 2, persecucion: 2, pelea: 1, caido: 1, incendio: 1, helicoptero: 4, protesta: 3, choque: 2, borracho: 1 },
  clinica: { ladron: 1, persecucion: 3, pelea: 1, caido: 4, incendio: 1, helicoptero: 2, protesta: 1, choque: 3, borracho: 1 },
  mercado: { ladron: 4, persecucion: 2, pelea: 3, caido: 2, incendio: 2, helicoptero: 1, protesta: 1, choque: 1, borracho: 3 },
  costa: { ladron: 2, persecucion: 1, pelea: 2, caido: 2, incendio: 1, helicoptero: 2, protesta: 1, choque: 2, borracho: 3 },
  estacion: { ladron: 4, persecucion: 3, pelea: 2, caido: 2, incendio: 1, helicoptero: 1, protesta: 2, choque: 2, borracho: 3 },
  sur: { ladron: 2, persecucion: 2, pelea: 3, caido: 2, incendio: 2, helicoptero: 2, protesta: 4, choque: 2, borracho: 2 },
  galpones: { ladron: 2, persecucion: 2, pelea: 4, caido: 2, incendio: 3, helicoptero: 2, protesta: 1, choque: 1, borracho: 3 },
};

// What people shout, by level band: A (A1–A2), B (B1–B2), C (C1–C2).
// Neutral Spanish with tú; invented causes, nobody real.
export const EVENT_SHOUTS = {
  ladron: {
    A: ["¡Ladrón! ¡Mi bolso!", "¡Para! ¡Para!", "¡Ayuda, por favor!"],
    B: ["¡Que alguien lo pare! ¡Me robó el bolso!", "¡Policía! ¡Ladrón!", "¡Lleva mi bolso, el negro!"],
    C: ["¡Deténganlo, por favor! ¡Se lleva todo lo que tengo!", "¡Que nadie lo deje pasar, lleva mi bolso!", "¡Mis documentos van ahí dentro, por favor!"],
  },
  persecucion: {
    A: ["¡Alto! ¡Policía!", "¡Para!", "¡No corras!"],
    B: ["¡Alto ahí! ¡Policía!", "¡No corras más, ya te vimos!", "¡Al suelo!"],
    C: ["¡Deténgase, es la policía!", "¡Quieto, las manos donde pueda verlas!", "¡No lo hagas más difícil, ya está rodeado!"],
  },
  pelea: {
    A: ["¡Ya basta!", "¡Paren!", "¡No, no!"],
    B: ["¡Ya basta, que se van a lastimar!", "¡Llamen a alguien!", "¡Sepárenlos!"],
    C: ["¡Basta ya, esto no tiene ningún sentido!", "¡Sepárenlos antes de que pase algo grave!", "¡Que alguien llame a la policía, por favor!"],
  },
  caido: {
    A: ["¡Una ambulancia, por favor!", "¡Ayuda!", "¡No se mueve!"],
    B: ["¡Una ambulancia, por favor! ¡No se mueve!", "¿Alguien es médico?", "¡Rápido, está sangrando!"],
    C: ["¡Llamen a una ambulancia, está sangrando mucho!", "¿Hay algún médico por aquí? ¡Rápido!", "¡No lo muevan, puede tener algo roto!"],
  },
  incendio: {
    A: ["¡Fuego!", "¡Cuidado!", "¡Atrás!"],
    B: ["¡Fuego! ¡Aléjate del coche!", "¡Llama a los bomberos!", "¡Atrás, puede explotar!"],
    C: ["¡Atrás, que el tanque puede explotar!", "¿Ya llamaron a los bomberos?", "¡Que nadie se acerque, eso no se apaga con agua!"],
  },
  helicoptero: { A: [], B: [], C: [] },
  protesta: {
    A: ["¡Luz para el barrio!", "¡Queremos luz!", "¡Luz, luz, luz!"],
    B: ["¡Sin luz no hay barrio!", "¡Luz para todos, ya!", "¡Las calles a oscuras, no!"],
    C: ["¡El barrio no se apaga!", "¡Alumbrado digno para todos los barrios!", "¡Nos dejan a oscuras y nos piden paciencia!"],
  },
  choque: {
    A: ["¡Mira mi coche!", "¡Fue tu culpa!", "¡No, tu culpa!"],
    B: ["¡Mira lo que hiciste con mi coche!", "¡Frenaste de golpe!", "¡Tú venías pegado!"],
    C: ["¡Ibas mirando el teléfono, te vi perfectamente!", "¡Yo frené a tiempo, tú venías pegado a mí!", "¡Llamemos al seguro y se acabó la discusión!"],
  },
  borracho: {
    A: ["¡Buenas noches a todos!", "¡Hola, amigo!", "¡Qué noche!"],
    B: ["¡La noche es joven, amigos!", "¿Quién me invita a otra?", "¡Yo estoy perfectamente bien!"],
    C: ["¡Esta ciudad no duerme, y yo tampoco!", "¿Alguien sabe dónde quedó mi casa?", "¡No estoy borracho, estoy contento, que es distinto!"],
  },
  policia: {
    A: ["¡Atrás, por favor!", "¡Policía!", "¡Nada que ver aquí!"],
    B: ["Circulen, no hay nada que ver.", "¡Atrás, por favor!", "Dejen pasar, estamos trabajando."],
    C: ["Despejen la zona, por favor, estamos trabajando.", "Nadie se acerque hasta que terminemos.", "Si vieron algo, quédense; si no, sigan su camino."],
  },
};

export function bandOf(level) {
  return level === "A1" || level === "A2" ? "A" : level === "C1" || level === "C2" ? "C" : "B";
}

// A line for an event, by band, rotating every few seconds.
export function shoutLine(kind, level, time) {
  const lines = EVENT_SHOUTS[kind]?.[bandOf(level)] ?? [];
  if (!lines.length) return null;
  return lines[Math.floor(time / 4.5) % lines.length];
}

// The event the district favours now, among those not already happening.
export function pickEventKind(district, active, rand) {
  const weights = EVENT_FLAVOUR[district] ?? EVENT_FLAVOUR.centro;
  const choices = EVENT_KINDS.filter((kind) => !active.includes(kind) && (weights[kind] ?? 1) > 0);
  const total = choices.reduce((sum, kind) => sum + (weights[kind] ?? 1), 0);
  let r = rand() * total;
  for (const kind of choices) {
    r -= weights[kind] ?? 1;
    if (r <= 0) return kind;
  }
  return choices[choices.length - 1] ?? null;
}

// ------------------------------------------------------------ places

const onRoad = (x, z, margin = 0) => ROADS.some((r) => x > r.x0 - margin && x < r.x1 + margin && z > r.z0 - margin && z < r.z1 + margin);
const inBounds = (x, z, margin = 4) => x > CITY_BOUNDS.minX + margin && x < CITY_BOUNDS.maxX - margin && z > CITY_BOUNDS.minZ + margin && z < CITY_BOUNDS.maxZ - margin;

// The sidewalk stretches the thief, the chase, the drunk and the protest
// use: the walker routes, which already keep to free ground. A stretch is a
// straight run of at most `length` metres starting near (x, z).
export function sidewalkStretch(x, z, length, rand) {
  const candidates = [];
  for (const route of WALKER_ROUTES) {
    for (let i = 1; i < route.points.length; i++) {
      const [ax, az] = route.points[i - 1];
      const [bx, bz] = route.points[i];
      const segment = Math.hypot(bx - ax, bz - az);
      if (segment < 12) continue;
      // Distance from (x, z) to the segment.
      const t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / (segment * segment)));
      const px = ax + (bx - ax) * t, pz = az + (bz - az) * t;
      const d = Math.hypot(px - x, pz - z);
      if (d < 20) candidates.push({ ax, az, bx, bz, segment, t, d });
    }
  }
  if (!candidates.length) return null;
  candidates.sort((a, b) => a.d - b.d);
  const c = candidates[Math.min(candidates.length - 1, Math.floor(rand() * Math.min(3, candidates.length)))];
  const dir = rand() < 0.5 ? 1 : -1;
  const ux = (c.bx - c.ax) / c.segment, uz = (c.bz - c.az) / c.segment;
  const start = c.t * c.segment;
  const room = dir > 0 ? c.segment - start : start;
  const run = Math.min(length, room);
  if (run < 10) return null;
  const from = { x: c.ax + ux * start, z: c.az + uz * start };
  const to = { x: from.x + ux * dir * run, z: from.z + uz * dir * run };
  return { from, to, length: run, heading: Math.atan2(to.x - from.x, to.z - from.z) };
}

// An open square or park near (x, z) for a fight: a point inside a paved
// ground, away from its edges.
export function squareSpot(x, z, rand) {
  const open = GROUNDS.filter((g) => (g.kind === "stone" || g.kind === "park" || g.kind === "gravel") && g.x1 - g.x0 > 10 && g.z1 - g.z0 > 10);
  const near = open.map((g) => ({ g, d: Math.hypot(Math.max(g.x0 - x, 0, x - g.x1), Math.max(g.z0 - z, 0, z - g.z1)) })).filter((e) => e.d < 60).sort((a, b) => a.d - b.d);
  if (!near.length) return null;
  const g = near[Math.floor(rand() * Math.min(2, near.length))].g;
  return { x: g.x0 + 4 + rand() * (g.x1 - g.x0 - 8), z: g.z0 + 4 + rand() * (g.z1 - g.z0 - 8), district: districtAt(x, z) };
}

// A parked car or the dumpster near (x, z) that can catch fire.
export function burnable(x, z, rand) {
  const cars = CITY_PARKED.map((car) => ({ kind: "car", x: car.x, z: car.z, heading: car.heading, color: car.color, car: car.kind, d: Math.hypot(car.x - x, car.z - z) }));
  const bins = CITY_PROPS.filter((p) => p.kind === "dumpster").map((p) => ({ kind: "dumpster", x: (p.x0 + p.x1) / 2, z: (p.z0 + p.z1) / 2, heading: 0, color: "#2f5a3a", car: null, d: Math.hypot((p.x0 + p.x1) / 2 - x, (p.z0 + p.z1) / 2 - z) }));
  const near = [...cars, ...bins].filter((e) => e.d < 50).sort((a, b) => a.d - b.d);
  if (!near.length) return null;
  return near[Math.floor(rand() * Math.min(2, near.length))];
}

// Where two cars can stop nose to tail: the kerb lane of a new street near
// (x, z), where the moving traffic does not run, clear of the parked cars.
export function crashSpot(x, z, rand) {
  const streets = ROADS.filter((r) => r.id !== "avenida" && r.id !== "transversal");
  const tries = [];
  for (const road of streets) {
    const mid = road.axis === "x" ? (road.z0 + road.z1) / 2 : (road.x0 + road.x1) / 2;
    for (const side of [-1, 1]) {
      const lane = mid + side * 2.4;
      const along = road.axis === "x" ? x : z;
      const lo = (road.axis === "x" ? road.x0 : road.z0) + 12, hi = (road.axis === "x" ? road.x1 : road.z1) - 12;
      if (along < lo || along > hi) continue;
      const a = Math.max(lo, Math.min(hi, along + (rand() - 0.5) * 30));
      const px = road.axis === "x" ? a : lane, pz = road.axis === "x" ? lane : a;
      // Not on a crossing, not on top of a parked car.
      const crossing = streets.concat(ROADS).some((o) => o.axis !== road.axis && (road.axis === "x" ? px > o.x0 - 8 && px < o.x1 + 8 : pz > o.z0 - 8 && pz < o.z1 + 8));
      if (crossing) continue;
      const parked = CITY_PARKED.some((car) => Math.hypot(car.x - px, car.z - pz) < 9);
      if (parked) continue;
      const dir = rand() < 0.5 ? 1 : -1;
      const heading = road.axis === "x" ? (dir > 0 ? 0 : Math.PI) : (dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      tries.push({ x: px, z: pz, heading, axis: road.axis, lane, side, d: Math.hypot(px - x, pz - z) });
    }
  }
  tries.sort((a, b) => a.d - b.d);
  return tries[0] ?? null;
}

// A point on the pavement near (x, z) for someone fallen: on a sidewalk
// stretch, a little to the side of the walkers' line.
export function pavementSpot(x, z, rand) {
  const stretch = sidewalkStretch(x, z, 20, rand);
  if (!stretch) return null;
  const t = 0.3 + rand() * 0.4;
  const px = stretch.from.x + (stretch.to.x - stretch.from.x) * t;
  const pz = stretch.from.z + (stretch.to.z - stretch.from.z) * t;
  // Away from the road, so the crowd does not stand on it.
  const side = { x: Math.cos(stretch.heading), z: -Math.sin(stretch.heading) };
  const away = onRoad(px + side.x * 1.2, pz + side.z * 1.2, 0.5) ? -1 : 1;
  return { x: px, z: pz, heading: stretch.heading, side: { x: side.x * away, z: side.z * away } };
}

// A point `distance` metres from the learner, in a random direction, that is
// inside the city and not on a road; null after `tries` misses.
export function pointNear(player, near, far, rand, free, tries = 24) {
  for (let i = 0; i < tries; i++) {
    const a = rand() * Math.PI * 2;
    const d = near + rand() * (far - near);
    const x = player.x + Math.sin(a) * d, z = player.z + Math.cos(a) * d;
    if (!inBounds(x, z)) continue;
    if (onRoad(x, z)) continue;
    if (free && !free(x, z)) continue;
    return { x, z };
  }
  return null;
}

// Where the helicopter circles: over the district the point is in.
export function districtCentre(x, z) {
  const zone = DISTRICT_ZONES.find((d) => x >= d.x0 && x < d.x1 && z >= d.z0 && z < d.z1) ?? DISTRICT_ZONES[0];
  return { x: (zone.x0 + zone.x1) / 2, z: (zone.z0 + zone.z1) / 2, id: zone.id };
}

export { pathLength, pointOnPath };
