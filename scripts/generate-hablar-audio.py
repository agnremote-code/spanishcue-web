#!/usr/bin/env python3
"""Finite build-time speech assets; pip install edge-tts==7.2.8. Requires ffmpeg.
No runtime synthesis. TLS verification stays enabled using the system CA store.
The chopped B versions insert 320ms pauses at service-reported word boundaries;
they are pedagogical edits, not accent samples or natural alternative prosody.
"""
import asyncio, datetime, hashlib, json, pathlib, ssl, subprocess, array, sys
import edge_tts
import edge_tts.communicate
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'public/audio/hablar-sin-cortar'
WORD_DIR=ROOT/'app/hablar-sin-cortar/audio-words'
MANIFEST=ROOT/'app/hablar-sin-cortar/audio-manifest.json'
VOICE='es-AR-TomasNeural'
edge_tts.communicate._SSL_CTX=ssl.create_default_context()
source=subprocess.check_output(['node','--input-type=module','-e',"import {LEVELS,contentFor} from './app/hablar-sin-cortar/levels.mjs';console.log(JSON.stringify(LEVELS.flatMap(l=>contentFor(l).activities.map(a=>({id:a.clip,text:a.text,second:a.secondClip})))));"],cwd=ROOT,text=True)
rows=json.loads(source)
OUT.mkdir(parents=True,exist_ok=True)
WORD_DIR.mkdir(parents=True,exist_ok=True)
sem=asyncio.Semaphore(3)
async def generate(row):
 async with sem:
  path=OUT/(row['id']+'.mp3'); boundary_path=WORD_DIR/(row['id']+'.words.json')
  # Resume only when both complete output and metadata exist.
  if not path.exists() or not boundary_path.exists():
   for attempt in range(3):
    try:
     data=bytearray(); bounds=[]
     async for chunk in edge_tts.Communicate(row['text'],VOICE,rate='+0%',boundary='WordBoundary').stream():
      if chunk['type']=='audio':data.extend(chunk['data'])
      elif chunk['type']=='WordBoundary':bounds.append({k:chunk[k] for k in ['offset','duration','text']})
     if not data or not bounds:raise ValueError('empty audio or boundaries')
     path.write_bytes(data);boundary_path.write_text(json.dumps(bounds,ensure_ascii=False));break
    except Exception:
     if attempt==2:raise
     await asyncio.sleep(1)
  if row.get('second'):
   bounds=json.loads(boundary_path.read_text())
   pcm=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-f','s16le','-ar','24000','-ac','1','-'])
   cuts=[]
   for i,b in enumerate(bounds[:-1]):
    end=(b['offset']+b['duration'])/1e7;start=bounds[i+1]['offset']/1e7
    cuts.append(max(0,min(len(pcm),round((end+start)/2*24000)*2)))
   body=bytearray();last=0
   for cut in cuts:body.extend(pcm[last:cut]);body.extend(bytes(round(.32*24000)*2));last=cut
   body.extend(pcm[last:])
   subprocess.run(['ffmpeg','-v','error','-y','-f','s16le','-ar','24000','-ac','1','-i','pipe:0','-codec:a','libmp3lame','-b:a','96k',str(OUT/(row['second']+'.mp3'))],input=body,check=True)
  print(row['id'],flush=True)
async def main():await asyncio.gather(*(generate(r) for r in rows))
asyncio.run(main())
clips=[]
for row in rows:
 for clip_id,edited in [(row['id'],False)]+([(row['second'],True)] if row.get('second') else []):
  path=OUT/(clip_id+'.mp3');data=path.read_bytes()
  probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',str(path)]))
  pcm=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-f','s16le','-ar','24000','-ac','1','-'])
  samples=array.array('h',pcm);peak=max(abs(x) for x in samples);rms=(sum(x*x for x in samples)/len(samples))**.5
  if peak<100 or rms<20:raise ValueError(f'Silent audio: {clip_id}')
  clips.append(dict(id=clip_id,text=row['text'],src=f'/audio/hablar-sin-cortar/{clip_id}.mp3',status='generated',sha256=hashlib.sha256(data).hexdigest(),durationSeconds=float(probe['format']['duration']),codec=probe['streams'][0]['codec_name'],sampleRate=int(probe['streams'][0]['sample_rate']),channels=probe['streams'][0]['channels'],peakPCM=peak,rmsPCM=round(rms,2),wordMetadata=f'audio-words/{row["id"]}.words.json',edit='320ms inserted pauses between reported word boundaries' if edited else None,sourceClip=row['id'] if edited else None))
if len(set(c['sha256'] for c in clips))!=len(clips):raise ValueError('Accidental duplicate hash')
MANIFEST.write_text(json.dumps(dict(voice=VOICE,locale='es-AR',rate='+0%',producer='Microsoft Edge online speech via edge-tts 7.2.8',synthetic=True,generatedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),humanListeningQA=False,transcriptValidation='Exact generation inputs and service word metadata; not independent speech transcription or human pronunciation verification.',clips=clips),ensure_ascii=False,indent=2)+'\n')
print(f'Validated {len(clips)} clips; no human listening QA claimed.')
