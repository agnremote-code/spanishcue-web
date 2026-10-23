import type { Metadata } from 'next';
import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import Link from 'next/link';
import { localeFromHeaders } from '../i18n/messages';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { SpanishCueBrand, SpanishCueFooter } from '../SpanishCueBrand';
import AudienceSwitch from '../audience/AudienceSwitch';
import TrackedLink from '../audience/TrackedLink';
import { catalogLessons } from '../conversation-families/catalog';
import { canonicalUrl } from '../seo';
import DemoForm from './DemoForm';
import { demoStorageReady } from './demo-service';
import { publicContactEmail } from '../legal/operator';
import { institutionStorageReady } from '../../db/institutions';
import './style.css';

export const dynamic = 'force-dynamic';

const metadataCopy = {
  es: { title: 'SpanishCue para academias de español | Clases interactivas y mundos 3D', description: 'Una biblioteca de clases de español listas para tu equipo docente: gramática, conversación y mundos 3D. Solicita una demo para tu academia.' },
  en: { title: 'SpanishCue for Spanish Language Schools | Interactive Lessons & 3D Worlds', description: 'A ready-to-teach Spanish lesson library for your teaching team: grammar, conversation and 3D worlds. Request a demo for your school.' },
};

export async function generateMetadata(): Promise<Metadata> {
  const copy = metadataCopy[localeFromHeaders(await headers())];
  return { ...copy, alternates: { canonical: canonicalUrl('/academias') }, robots: { index: true, follow: true }, openGraph: { ...copy, url: canonicalUrl('/academias'), type: 'website', siteName: 'SPANISHCUE', images: [{ url: 'https://spanishcue.com/brand/campaign/noche-demo-poster.webp', width: 1280, height: 720 }] } };
}

export default async function Academias() {
  const locale = localeFromHeaders(await headers());
  const es = locale === 'es';
  const formReady = await demoStorageReady(env.DB);
  const academyReady = await institutionStorageReady(env.DB);
  const contactEmail = publicContactEmail(env);
  const lessonCount = catalogLessons.filter(lesson => !lesson.path?.startsWith('http')).length;
  const benefits = es ? [
    ['Una base común para tu equipo', 'Cada profesor encuentra los materiales en la misma biblioteca, organizados por nivel y tema.'],
    ['Más tiempo para enseñar', 'Explicaciones, práctica y conversación listas para abrir en pantalla. Menos materiales que preparar desde cero.'],
    ['Clases que invitan a participar', 'Mundos 3D, situaciones y preguntas para que el español se use durante la clase.'],
    ['Criterio docente, con mejores recursos', 'Tu equipo elige qué usar y cómo integrarlo en el programa de la academia.'],
  ] : [
    ['A common foundation for your team', 'Every teacher finds materials in the same library, organised by level and topic.'],
    ['More time for teaching', 'Explanations, practice and conversation ready to open on screen. Less material to build from scratch.'],
    ['Lessons that invite participation', '3D worlds, situations and questions that bring Spanish into the classroom.'],
    ['Your teaching approach, with better resources', 'Your team decides what to use and how it fits your school’s programme.'],
  ];
  const steps = es ? [
    ['Exploramos tu academia', 'Nos cuentas cuántos profesores tiene tu equipo, qué niveles enseña y cómo son sus clases.'],
    ['Lo probamos con una clase real', 'Recorremos los mundos 3D y los materiales que mejor encajan con tu equipo.'],
    ['Definimos el siguiente paso', 'Conversamos sobre accesos y licencias para tu academia, sin activar suscripciones automáticamente.'],
  ] : [
    ['We get to know your school', 'Tell us about your teachers, the levels you teach and how your classes work.'],
    ['We try a real lesson', 'Explore the 3D worlds and materials that best fit your team.'],
    ['We agree on the next step', 'Discuss access and licensing for your school, without starting subscriptions automatically.'],
  ];
  const faqs = es ? [
    ['¿Podemos probarlo antes de decidir?', 'Sí. Puedes explorar la demo 3D gratuita y solicitar una demostración centrada en las necesidades de tu academia.'],
    ['¿Sustituye nuestro programa de español?', 'Puedes utilizar la biblioteca como apoyo a tu programa. Tus profesores deciden qué materiales incorporar y en qué momento.'],
    ['¿Cada profesor utiliza su propia cuenta?', 'Sí. Las cuentas actuales son individuales. Los accesos y condiciones para equipos se consultan en la demo; no se comparten contraseñas.'],
    ['¿Ya existe un panel para administrar mi academia?', academyReady ? 'Sí. Puedes registrar tu academia, invitar profesores con sus cuentas individuales y administrar las plazas que prepare el propietario de SpanishCue. Las invitaciones requieren que el servicio de correo esté configurado.' : 'El panel institucional está pendiente de preparación en este entorno. Puedes solicitar una demo y consultar las opciones para tu equipo.'],
    ['¿Cuánto cuesta para una academia?', 'No hay una tarifa institucional pública. Consulta las opciones para tu equipo. Los planes y suscripciones de profesores independientes siguen disponibles.'],
  ] : [
    ['Can we try it before deciding?', 'Yes. Explore the free 3D demo and request a demonstration focused on your school’s needs.'],
    ['Does it replace our Spanish curriculum?', 'Use the library alongside your programme. Your teachers choose which materials to include and when.'],
    ['Does each teacher have their own account?', 'Yes. Current accounts are individual. Discuss team access and conditions during the demo; passwords are not shared.'],
    ['Is there already a school administration dashboard?', academyReady ? 'Yes. Register your school, invite teachers with their own accounts and manage seats prepared by the SpanishCue owner. Invitations require the email service to be configured.' : 'The institutional dashboard is awaiting preparation in this environment. Request a demo to discuss options for your team.'],
    ['How much does it cost for a school?', 'There is no public institutional price. Ask about options for your team. Independent teacher plans and subscriptions remain available.'],
  ];
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: metadataCopy[locale].title, description: metadataCopy[locale].description, url: canonicalUrl('/academias'), inLanguage: locale, audience: { '@type': 'EducationalAudience', educationalRole: 'administrator' } };
  return <div className="academy-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <a className="skip-link" href="#academy-main">{es ? 'Ir al contenido' : 'Skip to content'}</a>
    <header className="academy-nav">
      <Link href="/" className="academy-brand" aria-label="SpanishCue"><SpanishCueBrand variant="compact" /></Link>
      <AudienceSwitch active="academy" />
      <div className="academy-nav-actions"><LanguageSwitcher />{academyReady && <Link href="/pro/academia" className="academy-text-link">{es ? 'Mi academia' : 'My school'}</Link>}<a href="#solicitar-demo" className="academy-nav-demo">{es ? 'Solicitar demo' : 'Request demo'} <span aria-hidden="true">↗</span></a></div>
    </header>
    <main id="academy-main">
      <section className="academy-hero academy-wrap">
        <div className="academy-hero-copy">
          <p className="academy-eyebrow"><span />{es ? 'PARA ACADEMIAS Y EQUIPOS DOCENTES' : 'FOR LANGUAGE SCHOOLS & TEACHING TEAMS'}</p>
          <h1>{es ? <>Tu equipo enseña.<br /><em>SpanishCue prepara el escenario.</em></> : <>Your team teaches.<br /><em>SpanishCue sets the scene.</em></>}</h1>
          <p className="academy-lead">{es ? 'Una biblioteca de clases de español listas para abrir, con mundos 3D y actividades interactivas. Tu equipo, con más recursos y más tiempo para enseñar.' : 'Ready-to-teach Spanish lessons, 3D worlds and interactive activities in one library. Give your team more resources and more time to teach.'}</p>
          <div className="academy-actions"><TrackedLink className="academy-primary" href="#solicitar-demo" event="cta_click" placement="academy_hero_demo">{es ? 'Solicitar una demo' : 'Request a demo'} <span aria-hidden="true">↗</span></TrackedLink><a className="academy-text-link" href="#producto">{es ? 'Ver el producto' : 'See the product'} ↓</a></div>
          <p className="academy-reassurance">{es ? 'Para escuelas de español, institutos y profesores independientes.' : 'For Spanish schools, language institutes and independent teachers.'}</p>
        </div>
        <div className="academy-showcase" id="producto">
          <div className="academy-showcase-top"><span><i /> SPANISHCUE / {es ? 'UNA CLASE REAL' : 'A REAL LESSON'}</span><b>3D</b></div>
          <video controls playsInline preload="none" poster="/brand/campaign/noche-demo-poster.webp" aria-label={es ? 'Vídeo del mundo 3D Noche abierta en SpanishCue' : 'Video of SpanishCue’s Noche abierta 3D world'}><source src="/brand/campaign/noche-demo.mp4" type="video/mp4" /></video>
          <div className="academy-showcase-bottom"><div><small>{es ? 'CONVERSACIÓN + ESCUCHA' : 'CONVERSATION + LISTENING'}</small><h2>Noche abierta</h2></div><Link href="/demo/noche-abierta" aria-label={es ? 'Abrir demo gratuita de Noche abierta' : 'Open the free Noche abierta demo'}>↗</Link></div>
          <p className="academy-video-note">{es ? 'Grabación del producto. Abre la demo para recorrer la ciudad.' : 'Product recording. Open the demo to explore the city.'}</p>
        </div>
      </section>
      <section className="academy-facts academy-wrap" aria-label={es ? 'Recursos disponibles' : 'Available resources'}>
        <div><b>{lessonCount}</b><span>{es ? 'clases en la biblioteca' : 'lessons in the library'}</span></div><div><b>3D</b><span>{es ? 'mundos interactivos' : 'interactive worlds'}</span></div><div><b>{es ? 'Por nivel' : 'By level'}</b><span>{es ? 'gramática y conversación' : 'grammar and conversation'}</span></div><p>{es ? 'Una biblioteca común. La personalidad de cada profesor.' : 'One shared library. Every teacher’s own approach.'}</p>
      </section>
      <section className="academy-section academy-wrap" aria-labelledby="academy-benefits-title">
        <div className="academy-section-heading"><p className="academy-eyebrow">{es ? 'PARA QUIEN COORDINA. PARA QUIEN ENSEÑA.' : 'FOR COORDINATORS. FOR TEACHERS.'}</p><h2 id="academy-benefits-title">{es ? <>Mejores recursos.<br /><em>Un equipo con más posibilidades.</em></> : <>Better resources.<br /><em>More possibilities for your team.</em></>}</h2></div>
        <div className="academy-benefit-grid">{benefits.map(([title, body], i) => <article key={title}><span className="academy-card-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className="academy-product-section" aria-labelledby="academy-library-title"><div className="academy-wrap academy-section">
        <div className="academy-section-heading"><p className="academy-eyebrow">{es ? 'ABRE. EXPLORA. ENSEÑA.' : 'OPEN. EXPLORE. TEACH.'}</p><h2 id="academy-library-title">{es ? 'El material ya está aquí.' : 'The materials are already here.'}</h2><p>{es ? 'Explora recursos del producto actual antes de solicitar tu demo institucional.' : 'Explore resources from the current product before requesting your school demo.'}</p></div>
        <div className="academy-resource-grid">
          <Link href="/demo/noche-abierta" className="academy-resource"><img src="/noche-abierta/preview.webp" alt={es ? 'Vista del mundo Noche abierta' : 'View of the Noche abierta world'} width="720" height="450" loading="lazy" /><div><small>{es ? 'MUNDO 3D · DEMO GRATUITA' : '3D WORLD · FREE DEMO'}</small><h3>Noche abierta <span>↗</span></h3><p>{es ? 'Una ciudad para conversar y escuchar español.' : 'A city for speaking and listening in Spanish.'}</p></div></Link>
          <Link href="/la-fabrica-de-los-nombres" className="academy-resource"><img src="/lp/fabrica.webp" alt={es ? 'Portada de La Fábrica de los Nombres' : 'La Fábrica de los Nombres lesson cover'} width="720" height="450" loading="lazy" /><div><small>{es ? 'GRAMÁTICA · CLASE GRATUITA' : 'GRAMMAR · FREE LESSON'}</small><h3>{es ? 'Gramática en acción' : 'Grammar in action'} <span>↗</span></h3><p>{es ? 'Explicaciones y práctica en una clase visual.' : 'Explanations and practice in a visual lesson.'}</p></div></Link>
        </div>
        <Link className="academy-text-link" href="/#library-results">{es ? 'Explorar toda la biblioteca' : 'Explore the full library'} →</Link>
      </div></section>
      <section className="academy-section academy-wrap" aria-labelledby="academy-steps-title">
        <div className="academy-section-heading"><p className="academy-eyebrow">{es ? 'EMPEZAMOS CON TU EQUIPO' : 'WE START WITH YOUR TEAM'}</p><h2 id="academy-steps-title">{es ? 'Del primer vistazo a tu próxima clase.' : 'From the first look to your next lesson.'}</h2></div>
        <ol className="academy-steps">{steps.map(([title, body], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
        <aside className="academy-status"><span className="academy-status-icon" aria-hidden="true">↗</span><div><h3>{es ? 'Accesos para tu equipo, con información clara.' : 'Team access, with clear expectations.'}</h3><p>{academyReady ? (es ? 'Registra tu academia y reúne a tu equipo con cuentas individuales. Administra las plazas y su vencimiento después de que el propietario de SpanishCue prepare la licencia. El registro no activa cobros ni acceso PRO.' : 'Register your school and bring your team together with individual accounts. Manage seats after the SpanishCue owner prepares the licence. Registration starts no charges and grants no PRO access.') : (es ? 'La biblioteca, las clases y las cuentas individuales están disponibles. El panel institucional está pendiente de preparación en este entorno. Consulta las opciones para tu equipo en la demo.' : 'The library, lessons and individual accounts are available. The institutional dashboard is awaiting preparation in this environment. Discuss options for your team during the demo.')}</p>{academyReady && <Link className="academy-text-link" href="/pro/academia">{es ? 'Abrir mi academia' : 'Open my school'} →</Link>}</div></aside>
      </section>
      <section className="academy-demo-section" id="solicitar-demo"><div className="academy-wrap academy-demo-layout">
        <div><p className="academy-eyebrow">{es ? 'HABLEMOS DE TU ACADEMIA' : 'LET’S TALK ABOUT YOUR SCHOOL'}</p><h2>{es ? <>La próxima experiencia<br />de tu equipo <em>empieza aquí.</em></> : <>Your team’s next<br />experience <em>starts here.</em></>}</h2><p>{es ? 'Cuéntanos qué necesita tu academia. Te mostraremos las clases y los mundos 3D que pueden encajar en tu programa.' : 'Tell us what your school needs. We will show you the lessons and 3D worlds that could fit your programme.'}</p><div className="academy-demo-note"><b>{es ? 'Una demo con propósito.' : 'A demo with purpose.'}</b><span>{es ? 'Producto real. Necesidades de tu equipo. Próximos pasos claros.' : 'Real product. Your team’s needs. Clear next steps.'}</span></div></div>
        {formReady ? <DemoForm es={es} /> : <div className="academy-form academy-demo-contact"><h3>{es ? 'Coordina una demo para tu academia.' : 'Arrange a demo for your school.'}</h3><p>{es ? 'Escríbenos con tu nombre, el nombre de tu academia y la cantidad aproximada de profesores. Conversaremos sobre los recursos que necesita tu equipo.' : 'Send us your name, your school’s name and the approximate number of teachers. We will discuss the resources your team needs.'}</p><a className="academy-primary" href={contactEmail ? `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent('Demo institucional SpanishCue')}` : '/contact'}>{es ? 'Consultar por una demo' : 'Ask about a demo'} <span aria-hidden="true">↗</span></a><small>{es ? 'Sin compromiso. No activa ninguna suscripción.' : 'No commitment. This does not start a subscription.'}</small></div>}
      </div></section>
      <section className="academy-section academy-wrap academy-faq" aria-labelledby="academy-faq-title"><div className="academy-section-heading"><p className="academy-eyebrow">{es ? 'ANTES DE EMPEZAR' : 'BEFORE YOU START'}</p><h2 id="academy-faq-title">{es ? 'Preguntas de academias.' : 'Questions from schools.'}</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <div className="academy-teacher-link academy-wrap"><span>{es ? '¿Enseñas por tu cuenta?' : 'Teaching independently?'}</span><Link href="/para-profesores">{es ? 'Descubre SpanishCue para profesores' : 'Discover SpanishCue for teachers'} →</Link></div>
    </main>
    <SpanishCueFooter />
  </div>;
}
