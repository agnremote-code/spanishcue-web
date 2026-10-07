import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { pronounCentral } from "../grammar-worlds/data-next";

export const metadata: Metadata = { title:"La Central de las Identidades | SPANISHCUE", description:"Clase A1–A2 sobre el tema 7 del PCIC: el pronombre." };
export default function Page(){ return <GrammarWorld data={pronounCentral} />; }
