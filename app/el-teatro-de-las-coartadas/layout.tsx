import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El Teatro de las Coartadas · A2 | SPANISHCUE",
  description:"Misterio conversacional A2 de 45 minutos para contar hechos pasados, pedir aclaraciones, comparar versiones y justificar una conclusión.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
