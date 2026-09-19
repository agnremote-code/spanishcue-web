import { env } from "cloudflare:workers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { listTeacherAccounts } from "../../db/accounts";
import { ownerFromHeaders, samplesByCategory, signedInFromHeaders } from "../access-policy";
import { lessons } from "../lesson-catalog";
import { readOffer } from "../../db/offer";
import OfferEditor from "./OfferEditor";
import TeacherAccessEditor from "./TeacherAccessEditor";
import "../teachers.css";
import "./teacher-access.css";

export const dynamic = "force-dynamic";

export default async function Admin() {
  const requestHeaders = await headers();
  if (!signedInFromHeaders(requestHeaders)) {
    redirect("/ingresar?modo=entrar&returnTo=%2Fadmin");
  }
  if (!ownerFromHeaders(requestHeaders)) redirect("/cuenta");

  const [offer, teachers] = await Promise.all([
    readOffer(),
    listTeacherAccounts(env.DB).catch(() => []),
  ]);

  return (
    <div className="teacher-app">
      <main className="teacher-main">
        <Link href="/">← Mi biblioteca</Link>
        <section className="teacher-intro" style={{ marginTop: 32 }}>
          <p>SOLO VOS · ADMINISTRACIÓN</p>
          <h1>Tu SPANISHCUE.</h1>
          <div>Administra la oferta y el acceso de cada profesor desde un solo lugar.</div>
        </section>
        <p><Link href="/?vista=profesor">Probar la vista de profesor →</Link></p>
        <OfferEditor initial={offer} />
        <TeacherAccessEditor initial={teachers} />
        <section className="teacher-world">
          <p>MUESTRAS GRATUITAS FIJAS</p>
          <h2>Dos clases gratuitas por categoría</h2>
          <p>Estas selecciones son fijas; cambiar los filtros no cambia los permisos.</p>
          <div className="teacher-grid">
            {Object.entries(samplesByCategory).map(([group, ids]) => (
              <article key={group} className="teacher-card teacher-card-body">
                <h3>{group}</h3>
                <ul>
                  {ids.map((id) => (
                    <li key={id}>{lessons.find((lesson) => lesson.id === id)?.title ?? `Pendiente: ${id}`}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <p className="sample-note" style={{ marginTop: 30 }}>
          La biblioteca general es pública. Cada profesor conserva su propia cuenta y sus permisos.
        </p>
      </main>
    </div>
  );
}
