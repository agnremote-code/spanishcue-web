import {isFreeLesson} from '../access-policy';
import {lessons} from '../lesson-catalog';
import {getClassroomLesson} from '../grammar-classroom/lessons';

/** One real lesson in the landing showcase. Title, level and path come from the catalog; the teacher lines are the landing's. */
export type ShowcaseItem={id:number;title:string;level:string;path:string;image:string;student:string;teacher:string;free:boolean;
 /** 'tour' plays the guided city lesson; 'pro-preview' opens the server-limited preview; 'link' opens the free lesson or demo itself. */
 action:'tour'|'pro-preview'|'link'|'pro'};
export type ShowcaseCategory={
 key:'conversation'|'grammar'|'listening'|'homework';
 label:string;
 /** One sentence a teacher reads first: what the student does. */
 student:string;
 /** What the teacher gets from it. */
 teacher:string;
 /** Real product recording (muted) with its poster; both served from /public. */
 video:{src:string;poster:string;seconds:number;caption:string};
 featured:ShowcaseItem;
 samples:ShowcaseItem[];
};
export type ShowcaseGroup={group:string;items:ShowcaseItem[]};

/** A server-limited fragment of a PRO grammar class: one rule and one checked exercise, nothing else leaves the server. */
export type ProPreviewFragment={
 id:number;title:string;level:string;topic:string;path:string;
 rule:{title:string;form:string;meaning:string;examples:string[]};
 exercise:{prompt:string;options:string[];answers:number[];explanation:string};
 /** Stages of the full class that stay locked, in order. */
 locked:string[];
};

type L={en:string;es:string};
type Seed={id:number;image:string;student:L;teacher:L;action?:ShowcaseItem['action']};
type Category={key:ShowcaseCategory['key'];label:L;student:L;teacher:L;video:{src:string;poster:string;seconds:number;caption:L};featured:Seed;samples:Seed[]};
const CATEGORIES:Category[]=[
 {key:'grammar',label:{en:'INTERACTIVE GRAMMAR',es:'GRAMÁTICA INTERACTIVA'},
  student:{en:'Reads the rule, taps the answers, sees why each one is right or wrong.',es:'Lee la regla, toca las respuestas y ve por qué cada una está bien o mal.'},
  teacher:{en:'Theory first, then practice, listening, speaking and writing on one numbered route you follow in class.',es:'Primero la teoría, después práctica, escucha, habla y escritura en una ruta numerada que sigues en clase.'},
  video:{src:'/lp/demos/grammar.mp4',poster:'/lp/demos/grammar.webp',seconds:12,caption:{en:'Real recording of La fábrica de los nombres (A1, free): the rule, an exercise and the answers.',es:'Grabación real de La fábrica de los nombres (A1, gratis): la regla, un ejercicio y las respuestas.'}},
  featured:{id:40,image:'/lp/fabrica.webp',student:{en:'Learns nouns, gender and number from zero, then practises in context.',es:'Aprende sustantivos, género y número desde cero y después practica en contexto.'},teacher:{en:'Open it and teach: understand, explore, practise, listen, talk, write, close.',es:'La abres y das la clase: entender, explorar, practicar, escuchar, hablar, escribir, cerrar.'},action:'link'},
  samples:[
   {id:48,image:'/grammar-worlds/verb-city.webp',student:{en:'Chooses ser, estar or hay to describe people and places and gets feedback on each answer.',es:'Elige ser, estar o hay para describir personas y lugares y recibe corrección en cada respuesta.'},teacher:{en:'A1 class on the classic problem, ready to share.',es:'Clase A1 sobre el problema clásico, lista para compartir.'},action:'pro-preview'},
   {id:230,image:'/grammar-worlds/adverb-tower.webp',student:{en:'Explains how long things have been going on with desde and hace.',es:'Explica desde cuándo pasan las cosas con desde y hace.'},teacher:{en:'A2 class in the live format, with automatic writing review.',es:'Clase A2 en formato en vivo, con revisión automática de la escritura.'},action:'pro-preview'},
  ]},
 {key:'conversation',label:{en:'3D CONVERSATION',es:'CONVERSACIÓN 3D'},
  student:{en:'Walks into a real situation, chooses what to say and answers a question about their own life.',es:'Entra en una situación real, elige qué decir y responde una pregunta sobre su propia vida.'},
  teacher:{en:'A speaking class that runs itself on your shared screen while you guide the conversation.',es:'Una clase de conversación que avanza sola en tu pantalla compartida mientras tú guías la charla.'},
  video:{src:'/brand/campaign/noche-demo.mp4',poster:'/brand/campaign/noche-demo-poster.webp',seconds:8,caption:{en:'Real gameplay of Noche Abierta: the student reaches a venue and a conversation opens.',es:'Juego real de Noche Abierta: el alumno llega a un lugar y se abre una conversación.'}},
  featured:{id:223,image:'/lp/noche-3d.webp',student:{en:'Walks through a night city, reacts to real situations and talks about their own life.',es:'Recorre una ciudad de noche, reacciona a situaciones reales y habla de su propia vida.'},teacher:{en:'Set a mission, then guide the conversation that each scene opens.',es:'Das una misión y guías la conversación que abre cada escena.'},action:'tour'},
  samples:[
   {id:226,image:'/lp/bosque-3d.webp',student:{en:'Jumps between twelve themed zones; every landing opens a question about preferences and opinions.',es:'Salta entre doce zonas temáticas; cada aterrizaje abre una pregunta sobre gustos y opiniones.'},teacher:{en:'A warm-up or a full speaking class; switch the level without leaving the forest.',es:'Un calentamiento o una clase de conversación entera; cambias el nivel sin salir del bosque.'}},
   {id:238,image:'/reino/cover.webp',student:{en:'Lives a fantasy quest with 5–8-turn conversations per character, written for each level.',es:'Vive una aventura de fantasía con conversaciones de 5–8 turnos por personaje, escritas para cada nivel.'},teacher:{en:'Pause the story with the teacher controls: hint, go deeper, close, continue.',es:'Pausas la historia con los controles del profe: pista, profundizar, cerrar, continuar.'}},
  ]},
 {key:'listening',label:{en:'LISTENING',es:'COMPRENSIÓN AUDITIVA'},
  student:{en:'Listens twice to a real recording, answers the questions, then reads the transcript.',es:'Escucha dos veces una grabación real, responde las preguntas y después lee la transcripción.'},
  teacher:{en:'Audio, tasks and transcript inside one page: no files to download, nothing to prepare.',es:'Audio, tareas y transcripción en una sola página: nada que descargar, nada que preparar.'},
  video:{src:'/lp/demos/listening.mp4',poster:'/lp/demos/listening.webp',seconds:14,caption:{en:'Real recording of El hotel de lo imposible (A2, free): a room, the player and the comprehension task.',es:'Grabación real de El hotel de lo imposible (A2, gratis): una habitación, el reproductor y la tarea de comprensión.'}},
  featured:{id:105,image:'/lp/hotel.webp',student:{en:'Listens to a hotel where nothing works and answers questions with the help their level needs.',es:'Escucha un hotel donde nada funciona y responde preguntas con la ayuda que pide su nivel.'},teacher:{en:'Play the audio inside the lesson; the questions unlock after two listens.',es:'Reproduces el audio dentro de la clase; las preguntas se desbloquean tras dos escuchas.'},action:'link'},
  samples:[
   {id:28,image:'/lp/latam.webp',student:{en:'Hears accents from across Latin America and connects them with places and people.',es:'Oye acentos de toda Latinoamérica y los conecta con lugares y personas.'},teacher:{en:'A ready A2 listening class with transcript and tasks.',es:'Una clase de escucha A2 lista, con transcripción y tareas.'}},
   {id:236,image:'/lp/noche-3d.webp',student:{en:'Explores six sound scenes in a 3D city; the help and the tasks change with the level.',es:'Explora seis escenas sonoras en una ciudad 3D; la ayuda y las tareas cambian con el nivel.'},teacher:{en:'Seven listening routes, from recognising words to analysing irony.',es:'Siete rutas de escucha, de reconocer palabras a analizar la ironía.'},action:'pro'},
  ]},
 {key:'homework',label:{en:'HOMEWORK & STUDENT PROGRESS',es:'TAREAS Y PROGRESO DEL ALUMNO'},
  student:{en:'Works through a weekly unit between classes: reading, writing, listening and speaking.',es:'Hace una unidad semanal entre clases: lectura, escritura, escucha y habla.'},
  teacher:{en:'Assign a week, then open your students panel: classes, errors and what to prepare next.',es:'Asignas una semana y abres tu panel de alumnos: clases, errores y qué preparar después.'},
  video:{src:'/lp/demos/homework.mp4',poster:'/lp/demos/homework.webp',seconds:14,caption:{en:'Real recording: a student completes an A1 week in Autoestudio, then the teacher panel (demo data) records the class.',es:'Grabación real: un alumno completa una semana A1 en Autoestudio y el panel del profe (datos de demo) registra la clase.'}},
  featured:{id:-1,image:'/lp/autoestudio.webp',student:{en:'Works through weekly units A1–C2; weeks 1 and 2 of A1 are free.',es:'Hace unidades semanales A1–C2; las semanas 1 y 2 de A1 son gratis.'},teacher:{en:'Assign a week, then see what each student did from your teacher panel.',es:'Asignas una semana y ves qué hizo cada alumno desde tu panel.'},action:'link'},
  samples:[
   {id:-2,image:'/lp/autoestudio.webp',student:{en:'Keeps an error history that builds class by class.',es:'Guarda un historial de errores que crece clase a clase.'},teacher:{en:'Open “Mis alumnos” (demo with fictional data): errors, difficulties and recommendations.',es:'Abre «Mis alumnos» (demo con datos ficticios): errores, dificultades y recomendaciones.'},action:'link'},
  ]},
];
const EXTRA=(es:boolean):Record<number,{title:string;level:string;path:string}>=>({[-1]:{title:'Autoestudio',level:'A1–C2',path:'/autoestudio'},[-2]:{title:'Mis alumnos',level:es?'Panel del profe':'Teacher panel',path:'/demo/mis-alumnos'}});

const pick=(l:L,es:boolean)=>es?l.es:l.en;
function resolve(seed:Seed,es:boolean):ShowcaseItem{
 const lesson=lessons.find(l=>l.id===seed.id);
 const base=lesson?{title:lesson.title,level:lesson.displayLevel??lesson.level,path:lesson.path??`/clase/${lesson.id}`}:EXTRA(es)[seed.id];
 const free=seed.id<0?true:isFreeLesson(seed.id);
 const action=seed.action??(free?'link':'pro');
 return {id:seed.id,image:seed.image,student:pick(seed.student,es),teacher:pick(seed.teacher,es),...base,free,action:free&&action==='pro-preview'?'link':action};
}

/** The showcase in the page's language; lesson titles stay as the catalog names them. */
export function showcase(es=false):ShowcaseCategory[]{
 return CATEGORIES.map(c=>({key:c.key,label:pick(c.label,es),student:pick(c.student,es),teacher:pick(c.teacher,es),video:{...c.video,caption:pick(c.video.caption,es)},featured:resolve(c.featured,es),samples:c.samples.map(x=>resolve(x,es))}));
}

const FULL_STAGES=['Understand','Explore','Practise','Listen','Talk','Write','Close'];
/**
 * Builds the PRO previews on the server: for each PRO grammar class, the first
 * rule and the first checked exercise. The rest of the class never reaches the
 * browser; the page itself stays protected by the Worker.
 */
export function proPreviews(ids:number[]):ProPreviewFragment[]{
 const out:ProPreviewFragment[]=[];
 for(const id of ids){
  if(isFreeLesson(id))continue;
  const lesson=getClassroomLesson(id);const catalog=lessons.find(l=>l.id===id);
  if(!lesson||!catalog?.path)continue;
  const rule=lesson.grammar[0];const exercise=lesson.practice.find(e=>e.kind==='choice');
  if(!rule||!exercise||exercise.kind!=='choice')continue;
  out.push({id,title:catalog.title,level:catalog.displayLevel??catalog.level,topic:lesson.topic,path:catalog.path,
   rule:{title:rule.title,form:rule.form,meaning:rule.meaning,examples:rule.examples.slice(0,2)},
   exercise:{prompt:exercise.prompt,options:exercise.options,answers:exercise.answers,explanation:exercise.explanation},
   locked:FULL_STAGES.slice(2)});
 }
 return out;
}
