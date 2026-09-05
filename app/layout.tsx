import type { Metadata } from "next";
import "./globals.css";
import "./special.css";

export const metadata: Metadata = {
  title: "CHESPANISH Teacher Studio",
  description: "Biblioteca de clases de español argentino real.",
  other: { "codex-preview": "development" },
  metadataBase: new URL("https://biblioteca-espanol.agnremote.chatgpt.site"),
  openGraph: {
    title: "CHESPANISH Teacher Studio",
    description: "Clases visuales e interactivas para hablar español desde el primer minuto.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "El Mundo Fantástico · CHESPANISH Español A0" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHESPANISH Teacher Studio",
    description: "Clases visuales e interactivas para hablar español desde el primer minuto.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"><body>{children}</body></html>
  );
}
