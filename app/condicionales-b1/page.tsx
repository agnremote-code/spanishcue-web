"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import "../condicionales/style.css";
import "./style.css";
import GrammarStep from "../grammar-steps/GrammarStep";
import MoodTenseDisclosure from "../verbal-system/MoodTenseDisclosure";
import VerbalPosition from "../verbal-system/VerbalPosition";
import {
  conditionalPosition,
  b1TablePosition,
} from "../verbal-system/positions";
import {
  comparacionFinal,
  diagnostico,
  unidades,
  type Tabla,
  type Unidad,
} from "./data";

type Pantalla = "portada" | "mapa" | "unidad" | "resumen";

const nombreEnPregunta: Record<Unidad["id"], string> = {
  cero: "el condicional cero",
  primero: "el primer condicional",
  segundo: "el segundo condicional",
  tercero: "el tercer condicional",
  mixtos: "los condicionales mixtos",
};

function Particulas({ color }: { color: string }) {
  return (
    <div
      className="co-particles"
      style={{ "--portal": color } as CSSProperties}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }, (_, indice) => (
        <i key={indice} style={{ "--particle": indice } as CSSProperties} />
      ))}
    </div>
  );
}

function TablaGramatical({ tabla }: { tabla: Tabla }) {
  return (
    <article className="co-tense-card cb-tabla">
      <header>
        <small>CONJUGACIÓN Y FORMACIÓN</small>
        <h3>{tabla.titulo}</h3>
        <p>{tabla.nota}</p>
      </header>
      <VerbalPosition items={b1TablePosition[tabla.titulo]} compact />
      <div
        className="cb-tabla-cuerpo"
        style={{ "--columnas": tabla.columnas.length } as CSSProperties}
      >
        <div className="cb-tabla-fila cb-tabla-cabecera">
          {tabla.columnas.map((columna) => (
            <b key={columna}>{columna}</b>
          ))}
        </div>
        {tabla.filas.map((fila, indice) => (
          <div className="cb-tabla-fila" key={`${fila[0]}-${indice}`}>
            {fila.map((celda, celdaIndice) =>
              celdaIndice === 0 ? (
                <span key={celdaIndice}>{celda}</span>
              ) : (
                <b key={celdaIndice}>{celda}</b>
              ),
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function CondicionalesB1Page() {
  const [pantalla, setPantalla] = useState<Pantalla>("portada");
  const [activa, setActiva] = useState<Unidad>(unidades[0]);
  const [visitadas, setVisitadas] = useState<Set<string>>(new Set());
  const [respuestas, setRespuestas] = useState<Set<string>>(new Set());
  const indiceActual = unidades.findIndex((unidad) => unidad.id === activa.id);
  const progreso = Math.round((visitadas.size / unidades.length) * 100);

  const mostrar = (destino: Pantalla) => {
    setPantalla(destino);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const entrar = (unidad: Unidad) => {
    setActiva(unidad);
    setVisitadas((actuales) => new Set([...actuales, unidad.id]));
    mostrar("unidad");
  };

  const mover = (paso: number) => {
    const siguiente = indiceActual + paso;
    if (siguiente < 0) return mostrar("mapa");
    if (siguiente >= unidades.length) return mostrar("resumen");
    entrar(unidades[siguiente]);
  };

  const alternarRespuesta = (clave: string) =>
    setRespuestas((actuales) => {
      const nuevas = new Set(actuales);
      if (nuevas.has(clave)) nuevas.delete(clave);
      else nuevas.add(clave);
      return nuevas;
    });

  return (
    <main className="co-app co-b1">
      <nav className="co-nav">
        <Link href="/" className="co-brand">
          <span>
            <img src="/brand/mascot/portrait.webp" alt="" />
          </span>
          <div>
            <b>SPANISHCUE</b>
            <small>AVENTURAS GRAMATICALES</small>
          </div>
        </Link>
        <div className="co-progress">
          <span>PROGRESO</span>
          <i>
            <b style={{ width: `${progreso}%` }} />
          </i>
          <strong>
            {visitadas.size}/{unidades.length}
          </strong>
        </div>
        <div className="co-nav-actions">
          <button onClick={() => mostrar("mapa")}>MAPA</button>
          <button onClick={() => mostrar("resumen")}>RESUMEN</button>
          <button
            onClick={() => mostrar(pantalla === "portada" ? "mapa" : "portada")}
          >
            {pantalla === "portada" ? "RUTA" : "INICIO"}
          </button>
        </div>
      </nav>

      {pantalla === "portada" && (
        <section className="co-cover cb-portada">
          <Particulas color="#9d7cff" />
          <div className="co-cover-rings" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="co-cover-copy">
            <div className="co-kicker">
              <span>B1 PROGRESIVO</span> CLASE COMPLETA · 100% EN ESPAÑOL
            </div>
            <p className="co-overline">GRAMÁTICA PURA · UNA REGLA POR VEZ</p>
            <h1>
              CONDICIONALES
              <br />
              <em>PASO A PASO</em>
            </h1>
            <p className="co-lead">
              Un recorrido ordenado por <b>todo el sistema condicional</b>:
              cero, primero, segundo, tercero y mixtos. Una estructura por vez,
              con la explicación necesaria y sin mezclar tiempos.
            </p>
            <div className="co-cover-actions">
              <button onClick={() => mostrar("mapa")}>
                EMPEZAR PASO A PASO <span>→</span>
              </button>
              <button className="ghost" onClick={() => mostrar("resumen")}>
                VER EL CUADRO FINAL
              </button>
            </div>
            <div className="co-cover-stats">
              <article>
                <b>5</b>
                <span>bloques separados</span>
              </article>
              <article>
                <b>10</b>
                <span>tablas gramaticales</span>
              </article>
              <article>
                <b>20</b>
                <span>prácticas explicadas</span>
              </article>
            </div>
          </div>
          <div className="co-heroes" aria-hidden="true">
            <span className="co-hero-halo" />
            <img src="/conditional-characters.webp" alt="" />
            <i className="co-character-tag tag-real">REAL</i>
            <i className="co-character-tag tag-future">POSIBLE</i>
            <i className="co-character-tag tag-whatif">HIPOTÉTICO</i>
            <i className="co-character-tag tag-past">PASADO</i>
          </div>
          <button className="co-scroll" onClick={() => mostrar("mapa")}>
            <span>↓</span> ABRIR LA RUTA GRAMATICAL
          </button>
        </section>
      )}

      {pantalla === "mapa" && (
        <section className="co-map">
          <header className="co-map-head" id="introduccion-condicionales">
            <div>
              <span>ANTES DE CONJUGAR</span>
              <h1>
                Primero la idea.
                <br />
                Después la forma.
              </h1>
            </div>
            <div>
              <p>
                Abrí cada paso cuando llegue el momento de explicarlo. La ruta
                avanza de la idea general a cada tipo de condicional.
              </p>
              <button
                onClick={() =>
                  entrar(
                    unidades.find((unidad) => !visitadas.has(unidad.id)) ||
                      unidades[0],
                  )
                }
              >
                IR A LOS CONDICIONALES →
              </button>
            </div>
          </header>

          <div className="cb-foundation-stack">
            <GrammarStep
              number="01"
              eyebrow="PASO PREVIO"
              title="¿Qué es un condicional?"
              description="La idea general antes de ver los cinco tipos."
              accent="#52d6a5"
            >
              <section className="cb-general-definition">
                <p>
                  Un condicional es una estructura que conecta{" "}
                  <b>una condición</b> con <b>una consecuencia</b>.
                </p>
                <p>
                  La consecuencia depende de esa condición: puede ocurrir
                  siempre, todavía ser posible, existir solo en la imaginación o
                  pertenecer a un pasado que ya no se puede cambiar.
                </p>
                <div
                  className="cb-general-example"
                  aria-label="Ejemplo de condición y consecuencia"
                >
                  <span>
                    <small>CONDICIÓN</small>
                    <b>Si tengo tiempo…</b>
                  </span>
                  <i>→</i>
                  <span>
                    <small>CONSECUENCIA</small>
                    <b>…voy con vos.</b>
                  </span>
                </div>
              </section>
            </GrammarStep>

            <GrammarStep
              number="02"
              eyebrow="PASO PREVIO"
              title="¿Cuáles son sus dos partes?"
              description="Separá condición y consecuencia antes de elegir los verbos."
              accent="#5cc8ff"
            >
              <section className="co-course-intro cb-course-intro-inner">
                <div>
                  <article>
                    <span>1</span>
                    <div>
                      <small>CONDICIÓN</small>
                      <b>Si tengo tiempo…</b>
                      <p>
                        Presenta la situación necesaria para abrir el resultado.
                      </p>
                    </div>
                  </article>
                  <article>
                    <span>2</span>
                    <div>
                      <small>CONSECUENCIA</small>
                      <b>…voy con vos.</b>
                      <p>
                        Explica qué ocurre, ocurrirá, ocurriría o habría
                        ocurrido.
                      </p>
                    </div>
                  </article>
                  <article>
                    <span>★</span>
                    <div>
                      <small>DECISIÓN CENTRAL</small>
                      <b>REALIDAD + TIEMPO</b>
                      <p>
                        Primero: ¿real o hipotética? Después: ¿presente, futuro
                        o pasado?
                      </p>
                    </div>
                  </article>
                </div>
              </section>
            </GrammarStep>

            <GrammarStep
              number="03"
              eyebrow="PASO PREVIO"
              title="¿Qué reglas se repiten?"
              description="Tres ideas que sirven para todos los condicionales."
              accent="#ffb44c"
            >
              <section className="cb-reglas-generales cb-reglas-inner">
                <div>
                  <article>
                    <b>«Si» sin tilde</b>
                    <p>
                      La conjunción condicional se escribe <b>si</b>. La palabra{" "}
                      <b>sí</b> con tilde expresa afirmación o funciona como
                      pronombre.
                    </p>
                    <em>Si venís, avisame. · Sí, voy.</em>
                  </article>
                  <article>
                    <b>Orden y coma</b>
                    <p>
                      Los bloques pueden cambiar de orden. Si el bloque con «si»
                      va primero, normalmente lleva coma antes de la
                      consecuencia.
                    </p>
                    <em>Si tengo tiempo, voy. · Voy si tengo tiempo.</em>
                  </article>
                  <article>
                    <b>Cada bloque tiene una función</b>
                    <p>
                      La condición y la consecuencia no tienen por qué usar el
                      mismo modo ni el mismo tiempo.
                    </p>
                    <em>Si tuviera…, haría…</em>
                  </article>
                </div>
              </section>
            </GrammarStep>

            <MoodTenseDisclosure className="cb-verbal-help" />
          </div>

          <div className="co-route-line" aria-hidden="true">
            {unidades.map((unidad) => (
              <i
                key={unidad.id}
                className={visitadas.has(unidad.id) ? "done" : ""}
              />
            ))}
          </div>
          <div className="co-portal-grid">
            {unidades.map((unidad, indice) => (
              <button
                className={`co-portal-card ${visitadas.has(unidad.id) ? "visited" : ""}`}
                style={
                  {
                    "--portal": unidad.color,
                    "--delay": `${indice * 0.12}s`,
                  } as CSSProperties
                }
                onClick={() => entrar(unidad)}
                key={unidad.id}
              >
                <span className="co-portal-number">BLOQUE {unidad.numero}</span>
                <span className="co-portal-level">{unidad.nivel}</span>
                <span className="co-portal-icon">
                  {unidad.icono}
                  <i />
                </span>
                <span className="co-portal-copy">
                  <small>{unidad.subtitulo}</small>
                  <b>{unidad.nombre}</b>
                  <em>{unidad.preguntaClave}</em>
                </span>
                <span className="co-portal-enter">
                  ENTRAR <b>→</b>
                </span>
              </button>
            ))}
          </div>

          <section className="co-golden-rule">
            <span>⚠️ REGLA CENTRAL</span>
            <div>
              <b>
                Después de «si» no colocamos automáticamente futuro ni
                condicional.
              </b>
              <p>
                La forma correcta depende del grado de realidad: <b>si tengo</b>{" "}
                para una condición real; <b>si tuviera</b> para una condición
                hipotética; <b>si hubiera tenido</b> para una condición pasada
                irreal.
              </p>
            </div>
          </section>
          <button className="co-atlas-call" onClick={() => mostrar("resumen")}>
            <span>SÍNTESIS FINAL</span>
            <b>Comparación completa y diagnóstico para elegir la estructura</b>
            <i>ABRIR →</i>
          </button>
        </section>
      )}

      {pantalla === "unidad" && (
        <section
          className="co-chapter"
          style={{ "--portal": activa.color } as CSSProperties}
          key={activa.id}
        >
          <header className="co-chapter-hero">
            <Particulas color={activa.color} />
            <div className="co-chapter-top">
              <button onClick={() => mostrar("mapa")}>← VOLVER AL MAPA</button>
              <span>
                BLOQUE {activa.numero} · {activa.nivel}
              </span>
            </div>
            <div className="co-chapter-icon">
              {activa.icono}
              <i />
            </div>
            <div className="co-chapter-title cb-collapsible-title">
              <small>{activa.subtitulo}</small>
              <h1>{activa.nombre}</h1>
              <b>ABRÍ LOS PASOS UNO POR UNO</b>
            </div>
          </header>

          <div className="co-chapter-body">
            <div className="cb-step-list">
              <GrammarStep
                number="01"
                eyebrow="IDEA CENTRAL"
                title={`¿Qué ${activa.id === "mixtos" ? "son" : "es"} ${nombreEnPregunta[activa.id]}?`}
                description="Empezá por el significado, sin mirar todavía la fórmula."
              >
                <section className="cb-definition">
                  <p className="cb-definition-main">{activa.idea}</p>
                  <p>{activa.tiempo}</p>
                  <aside className="cb-key-question">
                    <small>PREGUNTA GUÍA</small>
                    <strong>{activa.preguntaClave}</strong>
                  </aside>
                </section>
              </GrammarStep>

              <GrammarStep
                number="02"
                eyebrow="USOS"
                title={`¿Para qué usamos ${nombreEnPregunta[activa.id]}?`}
                description="Abrí este paso para ver las situaciones más frecuentes."
              >
                <section className="co-uses cb-step-section">
                  <div>
                    {activa.usos.map((uso, indice) => (
                      <article key={uso.titulo}>
                        <span>{String(indice + 1).padStart(2, "0")}</span>
                        <div>
                          <b>{uso.titulo}</b>
                          <span>{uso.explicacion}</span>
                          <em>{uso.ejemplo}</em>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>

              <GrammarStep
                number="03"
                eyebrow="FÓRMULA"
                title="¿Cuál es la fórmula?"
                description="Recién ahora separá la condición de la consecuencia."
              >
                <section className="cb-formula-step">
                  <div className="cb-formula-focus">
                    <small>FÓRMULA CENTRAL</small>
                    <strong>{activa.formula}</strong>
                  </div>
                  <div className="co-grammar-breakdown cb-breakdown-inner">
                    <div>
                      <article>
                        <small>PASO A · DESPUÉS DE «SI»</small>
                        <b>{activa.condicion}</b>
                        <p>Este bloque establece la condición.</p>
                      </article>
                      <i>→</i>
                      <article>
                        <small>PASO B · EN LA CONSECUENCIA</small>
                        <b>{activa.consecuencia}</b>
                        <p>
                          Este bloque muestra el resultado que depende de la
                          condición.
                        </p>
                      </article>
                    </div>
                  </div>
                  <VerbalPosition
                    items={conditionalPosition[activa.id]}
                    context="El nombre de este bloque identifica un tipo de oración condicional, no un nuevo tiempo. Ubicá por separado las formas de la condición y de la consecuencia."
                  />
                </section>
              </GrammarStep>

              <GrammarStep
                number="04"
                eyebrow="CONSTRUCCIÓN"
                title="¿Cómo se construye?"
                description="Formá cada tiempo verbal en un orden claro."
              >
                <section className="cb-construccion cb-step-section">
                  <div>
                    {activa.construccion.map((bloque, indice) => (
                      <article key={bloque.titulo}>
                        <span>{String(indice + 1).padStart(2, "0")}</span>
                        <small>{bloque.titulo}</small>
                        <b>{bloque.regla}</b>
                        <ul>
                          {bloque.pasos.map((paso) => (
                            <li key={paso}>{paso}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>

              <GrammarStep
                number="05"
                eyebrow="CONJUGACIONES"
                title="¿Cómo se conjugan los verbos?"
                description="Consultá solo las tablas necesarias para este condicional."
              >
                <section className="co-conjugations cb-step-section">
                  <p className="cb-step-intro">
                    Las tablas muestran únicamente los tiempos que necesitás en
                    este bloque.
                  </p>
                  <div className="co-tense-grid">
                    {activa.tablas.map((tabla) => (
                      <TablaGramatical tabla={tabla} key={tabla.titulo} />
                    ))}
                  </div>
                </section>
              </GrammarStep>

              <GrammarStep
                number="06"
                eyebrow="EJEMPLOS"
                title="¿Cómo funciona en contexto?"
                description="Mirá qué expresa cada parte de la oración."
              >
                <section className="co-examples cb-ejemplos cb-step-section">
                  <div>
                    {activa.ejemplos.map((ejemplo, indice) => (
                      <article key={ejemplo.oracion}>
                        <div className="co-window">
                          <i />
                          <i />
                          <i />
                        </div>
                        <small>
                          EJEMPLO {String(indice + 1).padStart(2, "0")}
                        </small>
                        <b>{ejemplo.oracion}</b>
                        <span>
                          <strong>Condición:</strong> {ejemplo.condicion}
                        </span>
                        <span>
                          <strong>Consecuencia:</strong> {ejemplo.resultado}
                        </span>
                        <em>{ejemplo.lectura}</em>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>

              <GrammarStep
                number="07"
                eyebrow="ERRORES CLAVE"
                title="¿Qué errores hay que evitar?"
                description="Compará la forma incorrecta con la correcta."
              >
                <section className="co-traps cb-errores cb-traps-inner">
                  <div className="co-trap-character" aria-hidden="true">
                    🧑‍🚀<span>¡OJO!</span>
                  </div>
                  <article>
                    {activa.errores.map((error) => (
                      <div key={error.incorrecto}>
                        <b className="cb-mal">✕ {error.incorrecto}</b>
                        <b className="cb-bien">✓ {error.correcto}</b>
                        <span>{error.explicacion}</span>
                      </div>
                    ))}
                  </article>
                </section>
              </GrammarStep>

              <GrammarStep
                number="08"
                eyebrow="PRÁCTICA CONTROLADA"
                title="Ejercicios"
                description="Resolvé primero; después abrí cada respuesta."
              >
                <section className="co-practice cb-step-section">
                  <p className="cb-step-intro">
                    Cada respuesta incluye una explicación para corregir la
                    elección verbal.
                  </p>
                  <div>
                    {activa.ejercicios.map((ejercicio, indice) => {
                      const clave = `${activa.id}-${indice}`;
                      const abierta = respuestas.has(clave);
                      return (
                        <button
                          className={abierta ? "open" : ""}
                          onClick={() => alternarRespuesta(clave)}
                          key={clave}
                        >
                          <span>{String(indice + 1).padStart(2, "0")}</span>
                          <b>{ejercicio.consigna}</b>
                          <i>
                            {abierta ? "OCULTAR RESPUESTA" : "VER RESPUESTA"}
                          </i>
                          {abierta && (
                            <em>
                              <strong>{ejercicio.respuesta}</strong>
                              <small>{ejercicio.explicacion}</small>
                            </em>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </section>
              </GrammarStep>

              <GrammarStep
                number="09"
                eyebrow="PRODUCCIÓN ORAL"
                title="Conversación"
                description="Terminá usando la estructura en situaciones propias."
              >
                <section className="co-speaking cb-speaking-inner">
                  <span className="co-speaking-orbit" aria-hidden="true">
                    <i />
                    <b>{activa.icono}</b>
                  </span>
                  <header>
                    <p>
                      Respondé con la estructura de la unidad y agregá un
                      detalle.
                    </p>
                  </header>
                  <div>
                    {activa.conversacion.map((item, indice) => (
                      <article key={item.pregunta}>
                        <span>{indice + 1}</span>
                        <b>{item.pregunta}</b>
                        <span>
                          <strong>Podés empezar:</strong> {item.inicio}
                        </span>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>
            </div>

            <nav className="co-chapter-nav">
              <button onClick={() => mover(-1)}>
                ← {indiceActual === 0 ? "MAPA" : "ANTERIOR"}
              </button>
              <button onClick={() => mostrar("mapa")}>VOLVER A LA RUTA</button>
              <button onClick={() => mover(1)}>
                {indiceActual === unidades.length - 1 ? "RESUMEN" : "SIGUIENTE"}{" "}
                →
              </button>
            </nav>
          </div>
        </section>
      )}

      {pantalla === "resumen" && (
        <section className="co-atlas cb-resumen">
          <header className="co-atlas-hero">
            <Particulas color="#9d7cff" />
            <button onClick={() => mostrar("mapa")}>← VOLVER A LA RUTA</button>
            <span>B1 · SÍNTESIS GRAMATICAL</span>
            <h1>
              Elegí por
              <br />
              significado.
            </h1>
            <p>
              La fórmula correcta aparece cuando primero ubicás la condición en
              la realidad y después en el tiempo.
            </p>
          </header>
          <div className="co-atlas-body">
            <section className="co-atlas-section-head">
              <span>COMPARACIÓN FINAL</span>
              <h2>Todo el sistema en una sola tabla.</h2>
              <p>
                Usá este cuadro después de estudiar las unidades por separado,
                no como sustituto del recorrido.
              </p>
            </section>
            <div className="cb-comparacion" role="table">
              <div className="cb-comparacion-cabecera" role="row">
                <b>Tipo</b>
                <b>Relación con la realidad</b>
                <b>Tiempo</b>
                <b>Fórmula</b>
                <b>Ejemplo</b>
              </div>
              {comparacionFinal.map((fila) => (
                <div role="row" key={fila.nombre}>
                  <strong>{fila.nombre}</strong>
                  <span>{fila.realidad}</span>
                  <span>{fila.tiempo}</span>
                  <b>{fila.formula}</b>
                  <em>{fila.ejemplo}</em>
                </div>
              ))}
            </div>

            <section className="cb-diagnostico">
              <header>
                <span>DIAGNÓSTICO EN CINCO PREGUNTAS</span>
                <h2>No traduzcas: diagnosticá.</h2>
                <p>
                  Empezá por arriba y elegí la primera pregunta que describa
                  exactamente lo que querés expresar.
                </p>
              </header>
              <div>
                {diagnostico.map((paso, indice) => (
                  <article key={paso.destino}>
                    <span>{indice + 1}</span>
                    <p>{paso.pregunta}</p>
                    <b>→ {paso.destino}</b>
                  </article>
                ))}
              </div>
            </section>

            <section className="co-final-mission">
              <header>
                <span>MISIÓN FINAL</span>
                <h2>Una misma situación, cinco perspectivas.</h2>
                <p>
                  Elegí una situación real de tu vida y transformala sin cambiar
                  el tema central.
                </p>
              </header>
              <div>
                <article>
                  <span>00</span>
                  <b>Lo que sucede normalmente</b>
                  <i>Si…, …</i>
                </article>
                <article>
                  <span>01</span>
                  <b>Lo que todavía puede pasar</b>
                  <i>Si…, …</i>
                </article>
                <article>
                  <span>02</span>
                  <b>Lo que imaginás como diferente</b>
                  <i>Si…, …ría.</i>
                </article>
                <article>
                  <span>03</span>
                  <b>Lo que ya no puede cambiar</b>
                  <i>Si hubiera…, habría…</i>
                </article>
                <article>
                  <span>04</span>
                  <b>Lo que todavía afecta el presente</b>
                  <i>Si hubiera…, ahora…ría.</i>
                </article>
              </div>
            </section>

            <nav className="co-chapter-nav">
              <button onClick={() => entrar(unidades[unidades.length - 1])}>
                ← ÚLTIMA UNIDAD
              </button>
              <button onClick={() => mostrar("mapa")}>VOLVER A LA RUTA</button>
              <button onClick={() => entrar(unidades[0])}>
                REVISAR DESDE CERO →
              </button>
            </nav>
          </div>
        </section>
      )}
    </main>
  );
}
