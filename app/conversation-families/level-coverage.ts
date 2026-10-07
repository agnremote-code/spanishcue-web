import type { CEFRLevel } from './types';
/** Public integration contract. A new conversation engine must implement every level
 * and join this list; inventory/rendering tests prevent silent catalogue-only support. */
export const normalizedConversationIds = [207,101,102,20,15,221,226,223,216,215,205,206,139,138,137,136,129,128,127,126,125,124,123,122,121,120,109,39,210,36,34,33,32,30,29,27,25,24,22,19,17,11,203,227,228,229] as const;
export const conversationLevelAims: Record<CEFRLevel, { objective: string; functions: string[] }> = {
 A0:{objective:'Construir primeras frases en español con opciones y modelos bilingües, sin conocimientos previos',functions:['Elegir una opción visual','Combinar bloques preparados','Decir una frase propia y responder con apoyo']},
 A1:{objective:'Intercambiar frases cortas sobre personas, lugares y preferencias con modelos visibles',functions:['Identificar','Expresar preferencias','Preguntar y responder en presente']},
 A2:{objective:'Resolver situaciones cotidianas y conectar respuestas con razones sencillas',functions:['Proponer planes','Explicar necesidades','Relacionar ideas con conectores básicos']},
 B1:{objective:'Narrar experiencias, explicar opiniones y resolver problemas mediante decisiones justificadas',functions:['Narrar','Explicar causas','Comparar soluciones']},
 B2:{objective:'Argumentar, formular hipótesis y contrastar perspectivas con matices',functions:['Contraargumentar','Negociar condiciones','Evaluar consecuencias']},
 C1:{objective:'Improvisar y persuadir adaptando el registro e interpretando el subtexto',functions:['Matizar','Persuadir','Reformular según el interlocutor']},
 C2:{objective:'Expresarse con precisión y flexibilidad ante ironía, ambigüedad y matices socioculturales',functions:['Distinguir implicaturas','Reformular sin perder matices','Elegir conscientemente el registro']},
};
