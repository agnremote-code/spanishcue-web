#!/usr/bin/env python3
"""Native neural recordings for live-only grammar classes (app/grammar-classroom/live/audio/clips.json).

Runs in GitHub Actions (edge-tts is blocked from the authoring container). Each clip is
rebuilt only when its text, voice or rate changed; the manifest keeps the hashes so the
test suite can verify that the audio matches the transcript the class shows.
"""
import asyncio, array, datetime, hashlib, json, pathlib, ssl, subprocess
import edge_tts
import edge_tts.communicate

ROOT = pathlib.Path(__file__).resolve().parents[1]
CLIPS = ROOT / 'app/grammar-classroom/live/audio/clips.json'
MANIFEST = ROOT / 'app/grammar-classroom/live/audio/manifest.json'
OUT = ROOT / 'public/audio/grammar-live'
edge_tts.communicate._SSL_CTX = ssl.create_default_context()
rows = json.loads(CLIPS.read_text())['clips']
old = {c['id']: c for c in json.loads(MANIFEST.read_text())['clips']} if MANIFEST.exists() else {}
OUT.mkdir(parents=True, exist_ok=True)
clips = []

async def generate(row):
    id, text, voice, rate = row['id'], row['text'], row['voice'], row.get('rate', '+0%')
    path = OUT / f'{id}.mp3'
    digest = hashlib.sha256(text.encode()).hexdigest()
    previous = old.get(id, {})
    valid = path.exists() and previous.get('transcriptSha256') == digest and previous.get('voice') == voice and previous.get('rate') == rate and previous.get('sha256') == hashlib.sha256(path.read_bytes()).hexdigest()
    if not valid:
        for attempt in range(3):
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
                if attempt == 2:
                    raise
                await asyncio.sleep(2)
    probe = json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration:stream=codec_name,sample_rate,channels', '-of', 'json', str(path)]))
    pcm = subprocess.check_output(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 's16le', '-ar', '24000', '-ac', '1', '-'])
    samples = array.array('h', pcm)
    peak = max(abs(x) for x in samples)
    rms = (sum(x * x for x in samples) / len(samples)) ** .5
    duration = float(probe['format']['duration'])
    if peak < 100 or rms < 20 or duration < 8:
        raise ValueError(f'Invalid signal {id}')
    clips.append(dict(id=id, voice=voice, rate=rate, src=f'/audio/grammar-live/{id}.mp3', transcriptSha256=digest, sha256=hashlib.sha256(path.read_bytes()).hexdigest(), durationSeconds=round(duration, 2), codec=probe['streams'][0]['codec_name'], sampleRate=int(probe['streams'][0]['sample_rate']), channels=probe['streams'][0]['channels'], peakPCM=peak, rmsPCM=round(rms, 2)))
    print(f'{id}: {duration:.1f}s {voice} {rate}', flush=True)

async def main():
    for row in rows:
        await generate(row)

asyncio.run(main())
MANIFEST.write_text(json.dumps(dict(producer='Microsoft Edge online speech via edge-tts', synthetic=True, generatedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(), humanListeningQA=False, clips=sorted(clips, key=lambda x: x['id'])), ensure_ascii=False, indent=2) + '\n')
print(f'Validated {len(clips)} recordings.', flush=True)
