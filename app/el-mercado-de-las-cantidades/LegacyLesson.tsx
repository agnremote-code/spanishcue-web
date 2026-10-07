import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { quantityMarket } from "../grammar-worlds/data";

export const metadata: Metadata = {
  title: "El Mercado de las Cantidades | SPANISHCUE",
  description: "Clase A1 sobre el tema 6 del PCIC: los cuantificadores.",
};

export default function Page() {
  return <GrammarWorld data={quantityMarket} />;
}
