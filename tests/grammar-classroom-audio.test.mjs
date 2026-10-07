import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const contexts={...read('app/grammar-classroom/content/legacy-contexts.json'),...read('app/grammar-classroom/content/new-lessons.json')};
const manifest=read('app/grammar-classroom/audio-manifest.json');
const hash=s=>createHash('sha256').update(s).digest('hex');
const normalize=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').normalize('NFC').replace(/[^\p{L}\p{N}]/gu,'').toLowerCase();
test('57 native neural recordings match the exact current transcript and reported speech boundaries',()=>{
  assert.equal(manifest.clips.length,57);assert.equal(new Set(manifest.clips.map(c=>c.sha256)).size,57);
  for(const prefix of ['grammar-free','grammar-classroom']){
    assert.deepEqual(readdirSync(`public/audio/${prefix}`).sort(),manifest.clips.filter(c=>c.src.startsWith(`/audio/${prefix}/`)).map(c=>`${c.id}.mp3`).sort(),'no orphan or superseded recording remains');
  }
  for(const clip of manifest.clips){
    const input=contexts[clip.id].listening;
    assert.equal(clip.voice,input.voice,`${clip.id} voice`);assert.match(clip.voice,/^es-(?:MX|ES)-.+Neural$/);
    assert.equal(clip.transcriptSha256,hash(input.transcript),`${clip.id} stale transcript`);
    assert.equal(clip.sha256,hash(readFileSync('public'+clip.src)),`${clip.id} asset hash`);
    const words=read(clip.wordMetadata);
    assert.equal(normalize(words.map(w=>w.text).join(' ')),normalize(input.transcript),`${clip.id} spoken input`);
    assert.ok(words.every((w,i)=>w.duration>0&&w.offset>=0&&(!i||w.offset>=words[i-1].offset)),`${clip.id} timing`);
    assert.ok((words.at(-1).offset+words.at(-1).duration)/1e7<=clip.durationSeconds+1,`${clip.id} end boundary`);
  }
});
test('recordings decode with an audible signal and only the two existing samples use the free prefix',()=>{
  assert.deepEqual(readdirSync('public/audio/grammar-free').sort(),['40.mp3','41.mp3']);
  for(const clip of manifest.clips){
    assert.equal(clip.src.startsWith('/audio/grammar-free/'),[40,41].includes(clip.id));
    const path='public'+clip.src;
    const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',path],{encoding:'utf8'}));
    assert.equal(probe.streams[0].codec_name,'mp3');assert.equal(probe.streams[0].channels,1);
    assert.ok(Math.abs(Number(probe.format.duration)-clip.durationSeconds)<.1);
    assert.ok(clip.durationSeconds>10&&clip.durationSeconds<180);
    const pcm=execFileSync('ffmpeg',['-v','error','-i',path,'-f','s16le','-ar','8000','-ac','1','-'],{maxBuffer:4*1024*1024});
    let energy=0,peak=0;for(let i=0;i<pcm.length;i+=2){const v=pcm.readInt16LE(i);energy+=v*v;peak=Math.max(peak,Math.abs(v));}
    assert.ok(peak>100&&Math.sqrt(energy/(pcm.length/2))>20,`${clip.id} silent signal`);
  }
});
