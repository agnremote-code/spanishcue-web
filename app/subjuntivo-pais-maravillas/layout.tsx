import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El País del Subjuntivo · Gramática completa | SPANISHCUE",
  description: "Clase maestra C1 sobre todos los tiempos del subjuntivo español: teoría desde cero, conjugación, contrastes, práctica y conversación.",
};

export default function SubjuntivoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
