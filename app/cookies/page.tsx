import LegalDocument from "../legal/LegalDocument";
import type { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Política de cookies | SPANISHCUE", description: "Cookies, almacenamiento local y opciones de privacidad de SPANISHCUE.", alternates: { canonical: "https://spanishcue.com/cookies" } };
export default function Page(){return <LegalDocument kind="cookies"/>}
