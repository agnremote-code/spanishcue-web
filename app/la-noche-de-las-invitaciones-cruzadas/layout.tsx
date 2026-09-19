import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"La Noche de las Invitaciones Cruzadas · A1 | SPANISHCUE",
  description:"Clase conversacional A1 de 45 minutos para presentarse, pedir datos personales y conocer gente en una gala fantástica.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
