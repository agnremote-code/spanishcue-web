import { pronombres } from "../ejercicios-gramatica/families";
import { GapHub, hubMetadata } from "../ejercicios-gramatica/views";

export function generateMetadata() { return hubMetadata(pronombres); }

export default function Hub() { return <GapHub family={pronombres} />; }
