import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { verbosConConexion } from "../phrase-labs/data-advanced";

export const metadata: Metadata = {
  title: "El Panel de Conexiones · Gramática B2 · SPANISHCUE",
  description: verbosConConexion.subtitle,
};

export default function Page() {
  return <PhraseLab data={verbosConConexion} />;
}
