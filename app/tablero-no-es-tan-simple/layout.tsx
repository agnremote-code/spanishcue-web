import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No es tan simple · Tablero de conversación B2 · SPANISHCUE",
  description: "72 preguntas B2 para desarrollar experiencias, argumentos, contrastes y revisión de postura durante una clase de 45 minutos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
