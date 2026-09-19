import LegalDocument from "../legal/LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Política de privacidad | SPANISHCUE", description: "Cómo SPANISHCUE trata datos de cuenta, cookies, almacenamiento y analítica opcional.", alternates: { canonical: "https://spanishcue.com/privacy" } };
export default function Page(){return <LegalDocument kind="privacy"/>}
