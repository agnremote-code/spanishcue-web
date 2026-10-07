import type { Metadata } from "next";
import SyntaxLab from "../syntax-labs/SyntaxLab";
import { laPersonaQueTengoEnMente } from "../syntax-labs/data";

export const metadata: Metadata = {
  title: "La persona que tengo en mente · Gramática B1 · SPANISHCUE",
  description: laPersonaQueTengoEnMente.subtitle,
};

export default function Page() {
  return <SyntaxLab data={laPersonaQueTengoEnMente} />;
}
