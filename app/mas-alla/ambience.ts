// Más allá · sound made live with WebAudio (no files). The death: the beep
// of the monitor, the hiss of the ventilator, the flat tone and, when the
// soul rises, a choir that opens like a door. The Umbral: a deep drone and
// wind of nowhere. The Cielo: a warm chord that breathes, far bells and a
// harp that plucks now and then. The Infierno: a rumble under the ground,
// fire crackling, far groans and chains. The bed ducks while a card or a
// listening is open. It only starts after a click, so autoplay rules hold.
export type Sound = 'umbral' | 'cielo' | 'infierno';
export type Sfx = 'beep' | 'breath' | 'flat' | 'soul' | 'light' | 'portal' | 'reward' | 'pick' | 'gong';

export type Ambience = {
  start: () => void;
  setKind: (kind: Sound | null) => void;
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  play: (sfx: Sfx) => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode, bedGain: Record<Sound, GainNode>;
  let noise: AudioBuffer;
  let kind: Sound | null = null, muted = false, volume = 1, timer = 0, flatTone: { o: OscillatorNode; g: GainNode } | null = null;

  function noiseBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }
  function tone(freq: number, dur: number, gain: number, type: OscillatorType = 'sine', delay = 0, attack = 0.012, out?: AudioNode) {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime + delay, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(out ?? master); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function hiss(dur: number, gain: number, freq: number, type: BiquadFilterType = 'bandpass', delay = 0, attack = 0.3) {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime + delay;
    const src = c.createBufferSource(); src.buffer = noise;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = 0.8;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(gain, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(master); src.start(t0, Math.random() * 2); src.stop(t0 + dur + 0.05);
  }
  /** A slow chord of soft sines with a little vibrato: the choir, the drones. */
  function pad(freqs: number[], out: AudioNode, gain: number, wobble = 0.18) {
    if (!ctx) return;
    const c = ctx;
    for (const f of freqs) {
      for (const detune of [-6, 6]) {
        const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.detune.value = detune;
        const lfo = c.createOscillator(); lfo.frequency.value = wobble + Math.random() * 0.2;
        const depth = c.createGain(); depth.gain.value = 2.5; lfo.connect(depth).connect(o.detune);
        const g = c.createGain(); g.gain.value = gain / freqs.length;
        o.connect(g).connect(out); o.start(); lfo.start();
      }
    }
  }
  function build() {
    const C = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const c = new C();
    ctx = c; noise = noiseBuffer(c);
    master = c.createGain(); master.gain.value = muted ? 0 : 0.8 * volume;
    ducker = c.createGain(); ducker.gain.value = 1;
    ducker.connect(master); master.connect(c.destination);
    const mk = () => { const g = c.createGain(); g.gain.value = 0; g.connect(ducker); return g; };
    bedGain = { umbral: mk(), cielo: mk(), infierno: mk() };
    // The Umbral: a low drone and a wind from nowhere.
    pad([55, 82.4, 110], bedGain.umbral, 0.32, 0.07);
    const windU = c.createBufferSource(); windU.buffer = noise; windU.loop = true;
    const fU = c.createBiquadFilter(); fU.type = 'lowpass'; fU.frequency.value = 420; const gU = c.createGain(); gU.gain.value = 0.12;
    windU.connect(fU).connect(gU).connect(bedGain.umbral); windU.start();
    // The Cielo: D major that breathes, high and warm.
    pad([146.8, 220, 293.7, 370, 440], bedGain.cielo, 0.22, 0.12);
    const airC = c.createBufferSource(); airC.buffer = noise; airC.loop = true;
    const fC = c.createBiquadFilter(); fC.type = 'highpass'; fC.frequency.value = 3000; const gC = c.createGain(); gC.gain.value = 0.02;
    airC.connect(fC).connect(gC).connect(bedGain.cielo); airC.start();
    // The Infierno: rumble, roar of fire and a dissonant drone.
    pad([41.2, 43.7, 61.7], bedGain.infierno, 0.35, 0.05);
    const roar = c.createBufferSource(); roar.buffer = noise; roar.loop = true;
    const fI = c.createBiquadFilter(); fI.type = 'lowpass'; fI.frequency.value = 240; const gI = c.createGain(); gI.gain.value = 0.45;
    roar.connect(fI).connect(gI).connect(bedGain.infierno); roar.start();
    const crackle = c.createBufferSource(); crackle.buffer = noise; crackle.loop = true;
    const fK = c.createBiquadFilter(); fK.type = 'bandpass'; fK.frequency.value = 2400; fK.Q.value = 3; const gK = c.createGain(); gK.gain.value = 0.05;
    crackle.connect(fK).connect(gK).connect(bedGain.infierno); crackle.start();
    timer = window.setInterval(events, 900);
  }
  // Now and then: a harp and bells in the Cielo; groans, chains and pops of fire below.
  function events() {
    if (!ctx || muted) return;
    if (kind === 'cielo' && Math.random() < 0.35) {
      const scale = [587.3, 659.3, 740, 880, 987.8, 1174.7];
      const start = Math.floor(Math.random() * 3);
      for (let i = 0; i < 4; i++) tone(scale[(start + i * 2) % scale.length], 2.2, 0.05, 'triangle', i * 0.16, 0.005, bedGain.cielo);
    }
    if (kind === 'cielo' && Math.random() < 0.1) tone(1318.5, 4, 0.03, 'sine', 0, 0.01, bedGain.cielo);
    if (kind === 'infierno') {
      if (Math.random() < 0.18) { const f = 90 + Math.random() * 60; tone(f, 1.6, 0.07, 'sawtooth', 0, 0.4, bedGain.infierno); tone(f * 0.94, 1.6, 0.05, 'sawtooth', 0.1, 0.4, bedGain.infierno); }
      if (Math.random() < 0.12) for (let i = 0; i < 5; i++) tone(1600 + Math.random() * 900, 0.08, 0.03, 'square', i * 0.07, 0.002, bedGain.infierno);
      if (Math.random() < 0.3) hiss(0.15, 0.08, 1800 + Math.random() * 1500, 'bandpass', 0, 0.005);
    }
    if (kind === 'umbral' && Math.random() < 0.12) tone(220 * (Math.random() < 0.5 ? 1 : 1.5), 5, 0.035, 'sine', 0, 1.5, bedGain.umbral);
  }

  return {
    start() { if (!ctx) { try { build(); } catch { ctx = null; } } else void ctx.resume(); },
    setKind(next) {
      kind = next;
      if (!ctx) return;
      const t = ctx.currentTime;
      for (const k of Object.keys(bedGain) as Sound[]) bedGain[k].gain.setTargetAtTime(k === next ? 1 : 0, t, 0.8);
    },
    duck(level) { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted(value) { muted = value; if (ctx) master.gain.setTargetAtTime(value ? 0 : 0.8 * volume, ctx.currentTime, 0.1); },
    setVolume(value) { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.8 * volume, ctx.currentTime, 0.1); },
    play(sfx) {
      if (!ctx || muted) return;
      const c = ctx;
      switch (sfx) {
        case 'beep': tone(988, 0.16, 0.18, 'sine'); break;
        case 'breath': hiss(1.4, 0.09, 700, 'bandpass', 0, 0.6); break;
        case 'flat': {
          const o = c.createOscillator(), g = c.createGain(); o.frequency.value = 988; g.gain.setValueAtTime(0.0001, c.currentTime); g.gain.exponentialRampToValueAtTime(0.13, c.currentTime + 0.02);
          g.gain.setValueAtTime(0.13, c.currentTime + 1.6); g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 3.4);
          o.connect(g).connect(master); o.start(); o.stop(c.currentTime + 3.5); flatTone = { o, g };
          break;
        }
        case 'soul': {
          // The choir opens: a rising chord that swells.
          for (const [f, d] of [[293.7, 0], [370, 0.25], [440, 0.5], [587.3, 0.8], [740, 1.1]] as [number, number][]) { tone(f, 3.6, 0.06, 'sine', d, 1.2); tone(f * 2, 3, 0.015, 'triangle', d + 0.1, 1.4); }
          break;
        }
        case 'light': hiss(1.6, 0.12, 5000, 'highpass', 0, 0.5); tone(1174.7, 2.4, 0.06, 'sine', 0, 0.4); break;
        case 'portal': hiss(1.2, 0.14, 900, 'bandpass', 0, 0.2); tone(kind === 'infierno' ? 55 : 440, 1.4, 0.1, 'sine', 0.1, 0.2); break;
        case 'reward': for (let i = 0; i < 3; i++) tone([659.3, 830.6, 987.8][i], 0.9, 0.08, 'triangle', i * 0.11); break;
        case 'pick': tone(kind === 'infierno' ? 196 : 784, 0.5, 0.09, 'triangle'); tone(kind === 'infierno' ? 185 : 1174.7, 0.7, 0.05, 'sine', 0.06); break;
        case 'gong': tone(110, 4, 0.16, 'sine', 0, 0.01); tone(165, 3.4, 0.07, 'sine', 0.02, 0.01); tone(277, 2.4, 0.04, 'triangle', 0.03, 0.01); break;
      }
    },
    dispose() { window.clearInterval(timer); try { flatTone?.o.stop(); } catch { /* already stopped */ } void ctx?.close(); ctx = null; },
  };
}
