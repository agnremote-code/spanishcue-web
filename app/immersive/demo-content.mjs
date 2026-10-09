// SERVER ONLY: the public client receives this allowlisted payload, never imports it.
import { contentFor, isLevel } from '../noche-abierta/levels.mjs';
const CENTRE_IDS = new Set(['cafe','departamento','restaurante','plaza','bar','auto','museo','taxi','tienda','terraza']);
export function demoContent(level, district = 'centro') {
  if (district !== 'centro') return null;
  const chosen = isLevel(level) ? level : 'A1';
  return {level:chosen,zone:'centro',locations:contentFor(chosen).LOCATIONS.filter(l=>CENTRE_IDS.has(l.id))};
}
