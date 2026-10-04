import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
const levels=['A1','A2','B1','B2','C1','C2'];
const zones=['sobre-ti','vida-real','elige','opinion','suposiciones','afirmacion','compara','recuerdos','futuro','cambia','contrario','final'];
for (const level of levels) test(`${level}: 72 authored prompts with oral follow-ups and category coverage`, async()=>{
 const path=`../app/bosque-de-los-hongos-gigantes/content/${level.toLowerCase()}.mjs`;
 assert.ok(existsSync(new URL(path,import.meta.url)),`${level} bank must exist`);
 const {default:bank}=await import(path);
 assert.ok(bank.length>=72); assert.equal(new Set(bank.map(p=>p.id)).size,bank.length);
 assert.equal(new Set(bank.map(p=>p.question)).size,bank.length);
 for(const zone of zones) assert.ok(bank.filter(p=>p.zone===zone).length>=6,zone);
 for(const p of bank){assert.equal(p.level,level);assert.ok(p.question.length>12);assert.ok(p.followUps.length>=2);assert.ok(p.followUps.every(q=>q.length>5));assert.ok(!('correctAnswer' in p));assert.ok(!/TODO|placeholder|Pregunta \d/.test(p.question));if(p.choices)assert.ok(p.choices.length>=2);if(p.type==='change-condition')assert.ok(p.condition);}
 if(['A1','A2','B1','B2'].includes(level)){assert.ok(bank.every(p=>p.glosses?.length));for(const p of bank)for(const g of p.glosses){assert.ok(g.es&&g.en);assert.ok(g.es.length<70);assert.notEqual(g.es,p.question);}}
 else assert.ok(bank.every(p=>!p.glosses?.length));
});
