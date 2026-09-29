export type MouthTarget = "tap" | "trill";
export const targets = [
  {id:"tap" as const, label:"Un toque breve", cue:"Tocá una vez, muy brevemente, detrás de los dientes superiores con la punta de la lengua. Soltá el contacto enseguida.", motion:"Un contacto → soltar", words:["pero","caro"]},
  {id:"trill" as const, label:"Varios contactos", cue:"Acercá la punta al mismo lugar, sin apretar. Dejá pasar aire para que la punta vibre. No intentes golpear muchas veces a la fuerza.", motion:"Aire continuo → punta relajada", words:["perro","carro","rojo"]},
];
export const mouthClips: Record<string,{id:string;src:string;text:string;target?:MouthTarget}> = {
  pero:{id:"pero",src:"/audio/mouth-lab/pero.mp3",text:"pero",target:"tap"},
  perro:{id:"perro",src:"/audio/mouth-lab/perro.mp3",text:"perro",target:"trill"},
  caro:{id:"caro",src:"/audio/mouth-lab/caro.mp3",text:"caro",target:"tap"},
  carro:{id:"carro",src:"/audio/mouth-lab/carro.mp3",text:"carro",target:"trill"},
  rojo:{id:"rojo",src:"/audio/mouth-lab/rojo.mp3",text:"rojo",target:"trill"},
  "phrase-perro":{id:"phrase-perro",src:"/audio/mouth-lab/phrase-perro.mp3",text:"Mi perro corre."},
  "phrase-carro":{id:"phrase-carro",src:"/audio/mouth-lab/phrase-carro.mp3",text:"El carro es caro."},
  "phrase-contrast":{id:"phrase-contrast",src:"/audio/mouth-lab/phrase-contrast.mp3",text:"Quiero el carro rojo, pero es caro."},
};
export const wordModels=["pero","perro","caro","carro","rojo"];
export const phraseModels=["phrase-perro","phrase-carro","phrase-contrast"];
export type MouthTrial={id:string;clipId:string;options:string[];answer:number;hint:string;why:string};
export const noticeTrials:MouthTrial[]=[
 {id:"notice-tap",clipId:"pero",options:["Un toque breve","Varios contactos"],answer:0,hint:"Escuchá el centro de la palabra: ¿el contacto pasa rápido o se prolonga?",why:"La punta hace un contacto breve. Es la R simple."},
 {id:"notice-trill",clipId:"perro",options:["Un toque breve","Varios contactos"],answer:1,hint:"Compará con el modelo anterior. ¿La R tiene más de un contacto?",why:"La punta vibra con varios contactos. Es la R múltiple."},
];
export const contrastTrials:MouthTrial[]=[
 {id:"contrast-1",clipId:"pero",options:["pero","perro"],answer:0,hint:"Atendé solo a la R entre las vocales: contacto breve o vibración.",why:"Pero lleva un contacto breve. Perro tiene una R múltiple."},
 {id:"contrast-2",clipId:"perro",options:["pero","perro"],answer:1,hint:"Escuchá si la punta vibra más tiempo; no te guíes por la primera opción.",why:"Perro nombra al animal. La R múltiple lo distingue de pero."},
 {id:"contrast-3",clipId:"carro",options:["caro","carro"],answer:1,hint:"Mantené las vocales iguales; escuchá lo que ocurre en el centro.",why:"Carro nombra aquí un vehículo de juguete. Tiene R múltiple."},
 {id:"contrast-4",clipId:"caro",options:["caro","carro"],answer:0,hint:"Escuchá otra vez sin alargar la R de tu respuesta.",why:"Caro describe un precio alto. La punta hace un contacto breve."},
 {id:"contrast-5",clipId:"perro",options:["pero","perro"],answer:1,hint:"Volvé al sonido, aunque ya conozcas las dos palabras.",why:"Se escucha la R múltiple de perro. Repetí y decí algo sobre ese animal."},
 {id:"contrast-6",clipId:"pero",options:["pero","perro"],answer:0,hint:"¿Se oye un toque o una vibración? Podés repetir el audio.",why:"Se escucha la R simple de pero. Usalo para cambiar una idea: quiero…, pero…"},
 {id:"contrast-7",clipId:"caro",options:["caro","carro"],answer:0,hint:"Escuchá el contacto de la lengua, no el orden de las opciones.",why:"Caro: un toque breve. Comentá el precio de un objeto."},
 {id:"contrast-8",clipId:"carro",options:["caro","carro"],answer:1,hint:"Compará mentalmente las dos palabras y volvé a escuchar.",why:"Carro: R múltiple. Pedí ese juguete a tu compañero."},
];
export const route=[
 "5 min · Escuchá dos modelos, distinguí el contacto y repetí cada uno con el profe.",
 "10 min · Ubicá el contacto; alterná los cinco modelos y hacé tres intentos por palabra con una devolución concreta.",
 "8 min · Resolvé ocho contrastes; después de cada uno, repetí y compará. Revisitá los difíciles.",
 "7 min · Escuchá tres frases; imitá, ocultá el texto y cambiá una palabra sin perder el contraste.",
 "15 min · Pedí un juguete, aclaralo y acordá una compra; cambiá roles y repetí dos frases con una mejora concreta.",
];
export const finalCriteria=[
 "El interlocutor distinguió carro/caro y entendió qué juguete pidió el alumno.",
 "El alumno usó al menos tres palabras practicadas en sus propios turnos, con ayuda si la necesitó.",
 "Después de una indicación concreta, repitió dos frases y comparó la claridad del contraste.",
];
