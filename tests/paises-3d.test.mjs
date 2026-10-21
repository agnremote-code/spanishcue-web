import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';

// Country classes rebuilt as 3D worlds on the shared zone template (app/mundo-3d/plantilla.ts):
// four regions × five places × four levels, each level a full conversation, plus one
// listening per region and level, and the previous class one click away (?vista=atlas).
const COUNTRIES=[
  {dir:'mexico',id:210,game:'mexico',regions:['cdmx','jalisco','oaxaca','quintana-roo']},
  {dir:'argentina',id:228,game:'argentina',regions:['buenos-aires','cordoba','mendoza','bariloche']},
  {dir:'espana',id:229,game:'espana',regions:['madrid','cataluna','andalucia','valencia']},
  {dir:'suecia',id:227,game:'suecia',regions:['estocolmo','gotemburgo','laponia','malmo']},
  {dir:'reino-unido-en-relieve',id:32,game:'uk',regions:['inglaterra','escocia','gales','irlanda-norte']},
];
const LEVELS=['A0','A1','A2','B1'];
const bi=(v,where)=>{assert.ok(v&&typeof v.es==='string'&&v.es.trim()&&typeof v.en==='string'&&v.en.trim(),`${where}: needs es and en`);};

for(const c of COUNTRIES){
  const pais=readFileSync(`app/${c.dir}/mundo/pais.ts`,'utf8');
  const zonas=readFileSync(`app/${c.dir}/mundo/zonas.ts`,'utf8');

  test(`${c.dir}: the map lists its regions and every region has content and a zone`,()=>{
    assert.match(pais,new RegExp(`lessonId: ${c.id},`));
    for(const id of c.regions){
      assert.match(pais,new RegExp(`id: '${id}', sign:`),id);
      assert.ok(existsSync(`app/${c.dir}/mundo/contenido/${id}.mjs`),`${id} content`);
      assert.match(zonas,new RegExp(`'?${id}'?: plantilla\\(`),`${id} zone`);
    }
  });

  for(const id of c.regions){
    test(`${c.dir}/${id}: five places, four complete levels each, matching the map`,async()=>{
      const {default:region}=await import(`../app/${c.dir}/mundo/contenido/${id}.mjs`);
      assert.equal(region.id,id);
      assert.equal(region.spots.length,5);
      const block=pais.slice(pais.indexOf(`id: '${id}', sign:`));
      for(const spot of region.spots){
        assert.ok(block.includes(`{ id: '${spot.id}', name:`),`${id}/${spot.id} is on the map`);
        bi(spot.name,`${id}/${spot.id} name`);bi(spot.who.role,`${id}/${spot.id} role`);assert.ok(spot.who.name);
        assert.deepEqual(Object.keys(spot.levels).sort(),LEVELS);
        for(const level of LEVELS){
          const l=spot.levels[level],w=`${id}/${spot.id}/${level}`;
          bi(l.scene,w);bi(l.opener,w);bi(l.decide.ask,w);bi(l.twist,w);
          assert.ok(l.decide.options.length>=2,`${w} options`);
          for(const o of l.decide.options){bi(o.say,w);bi(o.then,w);}
          assert.ok(l.questions.length>=4,`${w} needs at least 4 questions`);
          for(const q of l.questions){bi(q.q,w);bi(q.help,w);assert.ok(q.follow.length>=1,`${w} follow-ups`);q.follow.forEach(f=>bi(f,w));}
          assert.ok(l.words.length>=4,`${w} words`);l.words.forEach(x=>bi(x,w));
        }
        assert.equal(new Set(LEVELS.map(l=>spot.levels[l].scene.es)).size,4,`${id}/${spot.id}: levels are written apart`);
      }
    });
  }

  test(`${c.dir}: one listening per region and level, and the old class stays reachable`,async()=>{
    const {GAMES}=await import('../app/escucha-3d/games.mjs');
    assert.deepEqual(GAMES[c.game].spots,c.regions);
    assert.deepEqual(GAMES[c.game].levels,LEVELS);
    const page=readFileSync(`app/${c.dir}/page.tsx`,'utf8');
    assert.match(page,/MundoPais/);
    assert.match(page,new RegExp(`listening="${c.game}"`));
    assert.match(page,/atlas=\{/);
    assert.match(readFileSync('app/api/live-class/route.ts','utf8'),new RegExp(`WORLD_LESSON_IDS = new Set\\(\\[[^\\]]*\\b${c.id}\\b`));
  });
}

test('the zone template keeps people out of solid objects', () => {
  const world=readFileSync('app/mundo-3d/World3D.tsx','utf8');
  assert.match(world,/keepPeopleClear\(builder\(/);
  assert.match(readFileSync('app/mundo-3d/kit3d.ts','utf8'),/export function keepPeopleClear/);
});
