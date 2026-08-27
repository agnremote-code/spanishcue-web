import type {Metadata} from "next";

export const metadata:Metadata={
  title:"La Ruleta de Tu Vida · CHESPANISH",
  description:"Una clase de conversación A1–A2 con 18 temas, tres preguntas por ronda y recursos bilingües de español argentino.",
};

export default function LifeRouletteLayout({children}:{children:React.ReactNode}){
  return children;
}
