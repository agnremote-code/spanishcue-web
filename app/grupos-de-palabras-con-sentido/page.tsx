import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { gruposConSentido } from "../phrase-labs/data";

export const metadata: Metadata = {
  title: "El Taller de las Capas · Gramática A1 · SPANISHCUE",
  description: gruposConSentido.subtitle,
};

export default function Page() {
  return <PhraseLab data={gruposConSentido} />;
}
