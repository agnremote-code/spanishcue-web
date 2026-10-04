import a1 from './a1.mjs';import a2 from './a2.mjs';import b1 from './b1.mjs';import b2 from './b2.mjs';import c1 from './c1.mjs';import c2 from './c2.mjs';
import type { Level, Prompt } from './types';
export const BANKS:Record<Level,Prompt[]>={A1:a1 as Prompt[],A2:a2 as Prompt[],B1:b1 as Prompt[],B2:b2 as Prompt[],C1:c1 as Prompt[],C2:c2 as Prompt[]};
export const LEVEL_SUPPORT:Record<Level,{demand:string;starters:string[];personal:string}>={
 A1:{demand:'Habla con 1–3 frases cortas.',starters:['Me gusta…','Prefiero… porque…','En mi casa hay…'],personal:'¿Qué tema te gusta más? Di dos cosas sobre ti.'},
 A2:{demand:'Explica tu idea con 2–5 frases.',starters:['Para mí… porque…','La última vez…','Voy a…'],personal:'¿Qué pregunta tiene más relación con tu vida? Explica por qué.'},
 B1:{demand:'Desarrolla tu respuesta con una razón y un ejemplo.',starters:['En mi experiencia…','Por ejemplo…','Si pudiera…'],personal:'¿Qué respuesta de hoy te representa mejor? Conéctala con una experiencia.'},
 B2:{demand:'Justifica, matiza y considera una alternativa.',starters:['Aunque…','Depende de si…','Por una parte…'],personal:'¿Qué prioridad tuya apareció en varias respuestas? ¿En qué condiciones cambiaría?'},
 C1:{demand:'Explora supuestos, excepciones y otras perspectivas.',starters:['Cabe distinguir…','Eso presupone que…','Salvo que…'],personal:'¿Qué tensión entre tus valores apareció hoy? Explica cómo convives con ella.'},
 C2:{demand:'Cuestiona el encuadre y reformula con precisión.',starters:['La premisa oculta es…','Conviene acotar…','Desde otro marco…'],personal:'¿Qué relato sobre ti has construido al responder? Revisa un supuesto y reformula ese relato.'},
};
