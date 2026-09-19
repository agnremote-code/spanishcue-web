import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La isla vota · Conversación B1 | SPANISHCUE",
  description: "Una simulación cívica B1 para negociar liderazgo, moneda, leyes, castigos, trabajos y recursos en ocho votaciones.",
};

export default function IslandVoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
