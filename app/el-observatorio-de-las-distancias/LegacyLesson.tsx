import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { demonstrativeObservatory } from "../grammar-worlds/data";

export const metadata: Metadata = {
  title: "El Observatorio de las Distancias | SPANISHCUE",
  description: "Clase A1 sobre el tema 4 del PCIC: los demostrativos.",
};

export default function Page() {
  return <GrammarWorld data={demonstrativeObservatory} />;
}
