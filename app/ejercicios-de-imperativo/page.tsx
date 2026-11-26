import { imperativo } from "../ejercicios-gramatica/families";
import { GapHub, hubMetadata } from "../ejercicios-gramatica/views";

export function generateMetadata() { return hubMetadata(imperativo); }

export default function Hub() { return <GapHub family={imperativo} />; }
