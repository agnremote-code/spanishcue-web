import { THEMES, chordNotes, degreeNote, midiToFrequency, type Theme, type ThemeId } from './score.mjs';

/** Original epic score and spell sounds, synthesized locally after a user gesture. */
export class RealmAudio {
  private context: AudioContext | null = null;
  private musicBus: GainNode | null = null;
  private effectsBus: GainNode | null = null;
  private reverb: ConvolverNode | null = null;
  private section: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  private music = true;
  private effects = true;
  private mood: ThemeId = 'village';
  private playing: ThemeId | null = null;
  private step = 0;
  private nextTime = 0;

  start() {
    try {
      if (!this.context) {
        const context = new AudioContext();
        this.context = context;
        const compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -16;
        compressor.ratio.value = 4;
        compressor.connect(context.destination);
        this.musicBus = context.createGain();
        this.effectsBus = context.createGain();
        this.musicBus.gain.value = this.music ? 0.42 : 0;
        this.effectsBus.gain.value = this.effects ? 0.26 : 0;
        this.musicBus.connect(compressor);
        this.effectsBus.connect(compressor);
        // A generated hall impulse gives the score its castle-sized space.
        const length = Math.floor(context.sampleRate * 2.8);
        const impulse = context.createBuffer(2, length, context.sampleRate);
        for (let channel = 0; channel < 2; channel++) {
          const data = impulse.getChannelData(channel);
          for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 2.6;
        }
        this.reverb = context.createConvolver();
        this.reverb.buffer = impulse;
        const wet = context.createGain();
        wet.gain.value = 0.42;
        this.reverb.connect(wet);
        wet.connect(this.musicBus);
        this.noise = context.createBuffer(1, context.sampleRate, context.sampleRate);
        const data = this.noise.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      }
      void this.context.resume().catch(() => undefined);
      if (!this.timer) this.timer = setInterval(() => this.schedule(), 40);
    } catch { /* Audio is optional; the adventure remains playable. */ }
  }

  setPreferences(music: boolean, effects: boolean) {
    this.music = music;
    this.effects = effects;
    if (this.context && this.musicBus && this.effectsBus) {
      this.musicBus.gain.setTargetAtTime(music ? 0.42 : 0, this.context.currentTime, 0.15);
      this.effectsBus.gain.setTargetAtTime(effects ? 0.26 : 0, this.context.currentTime, 0.15);
    }
  }

  setMood(mood: ThemeId) { this.mood = mood; }

  // Crossfade into a new regional theme, starting it from its first bar.
  private enter(mood: ThemeId) {
    const context = this.context!;
    const now = context.currentTime;
    if (this.section) {
      const old = this.section;
      old.gain.cancelScheduledValues(now);
      old.gain.setValueAtTime(old.gain.value, now);
      old.gain.linearRampToValueAtTime(0, now + 1.6);
      setTimeout(() => old.disconnect(), 2000);
    }
    const section = context.createGain();
    section.gain.setValueAtTime(0, now);
    section.gain.linearRampToValueAtTime(1, now + 1.2);
    section.connect(this.musicBus!);
    section.connect(this.reverb!);
    this.section = section;
    this.playing = mood;
    this.step = 0;
    this.nextTime = now + 0.08;
  }

  private schedule() {
    const context = this.context;
    if (!context || context.state !== 'running' || !this.musicBus) return;
    if (!this.music) { this.playing = null; return; }
    if (this.playing !== this.mood) this.enter(this.mood);
    const theme = THEMES[this.playing ?? 'village'];
    const sixteenth = 60 / theme.bpm / 4;
    if (this.nextTime < context.currentTime - 0.3) this.nextTime = context.currentTime + 0.05;
    while (this.nextTime < context.currentTime + 0.16) {
      this.play(theme, this.step, this.nextTime, sixteenth);
      this.step++;
      this.nextTime += sixteenth;
    }
  }

  private play(theme: Theme, step: number, time: number, sixteenth: number) {
    const bus = this.section!;
    const bar = Math.floor(step / 16) % theme.progression.length;
    const within = step % 16;
    const degree = theme.progression[bar];
    const chord = chordNotes(theme, degree);
    const barLength = sixteenth * 16;
    if (within === 0) {
      for (const note of chord) this.strings(midiToFrequency(note), time, barLength * 1.04, 0.05, bus);
      this.voice(midiToFrequency(degreeNote(theme, degree, -2)), time, barLength, 0.11, bus, 'sawtooth', 380);
      if (theme.choir) for (const note of chord) this.choir(midiToFrequency(note + 12), time, barLength, bus);
    }
    if (within === 8 && !theme.ostinato) this.voice(midiToFrequency(degreeNote(theme, degree + 4, -2)), time, barLength / 2, 0.08, bus, 'sawtooth', 380);
    if (theme.ostinato && within % 2 === 0) {
      const pulse = [0, 0, 4, 0, 7, 0, 4, 2][(within / 2) % 8];
      this.voice(midiToFrequency(degreeNote(theme, degree + pulse, -1)), time, sixteenth * 1.6, 0.045, bus, 'sawtooth', 1500);
    }
    if (theme.harp && within % 2 === 0) {
      const arpeggio = [0, 1, 2, 1, 2, 3, 2, 1][(within / 2) % 8];
      const note = arpeggio === 3 ? chord[0] + 12 : chord[arpeggio];
      this.voice(midiToFrequency(note + 12), time, 0.9, 0.035, bus, 'triangle', 3200);
    }
    if (within % 2 === 0) {
      const melody = theme.melody[bar][within / 2];
      if (melody !== null && melody !== undefined) this.lead(theme.lead, midiToFrequency(degreeNote(theme, melody, 1)), time, sixteenth * 3.4, bus);
    }
    const pattern = theme.drums[Math.floor(step / 16) % theme.drums.length][within];
    if (pattern === 'x') this.drum(time, 1, bus);
    if (pattern === 'o') this.drum(time, 0.55, bus);
    if (pattern === 's') this.swell(time, sixteenth * 4, bus);
  }

  private oscillator(type: OscillatorType, frequency: number, time: number) {
    const oscillator = this.context!.createOscillator();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, time);
    return oscillator;
  }

  private release(nodes: AudioNode[], oscillators: AudioScheduledSourceNode[], end: number) {
    for (const oscillator of oscillators) oscillator.stop(end);
    oscillators[0].onended = () => { for (const node of [...oscillators, ...nodes]) node.disconnect(); };
  }

  // Warm detuned saws with a slow bow: the orchestra's string bed.
  private strings(frequency: number, time: number, duration: number, volume: number, bus: AudioNode) {
    const context = this.context!;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1300;
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.linearRampToValueAtTime(volume, time + duration * 0.25);
    envelope.gain.setValueAtTime(volume, time + duration * 0.8);
    envelope.gain.linearRampToValueAtTime(0.0001, time + duration + 0.3);
    const a = this.oscillator('sawtooth', frequency, time), b = this.oscillator('sawtooth', frequency, time);
    a.detune.value = -7; b.detune.value = 7;
    a.connect(filter); b.connect(filter); filter.connect(envelope); envelope.connect(bus);
    a.start(time); b.start(time);
    this.release([filter, envelope], [a, b], time + duration + 0.35);
  }

  private choir(frequency: number, time: number, duration: number, bus: AudioNode) {
    const context = this.context!;
    const formant = context.createBiquadFilter();
    formant.type = 'bandpass';
    formant.frequency.value = 820;
    formant.Q.value = 1.4;
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.linearRampToValueAtTime(0.06, time + duration * 0.35);
    envelope.gain.linearRampToValueAtTime(0.0001, time + duration + 0.4);
    const voice = this.oscillator('sawtooth', frequency, time);
    const vibrato = this.oscillator('sine', 5.2, time);
    const depth = context.createGain();
    depth.gain.value = frequency * 0.006;
    vibrato.connect(depth); depth.connect(voice.frequency);
    voice.connect(formant); formant.connect(envelope); envelope.connect(bus);
    voice.start(time); vibrato.start(time);
    this.release([formant, envelope, depth], [voice, vibrato], time + duration + 0.45);
  }

  private voice(frequency: number, time: number, duration: number, volume: number, bus: AudioNode, type: OscillatorType, cutoff: number) {
    const context = this.context!;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = cutoff;
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.exponentialRampToValueAtTime(volume, time + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    const oscillator = this.oscillator(type, frequency, time);
    oscillator.connect(filter); filter.connect(envelope); envelope.connect(bus);
    oscillator.start(time);
    this.release([filter, envelope], [oscillator], time + duration + 0.02);
  }

  // Brass swells open its filter; flute, horn and bells keep softer colors.
  private lead(kind: Theme['lead'], frequency: number, time: number, duration: number, bus: AudioNode) {
    const context = this.context!;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    const envelope = context.createGain();
    const volume = kind === 'bell' ? 0.07 : kind === 'flute' ? 0.06 : 0.075;
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.exponentialRampToValueAtTime(volume, time + (kind === 'bell' ? 0.005 : 0.07));
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + (kind === 'bell' ? 1.8 : duration));
    filter.frequency.setValueAtTime(kind === 'brass' ? 700 : 2400, time);
    if (kind === 'brass' || kind === 'horn') filter.frequency.exponentialRampToValueAtTime(kind === 'brass' ? 2600 : 1400, time + 0.12);
    const type: OscillatorType = kind === 'flute' ? 'sine' : kind === 'bell' ? 'triangle' : 'sawtooth';
    const main = this.oscillator(type, kind === 'horn' ? frequency / 2 : frequency, time);
    const layer = this.oscillator(kind === 'bell' ? 'sine' : kind === 'flute' ? 'triangle' : 'square', kind === 'bell' ? frequency * 2.76 : kind === 'horn' ? frequency / 2 : frequency, time);
    const layerGain = context.createGain();
    layerGain.gain.value = kind === 'bell' ? 0.35 : 0.3;
    main.connect(filter); layer.connect(layerGain); layerGain.connect(filter); filter.connect(envelope); envelope.connect(bus);
    main.start(time); layer.start(time);
    this.release([filter, envelope, layerGain], [main, layer], time + (kind === 'bell' ? 1.85 : duration + 0.05));
  }

  // Timpani-like hit: a falling sine body plus a short filtered noise attack.
  private drum(time: number, strength: number, bus: AudioNode) {
    const context = this.context!;
    const body = this.oscillator('sine', 110 * (strength > 0.8 ? 1 : 1.35), time);
    body.frequency.exponentialRampToValueAtTime(48, time + 0.35);
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.exponentialRampToValueAtTime(0.42 * strength, time + 0.006);
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + 0.7);
    body.connect(envelope); envelope.connect(bus);
    body.start(time);
    this.release([envelope], [body], time + 0.75);
    if (!this.noise) return;
    const hit = context.createBufferSource();
    hit.buffer = this.noise;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.16 * strength, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);
    hit.connect(filter); filter.connect(gain); gain.connect(bus);
    hit.start(time);
    this.release([filter, gain], [hit], time + 0.15);
  }

  private swell(time: number, duration: number, bus: AudioNode) {
    if (!this.noise) return;
    const context = this.context!;
    const source = context.createBufferSource();
    source.buffer = this.noise;
    source.loop = true;
    const filter = context.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5000;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.09, time + duration);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration + 0.5);
    source.connect(filter); filter.connect(gain); gain.connect(bus);
    source.start(time);
    this.release([filter, gain], [source], time + duration + 0.55);
  }

  private tone(frequency: number, delay: number, duration: number, volume: number, bus: GainNode, type: OscillatorType = 'sine') {
    if (!this.context || this.context.state !== 'running') return;
    const now = this.context.currentTime + delay;
    const oscillator = this.context.createOscillator();
    const envelope = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(Math.max(0.001, volume), now + 0.045);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(envelope);
    envelope.connect(bus);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
    oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
  }

  effect(kind: 'collect' | 'cast' | 'success' | 'damage' | 'open') {
    if (!this.effects || !this.effectsBus) return;
    const notes = { collect: [659, 880, 1318], cast: [196, 392, 784, 1568], success: [523, 659, 784, 1046], damage: [110, 82], open: [330, 440] }[kind];
    notes.forEach((frequency, i) => this.tone(frequency, i * 0.09, kind === 'cast' ? 0.8 : 0.5, kind === 'damage' ? 0.3 : 0.16, this.effectsBus!, kind === 'damage' ? 'triangle' : 'sine'));
  }

  dispose() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    void this.context?.close().catch(() => undefined);
    this.context = null;
    this.section = null;
    this.playing = null;
  }
}
