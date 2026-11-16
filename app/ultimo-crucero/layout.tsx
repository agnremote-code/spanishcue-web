import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Último crucero · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"La última noche de un viejo transatlántico, en 3D y en plena tormenta: mañana los pasajeros bajan en Cádiz y el barco se va al desguace. El capitán te pide que escribas la última página de su bitácora. Dieciocho escenas sobre despedidas, miedo, arrepentimientos y lo que de verdad importa, diecisiete pasajeros con su propia historia y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/ultimo-crucero"},
  openGraph:{images:["/ultimo-crucero/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
