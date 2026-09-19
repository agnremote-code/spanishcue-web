import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "De eso sí hablo · Tablero de conversación B1 · SPANISHCUE",
  description: "72 preguntas B1 con historias, experiencias, lugares, aprendizajes y planes para una conversación guiada de 45 minutos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
