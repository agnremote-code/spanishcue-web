import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ciudad en juego · Conversación B1 · SPANISHCUE",
  description: "Decisiones, prioridades, conflictos, cambios y negociación para construir y defender una ciudad en una clase conversacional B1.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
