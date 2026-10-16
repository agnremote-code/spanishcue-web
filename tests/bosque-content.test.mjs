import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
const levels=['A0','A1','A2','B1','B2','C1','C2'];
const zones=['sobre-ti','vida-real','elige','opinion','suposiciones','afirmacion','compara','recuerdos','futuro','cambia','contrario','final'];
for (const level of levels) test(`${level}: 72 authored prompts with oral follow-ups and category coverage`, async()=>{
 const path=`../app/bosque-de-los-hongos-gigantes/content/${level.toLowerCase()}.mjs`;
 assert.ok(existsSync(new URL(path,import.meta.url)),`${level} bank must exist`);
 const {default:bank}=await import(path);
 assert.ok(bank.length>=72); assert.equal(new Set(bank.map(p=>p.id)).size,bank.length);
 assert.equal(new Set(bank.map(p=>p.question)).size,bank.length);
 for(const zone of zones) assert.ok(bank.filter(p=>p.zone===zone).length>=6,zone);
 for(const p of bank){assert.equal(p.level,level);assert.ok(p.question.length>12);assert.ok(p.followUps.length>=2);assert.ok(p.followUps.every(q=>q.length>5));assert.ok(!('correctAnswer' in p));assert.ok(!/TODO|placeholder|Pregunta \d/.test(p.question));if(p.choices)assert.ok(p.choices.length>=2);if(p.type==='change-condition')assert.ok(p.condition);}
 if(['A0','A1'].includes(level))for(const p of bank)assert.ok(p.glosses.length>=3&&p.glosses.length<=5,`${p.id}: 3–5 glosses`);
 if(['A0','A1','A2','B1','B2'].includes(level)){assert.ok(bank.every(p=>p.glosses?.length));for(const p of bank)for(const g of p.glosses){assert.ok(g.es&&g.en);assert.ok(g.es.length<70);assert.notEqual(g.es,p.question);}}
 else assert.ok(bank.every(p=>!p.glosses?.length));
});
test('A0: every learner-facing line has its English line', async()=>{
 const {default:bank}=await import('../app/bosque-de-los-hongos-gigantes/content/a0.mjs');
 const {default:a1}=await import('../app/bosque-de-los-hongos-gigantes/content/a1.mjs');
 for(const zone of zones)assert.equal(bank.filter(p=>p.zone===zone).length,a1.filter(p=>p.zone===zone).length,zone);
 for(const p of bank){const en=p.en;assert.ok(en?.question,p.id);assert.notEqual(en.question,p.question);
  assert.equal(en.followUps.length,p.followUps.length,p.id);assert.ok(en.followUps.every(Boolean));
  assert.equal(en.support?.length,p.support?.length,p.id);assert.ok(p.support.length>=1);
  if(p.choices)assert.equal(en.choices?.length,p.choices.length,p.id);if(p.statement)assert.ok(en.statement);if(p.condition)assert.ok(en.condition,p.id);
  assert.ok(p.question.split(/\s+/).length<=10,`${p.id}: short question`);assert.notEqual(p.type,'ranking');}
});
test('A0 level support is bilingual and listed first', async()=>{
 const src=(await import('node:fs')).readFileSync(new URL('../app/bosque-de-los-hongos-gigantes/content/index.ts',import.meta.url),'utf8');
 assert.match(src,/A0:\{demand:'[^']+',starters:\[[^\]]+\],personal:'[^']+',en:\{demand:'[^']+',starters:\[[^\]]+\],personal:'[^']+'\}\}/);
 const {LEVELS}=await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');assert.equal(LEVELS[0],'A0');
});
