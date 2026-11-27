import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { faqPageSchema, learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { SUB_PLANS_PATH, subPlanBySlug, subPlans, subPlansSerp } from "../data";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ course: string }> };

export function generateStaticParams() {
  return subPlans.map((plan) => ({ course: plan.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plan = subPlanBySlug.get((await params).course);
  if (!plan) return {};
  return {
    title: plan.title,
    description: plan.description,
    alternates: { canonical: canonicalUrl(plan.path) },
    robots: { index: true, follow: true },
    openGraph: { title: plan.title, description: plan.description, url: canonicalUrl(plan.path), type: "article" },
  };
}

export default async function SubPlanPage({ params }: Props) {
  const plan = subPlanBySlug.get((await params).course);
  if (!plan) notFound();
  const next = subPlans[(subPlans.indexOf(plan) + 1) % subPlans.length];
  const total = plan.steps.reduce((sum, step) => sum + step.minutes, 0);
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: plan.path, name: plan.title, description: plan.description, learningResourceType: "lesson plan", interactivityType: "active", educationalLevel: `${plan.course} (${plan.levels})`, inLanguage: "es", roles: ["teacher", "student"], teaches: [`${plan.course} Spanish`] })} />
          <JsonLd data={faqPageSchema(plan.faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish sub plans", href: SUB_PLANS_PATH }, { name: plan.course, href: plan.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Emergency sub plan · {plan.course} · {total} minutes</p>
            <h1 className={styles.title}>{plan.h1}</h1>
            <p className={styles.lead}>{plan.answer}</p>
          </section>

          <Section title="For the substitute: the plan minute by minute">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>{plan.course} sub plan, {total} minutes</caption>
                <thead><tr><th scope="col">Minutes</th><th scope="col">Step</th><th scope="col">What students do</th></tr></thead>
                <tbody>
                  {plan.steps.map((step) => (
                    <tr key={step.title}>
                      <td>{step.minutes}</td>
                      <th scope="row">{step.href ? <Link className={styles.textLink} href={step.href}>{step.title}</Link> : step.title}</th>
                      <td>{step.sub}{step.href ? <> Open: <Link className={styles.textLink} href={step.href}>{step.linkLabel}</Link>.</> : null}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Writing: sentence frames" intro={plan.writing.intro}>
            <div className={`${styles.panel} ${styles.prose}`} lang="es"><ol>{plan.writing.frames.map((frame) => <li key={frame}>{frame}</li>)}</ol></div>
          </Section>

          <Section id="exit-ticket" title="Exit ticket" intro="Four questions. Students tap the answer and see at once whether it is right, then show their score.">
            <ChoiceQuiz items={plan.exitTicket} lang="en" />
          </Section>

          <Section title="What SpanishCue data shows">
            <div className={styles.panel}>
              <p>
                We looked at the first {subPlansSerp.results} Google results for «{subPlansSerp.query}» in the United States on {subPlansSerp.date}.
                {" "}{subPlansSerp.easyPromise} of the titles promised easy, no-prep or no-stress plans, and none mentioned an activity that
                corrects itself. Most were printable plans or stores. This plan runs on screen instead, so the class keeps practising even
                when the substitute cannot check answers in Spanish.
              </p>
              <p><small>Source: our capture of Google search results in English (United States), {subPlansSerp.date}.</small></p>
            </div>
          </Section>

          <Section title="Heritage speakers in the class">
            <div className={styles.prose}><p>{plan.heritage}</p></div>
          </Section>

          <Section title="Questions">
            <Faq items={plan.faq} />
          </Section>

          <Section title="Keep going">
            <div className={styles.prose}>
              <ul>
                <li>Next course: <Link className={styles.textLink} href={next.path}>{next.h1}</Link>.</li>
                <li>All plans: <Link className={styles.textLink} href={SUB_PLANS_PATH}>Emergency Spanish sub plans</Link>.</li>
                <li>Free interactive class that also runs on screen: <Link className={styles.textLink} href="/gramatica/indefinido-e-imperfecto">indefinido e imperfecto</Link> (in Spanish).</li>
              </ul>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
