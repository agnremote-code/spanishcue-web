/** Private synchronous Azure STT. Neither audio nor response is logged or stored. */
export function speechConfiguration(config){
 const key=Boolean(config.AZURE_SPEECH_KEY),region=Boolean(config.AZURE_SPEECH_REGION);
 return {configured:key&&region&&/^[a-z0-9-]+$/i.test(config.AZURE_SPEECH_REGION),keyPresent:key,regionPresent:region};
}
export async function recognizeSpanish(wav,_reference,config,fetcher=fetch) {
 if(!speechConfiguration(config).configured)return {kind:'unavailable',reason:'configuration'};
 const url=`https://${config.AZURE_SPEECH_REGION}.api.cognitive.microsoft.com/speechtotext/transcriptions:transcribe?api-version=2025-10-15`;
 const body=new FormData();body.set('audio',new File([wav],'attempt.wav',{type:'audio/wav'}));
 // Standard Spanish recognition locale, never an accent grade or forced transcript.
 body.set('definition',JSON.stringify({locales:['es-ES'],wordLevelTimestampsEnabled:true}));
 try {
  const response=await fetcher(url,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':config.AZURE_SPEECH_KEY},body,signal:AbortSignal.timeout(15000)});
  if(!response.ok)return {kind:'unavailable',reason:response.status===401||response.status===403?'credentials':response.status===429?'busy':'provider'};
  const data=await response.json();
  if(!Array.isArray(data.phrases)||data.phrases.some(p=>!p||typeof p!=='object'))return {kind:'unavailable',reason:'response'};
  const phrases=data.phrases,transcript=data.combinedPhrases?.[0]?.text||phrases.map(p=>p.text||'').join(' ');
  if(typeof transcript!=='string'||!transcript.trim())return {kind:'unrecognized'};
  const words=phrases.flatMap(p=>(Array.isArray(p.words)?p.words:[]).map(w=>({text:w.text||'',start:w.offsetMilliseconds,end:w.offsetMilliseconds+w.durationMilliseconds})));
  const confidences=phrases.map(p=>p.confidence);
  return {kind:'recognized',transcript,words,confidence:confidences.length&&confidences.every(v=>Number.isFinite(v)&&v>=0&&v<=1)?Math.min(...confidences):undefined};
 }catch(error){return {kind:'unavailable',reason:error?.name==='TimeoutError'||error?.name==='AbortError'?'timeout':'network'};}
}
