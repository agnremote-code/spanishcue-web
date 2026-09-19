import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"En Vivo en Diez Minutos · A2 | SPANISHCUE",
  description:"Simulación conversacional A2 de 45 minutos para priorizar problemas, proponer soluciones, negociar y reaccionar en equipo.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
