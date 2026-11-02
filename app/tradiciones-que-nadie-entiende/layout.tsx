import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Tradiciones que nadie entiende · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Doce uvas, tomates por el aire, regalos obligatorios y rituales de familia: las tradiciones del mundo y las tuyas, para contarlas, explicarlas y discutirlas. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/tradiciones-que-nadie-entiende"},
  openGraph:{images:["/conversation-classics/tradiciones-que-nadie-entiende.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
