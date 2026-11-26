import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GrowthFooter, JsonLd, Section } from "../growth/components";
import { TEAM_PATH, authorProfile, organizationNode } from "../growth/schema";
import { EleTopbar } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import { canonicalUrl } from "../seo";
import styles from "../growth/growth.module.css";

const title = "Quién hace SpanishCue: Ale, profesor de ELE";
const description = "SpanishCue lo dirige Ale, profesor de español como lengua extranjera con más de diez años dando clases. Cómo se hace el material y qué referencias usa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(TEAM_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(TEAM_PATH), type: "profile" },
};

export default function EquipoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: title,
    description,
    url: canonicalUrl(TEAM_PATH),
    inLanguage: "es",
    mainEntity: authorProfile,
    publisher: organizationNode,
  };
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={schema} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Equipo", href: TEAM_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Equipo SpanishCue</p>
            <h1 className={styles.title}>Ale, profesor de español como lengua extranjera</h1>
            <p className={styles.lead}>
              SpanishCue lo dirige Ale, profesor de español con más de diez años dando clases. La idea de SpanishCue sale de esa
              práctica: lo que funciona en una clase real de 45 minutos y los errores que se repiten alumno tras alumno.
            </p>
          </section>

          <Section title="Qué es SpanishCue" intro="Una biblioteca de clases interactivas de español para profesores y para quien estudia por su cuenta.">
            <div className={styles.prose}>
              <p>
                Cada clase se abre en el navegador y se puede compartir en pantalla: tiene una explicación breve, práctica con corrección,
                audio y una parte final de conversación. Hay clases gratis en todos los niveles, fichas abiertas con soluciones y ejercicios
                que corrigen al momento sin crear una cuenta.
              </p>
              <p>
                Si eres profesor, empieza por <Link className={styles.textLink} href={MATERIAL_ELE_PATH}>Material ELE</Link>. Si estudias
                solo, prueba los ejercicios de <Link className={styles.textLink} href="/ser-o-estar">ser o estar</Link> o de{" "}
                <Link className={styles.textLink} href="/por-o-para">por o para</Link>.
              </p>
            </div>
          </Section>

          <Section title="Cómo se hace el material">
            <div className={styles.panel}>
              <ul>
                <li><b>Niveles del MCER y el PCIC como referencia.</b> Los usamos para decidir qué entra en cada nivel. No son una certificación: SpanishCue no está afiliado al Consejo de Europa ni al Instituto Cervantes.</li>
                <li><b>Una clase, un objetivo.</b> Cada clase busca que el alumno pueda hacer algo concreto al terminar, y termina con producción oral o escrita.</li>
                <li><b>Voces sintéticas.</b> Los audios usan voces sintéticas con acento nativo, no grabaciones de personas.</li>
                <li><b>Cifras verdaderas.</b> No publicamos número de usuarios, valoraciones ni testimonios que no podamos comprobar. Cuando damos un dato, decimos de dónde sale y de qué fecha es. Los informes con datos están en <Link className={styles.textLink} href="/datos">Datos de SpanishCue</Link>.</li>
              </ul>
            </div>
          </Section>

          <Section title="Contacto">
            <div className={styles.prose}>
              <p>
                Para preguntas sobre las clases, propuestas de colaboración o errores que encuentres en una página, escribe desde la
                página de <Link className={styles.textLink} href="/contact">contacto</Link>. También puedes leer{" "}
                <Link className={styles.textLink} href="/about">cómo diseñamos las clases</Link> (en inglés).
              </p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
