// Shared by every 3D world: people are solid, and crashing into one of them
// makes that person turn, glare and yell at you (lines in voces.json, spoken
// by a voice from the country whose Spanish they use).

export const PERSON_RADIUS = 0.62; // the mascot (0.35) plus a body (0.27)

// Pushes the player out of anyone they overlap. `free(x, z)` says whether a
// spot is clear of walls and furniture, so nobody pushes you into a wall:
// when straight out is a wall, you slide round them to a free side.
// Returns the corrected position and the index of the first person touched.
export function pushOut(x, z, people, free = () => true, radius = PERSON_RADIUS) {
  let hit = -1;
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    const dx = x - p.x, dz = z - p.z;
    const d = Math.hypot(dx, dz);
    if (d >= (p.radius ?? radius)) continue;
    if (hit < 0) hit = i;
    const r = p.radius ?? radius;
    const nx = d > 1e-4 ? dx / d : 1, nz = d > 1e-4 ? dz / d : 0;
    const ox = p.x + nx * r, oz = p.z + nz * r;
    if (free(ox, oz)) { x = ox; z = oz; continue; }
    // Against a wall: slide round the person to the nearest free side
    // instead of staying inside their body.
    const from = Math.atan2(nx, nz);
    for (let k = 1; k <= 12; k++) {
      const a = from + Math.ceil(k / 2) * (Math.PI / 6) * (k % 2 ? 1 : -1);
      const sx = p.x + Math.sin(a) * r, sz = p.z + Math.cos(a) * r;
      if (free(sx, sz)) { x = sx; z = sz; break; }
    }
  }
  return { x, z, hit };
}

// Who gets to yell: one person at a time, and not the same one twice in a row
// within a few seconds.
export function createBumpClock(each = 4, gap = 1.4) {
  const last = new Map();
  let lastAny = -Infinity;
  return (key, t) => {
    if (t - lastAny < gap || t - (last.get(key) ?? -Infinity) < each) return false;
    last.set(key, t); lastAny = t;
    return true;
  };
}

// A stable line for a person: same voice every time you crash into them.
export function bumpLine(lines, body, seed) {
  const pool = lines.filter(l => l.kind === 'bump' && (!body || l.body === body));
  const list = pool.length ? pool : lines.filter(l => l.kind === 'bump');
  return list[Math.abs(Math.floor(seed)) % list.length];
}

export const voiceSrc = (id) => `/audio/escucha-3d/voces-${id}.mp3`;
