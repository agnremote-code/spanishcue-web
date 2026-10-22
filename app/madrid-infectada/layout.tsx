import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Madrid infectada: el último brote · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Madrid entera aislada por un virus, en 3D y sin cortes: Sol, la Gran Vía, la Plaza Mayor, el Palacio Real y la Plaza de la Armería, Cibeles, la Puerta de Alcalá, el Retiro, Malasaña, Atocha, Madrid Río y el Metro, con muertos que caminan por las calles. Veinte escenas y treinta sobrevivientes con diálogo, una pregunta de comprensión y dos preguntas sobre la vida real, y una escucha propia en cada zona. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/madrid-infectada"},
  openGraph:{images:["/madrid-infectada/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
