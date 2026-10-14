#!/usr/bin/env python3
import asyncio, os, traceback, edge_tts
async def main():
  try:
    vs = await edge_tts.list_voices()
    print(sorted(v['ShortName'] for v in vs if v['Locale'].startswith('es-')))
  except Exception: traceback.print_exc()
  try:
    await edge_tts.Communicate('Hola, esto es una prueba.', 'es-AR-ElenaNeural').save('/tmp/t.mp3')
    print('size', os.path.getsize('/tmp/t.mp3'))
  except Exception: traceback.print_exc()
asyncio.run(main())
