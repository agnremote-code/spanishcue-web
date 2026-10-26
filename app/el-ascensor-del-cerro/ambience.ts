// El ascensor del cerro · the sound of the hillside made in the browser (no
// audio files): wind off the bay (filtered noise that swells slowly), a low
// hum of the port and the city below, and now and then a gull. Its gain
// follows engine.ambienceGain: silent under any clip, lower with a card open.
export type Ambience = { start: () => void; setGain: (gain: number) => void; setMuted: (muted: boolean) => void; dispose: () => void };

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let gain = 1, muted = false;
  let gullTimer = 0;
  const apply = () => { if (ctx && master) master.gain.setTargetAtTime(muted ? 0 : 0.16 * gain, ctx.currentTime, 0.25); };

  function noiseBuffer(c: AudioContext, seconds: number, brown: boolean) {
    const length = c.sampleRate * seconds;
    const buffer = c.createBuffer(1, length, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      if (brown) { last = (last + 0.02 * white) / 1.02; data[i] = last * 3.5; } else data[i] = white * 0.5;
    }
    return buffer;
  }

  /** One gull: two or three falling cries, high and short. */
  function gull() {
    if (!ctx || !master) return;
    const at = ctx.currentTime;
    const cries = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < cries; i++) {
      const t = at + i * 0.32;
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1500 + Math.random() * 300, t);
      osc.frequency.exponentialRampToValueAtTime(900, t + 0.24);
      const band = ctx.createBiquadFilter();
      band.type = 'bandpass'; band.frequency.value = 1400; band.Q.value = 3;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.05, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0005, t + 0.26);
      osc.connect(band).connect(g).connect(master);
      osc.start(t); osc.stop(t + 0.3);
    }
  }

  function start() {
    if (ctx) { void ctx.resume(); return; }
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    ctx = new Ctor();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    // Wind: white noise through a low-pass whose cut-off and level drift.
    const wind = ctx.createBufferSource();
    wind.buffer = noiseBuffer(ctx, 5, false); wind.loop = true;
    const low = ctx.createBiquadFilter();
    low.type = 'lowpass'; low.frequency.value = 420; low.Q.value = 0.4;
    const windGain = ctx.createGain(); windGain.gain.value = 0.35;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 0.22;
    lfo.connect(lfoGain).connect(windGain.gain);
    const lfo2 = ctx.createOscillator(); lfo2.frequency.value = 0.05;
    const lfo2Gain = ctx.createGain(); lfo2Gain.gain.value = 180;
    lfo2.connect(lfo2Gain).connect(low.frequency);
    wind.connect(low).connect(windGain).connect(master);
    wind.start(); lfo.start(); lfo2.start();
    // The city and the port below: brown noise, very low.
    const city = ctx.createBufferSource();
    city.buffer = noiseBuffer(ctx, 4, true); city.loop = true;
    const cityBand = ctx.createBiquadFilter();
    cityBand.type = 'lowpass'; cityBand.frequency.value = 220;
    const cityGain = ctx.createGain(); cityGain.gain.value = 0.6;
    city.connect(cityBand).connect(cityGain).connect(master);
    city.start();
    const schedule = () => { gullTimer = window.setTimeout(() => { gull(); schedule(); }, 6000 + Math.random() * 9000); };
    schedule();
    apply();
  }

  return {
    start,
    setGain: value => { gain = value; apply(); },
    setMuted: value => { muted = value; apply(); },
    dispose: () => { window.clearTimeout(gullTimer); void ctx?.close(); ctx = null; master = null; },
  };
}
