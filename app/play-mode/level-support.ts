import type {PlayPowerUp} from './PlayShell';
export const levelSupport:Record<string,string[]>={
 A0:['yo = I · tú = you','quiero = I want · necesito = I need','Yo quiero agua. / I want water.','Prefiero esta opción. / I prefer this option.','No, gracias. / No, thank you.','¿Y tú? / And you?','Copy a complete model, then change one noun. Teacher clicks; learner speaks.'],
 A1:['Quiero…','Prefiero…','Me gusta… porque…','Hay…','¿Y tú?'],
 A2:['Antes… Ahora…','La última vez…','Voy a… porque…','Primero… Después…'],
 B2:['Aunque…, convendría…','Aceptaría siempre que…','A corto plazo…; a largo plazo…'],
 C1:['Eso presupone que…','Conviene distinguir…','Desde la perspectiva de…','Reformularía la propuesta así…'],
 C2:['Mi afirmación se limita a…','El encuadre deja fuera…','No tanto…, cuanto…','Esta lectura es plausible, pero no concluyente.'],
};
export const levelPowers:Record<string,readonly PlayPowerUp[]>={
 A0:[['REPETIR / REPEAT','Copy your chosen Spanish answer aloud. Teacher models it once.'],['¿Y TÚ? / AND YOU?','Say: ¿Y tú? / And you? Listen to the teacher’s answer.'],['OTRA / ANOTHER','Choose another visible option. Say: Quiero… / I want…'],['AYUDA / HELP','Say: Más despacio, por favor. / More slowly, please.']],
 A1:[['UN DETALLE','Di dónde, cuándo o con quién.'],['PREGUNTA','Haz una pregunta corta con ¿y tú?'],['OTRA OPCIÓN','Di una cosa que te gusta de la otra opción.']],
 A2:[['ANTES','Cuenta una experiencia parecida: primero, después y al final.'],['PLAN','Di qué vas a hacer y por qué.'],['CAMBIO','Antes tenías más tiempo. Compara antes y ahora.']],
 B2:[['CONDICIÓN','Negocia una condición concreta y explica su coste.'],['OBJECIÓN','Responde a una desventaja plausible con una concesión.'],['CONSECUENCIA','Compara efectos inmediatos y a largo plazo.']],
 C1:[['SUPUESTO','¿Qué supuesto sostiene tu decisión? Busca una excepción.'],['PERSPECTIVA','Reformula para una persona con intereses distintos.'],['MATIZ','Distingue lo que sabes de lo que estás infiriendo.']],
 C2:[['ENCUADRE','Detecta una falsa oposición y formula una tercera lectura.'],['REGISTRO','Expresa el mismo desacuerdo de forma directa y diplomática; explica qué cambia.'],['ALCANCE','Delimita tu afirmación para evitar una generalización sin vaciarla de contenido.']],
};
