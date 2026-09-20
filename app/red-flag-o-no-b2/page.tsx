import type { Metadata } from "next";
import RedFlagGame from "../red-flag-o-no/RedFlagGame";

export const metadata: Metadata = {
  title: "Red Flag o No · B2 · SPANISHCUE",
  description: "Una experiencia Modo Play B2 para explorar señales ambiguas, intención, impacto y límites.",
};

export default function Page() { return <RedFlagGame level="B2" />; }
