import test from 'node:test';
import assert from 'node:assert/strict';
import * as world from '../app/noche-abierta/world3d.mjs';
import * as engine from '../app/noche-abierta/engine.mjs';
import { beatsOf, emptyProgress } from '../app/noche-abierta/activities.mjs';

test('space jumps and a held key cannot repeatedly launch the player', () => {
  assert.equal(world.keyAction('Space'), 'jump');
  let p = { x: 0, z: 0, heading: 0 };
  p = world.stepPlayer(p, { jump: true }, 1/60, []);
  assert.ok(p.y > 0);
  for (let i=0;i<150;i++) p = world.stepPlayer(p, { jump:true }, 1/60, []);
  assert.equal(p.y, 0);
});
test('jumping crosses a car and lands while buildings remain solid', () => {
  const car={x0:-1,x1:1,z0:1,z1:4,vehicle:'car',top:1.6};
  let p={x:0,z:0,heading:0};
  for(let i=0;i<120;i++) p=world.stepPlayer(p,{y:1,yaw:0,jump:i===0},1/60,[car]);
  assert.ok(p.z>4.5, JSON.stringify(p));
  assert.equal(p.y,0);
  p={x:0,z:0,heading:0};
  for(let i=0;i<120;i++) p=world.stepPlayer(p,{y:1,yaw:0,jump:i===0},1/60,[{...car,vehicle:undefined}]);
  assert.ok(p.z<1);
});
test('a car overlapping the player cannot trap them', () => {
  let p={x:0,z:2,heading:0};
  const car={x0:-1,x1:1,z0:1,z1:4,vehicle:'car',top:1.6};
  for(let i=0;i<120;i++) p=world.stepPlayer(p,{x:1,yaw:0},1/60,[car]);
  assert.ok(Math.abs(p.x)>1.5,JSON.stringify(p));
});
for(const level of engine.LEVELS) {
  test(`${level}: every interaction has exactly choice then personal speaking`, () => {
    for(const l of engine.contentFor(level).LOCATIONS)for(const a of l.activities){
      const initial=beatsOf(l.type,a);
      const index=initial.findIndex(b=>b.kind==='choose');
      assert.ok(index>=0,a.id);
      const outcomes=initial[index].options.map(o=>beatsOf(l.type,a,{...emptyProgress(),choice:o.id})[index+1]);
      assert.ok(outcomes.every(b=>b.kind==='talk'&&!b.context&&b.prompt),a.id);
      assert.equal(new Set(outcomes.map(b=>b.prompt)).size,1,a.id);
      assert.equal(initial.length,2,a.id);
      assert.equal(initial.at(-1).label,'2. Ahora habla de ti',a.id);
      if (level === 'A0') assert.match(initial.at(-1).prompt, /(?:¿|Di[: ]).* \/ /, a.id);
      else assert.ok(initial.at(-1).prompt.includes('¿'),a.id);
    }
  });
}
test('back restores exact questions, choice and inspected clues; activities navigate both ways', () => {
  assert.equal(typeof engine.previousBeat,'function');
  let s=engine.openLocation(engine.startExploring(engine.initialState()),'restaurante','resto-cuenta');
  s=engine.chooseOption(s,'cada-uno');
  const result=engine.currentView(s).beat;
  assert.equal(engine.currentView(s).last,true);
  s=engine.previousBeat(s);
  assert.equal(engine.currentView(s).progress.choice,'cada-uno');
  s=engine.advanceBeat(s);
  assert.deepEqual(engine.currentView(s).beat,result);
  s=engine.otherActivity(s);
  s=engine.previousActivity(s);
  assert.deepEqual(engine.currentView(s).beat,result);
  s=engine.openLocation(s,'departamento','depto-un-minuto');
  assert.equal(engine.currentView(s).beat.kind,'choose');
  assert.deepEqual(engine.currentView(s).progress.seen,[]);
});

test('reviewing a taxi question keeps its chosen journey without replaying travel', () => {
  let s=engine.openLocation(engine.startExploring(engine.initialState()),'taxi','taxi-cortado');
  s=engine.chooseOption(s,'caminar');
  const outcome=engine.worldOutcome(s);
  s=engine.previousBeat(s);
  assert.deepEqual(engine.worldOutcome(s),outcome);
});
test('landing on a car supports the player until they walk off', () => {
  const car={x0:-1,x1:1,z0:1,z1:4,vehicle:'car',top:1.6};
  let p={x:0,z:2,heading:0,y:1.6};
  for(let i=0;i<60;i++) p=world.stepPlayer(p,{},1/60,[car]);
  assert.equal(p.y,1.6);
  assert.equal(p.x,0);
  assert.equal(p.z,2);
});
