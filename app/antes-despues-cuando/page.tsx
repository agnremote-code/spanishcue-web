import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { antesDespuesCuando } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Antes, después, cuando · Gramática A2 · SPANISHCUE",
  description: antesDespuesCuando.subtitle,
};

export default function Page() {
  return <SyntaxLab data={antesDespuesCuando} />;
}
