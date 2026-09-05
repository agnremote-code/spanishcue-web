import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { possessionHouse } from "../grammar-worlds/data";

export const metadata: Metadata = {
  title: "La Casa de las Pertenencias | CHESPANISH",
  description: "Clase A1 sobre el tema 5 del PCIC: los posesivos.",
};

export default function Page() {
  return <GrammarWorld data={possessionHouse} />;
}
