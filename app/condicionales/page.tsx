"use client";

import { useMemo, useState, type CSSProperties } from "react";
import "./style.css";
import VerbalPosition from "../verbal-system/VerbalPosition";
import {conditionalPosition} from "../verbal-system/positions";
import {
  advancedConnectors,
  chapters,
  finalMission,
  irregularParticiples,
  irregularStems,
  presentSubjIrregulars,
  tenseTables,
  type ConditionalChapter,
} from "./data";

type Screen = "cover" | "map" | "chapter" | "atlas";

const tableMap: Record<string, string[]> = {
  realidad: ["presente", "imperativo"],
  posible: ["presente", "futuro", "imperativo"],
  hipotetico: ["imperfecto-subjuntivo", "condicional-simple"],
  pasado: ["pluscuamperfecto-subjuntivo", "condicional-compuesto"],
  mixtos: ["presente-subjuntivo", "imperfecto-subjuntivo", "condicional-simple", "pluscuamperfecto-subjuntivo", "condicional-compuesto"],
};

const grammarBlueprints: Record<string, { condition: string; conditionEn?: string; conditionWhy: string; conditionWhyEn?: string; result: string; resultEn?: string; resultWhy: string; resultWhyEn?: string; memory: string; memoryEn?: string }> = {
  realidad: { condition: "PRESENTE DE INDICATIVO", conditionEn: "PRESENT INDICATIVE", conditionWhy: "La condición se presenta como real, normal o comprobable.", conditionWhyEn: "The condition is presented as real, normal or verifiable.", result: "PRESENTE O IMPERATIVO", resultEn: "PRESENT OR COMMAND", resultWhy: "La consecuencia es habitual, segura o funciona como instrucción.", resultWhyEn: "The result is habitual, certain or works as an instruction.", memory: "REAL + REAL: no imaginamos otro mundo.", memoryEn: "REAL + REAL: we are not imagining another world." },
  posible: { condition: "PRESENTE DE INDICATIVO", conditionEn: "PRESENT INDICATIVE", conditionWhy: "Aunque hablamos del futuro, después de si usamos presente.", conditionWhyEn: "Even when we talk about the future, we use the present after si.", result: "FUTURO, PRESENTE O IMPERATIVO", resultEn: "FUTURE, PRESENT OR COMMAND", resultWhy: "Elegimos según queramos predecir, prometer, decidir u ordenar.", resultWhyEn: "We choose according to whether we want to predict, promise, decide or command.", memory: "POSIBLE AHORA → RESULTADO FUTURO.", memoryEn: "POSSIBLE NOW → FUTURE RESULT." },
  hipotetico: { condition: "IMPERFECTO DE SUBJUNTIVO", conditionWhy: "El subjuntivo aleja la condición de la realidad actual.", result: "CONDICIONAL SIMPLE", resultWhy: "Expresa lo que ocurriría solamente dentro de esa situación imaginada.", memory: "-RA/-SE EN LA CONDICIÓN → -RÍA EN EL RESULTADO." },
  pasado: { condition: "HUBIERA + PARTICIPIO", conditionWhy: "Reescribe una causa terminada que en realidad no ocurrió así.", result: "HABRÍA + PARTICIPIO", resultWhy: "Imagina una consecuencia pasada que tampoco ocurrió.", memory: "DOS PASADOS ALTERNATIVOS: HUBIERA → HABRÍA." },
  mixtos: { condition: "EL TIEMPO DE LA CAUSA", conditionWhy: "Primero ubicamos cuándo nace la condición: pasado o presente.", result: "EL TIEMPO DE LA CONSECUENCIA", resultWhy: "Después ubicamos cuándo se siente el resultado: pasado o presente.", memory: "NO COPIES TIEMPOS: SEGUÍ LA LÍNEA TEMPORAL." },
};

const memoryQuestions: Record<string, { es: string; en: string }> = {
  realidad: { es: "¿Esto ocurre siempre o normalmente?", en: "Does this always or normally happen?" },
  posible: { es: "¿Todavía puede ocurrir de verdad?", en: "Can this still really happen?" },
  hipotetico: { es: "¿Lo imagino como lejano o contrario a mi realidad?", en: "Am I imagining it as remote or contrary to my reality?" },
  pasado: { es: "¿Ya es imposible cambiar esta condición?", en: "Is it already impossible to change this condition?" },
  mixtos: { es: "¿La causa y el resultado pertenecen a tiempos distintos?", en: "Do the cause and result belong to different times?" },
};

function PairText({ es, en }: { es: string; en: string }) {
  return <><b>{es}</b><span>{en}</span></>;
}

function ConjugationTable({ id }: { id: string }) {
  const table = tenseTables.find((item) => item.id === id);
  if (!table) return null;
  return (
    <article className="co-tense-card">
      <header><small>{table.cue}{table.cueEn && <span className="co-en">{table.cueEn}</span>}</small><h3>{table.title}</h3><p>{table.english}</p></header>
      <VerbalPosition items={[id]} compact />
      <div className="co-tense-head"><span>PERSONA · PERSON</span><b>HABLAR · TO SPEAK</b><b>COMER · TO EAT</b><b>VIVIR · TO LIVE</b></div>
      {table.rows.map(([person, ar, er, ir]) => (
        <div className="co-tense-row" key={person}><span>{person}</span><b>{ar}</b><b>{er}</b><b>{ir}</b></div>
      ))}
    </article>
  );
}

function PortalParticles({ color }: { color: string }) {
  return (
    <div className="co-particles" style={{ "--portal": color } as CSSProperties} aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ "--particle": index } as CSSProperties} />)}
    </div>
  );
}

export default function CondicionalesPage() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [active, setActive] = useState<ConditionalChapter>(chapters[0]);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const progress = Math.round((visited.size / chapters.length) * 100);
  const currentIndex = chapters.findIndex((chapter) => chapter.id === active.id);
  const relevantTables = useMemo(() => tableMap[active.id] || [], [active.id]);
  const blueprint = grammarBlueprints[active.id];
  const isBasic = active.id === "realidad" || active.id === "posible";

  const show = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enter = (chapter: ConditionalChapter) => {
    setActive(chapter);
    setVisited((current) => new Set([...current, chapter.id]));
    show("chapter");
  };

  const move = (step: number) => enter(chapters[(currentIndex + step + chapters.length) % chapters.length]);

  const reveal = (key: string) => setRevealed((current) => {
    const next = new Set(current);
    if (next.has(key)) next.delete(key); else next.add(key);
    return next;
  });

  return (
    <main className="co-app">
      <nav className="co-nav">
        <a href="/" className="co-brand"><span><img src="/chespanish-guide-avatar.png" alt="" /></span><div><b>CHESPANISH</b><small>GRAMMAR ADVENTURES</small></div></a>
        <div className="co-progress"><span>PROGRESO · PROGRESS</span><i><b style={{ width: `${progress}%` }} /></i><strong>{visited.size}/{chapters.length}</strong></div>
        <div className="co-nav-actions">
          <button onClick={() => show("atlas")}>ATLAS</button>
          <button onClick={() => show(screen === "cover" ? "map" : "cover")}>{screen === "cover" ? "RUTA · PATH" : "INICIO · HOME"}</button>
        </div>
      </nav>

      {screen === "cover" && (
        <section className="co-cover">
          <PortalParticles color="#9d7cff" />
          <div className="co-cover-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="co-cover-copy">
            <div className="co-kicker"><span>A1 → C1</span> CLASE MAESTRA · 100% BILINGÜE</div>
            <p className="co-overline">MUNDOS POSIBLES · POSSIBLE WORLDS</p>
            <h1>EL MULTIVERSO<br /><em>DEL “SI”</em></h1>
            <p className="co-lead">Una expedición por <b>todos los condicionales del español</b>: desde “Si llueve, me quedo” hasta “De haberlo sabido, habría actuado distinto”. Cada portal suma exactamente una nueva pieza.<span className="co-en">An expedition through every Spanish conditional. Each portal adds exactly one new piece.</span></p>
            <div className="co-cover-actions"><button onClick={() => show("map")}>ABRIR EL PRIMER PORTAL · OPEN THE FIRST PORTAL <span>→</span></button><button className="ghost" onClick={() => show("atlas")}>CONJUGACIONES · CONJUGATIONS</button></div>
            <div className="co-cover-stats"><article><b>5</b><span>mundos progresivos · progressive worlds</span></article><article><b>8</b><span>tablas completas · full tables</span></article><article><b>30+</b><span>ejemplos bilingües · bilingual examples</span></article></div>
          </div>
          <div className="co-heroes" aria-hidden="true">
            <span className="co-hero-halo" />
            <img src="/conditional-characters.webp" alt="" />
            <i className="co-character-tag tag-real">REALIDAD</i><i className="co-character-tag tag-future">FUTURO</i><i className="co-character-tag tag-whatif">¿Y SI…?</i><i className="co-character-tag tag-past">PASADO</i>
          </div>
          <button className="co-scroll" onClick={() => show("map")}><span>↓</span> EMPEZAR DE A POCO · START STEP BY STEP</button>
        </section>
      )}

      {screen === "map" && (
        <section className="co-map">
          <header className="co-map-head">
            <div><span>RUTA PROGRESIVA · PROGRESSIVE PATH · A1 → C1</span><h1>Cada portal cambia<br />una sola regla.<small className="co-en">Each portal changes only one rule.</small></h1></div>
            <div><p>Empezá por el primer portal y avanzá de a poco. Cada nueva estructura se apoya en la lógica que ya aprendiste.<span className="co-en">Start with the first portal and move forward step by step. Each new structure builds on the logic you already learned.</span></p><button onClick={() => enter(chapters.find((chapter) => !visited.has(chapter.id)) || chapters[0])}>CONTINUAR · CONTINUE →</button></div>
          </header>

          <section className="co-course-intro">
            <header><span>INTRODUCCIÓN · INTRODUCTION</span><h2>¿Qué es una oración condicional?<small className="co-en">What is a conditional sentence?</small></h2><p>Es una oración con <b>dos bloques</b>. Uno presenta una condición y el otro explica qué pasa, pasará, pasaría o habría pasado como consecuencia.<span className="co-en">It is a sentence with <b>two parts</b>: one presents a condition and the other explains its result.</span></p></header>
            <div>
              <article><span>1</span><div><small>CONDICIÓN · CONDITION</small><b>Si tengo tiempo…</b><p>La situación que abre una posibilidad.<span className="co-en">The situation that opens a possibility.</span></p></div></article>
              <article><span>2</span><div><small>CONSECUENCIA · RESULT</small><b>…voy con vos.</b><p>El resultado de esa condición.<span className="co-en">The result of that condition.</span></p></div></article>
              <article><span>★</span><div><small>MÉTODO · METHOD</small><b>REALIDAD + TIEMPO<span className="co-en">REALITY + TIME</span></b><p>Primero preguntá: ¿es real o imaginario? Después: ¿hablo del presente, futuro o pasado?<span className="co-en">First ask: is it real or imaginary? Then: am I talking about the present, future or past?</span></p></div></article>
            </div>
          </section>

          <section className="co-master-ladder">
            <header><span>MAPA GRAMATICAL · GRAMMAR MAP</span><h2>Primero elegí la realidad. Después, el tiempo.<small className="co-en">First choose the reality. Then choose the time.</small></h2><p>Recordá estas cinco fórmulas: con ellas vas a poder reconstruir todo el sistema de los condicionales.<span className="co-en">Remember these five formulas: they let you rebuild the entire conditional system.</span></p></header>
            <div>
              {chapters.map((chapter) => <article key={chapter.id} style={{ "--portal": chapter.color } as CSSProperties}><span>{chapter.number}</span><div><small>{chapter.level} · {chapter.title} · {chapter.english}</small><b>{chapter.formula}<span className="co-en">{chapter.formulaEn}</span></b><p>{chapter.tagline.es}<span className="co-en">{chapter.tagline.en}</span></p></div></article>)}
            </div>
          </section>

          <div className="co-route-line" aria-hidden="true">{chapters.map((chapter) => <i key={chapter.id} className={visited.has(chapter.id) ? "done" : ""} />)}</div>

          <div className="co-portal-grid">
            {chapters.map((chapter, index) => (
              <button className={`co-portal-card ${visited.has(chapter.id) ? "visited" : ""}`} style={{ "--portal": chapter.color, "--delay": `${index * .12}s` } as CSSProperties} onClick={() => enter(chapter)} key={chapter.id}>
                <span className="co-portal-number">PORTAL {chapter.number}</span><span className="co-portal-level">{chapter.level}</span>
                <span className="co-portal-icon">{chapter.icon}<i /></span>
                <span className="co-portal-copy"><small>{chapter.english}</small><b>{chapter.title}</b><em>{chapter.tagline.es}<span className="co-en">{chapter.tagline.en}</span></em></span>
                <span className="co-portal-enter">ENTRAR · ENTER <b>→</b></span>
              </button>
            ))}
          </div>

          <section className="co-golden-rule"><span>⚠️ REGLA CLAVE · KEY RULE</span><div><b>Después de SI no usamos futuro ni condicional.<span className="co-en">After SI, we do not use the future or conditional.</span></b><p>Si vendrá / si tendría ❌ · Si viene / si tuviera ✅</p></div></section>

          <button className="co-atlas-call" onClick={() => show("atlas")}><span>ATLAS · CONJUGATION ATLAS</span><b>Siete tiempos y el imperativo, irregulares y conectores<span className="co-en">Seven tenses and the imperative, irregular forms and connectors</span></b><i>ABRIR · OPEN →</i></button>
        </section>
      )}

      {screen === "chapter" && (
        <section className="co-chapter" style={{ "--portal": active.color } as CSSProperties}>
          <header className="co-chapter-hero">
            <PortalParticles color={active.color} />
            <div className="co-chapter-top"><button onClick={() => show("map")}>← MAPA · MAP</button><span>PORTAL {active.number} · {active.level}</span></div>
            <div className="co-chapter-icon">{active.icon}<i /></div>
            <div className="co-chapter-title"><small>{active.english}</small><h1>{active.title}</h1><PairText {...active.tagline} /></div>
            <div className="co-formula-beam"><span>LA FÓRMULA · THE FORMULA</span><b>{active.formula}</b><i>{active.formulaEn}</i></div>
          </header>

          <div className="co-chapter-body">
            <VerbalPosition items={conditionalPosition[active.id]} context="Este mundo enseña una construcción condicional. No es un tiempo ni un modo nuevo: combina las siguientes formas según la condición y la consecuencia." />
            <section className="co-learning-order">
              <span>ORDEN DE APRENDIZAJE · LEARNING ORDER</span>
              <div><b>1 · ENTENDER<span>UNDERSTAND</span></b><i>→</i><b>2 · ELEGIR LOS TIEMPOS<span>CHOOSE THE TENSES</span></b><i>→</i><b>3 · CONJUGAR<span>CONJUGATE</span></b><i>→</i><b>4 · PRACTICAR<span>PRACTISE</span></b><i>→</i><b>5 · HABLAR<span>SPEAK</span></b></div>
            </section>

            <section className="co-concept">
              <div className="co-section-number">01</div><article><span>INTRODUCCIÓN GRAMATICAL · GRAMMAR INTRODUCTION</span><h2>Primero entendé la idea.<small className="co-en">First understand the idea.</small></h2><PairText {...active.meaning} /></article>
            </section>

            <section className="co-logic-strip">
              <div><small>CONDICIÓN · CONDITION</small><b>Si + …</b><span>abre una posibilidad<em className="co-en">opens a possibility</em></span></div><i>→</i><div><small>CONSECUENCIA · RESULT</small><b>entonces…</b><span>muestra el resultado<em className="co-en">shows the result</em></span></div><i>↔</i><div><small>ORDEN FLEXIBLE · FLEXIBLE ORDER</small><b>B si A</b><span>la lógica no cambia<em className="co-en">the logic does not change</em></span></div>
            </section>

            <section className="co-memory-rule">
              <span>LA PREGUNTA CLAVE · THE KEY QUESTION</span>
              <h2>{memoryQuestions[active.id].es}{isBasic && <small className="co-en">{memoryQuestions[active.id].en}</small>}</h2>
              <p>Si la respuesta coincide, elegiste el portal correcto. Recién ahora miramos los tiempos verbales.{isBasic && <span className="co-en">If the answer matches, you chose the correct portal. Only now do we look at the verb tenses.</span>}</p>
            </section>

            <section className="co-grammar-breakdown">
              <header><span>GRAMÁTICA EN TRES PASOS · GRAMMAR IN THREE STEPS</span><h2>Armá la oración sin adivinar.<small className="co-en">Build the sentence without guessing.</small></h2></header>
              <div>
                <article><small>PASO A · DESPUÉS DE “SI” · AFTER “SI”</small><b>{blueprint.condition}{isBasic && <span className="co-en">{blueprint.conditionEn}</span>}</b><p>{blueprint.conditionWhy}{isBasic && <span className="co-en">{blueprint.conditionWhyEn}</span>}</p></article>
                <i>→</i>
                <article><small>PASO B · EN EL RESULTADO · IN THE RESULT</small><b>{blueprint.result}{isBasic && <span className="co-en">{blueprint.resultEn}</span>}</b><p>{blueprint.resultWhy}{isBasic && <span className="co-en">{blueprint.resultWhyEn}</span>}</p></article>
              </div>
              <aside><span>PARA RECORDAR · REMEMBER</span><b>{blueprint.memory}{isBasic && <span className="co-en">{blueprint.memoryEn}</span>}</b></aside>
            </section>

            <section className="co-conjugations">
              <header><span>02 · CONJUGACIONES · CONJUGATIONS</span><h2>Ahora sí: construí cada bloque.<small className="co-en">Now build each part.</small></h2><p>Leé primero la columna de personas y después compará HABLAR, COMER y VIVIR. No memorices una oración completa: aprendé el patrón de cada tiempo.{isBasic && <span className="co-en">Read the person column first, then compare HABLAR, COMER and VIVIR. Learn the pattern of each tense instead of memorising a complete sentence.</span>}</p></header>
              <div className="co-tense-grid">{relevantTables.map((id) => <ConjugationTable id={id} key={id} />)}</div>
              {(active.id === "hipotetico" || active.id === "pasado" || active.id === "mixtos") && <button className="co-more-tables" onClick={() => show("atlas")}>VER TODOS LOS IRREGULARES Y LAS OCHO TABLAS →</button>}
            </section>

            <section className="co-uses">
              <header><span>03 · CUÁNDO LO USAMOS · WHEN WE USE IT</span><h2>Después de la forma, la intención.<small className="co-en">After the form, focus on the intention.</small></h2><p>Cada uso mantiene la misma lógica gramatical. Lo que cambia es el mensaje que queremos comunicar.{isBasic && <span className="co-en">Every use keeps the same grammar. What changes is the message we want to communicate.</span>}</p></header>
              <div>{active.uses.map((use, index) => <article key={use.es}><span>{String(index + 1).padStart(2, "0")}</span><div><PairText {...use} /></div></article>)}</div>
            </section>

            <section className="co-examples">
              <header><span>04 · EJEMPLOS · EXAMPLES</span><h2>La regla funcionando.<small className="co-en">The rule in action.</small></h2></header>
              <div>{active.examples.map((example, index) => <article key={example.es}><div className="co-window"><i /><i /><i /></div><small>{example.note}{isBasic && example.noteEn && <> · {example.noteEn}</>}</small><b>{example.es}</b><span>{example.en}</span><em>{index === 0 ? "CONDICIÓN → RESULTADO · CONDITION → RESULT" : index === 1 ? "ORDEN FLEXIBLE · FLEXIBLE ORDER" : "USO NATURAL · NATURAL USE"}</em></article>)}</div>
            </section>

            <section className="co-traps">
              <div className="co-trap-character" aria-hidden="true">🧑‍🚀<span>¡OJO! · WATCH OUT!</span></div>
              <article><span>05 · ERRORES CLAVE · KEY MISTAKES</span><h2>Antes de practicar, revisá esto.<small className="co-en">Review this before practising.</small></h2>{active.traps.map((trap) => <div key={trap.es}><PairText {...trap} /></div>)}</article>
            </section>

            <section className="co-practice">
              <header><span>06 · PRÁCTICA · PRACTICE</span><h2>Comprobá que entendiste.<small className="co-en">Check your understanding.</small></h2><p>Completá primero sin mirar. Después tocá la tarjeta para ver la respuesta y, más importante, la explicación.{isBasic && <span className="co-en">Complete each sentence without looking. Then tap the card to see the answer and the explanation.</span>}</p></header>
              <div>{active.exercises.map((exercise, index) => {
                const key = `${active.id}-${index}`;
                const isOpen = revealed.has(key);
                return <button className={isOpen ? "open" : ""} onClick={() => reveal(key)} key={exercise.prompt}><span>{String(index + 1).padStart(2, "0")}</span><b>{exercise.prompt}{isBasic && exercise.promptEn && <span className="co-en">{exercise.promptEn}</span>}</b><i>{isOpen ? "OCULTAR · HIDE" : "VER RESPUESTA · SHOW ANSWER"}</i>{isOpen && <em><strong>{exercise.answer}</strong>{exercise.why}{isBasic && exercise.whyEn && <span className="co-en">{exercise.whyEn}</span>}</em>}</button>;
              })}</div>
            </section>

            <section className="co-speaking">
              <div className="co-speaking-orbit" aria-hidden="true"><i /><span>{active.icon}</span></div>
              <header><span>07 · PREGUNTAS · QUESTIONS</span><h2>Ahora sí: usalo para hablar.<small className="co-en">Now use it to speak.</small></h2><p>Primero respondé. Después preguntá “¿por qué?”. Finalmente cambiá una condición y compará el nuevo resultado.{isBasic && <span className="co-en">First answer. Then ask “why?”. Finally, change one condition and compare the new result.</span>}</p></header>
              <div>{active.speaking.map((prompt, index) => <article key={prompt.es}><span>{index + 1}</span><PairText {...prompt} /></article>)}</div>
            </section>

            <footer className="co-chapter-nav"><button onClick={() => move(-1)}>← ANTERIOR · PREVIOUS</button><button onClick={() => show("map")}>MAPA · MAP</button><button onClick={() => move(1)}>SIGUIENTE · NEXT →</button></footer>
          </div>
        </section>
      )}

      {screen === "atlas" && (
        <section className="co-atlas">
          <header className="co-atlas-hero"><button onClick={() => show("map")}>← VOLVER A LA RUTA</button><span>REFERENCIA COMPLETA · A1 → C1</span><h1>El Atlas de<br /><em>las conjugaciones</em></h1><p>Todo lo que necesitás para construir cualquier condicional sin mezclar tiempos.</p></header>
          <div className="co-atlas-body">
            <section className="co-atlas-rule"><b>SI + FUTURO / CONDICIONAL = ⚠️</b><span>En la condición usamos presente o subjuntivo. El futuro y el condicional aparecen normalmente en el resultado.</span></section>
            <section className="co-micro-rules">
              <article><span>SI</span><div><b>si = if</b><p>Sin tilde: Si venís, cocino.</p></div></article>
              <article><span>SÍ</span><div><b>sí = yes / oneself</b><p>Con tilde: Sí, voy. · Lo hizo por sí mismo.</p></div></article>
              <article><span>,</span><div><b>La coma depende del orden</b><p>Si A, B. · B si A.</p></div></article>
            </section>
            <section><header className="co-atlas-section-head"><span>01 · SIETE TIEMPOS Y EL IMPERATIVO</span><h2>Conjugación completa</h2></header><div className="co-tense-grid atlas-grid">{tenseTables.map((table) => <ConjugationTable id={table.id} key={table.id} />)}</div></section>
            <section className="co-irregulars"><header className="co-atlas-section-head"><span>02 · FUTURO Y CONDICIONAL</span><h2>Las doce raíces irregulares</h2><p>La raíz cambia, pero las terminaciones son exactamente las mismas.</p></header><div>{irregularStems.map(([verb, stem, forms]) => <article key={verb}><b>{verb}</b><span>{stem}</span><em>{forms}</em></article>)}</div></section>
            <section className="co-subjunctive-lab"><header className="co-atlas-section-head"><span>02B · SUBJUNTIVO</span><h2>Dos detalles avanzados</h2></header><div><article><small>FORMA -SE · EQUIVALENTE</small><b>hablase · hablases · hablase · hablásemos · hablasen</b><p>Podés reemplazar -ra por -se sin cambiar el significado: si tuviera = si tuviese. La forma -ra es mucho más frecuente en la conversación.</p></article><article><small>PRESENTE · SEIS IRREGULARES CLAVE</small><div>{presentSubjIrregulars.map(([verb, forms]) => <p key={verb}><b>{verb}</b><span>{forms}</span></p>)}</div></article></div></section>
            <section className="co-participles"><header className="co-atlas-section-head"><span>03 · TIEMPOS COMPUESTOS</span><h2>Participios irregulares</h2></header><div>{irregularParticiples.map(([verb, participle]) => <article key={verb}><span>{verb}</span><b>{participle}</b></article>)}</div></section>
            <section className="co-connectors"><header className="co-atlas-section-head"><span>04 · MÁS ALLÁ DE “SI”</span><h2>Conectores avanzados</h2><p>Estos conectores convierten una condición en requisito, excepción, advertencia o registro formal.</p></header><div>{advancedConnectors.map(([connector, english, example]) => <article key={connector}><b>{connector}</b><span>{english}</span><p>{example}</p></article>)}</div></section>
            <section className="co-master-compare"><header className="co-atlas-section-head"><span>05 · LA FOTO COMPLETA</span><h2>Un verbo, cinco universos</h2></header><div><article><small>REAL</small><b>Si tengo tiempo, voy.</b><span>If I have time, I go.</span></article><article><small>POSIBLE</small><b>Si tengo tiempo, iré.</b><span>If I have time, I’ll go.</span></article><article><small>HIPOTÉTICO</small><b>Si tuviera tiempo, iría.</b><span>If I had time, I would go.</span></article><article><small>IMPOSIBLE</small><b>Si hubiera tenido tiempo, habría ido.</b><span>If I had had time, I would have gone.</span></article><article><small>MIXTO</small><b>Si hubiera tenido tiempo, ahora estaría allí.</b><span>If I had had time, I would be there now.</span></article></div></section>
            <section className="co-final-mission"><header><span>MISIÓN FINAL</span><h2>Cinco frases. Cinco universos. Una historia.</h2><p>Respondé en orden y después conectá las cinco ideas como si fueran versiones alternativas de tu vida.</p></header><div>{finalMission.map((mission, index) => <article key={mission.situation}><span>{index + 1}</span><b>{mission.situation}</b><i>{mission.target}</i></article>)}</div></section>
          </div>
        </section>
      )}
    </main>
  );
}
