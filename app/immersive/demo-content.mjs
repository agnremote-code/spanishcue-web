// SERVER ONLY: the public client receives this allowlisted payload, never imports it.
import { contentFor, isLevel } from '../noche-abierta/levels.mjs';
import { DEMO_FREE_LOCATIONS, DEMO_FREE_ACTIVITIES_PER_LOCATION } from './policy.mjs';
const CENTRE_IDS = new Set(['cafe','departamento','restaurante','plaza','bar','auto','museo','taxi','tienda','terraza']);
export function demoContent(level, district = 'centro') {
  if (district !== 'centro') return null;
  const chosen = isLevel(level) ? level : 'A1';
  const locations = contentFor(chosen).LOCATIONS.filter(l => CENTRE_IDS.has(l.id)).map(location => {
    const locked = !DEMO_FREE_LOCATIONS.includes(location.id);
    const freeActivities = locked ? [] : location.activities.slice(0, DEMO_FREE_ACTIVITIES_PER_LOCATION);
    const premiumCount = location.activities.length - freeActivities.length;
    if (locked) {
      // Never send the underlying PRO activity, instructions, hints or grammar.
      return {
        id: location.id, name: location.name, short: location.short,
        type: location.type, focus: '', help: {starters:[],chunks:[]},
        activities: [], locked: true, premiumCount,
      };
    }
    return {...location, activities: freeActivities, locked: false, premiumCount};
  });
  return {level:chosen,zone:'centro',locations};
}
