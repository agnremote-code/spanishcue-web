import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { siFueraDistinto } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Si fuera distinto… · Gramática B2 · SPANISHCUE",
  description: siFueraDistinto.subtitle,
};

export default function Page() {
  return <SyntaxLab data={siFueraDistinto} />;
}
