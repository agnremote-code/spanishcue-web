import {env} from 'cloudflare:workers';
import {fullAccessFromHeaders, signedInFromHeaders} from '../../../access-policy';
import {contentFor, isLevel} from '../../../hablar-sin-cortar/levels.mjs';
import {recognizeSpanish} from '../../../phonetics-family/speech-provider.mjs';
import {interpretConnectedSpeech} from '../../../phonetics-family/speech-analysis.mjs';
import type {Activity} from '../../../phonetics-family/types';

export const dynamic='force-dynamic';
const noStore={'cache-control':'private, no-store'};
const reply=(data:object,status=200)=>Response.json(data,{status,headers:noStore});

export async function POST(request:Request){
 if(!signedInFromHeaders(request.headers)||!fullAccessFromHeaders(request.headers))return reply({error:'Iniciá sesión con acceso PRO.'},401);
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply({error:'Origen no válido.'},403);
 if(!request.headers.get('content-type')?.startsWith('multipart/form-data'))return reply({error:'Formato no válido.'},415);
 if(Number(request.headers.get('content-length'))>1_100_000)return reply({error:'Grabación demasiado grande.'},413);
 let form:FormData;
 try{form=await request.formData();}catch{return reply({error:'Grabación no válida.'},400);}
 const level=form.get('level'),activityId=form.get('activityId'),audio=form.get('audio');
 if(typeof level!=='string'||!isLevel(level)||typeof activityId!=='string'||!(audio instanceof File))return reply({error:'Actividad no válida.'},400);
 const activity=(contentFor(level).activities as Activity[]).find(a=>a.id===activityId);
 if(activityId!=='final'&&!activity)return reply({error:'Actividad no válida.'},400);
 if(audio.size>1_000_000||audio.size<44)return reply({error:'Grabación no válida.'},413);
 const wav=new Uint8Array(await audio.arrayBuffer());
 const header=new DataView(wav.buffer,wav.byteOffset,wav.byteLength);
 const tag=(offset:number)=>String.fromCharCode(...wav.subarray(offset,offset+4));
 if(tag(0)!=='RIFF'||tag(8)!=='WAVE'||tag(12)!=='fmt '||tag(36)!=='data'||header.getUint16(20,true)!==1||header.getUint16(22,true)!==1||header.getUint32(24,true)!==16000||header.getUint16(34,true)!==16||header.getUint32(40,true)!==wav.length-44)return reply({error:'Audio WAV 16 kHz no válido.'},400);
 const durationMs=Math.round((wav.length-44)/32);
 if(durationMs<350||durationMs>30000)return reply({error:'Grabá entre 1 y 30 segundos.'},400);
 let silences:{start:number;end:number}[]=[],voicedMs=0;
 try{
  const raw=String(form.get('signal')||'');if(raw.length>3000)throw Error();
  const signal=JSON.parse(raw) as {silences?:unknown;voicedMs?:unknown};
  if(!Array.isArray(signal.silences)||signal.silences.length>30||!Number.isFinite(signal.voicedMs))throw Error();
  silences=signal.silences.filter((s):s is {start:number;end:number}=>Boolean(s)&&Number.isFinite(s.start)&&Number.isFinite(s.end)&&s.start>=0&&s.end>s.start&&s.end<=durationMs);
  voicedMs=Math.max(0,Math.min(durationMs,Number(signal.voicedMs)));
 }catch{return reply({error:'Señal de audio no válida.'},400);}
 if(voicedMs<200)return reply({kind:'retry',message:'No escuchamos una frase completa. Probá otra vez.'});
 const free=activityId==='final'||activity?.analysisTarget!=='connectedSpeech';
 const provider=await recognizeSpanish(wav,free?'':activity!.text,env as unknown as Record<string,string>);
 if(provider.kind==='unavailable')return reply({kind:'unavailable',message:'La corrección automática no está disponible. Escuchá tu toma y practicala con tu profe.'});
 if(provider.kind==='unrecognized')return reply({kind:'retry',message:'No pudimos reconocer la frase. Probá otra vez.'});
 if(free)return reply({kind:'manual',message:'Escuchá tu toma y pedile una devolución a tu profe.',transcript:provider.transcript});
 const targetBoundary=activity!.analysisBoundary??0;
 const result=interpretConnectedSpeech({expected:activity!.text,transcript:provider.transcript,words:provider.words,silences,durationMs,voicedMs,targetBoundary,confidence:provider.confidence});
 return reply({...result,transcript:provider.transcript});
}
