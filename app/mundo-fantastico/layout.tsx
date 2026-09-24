import type { Metadata } from "next";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";

export const metadata: Metadata = {
  title: "El Mundo Fantástico A1 | SPANISHCUE",
  description: "Una aventura de conversación A1 por 6 continentes, 40 destinos, 400 preguntas bilingües y un wordbank completo.",
  alternates: { canonical: "/mundo-fantastico" },
  openGraph: {
    title: "El Mundo Fantástico · Español A1",
    description: "6 continentes, 40 mundos, 400 preguntas y un wordbank bilingüe completo para hablar desde cero.",
    images: [{ ...socialPreviewImage, alt: "El Mundo Fantástico · SPANISHCUE Español A1" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Mundo Fantástico · Español A1",
    description: "6 continentes, 40 mundos y vocabulario bilingüe completo para hablar desde cero.",
    images: [socialPreviewUrl],
  },
};

export default function MundoFantasticoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
