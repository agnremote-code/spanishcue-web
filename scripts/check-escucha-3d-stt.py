#!/usr/bin/env python3
"""Speech-to-text and speaker check of the Escucha 3D listening clips
(BOARD-DECISION-003). Runs in GitHub Actions (.github/workflows/
escucha-3d-stt.yml), where the model hosts are reachable; agents' sandboxes
cannot reach them.

For every clip it checks, against the authored `lines` in
app/escucha-3d/content/<game>/<level>.json:

1. Words. faster-whisper (large-v3-turbo, unprompted, Spanish) transcribes the
   clip with word timestamps. The authored and heard words are normalised by
   the fixed rules in `norm()` (case, accents, punctuation, digits to words,
   a fixed list of interjections) and aligned. Every remaining difference is
   a finding. A finding on a line clears only if a second
   Whisper model (large-v3, related to the first, so errors may correlate), decoding that line's audio alone and unprompted, hears the
   authored words of the line exactly and contiguously.
2. Targets. The bracketed gap words are located in the authored lines. A gap
   word that is not heard exactly fails the clip even if (1) cleared it.
3. Speakers. Each line's audio span is embedded (Resemblyzer) and compared
   with reference recordings of every voice of the clip, synthesised here
   with the same Edge neural voice on neutral sentences. The line passes
   only if its declared voice is the closest one by at least MARGIN.

A clip PASSES only if every line has no uncleared finding, every gap word is
heard, and every speaker matches. Anything the tool cannot resolve HOLDS the
clip. Nothing is waved through.

`--seeded` first builds two deliberately broken clips (a swapped gap word and
a swapped non-gap word; one line read by the other speaker), runs the same
check on them against the authored text, and fails the run unless every
seeded defect is found at the right line. If the check misses a seeded
defect, its passes prove nothing and the report says so.

Usage: python scripts/check-escucha-3d-stt.py <game> <level> [--seeded] [--out DIR]
Requires: faster-whisper, resemblyzer, edge-tts, num2words, numpy, ffmpeg.
"""
import argparse, asyncio, difflib, json, pathlib, re, subprocess, sys, unicodedata

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTENT = ROOT / 'app/escucha-3d/content'
SR_TTS = 24000
SR = 16000
MARGIN = 0.02
FREE_GAMES = {'usa', 'mexico'}  # as scripts/generate-escucha-3d-audio.py
RATE = {'A0': '-22%', 'A1': '-14%', 'A2': '-7%', 'B1': '-3%', 'B2': '+0%', 'C1': '+0%', 'C2': '+4%'}
# Interjections that an ASR may drop or spell freely. Declared before any run.
INTERJECTIONS = {'uf', 'eh', 'ah', 'oh', 'mm', 'mmm', 'hm', 'ay', 'uy', 'ajá', 'aja'}
REFERENCE_TEXT = [
    'Buenas tardes. Hoy el cielo está despejado y no hace mucho frío.',
    'Me gustaría saber a qué hora abre la biblioteca municipal el sábado.',
    'Si tienes tiempo después del trabajo, podemos tomar algo en la plaza.',
]


def fold(word):
    word = unicodedata.normalize('NFKD', word.lower())
    return ''.join(c for c in word if not unicodedata.combining(c) or c == '̃')  # keep ñ


def norm(text):
    from num2words import num2words
    text = text.replace('—', ' ').replace('–', ' ').replace('-', ' ').replace('/', ' ')
    text = re.sub(r'\d{1,3}(?:[.,]\d{3})+\b', lambda m: re.sub(r'[.,]', '', m.group()), text)  # 80.000.000 → 80000000
    text = re.sub(r'(\d+):00\b', r'\1', text)  # 6:00 → 6
    text = re.sub(r'(\d+):(\d+)', r'\1 \2', text)  # 6:30 → 6 30
    text = text.replace('%', ' por ciento')
    out = []
    for raw in re.findall(r"[\wáéíóúüñÁÉÍÓÚÜÑ]+", text):
        if raw.isdigit():
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


# --------------------------------------------------------------------------- synthesis
async def speak(text, voice, rate):
    import edge_tts
    for attempt in range(5):
        try:
            chunks = []
            async for message in edge_tts.Communicate(text, voice, rate=rate).stream():
                if message['type'] == 'audio':
                    chunks.append(message['data'])
            if chunks:
                return b''.join(chunks)
        except Exception as error:  # network hiccups
            print(f'retry {attempt + 1} {voice}: {error}', flush=True)
        await asyncio.sleep(2 + attempt * 3)
    raise RuntimeError(f'Could not synthesize with {voice}')


def mp3_to(sr, mp3, fmt='s16le'):
    return subprocess.run(['ffmpeg', '-v', 'error', '-i', 'pipe:0', '-f', fmt, '-ar', str(sr), '-ac', '1', 'pipe:1'],
                          input=mp3, capture_output=True, check=True).stdout


async def render_like_generator(item, level, dest):
    """Same assembly as scripts/generate-escucha-3d-audio.py (pauses, loudnorm, 40k mp3)."""
    rate = RATE[level]
    pause_same = b'\0\0' * int(SR_TTS * (0.35 if level in ('A0', 'A1') else 0.22))
    pause_turn = b'\0\0' * int(SR_TTS * (0.7 if level in ('A0', 'A1') else 0.45))
    pcm = bytearray(b'\0\0' * int(SR_TTS * 0.3))
    last = None
    for line in item['lines']:
        voice = line.get('voice') or item['speakers'][line['s']]['voice']
        if last is not None:
            pcm += pause_turn if line['s'] != last else pause_same
        pcm += mp3_to(SR_TTS, await speak(line['text'], voice, rate))
        last = line['s']
    pcm += b'\0\0' * int(SR_TTS * 0.4)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 's16le', '-ar', str(SR_TTS), '-ac', '1', '-i', 'pipe:0',
                    '-af', 'loudnorm=I=-17:TP=-1.5:LRA=11', '-ar', str(SR_TTS), '-codec:a', 'libmp3lame', '-b:a', '40k', str(dest)],
                   input=bytes(pcm), check=True)


async def references(voices, level):
    refs = {}
    for voice in sorted(voices):
        refs[voice] = [as_array(mp3_to(SR, await speak(text, voice, RATE[level]), 'f32le')) for text in REFERENCE_TEXT]
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

    def voice_refs(self, voices, level):
        import numpy as np
        missing = [v for v in voices if (v, level) not in self.ref_cache]
        if missing:
            for voice, clips in asyncio.run(references(missing, level)).items():
                embs = [self.embed(c) for c in clips]
                mean = np.mean([e for e in embs if e is not None], axis=0)
                self.ref_cache[(voice, level)] = mean / np.linalg.norm(mean)
        return {v: self.ref_cache[(v, level)] for v in voices}

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
        voices = sorted({s['voice'] for s in item['speakers']})
        refs = self.voice_refs(voices, level) if len(voices) > 1 else {}
        for li, line in enumerate(item['lines']):
            entry = {'line': li + 1, 'speaker': item['speakers'][line['s']]['name'], 'voice': item['speakers'][line['s']]['voice'],
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
            if refs:
                if not spans[li]:
                    entry['speaker_ok'] = False
                    entry['speaker_note'] = 'unresolved: no span'
                else:
                    emb = self.embed(audio[int(spans[li][0] * SR):int(spans[li][1] * SR)])
                    if emb is None:
                        entry['speaker_ok'] = False
                        entry['speaker_note'] = 'unresolved: span too short to embed'
                    else:
                        sims = {v: float(np.dot(emb, r)) for v, r in refs.items()}
                        best = max(sims, key=sims.get)
                        others = [s for v, s in sims.items() if v != entry['voice']]
                        margin = sims[entry['voice']] - max(others)
                        entry['similarity'] = {v: round(s, 3) for v, s in sims.items()}
                        entry['closest_voice'] = best
                        entry['speaker_ok'] = best == entry['voice'] and margin >= MARGIN
                        if not entry['speaker_ok']:
                            entry['speaker_note'] = f'closest voice {best}, margin {margin:+.3f}'
            else:
                entry['speaker_ok'] = True
                entry['speaker_note'] = 'one voice in the clip'
            lines.append(entry)

        gaps = [{'word': authored[k], 'heard': k not in missed_targets} for k in sorted(targets)]
        verdict = 'PASS' if (not gap_note and all(g['heard'] for g in gaps) and all(l['words_ok'] and l['speaker_ok'] for l in lines)) else 'HOLD'
        return {'clip': label, 'verdict': verdict, 'gap_note': gap_note, 'gap_words': gaps, 'lines': lines,
                'transcript': ' '.join(heard_tokens), 'authored_words': len(authored), 'heard_words': len(heard_tokens)}


# --------------------------------------------------------------------------- seeded defects
def plural_swap(word):
    return word[:-1] if word.endswith('s') else word + 's'


def seeded_items(items):
    """The seeded defects, fixed before any valid run (BOARD-DECISION-003 §3.1).
    Words, in the first single-voice clip with gaps: on the gap line, the first
    gap word is deleted and the second is swapped for its singular/plural
    minimal pair; the other lines, in order, get (a) a repeat of its last two
    words appended at the line join, (b) one plain word deleted, (c) an article
    swapped for its -s minimal pair (la/las, las/la, los/lo, el/en), (d) the first word
    replaced. Speakers: in the first two-voice clip and the first clip with
    three or more voices, one line is read by another speaker of the clip."""
    import copy
    seeds = []
    single = next((it for it in items if len(it['speakers']) == 1 and it.get('gaps')), None)
    if single:
        broken = copy.deepcopy(single)
        gap_words = re.findall(r'\[([^\]]+)\]', single['gaps'])
        gap_tokens = {t for g in gap_words for t in norm(g)}
        gap_line = next(i for i, l in enumerate(single['lines']) if re.sub(r'[\[\]]', '', single['gaps']).split('.')[0][:20] in l['text'])
        expect, gaps_missed = [], []
        line = broken['lines'][gap_line]
        g0, g1 = gap_words[0], gap_words[1]
        line['text'] = re.sub(rf'\s*\b{re.escape(g0)}\b', '', line['text'], count=1)
        line['text'] = re.sub(rf'\b{re.escape(g1)}\b', plural_swap(g1), line['text'], count=1)
        expect.append({'line': gap_line + 1, 'what': f'gap word «{g0}» deleted, gap word «{g1}» → «{plural_swap(g1)}»'})
        gaps_missed += [norm(g0)[0], norm(g1)[0]]
        others = [i for i in range(len(broken['lines'])) if i != gap_line]

        def plain(text, skip_first=True):
            words = re.findall(r'\b[a-záéíóúñ]{5,}\b', text)
            words = [w for w in words if fold(w) not in gap_tokens and text.count(w) == 1]
            return words[1] if skip_first and len(words) > 1 else (words[0] if words else None)
        ops = ['repeat', 'delete', 'minimal', 'first']
        for li, op in zip(others, ops):
            l = broken['lines'][li]
            if op == 'repeat':
                tail = ' '.join(re.findall(r'[\wáéíóúñÁÉÍÓÚÑ]+', l['text'])[-2:])
                l['text'] = l['text'] + f' {tail.capitalize()}, {tail}.'
                what = f'«{tail}» repeated twice at the line join'
            elif op == 'delete':
                w = plain(l['text'])
                l['text'] = re.sub(rf'\s*\b{re.escape(w)}\b', '', l['text'], count=1)
                what = f'plain word «{w}» deleted'
            elif op == 'minimal':  # a swallowed or added final -s on an article
                pair = next(((a, b) for a, b in ((' la ', ' las '), (' las ', ' la '), (' los ', ' lo '), (' el ', ' en ')) if a in l['text']), None)
                if pair:
                    l['text'] = l['text'].replace(pair[0], pair[1], 1)
                    what = f'article «{pair[0].strip()}» → «{pair[1].strip()}»'
                else:
                    w = plain(l['text'])
                    l['text'] = re.sub(rf'\b{re.escape(w)}\b', plural_swap(w), l['text'], count=1)
                    what = f'plain word «{w}» → «{plural_swap(w)}»'
            else:
                first = re.match(r'\W*([\wáéíóúñÁÉÍÓÚÑ]+)', l['text']).group(1)
                repl = 'Ya' if first.lower() != 'ya' else 'Y'
                l['text'] = l['text'].replace(first, repl, 1)
                what = f'first word «{first}» → «{repl}»'
            expect.append({'line': li + 1, 'what': what})
        seeds.append({'kind': 'words', 'authored': single, 'broken': broken, 'expect': expect, 'gaps_missed': gaps_missed})
    for pick in (lambda it: len(it['speakers']) == 2, lambda it: len(it['speakers']) >= 3):
        clip = next((it for it in items if pick(it)), None)
        if not clip:
            continue
        broken = copy.deepcopy(clip)
        li = next(i for i, l in enumerate(broken['lines']) if len(l['text']) > 40 and i > 0)
        other = next(s for i, s in enumerate(clip['speakers']) if i != broken['lines'][li]['s'])
        broken['lines'][li]['voice'] = other['voice']
        seeds.append({'kind': 'speaker', 'authored': clip, 'broken': broken, 'gaps_missed': [],
                      'expect': [{'line': li + 1, 'what': f'line read by {other["voice"]} instead of {clip["speakers"][clip["lines"][li]["s"]]["voice"]}'}]})
    return seeds


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('game')
    ap.add_argument('level')
    ap.add_argument('--seeded', action='store_true')
    ap.add_argument('--out', default=str(ROOT / 'docs/board/evidence/stt'))
    args = ap.parse_args()
    data = json.loads((CONTENT / args.game / f'{args.level.lower()}.json').read_text())
    items = data['items']
    out = pathlib.Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    checker = Checker()
    report = {'game': args.game, 'level': args.level, 'rule': 'BOARD-DECISION-003', 'models': ['large-v3-turbo (faster-whisper, int8)', 'large-v3 (second model, findings only)', 'Resemblyzer VoiceEncoder'],
              'margin': MARGIN, 'seeded': None, 'clips': []}

    if args.seeded:
        tmp = pathlib.Path('/tmp/stt-seeded')
        tmp.mkdir(exist_ok=True)
        seeded = []
        for n, seed in enumerate(seeded_items(items)):
            dest = tmp / f'seed-{n}.mp3'
            asyncio.run(render_like_generator(seed['broken'], args.level, dest))
            result = checker.check_clip(seed['authored'], args.level, dest, f"seeded-{seed['kind']}-{seed['authored']['id']}")
            found = []
            for exp in seed['expect']:
                line = result['lines'][exp['line'] - 1]
                hit = (not line['words_ok']) if seed['kind'] == 'words' else (not line['speaker_ok'])
                item = {**exp, 'found': hit}
                if seed['kind'] == 'speaker' and 'similarity' in line:
                    sims = line['similarity']
                    item['margin_declared_minus_best_other'] = round(sims[line['voice']] - max(v for k, v in sims.items() if k != line['voice']), 3)
                found.append(item)
            heard = {g['word']: g['heard'] for g in result['gap_words']}
            for word in seed['gaps_missed']:
                found.append({'line': None, 'what': f'gap word «{word}» reported as not heard', 'found': heard.get(word) is False})
            seeded.append({'kind': seed['kind'], 'clip': seed['authored']['id'], 'verdict_on_broken_clip': result['verdict'], 'expected': found,
                           'broken_lines': [l['text'] for l in seed['broken']['lines']], 'detail': result})
            print(f"seeded {seed['kind']} {seed['authored']['id']}: verdict {result['verdict']}, found {[f['found'] for f in found]}", flush=True)
        report['seeded'] = {'all_found': all(f['found'] for s in seeded for f in s['expected']) and all(s['verdict_on_broken_clip'] == 'HOLD' for s in seeded), 'cases': seeded}

    for item in items:
        folder = 'escucha-3d-libre' if args.game in FREE_GAMES else 'escucha-3d'
        mp3 = ROOT / 'public/audio' / folder / f"{args.game}-{args.level.lower()}-{item['id']}.mp3"
        result = checker.check_clip(item, args.level, mp3, item['id'])
        print(f"{item['id']}: {result['verdict']}", flush=True)
        report['clips'].append(result)

    report['tool_valid'] = report['seeded']['all_found'] if report['seeded'] else None
    report['all_pass'] = all(c['verdict'] == 'PASS' for c in report['clips'])
    stem = f'{args.game}-{args.level.lower()}'
    (out / f'{stem}.json').write_text(json.dumps(report, ensure_ascii=False, indent=1) + '\n')
    (out / f'{stem}.md').write_text(markdown(report))
    print(markdown(report))
    # The job is green only if the check is valid (when seeded) and every clip passes.
    return 0 if report['all_pass'] and report['tool_valid'] is not False else 1


def markdown(r):
    lines = [f"# Speech-to-text and speaker check: {r['game']} {r['level']}", '',
             f"Rule: {r['rule']}. Models: {', '.join(r['models'])}. Speaker margin: {r['margin']}.", '']
    if r['seeded']:
        lines += ['## Seeded-defect test', '', f"**All seeded defects found: {'YES' if r['seeded']['all_found'] else 'NO: the check is not valid and proves nothing'}**", '']
        for s in r['seeded']['cases']:
            for e in s['expected']:
                lines.append(f"- {s['kind']} · {s['clip']} line {e['line']}: {e['what']} → {'found' if e['found'] else 'MISSED'}"
                             + (f", margin {e['margin_declared_minus_best_other']:+.3f}" if 'margin_declared_minus_best_other' in e else '') + f" (broken clip verdict {s['verdict_on_broken_clip']})")
        lines.append('')
    lines += ['## Clips', '', '| Clip | Verdict | Gap words heard | Lines with uncleared word findings | Speaker mismatches or unresolved |', '|---|---|---|---|---|']
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
    lines += ['', f"**All clips pass: {'YES' if r['all_pass'] else 'NO'}.** Tool valid (seeded test): {r['tool_valid']}.", '']
    return '\n'.join(lines)


if __name__ == '__main__':
    sys.exit(main())
