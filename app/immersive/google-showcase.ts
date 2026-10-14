import {isFreeLesson} from '../access-policy';
import {lessons} from '../lesson-catalog';
import type {ShowcaseGroup} from './GoogleTeachersLanding';

// Real catalog entries only: title, level and path come from the catalog; the teacher lines are the landing's.
const SHOWCASE:{group:string;items:{id:number;image:string;student:string;teacher:string;preview?:string}[]}[]=[
 {group:'3D CONVERSATION',items:[
  {id:223,image:'/lp/noche-3d.webp',student:'Walks through a night city, reacts to real situations and talks about their own life.',teacher:'Share your screen, set a mission, then guide the conversation that each scene opens.',preview:'#tour'},
  {id:226,image:'/lp/bosque-3d.webp',student:'Jumps between twelve themed zones; every landing opens a question about preferences and opinions.',teacher:'Use it as a warm-up or a full speaking class; switch the level without leaving the forest.'},
  {id:238,image:'/reino/cover.webp',student:'Lives a fantasy quest with 5–8-turn conversations per character, written for each level.',teacher:'Pause the story with the teacher controls: hint, go deeper, close, continue.'},
 ]},
 {group:'INTERACTIVE GRAMMAR',items:[
  {id:40,image:'/grammar-worlds/noun-factory.webp',student:'Learns nouns, gender and number from zero inside a 3D factory, then practises in context.',teacher:'Theory first, then exploration, practice, listening, speaking and writing in one 45-minute route.'},
  {id:42,image:'/grammar-worlds/article-gallery.webp',student:'Chooses el, la, un, una, al and del while walking through a gallery of real references.',teacher:'Open it on screen and let the student tap; the class explains each mistake.'},
  {id:43,image:'/grammar-worlds/demonstrative-observatory.webp',student:'Points at objects, moments and ideas with este, ese and aquel.',teacher:'Follow the numbered sidebar: understand, explore, practise, listen, talk, write, close.'},
 ]},
 {group:'LISTENING',items:[
  {id:105,image:'/lp/hotel.webp',student:'Listens to a hotel that never works and answers questions with the help their level needs.',teacher:'Play the audio inside the lesson; questions unlock when the clip ends.'},
  {id:28,image:'/lp/latam.webp',student:'Hears accents from across Latin America and connects them with places and people.',teacher:'A ready listening class for A2 with transcript and tasks.'},
  {id:236,image:'/the-sound-map/preview.svg',student:'Explores six sound scenes in a 3D city; the help and the tasks change with the level.',teacher:'Seven listening routes, from recognising words to analysing irony.'},
 ]},
 {group:'HOMEWORK & PRACTICE',items:[
  {id:-1,image:'/lp/autoestudio.webp',student:'Works through weekly units A1–C2 covering reading, writing, listening and speaking.',teacher:'Assign a week, then see what each student did from your teacher panel.',preview:'/autoestudio'},
  {id:-2,image:'/lp/autoestudio.webp',student:'Keeps an error history that builds class by class.',teacher:'Open “Mis alumnos”: errors, difficulties and recommendations for the next class.',preview:'/demo/mis-alumnos'},
 ]},
];
const EXTRA:Record<number,{title:string;level:string;path:string}>={[-1]:{title:'Autoestudio',level:'A1–C2',path:'/autoestudio'},[-2]:{title:'Mis alumnos',level:'Teacher panel',path:'/demo/mis-alumnos'}};

export function showcase():ShowcaseGroup[]{
 return SHOWCASE.map(g=>({group:g.group,items:g.items.map(item=>{
  const lesson=lessons.find(l=>l.id===item.id);
  const base=lesson?{title:lesson.title,level:lesson.displayLevel??lesson.level,path:lesson.path??`/clase/${lesson.id}`}:EXTRA[item.id];
  const free=item.id<0?item.id===-2:isFreeLesson(item.id);
  return {...item,...base,free,preview:item.preview??(free?base.path:undefined)};
 })}));
}
