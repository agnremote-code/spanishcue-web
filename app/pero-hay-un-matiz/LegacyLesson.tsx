import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { peroHayUnMatiz } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "Pero hay un matiz · Gramática B1 · SPANISHCUE",
  description: peroHayUnMatiz.subtitle,
};

export default function Page() {
  return <SyntaxLab data={peroHayUnMatiz} />;
}
