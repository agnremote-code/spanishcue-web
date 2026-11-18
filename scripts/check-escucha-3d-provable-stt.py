#!/usr/bin/env python3
"""Speech-to-text and speaker check of the Escucha 3D listening clips under
the provable listening gate (BOARD-DECISION-006, a scoped amendment to
BOARD-DECISION-003 §3.1). It applies only to NEW board worlds authored after
2026-11-16. Runs in GitHub Actions, where the model hosts are reachable;
agents' sandboxes cannot reach them.

Derived from the BOARD-DECISION-003 checker (scripts/check-escucha-3d-stt.py on
PR #282's branch at 3631534f, which stays there for El ascensor del cerro).
The word, gap-word and second-model logic of BOARD-DECISION-003 §3.2–3.5 is
unchanged. What BOARD-DECISION-006 §3.6 changes:

(i)   Seeded clips and speaker references are built with the audio generator's
      own code (scripts/generate-escucha-3d-audio.py is imported, not copied):
      Emma for women, Florian for men, the per-clip pitch from `casting()`,
      and the generator's own `clip()` assembly. References are cached per
      (engine, pitch, level), not per identity voice.
(ii)  The §3.4 seed set, per (game, level): in one single-voice clip with
      gaps, one gap word deleted and a second gap word replaced by a different
      whole word that is not a minimal pair (this replaces the -s swap), and on
      four other lines a two-word repeat at the join, a deleted plain word, an
      article -s pair and a replaced first word; in one cross-gender two-voice
      clip, one line read by the other speaker. A level that lacks any seed
      or target is NOT VALID; nothing is skipped silently.
(iii) The run exits 0 only when `tool_valid is True` and every real clip
      passes. A run without --seeded can never be valid.
      Clips with two same-gender speakers or three or more speakers HOLD with
      "unproven" (§3.3): same-gender speaker discrimination was never shown.

`--plan` builds the seed plan only (no audio, no models) and exits 1 when a
seed or target is missing. Tests use it.

Usage:
  python scripts/check-escucha-3d-provable-stt.py <game> <level> --seeded [--out DIR]
  python scripts/check-escucha-3d-provable-stt.py <game> <level> --plan
  python scripts/check-escucha-3d-provable-stt.py --content FILE --plan
Requires (full run): faster-whisper, resemblyzer, edge-tts, num2words, numpy, ffmpeg.
"""
import argparse, asyncio, copy, difflib, importlib.util, json, os, pathlib, re, subprocess, sys, tempfile, unicodedata

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTENT = ROOT / 'app/escucha-3d/content'
SR = 16000
MARGIN = 0.02
# Interjections that an ASR may drop or spell freely. Declared before any run.
INTERJECTIONS = {'uf', 'eh', 'ah', 'oh', 'mm', 'mmm', 'hm', 'ay', 'uy', 'ajá', 'aja'}
REFERENCE_TEXT = [
    'Buenas tardes. Hoy el cielo está despejado y no hace mucho frío.',
    'Me gustaría saber a qué hora abre la biblioteca municipal el sábado.',
    'Si tienes tiempo después del trabajo, podemos tomar algo en la plaza.',
]
# Replacement words for the second gap seed (BOARD-DECISION-006 §3.4), fixed
# before any run. The first one that is not in the line and is at least 3 edits
# away from the gap word is used, so it is never a minimal pair.
GAP_REPLACEMENTS = ['ventana', 'pelota', 'camino', 'tormenta']
ARTICLE_PAIRS = (('la', 'las'), ('las', 'la'), ('los', 'lo'), ('el', 'en'))
REQUIRED_SEEDS = ['gap-delete', 'gap-replace', 'repeat', 'delete', 'article', 'first', 'speaker']
OPS = ['repeat', 'delete', 'article', 'first']


def load_generator():
    """The audio generator itself, so casting and assembly cannot drift (§3.6 i)."""
    spec = importlib.util.spec_from_file_location('escucha3d_generator', ROOT / 'scripts/generate-escucha-3d-audio.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


GEN = load_generator()


def gender(voice):
    return GEN.gender_of(voice)


def fold(word):
    word = unicodedata.normalize('NFKD', word.lower())
    return ''.join(c for c in word if not unicodedata.combining(c) or c == '̃')  # keep ñ


def norm(text):
    text = text.replace('—', ' ').replace('–', ' ').replace('-', ' ').replace('/', ' ')
    text = re.sub(r'\d{1,3}(?:[.,]\d{3})+\b', lambda m: re.sub(r'[.,]', '', m.group()), text)  # 80.000.000 → 80000000
    text = re.sub(r'(\d+):00\b', r'\1', text)  # 6:00 → 6
    text = re.sub(r'(\d+):(\d+)', r'\1 \2', text)  # 6:30 → 6 30
    text = text.replace('%', ' por ciento')
    out = []
    for raw in re.findall(r"[\wáéíóúüñÁÉÍÓÚÜÑ]+", text):
        if raw.isdigit():
            from num2words import num2words
            out.extend(fold(w) for w in re.findall(r'\w+', num2words(int(raw), lang='es')))
        else:
            out.append(fold(raw))
    return [unicodedata.normalize('NFC', w) for w in out]


def decode(path):
    return subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 'f32le', '-ar', str(SR), '-ac', '1', 'pipe:1'],
                          capture_output=True, check=True).stdout


def as_array(raw):
    import numpy as np
    return np.frombuffer(raw, dtype=np.float32).copy()


def exact_with_bleed(heard, want, prev, nxt):
    """True only if `heard` is exactly the line's words, optionally preceded by
    a suffix of the previous line and followed by a prefix of the next one
    (audio bleed from the padded window). Interjections are ignored. Any other
    extra token fails."""
    clean = lambda ws: [t for t in ws if t not in INTERJECTIONS]
    heard, want, prev, nxt = clean(heard), clean(want), clean(prev), clean(nxt)
    for i in range(len(heard) - len(want) + 1):
        if heard[i:i + len(want)] != want:
            continue
        head, tail = heard[:i], heard[i + len(want):]
        if (not head or prev[len(prev) - len(head):] == head) and (not tail or nxt[:len(tail)] == tail):
            return True
    return False


def same_gender_or_crowded(item):
    """BOARD-DECISION-006 §3.3: speaker checks are proven only for one voice or one woman and one man."""
    sp = item['speakers']
    return len(sp) > 2 or (len(sp) == 2 and gender(sp[0]['voice']) == gender(sp[1]['voice']))


# --------------------------------------------------------------------------- synthesis (the generator's own code)
def mp3_to(sr, mp3, fmt='s16le'):
    return subprocess.run(['ffmpeg', '-v', 'error', '-i', 'pipe:0', '-f', fmt, '-ar', str(sr), '-ac', '1', 'pipe:1'],
                          input=mp3, capture_output=True, check=True).stdout


def render_with_generator(item, level, folder):
    """Builds `item` with the generator's own clip(): casting from item['speakers'],
    each line spoken by cast[line['s']], the same pauses, loudnorm and 40k mp3."""
    async def build():
        GEN.sem = asyncio.Semaphore(4)  # bound to this event loop
        return await GEN.clip('seed', level, item, f"seed/{item['id']}", 'seeded')
    saved = GEN.OUT, GEN.FREE_OUT
    GEN.OUT = GEN.FREE_OUT = pathlib.Path(folder)
    try:
        _, meta = asyncio.run(build())
    finally:
        GEN.OUT, GEN.FREE_OUT = saved  # the real clips are read from the generator's folders
    return pathlib.Path(folder) / pathlib.Path(meta['src']).name


async def references(casts, level):
    refs = {}
    for engine, pitch in sorted(casts):
        refs[(engine, pitch)] = [as_array(mp3_to(SR, await GEN.speak(text, engine, GEN.RATE[level], pitch), 'f32le')) for text in REFERENCE_TEXT]
    return refs


# --------------------------------------------------------------------------- checking
class Checker:
    def __init__(self):
        from faster_whisper import WhisperModel
        from resemblyzer import VoiceEncoder
        print('loading models', flush=True)
        self.fast = WhisperModel('large-v3-turbo', device='cpu', compute_type='int8')
        self.second = None
        self.encoder = VoiceEncoder('cpu')
        self.ref_cache = {}

    def second_model(self):
        if self.second is None:
            from faster_whisper import WhisperModel
            self.second = WhisperModel('large-v3', device='cpu', compute_type='int8')
        return self.second

    def embed(self, audio):
        from resemblyzer import preprocess_wav
        wav = preprocess_wav(audio, source_sr=SR)
        if len(wav) < SR * 0.6:
            return None
        return self.encoder.embed_utterance(wav)

    def cast_refs(self, casts, level):
        """Reference embedding per (engine, pitch, level) (§3.6 i)."""
        import numpy as np
        missing = [c for c in casts if (c[0], c[1], level) not in self.ref_cache]
        if missing:
            for cast, clips in asyncio.run(references(missing, level)).items():
                embs = [e for e in (self.embed(c) for c in clips) if e is not None]
                if not embs:
                    raise RuntimeError(f'no reference embedding for {cast}')
                mean = np.mean(embs, axis=0)
                self.ref_cache[(cast[0], cast[1], level)] = mean / np.linalg.norm(mean)
        return {c: self.ref_cache[(c[0], c[1], level)] for c in casts}

    def transcribe(self, model, audio):
        segments, _ = model.transcribe(audio, language='es', beam_size=5, word_timestamps=True,
                                       condition_on_previous_text=False, vad_filter=False, temperature=0.0)
        words = []
        for seg in segments:
            for w in seg.words or []:
                for token in norm(w.word):
                    words.append((token, w.start, w.end))
        return words

    def check_clip(self, item, level, mp3, label):
        import numpy as np
        audio = as_array(decode(mp3))
        authored, owner = [], []
        for li, line in enumerate(item['lines']):
            for token in norm(line['text']):
                authored.append(token)
                owner.append(li)
        heard = self.transcribe(self.fast, audio)
        heard_tokens = [w[0] for w in heard]

        # Gap words: locate the gap sentence inside the authored lines.
        targets, gap_note = set(), None
        gap_plain = re.sub(r'[\[\]]', '', item.get('gaps', ''))
        gap_tokens = norm(gap_plain)
        marked = []
        for part in re.split(r'(\[[^\]]+\])', item.get('gaps', '')):
            n = len(norm(part.strip('[]')))
            marked.extend([part.startswith('[')] * n)
        at = next((i for i in range(len(authored) - len(gap_tokens) + 1) if authored[i:i + len(gap_tokens)] == gap_tokens), None)
        if gap_tokens and at is None:
            gap_note = 'gap sentence not found word for word in the authored lines'
        elif gap_tokens:
            targets = {at + k for k, m in enumerate(marked) if m}

        sm = difflib.SequenceMatcher(None, authored, heard_tokens, autojunk=False)
        heard_of = {}
        findings = {li: [] for li in range(len(item['lines']))}
        missed_targets = set()
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag == 'equal':
                for k in range(i2 - i1):
                    heard_of[i1 + k] = j1 + k
                continue
            a, b = authored[i1:i2], heard_tokens[j1:j2]
            if all(t in INTERJECTIONS for t in a + b):
                continue
            missed_targets |= {k for k in range(i1, i2) if k in targets}
            if i2 > i1:
                touched = sorted(set(owner[i1:i2]))
            else:  # extra heard words: charged to the lines on both sides of the insertion
                touched = sorted({owner[k] for k in (i1 - 1, i1) if 0 <= k < len(owner)})
            extra = [t for t in b if t not in INTERJECTIONS]
            for li in touched:
                findings[li].append({'authored': ' '.join(a), 'heard': ' '.join(b), 'at': round(heard[j1][1], 2) if j1 < len(heard) else None,
                                     'kind': tag, 'clearable': not (tag == 'insert' and extra)})
            if tag == 'replace':
                for k in range(min(i2 - i1, j2 - j1)):
                    heard_of.setdefault(i1 + k, j1 + k)

        # Line spans from the aligned words.
        spans = []
        for li in range(len(item['lines'])):
            idx = [heard_of[k] for k in range(len(owner)) if owner[k] == li and k in heard_of]
            spans.append((heard[min(idx)][1], heard[max(idx)][2]) if idx else None)

        lines = []
        cast = GEN.casting(item['speakers'])
        unproven = same_gender_or_crowded(item)
        refs = self.cast_refs(sorted(set(cast)), level) if len(item['speakers']) > 1 and not unproven else {}
        for li, line in enumerate(item['lines']):
            declared = cast[line['s']]
            entry = {'line': li + 1, 'speaker': item['speakers'][line['s']]['name'], 'voice': item['speakers'][line['s']]['voice'],
                     'cast': f'{declared[0]} {declared[1]}',
                     'span': [round(x, 2) for x in spans[li]] if spans[li] else None, 'findings': findings[li], 'cleared_by_second_model': False}
            if findings[li] and spans[li]:
                s0, s1 = max(0, int((spans[li][0] - 0.15) * SR)), int((spans[li][1] + 0.15) * SR)
                again = [w[0] for w in self.transcribe(self.second_model(), audio[s0:s1])]
                entry['second_model_heard'] = ' '.join(again)
                prev = norm(item['lines'][li - 1]['text']) if li > 0 else []
                nxt = norm(item['lines'][li + 1]['text']) if li + 1 < len(item['lines']) else []
                entry['cleared_by_second_model'] = all(f.get('clearable', True) for f in findings[li]) and \
                    exact_with_bleed(again, norm(line['text']), prev, nxt)
            entry['words_ok'] = not findings[li] or entry['cleared_by_second_model']
            if not spans[li]:
                entry['words_ok'] = False
                entry['findings'].append({'authored': line['text'], 'heard': '', 'at': None, 'note': 'line not located in the audio'})
            if unproven:
                entry['speaker_ok'] = False
                entry['speaker_note'] = 'unproven: two same-gender speakers or 3+ speakers (BOARD-DECISION-006 §3.3)'
            elif refs:
                if not spans[li]:
                    entry['speaker_ok'] = False
                    entry['speaker_note'] = 'unresolved: no span'
                else:
                    emb = self.embed(audio[int(spans[li][0] * SR):int(spans[li][1] * SR)])
                    if emb is None:
                        entry['speaker_ok'] = False
                        entry['speaker_note'] = 'unresolved: span too short to embed'
                    else:
                        sims = {c: float(np.dot(emb, r)) for c, r in refs.items()}
                        best = max(sims, key=sims.get)
                        margin = sims[declared] - max(s for c, s in sims.items() if c != declared)
                        entry['similarity'] = {f'{c[0]} {c[1]}': round(s, 3) for c, s in sims.items()}
                        entry['closest_cast'] = f'{best[0]} {best[1]}'
                        entry['margin'] = round(margin, 3)
                        entry['speaker_ok'] = best == declared and margin >= MARGIN
                        if not entry['speaker_ok']:
                            entry['speaker_note'] = f'closest cast {best[0]} {best[1]}, margin {margin:+.3f}'
            else:
                entry['speaker_ok'] = True
                entry['speaker_note'] = 'one voice in the clip'
            lines.append(entry)

        gaps = [{'word': authored[k], 'heard': k not in missed_targets} for k in sorted(targets)]
        verdict = 'PASS' if (not gap_note and all(g['heard'] for g in gaps) and all(l['words_ok'] and l['speaker_ok'] for l in lines)) else 'HOLD'
        return {'clip': label, 'verdict': verdict, 'gap_note': gap_note, 'gap_words': gaps, 'lines': lines,
                'transcript': ' '.join(heard_tokens), 'authored_words': len(authored), 'heard_words': len(heard_tokens)}


# --------------------------------------------------------------------------- seeded defects (BOARD-DECISION-006 §3.4)
def edits(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]


def whole(word):
    return rf'(?<![\wáéíóúüñÁÉÍÓÚÜÑ]){re.escape(word)}(?![\wáéíóúüñÁÉÍÓÚÜÑ])'


def gap_words(item):
    return [g.strip() for g in re.findall(r'\[([^\]]+)\]', item.get('gaps') or '')]


def gap_line_of(item):
    want = norm(re.sub(r'[\[\]]', '', item.get('gaps') or ''))
    if not want:
        return None
    for i, line in enumerate(item['lines']):
        have = norm(line['text'])
        if any(have[k:k + len(want)] == want for k in range(len(have) - len(want) + 1)):
            return i
    return None


def target(op, text, gap_tokens):
    """The target of one seed op in one line, or None when the line has none."""
    words = re.findall(r'[\wáéíóúüñÁÉÍÓÚÜÑ]+', text)
    if op == 'repeat':
        return ' '.join(words[-2:]) if len(words) >= 2 else None
    if op == 'delete':
        plain = [w for w in re.findall(r'(?<![\wáéíóúüñ])[a-záéíóúüñ]{5,}(?![\wáéíóúüñ])', text)
                 if fold(w) not in gap_tokens and len(re.findall(whole(w), text)) == 1]
        return plain[1] if len(plain) > 1 else (plain[0] if plain else None)
    if op == 'article':
        for a, b in ARTICLE_PAIRS:
            if re.search(rf'(?<=\s){a}(?=\s)', text):
                return (a, b)
        return None
    if op == 'first':
        return words[0] if words else None
    raise ValueError(op)


def apply(op, text, tgt):
    if op == 'repeat':
        return text + f' {tgt.capitalize()}, {tgt}.', f'«{tgt}» repeated twice at the line join'
    if op == 'delete':
        return re.sub(r'\s*' + whole(tgt), '', text, count=1), f'plain word «{tgt}» deleted'
    if op == 'article':
        a, b = tgt
        return re.sub(rf'(?<=\s){a}(?=\s)', b, text, count=1), f'article «{a}» → «{b}»'
    repl = 'Ya' if tgt.lower() != 'ya' else 'Y'
    return re.sub(whole(tgt), repl, text, count=1), f'first word «{tgt}» → «{repl}»'


def assign(lines, gap_tokens):
    """Distinct lines for the four ops, in order, by backtracking; ops that no
    line can host stay unassigned (and the level is then NOT VALID)."""
    best = {}

    def go(k, used, chosen):
        nonlocal best
        if len(chosen) > len(best):
            best = dict(chosen)
        if k == len(OPS) or len(best) == len(OPS):
            return
        for li, text in lines:
            if li not in used and target(OPS[k], text, gap_tokens) is not None:
                chosen[OPS[k]] = li
                go(k + 1, used | {li}, chosen)
                del chosen[OPS[k]]
                if len(best) == len(OPS):
                    return
        go(k + 1, used, chosen)
    go(0, set(), {})
    return best


def word_seed(item):
    """The single-voice word seed for one clip, or (None, missing)."""
    words = gap_words(item)
    gi = gap_line_of(item)
    if gi is None or len(words) < 2:
        return None, ['gap-delete', 'gap-replace']
    broken = copy.deepcopy(item)
    gap_tokens = {t for g in words for t in norm(g)}
    line = broken['lines'][gi]
    g0, g1 = words[0], words[1]
    if not re.search(whole(g0), line['text']) or not re.search(whole(g1), line['text']):
        return None, ['gap-delete', 'gap-replace']
    repl = next((w for w in GAP_REPLACEMENTS if w not in norm(line['text']) and edits(fold(w), fold(g1)) >= 3), None)
    if repl is None:
        return None, ['gap-replace']
    line['text'] = re.sub(r'\s*' + whole(g0), '', line['text'], count=1).strip()
    line['text'] = re.sub(whole(g1), repl, line['text'], count=1)
    expect = [{'seed': 'gap-delete', 'line': gi + 1, 'what': f'gap word «{g0}» deleted'},
              {'seed': 'gap-replace', 'line': gi + 1, 'what': f'gap word «{g1}» → «{repl}»'}]
    others = [(i, l['text']) for i, l in enumerate(item['lines']) if i != gi]
    plan = assign(others, gap_tokens)
    missing = [op for op in OPS if op not in plan]
    if missing:
        return None, missing
    for op in OPS:
        li = plan[op]
        tgt = target(op, broken['lines'][li]['text'], gap_tokens)
        broken['lines'][li]['text'], what = apply(op, broken['lines'][li]['text'], tgt)
        expect.append({'seed': op, 'line': li + 1, 'what': what})
    return {'kind': 'words', 'authored': item, 'broken': broken, 'expect': expect,
            'gaps_missed': [norm(g0)[0], norm(g1)[0]]}, []


def speaker_seed(item):
    if len(item['speakers']) != 2 or gender(item['speakers'][0]['voice']) == gender(item['speakers'][1]['voice']):
        return None
    li = next((i for i, l in enumerate(item['lines']) if i > 0 and len(l['text']) > 40), None)
    if li is None:
        return None
    broken = copy.deepcopy(item)
    declared = item['lines'][li]['s']
    other = 1 - declared
    broken['lines'][li]['s'] = other  # spoken with the other speaker's engine and pitch
    cast = GEN.casting(item['speakers'])
    return {'kind': 'speaker', 'authored': item, 'broken': broken, 'gaps_missed': [],
            'expect': [{'seed': 'speaker', 'line': li + 1,
                        'what': f'line read by {item["speakers"][other]["name"]} ({cast[other][0]} {cast[other][1]}) instead of {item["speakers"][declared]["name"]} ({cast[declared][0]} {cast[declared][1]})'}]}


def seed_plan(items):
    """The §3.4 seed set for one (game, level). Returns (seeds, missing)."""
    seeds, missing = [], []
    word, why = None, ['gap-delete', 'gap-replace']
    for item in items:
        if len(item['speakers']) == 1 and item.get('gaps'):
            word, why = word_seed(item)
            if word:
                break
    if word:
        seeds.append(word)
    else:
        missing += [f'{s} (no single-voice clip with gaps has every target; first gap: {", ".join(why)})' for s in REQUIRED_SEEDS if s != 'speaker']
    spk = next((s for s in (speaker_seed(it) for it in items) if s), None)
    if spk:
        seeds.append(spk)
    else:
        missing.append('speaker (no cross-gender two-voice clip with a line after the first longer than 40 characters)')
    present = [e['seed'] for s in seeds for e in s['expect']]
    missing += [f'{s} (not seeded)' for s in REQUIRED_SEEDS if s not in present and not any(m.startswith(s + ' ') for m in missing)]
    return seeds, missing


def code_sha():
    if os.environ.get('GITHUB_SHA'):
        return os.environ['GITHUB_SHA']
    try:
        return subprocess.run(['git', 'rev-parse', 'HEAD'], cwd=ROOT, capture_output=True, text=True, check=True).stdout.strip()
    except Exception:
        return 'UNKNOWN'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('game', nargs='?')
    ap.add_argument('level', nargs='?')
    ap.add_argument('--content', help='content JSON file instead of app/escucha-3d/content/<game>/<level>.json')
    ap.add_argument('--seeded', action='store_true')
    ap.add_argument('--plan', action='store_true', help='print the seed plan only (no audio, no models)')
    ap.add_argument('--out', default=str(ROOT / 'docs/board/evidence/stt'))
    args = ap.parse_args()
    path = pathlib.Path(args.content) if args.content else CONTENT / args.game / f'{args.level.lower()}.json'
    data = json.loads(path.read_text())
    game, level, items = data['game'], data['level'], data['items']
    seeds, missing = seed_plan(items)

    if args.plan:
        print(json.dumps({'game': game, 'level': level, 'rule': 'BOARD-DECISION-006 §3.4', 'missing': missing,
                          'seeds': [{'kind': s['kind'], 'clip': s['authored']['id'], 'expect': s['expect'],
                                     'cast': [f'{e} {p}' for e, p in GEN.casting(s['authored']['speakers'])],
                                     'broken_lines': [l['text'] for l in s['broken']['lines']],
                                     'broken_speakers': [l['s'] for l in s['broken']['lines']]} for s in seeds]},
                         ensure_ascii=False, indent=1))
        return 1 if missing else 0

    out = pathlib.Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    checker = Checker()
    report = {'game': game, 'level': level, 'rule': 'BOARD-DECISION-006 (amends BOARD-DECISION-003 §3.1)', 'code_sha': code_sha(),
              'models': ['large-v3-turbo (faster-whisper, int8)', 'large-v3 (second model, findings only)', 'Resemblyzer VoiceEncoder'],
              'casting': 'scripts/generate-escucha-3d-audio.py casting(): Emma for women, Florian for men, per-clip pitch',
              'margin': MARGIN, 'seeded': None, 'clips': []}

    if args.seeded:
        tmp = pathlib.Path(tempfile.mkdtemp(prefix='stt-seeded-'))
        cases = []
        for seed in seeds:
            mp3 = render_with_generator(seed['broken'], level, tmp / seed['kind'])
            result = checker.check_clip(seed['authored'], level, mp3, f"seeded-{seed['kind']}-{seed['authored']['id']}")
            found = []
            for exp in seed['expect']:
                line = result['lines'][exp['line'] - 1]
                hit = (not line['words_ok']) if seed['kind'] == 'words' else (not line['speaker_ok'])
                entry = {**exp, 'found': hit}
                if 'margin' in line:
                    entry['margin_declared_minus_best_other'] = line['margin']
                found.append(entry)
            heard = {g['word']: g['heard'] for g in result['gap_words']}
            for word in seed['gaps_missed']:
                found.append({'seed': 'gap-word-report', 'line': None, 'what': f'gap word «{word}» reported as not heard', 'found': heard.get(word) is False})
            cases.append({'kind': seed['kind'], 'clip': seed['authored']['id'], 'verdict_on_broken_clip': result['verdict'], 'expected': found,
                          'broken_lines': [l['text'] for l in seed['broken']['lines']], 'detail': result})
            print(f"seeded {seed['kind']} {seed['authored']['id']}: verdict {result['verdict']}, found {[f['found'] for f in found]}", flush=True)
        all_found = bool(cases) and all(f['found'] for s in cases for f in s['expected']) and all(s['verdict_on_broken_clip'] == 'HOLD' for s in cases)
        report['seeded'] = {'missing': missing, 'all_found': all_found, 'valid': all_found and not missing, 'cases': cases}

    for item in items:
        mp3 = GEN.out_dir(game) / f"{game}-{level.lower()}-{item['id']}.mp3"
        result = checker.check_clip(item, level, mp3, item['id'])
        print(f"{item['id']}: {result['verdict']}", flush=True)
        report['clips'].append(result)

    report['tool_valid'] = report['seeded']['valid'] if report['seeded'] else None
    report['all_pass'] = bool(report['clips']) and all(c['verdict'] == 'PASS' for c in report['clips'])
    stem = f'{game}-{level.lower()}-provable'
    (out / f'{stem}.json').write_text(json.dumps(report, ensure_ascii=False, indent=1) + '\n')
    (out / f'{stem}.md').write_text(markdown(report))
    print(markdown(report))
    # §3.6 (iii): green only when the seeded test is VALID and every clip passes.
    return 0 if report['tool_valid'] is True and report['all_pass'] else 1


def markdown(r):
    lines = [f"# Provable listening gate: {r['game']} {r['level']}", '',
             f"Rule: {r['rule']}. Code: `{r['code_sha']}`. Casting: {r['casting']}. Models: {', '.join(r['models'])}. Speaker margin: {r['margin']}.", '']
    if r['seeded']:
        s = r['seeded']
        lines += ['## Seeded-defect test (per level)', '',
                  f"**Valid: {'YES' if s['valid'] else 'NO: the check proves nothing for this level'}.** All seeded defects found: {'YES' if s['all_found'] else 'NO'}. Missing seeds: {', '.join(s['missing']) or 'none'}.", '']
        for case in s['cases']:
            for e in case['expected']:
                lines.append(f"- {case['kind']} · {case['clip']} line {e['line']}: {e['what']} → {'found' if e['found'] else 'MISSED'}"
                             + (f", margin {e['margin_declared_minus_best_other']:+.3f}" if 'margin_declared_minus_best_other' in e else '') + f" (broken clip verdict {case['verdict_on_broken_clip']})")
        lines.append('')
    else:
        lines += ['## Seeded-defect test', '', '**Not run: without --seeded the check is never valid (BOARD-DECISION-006 §3.6 iii).**', '']
    lines += ['## Clips', '', '| Clip | Verdict | Gap words heard | Lines with uncleared word findings | Speaker mismatches, unresolved or unproven |', '|---|---|---|---|---|']
    for c in r['clips']:
        gaps = f"{sum(g['heard'] for g in c['gap_words'])}/{len(c['gap_words'])}" + (f" ({c['gap_note']})" if c['gap_note'] else '')
        bad_words = [str(l['line']) for l in c['lines'] if not l['words_ok']] or ['none']
        bad_spk = [f"{l['line']} ({l.get('speaker_note', '')})" for l in c['lines'] if not l['speaker_ok']] or ['none']
        lines.append(f"| {c['clip']} | **{c['verdict']}** | {gaps} | {', '.join(bad_words)} | {', '.join(bad_spk)} |")
    lines += ['', '## Findings per line', '']
    for c in r['clips']:
        for l in c['lines']:
            for f in l['findings']:
                lines.append(f"- {c['clip']} line {l['line']} ({l['speaker']}): authored «{f['authored']}» / heard «{f['heard']}» at {f['at']} s"
                             + (f" → second model: «{l.get('second_model_heard', '')}», {'cleared' if l['cleared_by_second_model'] else 'NOT cleared'}" if 'second_model_heard' in l else ''))
    lines += ['', f"**All clips pass: {'YES' if r['all_pass'] else 'NO'}.** Tool valid (seeded test): {r['tool_valid']}.",
              'Disclosed open items (BOARD-DECISION-006 §3.5): stress shifts, artefacts inside a TTS line, a wrong voice declared for a character, and any single-phoneme mismatch outside the items are not proven by this check.', '']
    return '\n'.join(lines)


if __name__ == '__main__':
    sys.exit(main())
