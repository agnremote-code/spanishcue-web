import type { Metadata } from "next";
import { headers } from "next/headers";
import { fullAccessFromHeaders } from "../access-policy";
import AutoestudioLanding from "./AutoestudioLanding";
import { publishedLevels } from "./curriculum/course";

export const metadata: Metadata = {
  title: "Autoestudio de español A1–C2 | SPANISHCUE",
  description: "Un curso de español para estudiar entre clases, semana a semana, de A1 a C2: explicación, gramática, vocabulario, pronunciación, escucha, lectura, escritura, expresión oral y tarjetas para usar en clase.",
};

export default async function Page() {
  const fullAccess = fullAccessFromHeaders(await headers());
  return <AutoestudioLanding levels={publishedLevels()} fullAccess={fullAccess} />;
}
