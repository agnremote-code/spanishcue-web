// SERVER ONLY: the free reception demo receives this allowlisted payload and
// never imports the level files. Only the reception scene leaves the server;
// the other twenty scenes, the patients and the listenings stay PRO.
import { CONTENT } from './levels.mjs';
import { CAST } from './story.mjs';

export const DEMO_SCENE = 'recepcion';
// Entrance, forecourt and reception desk on the ground floor (sector recepcion: x -12..12, z 12..32).
export const DEMO_FENCE = { minX: -11.4, maxX: 11.4, minZ: 12.6, maxZ: 45 };

const speaker = (id) => (id.startsWith('*') ? id.slice(1) : CAST[id]?.name ?? id);

export function hospitalDemoContent() {
  const main = CAST.norma;
  const scenes = {};
  for (const [level, scenesOfLevel] of Object.entries(CONTENT)) {
    const text = scenesOfLevel[DEMO_SCENE];
    scenes[level] = { ...text, dialogue: text.dialogue.map(([who, line]) => ({ who: speaker(who), line })) };
  }
  return { scene: DEMO_SCENE, name: main.full, role: main.role, scenes };
}
