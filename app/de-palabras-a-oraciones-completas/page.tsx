import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { oracionesCompletas } from "../phrase-labs/data";

export const metadata: Metadata = {
  title: "La Mesa de Montaje · Gramática A1 · SPANISHCUE",
  description: oracionesCompletas.subtitle,
};

export default function Page() {
  return <PhraseLab data={oracionesCompletas} />;
}
