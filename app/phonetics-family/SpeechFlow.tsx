/** Orthographic words remain intact. Connections illustrate phrasing, not deletion. */
export default function SpeechFlow({tokens,connections,pauses=[],connected=true}:{tokens:string[];connections?:number[];pauses?:number[];connected?:boolean}) {
 const boundaries=tokens.slice(0,-1).map((word,i)=>pauses.includes(i)?`Pausa después de ${word}`:connected&&(connections?connections.includes(i):!/[.!?]$/.test(word))?`Unión entre ${word} y ${tokens[i+1]}`:'').filter(Boolean).join('. ');
 return <div className="pf-speech-flow" data-connected={connected} role="group" aria-label={`Modelo: ${tokens.join(' ')}. ${boundaries}`}>
  {tokens.map((word,i)=><span className="pf-flow-unit" key={i}><span className="pf-flow-word">{word}</span>{i<tokens.length-1&&<span className={pauses.includes(i)?'pf-flow-pause':'pf-flow-link'} aria-hidden="true">{pauses.includes(i)?'│':connected&&(connections?connections.includes(i):!/[.!?]$/.test(word))?'‿':'·'}</span>}</span>)}
 </div>;
}
