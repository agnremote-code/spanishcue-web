#!/usr/bin/env python3
"""Build-time native Spanish neural recordings. edge-tts==7.2.8, ffmpeg required.

Inputs live in server-only curriculum JSON. Reuses the repository's verified TLS
speech pipeline; generated MP3s are finite assets, never browser speech synthesis.
Only resume when voice, transcript hash, audio hash and word metadata all match.
"""
import asyncio, array, datetime, hashlib, json, pathlib, ssl, subprocess
import edge_tts
import edge_tts.communicate

ROOT=pathlib.Path(__file__).resolve().parents[1]
CONTENT=ROOT/'app/grammar-classroom/content'
META=ROOT/'docs/audits/grammar-audio-words'
MANIFEST=ROOT/'app/grammar-classroom/audio-manifest.json'
edge_tts.communicate._SSL_CTX=ssl.create_default_context()
rows={**json.loads((CONTENT/'legacy-contexts.json').read_text()),**json.loads((CONTENT/'new-lessons.json').read_text())}
old={str(c['id']):c for c in json.loads(MANIFEST.read_text())['clips']} if MANIFEST.exists() else {}
META.mkdir(parents=True,exist_ok=True)
sem=asyncio.Semaphore(3)
clips=[]
async def generate(id,lesson):
 async with sem:
  text=lesson['listening']['transcript'];voice=lesson['listening']['voice']
  src=f'/audio/{"grammar-free" if id in ["40","41"] else "grammar-classroom"}/{id}.mp3'
  path=ROOT/'public'/src.lstrip('/');path.parent.mkdir(parents=True,exist_ok=True)
  boundary=META/f'{id}.json';digest=hashlib.sha256(text.encode()).hexdigest();previous=old.get(id,{})
  valid=path.exists() and boundary.exists() and previous.get('transcriptSha256')==digest and previous.get('voice')==voice and previous.get('sha256')==hashlib.sha256(path.read_bytes()).hexdigest()
  if not valid:
   for attempt in range(3):
    try:
     data=bytearray();bounds=[]
     async for chunk in edge_tts.Communicate(text,voice,rate='+0%',boundary='WordBoundary').stream():
      if chunk['type']=='audio':data.extend(chunk['data'])
      elif chunk['type']=='WordBoundary':bounds.append({k:chunk[k] for k in ['offset','duration','text']})
     if not data or not bounds:raise ValueError('Empty speech output')
     path.write_bytes(data);boundary.write_text(json.dumps(bounds,ensure_ascii=False)+'\n');break
    except Exception:
     if attempt==2:raise
     await asyncio.sleep(1)
  probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',str(path)]))
  pcm=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-f','s16le','-ar','24000','-ac','1','-'])
  samples=array.array('h',pcm);peak=max(abs(x) for x in samples);rms=(sum(x*x for x in samples)/len(samples))**.5
  duration=float(probe['format']['duration'])
  if peak<100 or rms<20 or duration<10:raise ValueError(f'Invalid signal {id}')
  clips.append(dict(id=int(id),voice=voice,src=src,transcriptSha256=digest,sha256=hashlib.sha256(path.read_bytes()).hexdigest(),durationSeconds=duration,codec=probe['streams'][0]['codec_name'],sampleRate=int(probe['streams'][0]['sample_rate']),channels=probe['streams'][0]['channels'],peakPCM=peak,rmsPCM=round(rms,2),wordMetadata=f'docs/audits/grammar-audio-words/{id}.json'))
  print(f'{id}: {duration:.1f}s {voice}',flush=True)
async def main():await asyncio.gather(*(generate(id,x) for id,x in rows.items()))
asyncio.run(main())
if len({x['sha256'] for x in clips})!=len(rows):raise ValueError('Duplicate audio')
MANIFEST.write_text(json.dumps(dict(producer='Microsoft Edge online speech via edge-tts 7.2.8',synthetic=True,rate='+0%',generatedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),humanListeningQA=False,transcriptValidation='Exact generation inputs and service word metadata; no independent transcription or human pronunciation verification claimed.',clips=sorted(clips,key=lambda x:x['id'])),ensure_ascii=False,indent=2)+'\n')
print(f'Validated {len(clips)} unique recordings.',flush=True)
