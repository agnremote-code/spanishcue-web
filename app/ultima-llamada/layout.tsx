import type {Metadata} from "next";
import type {ReactNode} from "react";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/audio-deck.css";
import "./clasica.css";
export const metadata:Metadata={title:"Última Llamada · Escucha A2 · SPANISHCUE",description:"Una misión auditiva A2 de 45 minutos entre anuncios, llamadas, cambios de puerta y decisiones cotidianas."};
export default function Layout({children}:{children:ReactNode}){return children;}
