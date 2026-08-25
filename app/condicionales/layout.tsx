import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Multiverso del Si · Condicionales en español | CHESPANISH",
  description: "Clase bilingüe A1–C1 sobre todos los condicionales del español, con teoría, conjugaciones completas, práctica y producción oral.",
};

export default function CondicionalesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
