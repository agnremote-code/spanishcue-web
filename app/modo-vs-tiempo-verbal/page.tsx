import Link from "next/link";
import MoodTenseDisclosure from "../verbal-system/MoodTenseDisclosure";
import GrammarStep from "../grammar-steps/GrammarStep";
import "./style.css";

export default function ModoVsTiempoPage() {
  return (
    <main className="vmt-page">
      <nav><Link href="/">← Biblioteca</Link><span>SPANISHCUE · GRAMÁTICA</span></nav>
      <header>
        <small>MINI CLASE BASE · A1–C1</small>
        <h1>Modo <em>vs.</em><br />tiempo verbal</h1>
        <p>Una distinción breve para entender mejor presente, pasado, subjuntivo, imperativo y condicional.</p>
      </header>

      <section className="vmt-page-theory">
        <MoodTenseDisclosure showLessonLink={false} />
      </section>

      <section className="vmt-page-method grammar-step-stack">
        <GrammarStep number="02" eyebrow="MÉTODO" title="¿Cómo analizo cualquier verbo?" description="Tres preguntas, siempre en el mismo orden." accent="#249e91">
          <div className="vmt-method-content">
            <header><small>PARA ANALIZAR CUALQUIER VERBO</small><h2>Tres preguntas, en este orden.</h2></header>
            <div>
              <article><span>01</span><b>¿Cuál es el verbo conjugado?</b><p>Encontrá la forma exacta: viene, venga, viniera, abriría.</p></article>
              <article><span>02</span><b>¿En qué modo está?</b><p>Decidí si presenta información, filtra la acción o dirige a otra persona.</p></article>
              <article><span>03</span><b>¿En qué tiempo está?</b><p>Ubicá esa forma dentro de su modo y leé el contexto temporal.</p></article>
            </div>
          </div>
        </GrammarStep>
      </section>

      <footer><p>Ahora podés recorrer el sistema completo por modo o por tiempo: las dos rutas llegan a las mismas clases.</p><Link href="/sistema-verbal">★ ABRIR SISTEMA VERBAL →</Link></footer>
    </main>
  );
}
