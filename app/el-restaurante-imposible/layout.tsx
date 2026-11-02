import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El restaurante imposible · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Un restaurante donde cada plato es una pregunta sobre ti: tu cocina, tus recuerdos, tus opiniones sobre cómo comemos hoy. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-restaurante-imposible"},
  openGraph:{images:["/conversation-classics/el-restaurante-imposible.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
