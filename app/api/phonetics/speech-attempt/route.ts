import {env} from 'cloudflare:workers';
import {fullAccessFromHeaders, signedInFromHeaders} from '../../../access-policy';
import {contentFor, isLevel} from '../../../hablar-sin-cortar/levels.mjs';
import {decodeWav16k} from '../../../phonetics-family/audio-signal.mjs';
import {recognizeSpanish} from '../../../phonetics-family/speech-provider.mjs';
import {interpretConnectedSpeech} from '../../../phonetics-family/speech-analysis.mjs';
import type {Activity} from '../../../phonetics-family/types';

export const dynamic='force-dynamic';
const noStore={'cache-control':'private, no-store'};
const reply=(data:object,status=200)=>Response.json(data,{status,headers:noStore});

export async function POST(request:Request){
 if(!signedInFromHeaders(request.headers)||!fullAccessFromHeaders(request.headers))return reply({message:'Inicia sesión con acceso PRO.'},401);
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply({message:'Origen no válido.'},403);
 if(!request.headers.get('content-type')?.startsWith('multipart/form-data'))return reply({message:'Formato no válido.'},415);
 if(Number(request.headers.get('content-length'))>1_100_000)return reply({message:'Grabación demasiado grande.'},413);
 let form:FormData;
 try{form=await request.formData();}catch{return reply({message:'Grabación no válida.'},400);}
 const level=form.get('level'),activityId=form.get('activityId'),audio=form.get('audio');
 if(typeof level!=='string'||!isLevel(level)||typeof activityId!=='string'||!(audio instanceof File))return reply({message:'Actividad no válida.'},400);
 const activity=(contentFor(level).activities as Activity[]).find(a=>a.id===activityId);
 if(activityId!=='final'&&!activity)return reply({message:'Actividad no válida.'},400);
 if(audio.size>1_000_000||audio.size<44)return reply({message:'Grabación no válida.'},413);
 const wav=new Uint8Array(await audio.arrayBuffer());
 let decoded:ReturnType<typeof decodeWav16k>;
 try{decoded=decodeWav16k(wav);}catch{return reply({kind:'retry',message:'La grabación está dañada. Graba otra vez con el micrófono.'},400);}
 const {durationMs,signal:{silences,voicedMs}}=decoded;
 if(durationMs<350)return reply({kind:'retry',message:'La toma es demasiado corta. Graba la frase completa.'},400);
 if(durationMs>30000)return reply({kind:'retry',message:'Graba una toma de hasta 30 segundos.'},400);
 if(voicedMs<200)return reply({kind:'retry',message:'No escuchamos tu voz. Comprueba el micrófono, acércate y vuelve a intentarlo.'});
 const free=activityId==='final'||activity?.analysisTarget!=='connectedSpeech';
 const provider=await recognizeSpanish(wav,free?'':activity!.text,env as unknown as Record<string,string>);
 if(provider.kind==='unavailable')return reply({kind:'unavailable',reason:provider.reason,message:provider.reason==='timeout'?'El reconocimiento tardó demasiado. Vuelve a intentarlo.':'El reconocimiento de voz no está disponible ahora. Vuelve a intentarlo o practica con tu profesor.'});
 if(provider.kind==='unrecognized')return reply({kind:'retry',message:'No pudimos reconocer la frase. Prueba otra vez.'});
 if(provider.kind!=='recognized'||typeof provider.transcript!=='string')return reply({kind:'unavailable',message:'El reconocimiento no devolvió una transcripción válida. Vuelve a intentarlo.'});
 const confident=typeof provider.confidence==='number'&&Number.isFinite(provider.confidence)&&provider.confidence>=.65;
 if(free&&!confident)return reply({kind:'uncertain',message:'La transcripción no es segura. Escucha tu toma y vuelve a intentarlo.',transcript:provider.transcript,confident:false});
 if(free)return reply({kind:'manual',message:'Escucha tu grabación y pide comentarios a tu profesor.',transcript:provider.transcript,confident});
 const targetBoundary=activity!.analysisBoundary??0;
 const result=interpretConnectedSpeech({expected:activity!.text,transcript:provider.transcript,words:provider.words,silences,durationMs,voicedMs,targetBoundary,confidence:provider.confidence});
 return reply({...result,transcript:provider.transcript,confident});
}
