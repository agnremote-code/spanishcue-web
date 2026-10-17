// Writes the "Busca y describe" announcements of La feria de Villaluz to
// app/escucha-3d/content/feria/<level>.busca.json, the input of the audio
// generator (scripts/generate-escucha-3d-audio.py). Run after editing BUSCA:
//   node scripts/export-feria-announcements.mjs
// tests/la-feria-de-villaluz.test.mjs fails when the file is out of date.
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { CONTENT } from '../app/la-feria-de-villaluz/levels.mjs';

export function announcements(level) {
  const sets = CONTENT[level]?.BUSCA ?? [];
  return { game: 'feria', level, announcements: sets.map(set => ({ id: set.id, speaker: set.speaker, voice: set.voice, text: set.text })) };
}
export const announcementPath = level => `app/escucha-3d/content/feria/${level.toLowerCase()}.busca.json`;
export const announcementJson = level => `${JSON.stringify(announcements(level), null, 2)}\n`;

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  for (const level of Object.keys(CONTENT)) { writeFileSync(announcementPath(level), announcementJson(level)); console.log(announcementPath(level)); }
}
