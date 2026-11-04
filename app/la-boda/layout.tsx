import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La boda · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Una boda en una estancia, en 3D: de la ceremonia de la tarde al último baile al amanecer. El padrino desapareció y a medianoche el brindis lo das tú. Dieciocho escenas con decisiones y conversación, diecisiete invitados con su propia historia y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/la-boda"},
  openGraph:{images:["/la-boda/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
