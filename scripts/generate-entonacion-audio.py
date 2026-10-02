#!/usr/bin/env python3
"""Finite build-time intonation rehearsal assets; never runtime TTS.
Requires edge-tts==7.2.8, praat-parselmouth==0.4.7, numpy, ffmpeg.
Preserves service word metadata, then replaces the voiced pitch tier using
explicit authored Hz anchors. Same-word A/B clips preserve timing and segments.
These are schematic synthetic contrasts, not native emotional performances.
"""
import asyncio, datetime, hashlib, json, pathlib, ssl, subprocess, array
import edge_tts
import edge_tts.communicate
import numpy as np
import parselmouth
from parselmouth.praat import call
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'public/audio/la-entonacion-cambia-todo'
WORDS=ROOT/'app/la-entonacion-cambia-todo/audio-words'
CACHE=ROOT/'.sites-runtime/entonacion-audio'
MANIFEST=ROOT/'app/la-entonacion-cambia-todo/audio-manifest.json'
VOICE='es-AR-TomasNeural'
edge_tts.communicate._SSL_CTX=ssl.create_default_context()
source=subprocess.check_output(['node','--input-type=module','-e',"import {LEVELS,contentFor} from './app/la-entonacion-cambia-todo/levels.mjs';console.log(JSON.stringify(LEVELS.flatMap(l=>contentFor(l).activities)));"],cwd=ROOT,text=True)
rows=json.loads(source)
for directory in [OUT,WORDS,CACHE]:directory.mkdir(parents=True,exist_ok=True)
sem=asyncio.Semaphore(3)
async def base(row):
 async with sem:
  path=CACHE/(row['clip']+'.mp3');metadata=WORDS/(row['clip']+'.words.json')
  if path.exists() and metadata.exists():return
  for attempt in range(3):
   try:
    data=bytearray();bounds=[]
    async for chunk in edge_tts.Communicate(row['text'],VOICE,rate='+0%',boundary='WordBoundary').stream():
     if chunk['type']=='audio':data.extend(chunk['data'])
     elif chunk['type']=='WordBoundary':bounds.append({k:chunk[k] for k in ['offset','duration','text']})
    if not data or not bounds:raise ValueError('empty synthesis')
    path.write_bytes(data);metadata.write_text(json.dumps(bounds,ensure_ascii=False));print(row['clip'],flush=True);return
   except Exception:
    if attempt==2:raise
    await asyncio.sleep(1)
async def main():await asyncio.gather(*(base(row) for row in rows))
asyncio.run(main())
clips=[]
for row in rows:
 raw=CACHE/(row['clip']+'.wav')
 subprocess.run(['ffmpeg','-v','error','-y','-i',str(CACHE/(row['clip']+'.mp3')),'-ar','24000','-ac','1',str(raw)],check=True)
 sound=parselmouth.Sound(str(raw));pitch=sound.to_pitch(time_step=.01,pitch_floor=65,pitch_ceiling=350)
 voiced=pitch.xs()[pitch.selected_array['frequency']>0]
 if len(voiced)<3:raise ValueError('No voiced span')
 start=float(voiced[0]);end=float(voiced[-1]);
 for clip_id,prosody in [(row['clip'],row['prosody'])]+([(row['secondClip'],row['secondProsody'])] if row.get('secondClip') else []):
  manipulation=call(sound,'To Manipulation',.01,65,350)
  tier=call('Create PitchTier','intonation',0,sound.duration)
  times=np.linspace(start,end,len(prosody['anchors']))
  # Smoothly interpolate the authored macrocontour without changing segment
  # timing or formants. This is a schematic rehearsal model.
  for t in np.linspace(start,end,max(8,round((end-start)/.01))):
   hz=float(np.interp(t,times,prosody['anchors']))
   call(tier,'Add point',float(t),hz)
  call([tier,manipulation],'Replace pitch tier')
  edited=call(manipulation,'Get resynthesis (overlap-add)')
  wave=CACHE/(clip_id+'-edited.wav');edited.save(str(wave),'WAV')
  path=OUT/(clip_id+'.mp3')
  subprocess.run(['ffmpeg','-v','error','-y','-i',str(wave),'-ar','24000','-ac','1','-codec:a','libmp3lame','-b:a','96k',str(path)],check=True)
  data=path.read_bytes();probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',str(path)]))
  pcm=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-f','s16le','-ar','24000','-ac','1','-']);samples=array.array('h',pcm);peak=max(abs(x) for x in samples);rms=(sum(x*x for x in samples)/len(samples))**.5
  if peak<100 or rms<20:raise ValueError('Silent clip')
  decoded=parselmouth.Sound(str(wave)).to_pitch(time_step=.01,pitch_floor=65,pitch_ceiling=350)
  f0=decoded.selected_array['frequency'];f0=f0[f0>0]
  clips.append(dict(id=clip_id,text=row['text'],src=f'/audio/la-entonacion-cambia-todo/{clip_id}.mp3',status='generated',sha256=hashlib.sha256(data).hexdigest(),durationSeconds=float(probe['format']['duration']),codec='mp3',sampleRate=24000,channels=1,peakPCM=peak,rmsPCM=round(rms,2),wordMetadata=f'audio-words/{row["clip"]}.words.json',delivery=prosody['delivery'],pitchAnchorsHz=prosody['anchors'],voicedSpanSeconds=[start,end],measuredPitchRangeHz=[round(float(f0.min()),2),round(float(f0.max()),2)],edit='Praat PSOLA replacement pitch tier; same segments and duration for paired takes',sourceClip=row['clip']))
if len(set(c['sha256'] for c in clips))!=len(clips):raise ValueError('Duplicate clips')
MANIFEST.write_text(json.dumps(dict(voice=VOICE,locale='es-AR',producer='Microsoft Edge edge-tts 7.2.8 + Praat PSOLA via praat-parselmouth 0.4.7',synthetic=True,generatedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),humanListeningQA=False,pedagogicalScope='Schematic rehearsal contours; contextual interpretations are hypotheses. Teacher models extend fine-grained stance, irony, focus and parenthetical tone.',transcriptValidation='Exact generation input and service word metadata, not independent transcription.',clips=clips),ensure_ascii=False,indent=2)+'\n')
print(f'Validated {len(clips)} finite assets; no human listening QA claimed.')
