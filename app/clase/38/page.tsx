import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { fullAccessFromHeaders } from "../../access-policy";
import { lessons } from "../../lesson-catalog";
import MouthLab from "../../mouth-lab/MouthLab";
import { generateMetadata as originalMetadata } from "../[id]/page";

// Keep ID38's existing URL, localized metadata and verified-header boundary.
// A static page takes precedence over [id] without changing other lessons.
export async function generateMetadata() {
  return originalMetadata({ params: Promise.resolve({ id: "38" }) });
}

export default async function MouthLabPage() {
  const lesson = lessons.find((item) => item.id === 38);
  if (!lesson) notFound();
  if (!fullAccessFromHeaders(await headers())) {
    redirect("/acceso?returnTo=%2Fclase%2F38");
  }
  return <MouthLab lesson={lesson} />;
}
