import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El Gran Meridiano · Casino 3D en Las Vegas · Conversación A1–C2 | SPANISHCUE",
  description:"Un videojuego de conversación en 3D: Valentina recorre un casino de tres pisos en Las Vegas, con ascensor, treinta escenas, respuestas para elegir y conversación. Seis niveles y, aparte, una sección de marketing de casinos.",
  alternates:{canonical:"https://spanishcue.com/marketing-de-casinos"},
  openGraph:{images:["/marketing-de-casinos/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
