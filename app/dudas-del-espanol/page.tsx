import { dudas } from "../ejercicios-gramatica/families";
import { GapHub, hubMetadata } from "../ejercicios-gramatica/views";

export function generateMetadata() { return hubMetadata(dudas); }

export default function Hub() { return <GapHub family={dudas} />; }
