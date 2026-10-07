#!/usr/bin/env python3
"""Build original synthetic Spanish scene audio. Requires edge-tts 7.2.8,
numpy, praat-parselmouth 0.4.7 and ffmpeg. No runtime synthesis or secrets.
Singer uses PSOLA on voiced spans over an original note sequence; this is a
synthetic sung rehearsal, not a human performance. Others keep native prosody.
"""
import asyncio, array, datetime, hashlib, json, pathlib, ssl, subprocess
import edge_tts, edge_tts.communicate
import numpy as np
import parselmouth
from parselmouth.praat import call
ROOT=pathlib.Path(__file__).resolve().parents[1]
DATA=json.loads((ROOT/'app/the-sound-map/content.json').read_text())
OUT=ROOT/'public/audio/the-sound-map';OUT.mkdir(parents=True,exist_ok=True)
CACHE=ROOT/'.sites-runtime/sound-map-audio';CACHE.mkdir(parents=True,exist_ok=True)
edge_tts.communicate._SSL_CTX=ssl.create_default_context()
SR=24000
sem=asyncio.Semaphore(3)
def command(args,**kw):return subprocess.check_output(args,**kw)
def melody(pcm):
 sound=parselmouth.Sound(pcm,sampling_frequency=SR)
 manipulation=call(sound,'To Manipulation',.01,60,500)
 tier=call('Create PitchTier','melody',0,sound.duration)
 notes=[220,246.94,261.63,329.63,293.66,261.63,246.94,220]
 for t in np.arange(.02,sound.duration,.32):call(tier,'Add point',float(t),notes[int(t/.32)%len(notes)])
 call([tier,manipulation],'Replace pitch tier')
 return np.asarray(call(manipulation,'Get resynthesis (overlap-add)').values[0])
def ambient(kind,n):
 t=np.arange(n)/SR;rng=np.random.default_rng(7);bed=np.zeros(n)
 if kind=='taxi':bed=.006*np.sin(2*np.pi*65*t)+.003*rng.normal(size=n)
 if kind=='park':
  for at in np.arange(.2,n/SR,3.7):
   idx=(t>=at)&(t<at+.18);local=t[idx]-at;bed[idx]+=.012*np.sin(2*np.pi*(1800*local+900*local**2))*np.sin(np.pi*local/.18)**2
 if kind=='balcony':bed=.002*rng.normal(size=n)
 if kind in ['singer','rooftop']:
  notes=[220,261.63,329.63,293.66] if kind=='singer' else [130.81,164.81,196,164.81]
  for j,at in enumerate(np.arange(0,n/SR,.64)):
   idx=(t>=at)&(t<at+.5);local=t[idx]-at;bed[idx]+=.013*np.sin(2*np.pi*notes[j%4]*local)*np.exp(-local*8)
 if kind=='vendor':bed=.003*np.sin(2*np.pi*110*t)
 return bed
async def clip(level,scene):
 async with sem:
  uid=f'{level}-{scene["id"]}';pieces=[];rate='-18%' if level=='A0' else '-10%' if level=='A1' else '-4%' if level=='A2' else '+0%'
  for i,segment in enumerate(scene['segments']):
   digest=hashlib.sha256(json.dumps([segment,rate],sort_keys=True).encode()).hexdigest()[:16]
   cache=CACHE/f'{digest}.mp3'
   if not cache.exists():
    for attempt in range(3):
     try:
      await edge_tts.Communicate(segment['text'],segment['voice'],rate=rate).save(str(cache));break
     except Exception:
      if attempt==2:raise
      await asyncio.sleep(1)
   raw=command(['ffmpeg','-v','error','-i',str(cache),'-f','f32le','-ar',str(SR),'-ac','1','-'])
   pcm=np.frombuffer(raw,dtype=np.float32).astype(np.float64)
   if scene['id']=='singer':pcm=melody(pcm)
   pieces.extend([pcm,np.zeros(int(SR*(.45 if level in ['A0','A1'] else .23)))])
  dry=np.concatenate(pieces)
  bed=ambient(scene['id'],len(dry));mix=dry+bed
  peak=np.max(np.abs(mix));mix=mix*(.88/max(peak,.01))
  dest=OUT/f'{uid}.mp3'
  subprocess.run(['ffmpeg','-v','error','-y','-f','f32le','-ar',str(SR),'-ac','1','-i','pipe:0','-codec:a','libmp3lame','-b:a','96k',str(dest)],input=mix.astype(np.float32).tobytes(),check=True)
  # Clean speech mode gives advanced learners an accessible alternative to the ambience.
  clean=OUT/f'{uid}-clean.mp3'
  subprocess.run(['ffmpeg','-v','error','-y','-f','f32le','-ar',str(SR),'-ac','1','-i','pipe:0','-codec:a','libmp3lame','-b:a','96k',str(clean)],input=dry.astype(np.float32).tobytes(),check=True)
  print(uid,flush=True)
  return dict(id=uid,segments=scene['segments'],src=f'/audio/the-sound-map/{uid}.mp3',cleanSrc=f'/audio/the-sound-map/{uid}-clean.mp3',durationSeconds=round(len(mix)/SR,3),sha256=hashlib.sha256(dest.read_bytes()).hexdigest(),synthetic=True,sung=scene['id']=='singer')
async def main():
 clips=await asyncio.gather(*(clip(l,s) for l,u in DATA['levels'].items() for s in u['scenes']))
 (ROOT/'app/the-sound-map/audio-manifest.json').write_text(json.dumps(dict(producer='Edge neural es-MX voices; original synthesized ambience; singer PSOLA melody',generatedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),humanListeningQA=False,clips=clips),ensure_ascii=False,indent=2)+'\n')
 print(f'Generated {len(clips)} scenes + clean alternatives',flush=True)
asyncio.run(main())
