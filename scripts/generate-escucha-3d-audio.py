#!/usr/bin/env python3
import asyncio, edge_tts
async def main():
  vs = await edge_tts.list_voices()
  print(sorted(v['ShortName'] for v in vs if v['Locale'].startswith('es-')))
  await edge_tts.Communicate('Hola, esto es una prueba.', 'es-AR-ElenaNeural').save('/tmp/t.mp3')
  import os; print(os.path.getsize('/tmp/t.mp3'))
asyncio.run(main())
