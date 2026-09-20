import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MÉXICO · 32 formas de vivir | SPANISHCUE",
  description: "Un mapa interactivo de las 32 entidades de México con 160 preguntas B1 para conversar, comparar y diseñar tu México ideal.",
  alternates: { canonical: "/mexico" },
};

export default function MexicoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
