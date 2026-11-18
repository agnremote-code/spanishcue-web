#!/usr/bin/env python3
"""Recordings for the Clase de nivelación (app/clase-de-nivelacion/content.mjs → public/audio/nivelacion).

Native male Edge voices (see content.mjs). A clip is rebuilt only when its text, voice or rate
changed; the manifest keeps the hashes so the test can check that audio and text match.
Run: SSL_CERT_FILE=<ca bundle> python3 scripts/generate-nivelacion-audio.py
"""
import asyncio, array, hashlib, json, pathlib, ssl, subprocess
import edge_tts
import edge_tts.communicate

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/audio/nivelacion'
MANIFEST = ROOT / 'app/clase-de-nivelacion/audio-manifest.json'
edge_tts.communicate._SSL_CTX = ssl.create_default_context()
rows = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', "import {clips} from './app/clase-de-nivelacion/content.mjs';console.log(JSON.stringify(clips()));"], cwd=ROOT))
old = {c['id']: c for c in json.loads(MANIFEST.read_text())['clips']} if MANIFEST.exists() else {}
OUT.mkdir(parents=True, exist_ok=True)
done = []

async def generate(row):
    id, text, voice, rate = row['id'], row['text'], row['voice'], row['rate']
    path = OUT / f'{id}.mp3'
    digest = hashlib.sha256(text.encode()).hexdigest()
    before = old.get(id, {})
    valid = path.exists() and before.get('textSha256') == digest and before.get('voice') == voice and before.get('rate') == rate and before.get('sha256') == hashlib.sha256(path.read_bytes()).hexdigest()
    if not valid:
        for attempt in range(4):
            try:
                data = bytearray()
                async for chunk in edge_tts.Communicate(text, voice, rate=rate).stream():
                    if chunk['type'] == 'audio':
                        data.extend(chunk['data'])
                if not data:
                    raise ValueError('Empty speech output')
                path.write_bytes(data)
                break
            except Exception:
                if attempt == 3:
                    raise
                await asyncio.sleep(2 + attempt * 2)
    pcm = subprocess.check_output(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 's16le', '-ar', '24000', '-ac', '1', '-'])
    samples = array.array('h', pcm)
    peak = max(abs(x) for x in samples)
    duration = len(samples) / 24000
    if peak < 100 or duration < 0.3:
        raise ValueError(f'Invalid signal {id}')
    done.append(dict(id=id, text=text, voice=voice, rate=rate, textSha256=digest, sha256=hashlib.sha256(path.read_bytes()).hexdigest(), durationSeconds=round(duration, 2)))
    print(f'{id}: {duration:.1f}s {voice}', flush=True)

async def main():
    gate = asyncio.Semaphore(4)
    async def one(row):
        async with gate:
            await generate(row)
    await asyncio.gather(*(one(row) for row in rows))

asyncio.run(main())
wanted = {row['id'] for row in rows}
for path in OUT.glob('*.mp3'):
    if path.stem not in wanted:
        path.unlink()
MANIFEST.write_text(json.dumps(dict(producer='Microsoft Edge online speech via edge-tts', synthetic=True, humanListeningQA=False, clips=sorted(done, key=lambda c: c['id'])), ensure_ascii=False, indent=1) + '\n')
print(f'Validated {len(done)} recordings.', flush=True)
