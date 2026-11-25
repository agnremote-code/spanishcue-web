// Objetos perdidos · ambient sound made live with WebAudio, so no audio files
// are downloaded for it: the street after the festival (a distant brass band,
// a car now and then), the hum of the fluorescent tubes, the murmur of the
// waiting room and the stamp on the counter, the phones that ring in the phone
// room, the compressor of the cold room, pages turning in the archive, the
// idling bus on the dock, the wind on the roof and, at dawn, the first birds.
// Each sector kind has its own mix; the mix glides when you walk into another
// sector. While a listening plays the whole bed ducks so the voices stay clear.

type Mix = { hum: number; murmur: number; street: number; wind: number; music: number; cold: number; phone: number; stamp: number; page: number; car: number };
const SILENT: Mix = { hum: 0, murmur: 0, street: 0, wind: 0, music: 0, cold: 0, phone: 0, stamp: 0, page: 0, car: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); phone, stamp, page and car are events per minute.
export const MIXES: Record<string, Mix> = {
  street: m({ street: 0.6, music: 0.35, wind: 0.15, car: 3 }),
  hall: m({ hum: 0.35, murmur: 0.45, street: 0.1, music: 0.06, stamp: 8, phone: 1 }),
  office: m({ hum: 0.3, murmur: 0.12, page: 3 }),
  room: m({ hum: 0.4, murmur: 0.1, phone: 6 }),
  cold: m({ hum: 0.2, cold: 0.7 }),
  archive: m({ hum: 0.25, page: 10 }),
  big: m({ hum: 0.3, murmur: 0.15, music: 0.04 }),
  dock: m({ street: 0.35, wind: 0.25, cold: 0.25, music: 0.12, car: 2 }),
  roof: m({ street: 0.2, wind: 0.6, music: 0.18, car: 1 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 0 at eleven, 1 the last dark hour, 2 daylight: the band fades and birds start at dawn. */
  setNight: (phase: number) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The ding-dong of the office loudspeaker. */
  chime: () => void;
  /** The whoosh of the stairs between the dock and the roof. */
  stairs: () => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hum' | 'murmur' | 'street' | 'wind' | 'music' | 'cold', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.street;
  let muted = false, volume = 1, timer = 0, night = 0;
  let note = 0;

  function brownBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; data[i] = last * 3.5; }
    return buffer;
  }
  function whiteBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 3, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }
  function loop(c: AudioContext, buffer: AudioBuffer, filter: AudioNode, out: AudioNode) {
    const src = c.createBufferSource(); src.buffer = buffer; src.loop = true;
    src.connect(filter).connect(out); src.start(0, Math.random() * 2);
  }

  function start() {
    if (ctx) { void ctx.resume(); return; }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const c = new AC();
    ctx = c;
    noise = brownBuffer(c);
    white = whiteBuffer(c);
    master = c.createGain(); master.gain.value = muted ? 0 : 0.5 * volume;
    ducker = c.createGain(); ducker.gain.value = 1;
    ducker.connect(master).connect(c.destination);
    const gain = () => { const g = c.createGain(); g.gain.value = 0; g.connect(ducker); return g; };
    layers = { hum: gain(), murmur: gain(), street: gain(), wind: gain(), music: gain(), cold: gain() };
    // The fluorescent tubes: a thin mains buzz.
    for (const [f, level] of [[100, 0.02], [200, 0.01], [300, 0.004]] as [number, number][]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain(); g.gain.value = level; o.connect(g).connect(layers.hum); o.start();
    }
    // Voices in the waiting room: noise in the speech band, slowly breathing.
    const band = c.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 480; band.Q.value = 0.9;
    const breathe = c.createGain(); breathe.gain.value = 0.5;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.21;
    const lfoGain = c.createGain(); lfoGain.gain.value = 0.25;
    lfo.connect(lfoGain).connect(breathe.gain); lfo.start();
    breathe.connect(layers.murmur);
    loop(c, noise, band, breathe);
    // The street: a soft low wash of the city.
    const city = c.createBiquadFilter(); city.type = 'lowpass'; city.frequency.value = 500;
    const cityGain = c.createGain(); cityGain.gain.value = 0.4;
    loop(c, noise, city, cityGain); cityGain.connect(layers.street);
    // The wind on the roof.
    const air = c.createBiquadFilter(); air.type = 'bandpass'; air.frequency.value = 650; air.Q.value = 0.5;
    const windGain = c.createGain(); windGain.gain.value = 0.12;
    const gust = c.createOscillator(); gust.frequency.value = 0.15;
    const gustGain = c.createGain(); gustGain.gain.value = 0.08;
    gust.connect(gustGain).connect(windGain.gain); gust.start();
    loop(c, white, air, windGain); windGain.connect(layers.wind);
    // The compressor of the cold room: a steady low drone with a rattle.
    const comp = c.createOscillator(); comp.type = 'sawtooth'; comp.frequency.value = 55;
    const compF = c.createBiquadFilter(); compF.type = 'lowpass'; compF.frequency.value = 160;
    const compG = c.createGain(); compG.gain.value = 0.05;
    comp.connect(compF).connect(compG).connect(layers.cold); comp.start();
    apply();
    timer = window.setInterval(events, 250);
  }

  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    // The festival band in the distance plays less as the night goes on, and stops at dawn.
    const band = night > 1 ? 0 : 1 - night * 0.6;
    const level: Record<string, number> = { hum: mix.hum, murmur: mix.murmur * (night > 1 ? 0.6 : 1), street: mix.street, wind: mix.wind, music: mix.music * band, cold: mix.cold };
    for (const key of ['hum', 'murmur', 'street', 'wind', 'music', 'cold'] as const) layers[key].gain.setTargetAtTime(level[key] * 0.6, t, 0.8);
  }

  function tone(freq: number, length: number, level: number, type: OscillatorType = 'sine', at = 0, slide = 0, out?: AudioNode) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + length);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(level, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    o.connect(g).connect(out ?? ducker); o.start(t); o.stop(t + length + 0.05);
  }
  function burst(freq: number, length: number, level: number, at = 0, q = 6, buffer = noise) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const src = c.createBufferSource(); src.buffer = buffer;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    src.connect(f).connect(g).connect(ducker); src.start(t, Math.random() * 2); src.stop(t + length + 0.05);
  }
  // A lost phone ringing: two short trills.
  function phone() { for (let k = 0; k < 4; k++) { tone(1320, 0.08, 0.025, 'square', k * 0.11); tone(1660, 0.08, 0.02, 'square', k * 0.11 + 0.05); } }
  // The rubber stamp on the counter.
  function stamp() { burst(160, 0.12, 0.25, 0, 2); burst(900, 0.05, 0.08, 0.01, 3); }
  // A page turning.
  function page() { burst(4200, 0.25, 0.05, 0, 0.8, white); }
  // A car passing in the street.
  function car() { if (!ctx) return; const c = ctx, t = c.currentTime; const src = c.createBufferSource(); src.buffer = noise; const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700; const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 1.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2); src.connect(f).connect(g).connect(ducker); src.start(t, Math.random()); src.stop(t + 3.3); }
  // The festival brass band, far away: a cheerful phrase, one note at a time.
  const PHRASE = [392, 440, 494, 523, 494, 440, 392, 330, 349, 392, 440, 392];
  function band() {
    if (!ctx || mix.music < 0.03 || night > 1) return;
    const f = PHRASE[note % PHRASE.length]; note++;
    tone(f, 0.45, 0.04 * mix.music, 'sawtooth', 0, 0, layers.music);
    if (note % 2 === 0) tone(f / 4, 0.5, 0.05 * mix.music, 'triangle', 0, 0, layers.music);
  }
  // At dawn, the first birds on the roof and in the street.
  function bird() { tone(2800 + Math.random() * 900, 0.12, 0.02, 'sine', 0, 600); tone(3200 + Math.random() * 600, 0.1, 0.015, 'sine', 0.16, -500); }

  // Random events, checked four times a second.
  let beat = 0;
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    if (chance(mix.phone)) phone();
    if (chance(mix.stamp)) stamp();
    if (chance(mix.page)) page();
    if (chance(mix.car)) car();
    if (night > 1 && chance((mix.wind + mix.street) * 12)) bird();
    if (++beat % 2 === 0) band();
  }

  function chime() {
    if (!ctx || muted) return;
    tone(659.3, 0.6, 0.06, 'sine', 0); tone(523.3, 0.9, 0.06, 'sine', 0.45);
  }
  function stairs() {
    if (!ctx || muted) return;
    for (let k = 0; k < 6; k++) burst(300 + k * 40, 0.08, 0.12, k * 0.09, 3);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.street; apply(); },
    setNight: (phase) => { night = phase; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    stairs,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
