import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import ts from 'typescript';
const baseline=JSON.parse(readFileSync(new URL('./fixtures/syntax-neutral-baseline.json',import.meta.url),'utf8'));
async function sourceData(source){const {outputText}=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}});return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);}
const all=await sourceData(readFileSync('app/syntax-labs/data.ts','utf8'));
const names=['antesDespuesCuando','peroHayUnMatiz','laPersonaQueTengoEnMente'];
const expected=[
 ['Me ducho antes de vestirme.','Lavo los platos después de cenar.','Me saco los zapatos cuando llego a casa.','Preparo la mochila antes de salir.','Busco la salida después de bajar del tren.','Apago el teléfono cuando empieza la reunión.','Corto las verduras antes de cocinarlas.','Llamo a una amiga después de terminar de trabajar.','Escucho música cuando viajo en autobús.','Reviso la dirección antes de pedir el taxi.'],
 ['El problema no es ni el dinero ni el tiempo.','El curso exige mucho trabajo. Sin embargo, los resultados llegan pronto.','Es una solución eficaz, aunque provisional.','No quiere viajar ni en tren ni en avión.','La zona queda lejos. Sin embargo, está muy bien conectada.','La medida es popular. Sin embargo, no resuelve el problema central.','La reunión fue productiva, aunque demasiado larga.','Trabajar desde casa puede aislar. Sin embargo, ofrece más autonomía.','La película es interesante, aunque un poco lenta.','No fue ni Pablo ni Lucía.'],
 ['Busco a la compañera que vive cerca del centro.','Prefiero el café que abre hasta medianoche.','La mochila que compré en Lima es azul.','Hablé con Lucía, quien coordinó el proyecto.','Necesito el documento que enviaste ayer.','Es el vecino que siempre saludaba desde el balcón.','La guía que viajará con nosotros habla portugués.','Vi la película que me recomendaste.','Mario, quien dirigió el taller, llegará mañana.','Quiero visitar el pueblo que aparece en la foto.'],
];
for(const [b,name] of names.entries())test(`${name}: all10 accepted decisions render the intended complete sentence`,()=>{const bank=all[name];assert.equal(bank.decisions.length,10);bank.decisions.forEach((item,i)=>assert.equal([item.left,item.options[item.correct],item.right].join(' '),expected[b][i],`${name} decision ${i+1}`));});
test('explanatory que and quien alternatives are both accepted with commas',()=>{for(const i of [3,8])assert.deepEqual(all.laPersonaQueTengoEnMente.decisions[i].accepted,[0,1]);});
test('all5 other banks match the reviewed neutral copy baseline',()=>{let count=0;for(const name of Object.keys(all)){if(names.includes(name))continue;assert.equal(createHash('sha256').update(JSON.stringify(all[name])).digest('hex'),baseline.banks[name],name);count++;}assert.equal(count,5);});
test('models and explanations preserve temporal chronology and negative concord',()=>{
 assert.equal(all.antesDespuesCuando.patterns[1].preview.left,'Camino un poco');
 assert.match(all.antesDespuesCuando.patterns[0].explanation,/desayuno.*antes.*salir/);
 assert.match(all.peroHayUnMatiz.patterns[0].explanation,/después del verbo.*no/);
 assert.equal(all.laPersonaQueTengoEnMente.repairs[3].options[0],'El teléfono, que compré ayer, no funciona.');
});
const optionMatrices=[
 [['antes de','cuando','después de'],['cuando','antes de','después de'],['después de','cuando','antes de'],['antes de','después de','cuando'],['antes de','cuando','después de'],['cuando','antes de','después de'],['después de','antes de','cuando'],['después de','cuando','antes de'],['antes de','después de','cuando'],['antes de','cuando','después de']],
 [['sin embargo','ni el dinero ni','aunque'],['Ni','Sin embargo,','Y'],['aunque','ni','sin embargo'],['aunque','ni en tren ni','sin embargo'],['Sin embargo,','Ni','Porque'],['O','Sin embargo,','Ni'],['aunque','ni','por eso'],['Sin embargo,','Ni… ni','También'],['aunque','por eso','ni'],['sin embargo','ni Pablo ni','aunque']],
 [['que','quien','donde'],['quien','que','cuando'],['que','quien','porque'],['que','quien','donde'],['quien','que','aunque'],['que','quien','si'],['quien','que','sin embargo'],['que','quien','donde'],['que','quien','cuando'],['quien','que','lo que']],
];
const acceptedIndices=[[[0],[2],[1],[0],[2],[0],[1],[0],[2],[0]],[[1],[1],[0],[1],[0],[1],[0],[0],[0],[1]],[[0],[1],[0],[0,1],[1],[0],[1],[0],[0,1],[1]]];
const repairMatrices=[
 [
  ['Antes de salir, preparo la mochila.','Cuando salir, preparo la mochila.','Después de salgo, preparo la mochila.'],
  ['Después de terminar, llamo a Ana.','Después de termino, llamo a Ana.','Antes de terminar, llamo a Ana.'],
  ['Cuando llego a casa, preparo la cena.','Antes de llego a casa, preparo la cena.','Después de llegar a casa, preparo la cena.'],
  ['Después de despertarme, desayuno.','Antes de despertarme, desayuno.','Cuando desayunar, me despierto.'],
 ],
 [
  ['El proyecto es útil. Sin embargo, necesita cambios.','El proyecto es útil, sin embargo necesita cambios.','Sin embargo el proyecto es útil necesita cambios.'],
  ['No me convencen ni el precio ni la duración.','Ni me convence el precio sin embargo la duración.','Aunque el precio ni la duración me convencen.'],
  ['La habitación es cómoda, aunque pequeña.','La habitación no es cómoda, aunque es pequeña.','La habitación ni es cómoda ni pequeña.'],
  ['El barrio es caro. Sin embargo, tiene buen transporte.','El barrio es caro ni tiene buen transporte.','Aunque el barrio ni es caro, tiene transporte.'],
 ],
 [
  ['Busco a la amiga de Marta; la amiga vive en Valencia.','Marta vive en Valencia; busco a su amiga.','Busco a la que vive en Valencia.'],
  ['El café que está junto a la estación abre temprano.','Quien está junto a la estación abre temprano.','El café donde que está junto a la estación abre temprano.'],
  ['Busco a la persona que trabaja en recepción por la noche.','Busco a la persona que es una persona.','Busco a quien trabaja.'],
  ['El teléfono, que compré ayer, no funciona.','El teléfono, quien compré ayer, no funciona.','Quien teléfono compré ayer no funciona.'],
 ],
];
const parts=[
 [['Me ducho','vestirme.'],['Lavo los platos','cenar.'],['Me saco los zapatos','llego a casa.'],['Preparo la mochila','salir.'],['Busco la salida','bajar del tren.'],['Apago el teléfono','empieza la reunión.'],['Corto las verduras','cocinarlas.'],['Llamo a una amiga','terminar de trabajar.'],['Escucho música','viajo en autobús.'],['Reviso la dirección','pedir el taxi.']],
 [['El problema no es','el tiempo.'],['El curso exige mucho trabajo.','los resultados llegan pronto.'],['Es una solución eficaz,','provisional.'],['No quiere viajar','en avión.'],['La zona queda lejos.','está muy bien conectada.'],['La medida es popular.','no resuelve el problema central.'],['La reunión fue productiva,','demasiado larga.'],['Trabajar desde casa puede aislar.','ofrece más autonomía.'],['La película es interesante,','un poco lenta.'],['No fue','Lucía.']],
 [['Busco a la compañera','vive cerca del centro.'],['Prefiero el café','abre hasta medianoche.'],['La mochila','compré en Lima es azul.'],['Hablé con Lucía,','coordinó el proyecto.'],['Necesito el documento','enviaste ayer.'],['Es el vecino','siempre saludaba desde el balcón.'],['La guía','viajará con nosotros habla portugués.'],['Vi la película','me recomendaste.'],['Mario,','dirigió el taller, llegará mañana.'],['Quiero visitar el pueblo','aparece en la foto.']],
];
const logic=await sourceData(readFileSync('app/syntax-labs/repair-content.ts','utf8'));
test('all126 options and44 accepted outputs obey independent reviewed form/context matrices',()=>{
 let options=0,valid=0;
 for(const [b,name] of names.entries()){
  const bank=all[name];
  for(const [i,item] of bank.decisions.entries()){
   assert.deepEqual(item.options,optionMatrices[b][i]);assert.deepEqual([item.left,item.right],parts[b][i]);
   assert.deepEqual(item.accepted??[item.correct],acceptedIndices[b][i]);
   item.options.forEach((_,j)=>{options++;const expectedSentence=[parts[b][i][0],optionMatrices[b][i][j],parts[b][i][1]].join(' ');assert.equal(logic.sentence(item,j),expectedSentence);const accepted=acceptedIndices[b][i].includes(j);assert.equal(logic.accepts(item,j),accepted);if(accepted)valid++;});
  }
  assert.equal(bank.repairs.length,4);
  for(const [i,item] of bank.repairs.entries()){
   assert.deepEqual(item.options,repairMatrices[b][i]);const correct=b===2&&i===0?1:0;assert.equal(item.correct,correct);
   item.options.forEach((_,j)=>{options++;assert.equal(logic.sentence(item,j),repairMatrices[b][i][j]);assert.equal(logic.accepts(item,j),j===correct);if(j===correct)valid++;});
  }
  for(const kind of ['decisions','repairs'])for(const [i,item] of bank[kind].entries()){
   assert.ok(item.prompt.length>15);assert.ok(item.feedback.length>25);assert.ok(logic.hints[bank.slug][kind][i].length>20);
   for(const invalid of [-1,3,null,undefined,NaN,1.5]){assert.equal(logic.accepts(item,invalid),false);assert.equal(logic.sentence(item,invalid),'');}
  }
 }
 assert.equal(options,126);assert.equal(valid,44);
});
test('all9 complete pattern models, contexts, authored counts and oral endings remain meaningful',()=>{
 const models=[['Antes de salir, desayuno.','Después de comer, camino un poco.','Cuando llego, reviso el correo.'],['Ni el precio ni la distancia son el problema.','El plan es caro. Sin embargo, ahorra mucho tiempo.','La propuesta es útil, aunque cara.'],['Busco a la compañera que vive cerca del centro.','Elige el café que abre hasta tarde.','Hablé con Lucía, quien coordinó el proyecto.']];
 for(const [b,name] of names.entries()){
  const bank=all[name];assert.deepEqual(bank.patterns.map(p=>p.example),models[b]);assert.equal(bank.activation.cards.length,5);assert.equal(bank.retrieval.length,5);assert.equal(bank.production.length,3);assert.equal(bank.conversation.length,b===0?7:6);assert.equal(bank.timeline.reduce((sum,t)=>sum+t.minutes,0),45);
  for(const item of bank.patterns)assert.ok(item.explanation&&item.formula&&item.preview.left&&item.preview.right);
  for(const item of bank.retrieval)assert.ok(item.prompt&&item.challenge);
  for(const item of bank.production)assert.equal(item.checklist.length,3);
  for(const item of bank.conversation)assert.ok(item.question&&item.starter&&item.followUp);
  assert.equal(logic.oralGuidance[bank.slug].criteria.length,3);assert.ok(logic.oralGuidance[bank.slug].change);assert.ok(logic.oralGuidance[bank.slug].recap);
 }
 assert.match(all.antesDespuesCuando.repairs[3].prompt,/ya es correcta/);
 assert.match(all.antesDespuesCuando.repairs[2].prompt,/corrige solo/);
 assert.match(all.peroHayUnMatiz.repairs[1].feedback,/original.*válida/);
 assert.match(all.peroHayUnMatiz.repairs[3].prompt,/sí es caro.*sí tiene buen transporte/);
 assert.match(all.laPersonaQueTengoEnMente.repairs[0].prompt,/Marta vive en Valencia; su amiga vive en Córdoba/);
 assert.match(all.laPersonaQueTengoEnMente.repairs[2].prompt,/Ana.*Eva.*Luz/);
 for(const i of [1,4])assert.match(all.peroHayUnMatiz.activation.cards[i].second,/^No /);
});
test('all candidate filter states and third-datum options have unique contextual results',()=>{
 const expectedNames=[['Ana','Eva','Luz'],['Ana','Eva'],['Ana','Luz'],['Ana']];
 [[false,false],[true,false],[false,true],[true,true]].forEach((clues,i)=>assert.deepEqual(logic.matchingCandidates(clues).map(c=>c.name),expectedNames[i]));
 logic.contrastTask.options.forEach((_,i)=>assert.equal(logic.accepts(logic.contrastTask,i),i===1));
 assert.equal(logic.sentence(logic.contrastTask,1),'El plan parece viable. Sin embargo, el horario es imposible.');
});
test('217 first retrieval supplies the three actual input chains without answer connectors',()=>{
 const prompt=all.peroHayUnMatiz.retrieval[0].prompt;
 for(const input of ['El piso es luminoso, pero pequeño','El curso exige trabajo, pero da resultados','El barrio está lejos, pero bien conectado'])assert.ok(prompt.includes(input),input);
 assert.doesNotMatch(prompt,/sin embargo|aunque|ni… ni/);
});
