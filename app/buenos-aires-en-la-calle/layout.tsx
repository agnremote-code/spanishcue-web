import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buenos Aires en la Calle · A2 | CHESPANISH",
  description: "Una ciudad 3D para practicar el español cotidiano de unas vacaciones en Buenos Aires, con 16 lugares, rioplatense real y modo tranquilo.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
