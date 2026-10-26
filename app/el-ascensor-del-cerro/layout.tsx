import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El ascensor del cerro · Clase 3D de conversación y comprensión auditiva B2 | SPANISHCUE",
  description:"Un cerro de Valparaíso en 3D: el ascensor está cerrado por reparaciones y la junta de vecinos decide cómo reabrirlo. Seis círculos a distintas alturas, del puerto a la asamblea, para mediar entre posturas, conceder y objetar y negociar condiciones, con una escucha propia en cada uno. Nivel B2.",
  alternates:{canonical:"https://spanishcue.com/el-ascensor-del-cerro"},
  openGraph:{images:["/el-ascensor-del-cerro/cover.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
