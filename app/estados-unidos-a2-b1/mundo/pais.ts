// Estados Unidos 3D · the country as the map shows it: six states with a
// complete zone, each a floating island around the airport. Adding a state
// is one entry here, one content file (contenido/) and one scene (escenas/).
import type { CountryInfo, RegionContent } from '../../mundo-3d/types';
import type { SceneBuilder } from '../../mundo-3d/kit3d';

export const USA: CountryInfo = {
  id: 'estados-unidos',
  lessonId: 36,
  name: { es: 'Estados Unidos', en: 'United States' },
  welcome: { es: 'BIENVENIDO A ESTADOS UNIDOS', en: 'WELCOME TO THE UNITED STATES' },
  regions: [
    {
      id: 'california', sign: 'CALIFORNIA', shape: 'California', at: { x: -50, z: -6 }, color: '#e0a03a', sound: 'coast',
      name: { es: 'California', en: 'California' }, zone: { es: 'Los Ángeles', en: 'Los Angeles' },
      hook: { es: 'Autopistas, playas, estudios y gente que llegó de todas partes.', en: 'Freeways, beaches, studios and people who came from everywhere.' },
      spots: [
        { id: 'venice', name: { es: 'Venice Beach', en: 'Venice Beach' } },
        { id: 'food-truck', name: { es: 'El food truck', en: 'The food truck' } },
        { id: 'estudio', name: { es: 'El estudio creativo', en: 'The creative studio' } },
        { id: 'barrio', name: { es: 'La calle residencial', en: 'The residential street' } },
        { id: 'mirador', name: { es: 'El mirador', en: 'The lookout' } },
      ],
    },
    {
      id: 'hawai', sign: 'HAWAII', shape: 'Hawaii', at: { x: -62, z: 38 }, color: '#3fa36b', sound: 'tropic',
      name: { es: 'Hawái', en: 'Hawaii' }, zone: { es: 'Honolulu', en: 'Honolulu' },
      hook: { es: 'Olas, volcanes dormidos, mercados y una pregunta difícil sobre el turismo.', en: 'Waves, sleeping volcanoes, markets and a hard question about tourism.' },
      spots: [
        { id: 'surf', name: { es: 'La playa de surf', en: 'The surf beach' } },
        { id: 'mercado', name: { es: 'El mercado local', en: 'The local market' } },
        { id: 'crater', name: { es: 'El mirador volcánico', en: 'The volcanic lookout' } },
        { id: 'sendero', name: { es: 'El sendero tropical', en: 'The tropical trail' } },
        { id: 'restaurante', name: { es: 'El restaurante junto al océano', en: 'The oceanfront restaurant' } },
      ],
    },
    {
      id: 'colorado', sign: 'COLORADO', shape: 'Colorado', at: { x: -12, z: -40 }, color: '#4f7fbf', sound: 'mountain',
      name: { es: 'Colorado', en: 'Colorado' }, zone: { es: 'Denver y las montañas', en: 'Denver and the mountains' },
      hook: { es: 'Nieve, cabañas, lagos fríos y gente que vive al aire libre.', en: 'Snow, cabins, cold lakes and people who live outdoors.' },
      spots: [
        { id: 'pueblo', name: { es: 'El pueblo de montaña', en: 'The mountain town' } },
        { id: 'cafe', name: { es: 'La cafetería acogedora', en: 'The cozy café' } },
        { id: 'lago', name: { es: 'El lago', en: 'The lake' } },
        { id: 'esqui', name: { es: 'La estación de esquí', en: 'The ski resort' } },
        { id: 'sendero', name: { es: 'El sendero natural', en: 'The nature trail' } },
      ],
    },
    {
      id: 'texas', sign: 'TEXAS', shape: 'Texas', at: { x: -4, z: 44 }, color: '#c4552f', sound: 'ranch',
      name: { es: 'Texas', en: 'Texas' }, zone: { es: 'Austin', en: 'Austin' },
      hook: { es: 'Barbacoa, música en vivo, espacios enormes y opiniones fuertes.', en: 'Barbecue, live music, huge spaces and strong opinions.' },
      spots: [
        { id: 'barbacoa', name: { es: 'El restaurante de barbacoa', en: 'The BBQ restaurant' } },
        { id: 'musica', name: { es: 'El bar con música en vivo', en: 'The live music bar' } },
        { id: 'feria', name: { es: 'La feria local', en: 'The local fair' } },
        { id: 'gasolinera', name: { es: 'La gasolinera de la ruta', en: 'The highway gas station' } },
        { id: 'congress', name: { es: 'La calle comercial', en: 'The shopping street' } },
      ],
    },
    {
      id: 'nueva-york', sign: 'NEW YORK', shape: 'New York', at: { x: 46, z: -30 }, color: '#d8b13a', sound: 'city',
      name: { es: 'Nueva York', en: 'New York' }, zone: { es: 'Manhattan', en: 'Manhattan' },
      hook: { es: 'Rascacielos, taxis, prisa y conversaciones en cien idiomas.', en: 'Skyscrapers, cabs, hurry and conversations in a hundred languages.' },
      spots: [
        { id: 'metro', name: { es: 'La estación de metro', en: 'The subway station' } },
        { id: 'cafe', name: { es: 'La cafetería de barrio', en: 'The neighborhood café' } },
        { id: 'parque', name: { es: 'El parque', en: 'The park' } },
        { id: 'avenida', name: { es: 'La calle comercial', en: 'The shopping street' } },
        { id: 'azotea', name: { es: 'La azotea', en: 'The rooftop' } },
      ],
    },
    {
      id: 'florida', sign: 'FLORIDA', shape: 'Florida', at: { x: 44, z: 40 }, color: '#e8668a', sound: 'beach',
      name: { es: 'Florida', en: 'Florida' }, zone: { es: 'Miami Beach', en: 'Miami Beach' },
      hook: { es: 'Mar turquesa, edificios art déco, café cubano y noches largas.', en: 'Turquoise sea, art deco buildings, Cuban coffee and long nights.' },
      spots: [
        { id: 'playa', name: { es: 'La playa y el salvavidas', en: 'The beach and the lifeguard' } },
        { id: 'cafeteria', name: { es: 'La cafetería frente al mar', en: 'The seafront café' } },
        { id: 'hotel', name: { es: 'El hotel', en: 'The hotel' } },
        { id: 'murales', name: { es: 'La calle de los murales', en: 'The mural street' } },
        { id: 'paseo', name: { es: 'El paseo marítimo de noche', en: 'The boardwalk at night' } },
      ],
    },
  ],
};

// Content and scenes download only when the student enters the state. They load only in
// the browser: the server build (import.meta.env.SSR) drops these chunks, which keeps the
// Worker bundle inside its memory budget (tests/worker-startup.test.mjs).
export const loadContent = (id: string): Promise<RegionContent> => (import.meta as unknown as { env: { SSR: boolean } }).env.SSR ? Promise.reject(new Error('browser only')) : ({
  florida: () => import('./contenido/florida.mjs'),
  'nueva-york': () => import('./contenido/nueva-york.mjs'),
  california: () => import('./contenido/california.mjs'),
  texas: () => import('./contenido/texas.mjs'),
  hawai: () => import('./contenido/hawai.mjs'),
  colorado: () => import('./contenido/colorado.mjs'),
}[id]!)().then(module => module.default as RegionContent);

export const loadScene = (id: string): Promise<SceneBuilder> => ({
  florida: () => import('./escenas/florida3d'),
  'nueva-york': () => import('./escenas/nueva-york3d'),
  california: () => import('./escenas/california3d'),
  texas: () => import('./escenas/texas3d'),
  hawai: () => import('./escenas/hawai3d'),
  colorado: () => import('./escenas/colorado3d'),
}[id]!)().then(module => module.default as SceneBuilder);
