import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El billete ganador · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Te toca la lotería: qué compras, a quién se lo cuentas, qué cambias y qué no. Dinero, suerte, familia, trabajo y valores. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-billete-ganador"},
  openGraph:{images:["/conversation-classics/el-billete-ganador.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
