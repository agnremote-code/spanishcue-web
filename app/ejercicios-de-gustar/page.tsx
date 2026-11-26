import { gustar } from "../ejercicios-gramatica/families";
import { GapHub, hubMetadata } from "../ejercicios-gramatica/views";

export function generateMetadata() { return hubMetadata(gustar); }

export default function Hub() { return <GapHub family={gustar} />; }
