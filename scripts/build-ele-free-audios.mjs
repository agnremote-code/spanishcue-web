// Builds app/material-ele/audios-gratis.json: the small set of FREE listening
// clips shown on the public «comprensión auditiva» pages of Material ELE.
// Source of truth: app/escucha-3d/content/<game>/<level>.json of the two FREE
// 3D worlds (Estados Unidos, ID 36, and México, ID 210), whose audio lives in
// the public /audio/escucha-3d-libre prefix. Only what the page prints is
// copied, so the Worker never bundles the full listening files.
// Run: node scripts/build-ele-free-audios.mjs   (--check fails when stale)
import { readFileSync, writeFileSync } from 'node:fs';

export const PICKS = [
  ['A1', 'usa', 'florida'], ['A1', 'mexico', 'cdmx'], ['A1', 'usa', 'california'], ['A1', 'mexico', 'jalisco'],
  ['A2', 'usa', 'nueva-york'], ['A2', 'mexico', 'cdmx'], ['A2', 'usa', 'texas'], ['A2', 'mexico', 'oaxaca'],
  ['B1', 'usa', 'hawai'], ['B1', 'mexico', 'oaxaca'], ['B1', 'usa', 'california'], ['B1', 'mexico', 'jalisco'],
];
const WORLD = { usa: { name: 'Estados Unidos', path: '/estados-unidos-a2-b1', lessonId: 36 }, mexico: { name: 'México', path: '/mexico', lessonId: 210 } };
const read = path => JSON.parse(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'));

export function buildFreeAudios() {
  const manifest = read('app/escucha-3d/audio-manifest.json').clips;
  return PICKS.map(([level, game, spot]) => {
    const item = read(`app/escucha-3d/content/${game}/${level.toLowerCase()}.json`).items.find(entry => entry.id === spot);
    const clip = manifest[`${game}/${level.toLowerCase()}-${spot}`];
    if (!item || !clip || !clip.src.startsWith('/audio/escucha-3d-libre/')) throw new Error(`No free clip for ${game} ${level} ${spot}`);
    return {
      id: `${game}-${level.toLowerCase()}-${spot}`, level, world: WORLD[game].name, worldPath: WORLD[game].path, lessonId: WORLD[game].lessonId,
      title: item.title, place: item.place, context: item.context, src: clip.src, seconds: Math.round(clip.seconds),
      speakers: item.speakers.map(speaker => ({ name: speaker.name, country: speaker.country })),
      lines: item.lines.map(line => ({ s: line.s, text: line.text })),
      questions: item.choice.map(question => ({ q: question.q, options: question.options, answer: question.answer })),
      talk: item.open.map(question => question.q),
    };
  });
}

const target = new URL('../app/material-ele/audios-gratis.json', import.meta.url);
const next = `${JSON.stringify(buildFreeAudios(), null, 1)}\n`;
if (process.argv.includes('--check')) {
  if (readFileSync(target, 'utf8') !== next) { console.error('app/material-ele/audios-gratis.json is stale: run node scripts/build-ele-free-audios.mjs'); process.exit(1); }
} else if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  writeFileSync(target, next);
  console.log(`Wrote ${next.length} bytes`);
}
