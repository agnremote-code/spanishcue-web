import assert from 'node:assert/strict';

// 2026-10-30: the classic (not 3D) conversation lessons got new covers
// (app/conversation-classic-covers.ts, drawn by scripts/covers/clasicas.mjs).
// Only the image paths changed; the historical snapshots compare the old ones.
export const OLD_CLASSIC_IMAGES = {221:"/la-ciudad-no-duerme/preview.webp",216:"/entrenador-personal/hero.webp",215:"/vida-despues-30/portrait.webp",205:"/catalog-thumbnails/conversation-choice.webp",206:"/catalog-thumbnails/advanced-dialogue.webp",207:"/play-mode/red-flag-o-no/a2.webp",208:"/play-mode/red-flag-o-no/b1.webp",209:"/play-mode/red-flag-o-no/b2.webp",139:"/play-mode/ciudad-en-juego.webp",138:"/play-mode/y-ahora-que.webp",137:"/play-mode/uno-o-el-otro.webp",136:"/conversation-premium/camara-presion.webp",129:"/conversation-premium/ministerio-versiones.webp",128:"/conversation-premium/agencia-vidas-paralelas.webp",127:"/conversation-premium/protocolo-aurora.webp",126:"/conversation-premium/noche-siete-llamadas.webp",125:"/conversation-premium/mesa-tres-ofertas.webp",124:"/conversation-premium/mensajes-fuera-de-contexto.webp",123:"/conversation-premium/en-vivo-diez-minutos.webp",122:"/conversation-premium/teatro-coartadas.webp",121:"/conversation-premium/cine-tres-funciones.webp",120:"/conversation-premium/invitaciones-cruzadas.webp",109:"/la-isla-vota/island-command-table-v1.webp",103:"/conversation-worlds/elimination-machine.webp",104:"/conversation-worlds/absurd-universe.webp",101:"/conversation-worlds/elimination-machine.webp",102:"/conversation-worlds/absurd-universe.webp",34:"/monastery-ideas-3d.webp",22:"/catalog-thumbnails/future-city.webp",21:"/kingdom-world-bg.webp",20:"/kingdom-world-bg.webp",17:"/catalog-thumbnails/life-wheel.webp",15:"/catalog-thumbnails/conversation-a1.webp",14:"/catalog-thumbnails/conversation-a2.webp",13:"/catalog-thumbnails/conversation-choice.webp",11:"/catalog-thumbnails/advanced-dialogue.webp",203:"/monastery-worlds/03-biblioteca.webp"};

const CATALOG_EDITS = [
  ['import { additionalSamples } from "./additional-samples";\nimport { classicConversationCovers } from "./conversation-classic-covers";', 'import { additionalSamples } from "./additional-samples";'],
  [':classicConversationCovers.get(lesson.id)||lessonPreviews[lesson.id]', ':lessonPreviews[lesson.id]'],
];

/** app/lesson-catalog.ts without the two lines that read the new covers. */
export function withoutClassicCoverBytes(path, bytes) {
  if (path !== 'app/lesson-catalog.ts') return bytes;
  let text = bytes.toString('utf8');
  for (const [after, before] of CATALOG_EDITS) {
    assert.equal(text.split(after).length - 1, 1, 'one classic cover edit in app/lesson-catalog.ts');
    text = text.replace(after, before);
  }
  return Buffer.from(text);
}

/** A lesson with its old cover path back. */
export function withOldClassicImage(lesson) {
  const old = OLD_CLASSIC_IMAGES[lesson.id];
  if (!old || lesson.category !== 'Conversación') return lesson;
  assert.match(lesson.image, /^\/conversation-classics\/[a-z0-9-]+\.webp$/, `classic cover for ${lesson.id}`);
  return { ...lesson, image: old };
}

/** A family level preview compared without its image (the cover is the only change). */
export function withoutPreviewImage(preview) {
  if (!preview) return preview;
  const { image, ...rest } = preview;
  if (image) assert.match(image, /^\/(?:conversation-classics|play-mode|catalog-thumbnails|conversation-worlds|kingdom-world-bg)[^ ]*\.webp$/);
  return rest;
}
