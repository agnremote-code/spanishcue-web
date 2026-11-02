import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Vuelo cancelado · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Una noche entera en un aeropuerto en 3D después de que cancelan tu vuelo: dieciocho escenas con decisiones y conversación, veintinueve pasajeros con su propia historia y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/vuelo-cancelado"},
  openGraph:{images:["/vuelo-cancelado/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
