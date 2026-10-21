// La feria de Villaluz · a soft fair murmur made in the browser (no audio
// files): filtered noise for the crowd and a slow organ-like drone from the
// rides. Its gain follows engine.ambienceGain (AC5): silent under any clip,
// lower with a card open.
export type Ambience = { start: () => void; setGain: (gain: number) => void; setMuted: (muted: boolean) => void; dispose: () => void };

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let gain = 1, muted = false;
  const apply = () => { if (ctx && master) master.gain.setTargetAtTime(muted ? 0 : 0.16 * gain, ctx.currentTime, 0.25); };

  function start() {
    if (ctx) { void ctx.resume(); return; }
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    ctx = new Ctor();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    // Crowd: brown-ish noise through a band-pass around speech frequencies.
    const length = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; data[i] = last * 3.5; }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer; noise.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass'; band.frequency.value = 520; band.Q.value = 0.7;
    noise.connect(band).connect(master);
    noise.start();
    // Rides: two quiet detuned tones that swell slowly.
    for (const [freq, depth] of [[196, 0.05], [246.9, 0.04]] as const) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle'; osc.frequency.value = freq;
      const g = ctx.createGain(); g.gain.value = depth;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
      const lfoGain = ctx.createGain(); lfoGain.gain.value = depth * 0.8;
      lfo.connect(lfoGain).connect(g.gain);
      osc.connect(g).connect(master);
      osc.start(); lfo.start();
    }
    apply();
  }

  return {
    start,
    setGain: value => { gain = value; apply(); },
    setMuted: value => { muted = value; apply(); },
    dispose: () => { void ctx?.close(); ctx = null; master = null; },
  };
}
