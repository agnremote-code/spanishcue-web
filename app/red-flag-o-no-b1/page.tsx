import type { Metadata } from "next";
import RedFlagGame from "../red-flag-o-no/RedFlagGame";

export const metadata: Metadata = {
  title: "Red Flag o No · B1 · SPANISHCUE",
  description: "Una experiencia Modo Play B1 para debatir señales, contexto y límites en las relaciones.",
};

export default function Page() { return <RedFlagGame level="B1" />; }
