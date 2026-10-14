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

type Seed={id:number;image:string;student:string;teacher:string;action?:ShowcaseItem['action']};
const CATEGORIES:{key:ShowcaseCategory['key'];label:string;student:string;teacher:string;video:ShowcaseCategory['video'];featured:Seed;samples:Seed[]}[]=[
 {key:'conversation',label:'3D CONVERSATION',
  student:'Walks into a real situation, chooses what to say and answers a question about their own life.',
  teacher:'A speaking class that runs itself on your shared screen while you guide the conversation.',
  video:{src:'/brand/campaign/noche-demo.mp4',poster:'/brand/campaign/noche-demo-poster.webp',seconds:8,caption:'Real gameplay of Noche Abierta: the student reaches a venue and a conversation opens.'},
  featured:{id:223,image:'/lp/noche-3d.webp',student:'Walks through a night city, reacts to real situations and talks about their own life.',teacher:'Set a mission, then guide the conversation that each scene opens.',action:'tour'},
  samples:[
   {id:226,image:'/lp/bosque-3d.webp',student:'Jumps between twelve themed zones; every landing opens a question about preferences and opinions.',teacher:'A warm-up or a full speaking class; switch the level without leaving the forest.'},
   {id:238,image:'/reino/cover.webp',student:'Lives a fantasy quest with 5–8-turn conversations per character, written for each level.',teacher:'Pause the story with the teacher controls: hint, go deeper, close, continue.'},
  ]},
 {key:'grammar',label:'INTERACTIVE GRAMMAR',
  student:'Reads the rule, taps the answers, sees why each one is right or wrong.',
  teacher:'Theory first, then practice, listening, speaking and writing on one numbered route you follow in class.',
  video:{src:'/lp/demos/grammar.mp4',poster:'/lp/demos/grammar.webp',seconds:12,caption:'Real recording of La fábrica de los nombres (A1, free): the rule, an exercise and the answers.'},
  featured:{id:40,image:'/lp/fabrica.webp',student:'Learns nouns, gender and number from zero, then practises in context.',teacher:'Open it and teach: understand, explore, practise, listen, talk, write, close.',action:'link'},
  samples:[
   {id:48,image:'/grammar-worlds/verb-city.webp',student:'Chooses ser, estar or hay to describe people and places and gets feedback on each answer.',teacher:'A1 class on the classic problem, ready to share.',action:'pro-preview'},
   {id:230,image:'/grammar-worlds/adverb-tower.webp',student:'Explains how long things have been going on with desde and hace.',teacher:'A2 class in the live format, with automatic writing review.',action:'pro-preview'},
  ]},
 {key:'listening',label:'LISTENING',
  student:'Listens twice to a real recording, answers the questions, then reads the transcript.',
  teacher:'Audio, tasks and transcript inside one page: no files to download, nothing to prepare.',
  video:{src:'/lp/demos/listening.mp4',poster:'/lp/demos/listening.webp',seconds:14,caption:'Real recording of El hotel de lo imposible (A2, free): a room, the player and the comprehension task.'},
  featured:{id:105,image:'/lp/hotel.webp',student:'Listens to a hotel where nothing works and answers questions with the help their level needs.',teacher:'Play the audio inside the lesson; the questions unlock after two listens.',action:'link'},
  samples:[
   {id:28,image:'/lp/latam.webp',student:'Hears accents from across Latin America and connects them with places and people.',teacher:'A ready A2 listening class with transcript and tasks.'},
   {id:236,image:'/lp/noche-3d.webp',student:'Explores six sound scenes in a 3D city; the help and the tasks change with the level.',teacher:'Seven listening routes, from recognising words to analysing irony.',action:'pro'},
  ]},
 {key:'homework',label:'HOMEWORK & STUDENT PROGRESS',
  student:'Works through a weekly unit between classes: reading, writing, listening and speaking.',
  teacher:'Assign a week, then open your students panel: classes, errors and what to prepare next.',
  video:{src:'/lp/demos/homework.mp4',poster:'/lp/demos/homework.webp',seconds:14,caption:'Real recording: a student completes an A1 week in Autoestudio, then the teacher panel (demo data) records the class.'},
  featured:{id:-1,image:'/lp/autoestudio.webp',student:'Works through weekly units A1–C2; weeks 1 and 2 of A1 are free.',teacher:'Assign a week, then see what each student did from your teacher panel.',action:'link'},
  samples:[
   {id:-2,image:'/lp/autoestudio.webp',student:'Keeps an error history that builds class by class.',teacher:'Open “Mis alumnos” (demo with fictional data): errors, difficulties and recommendations.',action:'link'},
  ]},
];
const EXTRA:Record<number,{title:string;level:string;path:string}>={[-1]:{title:'Autoestudio',level:'A1–C2',path:'/autoestudio'},[-2]:{title:'Mis alumnos',level:'Teacher panel',path:'/demo/mis-alumnos'}};

function resolve(seed:Seed):ShowcaseItem{
 const lesson=lessons.find(l=>l.id===seed.id);
 const base=lesson?{title:lesson.title,level:lesson.displayLevel??lesson.level,path:lesson.path??`/clase/${lesson.id}`}:EXTRA[seed.id];
 const free=seed.id<0?true:isFreeLesson(seed.id);
 const action=seed.action??(free?'link':'pro');
 return {id:seed.id,image:seed.image,student:seed.student,teacher:seed.teacher,...base,free,action:free&&action==='pro-preview'?'link':action};
}

export function showcase():ShowcaseCategory[]{
 return CATEGORIES.map(c=>({key:c.key,label:c.label,student:c.student,teacher:c.teacher,video:c.video,featured:resolve(c.featured),samples:c.samples.map(resolve)}));
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
