import Link from "next/link";

export default function ModeTimeIntro({compact=false}:{compact?:boolean}) {
  return <section className={`vs-intro ${compact?"is-compact":""}`} aria-labelledby="vs-intro-title">
    <div className="vs-intro-heading">
      <span>BASE DEL SISTEMA</span>
      <h2 id="vs-intro-title">¿Qué es el modo y qué es el tiempo?</h2>
      <p>Una forma conjugada puede dar las dos informaciones a la vez. Primero miramos <b>cómo</b> presenta la acción el hablante; después, <b>desde cuándo</b> la observa.</p>
    </div>
    <div className="vs-concept-pair">
      <article className="mode">
        <small>MODO · ¿CÓMO LO PRESENTO?</small>
        <h3>La posición del hablante</h3>
        <p><b>Indicativo</b> presenta información; <b>subjuntivo</b> integra la acción en otra perspectiva; <b>imperativo</b> intenta dirigir una acción.</p>
        <div><span>INFORMO</span><b>Viene.</b></div>
        <div><span>FILTRO</span><b>Dudo que venga.</b></div>
        <div><span>DIRIJO</span><b>Vení. / Ven.</b></div>
      </article>
      <article className="time">
        <small>TIEMPO · ¿DESDE CUÁNDO LO MIRO?</small>
        <h3>La relación temporal</h3>
        <p>Sitúa la acción respecto de ahora o de otro punto: presente, pasado, futuro, posterioridad desde el pasado y anterioridad.</p>
        <div className="vs-time-line"><i/><span>ANTES</span><b>AHORA</b><span>DESPUÉS</span></div>
        <p className="vs-time-note">El imperativo no tiene una serie de tiempos propia, aunque normalmente proyecta una acción posterior.</p>
      </article>
    </div>
    <div className="vs-analysis-grid" aria-label="Ejemplos analizados por modo y tiempo">
      {[['canta','Indicativo','Presente'],['cantó','Indicativo','Pretérito perfecto simple'],['cantara / cantase','Subjuntivo','Pretérito imperfecto'],['haya cantado','Subjuntivo','Pretérito perfecto'],['cantá / canta','Imperativo','Sin oposición temporal propia']].map(item=><article key={item[0]}><b>{item[0]}</b><span>MODO · {item[1]}</span><span>TIEMPO · {item[2]}</span></article>)}
    </div>
    <p className="vs-layer-note"><b>UNA FORMA · VARIAS CAPAS</b> Una forma verbal puede comunicar simultáneamente modo, tiempo, aspecto, anterioridad y la perspectiva del hablante.</p>
    {!compact&&<aside className="vs-precision"><b>Una precisión que evita errores</b><p>El subjuntivo no es simplemente “irrealidad” y el indicativo no es simplemente “realidad”. El condicional pertenece al indicativo en la clasificación académica actual. Modo, tiempo y tipo de oración son capas diferentes.</p><Link href="/modo-vs-tiempo-verbal">Abrir la mini clase base →</Link></aside>}
  </section>;
}
