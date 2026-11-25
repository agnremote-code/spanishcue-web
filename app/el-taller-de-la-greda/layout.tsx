import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El taller de la greda · Clase 3D de conversación y comprensión auditiva B1 | SPANISHCUE",
  description:"Un taller familiar de cerámica en 3D en el altiplano de Boyacá: un restaurante de Bogotá hace un pedido y los recados viajan de persona en persona. Ocho círculos con conversación y una escucha propia en cada uno. Nivel B1.",
  alternates:{canonical:"https://spanishcue.com/el-taller-de-la-greda"},
  openGraph:{images:["/el-taller-de-la-greda/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
