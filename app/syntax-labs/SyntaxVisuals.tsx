type ConnectorProps = {
  left: string;
  connector: string;
  right: string;
  label?: string;
};

export function SentenceConnector({ left, connector, right, label = "Relación entre ideas" }: ConnectorProps) {
  return (
    <div className="sx-connector" aria-label={label}>
      <span className="sx-sentence-block">{left}</span>
      <span className="sx-bridge" aria-label={`Conector: ${connector}`}>{connector}</span>
      <span className="sx-sentence-block">{right}</span>
    </div>
  );
}

export function ClauseBuilder({ left, connector, right, label = "Idea principal e idea dependiente" }: ConnectorProps) {
  return (
    <div className="sx-clause-builder" aria-label={label}>
      <span className="sx-main-clause"><small>IDEA PRINCIPAL</small>{left}</span>
      <span className="sx-clause-slot"><small>ENLACE</small>{connector}</span>
      <span className="sx-dependent-clause"><small>IDEA QUE ENTRA</small>{right}</span>
    </div>
  );
}

export function TimelineBuilder({ left, connector, right, label = "Secuencia temporal" }: ConnectorProps) {
  return (
    <div className="sx-timeline-builder" aria-label={label}>
      <span className="sx-time-event"><small>ACCIÓN 1</small>{left}</span>
      <span className="sx-time-link"><i aria-hidden="true" />{connector}</span>
      <span className="sx-time-event"><small>ACCIÓN 2</small>{right}</span>
    </div>
  );
}

export function DecisionChain({ left, connector, right, label = "Condición y consecuencia" }: ConnectorProps) {
  return (
    <div className="sx-decision-chain" aria-label={label}>
      <span className="sx-condition"><small>CONDICIÓN REAL</small>{left}</span>
      <span className="sx-chain-link"><small>ENLACE</small>{connector}</span>
      <span className="sx-consequence"><small>CONSECUENCIA</small>{right}</span>
    </div>
  );
}
