import audioManifest from "./audio-manifest.json";

export type PhoneticsId = 201 | 202;
export type ListeningTrial = {
  id: string;
  clipId: string;
  options: string[];
  answer: number;
  syllables?: string[];
  why: string;
  hint: string;
  extension?: boolean;
};
export const phoneticClip = (id: string) => {
  const clip = audioManifest.clips.find(item => item.id === id);
  if (!clip) throw new Error(`Missing phonetics clip: ${id}`);
  return clip;
};

export const vowelModels = [
  {vowel:"a", word:"casa", cue:"Abrí la boca con comodidad; la lengua queda baja. No fuerces la mandíbula."},
  {vowel:"e", word:"mesa", cue:"La lengua va hacia delante, a media altura. Mantené el sonido: no agregues una i al final."},
  {vowel:"i", word:"vino", cue:"La lengua va hacia delante y más arriba que en e. Dejá salir la voz sin tensión."},
  {vowel:"o", word:"moto", cue:"Redondeá los labios, con una apertura media. No agregues una u al final."},
  {vowel:"u", word:"luna", cue:"Redondeá los labios y cerrá un poco más que en o. Mantené una sola vocal."},
];

export const vowelTrials: ListeningTrial[] = [
  {id:"v01",clipId:"mesa",options:["mesa","misa"],answer:0,why:"En mesa, la primera vocal es e. En misa es i: la lengua sube un poco más.",hint:"Prestá atención a la primera vocal; el resto de la palabra se parece."},
  {id:"v02",clipId:"casa",options:["cosa","casa"],answer:1,why:"En casa, la primera vocal es a. En cosa es o: los labios se redondean.",hint:"Escuchá la vocal que viene después de c. ¿La boca está más abierta?"},
  {id:"v03",clipId:"piso",options:["peso","piso"],answer:1,why:"Piso tiene i en la primera sílaba; peso tiene e. Mantené también la o final.",hint:"Compará la primera vocal, sin cambiar la o del final."},
  {id:"v04",clipId:"pelo",options:["pelo","palo"],answer:0,why:"Pelo empieza con pe; palo empieza con pa. La e no termina en otra vocal.",hint:"Concentrate en la vocal de la primera sílaba."},
  {id:"v05",clipId:"misa",options:["mesa","misa"],answer:1,why:"Sonó misa, con i. Comparala con la e de mesa y repetí las dos.",hint:"Volvé al contraste e / i; escuchá antes de mirar las opciones."},
  {id:"v06",clipId:"peso",options:["peso","piso"],answer:0,why:"Sonó peso, con e. La e mantiene su calidad, sin añadir una i.",hint:"La primera vocal distingue estas dos palabras."},
  {id:"v07",clipId:"cosa",options:["cosa","casa"],answer:0,why:"Sonó cosa, con o. Repetí o y después cosa, sin terminar la o en u.",hint:"Escuchá la primera vocal y comparala con a / o."},
  {id:"v08",clipId:"palo",options:["pelo","palo"],answer:1,why:"Sonó palo, con a. Repetí la palabra y usala en una frase corta con ayuda.",hint:"¿Qué vocal escuchás justo después de p?"},
];

function stressTrial(id: string, clipId: string, syllables: string[], answer: number, why: string, extension = false): ListeningTrial {
  return {id,clipId,syllables,answer,why,extension,options:syllables.map((_,i)=>`Sílaba ${i+1}`),hint:"Volvé a escuchar la palabra completa. Marcá un pulso en la sílaba que se destaca; no busques una tilde todavía."};
}
export const stressTrials: ListeningTrial[] = [
  stressTrial("s01","casa",["ca","sa"],0,"Se destaca CA. Casa tiene acento hablado aunque no lleve tilde."),
  stressTrial("s02","papel",["pa","pel"],1,"Se destaca PEL. Escuchaste el acento al final, sin necesitar una marca escrita."),
  stressTrial("s03","telefono",["te","lé","fo","no"],1,"Se destaca LÉ, la segunda sílaba. La tilde muestra en la escritura lo que escuchaste."),
  stressTrial("s04","cafe",["ca","fé"],1,"Se destaca FÉ. El acento hablado y la tilde escrita se refieren a la misma sílaba aquí."),
  stressTrial("s05","publico-initial",["pú","bli","co"],0,"PÚ-bli-co: público, como las personas que miran un espectáculo.",true),
  stressTrial("s06","publico-middle",["pu","bli","co"],1,"Pu-BLI-co: publico, como en «yo publico una foto». El significado es apoyo opcional del profe.",true),
  stressTrial("s07","publico-final",["pu","bli","có"],2,"Pu-bli-CÓ: publicó, como en «Ana publicó una foto». Solo necesitás distinguir el acento para esta tarea.",true),
  stressTrial("s08","termino-initial",["tér","mi","no"],0,"TÉR-mi-no: término, como una palabra o expresión. Compará dónde cae el acento.",true),
  stressTrial("s09","termino-middle",["ter","mi","no"],1,"Ter-MI-no: termino, como en «yo termino ahora».",true),
  stressTrial("s10","termino-final",["ter","mi","nó"],2,"Ter-mi-NÓ: terminó, como en «Ana terminó». No hace falta explicar el tiempo verbal.",true),
  stressTrial("s11","hablo-present",["ha","blo"],0,"HA-blo: «yo hablo». La primera sílaba se destaca.",true),
  stressTrial("s12","hablo-past",["ha","bló"],1,"Ha-BLÓ: «Ana habló». Cambia el acento; la explicación del pasado es opcional.",true),
];

export const phoneticsLessons = {
  201:{
    title:"Cinco vocales, cinco sonidos",image:"/catalog-thumbnails/vowel-resonance.webp",theme:"vowels",
    outcome:"Que otra persona entienda las palabras que decís, manteniendo a, e, i, o, u estables.",
    trials:vowelTrials, coreCount:8, models:vowelModels.map(m=>`vowel-${m.vowel}`), phrases:["vowels-phrase-1","vowels-phrase-2","vowels-phrase-3"],
    route:["5 min · Escuchá los cinco modelos; repetí cada vocal en una palabra.","8 min · Compará e/i y a/o. Elegí dos vocales que necesiten atención.","12 min · Escuchas 1–8: primer intento, repetición con un foco y devolución breve.","10 min · Imitá una frase, ocultala y cambiá un detalle. Después dictá tres palabras.","5 min · Presentate sin leer y acordá una vocal para seguir practicando."],
    teacher:"A1, clase individual o pareja. No exige terminología fonética ni una variedad previa. Usá objetos o imágenes para explicar palabras desconocidas. Primero el oído, después la escritura. Si la distinción no sale, compará dos modelos y volvé a la palabra completa. Elegí pocas correcciones de calidad vocálica, sin pedir una voz idéntica a la grabación.",
    retrieval:"Sin mirar: repetí la frase y cambiá una palabra por algo de tu vida. Tu compañero repite lo que entendió.",
    closing:["Elegí tres palabras del recorrido sin escribirlas. Decilas para que tu compañero las repita; si entiende otra vocal, escuchá el modelo y probá otra vez.","Presentate en dos frases: tu nombre, dónde vivís o algo que te gusta. El profe elige una vocal para repetir dentro de tu propia frase.","Cambiá de rol. Cerrá diciendo qué vocal salió clara y cuál vas a practicar."],
    support:"Me llamo… / Vivo en… / Me gusta… / ¿Podés repetir?",
    criteria:["Se distinguen las vocales de las tres palabras elegidas.","Las vocales se mantienen estables, sin agregar otra al final.","El interlocutor entiende la frase personal; se puede pedir repetición."],
    homework:"Grabá diez palabras conocidas y una frase. Escuchalas, elegí dos palabras para repetir y compará ambas versiones con tu profe.",
  },
  202:{
    title:"El ritmo de las palabras",image:"/catalog-thumbnails/spanish-rhythm.webp",theme:"stress",
    outcome:"Hacer reconocible una palabra por su acento y usarla en una frase breve con pausas naturales.",
    trials:stressTrials, coreCount:4, models:["casa","papel","telefono","cafe"], phrases:["stress-phrase-1","stress-phrase-2"],
    route:["5 min · Escuchá casa, papel, teléfono y café antes de ver la sílaba destacada.","8 min · Repetí y marcá un pulso en el acento; compará una palabra con y otra sin tilde.","12 min · Escuchas 1–4. Volvé a escuchar con un foco. Si hay tiempo, elegí un solo grupo opcional.","10 min · Escuchá el intercambio, ocultá el texto y preguntá sobre un hábito real.","5 min · Contá una rutina en tres frases; el compañero repite la palabra que más se destacó."],
    teacher:"A1, clase individual o pareja. Basta reconocer palabras familiares; no exige conocer el pasado. Las escuchas 5–12 son un banco opcional de contraste, con significado mediado por el profe. Elegí público, término o hablo; no exijas dominar los tres grupos. El objetivo es oír y producir el acento, no aprobar reglas ortográficas.",
    retrieval:"Sin mirar: repetí la pregunta y respondé de verdad. Después cambiá café por otra bebida conocida.",
    closing:["Preguntá a tu compañero por un hábito real. Escuchá su respuesta y repetí una palabra importante con el mismo acento.","Contá tu rutina en tres frases cortas. Hacé pausas entre ideas; no golpees todas las sílabas ni intentes que duren lo mismo.","El profe elige una palabra de tu relato. Decila sola, después dentro de la frase, y cerrá repitiendo la frase a velocidad cómoda."],
    support:"¿Tomás…? / Sí, tomo… / No, tomo… / Por la mañana… / Después de clase…",
    criteria:["El acento de la palabra elegida permite reconocerla.","La palabra mantiene su acento dentro de la frase.","Las pausas separan ideas y el interlocutor entiende la rutina."],
    homework:"Grabá una presentación breve. Con el profe, elegí cinco sílabas tónicas en lo que dijiste; volvé a grabar con pausas cómodas, sin acelerar.",
  },
} as const;
