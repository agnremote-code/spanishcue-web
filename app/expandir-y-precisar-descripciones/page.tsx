import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { describirConPrecision } from "../phrase-labs/data";

export const metadata: Metadata = {
  title: "El Estudio del Detalle · Gramática A2 · SPANISHCUE",
  description: describirConPrecision.subtitle,
};

export default function Page() {
  return <PhraseLab data={describirConPrecision} />;
}
