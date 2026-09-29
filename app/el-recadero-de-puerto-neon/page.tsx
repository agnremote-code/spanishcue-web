import type { Metadata } from "next";
import RecaderoGame from "./RecaderoGame";

export const metadata: Metadata = {
  title: "El Recadero de Puerto Neón · Discurso referido B1 · SPANISHCUE",
  description: "Misión B1 de Modo Play: transmití información, pedidos y preguntas por una ciudad de noche y salvá la fiesta del barrio.",
};

export default function Page() {
  return <RecaderoGame />;
}
