// Mundo 3D · progress, pure and serialisable: which spots are finished at each
// level, where the student was and whether the arrival was already seen.
// «Por mi cuenta» keeps it in the browser; «Con profesor» saves it per student
// in the teacher's account through /api/live-class (same row shape as the live
// grammar classes: values, results, pos).

export const LEVELS = ['A0', 'A1', 'A2', 'B1'];

export const storageKey = (country) => `spanishcue:mundo-3d:${country}`;
export const spotKey = (region, spot) => `${region}/${spot}`;
export const normaliseLevel = (value) => {
  const level = String(value ?? '').toUpperCase();
  return LEVELS.includes(level) ? level : null;
};

export function createProgress(level = 'A1') {
  return { level: normaliseLevel(level) ?? 'A1', done: {}, at: null, landed: false };
}

const clean = (list) => [...new Set((Array.isArray(list) ? list : []).filter(item => typeof item === 'string' && /^[a-z0-9-]+\/[a-z0-9-]+$/.test(item)))];

export function restore(raw) {
  const base = createProgress();
  if (!raw) return base;
  let data;
  try { data = typeof raw === 'string' ? JSON.parse(raw) : raw; } catch { return base; }
  if (!data || typeof data !== 'object') return base;
  const done = {};
  for (const level of LEVELS) { const list = clean(data.done?.[level]); if (list.length) done[level] = list; }
  const at = data.at && typeof data.at.region === 'string' ? { region: data.at.region, spot: typeof data.at.spot === 'string' ? data.at.spot : null } : null;
  return { level: normaliseLevel(data.level) ?? base.level, done, at, landed: Boolean(data.landed) };
}

export const serialise = (progress) => JSON.stringify(progress);

export function setLevel(progress, level) {
  const next = normaliseLevel(level);
  return next && next !== progress.level ? { ...progress, level: next } : progress;
}

export const doneFor = (progress, level = progress.level) => progress.done[level] ?? [];
export const isDone = (progress, region, spot, level = progress.level) => doneFor(progress, level).includes(spotKey(region, spot));

export function markDone(progress, region, spot) {
  const key = spotKey(region, spot);
  const list = doneFor(progress);
  if (list.includes(key)) return progress;
  return { ...progress, done: { ...progress.done, [progress.level]: [...list, key] } };
}

export function visit(progress, region, spot = null) {
  if (progress.at?.region === region && progress.at?.spot === spot) return progress;
  return { ...progress, at: { region, spot } };
}

export const land = (progress) => progress.landed ? progress : { ...progress, landed: true };

export function resetLevel(progress) {
  const done = { ...progress.done };
  delete done[progress.level];
  return { ...progress, done, at: null };
}

/** Finished spots per region at the current level. */
export function regionCount(progress, regions) {
  const list = doneFor(progress);
  return Object.fromEntries(regions.map(region => [region.id, region.spots.filter(spot => list.includes(spotKey(region.id, spot.id))).length]));
}

/** The next spot to suggest after one is finished: the next unfinished one in the region, else in the next region. */
export function nextSpot(progress, regions, region, spot) {
  const list = doneFor(progress);
  const order = regions.flatMap(r => r.spots.map(s => ({ region: r.id, spot: s.id })));
  const from = Math.max(0, order.findIndex(item => item.region === region && item.spot === spot));
  for (let i = 1; i <= order.length; i++) {
    const item = order[(from + i) % order.length];
    if (!list.includes(spotKey(item.region, item.spot))) return item;
  }
  return null;
}

// ---------------------------------------------------------------- account rows

/** The live-class row for one student: progress in values/results, where they were in pos. */
export function toSaved(progress, regions) {
  const regionIndex = progress.at ? Math.max(0, regions.findIndex(r => r.id === progress.at.region)) : 0;
  const spots = progress.at ? regions[regionIndex]?.spots ?? [] : [];
  const spotIndex = progress.at?.spot ? Math.max(0, spots.findIndex(s => s.id === progress.at.spot)) : 0;
  return {
    values: { kind: 'mundo-3d', level: progress.level, landed: progress.landed, at: progress.at },
    results: { ...progress.done },
    pos: { stage: regionIndex, step: spotIndex },
  };
}

export function fromSaved(saved) {
  if (!saved || typeof saved !== 'object') return createProgress();
  const values = saved.values ?? {};
  return restore({ level: values.level, landed: values.landed, at: values.at, done: saved.results ?? {} });
}
