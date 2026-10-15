import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Hospital San Casi Vivo · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Un hospital público en 3D con humor negro: veinte sectores, veintiún escenas con decisiones y conversación, y una escucha propia en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/hospital-san-casi-vivo"},
  openGraph:{images:["/hospital-san-casi-vivo/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
