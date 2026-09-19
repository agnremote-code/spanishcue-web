import LegalDocument from "../legal/LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Suscripción y facturación | SPANISHCUE", description: "Estado de lanzamiento, renovación, precio fundador y cancelación de SPANISHCUE PRO.", alternates: { canonical: "https://spanishcue.com/subscription-terms" } };
export default function Page(){return <LegalDocument kind="subscription"/>}
