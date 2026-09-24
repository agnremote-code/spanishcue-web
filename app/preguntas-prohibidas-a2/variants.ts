import * as a2 from './data';
import * as b1 from '../preguntas-prohibidas/data';
export const kingdomVariants = {
 A2:{level:'A2',focus:'UNA IDEA, UNA RAZÓN Y UN EJEMPLO',intro:'Recorre los mundos, elige una pregunta y responde con una idea, una razón y un ejemplo.',answerGuide:'Construye una respuesta clara.',formula:'Para mí… porque… Por ejemplo… ¿Y para ti?',activities:a2,closingConversation:['¿Qué pregunta te gustó más?','¿Qué tema fue difícil?','¿Qué respuesta fue más fácil?','¿Qué palabra nueva usaste?','¿Qué tema quieres practicar otra vez?']},
 B1:{level:'B1',focus:'OPINIÓN, MATICES Y OTRAS PERSPECTIVAS',intro:'Abre una puerta, cuenta tu experiencia y considera cómo cambia tu respuesta al escuchar otra perspectiva.',answerGuide:'Explica tu postura y considera una alternativa.',formula:'Pienso que… aunque… Por otra parte… En mi experiencia…',activities:b1,closingConversation:['¿Qué pregunta fue más incómoda?','¿Qué tema te obligó a pensar más?','¿Qué respuesta tuya fue más honesta?','¿Qué postura cambiarías un poco después de hablar?','¿Qué tema sería peligroso discutir con desconocidos?']},
} as const;
