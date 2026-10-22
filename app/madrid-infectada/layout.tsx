import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"Madrid infectada: el último brote · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Madrid aislada por un virus, en 3D: Sol, la Gran Vía, la Plaza Mayor, el Metro, el Retiro, Malasaña, Atocha, el Palacio Real, un hospital de campaña y Madrid Río. Veinte escenas con diálogo, una pregunta de comprensión y dos preguntas sobre la vida real, y una escucha propia en cada zona. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/madrid-infectada"},
  openGraph:{images:["/madrid-infectada/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
