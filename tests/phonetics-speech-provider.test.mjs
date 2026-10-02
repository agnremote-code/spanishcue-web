import test from 'node:test';
import assert from 'node:assert/strict';
import {recognizeSpanish} from '../app/phonetics-family/speech-provider.mjs';

test('a missing provider credential returns unavailable without sending audio',async()=>{
 let sent=false;const result=await recognizeSpanish(new Uint8Array(44),'Es una casa.',{},async()=>{sent=true;});
 assert.equal(result.kind,'unavailable');assert.equal(sent,false);
});
test('provider receives private key and WAV; only transcript and word timing are returned',async()=>{
 let request;const fetcher=async(url,options)=>{request={url,options};return Response.json({combinedPhrases:[{text:'Es una casa.'}],phrases:[{confidence:.9,words:[{text:'Es',offsetMilliseconds:100,durationMilliseconds:200},{text:'una',offsetMilliseconds:330,durationMilliseconds:230},{text:'casa.',offsetMilliseconds:580,durationMilliseconds:350}]}]});};
 const result=await recognizeSpanish(new Uint8Array(44),'Es una casa.',{AZURE_SPEECH_KEY:'private',AZURE_SPEECH_REGION:'eastus'},fetcher);
 assert.equal(result.kind,'recognized');assert.equal(result.transcript,'Es una casa.');
 assert.deepEqual(result.words[1],{text:'una',start:330,end:560});
 assert.equal(result.scores,undefined);
 assert.match(request.url,/transcriptions:transcribe\?api-version=2025-10-15/);
 assert.equal(request.options.headers['Ocp-Apim-Subscription-Key'],'private');
 assert.equal(request.options.body.get('audio').type,'audio/wav');
 assert.deepEqual(JSON.parse(request.options.body.get('definition')),{locales:['es-AR'],wordLevelTimestampsEnabled:true});
});
test('provider failure has no invented transcription',async()=>{
 const result=await recognizeSpanish(new Uint8Array(44),'Es una casa.',{AZURE_SPEECH_KEY:'private',AZURE_SPEECH_REGION:'eastus'},async()=>new Response('error',{status:503}));
 assert.deepEqual(result,{kind:'unavailable'});
});
test('free speech does not send a forced reference text',async()=>{
 let definition;await recognizeSpanish(new Uint8Array(44),'',{AZURE_SPEECH_KEY:'private',AZURE_SPEECH_REGION:'eastus'},async(_url,options)=>{definition=JSON.parse(options.body.get('definition'));return Response.json({phrases:[]});});
 assert.equal(JSON.stringify(definition).includes('ReferenceText'),false);
});
