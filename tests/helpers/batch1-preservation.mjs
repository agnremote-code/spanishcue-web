import {withoutApprovedAdditions, withoutApprovedLessons} from './catalog-additions.mjs';
import {readFileSync} from 'node:fs';

const repairedCopies = {
  45: ['Números, cantidades y comparación en un mercado nocturno con una compra interactiva', 'Números, cantidades aproximadas, totalidad y comparación en un mercado nocturno 3D'],
  47: ['Lugar, tiempo, cantidad, modo y conexiones con una escena que podés mover', 'Lugar, tiempo, cantidad, modo y conexiones dentro de una torre 3D'],
};

/** Reviewed 2026-09-30 copy repair: «Uno o el otro» (137) replaced its loose "cambios de regla"
 * stage with a dilemma of two accumulating conditions. Only these two display strings may differ.
 */
const repairedDilemmaCopy = {
  137: [
    ['subtitle:"Un banco reutilizable de elecciones que se convierten en razones, cambios de regla, comparaciones, rankings y una vida ideal que hay que defender"', 'subtitle:"Un banco reutilizable de elecciones que se convierten en razones, dilemas con dos condiciones que se suman, comparaciones, rankings y una vida ideal que hay que defender"'],
    ['explanation:"Banco de 48 elecciones filtrables, con seis rondas de dificultad creciente: decisión instantánea, justificación, doble cambio, descarte, ranking y conversación libre sobre una vida ideal."', 'explanation:"Banco de 48 elecciones filtrables, con seis rondas de dificultad creciente: decisión instantánea, justificación, dilema con dos condiciones acumuladas, descarte, ranking y conversación libre sobre una vida ideal."'],
  ],
};
const fieldValue = (entry) => entry.slice(entry.indexOf(':"') + 2, -1);

/** Keep historical Batch 1 hashes authoritative, allowing only Wave 1's new FREE audio prefix
 * and the exact two target catalog copy changes below.
 * Every other byte of the access policy (including all auth/entitlement logic) still has to
 * match its original hash. The new prefix and all old protections also have behavior tests.
 */
export function batch1PreservedBytes(path) {
  const bytes = withoutApprovedAdditions(path, readFileSync(path));
  if (path === 'app/lesson-catalog.ts') return Buffer.from(bytes.toString('utf8').split('\n').map(line => {
    for (const [id, pairs] of Object.entries(repairedDilemmaCopy)) {
      if (line.trimStart().startsWith(`{id:${id},`)) return pairs.reduce((value, [original, repaired]) => value.replace(repaired, original), line);
    }
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
  return withoutApprovedLessons(lessons).map(lesson => {
    const dilemmaCopy = repairedDilemmaCopy[lesson.id];
    if (dilemmaCopy && lesson.subtitle === fieldValue(dilemmaCopy[0][1]) && lesson.explanation === fieldValue(dilemmaCopy[1][1])) {
      lesson = {...lesson, subtitle: fieldValue(dilemmaCopy[0][0]), explanation: fieldValue(dilemmaCopy[1][0])};
    }
    const copy = repairedCopies[lesson.id];
    if (!copy || lesson.subtitle !== copy[0] || lesson.duration !== '≈ 45 min + banco opcional') return lesson;
    return {...lesson, subtitle:copy[1], duration:'70–85 min'};
  });
}
