// HR Crisis · the sound of the office, made with WebAudio (no files): a soft
// bossa-nova loop for the Brazilian mascot, the hum of the air conditioning,
// keyboards and, now and then, a phone that nobody answers. The music bed
// ducks while a task card is open so the voices stay clear.
export type Ambience = {
  start: () => void;
  setMuted: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  duck: (level: number) => void;
  chime: (good: boolean) => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode, music: GainNode;
  let timer = 0, muted = false, volume = 0.7, step = 0;
  // Bossa progression (Am7 – D7 – Gmaj7 – E7), one bar each.
  const CHORDS = [[57, 60, 64, 67], [50, 54, 57, 60], [55, 59, 62, 66], [52, 56, 59, 62]];
  const BASS = [45, 38, 43, 40];
  const freq = (n: number) => 440 * Math.pow(2, (n - 69) / 12);
  function note(n: number, t: number, len: number, gain: number, type: OscillatorType = 'triangle', dest: AudioNode = music) {
    if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq(n);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0008, t + len);
    o.connect(g).connect(dest); o.start(t); o.stop(t + len + 0.05);
  }
  function noise(t: number, len: number, gain: number, freqHz: number) {
    if (!ctx) return;
    const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * len), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.value = freqHz; g.gain.value = gain;
    src.connect(f).connect(g).connect(ducker); src.start(t);
  }
  function tick() {
    if (!ctx) return;
    const t = ctx.currentTime + 0.05;
    const beat = 0.32; // eighth notes at ~94 bpm
    for (let i = 0; i < 8; i++) {
      const at = t + i * beat, s = step + i, bar = Math.floor(s / 8) % 4, pos = s % 8;
      if (pos === 0 || pos === 3 || pos === 4 || pos === 7) note(BASS[bar] + (pos >= 4 ? 7 : 0), at, 0.5, 0.16, 'sine');
      if ([0, 2, 3, 5, 6].includes(pos)) for (const n of CHORDS[bar]) note(n, at, 0.22, 0.025);
      noise(at, 0.05, pos % 2 ? 0.02 : 0.035, 6000);
      if (Math.random() < 0.18) noise(at + 0.1, 0.03, 0.012, 2500); // keyboards
    }
    step += 8;
    if (Math.random() < 0.06) for (let k = 0; k < 4; k++) { note(88, t + k * 0.12, 0.08, 0.03, 'square', ducker); note(84, t + k * 0.12 + 0.06, 0.06, 0.03, 'square', ducker); }
  }
  return {
    start() {
      if (ctx) return;
      try { ctx = new AudioContext(); } catch { return; }
      master = ctx.createGain(); master.gain.value = muted ? 0 : 0.5 * volume;
      ducker = ctx.createGain(); ducker.gain.value = 1;
      music = ctx.createGain(); music.gain.value = 1;
      music.connect(ducker); ducker.connect(master).connect(ctx.destination);
      // Air conditioning hum.
      const hum = ctx.createOscillator(), hg = ctx.createGain();
      hum.type = 'sine'; hum.frequency.value = 58; hg.gain.value = 0.02; hum.connect(hg).connect(ducker); hum.start();
      tick();
      timer = window.setInterval(tick, 8 * 320);
    },
    setMuted(m) { muted = m; if (ctx) master.gain.setTargetAtTime(m ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume(v) { volume = v; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * v, ctx.currentTime, 0.2); },
    duck(level) { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    chime(good) {
      if (!ctx) return;
      const t = ctx.currentTime + 0.02;
      (good ? [72, 76, 79, 84] : [67, 63]).forEach((n, i) => note(n, t + i * 0.09, 0.4, 0.08, 'sine', master));
    },
    dispose() { window.clearInterval(timer); ctx?.close().catch(() => undefined); ctx = null; },
  };
}
