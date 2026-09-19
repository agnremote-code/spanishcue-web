import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La Sala de los Mensajes Fuera de Contexto · B2 | SPANISHCUE",
  description:"Clase conversacional B2 de 45 minutos para interpretar, matizar, aclarar malentendidos y reparar conversaciones complejas.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
