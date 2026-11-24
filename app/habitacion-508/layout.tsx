import type {Metadata} from "next";
import type {ReactNode} from "react";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/audio-deck.css";
import "./clasica.css";
export const metadata:Metadata={title:"Habitación 508 · Escucha B2 · SPANISHCUE",description:"Un incidente de hotel B2 reconstruido mediante seis testimonios parciales, cronología y una respuesta profesional."};
export default function Layout({children}:{children:ReactNode}){return children;}
