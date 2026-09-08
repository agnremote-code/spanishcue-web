"use client";

import { useState, type CSSProperties } from "react";
import "../condicionales/style.css";
import "./style.css";
import ModoTiempoIntro from "./ModoTiempoIntro";
import VerbalPosition from "../verbal-system/VerbalPosition";
import {conditionalPosition,b1TablePosition} from "../verbal-system/positions";
import { comparacionFinal, diagnostico, unidades, type Tabla, type Unidad } from "./data";

type Pantalla = "portada" | "mapa" | "unidad" | "resumen";

function Particulas({ color }: { color: string }) {
  return (
    <div className="co-particles" style={{ "--portal": color } as CSSProperties} aria-hidden="true">
      {Array.from({ length: 12 }, (_, indice) => <i key={indice} style={{ "--particle": indice } as CSSProperties} />)}
    </div>
  );
}

function TablaGramatical({ tabla }: { tabla: Tabla }) {
  return (
    <article className="co-tense-card cb-tabla">
      <header><small>CONJUGACIÓN Y FORMACIÓN</small><h3>{tabla.titulo}</h3><p>{tabla.nota}</p></header>
      <VerbalPosition items={b1TablePosition[tabla.titulo]} compact />
      <div className="cb-tabla-cuerpo" style={{ "--columnas": tabla.columnas.length } as CSSProperties}>
        <div className="cb-tabla-fila cb-tabla-cabecera">{tabla.columnas.map((columna) => <b key={columna}>{columna}</b>)}</div>
        {tabla.filas.map((fila, indice) => <div className="cb-tabla-fila" key={`${fila[0]}-${indice}`}>{fila.map((celda, celdaIndice) => celdaIndice === 0 ? <span key={celdaIndice}>{celda}</span> : <b key={celdaIndice}>{celda}</b>)}</div>)}
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

  const alternarRespuesta = (clave: string) => setRespuestas((actuales) => {
    const nuevas = new Set(actuales);
    if (nuevas.has(clave)) nuevas.delete(clave); else nuevas.add(clave);
    return nuevas;
  });

  return (
    <main className="co-app co-b1">
      <nav className="co-nav">
        <a href="/" className="co-brand"><span><img src="/chespanish-guide-avatar.png" alt="" /></span><div><b>CHESPANISH</b><small>AVENTURAS GRAMATICALES</small></div></a>
        <div className="co-progress"><span>PROGRESO</span><i><b style={{ width: `${progreso}%` }} /></i><strong>{visitadas.size}/{unidades.length}</strong></div>
        <div className="co-nav-actions">
          <button onClick={() => mostrar("mapa")}>INTRODUCCIÓN</button>
          <button onClick={() => mostrar("resumen")}>RESUMEN</button>
          <button onClick={() => mostrar(pantalla === "portada" ? "mapa" : "portada")}>{pantalla === "portada" ? "RUTA" : "INICIO"}</button>
        </div>
      </nav>

      {pantalla === "portada" && (
        <section className="co-cover cb-portada">
          <Particulas color="#9d7cff" />
          <div className="co-cover-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="co-cover-copy">
            <div className="co-kicker"><span>B1 PROGRESIVO</span> CLASE COMPLETA · 100% EN ESPAÑOL</div>
            <p className="co-overline">GRAMÁTICA PURA · UNA REGLA POR VEZ</p>
            <h1>CONDICIONALES<br /><em>PASO A PASO</em></h1>
            <p className="co-lead">Un recorrido ordenado por <b>todo el sistema condicional</b>. Primero distinguimos modo y tiempo verbal: tres modos, el inventario de tiempos y el lugar del condicional. Después entendemos la lógica general. Después estudiamos el cero, el primero, el segundo, el tercero y los mixtos, sin adelantar estructuras ni mezclar tiempos.</p>
            <div className="co-cover-actions"><button onClick={() => mostrar("mapa")}>EMPEZAR · MODO Y TIEMPO <span>→</span></button><button className="ghost" onClick={() => mostrar("resumen")}>VER EL CUADRO FINAL</button></div>
            <div className="co-cover-stats"><article><b>5</b><span>bloques separados</span></article><article><b>10</b><span>tablas gramaticales</span></article><article><b>20</b><span>prácticas explicadas</span></article></div>
          </div>
          <div className="co-heroes" aria-hidden="true">
            <span className="co-hero-halo" />
            <img src="/conditional-characters.webp" alt="" />
            <i className="co-character-tag tag-real">REAL</i><i className="co-character-tag tag-future">POSIBLE</i><i className="co-character-tag tag-whatif">HIPOTÉTICO</i><i className="co-character-tag tag-past">PASADO</i>
          </div>
          <button className="co-scroll" onClick={() => mostrar("mapa")}><span>↓</span> ABRIR LA RUTA GRAMATICAL</button>
        </section>
      )}

      {pantalla === "mapa" && (
        <section className="co-map">
          <ModoTiempoIntro />
          <header className="co-map-head" id="introduccion-condicionales">
            <div><span>INTRODUCCIÓN GENERAL · ANTES DE CONJUGAR</span><h1>Primero entendé<br />cómo funciona el sistema.</h1></div>
            <div><p>Una oración condicional relaciona <b>una condición</b> con <b>una consecuencia</b>. La forma verbal cambia según dos decisiones: qué relación tiene la condición con la realidad y en qué momento ocurre cada parte.</p><button onClick={() => entrar(unidades.find((unidad) => !visitadas.has(unidad.id)) || unidades[0])}>CONTINUAR POR ORDEN →</button></div>
          </header>

          <section className="co-course-intro">
            <header><span>ANATOMÍA DE LA ORACIÓN</span><h2>Dos bloques, una relación lógica.</h2><p>No elijas un tiempo verbal por traducción. Primero separá la oración y decidí qué expresa cada bloque.</p></header>
            <div>
              <article><span>1</span><div><small>CONDICIÓN</small><b>Si tengo tiempo…</b><p>Presenta la situación necesaria para abrir el resultado.</p></div></article>
              <article><span>2</span><div><small>CONSECUENCIA</small><b>…voy con vos.</b><p>Explica qué ocurre, ocurrirá, ocurriría o habría ocurrido.</p></div></article>
              <article><span>★</span><div><small>DECISIÓN CENTRAL</small><b>REALIDAD + TIEMPO</b><p>Primero: ¿real o hipotética? Después: ¿presente, futuro o pasado?</p></div></article>
            </div>
          </section>

          <section className="cb-reglas-generales">
            <header><span>CUATRO REGLAS ANTES DE EMPEZAR</span><h2>Lo que no cambia entre las unidades.</h2></header>
            <div>
              <article><b>«Si» sin tilde</b><p>La conjunción condicional se escribe <b>si</b>. La palabra <b>sí</b> con tilde expresa afirmación o funciona como pronombre.</p><em>Si venís, avisame. · Sí, voy.</em></article>
              <article><b>Orden flexible</b><p>Los dos bloques pueden cambiar de posición. La lógica se mantiene, pero cambia el foco.</p><em>Si tengo tiempo, voy. · Voy si tengo tiempo.</em></article>
              <article><b>La coma</b><p>Cuando el bloque con «si» aparece primero, normalmente escribimos una coma antes de la consecuencia.</p><em>Si A, B. · B si A.</em></article>
              <article><b>No copies la forma</b><p>La condición y la consecuencia cumplen funciones diferentes. Por eso no siempre usan el mismo modo ni el mismo tiempo.</p><em>Si tuviera…, haría…</em></article>
            </div>
          </section>

          <section className="co-master-ladder">
            <header><span>CLASIFICACIÓN DIDÁCTICA</span><h2>El recorrido completo, sin mezclar.</h2><p>Los nombres «cero, primero, segundo y tercero» son etiquetas pedagógicas muy usadas. No hay un «cuarto condicional» único y oficial: después del tercero estudiamos combinaciones mixtas.</p></header>
            <div>
              {unidades.map((unidad) => <article key={unidad.id} style={{ "--portal": unidad.color } as CSSProperties}><span>{unidad.numero}</span><div><small>{unidad.nombre} · {unidad.nivel}</small><b>{unidad.formula}</b><p>{unidad.subtitulo}</p></div></article>)}
            </div>
          </section>

          <div className="co-route-line" aria-hidden="true">{unidades.map((unidad) => <i key={unidad.id} className={visitadas.has(unidad.id) ? "done" : ""} />)}</div>
          <div className="co-portal-grid">
            {unidades.map((unidad, indice) => (
              <button className={`co-portal-card ${visitadas.has(unidad.id) ? "visited" : ""}`} style={{ "--portal": unidad.color, "--delay": `${indice * .12}s` } as CSSProperties} onClick={() => entrar(unidad)} key={unidad.id}>
                <span className="co-portal-number">BLOQUE {unidad.numero}</span><span className="co-portal-level">{unidad.nivel}</span>
                <span className="co-portal-icon">{unidad.icono}<i /></span>
                <span className="co-portal-copy"><small>{unidad.subtitulo}</small><b>{unidad.nombre}</b><em>{unidad.preguntaClave}</em></span>
                <span className="co-portal-enter">ENTRAR <b>→</b></span>
              </button>
            ))}
          </div>

          <section className="co-golden-rule"><span>⚠️ REGLA CENTRAL</span><div><b>Después de «si» no colocamos automáticamente futuro ni condicional.</b><p>La forma correcta depende del grado de realidad: <b>si tengo</b> para una condición real; <b>si tuviera</b> para una condición hipotética; <b>si hubiera tenido</b> para una condición pasada irreal.</p></div></section>
          <button className="co-atlas-call" onClick={() => mostrar("resumen")}><span>SÍNTESIS FINAL</span><b>Comparación completa y diagnóstico para elegir la estructura</b><i>ABRIR →</i></button>
        </section>
      )}

      {pantalla === "unidad" && (
        <section className="co-chapter" style={{ "--portal": activa.color } as CSSProperties}>
          <header className="co-chapter-hero">
            <Particulas color={activa.color} />
            <div className="co-chapter-top"><button onClick={() => mostrar("mapa")}>← VOLVER AL MAPA</button><span>BLOQUE {activa.numero} · {activa.nivel}</span></div>
            <div className="co-chapter-icon">{activa.icono}<i /></div>
            <div className="co-chapter-title"><small>{activa.subtitulo}</small><h1>{activa.nombre}</h1><b>{activa.preguntaClave}</b></div>
            <div className="co-formula-beam"><span>LA FÓRMULA</span><b>{activa.formula}</b><i>UNA ESTRUCTURA POR VEZ</i></div>
          </header>

          <div className="co-chapter-body">
            <VerbalPosition items={conditionalPosition[activa.id]} context="El nombre de este bloque identifica un tipo de oración condicional, no un nuevo tiempo. Ubicá por separado las formas de la condición y de la consecuencia." />
            <section className="co-learning-order"><span>ORDEN DE APRENDIZAJE</span><div><b>1 · ENTENDER</b><i>→</i><b>2 · UBICAR EN EL TIEMPO</b><i>→</i><b>3 · ELEGIR LOS TIEMPOS</b><i>→</i><b>4 · CONJUGAR</b><i>→</i><b>5 · PRACTICAR</b><i>→</i><b>6 · HABLAR</b></div></section>

            <section className="co-concept"><div className="co-section-number">01</div><article><span>INTRODUCCIÓN GRAMATICAL</span><h2>Primero entendé la relación con la realidad.</h2><b>{activa.idea}</b><span>{activa.tiempo}</span></article></section>

            <section className="co-memory-rule"><span>LA PREGUNTA CLAVE</span><h2>{activa.preguntaClave}</h2><p>Respondé esta pregunta antes de elegir cualquier terminación. Si la respuesta coincide con la descripción de esta unidad, recién entonces construí los verbos.</p></section>

            <section className="co-grammar-breakdown">
              <header><span>02 · LOS DOS BLOQUES</span><h2>Elegí cada tiempo por su función.</h2></header>
              <div>
                <article><small>PASO A · DESPUÉS DE «SI»</small><b>{activa.condicion}</b><p>Este bloque establece la condición.</p></article>
                <i>→</i>
                <article><small>PASO B · EN LA CONSECUENCIA</small><b>{activa.consecuencia}</b><p>Este bloque muestra el resultado que depende de la condición.</p></article>
              </div>
              <aside><span>FÓRMULA COMPLETA</span><b>{activa.formula}</b></aside>
            </section>

            <section className="cb-construccion">
              <header><span>03 · CONSTRUCCIÓN PASO A PASO</span><h2>Formá la estructura sin adivinar.</h2></header>
              <div>{activa.construccion.map((bloque, indice) => <article key={bloque.titulo}><span>{String(indice + 1).padStart(2, "0")}</span><small>{bloque.titulo}</small><b>{bloque.regla}</b><ul>{bloque.pasos.map((paso) => <li key={paso}>{paso}</li>)}</ul></article>)}</div>
            </section>

            <section className="co-conjugations">
              <header><span>04 · CONJUGACIONES</span><h2>Ahora sí: construí los verbos.</h2><p>Leé primero la persona, después compará las formas y finalmente volvé a la fórmula. Las tablas muestran únicamente los tiempos que necesitás en esta unidad.</p></header>
              <div className="co-tense-grid">{activa.tablas.map((tabla) => <TablaGramatical tabla={tabla} key={tabla.titulo} />)}</div>
            </section>

            <section className="co-uses">
              <header><span>05 · CUÁNDO LO USAMOS</span><h2>La misma forma, distintas intenciones.</h2><p>La estructura gramatical se mantiene. Lo que cambia es el mensaje que el hablante quiere comunicar.</p></header>
              <div>{activa.usos.map((uso, indice) => <article key={uso.titulo}><span>{String(indice + 1).padStart(2, "0")}</span><div><b>{uso.titulo}</b><span>{uso.explicacion}</span><em>{uso.ejemplo}</em></div></article>)}</div>
            </section>

            <section className="co-examples cb-ejemplos">
              <header><span>06 · ANÁLISIS DE EJEMPLOS</span><h2>La regla funcionando, bloque por bloque.</h2></header>
              <div>{activa.ejemplos.map((ejemplo, indice) => <article key={ejemplo.oracion}><div className="co-window"><i /><i /><i /></div><small>EJEMPLO {String(indice + 1).padStart(2, "0")}</small><b>{ejemplo.oracion}</b><span><strong>Condición:</strong> {ejemplo.condicion}</span><span><strong>Consecuencia:</strong> {ejemplo.resultado}</span><em>{ejemplo.lectura}</em></article>)}</div>
            </section>

            <section className="co-traps cb-errores">
              <div className="co-trap-character" aria-hidden="true">🧑‍🚀<span>¡OJO!</span></div>
              <article><span>07 · ERRORES CLAVE</span><h2>Corregí la lógica, no solo la terminación.</h2>{activa.errores.map((error) => <div key={error.incorrecto}><b className="cb-mal">✕ {error.incorrecto}</b><b className="cb-bien">✓ {error.correcto}</b><span>{error.explicacion}</span></div>)}</article>
            </section>

            <section className="co-practice">
              <header><span>08 · PRÁCTICA CONTROLADA</span><h2>Resolvé primero. Después abrí la respuesta.</h2><p>Cada explicación muestra no solo qué forma es correcta, sino por qué pertenece a esta estructura.</p></header>
              <div>{activa.ejercicios.map((ejercicio, indice) => {
                const clave = `${activa.id}-${indice}`;
                const abierta = respuestas.has(clave);
                return <button className={abierta ? "open" : ""} onClick={() => alternarRespuesta(clave)} key={clave}><span>{String(indice + 1).padStart(2, "0")}</span><b>{ejercicio.consigna}</b><i>{abierta ? "OCULTAR RESPUESTA" : "VER RESPUESTA"}</i>{abierta && <em><strong>{ejercicio.respuesta}</strong><small>{ejercicio.explicacion}</small></em>}</button>;
              })}</div>
            </section>

            <section className="co-speaking">
              <span className="co-speaking-orbit" aria-hidden="true"><i /><b>{activa.icono}</b></span>
              <header><span>09 · PRODUCCIÓN ORAL</span><h2>Usalo para pensar y hablar.</h2><p>Respondé con la estructura de esta unidad. Después agregá una razón, un ejemplo o una consecuencia adicional.</p></header>
              <div>{activa.conversacion.map((item, indice) => <article key={item.pregunta}><span>{indice + 1}</span><b>{item.pregunta}</b><span><strong>Podés empezar:</strong> {item.inicio}</span></article>)}</div>
            </section>

            <nav className="co-chapter-nav"><button onClick={() => mover(-1)}>← {indiceActual === 0 ? "MAPA" : "ANTERIOR"}</button><button onClick={() => mostrar("mapa")}>VOLVER A LA RUTA</button><button onClick={() => mover(1)}>{indiceActual === unidades.length - 1 ? "RESUMEN" : "SIGUIENTE"} →</button></nav>
          </div>
        </section>
      )}

      {pantalla === "resumen" && (
        <section className="co-atlas cb-resumen">
          <header className="co-atlas-hero"><Particulas color="#9d7cff" /><button onClick={() => mostrar("mapa")}>← VOLVER A LA RUTA</button><span>B1 · SÍNTESIS GRAMATICAL</span><h1>Elegí por<br />significado.</h1><p>La fórmula correcta aparece cuando primero ubicás la condición en la realidad y después en el tiempo.</p></header>
          <div className="co-atlas-body">
            <section className="co-atlas-section-head"><span>COMPARACIÓN FINAL</span><h2>Todo el sistema en una sola tabla.</h2><p>Usá este cuadro después de estudiar las unidades por separado, no como sustituto del recorrido.</p></section>
            <div className="cb-comparacion" role="table">
              <div className="cb-comparacion-cabecera" role="row"><b>Tipo</b><b>Relación con la realidad</b><b>Tiempo</b><b>Fórmula</b><b>Ejemplo</b></div>
              {comparacionFinal.map((fila) => <div role="row" key={fila.nombre}><strong>{fila.nombre}</strong><span>{fila.realidad}</span><span>{fila.tiempo}</span><b>{fila.formula}</b><em>{fila.ejemplo}</em></div>)}
            </div>

            <section className="cb-diagnostico">
              <header><span>DIAGNÓSTICO EN CINCO PREGUNTAS</span><h2>No traduzcas: diagnosticá.</h2><p>Empezá por arriba y elegí la primera pregunta que describa exactamente lo que querés expresar.</p></header>
              <div>{diagnostico.map((paso, indice) => <article key={paso.destino}><span>{indice + 1}</span><p>{paso.pregunta}</p><b>→ {paso.destino}</b></article>)}</div>
            </section>

            <section className="co-final-mission">
              <header><span>MISIÓN FINAL</span><h2>Una misma situación, cinco perspectivas.</h2><p>Elegí una situación real de tu vida y transformala sin cambiar el tema central.</p></header>
              <div>
                <article><span>00</span><b>Lo que sucede normalmente</b><i>Si…, …</i></article>
                <article><span>01</span><b>Lo que todavía puede pasar</b><i>Si…, …</i></article>
                <article><span>02</span><b>Lo que imaginás como diferente</b><i>Si…, …ría.</i></article>
                <article><span>03</span><b>Lo que ya no puede cambiar</b><i>Si hubiera…, habría…</i></article>
                <article><span>04</span><b>Lo que todavía afecta el presente</b><i>Si hubiera…, ahora…ría.</i></article>
              </div>
            </section>

            <nav className="co-chapter-nav"><button onClick={() => entrar(unidades[unidades.length - 1])}>← ÚLTIMA UNIDAD</button><button onClick={() => mostrar("mapa")}>VOLVER A LA RUTA</button><button onClick={() => entrar(unidades[0])}>REVISAR DESDE CERO →</button></nav>
          </div>
        </section>
      )}
    </main>
  );
}
