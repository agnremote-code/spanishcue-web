import LegalDocument from "../legal/LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Términos y condiciones | SPANISHCUE", description: "Condiciones de la cuenta gratuita, uso permitido y estado de lanzamiento de SPANISHCUE PRO.", alternates: { canonical: "https://spanishcue.com/terms" } };
export default function Page(){return <LegalDocument kind="terms"/>}
