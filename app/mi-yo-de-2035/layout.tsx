import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Mi yo de 2035 · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Tu yo de dentro de diez años llama a la puerta: tu casa, tu trabajo, tus personas, la tecnología, el planeta y lo que quieres que quede de ti. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/mi-yo-de-2035"},
  openGraph:{images:["/conversation-classics/mi-yo-de-2035.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
