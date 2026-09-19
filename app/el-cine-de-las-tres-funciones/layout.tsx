import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El Cine de las Tres Funciones · A1 | SPANISHCUE",
  description:"Clase conversacional A1 de 45 minutos para invitar, decir horarios, acordar un plan y responder a cambios simples.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
