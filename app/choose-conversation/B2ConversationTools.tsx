import { b2DiscourseMoves, b2TopicSupport } from './b2-data';

export function B2ConversationSupport({ topicIndex }: { topicIndex: number }) {
  const support = b2TopicSupport[topicIndex];
  return <details className="talk-b2-support">
    <summary>Apoyos para ir más allá <span>Opcionales</span></summary>
    <p>No necesitas usar todas estas expresiones. Elige una que te ayude a responder a lo que acabas de escuchar.</p>
    <dl>{b2DiscourseMoves.map(({ move, chunk }) => <div key={move}><dt>{move}</dt><dd>{chunk}</dd></div>)}</dl>
    <h3>Una vuelta más en este mundo</h3>
    <ul>{support.followUps.map(question => <li key={question}>{question}</li>)}</ul>
  </details>;
}

export function B2ConversationClosing({ questions }: { questions: string[] }) {
  return <details className="talk-b2-closing">
    <summary>Conecta tus tres ideas <span>8 min</span></summary>
    <p>Vuelve a tus respuestas y a las de la otra persona. La meta es construir una conclusión que reúna lo conversado.</p>
    <ol>{questions.map(question => <li key={question}>{question}</li>)}</ol>
  </details>;
}
