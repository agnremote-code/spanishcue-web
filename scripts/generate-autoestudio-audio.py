#!/usr/bin/env python3
"""Generate once, serve static assets. pip install edge-tts==7.2.8; requires ffmpeg.
Uses the live Microsoft catalog, TLS verification and the existing moduleClips export.
Interrupted runs resume only from verified files with matching generation inputs.
"""
import asyncio
import argparse
import subprocess
import datetime
import importlib.util
import json
import pathlib
import ssl
import edge_tts
import edge_tts.communicate
import edge_tts.voices

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/audio/autoestudio'
CACHE = ROOT / '.sites-runtime/autoestudio-audio'
SPEC = importlib.util.spec_from_file_location('validator', ROOT / 'scripts/validate-autoestudio-audio.py')
validator = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(validator)
# Same system-CA pattern as generate-hablar-audio.py, including catalog requests.
edge_tts.communicate._SSL_CTX = ssl.create_default_context()
edge_tts.voices._SSL_CTX = ssl.create_default_context()


def select_voice(tag, catalog):
    locale = tag[:5]
    gender = 'Male' if tag.endswith('-m') else 'Female'
    locales = [locale, 'es-MX', 'es-CO', 'es-AR', 'es-CL', 'es-PE', 'es-UY', 'es-VE']
    for candidate in dict.fromkeys(locales):
        pool = sorted((v for v in catalog if v['Locale'] == candidate
            and v['ShortName'].endswith('Neural')
            and (candidate != 'es-US' or locale == 'es-US')), key=lambda v: v['ShortName'])
        if pool:
            return next((v for v in pool if v['Gender'] == gender), pool[0])['ShortName']
    raise ValueError(f'No native Spanish neural voice for {tag}')


def atomic_json(path, data):
    temporary = path.with_suffix('.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(path)


async def main(jobs=12):
    rows = validator.requests()
    catalog = [v for v in await edge_tts.list_voices() if v['Locale'].startswith('es-')]
    if not catalog:
        raise ValueError('Provider returned no Spanish voices')
    OUT.mkdir(parents=True, exist_ok=True)
    CACHE.mkdir(parents=True, exist_ok=True)
    atomic_json(CACHE / 'voices.json', catalog)
    sem = asyncio.Semaphore(jobs)
    records = {}
    completed = 0

    async def generate(row):
        nonlocal completed
        async with sem:
            key = row['key']
            tag = row.get('voice') or 'es-MX-f'
            voice = select_voice(tag, catalog)
            path = OUT / f'{key}.mp3'
            cache = CACHE / f'{key}.json'
            inputs = dict(text=row['text'], requestedVoice=tag, providerVoice=voice, rate='+0%')
            if path.exists() and cache.exists():
                cached = json.loads(cache.read_text())
                if all(cached.get(k) == v for k, v in inputs.items()):
                    try:
                        measured = await asyncio.to_thread(validator.measure, path)
                        if all(cached.get(k) == v for k, v in measured.items()):
                            records[key] = cached
                            completed += 1
                            return
                    except (ValueError, OSError, RuntimeError, subprocess.CalledProcessError):
                        pass
            for attempt in range(5):
                temporary = CACHE / f'{key}.mp3'
                try:
                    await asyncio.wait_for(edge_tts.Communicate(row['text'], voice, rate='+0%').save(str(temporary)), timeout=90)
                    measured = await asyncio.to_thread(validator.measure, temporary)
                    record = {**inputs, **measured}
                    temporary.replace(path)
                    atomic_json(cache, record)
                    records[key] = record
                    completed += 1
                    if completed % 25 == 0:
                        print(f'{completed}/{len(rows)} generated and decoded', flush=True)
                    return
                except Exception:
                    if attempt == 4:
                        raise
                    await asyncio.sleep(2 ** attempt)
    print(f'Generating {len(rows)} clips using {sorted({select_voice(r.get("voice") or "es-MX-f", catalog) for r in rows})}', flush=True)
    await asyncio.gather(*(generate(row) for row in rows))
    manifest = dict(note='Finite native Spanish neural MP3 assets. No browser speech synthesis.',
        clips={r['key']: f'/audio/autoestudio/{r["key"]}.mp3' for r in rows})
    provenance = dict(producer='Microsoft Edge online speech via edge-tts 7.2.8', synthetic=True,
        generatedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(), humanListeningQA=False,
        voices=catalog, clips={r['key']: records[r['key']] for r in rows})
    validator.validate(ROOT / 'public', rows, manifest, provenance)
    access = json.loads(subprocess.check_output(['node', 'scripts/export-autoestudio-audio.mjs', '--access'], cwd=ROOT))
    atomic_json(ROOT / 'app/autoestudio/audio-access.json', access)
    atomic_json(ROOT / 'app/autoestudio/audio-provenance.json', provenance)
    atomic_json(ROOT / 'app/autoestudio/audio-manifest.json', manifest)
    print(f'Published complete validated manifest: {len(rows)} MP3s', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--jobs", type=int, default=12, choices=range(1, 25))
    asyncio.run(main(parser.parse_args().jobs))
