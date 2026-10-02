import test from 'node:test';
import assert from 'node:assert/strict';
import {interpretConnectedSpeech} from '../app/phonetics-family/speech-analysis.mjs';

const words=(values)=>values.map(([text,start,end])=>({text,start,end}));
const input={expected:'Es una casa.',targetBoundary:0,durationMs:1600,voicedMs:1100,
 transcript:'Es una casa.',words:words([['Es',100,350],['una',390,680],['casa',700,1350]]),silences:[]};

test('recognizes a supported continuous target boundary without scoring accent',()=>{
 const result=interpretConnectedSpeech(input);
 assert.equal(result.kind,'continuous');assert.match(result.message,/sin una pausa/);
 assert.doesNotMatch(JSON.stringify(result),/score|acento|nativ/i);
});
test('identifies a significant silence at the target boundary',()=>{
 const result=interpretConnectedSpeech({...input,words:words([['Es',100,350],['una',850,1120],['casa',1140,1500]]),silences:[{start:390,end:800}],durationMs:1750});
 assert.equal(result.kind,'pause');assert.match(result.message,/después de «es»/i);
});
test('word mismatch takes precedence over timing judgment',()=>{
 const result=interpretConnectedSpeech({...input,transcript:'Es una mesa.',words:words([['Es',100,350],['una',850,1120],['mesa',1140,1500]]),silences:[{start:390,end:800}]});
 assert.equal(result.kind,'mismatch');assert.doesNotMatch(result.message,/pausa después/);
});
test('empty, silent or too-short takes request a retry',()=>{
 for(const change of [{durationMs:200},{voicedMs:0},{transcript:''}])assert.equal(interpretConnectedSpeech({...input,...change}).kind,'retry');
});
test('missing word timing or uncertain recognition does not certify continuity',()=>{
 assert.equal(interpretConnectedSpeech({...input,words:[]}).kind,'uncertain');
 assert.equal(interpretConnectedSpeech({...input,confidence:.25}).kind,'uncertain');
});
test('an unrelated silence does not become a target-boundary error',()=>{
 assert.equal(interpretConnectedSpeech({...input,silences:[{start:1050,end:1350}]}).kind,'continuous');
});
