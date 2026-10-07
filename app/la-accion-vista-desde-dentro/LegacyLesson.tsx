import type { Metadata } from "next";
import C1Lab from "../phrase-labs/C1Lab";
import { arquitecturaVerbalC1 } from "../phrase-labs/data-c1";

export const metadata: Metadata = {
  title: "La Cámara de la Acción · Gramática C1 · SPANISHCUE",
  description: arquitecturaVerbalC1.subtitle,
};

export default function Page() {
  return <C1Lab data={arquitecturaVerbalC1}/>;
}
