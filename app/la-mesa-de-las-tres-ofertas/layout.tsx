import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La Mesa de las Tres Ofertas · B2 | SPANISHCUE",
  description:"Clase conversacional B2 de 45 minutos para persuadir, negociar condiciones, hacer concesiones y cerrar un acuerdo.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
