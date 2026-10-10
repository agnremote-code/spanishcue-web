/** Small original score and spell sounds, synthesized locally after a user gesture. */
export class RealmAudio {
  private context: AudioContext | null = null;
  private musicBus: GainNode | null = null;
  private effectsBus: GainNode | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  private beat = 0;
  private music = true;
  private effects = true;
  private mood: 'explore' | 'mystery' | 'dragon' | 'victory' = 'explore';

  start() {
    try {
      if (!this.context) {
        this.context = new AudioContext();
        this.musicBus = this.context.createGain();
        this.effectsBus = this.context.createGain();
        this.musicBus.gain.value = this.music ? 0.24 : 0;
        this.effectsBus.gain.value = this.effects ? 0.26 : 0;
        this.musicBus.connect(this.context.destination);
        this.effectsBus.connect(this.context.destination);
      }
      void this.context.resume().catch(() => undefined);
      if (!this.timer) {
        this.score();
        this.timer = setInterval(() => this.score(), 1400);
      }
    } catch { /* Audio is optional; the adventure remains playable. */ }
  }

  setPreferences(music: boolean, effects: boolean) {
    this.music = music;
    this.effects = effects;
    if (this.context && this.musicBus && this.effectsBus) {
      this.musicBus.gain.setTargetAtTime(music ? 0.24 : 0, this.context.currentTime, 0.15);
      this.effectsBus.gain.setTargetAtTime(effects ? 0.26 : 0, this.context.currentTime, 0.15);
    }
  }

  setMood(mood: 'explore' | 'mystery' | 'dragon' | 'victory') { this.mood = mood; }

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

  private score() {
    if (!this.music || !this.musicBus) return;
    const scales = {
      explore: [196, 293.66, 392, 440, 493.88, 392, 293.66, 261.63],
      mystery: [164.81, 246.94, 329.63, 349.23, 293.66, 246.94, 220, 164.81],
      dragon: [146.83, 220, 155.56, 293.66, 220, 146.83, 207.65, 220],
      victory: [261.63, 329.63, 392, 523.25, 493.88, 392, 329.63, 392],
    };
    const sequence = scales[this.mood];
    const note = sequence[this.beat++ % sequence.length];
    this.tone(note, 0, 2.5, 0.12, this.musicBus);
    this.tone(note * 2, 0.42, 1.8, 0.055, this.musicBus, 'triangle');
    if (this.beat % 4 === 0) this.tone(sequence[0] / 2, 0, 5, 0.13, this.musicBus);
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
  }
}
