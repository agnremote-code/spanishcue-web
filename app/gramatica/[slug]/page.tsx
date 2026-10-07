import {notFound} from "next/navigation";
import {newGrammarEntries} from "../../grammar-classroom/catalog";
import GrammarPage, {grammarPageMetadata} from "../../grammar-classroom/GrammarPage";
type Props={params:Promise<{slug:string}>};
const find=(slug:string)=>newGrammarEntries.find(x=>x.path===`/gramatica/${slug}`);
export function generateStaticParams(){return newGrammarEntries.map(x=>({slug:x.path!.split("/").at(-1)}))}
export async function generateMetadata({params}:Props){const lesson=find((await params).slug);return lesson?grammarPageMetadata(lesson.id):{}}
export default async function Page({params}:Props){const lesson=find((await params).slug);if(!lesson)notFound();return <GrammarPage id={lesson.id}/>;}
