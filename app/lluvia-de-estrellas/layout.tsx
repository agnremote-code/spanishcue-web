import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Lluvia de estrellas · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Una noche en un camping del desierto, en 3D, durante la lluvia de estrellas más grande en sesenta años. Celeste, la guía, tiene miedo a la oscuridad y te pide ayuda para que todos lleguen al mirador antes del pico de las 03:12. Dieciocho escenas con humor y emoción, diecisiete campistas con su propia historia y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/lluvia-de-estrellas"},
  openGraph:{images:["/lluvia-de-estrellas/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
