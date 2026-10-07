import {notFound} from "next/navigation";
import VerbLessonPage from "../../verbal-system/VerbLesson";
import {verbalLessonBySlug,verbalLessons} from "../../verbal-system/lesson-data";
import GrammarPage, {grammarPageMetadata, type GrammarPageProps} from "../../grammar-classroom/GrammarPage";

type Props=GrammarPageProps&{params:Promise<{slug:string}>};
export function generateStaticParams(){return verbalLessons.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:Props){const {slug}=await params;const lesson=verbalLessonBySlug.get(slug);return lesson?grammarPageMetadata(lesson.id):{}}
export default async function Page({params,searchParams}:Props){const {slug}=await params;const lesson=verbalLessonBySlug.get(slug);if(!lesson)notFound();const query=await searchParams;return <GrammarPage id={lesson.id} reference={query?.reference==="1"}><VerbLessonPage lesson={lesson}/></GrammarPage>}
