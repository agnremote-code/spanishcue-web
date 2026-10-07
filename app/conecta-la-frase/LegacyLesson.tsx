import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { conectaLaFrase } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Conecta la frase · Gramática A1 · SPANISHCUE",
  description: conectaLaFrase.subtitle,
};

export default function Page() {
  return <SyntaxLab data={conectaLaFrase} />;
}
