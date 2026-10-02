/** Local measurement only; no PCM is sent to analytics or persisted. */
export function measureSignal(samples,sampleRate){
 const frame=Math.max(1,Math.round(sampleRate*.02)),levels=[];
 for(let i=0;i<samples.length;i+=frame){let sum=0;for(let j=i;j<Math.min(i+frame,samples.length);j++)sum+=samples[j]*samples[j];levels.push(Math.sqrt(sum/Math.min(frame,samples.length-i)));}
 const peak=Math.max(0,...levels),threshold=Math.max(.012,peak*.1);
 let voiced=0,open=-1;const silences=[];
 for(let i=0;i<=levels.length;i++){
  const speaking=i<levels.length&&levels[i]>=threshold;
  if(speaking)voiced++;
  if(!speaking&&open<0)open=i;
  if(speaking&&open>=0){if((i-open)*20>=180)silences.push({start:open*20,end:i*20});open=-1;}
 }
 if(open>=0&&(levels.length-open)*20>=180)silences.push({start:open*20,end:Math.round(samples.length/sampleRate*1000)});
 return {voicedMs:voiced*20,silences};
}

export function encodeWav16k(samples,rate){
 const count=Math.round(samples.length*16000/rate),out=new Uint8Array(44+count*2),view=new DataView(out.buffer);
 const chars=(at,value)=>{for(let i=0;i<4;i++)out[at+i]=value.charCodeAt(i);};
 chars(0,'RIFF');view.setUint32(4,out.length-8,true);chars(8,'WAVE');chars(12,'fmt ');
 view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,16000,true);view.setUint32(28,32000,true);view.setUint16(32,2,true);view.setUint16(34,16,true);chars(36,'data');view.setUint32(40,count*2,true);
 for(let i=0;i<count;i++){
  const pos=i*rate/16000,base=Math.floor(pos),fraction=pos-base;
  const value=Math.max(-1,Math.min(1,(samples[base]||0)*(1-fraction)+(samples[Math.min(base+1,samples.length-1)]||0)*fraction));
  view.setInt16(44+i*2,value<0?Math.round(value*32768):Math.round(value*32767),true);
 }
 return out;
}
