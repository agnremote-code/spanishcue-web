"use client";

import {useState} from "react";
import Link from "next/link";
import AudioDeck from "../listening-studio/AudioDeck";
import {phoneticClip, phoneticsLessons, stressTrials, vowelModels, type PhoneticsId} from "./data";
import {initialAttempt, updateAttempt, type ListeningAction, type ListeningAttempt} from "./state";
import "./phonetics.css";

const stages = ["Modelos", "Escuchá y distinguí", "Hablá y reutilizá"];

export default function PhoneticsLesson({lessonId}: {lessonId: PhoneticsId}) {
  const lesson = phoneticsLessons[lessonId];
  const [stage, setStage] = useState(0);
  const [model, setModel] = useState(0);
  const [wordModel, setWordModel] = useState(false);
  const [modelText, setModelText] = useState(false);
  const [modelHeard, setModelHeard] = useState<Record<string, boolean>>({});
  const [trialIndex, setTrialIndex] = useState(0);
  const [attempts, setAttempts] = useState<Record<string, ListeningAttempt>>({});
  const [phrase, setPhrase] = useState(0);
  const [phraseText, setPhraseText] = useState(false);
  const [help, setHelp] = useState(false);
  const [observed, setObserved] = useState<boolean[]>([false,false,false]);
  const [epoch, setEpoch] = useState(0);
  const vowels = lessonId === 201;
  const vowel = vowelModels[model];
  const modelClip = phoneticClip(vowels && wordModel ? vowel.word : lesson.models[model]);
  const modelStress = stressTrials[model];
  const trial = lesson.trials[trialIndex];
  const clip = phoneticClip(trial.clipId);
  const attempt = attempts[trial.id] || initialAttempt();
  const correct = attempt.checked && attempt.choice === trial.answer;
  const showAnswer = attempt.revealed || correct;
  const phraseClip = phoneticClip(lesson.phrases[phrase]);
  const act = (action: ListeningAction) => setAttempts(current => ({...current,[trial.id]:updateAttempt(current[trial.id] || initialAttempt(),action,trial.options.length)}));
  const reset = () => {
    setStage(0);setModel(0);setWordModel(false);setModelText(false);setModelHeard({});
    setTrialIndex(0);setAttempts({});setPhrase(0);setPhraseText(false);setHelp(false);
    setObserved([false,false,false]);setEpoch(value => value+1);
  };
  const reviewed = Object.values(attempts).filter(a => a.checked).length;

  return <main className={`ph-lesson ph-${lesson.theme}`}>
    <header className="ph-header">
      <Link href="/">← Biblioteca</Link>
      <span>FONÉTICA · A1</span>
      <button type="button" onClick={reset}>Reiniciar lección</button>
    </header>
    <div className="ph-intro">
      <div><p className="ph-kicker">{vowels ? "La forma de un sonido" : "La fuerza de una sílaba"}</p><h1>{lesson.title}</h1><p>{lesson.outcome}</p></div>
      <img src={lesson.image} alt="" width="1600" height="900" />
    </div>
    <details className="ph-guide">
      <summary>Guía del profe · recorrido orientativo de 40 min</summary>
      <p>{lesson.teacher}</p>
      <ol>{lesson.route.map(line => <li key={line}>{line}</li>)}</ol>
      <p>El tiempo incluye repetición, turnos y devolución; es una estimación, no una duración observada. Al terminar la producción oral podés cerrar la clase. El resto del banco es opcional.</p>
      <p>Modelo de voz sintética configurado para español de Argentina (Microsoft, es-AR-TomasNeural). Mantenemos el voseo. Escuchá los modelos antes de usarlos y comparalos con la producción del alumno; no se evalúa automáticamente su voz.</p>
      <p>«Texto de apoyo» permite trabajar con lectura, con el modelo del profe o como adaptación de acceso. Esa ayuda no se registra como escucha autónoma. Una reproducción terminada tampoco prueba comprensión.</p>
      <p>Las respuestas quedan durante esta visita. Reiniciar o recargar borra respuestas, ayudas y observaciones. No se graba ni guarda la voz.</p>
    </details>

    <nav className="ph-stages" aria-label="Recorrido de fonética">{stages.map((label,index) => <button type="button" key={label} aria-pressed={stage===index} onClick={()=>setStage(index)}>{label}</button>)}</nav>

    {stage===0 && <section className="ph-work" aria-labelledby="ph-model-heading">
      <div className="ph-section-heading"><p className="ph-kicker">01 · Escuchá y probá</p><h2 id="ph-model-heading">{vowels ? "Una vocal, sin agregar otra" : "Primero el acento hablado"}</h2></div>
      <div className={vowels ? "ph-vowel-selector" : "ph-model-selector"} aria-label="Elegir modelo">
        {lesson.models.map((id,index)=><button type="button" key={id} aria-pressed={model===index} onClick={()=>{setModel(index);setModelText(false);}}>{vowels ? vowelModels[index].vowel : `Modelo ${index+1}`}</button>)}
      </div>
      {vowels ? <div className="ph-vowel-focus"><strong aria-label={`Vocal ${vowel.vowel}`}>/{vowel.vowel}/</strong><div><p>{vowel.cue}</p><p>Escuchá, repetí sin tensión y compará con la misma vocal en <b>{vowel.word}</b>.</p><div className="ph-actions"><button type="button" aria-pressed={!wordModel} onClick={()=>setWordModel(false)}>Vocal sola</button><button type="button" aria-pressed={wordModel} onClick={()=>setWordModel(true)}>En una palabra</button></div></div></div>
        : <><p>Escuchá la palabra. Marcá un pulso en la sílaba que se destaca y repetí la palabra completa.</p><div className="ph-syllables" aria-label={modelText ? "Modelo con acento señalado" : `${modelStress.options.length} sílabas, sin respuesta visible`}>{modelStress.syllables?.map((syllable,index)=><span key={index} className={modelText && index===modelStress.answer ? "ph-stressed" : "ph-syllable"}>{modelText ? syllable : index+1}</span>)}</div></>}
      <AudioDeck key={`model-${epoch}-${modelClip.id}`} src={modelClip.src} title={vowels ? wordModel ? "La vocal en una palabra" : "Modelo de vocal" : `Modelo ${model+1}`} channel="ESCUCHÁ · REPETÍ" showWaveform={false} playingMessage={vowels ? "Escuchá el sonido completo y repetí después." : modelText ? "Compará lo que escuchás con la sílaba destacada." : "Escuchá antes de mirar la palabra."} onComplete={()=>setModelHeard(current=>({...current,[modelClip.id]:true}))}/>
      {!vowels && <div className="ph-model-reveal"><button type="button" onClick={()=>setModelText(value=>!value)}>{modelText ? "Ocultar modelo" : modelHeard[modelClip.id] ? "Ver la sílaba tónica" : "Ver apoyo sin audio"}</button>{modelText && <div><p><b>{modelClip.text}</b>. {modelStress.why}</p><p>La tilde es una marca escrita. El acento hablado se escucha, haya tilde o no. No todas las sílabas duran lo mismo.</p></div>}</div>}
      <p className="ph-next">{vowels ? "Ahora distinguí palabras por el sonido, antes de ver cuál sonó." : "Ahora elegí la sílaba tónica sin ver la palabra escrita."}</p>
      <button type="button" className="ph-primary" onClick={()=>setStage(1)}>Empezar las escuchas</button>
    </section>}

    {stage===1 && <section className="ph-work" aria-labelledby="ph-listen-heading">
      <div className="ph-section-heading"><p className="ph-kicker">02 · Escucha {trialIndex+1} de {lesson.trials.length}{trial.extension ? " · contraste opcional" : " · recorrido central"}</p><h2 id="ph-listen-heading">{vowels ? "¿Qué palabra escuchás?" : "¿Qué sílaba se destaca?"}</h2></div>
      <p>{vowels ? "Primero escuchá la palabra completa. Después elegí; podés volver a escuchar antes de comprobar." : "Escuchá sin buscar una tilde. Los números indican el orden de las sílabas, no la respuesta."}</p>
      <AudioDeck key={`trial-${epoch}-${trial.id}`} src={clip.src} title={`Escucha ${trialIndex+1}`} channel={vowels ? "VOCAL EN CONTRASTE" : "ACENTO HABLADO"} showWaveform={false} playingMessage={showAnswer ? "Escuchá otra vez y compará con el modelo revelado." : "Escuchá sin leer la respuesta."} onComplete={()=>act({type:"heard"})}/>
      <div className={vowels ? "ph-word-options" : "ph-pulse-options"} role="group" aria-label={vowels ? "Palabra oída" : "Posición de la sílaba tónica"}>{trial.options.map((option,index)=><button type="button" key={option} aria-pressed={attempt.choice===index} disabled={!attempt.heard && !attempt.assisted} onClick={()=>act({type:"choose",choice:index})}>{option}</button>)}</div>
      <div className="ph-actions"><button type="button" className="ph-primary" disabled={attempt.choice===null} onClick={()=>act({type:"check"})}>Comprobar</button><button type="button" onClick={()=>act({type:"retry"})}>Intentar de nuevo</button><button type="button" onClick={()=>act({type:"reveal"})}>Texto de apoyo</button></div>
      <div className="ph-feedback" role="status" aria-live="polite">
        {!attempt.heard && !attempt.assisted && <p>Escuchá hasta el final para elegir. Si necesitás leer o usar el modelo del profe, abrí «Texto de apoyo».</p>}
        {attempt.heard && !attempt.checked && !attempt.revealed && <p>Audio terminado. Elegí lo que escuchaste; podés repetirlo.</p>}
        {attempt.assisted && <p className="ph-support-label">{showAnswer ? "Con texto visible" : "Se usó texto de apoyo"}: práctica acompañada, sin crédito de escucha autónoma.</p>}
        {attempt.checked && !correct && <p>Volvé a escuchar. {trial.hint}</p>}
        {correct && <p>{attempt.assisted ? "Práctica con apoyo." : "Tu elección coincide con el modelo."} Ahora repetilo y compará.</p>}
        {showAnswer && <div className="ph-answer"><p><b>Sonó: {clip.text}</b></p>{trial.syllables && <div className="ph-syllables" aria-label="Acento del modelo">{trial.syllables.map((syllable,index)=><span key={index} className={index===trial.answer ? "ph-stressed" : "ph-syllable"} aria-label={index===trial.answer ? `Sílaba tónica: ${syllable}` : undefined}>{syllable}</span>)}</div>}<p>{trial.why}</p><p>{trial.extension ? "Repetí y compará el acento. Si querés un contexto, el profe puede darte una frase; no hace falta crear una ni explicar el tiempo verbal." : "Repetí la palabra y usala en una frase breve con tu profe."}</p></div>}
      </div>
      <div className="ph-trial-nav"><button type="button" disabled={trialIndex===0} onClick={()=>setTrialIndex(value=>value-1)}>Anterior escucha</button><button type="button" disabled={trialIndex===lesson.trials.length-1} onClick={()=>setTrialIndex(value=>value+1)}>Siguiente escucha</button></div>
      <p className="ph-review-count">Respuestas revisadas: {reviewed} de {lesson.trials.length}. No es una nota de pronunciación.</p>
      {!vowels && <p>El recorrido central termina en la escucha 4. Las escuchas 5–12 son contrastes opcionales para elegir con el profe; no necesitás completar el banco para hablar.</p>}
      <button type="button" className="ph-primary" onClick={()=>setStage(2)}>Pasar a la producción oral</button>
    </section>}

    {stage===2 && <section className="ph-work" aria-labelledby="ph-speak-heading">
      <div className="ph-section-heading"><p className="ph-kicker">03 · Del modelo a tu voz</p><h2 id="ph-speak-heading">{vowels ? "Que el otro te entienda" : "Una palabra dentro de tu frase"}</h2></div>
      <p>Escuchá una frase y repetí. Después ocultá el texto y usá el sonido en algo tuyo.</p>
      <div className="ph-actions">{lesson.phrases.map((id,index)=><button type="button" key={id} aria-pressed={phrase===index} onClick={()=>{setPhrase(index);setPhraseText(false);}}>{vowels ? `Frase ${index+1}` : index===0 ? "Pregunta" : "Respuesta"}</button>)}</div>
      <AudioDeck key={`phrase-${epoch}-${phraseClip.id}`} src={phraseClip.src} title={vowels ? `Frase ${phrase+1}` : phrase===0 ? "Pregunta breve" : "Respuesta breve"} channel="ESCUCHÁ · IMITÁ · CAMBIÁ" showWaveform={false} playingMessage={phraseText ? "Compará el audio con la frase visible." : "Escuchá la frase antes de mostrar el texto."}/>
      <button type="button" onClick={()=>setPhraseText(value=>!value)}>{phraseText ? "Ocultar frase" : "Mostrar frase"}</button>
      {phraseText && <p className="ph-phrase">{phraseClip.text}</p>}
      <div className="ph-retrieval"><h3>Sin mirar</h3><p>{lesson.retrieval}</p></div>
      <div className="ph-closing"><h3>Ahora, una conversación corta</h3><ol>{lesson.closing.map(line=><li key={line}>{line}</li>)}</ol><button type="button" onClick={()=>setHelp(value=>!value)}>{help ? "Ocultar ayuda oral" : "Ayuda para empezar"}</button>{help && <p>{lesson.support}</p>}</div>
      <fieldset className="ph-observation"><legend>Observación del profe, después de escuchar al alumno</legend>{lesson.criteria.map((criterion,index)=><label key={criterion}><input type="checkbox" checked={observed[index]} onChange={event=>setObserved(current=>current.map((value,i)=>i===index ? event.target.checked : value))}/><span>{criterion}</span></label>)}<p>No evalúa automáticamente la pronunciación. Estas marcas reflejan únicamente la observación del profe.</p></fieldset>
      <details className="ph-homework"><summary>Para seguir, sin hacer toda la clase de nuevo</summary><p>{lesson.homework}</p></details>
    </section>}
  </main>;
}
