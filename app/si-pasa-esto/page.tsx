import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { siPasaEsto } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Si pasa esto… · Gramática A2 · SPANISHCUE",
  description: siPasaEsto.subtitle,
};

export default function Page() {
  return <SyntaxLab data={siPasaEsto} />;
}
