#!/usr/bin/env python3
"""Independent full MP3 decode, provenance and curriculum/manifest/files consistency gate."""
import array
import concurrent.futures
import hashlib
import json
import math
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]


def requests():
    return json.loads(subprocess.check_output(['node', 'scripts/export-autoestudio-audio.mjs'], cwd=ROOT))


def measure(path):
    data = path.read_bytes()
    if not data:
        raise ValueError(f'Empty MP3: {path}')
    result = subprocess.run(['ffprobe', '-v', 'error', '-show_entries',
        'format=duration:stream=codec_name,sample_rate,channels', '-of', 'json', str(path)],
        capture_output=True, check=True)
    if result.stderr:
        raise ValueError(f'Corrupt MP3: {path}')
    info = json.loads(result.stdout)
    stream = info['streams'][0]
    duration = float(info['format']['duration'])
    if not math.isfinite(duration) or duration <= 0 or stream['codec_name'] != 'mp3':
        raise ValueError(f'Invalid duration/codec: {path}')
    if not 16000 <= int(stream['sample_rate']) <= 48000 or stream['channels'] not in (1, 2):
        raise ValueError(f'Invalid sample rate/channels: {path}')
    decoded = subprocess.run(['ffmpeg', '-v', 'error', '-xerror', '-i', str(path),
        '-f', 's16le', '-ar', '24000', '-ac', '1', '-'], capture_output=True, check=True)
    if decoded.stderr or not decoded.stdout:
        raise ValueError(f'Corrupt/empty decode: {path}')
    samples = array.array('h', decoded.stdout)
    if sys.byteorder != 'little':
        samples.byteswap()
    peak = max(abs(x) for x in samples)
    rms = math.sqrt(sum(x*x for x in samples) / len(samples))
    if peak < 100 or rms < 20:
        raise ValueError(f'Silent MP3: {path}')
    return dict(sha256=hashlib.sha256(data).hexdigest(), bytes=len(data),
        durationSeconds=duration, codec=stream['codec_name'], sampleRate=int(stream['sample_rate']),
        channels=stream['channels'], peakPCM=peak, rmsPCM=round(rms, 2))


def validate(asset_root, rows, manifest, provenance, workers=6):
    required = {row['key']: row for row in rows}
    clips = manifest['clips']
    if not required or not clips:
        raise ValueError('Empty curriculum/manifest')
    if set(required) != set(clips) or set(required) != set(provenance['clips']):
        raise ValueError('Curriculum/manifest/provenance keys differ')
    expected = {f'{key}.mp3' for key in required}
    directory = asset_root / 'audio/autoestudio'
    if {p.name for p in directory.glob('*.mp3')} != expected:
        raise ValueError('Missing or orphan MP3 files')
    catalog = {v['ShortName']: v for v in provenance['voices']}

    def check(key):
        row = required[key]
        if clips[key] != f'/audio/autoestudio/{key}.mp3':
            raise ValueError(f'Invalid mapping: {key}')
        record = provenance['clips'][key]
        if record['text'] != row['text'] or record['requestedVoice'] != (row.get('voice') or 'es-MX-f'):
            raise ValueError(f'Stale generation input: {key}')
        voice = catalog.get(record['providerVoice'])
        locale = record['requestedVoice'][:5]
        if not voice or not voice['Locale'].startswith('es-') or not voice['ShortName'].endswith('Neural'):
            raise ValueError(f'Invalid provider voice: {key}')
        if voice['Locale'] == 'es-US' and locale != 'es-US':
            raise ValueError(f'Forbidden US fallback: {key}')
        if any(v['Locale'] == locale for v in catalog.values()) and voice['Locale'] != locale:
            raise ValueError(f'Exact locale ignored: {key}')
        gender = 'Male' if record['requestedVoice'].endswith('-m') else 'Female'
        if any(v['Locale'] == voice['Locale'] and v['Gender'] == gender for v in catalog.values()) and voice['Gender'] != gender:
            raise ValueError(f'Exact gender ignored: {key}')
        actual = measure(directory / f'{key}.mp3')
        for field, value in actual.items():
            if record.get(field) != value:
                raise ValueError(f'Audio {field} mismatch: {key}')
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
        list(pool.map(check, required))
    return len(required)


if __name__ == '__main__':
    root = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'public'
    manifest = json.loads((ROOT / 'app/autoestudio/audio-manifest.json').read_text())
    provenance = json.loads((ROOT / 'app/autoestudio/audio-provenance.json').read_text())
    count = validate(root, requests(), manifest, provenance)
    print(f'Validated {count} Autoestudio MP3s: coverage, decoding, duration, codec, sample rate, RMS, peak, SHA-256')
