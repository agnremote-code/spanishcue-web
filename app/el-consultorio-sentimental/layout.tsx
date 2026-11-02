import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El consultorio sentimental de la radio · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Un programa de radio de madrugada sobre el corazón: cartas de oyentes, dilemas de amor, amistad y familia, y tus propias historias y consejos. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-consultorio-sentimental"},
  openGraph:{images:["/conversation-classics/el-consultorio-sentimental.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
