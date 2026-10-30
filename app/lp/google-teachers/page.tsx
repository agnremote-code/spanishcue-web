import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {fullAccessFromHeaders,localLessonPath,signedInFromHeaders} from '../../access-policy';
import {lessons} from '../../lesson-catalog';
import {localeFromHeaders} from '../../i18n/messages';
import {demoContent} from '../../immersive/demo-content.mjs';
import GoogleTeachersLanding,{type FreeGrammarClass} from '../../immersive/GoogleTeachersLanding';
import type {TourSpot} from '../../immersive/GuidedTour';
import {proPreviews,showcase} from '../../immersive/google-showcase';
import '../../immersive/immersive.css';
import '../../immersive/google-teachers.css';

/** Google Search campaign landing for teachers. Campaign-only: noindex, follow, like every /lp page. Spanish by default, English from the switcher or ?lang=en. */
export async function generateMetadata():Promise<Metadata>{
 const es=localeFromHeaders(await headers())==='es';
 return {
  title:es?'Clases de español interactivas para profes online. Listas para dar. | SPANISHCUE':'Interactive Spanish Lessons for Online Teachers. Ready to Teach. | SPANISHCUE',
  description:es?'Deja de preparar clases de español desde cero. Mundos de conversación 3D, gramática interactiva, escucha y tareas para profes de español online, A1–C2. Prueba gratis una clase de gramática por nivel.':'Stop preparing Spanish lessons from scratch. 3D conversation worlds, interactive grammar, listening and homework for online Spanish teachers, A1–C2. Try PRO for US$2.',
  robots:{index:false,follow:true},
  alternates:{canonical:'https://spanishcue.com/lp/google-teachers'},
 };
}

const TOUR_LEVEL='A2';
/** PRO grammar classes previewed on the landing: one rule and one exercise each, cut on the server. */
const PREVIEW_IDS=[48,230];
/** One FREE grammar class per level, A1 → C2 (access-policy samplesByCategory): the campaign offer. */
const FREE_GRAMMAR_IDS=[40,350,389,439,468,515];

export default async function Page(){
 const h=await headers();const es=localeFromHeaders(h)==='es';
 const content=demoContent(TOUR_LEVEL)!;
 const cafe=content.locations.find(l=>l.id==='cafe')!;
 // Driving mode: one activity per free place, trimmed to the fields the stage shows.
 // PRO venues arrive without activities (demo-content.mjs strips them), so only free venues become tour stops.
 const spots:TourSpot[]=content.locations.filter(l=>!l.locked&&l.activities.length>0).map(l=>{const a=l.activities.find(x=>x.options?.length&&x.close)??l.activities[0];return {id:l.id,name:l.name,activity:{id:a.id,title:a.title,situation:a.situation,prompt:a.prompt,options:a.options,close:a.close,teacher:a.teacher,says:a.says,ask:a.ask}};});
 const freeGrammar:FreeGrammarClass[]=FREE_GRAMMAR_IDS.map(id=>lessons.find(l=>l.id===id)).filter(l=>l!==undefined).map(l=>({id:l.id,level:l.level,title:l.title,href:localLessonPath(l)??`/clase/${l.id}`}));
 return <GoogleTeachersLanding freeGrammar={freeGrammar} pro={fullAccessFromHeaders(h)} signedIn={signedInFromHeaders(h)} cafe={cafe} spots={spots} level={TOUR_LEVEL} showcase={showcase(es)} previews={proPreviews(PREVIEW_IDS)} />;
}
