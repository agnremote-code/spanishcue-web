// El taller de la greda · a quiet workshop sound made in the browser (no
// audio files): soft wind from the yard and the low hum of the wheel. Its
// gain follows engine.ambienceGain: silent under any clip, lower with a card open.
export type Ambience = { start: () => void; setGain: (gain: number) => void; setMuted: (muted: boolean) => void; setVolume: (volume: number) => void; dispose: () => void };

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let gain = 1, volume = 1, muted = false;
  const apply = () => { if (ctx && master) master.gain.setTargetAtTime(muted ? 0 : 0.12 * gain * volume, ctx.currentTime, 0.25); };

  function start() {
    if (ctx) { void ctx.resume(); return; }
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    ctx = new Ctor();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    // Wind: brown noise through a low-pass that breathes slowly.
    const length = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; data[i] = last * 3.5; }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer; noise.loop = true;
    const low = ctx.createBiquadFilter();
    low.type = 'lowpass'; low.frequency.value = 380;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 140;
    lfo.connect(lfoGain).connect(low.frequency);
    noise.connect(low).connect(master);
    noise.start(); lfo.start();
    // The wheel: a very low, steady hum.
    const hum = ctx.createOscillator();
    hum.type = 'sine'; hum.frequency.value = 58;
    const humGain = ctx.createGain(); humGain.gain.value = 0.05;
    hum.connect(humGain).connect(master);
    hum.start();
    apply();
  }

  return {
    start,
    setGain: value => { gain = value; apply(); },
    setMuted: value => { muted = value; apply(); },
    setVolume: value => { volume = value; apply(); },
    dispose: () => { void ctx?.close(); ctx = null; master = null; },
  };
}
