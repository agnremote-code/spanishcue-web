import type { Metadata } from "next";
import PhraseLab from "../phrase-labs/PhraseLab";
import { perifrasesDeCambio } from "../phrase-labs/data-advanced";

export const metadata: Metadata = {
  title: "La Línea de los Cambios · Gramática B1 · SPANISHCUE",
  description: perifrasesDeCambio.subtitle,
};

export default function Page() {
  return <PhraseLab data={perifrasesDeCambio} />;
}
