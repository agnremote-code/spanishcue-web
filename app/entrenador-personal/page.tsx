import type { Metadata } from "next";
import PersonalTrainer from "./PersonalTrainer";

export const metadata: Metadata = {
  title: "Entrenador personal · Imperativo B1 · SPANISHCUE",
  description: "Actividad oral B1 para dirigir una sesión de gimnasio con imperativos afirmativos y negativos.",
};

export default function Page() {
  return <PersonalTrainer />;
}
