import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Banco de Palabras · SPANISHCUE",
  description: "Una clase interactiva A2–B1 con 60 palabras y chunks, filtros, quiz, emparejamiento y producción oral.",
  openGraph: {
    title: "El Banco de Palabras · SPANISHCUE",
    description: "60 palabras y chunks en seis mundos cotidianos y cuatro modos de práctica.",
    images: [{ url: "/previews/word-bank-studio-v91.webp", width: 1672, height: 941 }],
  },
};

export default function BancoDePalabrasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
