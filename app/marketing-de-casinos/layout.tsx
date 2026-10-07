import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Marketing de casinos: decisiones que cuestan millones · B1 | SPANISHCUE",
  description:"Clase de conversación B1 de 60 minutos para defender decisiones de CRM, fidelización, promociones y presupuesto en un resort de Las Vegas.",
  alternates:{canonical:"https://spanishcue.com/marketing-de-casinos"},
  openGraph:{images:["/marketing-de-casinos/preview.svg"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
