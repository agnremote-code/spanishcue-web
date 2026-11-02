// Question banks of the classic conversation classes, read on the server only.
// In the Worker build this file is replaced by an index that decrypts one static
// blob per class (scripts/clasicas-content.mjs), so the 2,100 questions never
// sit in the Worker bundle. Pages call loadClassicContent(slug); the client
// engine gets the content as props.
import type { ClassicContent } from './types';
import { CONTENT as speedDatingDePersonajes } from '../speed-dating-de-personajes/content/index.mjs';
import { CONTENT as elRestauranteImposible } from '../el-restaurante-imposible/content/index.mjs';
import { CONTENT as elDiaQueTodoSalioMal } from '../el-dia-que-todo-salio-mal/content/index.mjs';
import { CONTENT as tradicionesQueNadieEntiende } from '../tradiciones-que-nadie-entiende/content/index.mjs';
import { CONTENT as miYoDe2035 } from '../mi-yo-de-2035/content/index.mjs';
import { CONTENT as elConsultorioSentimental } from '../el-consultorio-sentimental/content/index.mjs';
import { CONTENT as resenasDeUnaEstrella } from '../resenas-de-una-estrella/content/index.mjs';
import { CONTENT as elBilleteGanador } from '../el-billete-ganador/content/index.mjs';
import { CONTENT as unDiaSinPantallas } from '../un-dia-sin-pantallas/content/index.mjs';
import { CONTENT as elTribunalDeLasCosasPequenas } from '../el-tribunal-de-las-cosas-pequenas/content/index.mjs';

const CONTENT: Record<string, ClassicContent> = {
  'speed-dating-de-personajes': speedDatingDePersonajes,
  'el-restaurante-imposible': elRestauranteImposible,
  'el-dia-que-todo-salio-mal': elDiaQueTodoSalioMal,
  'tradiciones-que-nadie-entiende': tradicionesQueNadieEntiende,
  'mi-yo-de-2035': miYoDe2035,
  'el-consultorio-sentimental': elConsultorioSentimental,
  'resenas-de-una-estrella': resenasDeUnaEstrella,
  'el-billete-ganador': elBilleteGanador,
  'un-dia-sin-pantallas': unDiaSinPantallas,
  'el-tribunal-de-las-cosas-pequenas': elTribunalDeLasCosasPequenas,
};

export async function loadClassicContent(slug: string): Promise<ClassicContent | undefined> {
  return Object.hasOwn(CONTENT, slug) ? CONTENT[slug] : undefined;
}
