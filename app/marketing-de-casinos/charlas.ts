// El Gran Meridiano · conversation circles at what stands out on each floor.
// Everyone without a scene of their own gets a circle from the crowd.

import { thingPlaces, type FloorPlace, type Talk } from '../charlas-3d/lugares';
import { FLOORS, FURNITURE, solidsFor } from './layout.mjs';

const THINGS: Record<string, Talk> = {
  'fountain-in': { title: 'La fuente del vestíbulo', intro: 'El agua baila con luces doradas. Hay fichas en el fondo, no monedas.', themes: ['espiritu', 'dinero'] },
  bigslot: { title: 'La tragamonedas gigante', intro: 'Un premio acumulado que nunca sale. Alguien lleva horas aquí.', themes: ['juego', 'soledad'] },
  roulette: { title: 'La ruleta', intro: 'Rojo o negro. La bola gira y todos contienen la respiración.', themes: ['juego', 'miedo'] },
  blackjack: { title: 'La mesa de blackjack', intro: 'Veintiuno. Algunos cuentan cartas, otros rezan.', themes: ['juego', 'dinero'] },
  craps: { title: 'La mesa de dados', intro: 'Gritos, aplausos y una mujer que sopla los dados para la suerte.', themes: ['juego', 'fiesta'] },
  cage: { title: 'La caja', intro: 'Aquí se cambia el dinero por fichas, y al revés, si hay suerte.', themes: ['dinero', 'ley'] },
  bar: { title: 'La barra', intro: 'El barman escucha más confesiones que un cura.', themes: ['soledad', 'noche'] },
  piano: { title: 'El piano', intro: 'Un pianista toca canciones viejas que nadie escucha del todo.', themes: ['arte', 'tiempo'] },
  screens: { title: 'Las pantallas de apuestas', intro: 'Carreras de caballos y partidos de todo el mundo, en directo.', themes: ['deporte', 'juego'] },
  poker: { title: 'La sala de póker', intro: 'Caras que no dicen nada. Todo el mundo miente aquí.', themes: ['juego', 'persona'] },
  buffet: { title: 'El bufé libre', intro: 'Comida infinita para que nadie se vaya a casa.', themes: ['comida', 'dinero'] },
  chocolate: { title: 'La fuente de chocolate', intro: 'Una cascada de chocolate caliente. Los niños no pueden entrar.', themes: ['comida', 'infancia'] },
  stage: { title: 'El escenario del teatro', intro: 'Esta noche hay espectáculo. Los bailarines calientan detrás.', themes: ['arte', 'trabajo'] },
  altar: { title: 'La capilla de bodas', intro: 'Aquí se casan parejas que se conocieron hace tres horas.', themes: ['amor', 'espiritu'] },
  djbooth: { title: 'La cabina del DJ', intro: 'El bajo te golpea el pecho. La pista de baile está llena.', themes: ['fiesta', 'arte'] },
  baccarat: { title: 'La mesa de bacará', intro: 'Las apuestas más altas del casino. Nadie sonríe.', themes: ['poder', 'dinero'] },
  humidor: { title: 'El salón de puros', intro: 'Humo, cuero y hombres que hablan de negocios.', themes: ['poder', 'trabajo'] },
  safe: { title: 'La caja fuerte', intro: 'Una puerta de acero enorme. ¿Qué hay dentro?', themes: ['dinero', 'ley'] },
  firepit: { title: 'El fuego de la terraza', intro: 'Las luces de la ciudad abajo y un fuego para calentarse.', themes: ['noche', 'fuego'] },
  photos: { title: 'La pared de fotos', intro: 'Famosos que ganaron aquí. Ninguna foto de los que perdieron.', themes: ['historia', 'juego'] },
  statue: { title: 'La estatua dorada', intro: 'Una figura de oro que sostiene una ficha gigante.', themes: ['arte', 'poder'] },
};

export const casinoPlaces = (): FloorPlace[] => thingPlaces(FLOORS, FURNITURE, solidsFor, THINGS, 'c');
