import type {Metadata} from "next";

export const metadata:Metadata={
 title:"La Cámara de Presión · C2 | SPANISHCUE",
 description:"Setenta preguntas C2 sometidas a cambios de premisa, registro, contexto, evidencia y perspectiva en tiempo real."
};

export default function Layout({children}:{children:React.ReactNode}){return children;}
