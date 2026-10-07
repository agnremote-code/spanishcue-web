import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { precisionEditorial } from "../phrase-labs/data-advanced";

export const metadata: Metadata = {
  title: "La Mesa del Editor · Gramática B2 · SPANISHCUE",
  description: precisionEditorial.subtitle,
};

export default function Page() {
  return <PhraseLab data={precisionEditorial} />;
}
