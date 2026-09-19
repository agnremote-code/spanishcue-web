import type {Metadata} from "next";
import {notFound} from "next/navigation";
import VerbLessonPage from "../../verbal-system/VerbLesson";
import {verbalLessonBySlug,verbalLessons} from "../../verbal-system/lesson-data";

export function generateStaticParams(){return verbalLessons.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const lesson=verbalLessonBySlug.get(slug);if(!lesson)return{};return{title:`${lesson.title} · ${lesson.level} | SPANISHCUE`,description:`Clase de 45 minutos sobre ${lesson.title.toLowerCase()}: formación, usos, contrastes, práctica y conversación.`}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const lesson=verbalLessonBySlug.get(slug);if(!lesson)notFound();return <VerbLessonPage lesson={lesson}/>}
