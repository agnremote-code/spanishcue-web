import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La feria de Villaluz · Clase 3D de conversación y comprensión auditiva A2 | SPANISHCUE",
  description:"Una feria de pueblo en 3D al atardecer: describir y encontrar a personas entre la gente, pedir con cortesía, reclamar, comparar y contar la noche. Ocho círculos con conversación y una escucha propia en cada uno. Nivel A2.",
  alternates:{canonical:"https://spanishcue.com/la-feria-de-villaluz"},
  openGraph:{images:["/la-feria-de-villaluz/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
