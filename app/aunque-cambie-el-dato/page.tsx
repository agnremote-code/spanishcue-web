import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { aunqueCambieElDato } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Aunque cambie el dato… · Gramática B2 · SPANISHCUE",
  description: aunqueCambieElDato.subtitle,
};

export default function Page() {
  return <SyntaxLab data={aunqueCambieElDato} />;
}
