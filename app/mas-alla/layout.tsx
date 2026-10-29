import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Más allá: cielo e infierno · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Una clase 3D para adultos: mueres en un hospital rodeado de tu familia, tu alma sube y en el Umbral eliges adónde ir primero, al Cielo o al Infierno. Doce encuentros con ángeles, demonios y almas, cada uno con una pregunta profunda que se responde de una forma distinta: una balanza, unas velas, un espejo roto, un reloj. Una escucha propia en cada zona. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/mas-alla"},
  openGraph:{images:["/mas-alla/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
