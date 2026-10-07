import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { decirSinRepetir } from "../phrase-labs/data-advanced";

export const metadata: Metadata = {
  title: "El Laboratorio de la Segunda Versión · Gramática B1 · SPANISHCUE",
  description: decirSinRepetir.subtitle,
};

export default function Page() {
  return <PhraseLab data={decirSinRepetir} />;
}
