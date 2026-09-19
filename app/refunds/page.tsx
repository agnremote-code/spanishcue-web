import LegalDocument from "../legal/LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Cancelaciones y reembolsos | SPANISHCUE", description: "Estado y condiciones de cancelación, desistimiento y reembolsos de SPANISHCUE PRO.", alternates: { canonical: "https://spanishcue.com/refunds" } };
export default function Page(){return <LegalDocument kind="refunds"/>}
