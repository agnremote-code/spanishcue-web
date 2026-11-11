import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El mundo en blanco · Clase 3D de conversación y comprensión auditiva A0–C2 | SPANISHCUE",
  description:"Una clase 3D dentro de un mundo de papel plegado que perdió su tinta: todo es blanco hasta que hablas. Doce seres de origami (una grulla que espera un deseo, un barco que nunca tocó el agua, una ballena que carga un pueblo) te hacen una sola pregunta profunda cada uno; cuando respondes, el color vuelve a su rincón del mundo. Al final, tus respuestas forman tu página. Una escucha propia en cada región. Siete niveles, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-mundo-en-blanco"},
  openGraph:{images:["/el-mundo-en-blanco/portada.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}
