import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { nounFactory } from "../grammar-worlds/data";

export const metadata: Metadata = { title: "La Fábrica de los Nombres · CHESPANISH", description: nounFactory.subtitle };
export default function Page() { return <GrammarWorld data={nounFactory} />; }
