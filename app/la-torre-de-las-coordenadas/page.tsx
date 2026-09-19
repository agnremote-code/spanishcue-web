import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { adverbTower } from "../grammar-worlds/data-next";

export const metadata: Metadata = { title:"La Torre de las Coordenadas | SPANISHCUE", description:"Clase A1–A2 sobre el tema 8 del PCIC: el adverbio y las locuciones adverbiales." };
export default function Page(){ return <GrammarWorld data={adverbTower} />; }
