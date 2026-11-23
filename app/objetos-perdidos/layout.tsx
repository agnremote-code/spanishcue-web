import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Objetos perdidos · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Turno de noche en la oficina municipal de objetos perdidos, en 3D, después de la fiesta más grande de la ciudad. Empiezas en el turno de noche y tienes hasta el cambio de turno de las siete para devolver cada cosa a su dueño. Dieciocho escenas de comedia con un toque detectivesco, diecisiete personajes con su propia historia y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/objetos-perdidos"},
  openGraph:{images:["/objetos-perdidos/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
