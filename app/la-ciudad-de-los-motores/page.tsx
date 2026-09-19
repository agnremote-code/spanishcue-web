import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { verbCity } from "../grammar-worlds/data-next";

export const metadata: Metadata = { title:"La Ciudad de los Motores | SPANISHCUE", description:"Clase A1–A2 sobre el tema 9 del PCIC: el verbo." };
export default function Page(){ return <GrammarWorld data={verbCity} />; }
