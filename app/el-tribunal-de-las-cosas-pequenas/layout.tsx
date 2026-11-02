import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El tribunal de las cosas pequeñas · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Calcetines en el suelo, piña en la pizza, audios de cinco minutos: un tribunal para los pequeños crímenes de la convivencia. Tú juzgas, defiendes y confiesas. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-tribunal-de-las-cosas-pequenas"},
  openGraph:{images:["/conversation-classics/el-tribunal-de-las-cosas-pequenas.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
