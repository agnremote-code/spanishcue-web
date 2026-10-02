/** Optional Azure fast transcription. Neither audio nor response is logged here. */
export async function recognizeSpanish(wav,_reference,config,fetcher=fetch) {
 const key=config.AZURE_SPEECH_KEY,region=config.AZURE_SPEECH_REGION;
 if(!key||!region||!/^[a-z0-9-]+$/i.test(region))return {kind:'unavailable'};
 const url=`https://${region}.api.cognitive.microsoft.com/speechtotext/transcriptions:transcribe?api-version=2025-10-15`;
 const body=new FormData();body.set('audio',new File([wav],'attempt.wav',{type:'audio/wav'}));
 body.set('definition',JSON.stringify({locales:['es-AR'],wordLevelTimestampsEnabled:true}));
 try {
  const response=await fetcher(url,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':key},body,signal:AbortSignal.timeout(12000)});
  if(!response.ok)return {kind:'unavailable'};
  const data=await response.json(),phrases=data.phrases||[];
  const transcript=data.combinedPhrases?.[0]?.text||phrases.map(p=>p.text).join(' ');
  if(!transcript)return {kind:'unrecognized'};
  const words=phrases.flatMap(p=>(p.words||[]).map(w=>({text:w.text||'',start:w.offsetMilliseconds,end:w.offsetMilliseconds+w.durationMilliseconds})));
  const confidences=phrases.map(p=>p.confidence).filter(Number.isFinite);
  return {kind:'recognized',transcript,words,confidence:confidences.length?Math.min(...confidences):undefined};
 }catch{return {kind:'unavailable'};}
}
