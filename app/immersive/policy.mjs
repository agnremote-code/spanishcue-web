// Public geography and experiment routing only. No lesson or premium payloads.
export const DEMO_LEVELS = ['A1','A2','B1','B2','C1','C2'];
export const DEMO_BOUNDS = { minX: -49, maxX: 49, minZ: -41, maxZ: 42 };
export const DEMO_GATES = [
  {id:'alto', name:'Barrio Alto', x:0, z:-38},
  {id:'costa', name:'Costanera', x:46, z:0},
  {id:'sur', name:'Barrio Sur', x:0, z:39},
  {id:'mercado', name:'Mercado nocturno', x:-46, z:0},
];
export const PRO_DISTRICTS = ['Barrio Viejo','Barrio Alto','Hospital y Comisaría','Mercado nocturno','Costanera','Estación','Barrio Sur','Galpones'];
export const EXPERIMENT_ID = 'instagram-city-v1';
export function nearPremiumGate(position, busy) {
  if (busy) return null;
  return DEMO_GATES.find(g => Math.hypot(position.x-g.x,position.z-g.z)<4) ?? null;
}
export function experimentDestination(url, variant) {
  const query = new URLSearchParams();
  for (const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','lang']) {
    const value = url.searchParams.get(key);
    if (value) query.set(key,value.slice(0,180));
  }
  query.set('sc_exp',EXPERIMENT_ID);
  query.set('sc_variant',variant==='a'?'a':'b');
  return `${variant==='a'?'/lp/spanish-teacher-resources':'/lp/instagram'}?${query}`;
}
