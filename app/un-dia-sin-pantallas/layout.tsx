import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Un día sin pantallas · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Veinticuatro horas sin móvil, sin televisión y sin ordenador: tus costumbres, tus recuerdos, tus opiniones y lo que descubres cuando apagas todo. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/un-dia-sin-pantallas"},
  openGraph:{images:["/conversation-classics/un-dia-sin-pantallas.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
