import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El tren de las 23:40 · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Un tren nocturno cruza los Andes de Mendoza a Chile y una novelista desaparece de su camarote. En 3D: locomotora, furgón, coches cama, comedor, bar, mirador y dos andenes; dieciocho escenas con decisiones y conversación, diecisiete pasajeros más con su propia historia y una escucha en cada círculo con voces de distintos países. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-tren-de-las-2340"},
  openGraph:{images:["/el-tren-de-las-2340/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
