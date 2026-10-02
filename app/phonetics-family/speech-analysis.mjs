/** Conservative interpretation: a recognized phrase and a locally measured silence
 * are both required before claiming a target-boundary pause. Times are milliseconds. */
const tokens=text=>String(text||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').match(/[\p{L}\p{N}]+/gu)||[];

/** @param {{expected:string,transcript:string,words?:{text:string,start:number,end:number}[],silences?:{start:number,end:number}[],durationMs?:number,voicedMs?:number,targetBoundary?:number,confidence?:number}} input */
export function interpretConnectedSpeech({expected,transcript,words=[],silences=[],durationMs=0,voicedMs=0,targetBoundary=0,confidence}) {
 const expectedWords=tokens(expected),heard=tokens(transcript);
 if(durationMs<350||voicedMs<200||!heard.length)return {kind:'retry',message:'No escuchamos una frase completa. Vuelve a intentarlo.'};
 if(!Number.isFinite(confidence)||confidence<.65||confidence>1)return {kind:'uncertain',message:'Creemos que dijiste algo, pero la transcripción no es segura. Escucha tu toma y vuelve a intentarlo.'};
 if(heard.length!==expectedWords.length||heard.some((word,i)=>word!==expectedWords[i]))return {kind:'mismatch',message:'Escuchamos otras palabras. Escucha el modelo y vuelve a intentarlo.'};
 const boundary=Math.min(Math.max(0,targetBoundary),expectedWords.length-2);
 if(!words.length||boundary<0||words.length!==expectedWords.length||words.some((w,i)=>tokens(w.text)[0]!==expectedWords[i]))return {kind:'uncertain',message:'Escuchamos las palabras, pero no pudimos ubicar esa unión con seguridad. Compara las dos tomas.'};
 if(words.some((w,i)=>!Number.isFinite(w.start)||!Number.isFinite(w.end)||w.start<0||w.end<=w.start||w.end>durationMs+40||(i>0&&(w.start<words[i-1].end-40||w.end<words[i-1].end))))return {kind:'uncertain',message:'No pudimos medir la unión con seguridad. Escucha el modelo y vuelve a intentarlo.'};
 const left=words[boundary],right=words[boundary+1],gap=right.start-left.end;
 if(!Number.isFinite(gap)||gap< -40||gap>durationMs)return {kind:'uncertain',message:'Escuchamos las palabras, pero no pudimos medir esa unión con seguridad. Compara las dos tomas.'};
 const near=silences.some(s=>Number.isFinite(s.start)&&Number.isFinite(s.end)&&Math.min(s.end,right.start)-Math.max(s.start,left.end)>=180);
 const label=expectedWords[boundary];
 const measurements={boundary,pauseMs:Math.max(0,Math.round(gap)),durationMs,confidence};
 if(gap>=300&&near)return {kind:'pause',message:`Hiciste una pausa después de «${label}». Prueba a unir esas dos palabras en un solo impulso.`,...measurements};
 if(gap<=180&&!near)return {kind:'continuous',message:`Muy bien. «${expectedWords[boundary]} ${expectedWords[boundary+1]}» salió sin una pausa artificial.`,...measurements};
 return {kind:'uncertain',message:'Escuchamos las palabras, pero esa pausa no es clara. Compara tu voz con el modelo.',...measurements};
}
