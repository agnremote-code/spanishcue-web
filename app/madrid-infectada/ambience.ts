// Madrid infectada · sound made live with WebAudio (no files): wind between
// the buildings, far sirens that rise and fall, radio static, the hum of the
// Metro tunnel, birds in the Retiro, the river, a generator, fire crackle and
// the short effects of the class (the scan, the injection, the beam, a cloud
// bursting, a helicopter, a car alarm, the groans and screams of the dead,
// a whisper). Each zone has its
// own mix; the bed ducks while a card or a listening is open. It only starts
// after a click, so autoplay rules hold.
export type Sound = 'plaza' | 'avenue' | 'camp' | 'tunnel' | 'park' | 'barrio' | 'station' | 'military' | 'hospital' | 'river';
export type Sfx = 'detect' | 'inject' | 'immune' | 'beam' | 'burst' | 'hit' | 'heli' | 'alarm' | 'groan' | 'radio' | 'sparks' | 'pigeons' | 'drop' | 'boat' | 'reward' | 'scream' | 'grab' | 'down' | 'whisper';

type Mix = { wind: number; sirens: number; hum: number; birds: number; water: number; crowd: number; fire: number; static: number };
const m = (part: Partial<Mix>): Mix => ({ wind: 0, sirens: 0, hum: 0, birds: 0, water: 0, crowd: 0, fire: 0, static: 0, ...part });
// Gains 0–1; sirens and birds are events per minute.
const MIXES: Record<Sound, Mix> = {
  plaza: m({ wind: 0.45, sirens: 3, static: 0.06, fire: 0.08 }),
  avenue: m({ wind: 0.5, sirens: 4, fire: 0.22 }),
  camp: m({ wind: 0.2, crowd: 0.35, hum: 0.12, sirens: 1 }),
  tunnel: m({ hum: 0.5, wind: 0.12, water: 0.06 }),
  park: m({ wind: 0.3, birds: 10, water: 0.12, sirens: 1 }),
  barrio: m({ wind: 0.3, crowd: 0.12, fire: 0.12, sirens: 2 }),
  station: m({ wind: 0.25, crowd: 0.3, hum: 0.15, sirens: 1 }),
  military: m({ wind: 0.4, hum: 0.2, sirens: 2, static: 0.05 }),
  hospital: m({ wind: 0.2, crowd: 0.2, hum: 0.25, sirens: 2 }),
  river: m({ water: 0.45, wind: 0.35, birds: 4, sirens: 1 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: Sound | null) => void;
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** `gain` 0–1: how close it is (the dead groan louder near you). */
  play: (sfx: Sfx, gain?: number) => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'wind' | 'hum' | 'water' | 'crowd' | 'fire' | 'static', GainNode>;
  let noise: AudioBuffer;
  let mix: Mix | null = null;
  let muted = false, volume = 1, timer = 0, beat = 0;

  function noiseBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }
  function bed(c: AudioContext, type: BiquadFilterType, freq: number, q: number, out: AudioNode) {
    const src = c.createBufferSource(); src.buffer = noise; src.loop = true; src.loopStart = Math.random();
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    src.connect(f).connect(out); src.start();
    return f;
  }
  function tone(freq: number, dur: number, gain: number, type: OscillatorType = 'sine', glide = 0, delay = 0) {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime + delay, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + glide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(master); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function hiss(dur: number, gain: number, freq: number, type: BiquadFilterType = 'bandpass', delay = 0, sweep = 0) {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime + delay;
    const src = c.createBufferSource(); src.buffer = noise;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t0); f.Q.value = 1.2;
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(60, freq + sweep), t0 + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(gain, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(master); src.start(t0, Math.random() * 2); src.stop(t0 + dur + 0.05);
  }
  // A far siren: two tones that rise and fall through the wind, panned somewhere.
  function siren() {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime, o = c.createOscillator(), g = c.createGain(), p = c.createStereoPanner(), f = c.createBiquadFilter();
    o.type = 'triangle'; f.type = 'lowpass'; f.frequency.value = 1400; p.pan.value = Math.random() * 2 - 1;
    for (let i = 0; i < 6; i++) { o.frequency.setValueAtTime(660, t0 + i * 0.9); o.frequency.linearRampToValueAtTime(880, t0 + i * 0.9 + 0.45); }
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.025, t0 + 1.2); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 5.4);
    o.connect(f).connect(p).connect(g).connect(ducker); o.start(t0); o.stop(t0 + 5.5);
  }
  // A dead throat: a low buzzing voice through a mouth-like filter, sliding down, with a wet breath.
  function growl(gain: number, base: number, dur: number, pan = Math.random() * 1.6 - 0.8) {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime, o = c.createOscillator(), vib = c.createOscillator(), vibGain = c.createGain();
    const mouth = c.createBiquadFilter(), g = c.createGain(), p = c.createStereoPanner();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(base, t0); o.frequency.exponentialRampToValueAtTime(base * 0.62, t0 + dur);
    vib.frequency.value = 5 + Math.random() * 4; vibGain.gain.value = base * 0.08; vib.connect(vibGain).connect(o.frequency);
    mouth.type = 'bandpass'; mouth.Q.value = 2.6; mouth.frequency.setValueAtTime(520 + Math.random() * 200, t0); mouth.frequency.linearRampToValueAtTime(320, t0 + dur);
    p.pan.value = pan;
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.09 * gain, t0 + 0.18); g.gain.exponentialRampToValueAtTime(0.05 * gain, t0 + dur * 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(mouth).connect(g).connect(p).connect(master); o.start(t0); vib.start(t0); o.stop(t0 + dur + 0.05); vib.stop(t0 + dur + 0.05);
    hiss(dur * 0.8, 0.025 * gain, 900, 'bandpass', 0.05);
  }
  // A human scream, far or near: a voice that rises and breaks, and air.
  function scream(gain: number) {
    if (!ctx) return;
    const c = ctx, t0 = c.currentTime, dur = 1.1 + Math.random() * 0.6, o = c.createOscillator(), vib = c.createOscillator(), vibGain = c.createGain();
    const f = c.createBiquadFilter(), g = c.createGain(), p = c.createStereoPanner();
    const base = 480 + Math.random() * 260;
    o.type = 'sawtooth'; o.frequency.setValueAtTime(base, t0); o.frequency.linearRampToValueAtTime(base * 1.5, t0 + 0.25); o.frequency.linearRampToValueAtTime(base * 1.1, t0 + dur);
    vib.frequency.value = 7; vibGain.gain.value = base * 0.05; vib.connect(vibGain).connect(o.frequency);
    f.type = 'bandpass'; f.frequency.value = 1500; f.Q.value = 1.4; p.pan.value = Math.random() * 1.6 - 0.8;
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.06 * gain, t0 + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(f).connect(g).connect(p).connect(master); o.start(t0); vib.start(t0); o.stop(t0 + dur + 0.05); vib.stop(t0 + dur + 0.05);
    hiss(dur, 0.03 * gain, 2400, 'bandpass', 0, 600);
  }
  function whisper(gain: number) {
    for (let i = 0; i < 7; i++) hiss(0.12 + Math.random() * 0.1, 0.02 * gain, 3800 + Math.random() * 1500, 'bandpass', i * 0.16);
  }
  function bird() { const f = 2400 + Math.random() * 1600; for (let i = 0; i < 3; i++) tone(f + i * 120, 0.08, 0.02, 'sine', 500, i * 0.11); }
  function tick() {
    if (!ctx || !mix || muted) return;
    beat++;
    const each = (perMinute: number) => perMinute > 0 && Math.random() < perMinute / 120;
    if (each(mix.sirens)) siren();
    if (each(mix.birds)) bird();
    if (mix.static > 0 && beat % 7 === 0 && Math.random() < 0.5) hiss(0.5 + Math.random() * 0.6, 0.02, 2600);
  }

  function apply() {
    if (!ctx || !layers) return;
    const t = ctx.currentTime;
    const target = muted || !mix ? null : mix;
    for (const key of Object.keys(layers) as (keyof typeof layers)[]) layers[key].gain.setTargetAtTime(target ? target[key] * 0.5 : 0, t, 0.6);
  }

  return {
    start() {
      if (ctx) { void ctx.resume(); return; }
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      try { ctx = new AC(); } catch { ctx = null; return; }
      const c = ctx;
      noise = noiseBuffer(c);
      master = c.createGain(); master.gain.value = muted ? 0 : 0.9 * volume; master.connect(c.destination);
      ducker = c.createGain(); ducker.gain.value = 1; ducker.connect(master);
      const g = () => { const n = c.createGain(); n.gain.value = 0; n.connect(ducker); return n; };
      layers = { wind: g(), hum: g(), water: g(), crowd: g(), fire: g(), static: g() };
      // Wind: low noise whose filter breathes.
      const wind = bed(c, 'lowpass', 420, 0.7, layers.wind);
      const lfo = c.createOscillator(), depth = c.createGain(); lfo.frequency.value = 0.09; depth.gain.value = 220; lfo.connect(depth).connect(wind.frequency); lfo.start();
      // The tunnel and the generators: a low hum with its harmonic.
      for (const [f, v] of [[50, 0.6], [100, 0.25], [150, 0.1]] as const) { const o = c.createOscillator(), og = c.createGain(); o.frequency.value = f; og.gain.value = v * 0.3; o.connect(og).connect(layers.hum); o.start(); }
      bed(c, 'bandpass', 900, 0.5, layers.water);
      bed(c, 'bandpass', 500, 0.9, layers.crowd);
      bed(c, 'highpass', 3200, 0.4, layers.fire);
      bed(c, 'bandpass', 2600, 2.5, layers.static);
      timer = window.setInterval(tick, 500);
      apply();
    },
    setKind(kind) { mix = kind ? MIXES[kind] : null; apply(); },
    duck(level) { if (ctx && ducker) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.3); },
    setMuted(value) { muted = value; if (ctx && master) master.gain.setTargetAtTime(value ? 0 : 0.9 * volume, ctx.currentTime, 0.1); apply(); },
    setVolume(value) { volume = value; if (ctx && master) master.gain.setTargetAtTime(muted ? 0 : 0.9 * volume, ctx.currentTime, 0.1); },
    play(sfx, gain = 1) {
      if (!ctx || muted) return;
      switch (sfx) {
        case 'detect': tone(1320, 0.09, 0.06, 'square'); tone(1320, 0.09, 0.06, 'square', 0, 0.16); tone(990, 0.16, 0.05, 'square', 0, 0.32); break;
        case 'inject': hiss(0.35, 0.08, 5200, 'highpass', 0.05); tone(520, 0.25, 0.04, 'sine', 400, 0.3); break;
        case 'immune': tone(660, 0.5, 0.05, 'sine'); tone(990, 0.6, 0.04, 'sine', 0, 0.08); tone(1320, 0.7, 0.03, 'sine', 0, 0.16); break;
        case 'beam': tone(1800, 0.22, 0.06, 'sawtooth', -1300); hiss(0.2, 0.04, 4000); break;
        case 'burst': hiss(0.6, 0.12, 700, 'lowpass', 0, -500); tone(180, 0.3, 0.05, 'sine', -100); break;
        case 'hit': tone(880, 0.25, 0.05, 'triangle', 300); hiss(0.25, 0.04, 3000); break;
        case 'heli': for (let i = 0; i < 40; i++) hiss(0.07, 0.05 * Math.sin(Math.PI * i / 40) + 0.005, 160, 'lowpass', i * 0.11); break;
        case 'alarm': for (let i = 0; i < 8; i++) tone(i % 2 ? 960 : 720, 0.3, 0.035, 'square', 0, i * 0.32); break;
        case 'groan': growl(Math.max(0.15, gain), 95 + Math.random() * 40, 1.2 + Math.random() * 0.9); break;
        case 'scream': scream(Math.max(0.12, gain)); break;
        case 'grab': growl(1.3, 140, 0.7, 0); tone(70, 0.25, 0.12, 'sine', -30); hiss(0.2, 0.08, 500, 'lowpass'); break;
        case 'down': tone(60, 0.35, 0.12, 'sine', -25); hiss(0.35, 0.07, 300, 'lowpass'); growl(0.5, 80, 0.6, 0); break;
        case 'whisper': whisper(gain); break;
        case 'radio': hiss(1.2, 0.05, 2400); tone(440, 0.12, 0.02, 'square', 0, 0.6); break;
        case 'sparks': for (let i = 0; i < 6; i++) hiss(0.05, 0.06, 6000, 'highpass', i * 0.07); break;
        case 'pigeons': for (let i = 0; i < 10; i++) hiss(0.06, 0.03, 1200, 'bandpass', i * 0.06); break;
        case 'drop': tone(90, 0.3, 0.12, 'sine', -40); hiss(0.4, 0.06, 400, 'lowpass'); break;
        case 'boat': tone(70, 2.5, 0.05, 'sawtooth'); hiss(3, 0.04, 600, 'lowpass'); break;
        case 'reward': [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.35, 0.05, 'triangle', 0, i * 0.09)); break;
      }
    },
    dispose() { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
