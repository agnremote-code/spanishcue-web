import { c1DiscourseMoves, c1TopicSupport } from './c1-data';

export function C1ConversationEntry({ guide }: { guide: string }) {
  return <div className="talk-c1-entry">
    <p><strong>Antes de elegir:</strong> recuerden una conversación que les haya cambiado la manera de ver algo. No hace falta que acabara en acuerdo. ¿Qué la hizo avanzar?</p>
    <details><summary>Guía para una conversación de 45 minutos</summary><p>{guide}</p></details>
  </div>;
}

export function C1ConversationSupport({ topicIndex }: { topicIndex: number }) {
  return <details className="talk-c1-support">
    <summary>Decilo con más precisión <span>Apoyo opcional</span></summary>
    <p>Abrí estos recursos cuando te falte una manera de expresar un matiz. No hace falta usarlos todos ni llegar a un acuerdo.</p>
    <dl>{c1DiscourseMoves.map(({ move, chunk }) => <div key={move}><dt>{move}</dt><dd>{chunk}</dd></div>)}</dl>
    <h3>Si quieren abrir otra lectura</h3>
    <ul>{c1TopicSupport[topicIndex].followUps.map(question => <li key={question}>{question}</li>)}</ul>
  </details>;
}

export function C1ConversationClosing({ questions }: { questions: string[] }) {
  return <details className="talk-c1-closing">
    <summary>Un hilo entre tus tres respuestas <span>8 min</span></summary>
    <p>Pasen de tres respuestas a una reflexión compartida. Usen sus ejemplos y las palabras de la otra persona para revisar la conexión que encuentran.</p>
    <ol>{questions.map(question => <li key={question}>{question}</li>)}</ol>
  </details>;
}
