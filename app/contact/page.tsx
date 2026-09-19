import LegalDocument from "../legal/LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Contacto y soporte | SPANISHCUE", description: "Canal de soporte, cuenta y privacidad de SPANISHCUE.", alternates: { canonical: "https://spanishcue.com/contact" } };
export default function Page(){return <LegalDocument kind="contact"/>}
