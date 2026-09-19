import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La Agencia de Vidas Paralelas · Conversación C1 · SPANISHCUE",
  description:"Una experiencia conversacional C1 de 45 minutos para explorar decisiones, consecuencias y costos ocultos, entrevistar una vida alternativa y negociar una única modificación.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
