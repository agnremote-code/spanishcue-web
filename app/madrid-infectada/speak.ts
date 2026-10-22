// Madrid infectada · the scene read aloud by the browser's voice, line by
// line, with the line being read highlighted. Peninsular voices (es-ES) are
// preferred; women and men get a different voice or pitch when the browser
// has them. Nothing is downloaded: if there is no Spanish voice, it is silent.
export type SpokenLine = { text: string; gender: 'f' | 'm' | null };

const synth = () => (typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null);
export const canSpeak = () => Boolean(synth());

function pickVoice(gender: 'f' | 'm' | null) {
  const voices = synth()?.getVoices() ?? [];
  const spain = voices.filter(v => /^es[-_]ES/i.test(v.lang));
  const spanish = spain.length ? spain : voices.filter(v => /^es/i.test(v.lang));
  if (!spanish.length) return null;
  const female = /female|mujer|elvira|helena|laura|monica|mónica|paulina|lucia|lucía|ximena|sabina|marisol/i;
  const male = /male|hombre|alvaro|álvaro|jorge|pablo|diego|enrique|carlos|juan/i;
  if (gender === 'f') return spanish.find(v => female.test(v.name) && !/\bmale\b/i.test(v.name)) ?? spanish[0];
  if (gender === 'm') return spanish.find(v => male.test(v.name) && !/female/i.test(v.name)) ?? spanish[spanish.length - 1];
  return spanish[0];
}

/** Reads the lines in order; onLine(i) fires as each starts, onLine(-1) at the end. */
export function speakScene(lines: SpokenLine[], onLine: (index: number) => void, rate = 0.95) {
  const s = synth();
  if (!s) return false;
  s.cancel();
  lines.forEach((line, i) => {
    const u = new SpeechSynthesisUtterance(line.text.replace(/[«»“”]/g, ''));
    const voice = pickVoice(line.gender);
    if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = 'es-ES';
    u.rate = rate;
    // Same voice for everyone on some systems: pitch tells them apart.
    u.pitch = line.gender === 'f' ? 1.12 : line.gender === 'm' ? 0.86 : 1;
    u.onstart = () => onLine(i);
    if (i === lines.length - 1) { u.onend = () => onLine(-1); u.onerror = () => onLine(-1); }
    try { s.speak(u); } catch { onLine(-1); }
  });
  return true;
}

export function stopScene() { synth()?.cancel(); }
