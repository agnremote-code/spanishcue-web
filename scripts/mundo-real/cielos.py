"""Downloads the light photos (HDRI) of the realistic worlds from Poly Haven (CC0)
and writes them 512 px wide into public/mundo-real/<name>_512.hdr.

  python3 scripts/mundo-real/cielos.py [name ...]
"""
import json, sys, urllib.request
from pathlib import Path
import numpy as np

OUT = Path(__file__).resolve().parents[2] / 'public' / 'mundo-real'
SKIES = ['canary_wharf', 'shanghai_bund']

def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'texture-fetch'}), timeout=120).read()

def read_hdr(data):
    end = data.index(b'\n\n') + 2
    line = data.index(b'\n', end)
    parts = data[end:line].split()
    height, width = int(parts[1]), int(parts[3])
    pos = line + 1
    rgbe = np.zeros((height, width, 4), np.uint8)
    for y in range(height):
        assert data[pos] == 2 and data[pos + 1] == 2, 'only RLE scanlines'
        pos += 4
        for channel in range(4):
            x = 0
            while x < width:
                count = data[pos]; pos += 1
                if count > 128:
                    count -= 128; rgbe[y, x:x + count, channel] = data[pos]; pos += 1
                else:
                    rgbe[y, x:x + count, channel] = np.frombuffer(data, np.uint8, count, pos); pos += count
                x += count
    scale = np.ldexp(1.0, rgbe[..., 3].astype(np.int32) - 136)
    return rgbe[..., :3].astype(np.float64) * scale[..., None]

def write_hdr(path, rgb):
    height, width, _ = rgb.shape
    peak = np.maximum(rgb.max(axis=2), 1e-32)
    mantissa, exponent = np.frexp(peak)
    scale = mantissa * 256.0 / peak
    out = np.zeros((height, width, 4), np.uint8)
    out[..., :3] = np.clip(rgb * scale[..., None], 0, 255).astype(np.uint8)
    out[..., 3] = np.where(peak > 1e-31, exponent + 128, 0).astype(np.uint8)
    path.write_bytes(b'#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n' + f'-Y {height} +X {width}\n'.encode() + out.tobytes())

def main(names):
    for name in names:
        files = json.loads(fetch(f'https://api.polyhaven.com/files/{name}'))
        rgb = read_hdr(fetch(files['hdri']['1k']['hdr']['url']))
        height, width, _ = rgb.shape
        small = rgb.reshape(height // 2, 2, width // 2, 2, 3).mean(axis=(1, 3))
        write_hdr(OUT / f'{name}_512.hdr', small)
        print(name, small.shape, (OUT / f'{name}_512.hdr').stat().st_size // 1024, 'KB')

if __name__ == '__main__':
    main(sys.argv[1:] or SKIES)
