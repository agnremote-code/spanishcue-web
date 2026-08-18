import type { Metadata } from "next";
import "./globals.css";
import "./special.css";

export const metadata: Metadata = {
  title: "CHESPANISH Teacher Studio",
  description: "Biblioteca de clases de español argentino real.",
  other: {
    "codex-preview": "development",
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
