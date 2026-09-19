import LegalDocument from "./LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Aviso legal | SPANISHCUE", description: "Información legal y estado operativo de SPANISHCUE.", alternates: { canonical: "https://spanishcue.com/legal" } };
export default function Page(){return <LegalDocument kind="legal"/>}
