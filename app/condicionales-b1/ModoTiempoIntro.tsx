const indicativo = [
  ['Presente', 'viajo', 'Pretérito perfecto compuesto', 'he viajado'],
  ['Pretérito imperfecto', 'viajaba', 'Pretérito pluscuamperfecto', 'había viajado'],
  ['Pretérito perfecto simple', 'viajé', 'Pretérito anterior', 'hube viajado'],
  ['Futuro simple', 'viajaré', 'Futuro compuesto', 'habré viajado'],
  ['Condicional simple', 'viajaría', 'Condicional compuesto', 'habría viajado'],
];
const subjuntivo = [
  ['Presente', 'viaje', 'Pretérito perfecto compuesto', 'haya viajado'],
  ['Pretérito imperfecto', 'viajara / viajase', 'Pretérito pluscuamperfecto', 'hubiera / hubiese viajado'],
  ['Futuro simple', 'viajare', 'Futuro compuesto', 'hubiere viajado'],
];

export default function ModoTiempoIntro() {
  return <section className="cb-modo-intro" id="modo-y-tiempo" aria-labelledby="cb-modo-titulo">
    <header className="cb-modo-heading"><span>INTRODUCCIÓN PREVIA · MODO Y TIEMPO VERBAL</span><h1 id="cb-modo-titulo">Dos preguntas distintas:<br />¿cómo lo presento y cuándo ocurre?</h1><p>Antes de estudiar las condicionales, vamos a ordenar el mapa. <b>Modo</b> y <b>tiempo</b> son dos características de un verbo conjugado. No significan lo mismo.</p></header>

    <section className="cb-modo-step"><h2>01 · ¿Qué es un modo verbal?</h2><p>El modo expresa cómo presentamos una situación: como una afirmación, dentro de un deseo o una hipótesis, o como una instrucción. Su elección también depende de la estructura de la oración.</p><p>En español distinguimos <b>tres modos: indicativo, subjuntivo e imperativo.</b></p>
      <div className="cb-modo-cards">
        <article><small>INDICATIVO</small><h3>Presentar información</h3><p>Lo usamos para afirmar, describir y preguntar, entre otros usos.</p><em>Hoy tengo tiempo.</em><p>También permite hablar de posibilidades. Indicativo no significa «certeza absoluta».</p></article>
        <article><small>SUBJUNTIVO</small><h3>No afirmar por sí solo</h3><p>Aparece, por ejemplo, en deseos, valoraciones e hipótesis.</p><em>Ojalá tenga tiempo.</em><p>No significa que todo sea falso: «Me alegra que estés acá» puede referirse a un hecho real.</p></article>
        <article><small>IMPERATIVO</small><h3>Dar una instrucción</h3><p>Lo usamos para pedir, aconsejar o invitar a hacer algo.</p><em>Vení cuando puedas.</em><p>«Vení» es imperativo. Las instrucciones negativas usan subjuntivo: «No vengas tarde».</p></article>
      </div>
    </section>

    <section className="cb-modo-step"><h2>02 · ¿Qué es un tiempo verbal?</h2><p>El tiempo verbal ayuda a situar una acción respecto de <b>ahora</b> o de <b>otro momento de referencia</b>. Pasado, presente y futuro son tres grandes zonas temporales; dentro de ellas hay más distinciones gramaticales.</p>
      <div className="cb-modo-cards cb-modo-pair"><article><small>CAMBIA EL TIEMPO</small><h3>viajo · viajé · viajaré</h3><p>Presente, pretérito perfecto simple y futuro simple. Los tres pertenecen al <b>indicativo</b>.</p></article><article><small>CAMBIA EL MODO</small><h3>viajo · viaje</h3><p>«Yo viajo» está en presente de indicativo. «Ojalá yo viaje» está en presente de subjuntivo.</p></article></div>
      <p className="cb-modo-note"><b>La forma no es un reloj exacto.</b> En «Mañana viajo», el presente habla del futuro. En «Si tuviera tiempo ahora…», el imperfecto de subjuntivo plantea una hipótesis sobre el presente. Por eso miramos la forma y el contexto juntos.</p>
    </section>

    <section className="cb-modo-step"><h2>03 · ¿Cuántos tiempos verbales hay?</h2><p>Si contamos el inventario completo de <b>tiempos simples y compuestos del indicativo y del subjuntivo</b>, incluidas las formas hoy poco usadas, tenemos <b>16 tiempos: 10 de indicativo + 6 de subjuntivo</b>.</p>
      <div className="cb-modo-counts"><article><b>3</b><span>modos verbales</span></article><article><b>10 + 6</b><span>tiempos del inventario completo</span></article><article><b>16</b><span>tiempos con este criterio</span></article></div>
      <p><b>Simple:</b> una palabra, como «viajaría». <b>Compuesto:</b> el auxiliar <b>haber + participio</b>, como «habría viajado».</p>
      <details className="cb-modo-inventory"><summary>Ver los 16 tiempos con ejemplos</summary>
        {[{nombre:'Indicativo · 5 simples + 5 compuestos = 10',filas:indicativo},{nombre:'Subjuntivo · 3 simples + 3 compuestos = 6',filas:subjuntivo}].map(grupo=><div key={grupo.nombre}><h3>{grupo.nombre}</h3><div className="cb-modo-table-scroll"><table><thead><tr><th>Tiempo simple</th><th>Ejemplo</th><th>Tiempo compuesto</th><th>Ejemplo</th></tr></thead><tbody>{grupo.filas.map(fila=><tr key={fila[0]}>{fila.map((celda,i)=><td key={i}>{celda}</td>)}</tr>)}</tbody></table></div></div>)}
        <p><b>Uso poco frecuente:</b> el pretérito anterior («hube viajado») y los dos futuros de subjuntivo («viajare», «hubiere viajado») aparecen sobre todo en textos literarios, antiguos o jurídicos. No son una prioridad para conversar en B1.</p><p>«Viajara» y «viajase» son dos variantes del mismo tiempo. También lo son «hubiera viajado» y «hubiese viajado»: no se cuentan por separado.</p>
      </details>
      <p className="cb-modo-note"><b>¿Y el imperativo? ¿Por qué a veces aparece el número 18?</b> El imperativo no distingue tiempos como el indicativo y el subjuntivo. Si un cuadro suma a los 16 tiempos las dos categorías didácticas «imperativo afirmativo» e «imperativo negativo», obtiene 18 casillas, pero no 18 tiempos equivalentes. El número depende de qué se esté contando.</p>
      <p>El infinitivo («viajar»), el gerundio («viajando») y el participio («viajado») son <b>formas no personales</b>. En este esquema no son otros tres modos ni otros tres tiempos.</p>
    </section>

    <section className="cb-modo-step cb-modo-conditional"><h2>04 · ¿Dónde entra el condicional?</h2><p>En la clasificación que seguimos, el <b>condicional pertenece al modo indicativo</b>. Tiene dos tiempos: <b>condicional simple</b> («viajaría») y <b>condicional compuesto</b> («habría viajado»). No lo contamos como un cuarto modo.</p><p>Puede expresar un resultado imaginado, pero también un futuro visto desde el pasado: <b>«Ayer dijo que viajaría hoy»</b>. La terminación <b>-ría</b> no convierte al verbo en subjuntivo.</p>
      <div className="cb-modo-cards cb-modo-pair"><article><small>CONDICIONAL COMO TIEMPO</small><h3>Me gustaría un café.</h3><p>«Gustaría» es condicional simple de indicativo. No necesitamos una oración con «si» para usarlo.</p></article><article><small>ORACIÓN CONDICIONAL</small><h3>Si llueve, me quedo en casa.</h3><p>Hay condición y consecuencia, pero los dos verbos están en presente de indicativo. La oración no lleva ningún verbo en condicional.</p></article></div>
    </section>

    <section className="cb-modo-step"><h2>05 · Así trabajan juntos en esta clase</h2><p className="cb-modo-example">Si tuviera tiempo, viajaría.</p><div className="cb-modo-cards cb-modo-pair"><article><small>LA CONDICIÓN · SI TUVIERA TIEMPO</small><h3>tuviera</h3><p><b>Modo:</b> subjuntivo.<br /><b>Tiempo:</b> pretérito imperfecto.<br /><b>Función aquí:</b> imaginar una situación diferente de la actual.</p></article><article><small>LA CONSECUENCIA · VIAJARÍA</small><h3>viajaría</h3><p><b>Modo:</b> indicativo.<br /><b>Tiempo:</b> condicional simple.<br /><b>Función aquí:</b> presentar el resultado de esa hipótesis.</p></article></div><p>No hace falta memorizar ahora todo el inventario. Quedate con esta idea: <b>cada verbo tiene su propio modo y su propio tiempo</b>. A continuación vamos a estudiar cómo se combinan, un tipo de condicional por vez.</p></section>
    <details className="cb-modo-sources"><summary>Fuentes gramaticales · RAE y ASALE</summary><p><a href="https://www.rae.es/gramática-básica/el-verbo/tiempos-verbales-del-español/clasificación" target="_blank" rel="noreferrer">Clasificación de los tiempos</a> · <a href="https://www.rae.es/dpd/ayuda/modelos-de-conjugacion-verbal" target="_blank" rel="noreferrer">Modelos de conjugación</a> · <a href="https://www.rae.es/gtg/modo-subjuntivo" target="_blank" rel="noreferrer">Tiempos del subjuntivo</a> · <a href="https://www.rae.es/gtg/modo-imperativo" target="_blank" rel="noreferrer">El imperativo</a> · <a href="https://www.rae.es/gtg/condicional-simple" target="_blank" rel="noreferrer">El condicional simple</a></p></details>
    <a className="cb-modo-continue" href="#introduccion-condicionales">SEGUIR · CÓMO FUNCIONAN LAS CONDICIONALES →</a>
  </section>;
}
