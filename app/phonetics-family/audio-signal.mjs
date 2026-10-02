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

/** Validate exactly the mono PCM format that our encoder produces. */
export function decodeWav16k(wav){
 if(!(wav instanceof Uint8Array)||wav.length<44)throw new Error('invalid-wav');
 const view=new DataView(wav.buffer,wav.byteOffset,wav.byteLength),tag=at=>String.fromCharCode(...wav.subarray(at,at+4));
 if(tag(0)!=='RIFF'||tag(8)!=='WAVE'||tag(12)!=='fmt '||tag(36)!=='data'||view.getUint32(4,true)!==wav.length-8||view.getUint32(16,true)!==16||view.getUint16(20,true)!==1||view.getUint16(22,true)!==1||view.getUint32(24,true)!==16000||view.getUint32(28,true)!==32000||view.getUint16(32,true)!==2||view.getUint16(34,true)!==16||view.getUint32(40,true)!==wav.length-44||(wav.length-44)%2)throw new Error('invalid-wav');
 const samples=new Float32Array((wav.length-44)/2);
 for(let i=0;i<samples.length;i++)samples[i]=view.getInt16(44+i*2,true)/32768;
 return {samples,sampleRate:16000,durationMs:samples.length/16,signal:measureSignal(samples,16000)};
}

export function microphoneErrorMessage(error){
 switch(error?.name){
 case 'NotAllowedError':case 'SecurityError':return 'Permite el acceso al micrófono en tu navegador y vuelve a intentarlo.';
 case 'NotFoundError':return 'No encontramos un micrófono. Conecta uno y vuelve a intentarlo.';
 case 'NotReadableError':return 'El micrófono está ocupado. Cierra la otra aplicación que lo usa y vuelve a intentarlo.';
 case 'NotSupportedError':return 'Este navegador no puede capturar audio. Abre la clase en una versión reciente de Chrome o Safari.';
 default:return 'No pudimos capturar tu voz. Comprueba el micrófono y vuelve a intentarlo.';
 }
}

/** One attempt. Explicit resume in the click gesture avoids suspended audio contexts.
 * The same PCM drives the meter, the WAV replay and the provider upload. */
/** @param {{onLevel?:(rms:number,elapsed:number)=>void,onError?:(error:Error)=>void}} callbacks */
export function createMicrophoneCapture({onLevel=()=>{},onError=()=>{}}={},runtime=globalThis){
 let context,stream,source,node,gain,closed=false,frames=0,finish,stopping;
 const chunks=[];
 const cleanup=()=>{if(closed)return;closed=true;stream?.getTracks().forEach(track=>track.stop());source?.disconnect();node?.disconnect();gain?.disconnect();if(node)node.port.onmessage=null;if(context)void context.close();chunks.length=0;};
 return {
  async start(){
   try{
    const devices=runtime.mediaDevices??runtime.navigator?.mediaDevices;
    if(!devices?.getUserMedia||!runtime.AudioContext||!runtime.AudioWorkletNode)throw new DOMException('unsupported','NotSupportedError');
    context=new runtime.AudioContext();
    // Call before awaiting microphone permission, while the gesture is active.
    await context.resume();
    if(closed)throw new DOMException('cancelled','AbortError');
    stream=await devices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,channelCount:1},video:false});
    if(closed){stream.getTracks().forEach(track=>track.stop());throw new DOMException('cancelled','AbortError');}
    await context.audioWorklet.addModule('/phonetics/pcm-capture.js');
    if(closed)throw new DOMException('cancelled','AbortError');
    if(context.state!=='running')throw new Error('suspended-audio');
    source=context.createMediaStreamSource(stream);node=new runtime.AudioWorkletNode(context,'spanishcue-pcm');gain=context.createGain();gain.gain.value=0;
    node.port.onmessage=event=>{
     if(closed)return;
     if(event.data.stopped){finish?.();return;}
     const samples=event.data.samples;
     if(!(samples instanceof Float32Array))return;
     const remaining=Math.max(0,Math.round(context.sampleRate*30)-frames),chunk=samples.slice(0,remaining);
     if(!chunk.length)return;
     chunks.push(chunk);frames+=chunk.length;let power=0;for(const value of chunk)power+=value*value;onLevel(Math.sqrt(power/chunk.length),frames/context.sampleRate*1000);
    };
    node.onprocessorerror=()=>{cleanup();onError(new Error('audio-processor-failed'));};
    source.connect(node);node.connect(gain);gain.connect(context.destination);
   }catch(error){cleanup();throw error;}
  },
  async stop(){
   if(stopping)return stopping;
   stopping=(async()=>{
    if(closed||!node)throw new Error('capture-not-running');
    await new Promise(resolve=>{let timeout;finish=()=>{clearTimeout(timeout);resolve();};timeout=setTimeout(finish,500);node.port.postMessage('stop');});
    const samples=new Float32Array(frames);let at=0;for(const chunk of chunks){samples.set(chunk,at);at+=chunk.length;}
    const sampleRate=context.sampleRate,wav=encodeWav16k(samples,sampleRate);cleanup();
    return {samples,sampleRate,wav};
   })();return stopping;
  },
  cancel(){finish?.();cleanup();}
 };
}
