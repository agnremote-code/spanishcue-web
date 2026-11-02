import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Speed dating de personajes · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Citas rápidas con personajes muy distintos: cada uno te hace cinco preguntas sobre tu vida, tus recuerdos y tus opiniones. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/speed-dating-de-personajes"},
  openGraph:{images:["/conversation-classics/speed-dating-de-personajes.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
