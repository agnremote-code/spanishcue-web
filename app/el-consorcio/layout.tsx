import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El consorcio · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"El día de tu mudanza a un edificio antiguo de Buenos Aires, en 3D: planta baja, siete pisos y la terraza, dieciocho escenas con decisiones y conversación, treinta vecinos con su propia historia y una escucha en cada círculo con voces de distintos países. A las 21:00, asamblea. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-consorcio"},
  openGraph:{images:["/el-consorcio/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
