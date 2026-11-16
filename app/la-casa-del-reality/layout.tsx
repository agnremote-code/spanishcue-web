import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La casa · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Una noche entera dentro de la casa de un reality show, en 3D: entras como concursante sorpresa en la gala en directo y sales con la última confesión del amanecer. Dieciocho escenas con decisiones y conversación (alianzas, nominaciones, un secreto a punto de salir, un romance inventado para la audiencia), un confesionario con las preguntas más personales y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/la-casa-del-reality"},
  openGraph:{images:["/la-casa-del-reality/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
