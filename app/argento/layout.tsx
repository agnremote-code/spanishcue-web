import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARGENTO · Vocabulario argentino A1 | SPANISHCUE",
  description: "Doce mundos argentinos con apoyos visuales y bilingües para hablar desde el primer día.",
  // One Spanish document; the English UI is a toggle, not a second URL, so no hreflang.
  alternates: { canonical: "https://spanishcue.com/argento" },
  openGraph: {
    title: "ARGENTO · Vocabulario argentino A1",
    description: "Doce mundos argentinos con apoyos visuales y bilingües para hablar desde el primer día.",
    url: "https://spanishcue.com/argento",
    images: ["/chespanish-guide-van.webp"],
  },
  robots: { index: true, follow: true },
};

export default function ArgentoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
