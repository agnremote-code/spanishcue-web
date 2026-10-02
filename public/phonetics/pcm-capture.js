/* Runs on the audio thread: real input, mono PCM, silent output. No persistence. */
class SpanishCuePCM extends AudioWorkletProcessor {
 constructor(){super();this.pending=[];this.count=0;this.stopped=false;this.port.onmessage=()=>{this.flush();this.stopped=true;this.port.postMessage({stopped:true});};}
 flush(){if(!this.count)return;const samples=new Float32Array(this.count);let at=0;for(const chunk of this.pending){samples.set(chunk,at);at+=chunk.length;}this.pending=[];this.count=0;this.port.postMessage({samples},[samples.buffer]);}
 process(inputs){if(this.stopped)return false;const channels=inputs[0];if(channels?.length){const mono=new Float32Array(channels[0].length);for(const data of channels)for(let i=0;i<mono.length;i++)mono[i]+=data[i]/channels.length;this.pending.push(mono);this.count+=mono.length;if(this.count>=2048)this.flush();}return true;}
}
registerProcessor('spanishcue-pcm',SpanishCuePCM);
