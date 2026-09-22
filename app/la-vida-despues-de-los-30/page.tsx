import type { Metadata } from "next";
import LifeAfterThirty from "./LifeAfterThirty";

export const metadata: Metadata = {
  title: "La vida después de los 30 · B1 · SPANISHCUE",
  description: "Explorá diez zonas del cuerpo y cincuenta preguntas B1 para comparar etapas, contar experiencias y hablar de tus planes.",
};

export default function Page() {
  return <LifeAfterThirty />;
}
