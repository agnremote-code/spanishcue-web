// Charlas 3D · a landmark's conversation circle, as plain data (no three.js,
// no React), so scene and layout modules can describe their landmarks.

export type CharlaPlace = { id: string; x: number; z: number; y?: number; r?: number; title: string; intro?: string; themes: string[]; when?: () => boolean };

/** A landmark's circle moved onto the nearest free ground (up to 10 m away). */
export function onFreeGround(pl: CharlaPlace, free: (x: number, z: number) => boolean): CharlaPlace {
  if (free(pl.x, pl.z)) return pl;
  for (let d = 1; d <= 10; d++) for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2, x = pl.x + Math.cos(a) * d, z = pl.z + Math.sin(a) * d;
    if (free(x, z)) return { ...pl, x, z };
  }
  return pl;
}
