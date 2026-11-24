import {withoutApprovedAdditions, withoutApprovedLessons} from './catalog-additions.mjs';
import {readFileSync} from 'node:fs';

const repairedCopies = {
  45: ['Números, cantidades y comparación en un mercado nocturno con una compra interactiva', 'Números, cantidades aproximadas, totalidad y comparación en un mercado nocturno 3D'],
  47: ['Lugar, tiempo, cantidad, modo y conexiones con una escena que podés mover', 'Lugar, tiempo, cantidad, modo y conexiones dentro de una torre 3D'],
};

/** Keep historical Batch 1 hashes authoritative, allowing only Wave 1's new FREE audio prefix
 * and the exact two target catalog copy changes below.
 * Every other byte of the access policy (including all auth/entitlement logic) still has to
 * match its original hash. The new prefix and all old protections also have behavior tests.
 */
/** Owner-approved relabel (2026-11-24): Spanish Mouth Lab (ID 38) has one A1 bank, so the catalog
 * shows A1 instead of the old A1–C1 range. The historical hash sees the old range. */
const mouthLabRange = 'levels:["A1","A2","B1","B2","C1"],displayLevel:"A1–C1",';
function withMouthLabRange(lesson) {
  if (lesson.id !== 38 || lesson.levels) return lesson;
  const {id, level, ...rest} = lesson;
  return {id, level, levels:['A1','A2','B1','B2','C1'], displayLevel:'A1–C1', ...rest};
}

export function batch1PreservedBytes(path) {
  const bytes = withoutApprovedAdditions(path, readFileSync(path));
  if (path === 'app/lesson-catalog.ts') return Buffer.from(bytes.toString('utf8').split('\n').map(line => {
    if (line.trimStart().startsWith('{id:38,level:"A1",category:')) line = line.replace('{id:38,level:"A1",category:', `{id:38,level:"A1",${mouthLabRange}category:`);
    for (const [id, copy] of Object.entries(repairedCopies)) {
      if (line.trimStart().startsWith(`{id:${id},`)) return line.replace(`subtitle:"${copy[0]}",duration:"≈ 45 min + banco opcional"`, `subtitle:"${copy[1]}",duration:"70–85 min"`);
    }
    return line;
  }).join('\n'));
  if (path !== 'app/access-policy.ts') return bytes;
  return Buffer.from(bytes.toString('utf8')
    .replace('/** Audio collections attached to the existing FREE listening and phonetics samples. */', '/** Audio collections attached to the two public listening samples. */')
    .replace("new Set(['hotel','latam','phonetics'])", "new Set(['hotel','latam'])"));
}

/** Compare the original full ledger while allowing only the two reviewed Wave 1
 * display-copy repairs. IDs, access, routes, content and every other record still
 * participate unchanged in the historical hash. Unexpected copy also fails it.
 */
export function batch1PreservedLedger(lessons) {
  return withoutApprovedLessons(lessons).map(withMouthLabRange).map(lesson => {
    const copy = repairedCopies[lesson.id];
    if (!copy || lesson.subtitle !== copy[0] || lesson.duration !== '≈ 45 min + banco opcional') return lesson;
    return {...lesson, subtitle:copy[1], duration:'70–85 min'};
  });
}
