import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { agreementAtelier } from "../grammar-worlds/data";

export const metadata: Metadata = { title: "El Atelier de la Concordancia · SPANISHCUE", description: agreementAtelier.subtitle };
export default function Page() { return <GrammarWorld data={agreementAtelier} />; }
