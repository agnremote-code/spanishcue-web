import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El Ministerio de las Versiones · Conversación C2 · SPANISHCUE",
  description:"Un thriller lingüístico C2 de 45 minutos con cinco casos, testimonios contradictorios, subtexto, sesgo, registro y una conclusión deliberadamente ambigua.",
};

export default function Layout({children}:{children:ReactNode}){return children;}
