import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
await build({entryPoints:['app/grammar-classroom/lessons.ts'],outfile:'.sites-runtime/tests/classroom-lessons.cjs',bundle:true,platform:'node',format:'cjs'});
const {getClassroomLesson,classroomIds}=require('../.sites-runtime/tests/classroom-lessons.cjs');
const baseline=JSON.parse(fs.readFileSync('docs/audits/grammar-catalog-20261007.json','utf8'));
const words=s=>s.trim().split(/\s+/u).length;
test('all original routes and six new curricula have substantial, distinct four-skill material',()=>{
  assert.deepEqual([...classroomIds].sort((a,b)=>a-b),[...baseline.lessons.map(x=>x.id),227,228,229,230,231,232].sort((a,b)=>a-b));
  const readings=new Set(),scripts=new Set();
  for(const id of classroomIds){
    const x=getClassroomLesson(id);assert.ok(x,`lesson ${id}`);
    const min={A1:[40,35],A2:[65,55],B1:[95,80],B2:[120,95],C1:[160,130],C2:[160,130]}[x.level];
    assert.ok(words(x.reading.text)>=min[0],`${id} reading too short`);
    assert.ok(words(x.listening.transcript)>=min[1],`${id} listening too short`);
    readings.add(x.reading.text);scripts.add(x.listening.transcript);
    for(const input of [x.reading,x.listening]){
      assert.ok(input.questions.length>=2,`${id} comprehension`);
      assert.ok(input.questions.some(q=>q.kind==='meaning'),`${id} needs meaning question`);
      for(const q of input.questions)assert.ok(q.model&&q.criteria.length,`${id} review criteria`);
    }
    assert.ok(x.grammar.length>=2&&x.grammar.length<=4,`${id} focused core`);
    assert.ok(x.practice.length>=6,`${id} progressive practice`);
    for(const e of x.practice){
      if(e.kind==='choice'){
        assert.ok(e.answers.length&&e.explanation,`${id} answer key`);
        for(const a of e.answers)assert.ok(Number.isInteger(a)&&a>=0&&a<e.options.length,`${id} invalid answer index`);
      }else assert.ok(e.model&&e.criteria.length,`${id} open criteria`);
    }
    assert.ok(x.speaking.length>=3&&x.speaking.every(s=>s.followUp&&s.support),`${id} sustained speaking`);
    assert.ok(x.writing.words[0]<x.writing.words[1]&&x.writing.checklist.length>=3,`${id} writing scope`);
    assert.ok(words(x.writing.model)>=x.writing.words[0]&&words(x.writing.model)<=x.writing.words[1]+10,`${id} model length ${words(x.writing.model)} outside ${x.writing.words}`);
    assert.equal(x.audioSrc,`/audio/${[40,41].includes(id)?'grammar-free':'grammar-classroom'}/${id}.mp3`);
  }
  assert.equal(readings.size,57);assert.equal(scripts.size,57);
  assert.equal(getClassroomLesson(-1),undefined);
});
test('historic tenses explicitly prioritize reception and contemporary reformulation',()=>{
  for(const id of [154,155,156])assert.match(getClassroomLesson(id).scope,/recep|reconoc|interpret/iu);
});
