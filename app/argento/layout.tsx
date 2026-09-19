import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARGENTO · Vocabulario argentino A0–A1 | SPANISHCUE",
  description: "Doce mundos argentinos con apoyos visuales y bilingües para hablar desde el primer día.",
  alternates: {
    canonical: "https://spanishcue.com/argento",
    languages: {
      es: "https://spanishcue.com/argento",
      en: "https://spanishcue.com/argento?lang=en",
      "x-default": "https://spanishcue.com/argento",
    },
  },
  openGraph: {
    title: "ARGENTO · Vocabulario argentino A0–A1",
    description: "Doce mundos argentinos con apoyos visuales y bilingües para hablar desde el primer día.",
    url: "https://spanishcue.com/argento",
    images: ["/chespanish-guide-van.webp"],
  },
  robots: { index: true, follow: true },
};

export default function ArgentoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
