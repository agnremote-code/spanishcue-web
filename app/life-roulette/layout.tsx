import type {Metadata} from "next";

export const metadata:Metadata={
  title:"La Ruleta de Tu Vida · CHESPANISH",
  description:"Una clase de conversación A2 con 17 temas potentes, 51 preguntas diferentes, un desafío argentino y recursos bilingües.",
};

export default function LifeRouletteLayout({children}:{children:React.ReactNode}){
  return children;
}
