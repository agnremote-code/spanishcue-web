import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { oracionFlexible } from "../phrase-labs/data";

export const metadata: Metadata = {
  title: "La Sala de las Posiciones · Gramática A2 · SPANISHCUE",
  description: oracionFlexible.subtitle,
};

export default function Page() {
  return <PhraseLab data={oracionFlexible} />;
}
