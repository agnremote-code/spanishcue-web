#!/usr/bin/env python3
"""Record every Autoestudio clip as an MP3 so students never depend on the
voices installed in their phone (many Android phones and in-app browsers have
no Spanish voice at all, and the lesson stayed silent).

Voices are the owner's choice for the whole site (2026-11-12/13): every woman
is Emma, every man is Florian. The `voice` tag in the content (es-CO-f, …)
stays as the speaker's identity; a small pitch shift per tag keeps two women or
two men of one dialogue apart.

  SSL_CERT_FILE=/root/.ccr/ca-bundle.crt python3 scripts/generate-autoestudio-audio.py

Only missing or changed clips are recorded. Files go to
public/audio/autoestudio/<key>.mp3 (a public prefix, see
app/access-policy.ts) and the index to app/autoestudio/audio-manifest.json.
Requires edge-tts, ffmpeg and node."""
import asyncio, hashlib, json, pathlib, re, ssl, subprocess, sys
import edge_tts

edge_tts.communicate._SSL_CTX = ssl.create_default_context()

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/audio/autoestudio'
MANIFEST = ROOT / 'app/autoestudio/audio-manifest.json'
STATE = ROOT / 'scripts/autoestudio-audio-state.json'
VERSION = 1
ENGINE = {'f': 'en-US-EmmaMultilingualNeural', 'm': 'de-DE-FlorianMultilingualNeural'}
RATE = {'a1': '-12%', 'a2': '-8%', 'b1': '-4%', 'b2': '+0%', 'c1': '+0%', 'c2': '+0%'}
REGIONS = ['MX', 'ES', 'AR', 'CO', 'CL', 'PE', 'UY', 'CU', 'VE', 'US', 'GQ']
SHIFT = {'f': [0, -8, 8, -14, 14, -20, 20], 'm': [0, -5, 5, -9, 9, -13, 13]}


def cast(voice):
    _, region, gender = voice.split('-')
    options = SHIFT[gender]
    return ENGINE[gender], f'{options[REGIONS.index(region) % len(options)]:+d}Hz'


def spoken(text):
    """What the voice should say: no markup, no syllable notes, no drill symbols."""
    text = re.sub(r'[*_`]', '', text)
    if '→' in text:
        left, right = text.split('→', 1)
        plain = re.sub(r'\(.*?\)', '', right)
        if re.search(r'\w-\w', plain) and not re.search(r'\w \w+ \w+ \w', plain):
            text = left                           # «sus abuelos → su-sa-bue-los»: a syllable note
        else:                                     # «Ven.» → Me dijo que viniera: two sentences
            text = re.sub(r'\s*→\s*', lambda m: ' ' if re.search(r'[.!?»:]\s*$', text[:m.start()]) else ', ', text)
    text = re.sub(r'[↗↘↑↓]', '', text)
    text = re.sub(r'\s*/\s*', ', ', text)         # «grande / pequeño»
    text = text.replace('…', '...')
    return re.sub(r'\s+', ' ', text).strip()


def compact(mp3: bytes) -> bytes:
    """Trim the long silence Edge leaves after each clip and encode for speech
    (32 kbps mono): 5,000+ clips stay small in the repository and on mobile data."""
    return subprocess.run(['ffmpeg', '-v', 'error', '-i', 'pipe:0',
                           '-af', 'areverse,silenceremove=start_periods=1:start_silence=0.2:start_threshold=-50dB,areverse',
                           '-ar', '24000', '-ac', '1', '-codec:a', 'libmp3lame', '-b:a', '32k', '-f', 'mp3', 'pipe:1'],
                          input=mp3, capture_output=True, check=True).stdout


def digest(clip):
    source = f"{VERSION}|{RATE[clip['level']]}|{'|'.join(cast(clip['voice']))}|{spoken(clip['text'])}"
    return hashlib.sha256(source.encode()).hexdigest()[:12]


def path_of(key):
    return OUT / f'{key}.mp3'


async def speak(text, voice, rate, pitch):
    for attempt in range(6):
        try:
            chunks = []
            async for message in edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).stream():
                if message['type'] == 'audio':
                    chunks.append(message['data'])
            data = b''.join(chunks)
            if len(data) > 1500:
                return data
        except Exception as error:  # network hiccups: retry
            print(f'retry {attempt + 1}: {error}', flush=True)
        await asyncio.sleep(2 + attempt * 4)
    raise RuntimeError(f'Could not synthesize: {text[:60]}')


async def main():
    clips = json.loads(subprocess.run(['node', 'scripts/autoestudio-audio-clips.mjs'], cwd=ROOT, capture_output=True, check=True, text=True).stdout)
    state = json.loads(STATE.read_text()) if STATE.exists() else {}
    sem = asyncio.Semaphore(int(sys.argv[1]) if len(sys.argv) > 1 else 8)
    done = 0

    async def record(clip):
        nonlocal done
        async with sem:
            voice, pitch = cast(clip['voice'])
            data = await speak(spoken(clip['text']), voice, RATE[clip['level']], pitch)
            dest = path_of(clip['key'])
            dest.write_bytes(await asyncio.to_thread(compact, data))
            state[clip['key']] = digest(clip)
            done += 1
            if done % 100 == 0:
                print(f'{done} recorded', flush=True)

    OUT.mkdir(parents=True, exist_ok=True)
    todo = [clip for clip in clips if state.get(clip['key']) != digest(clip) or not path_of(clip['key']).exists()]
    print(f'{len(clips)} clips, {len(todo)} to record', flush=True)
    results = await asyncio.gather(*(record(clip) for clip in todo), return_exceptions=True)
    failures = [result for result in results if isinstance(result, Exception)]
    wanted = {clip['key'] for clip in clips}
    for file in OUT.glob('*.mp3'):
        if file.stem not in wanted:
            file.unlink()
    ready = sorted(key for key in wanted if path_of(key).exists())
    STATE.write_text(json.dumps({key: state[key] for key in ready if key in state}, ensure_ascii=False, sort_keys=True, separators=(',', ':')) + '\n')
    MANIFEST.write_text(json.dumps({
        'note': 'Recorded MP3s for Autoestudio, keyed by audioKey(text, voice). Built by scripts/generate-autoestudio-audio.py; a clip missing here falls back to the browser voice.',
        'clips': {key: f'/audio/autoestudio/{key}.mp3' for key in ready},
    }, separators=(',', ':')) + '\n')
    print(f'{len(ready)}/{len(clips)} clips ready, {len(failures)} failed', flush=True)
    for failure in failures[:10]:
        print(failure, flush=True)
    if failures:
        sys.exit(1)


asyncio.run(main())
