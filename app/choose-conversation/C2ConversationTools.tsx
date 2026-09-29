import { c2DiscourseMoves, c2TopicSupport } from './c2-data';

export function C2ConversationEntry({ guide }: { guide: string }) {
  return <div className="talk-c2-entry">
    <p><strong>Para entrar en conversación:</strong> di «qué buena idea» de dos formas creíbles: con entusiasmo y con ironía. ¿Qué necesita saber quien escucha para distinguirlas?</p>
    <details><summary>Guía para una conversación de 45 minutos</summary><p>{guide}</p></details>
  </div>;
}

export function C2ConversationSupport({ topicIndex }: { topicIndex: number }) {
  return <details className="talk-c2-support">
    <summary>Prueba otra formulación <span>Apoyo opcional</span></summary>
    <p>Abre solo el recurso que necesites. Busca tu propia formulación; puedes sostener dos lecturas sin elegir una todavía.</p>
    <dl>{c2DiscourseMoves.map(({ move, chunk }) => <div key={move}><dt>{move}</dt><dd>{chunk}</dd></div>)}</dl>
    <h3>Si quieres afinar la conversación</h3>
    <ul>{c2TopicSupport[topicIndex].followUps.map(question => <li key={question}>{question}</li>)}</ul>
  </details>;
}

export function C2ConversationClosing({ questions }: { questions: string[] }) {
  return <details className="talk-c2-closing">
    <summary>De tus tres respuestas a una formulación más precisa <span>8 min</span></summary>
    <p>Recupera lo que realmente has dicho. Tu interlocutor propone la lectura más difícil de descartar; comprueba después si puedes cambiar el registro sin cambiar tu conclusión.</p>
    <ol>{questions.map(question => <li key={question}>{question}</li>)}</ol>
  </details>;
}
