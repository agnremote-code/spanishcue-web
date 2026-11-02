import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Reseñas de una estrella · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Hoteles horribles, paquetes que nunca llegan y servicios de cinco estrellas: puntúa, quéjate y opina sobre un mundo que lo valora todo. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/resenas-de-una-estrella"},
  openGraph:{images:["/conversation-classics/resenas-de-una-estrella.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
