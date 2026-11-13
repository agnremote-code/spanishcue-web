// El mundo en blanco · sound made live with WebAudio (no files). A blank
// world is almost silent: wind over paper and, now and then, one note of a
// music box. Every encounter you close gives the music one more voice, so the
// tune grows with the ink: by the twelfth it is a whole song. The bed ducks
// while a card or a listening is open. It only starts after a click, so
// autoplay rules hold.
export type Sfx = 'pick' | 'page' | 'ink' | 'gong';

export type Ambience = {
  start: () => void;
  /** How much ink is back, 0–1: the music fills in with it. */
  setInk: (ink: number) => void;
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  play: (sfx: Sfx) => void;
  dispose: () => void;
};

// A pentatonic tune in D: it cannot sound wrong, whatever order the voices come in.
const SCALE = [293.66, 329.63, 369.99, 440, 493.88, 587.33, 659.25, 739.99, 880];
const TUNE = [0, 2, 4, 3, 5, 4, 2, 3, 1, 3, 4, 6, 5, 3, 2, 0];
const BASS = [146.83, 146.83, 110, 123.47];

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode, wind: GainNode | null = null;
  let ink = 0, muted = false, volume = 0.7, timer = 0, step = 0, started = false;

  function tone(freq: number, dur: number, gain: number, type: OscillatorType = 'sine', delay = 0, attack = 0.008) {
    if (!ctx) return;
    const t0 = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(ducker); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  /** A music-box tooth: a sine with a bright partial that dies quickly. */
  const pluck = (freq: number, gain: number, delay = 0) => { tone(freq, 1.6, gain, 'sine', delay); tone(freq * 3.01, 0.35, gain * 0.25, 'sine', delay); };
  function rustle(dur: number, gain: number, freq: number, delay = 0) {
    if (!ctx) return;
    const t0 = ctx.currentTime + delay, n = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, n, ctx.sampleRate), data = buffer.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = ctx.createBufferSource(); src.buffer = buffer;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.7;
    const g = ctx.createGain(); g.gain.value = gain;
    src.connect(f).connect(g).connect(ducker); src.start(t0);
  }
  function beat() {
    if (!ctx || ctx.state !== 'running') return;
    const voices = Math.round(ink * 12), i = step++;
    const note = SCALE[TUNE[i % TUNE.length]];
    // 0 voices: one lonely note every few beats. Then melody, echo, bass, harmony, shimmer.
    if (voices === 0) { if (i % 6 === 0) pluck(note, 0.035); return; }
    if (voices >= 1 && (voices >= 3 || i % 2 === 0)) pluck(note, 0.05);
    if (voices >= 4 && i % 2 === 1) pluck(note * 2, 0.022, 0.21);
    if (voices >= 6 && i % 4 === 0) tone(BASS[Math.floor(i / 4) % BASS.length], 1.9, 0.07, 'triangle', 0, 0.04);
    if (voices >= 8 && i % 2 === 0) pluck(SCALE[(TUNE[i % TUNE.length] + 2) % SCALE.length], 0.028, 0.02);
    if (voices >= 10 && i % 8 === 4) for (const k of [0, 2, 4]) tone(SCALE[k] * 0.5, 3.2, 0.03, 'sine', 0, 0.6);
    if (voices >= 12 && i % 4 === 2) pluck(SCALE[8 - (i % 3)], 0.02, 0.1);
  }
  const level = () => (muted ? 0 : volume);

  return {
    start() {
      if (started) { void ctx?.resume(); return; }
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      started = true;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = level(); master.connect(ctx.destination);
      ducker = ctx.createGain(); ducker.gain.value = 1; ducker.connect(master);
      // Wind over the sheet: filtered noise that breathes.
      const n = ctx.sampleRate * 4, buffer = ctx.createBuffer(1, n, ctx.sampleRate), data = buffer.getChannelData(0);
      for (let i = 0; i < n; i++) data[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(); src.buffer = buffer; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 420;
      wind = ctx.createGain(); wind.gain.value = 0.05;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
      const depth = ctx.createGain(); depth.gain.value = 0.03; lfo.connect(depth).connect(wind.gain);
      src.connect(f).connect(wind).connect(ducker); src.start(); lfo.start();
      timer = window.setInterval(beat, 430);
    },
    setInk(value) { ink = Math.min(1, Math.max(0, value)); if (wind && ctx) wind.gain.setTargetAtTime(0.05 - ink * 0.03, ctx.currentTime, 1); },
    duck(to) { if (ctx) ducker.gain.setTargetAtTime(to, ctx.currentTime, 0.25); },
    setMuted(value) { muted = value; if (ctx) master.gain.setTargetAtTime(level(), ctx.currentTime, 0.05); },
    setVolume(value) { volume = value; if (ctx) master.gain.setTargetAtTime(level(), ctx.currentTime, 0.05); },
    play(sfx) {
      if (!ctx || muted) return;
      if (sfx === 'pick') { pluck(587.33, 0.07); rustle(0.12, 0.05, 3000); }
      else if (sfx === 'page') { rustle(0.35, 0.09, 2200); rustle(0.2, 0.05, 4200, 0.12); }
      else if (sfx === 'gong') { tone(146.83, 2.6, 0.12, 'sine', 0, 0.02); tone(220, 2.2, 0.05, 'sine', 0.02); }
      // The ink coming back: a brush stroke and a rising arpeggio.
      else { rustle(1.4, 0.07, 900); [0, 2, 4, 5, 7].forEach((k, i) => pluck(SCALE[k], 0.07, 0.25 + i * 0.16)); tone(146.83, 3, 0.08, 'triangle', 0.25, 0.05); }
    },
    dispose() { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
