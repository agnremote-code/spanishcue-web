import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"HR Crisis: la empresa es un caos · Clase 3D de español profesional A1–C1 | SPANISHCUE",
  description:"Una empresa caótica en 3D y Tizia, la nueva responsable de Recursos Humanos. Entrevistas, quejas, nóminas con errores, reestructuración, reuniones con la dirección y una crisis final: seis misiones en las que el alumno escribe, pregunta, corrige documentos y decide en español. Cinco niveles, de A1 a C1, con ayuda opcional en portugués.",
  alternates:{canonical:"https://spanishcue.com/hr-crisis"},
  openGraph:{images:["/hr-crisis/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
