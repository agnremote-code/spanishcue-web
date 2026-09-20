import type { Metadata } from "next";
import RedFlagGame from "../red-flag-o-no/RedFlagGame";

export const metadata: Metadata = {
  title: "Red Flag o No · A2 · SPANISHCUE",
  description: "Una experiencia Modo Play A2 para hablar de citas, relaciones y límites sin respuestas correctas.",
};

export default function Page() { return <RedFlagGame level="A2" />; }
