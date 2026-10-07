import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { ideasDentroDeIdeas } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Ideas dentro de ideas · Gramática A1 · SPANISHCUE",
  description: ideasDentroDeIdeas.subtitle,
};

export default function Page() {
  return <SyntaxLab data={ideasDentroDeIdeas} />;
}
