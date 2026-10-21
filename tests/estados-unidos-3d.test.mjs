import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';

// Estados Unidos 3D (ID 36): six states × five places × four levels, each level a full
// conversation (situation, opener, decision, twist, questions with help and follow-ups, words).
const pais=readFileSync('app/estados-unidos-a2-b1/mundo/pais.ts','utf8');
const STATES=['florida','nueva-york','california','texas','hawai','colorado'];
const LEVELS=['A0','A1','A2','B1'];
const bi=(v,where)=>{assert.ok(v&&typeof v.es==='string'&&v.es.trim()&&typeof v.en==='string'&&v.en.trim(),`${where}: needs es and en`);};

test('the map lists the six states and every scene and content file exists',()=>{
  assert.match(pais,/lessonId: 36,/);
  for(const id of STATES){
    assert.match(pais,new RegExp(`id: '${id}', sign:`),id);
    assert.ok(existsSync(`app/estados-unidos-a2-b1/mundo/contenido/${id}.mjs`),`${id} content`);
    assert.ok(existsSync(`app/estados-unidos-a2-b1/mundo/escenas/${id}3d.ts`),`${id} scene`);
  }
});

for(const id of STATES){
  test(`${id}: five places, four complete levels each, matching the map`,async()=>{
    const {default:region}=await import(`../app/estados-unidos-a2-b1/mundo/contenido/${id}.mjs`);
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
    }
  });
}

test('levels are written apart, not copied from one another',async()=>{
  for(const id of STATES){
    const {default:region}=await import(`../app/estados-unidos-a2-b1/mundo/contenido/${id}.mjs`);
    for(const spot of region.spots)assert.equal(new Set(LEVELS.map(l=>spot.levels[l].scene.es)).size,4,`${id}/${spot.id}`);
  }
});

test("Ale's examples are in the world",async()=>{
  const load=async id=>JSON.stringify((await import(`../app/estados-unidos-a2-b1/mundo/contenido/${id}.mjs`)).default);
  assert.match(await load('florida'),/pasaporte/i);
  assert.match(await load('nueva-york'),/viajar/i);
  assert.match(await load('hawai'),/turismo/i);
});

test('the teacher mode saves per student through the live-class API',()=>{
  assert.match(readFileSync('app/api/live-class/route.ts','utf8'),/WORLD_LESSON_IDS = new Set\(\[36\]\)/);
});
