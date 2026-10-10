'use client';
import {useState} from 'react';
const examples={
 ago:[{es:'Llegué hace dos horas.',en:'I arrived two hours ago.'},{es:'Empecé a estudiar español hace un año.',en:'I started studying Spanish a year ago.'}],
 continuing:[{es:'Hace dos años que estudio español.',en:"I've been studying Spanish for two years."},{es:'Estudio español hace dos años.',en:"I've been studying Spanish for two years."}],
 since:[{es:'Vivo en Argentina desde 2020.',en:"I've lived in Argentina since 2020."},{es:'Estudio español desde enero.',en:"I've been studying Spanish since January."},{es:'Trabajo desde las 9.',en:"I've been working since 9 o'clock."}],
 duration:[{es:'Vivo en Argentina desde hace tres años.',en:"I've been living in Argentina for three years."},{es:'Estudio español desde hace seis meses.',en:"I've been studying Spanish for six months."}],
 comparison:[{es:'Hace tres años llegué a Argentina.',en:'I arrived in Argentina three years ago.'},{es:'Vivo en Argentina desde 2023.',en:"I've lived in Argentina since 2023."},{es:'Vivo en Argentina desde hace tres años.',en:"I've lived in Argentina for three years."}],
};
function Examples({items}:{items:{es:string;en:string}[]}){return <ul className="du-simple-examples">{items.map(e=><li key={e.es}><span lang="es">{e.es}</span><small lang="en">{e.en}</small></li>)}</ul>;}
export default function DurationTheory(){const [english,setEnglish]=useState(false);return <section className="du-simple-theory" data-simple-theory data-english={english}>
 <div className="du-theory-toolbar"><p><strong>Las tres hablan del tiempo. Cada una responde a una pregunta.</strong><small lang="en">These expressions refer to time, but they answer different questions.</small></p><button type="button" data-theory-english aria-pressed={english} onClick={()=>setEnglish(v=>!v)}>{english?'Ocultar apoyo en inglés':'Mostrar apoyo en inglés'}</button></div>
 <div className="du-key du-memory-rule">
  <span><b>DESDE</b>¿Cuándo empezó?<small lang="en">WHEN did it start?</small><em>since · punto de inicio</em></span>
  <span><b>DESDE HACE</b>¿Cuánto tiempo lleva?<small lang="en">HOW LONG has it been happening?</small><em>for · duración hasta ahora</em></span>
  <span><b>HACE + pasado</b>¿Cuánto tiempo pasó?<small lang="en">HOW LONG AGO?</small><em>ago · hecho pasado</em></span>
 </div>
 <section className="du-simple-rule"><h3>1. HACE <span>ago / for</span></h3><p>Indica una cantidad de tiempo. El verbo y la estructura aclaran si contamos un hecho pasado o una situación que continúa.</p><small lang="en">Use hace to say how long ago something happened, or how long a situation has been continuing.</small>
  <h4>Un hecho pasado: hace + tiempo + verbo en pasado <span lang="en">ago</span></h4><Examples items={examples.ago}/>
  <h4>Una situación que continúa: hace + tiempo + que + presente <span lang="en">for</span></h4><Examples items={examples.continuing}/><p className="du-clarification">En «Estudio español hace dos años», <b>estudio</b> está en presente: sigo estudiando. También puedes decir «Estudio español desde hace dos años». Para empezar, usa «desde hace…» o «hace… que…»: dejan clara la continuidad.</p>
 </section>
 <section className="du-simple-rule"><h3>2. DESDE <span>since</span></h3><p>Indica <b>cuándo empezó</b> una situación: una fecha, un mes, un día o una hora. La situación continúa.</p><small lang="en">Use desde to say when something started.</small><p className="du-formula">desde + punto de inicio</p><Examples items={examples.since}/></section>
 <section className="du-simple-rule"><h3>3. DESDE HACE <span>for</span></h3><p>Indica <b>cuánto tiempo lleva</b> una situación que empezó antes y continúa ahora.</p><small lang="en">Use desde hace to express how long a situation has been continuing until now.</small><p className="du-formula">presente + desde hace + duración</p><Examples items={examples.duration}/></section>
 <div className="du-summary-table"><table><caption>La diferencia clave</caption><thead><tr><th scope="col">Expresión</th><th scope="col">Significado</th><th scope="col">Después va…</th></tr></thead><tbody><tr><th scope="row">Hace</th><td>ago / for</td><td>Una cantidad de tiempo</td></tr><tr><th scope="row">Desde</th><td>since</td><td>Un punto de inicio</td></tr><tr><th scope="row">Desde hace</th><td>for</td><td>Una duración</td></tr></tbody></table><p className="du-clarification">Con <b>hace</b>, fíjate también en el verbo: «llegué» cuenta un hecho; «estudio» describe una situación que continúa.</p></div>
 <section className="du-simple-rule du-compare"><h3>Compara: una historia, tres formas</h3><p>En este ejemplo, ahora es 2026. Llegué en 2023 y sigo viviendo en Argentina.</p><Examples items={examples.comparison}/><p><b>Desde</b> señala el inicio. <b>Desde hace</b> cuenta la duración. <b>Hace + pasado</b> sitúa el hecho.</p></section>
 <p className="du-theory-bridge">Ahora puedes aplicar la misma diferencia en el barrio 3D: elige un lugar y un mes. Allí el presente del ejemplo es octubre.</p>
 </section>;}
