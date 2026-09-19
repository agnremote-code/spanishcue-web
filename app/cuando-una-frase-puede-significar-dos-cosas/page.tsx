import type { Metadata } from "next";
import C1Lab from "../phrase-labs/C1Lab";
import { ambiguedadC1 } from "../phrase-labs/data-c1";

export const metadata: Metadata = {
  title: "El Archivo de las Dos Lecturas · Gramática C1 · SPANISHCUE",
  description: ambiguedadC1.subtitle,
};

export default function Page() {
  return <C1Lab data={ambiguedadC1}/>;
}
