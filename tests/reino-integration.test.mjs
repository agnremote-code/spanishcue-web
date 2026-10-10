import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {build} from 'esbuild';
const compiled = await build({stdin:{contents:'export {lessons} from "./app/lesson-catalog"; export {isFreeLesson,lessonAtPath} from "./app/access-policy";',resolveDir:process.cwd()},bundle:true,format:'esm',write:false});
const {lessons,isFreeLesson,lessonAtPath} = await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
test('Valdoria has one discoverable Play lesson, all seven levels and existing premium access',()=>{
  const matches=lessons.filter(l=>l.path==='/el-reino-de-la-rosa-dormida');
  assert.equal(matches.length,1);
  const lesson=matches[0];
  assert.equal(lessons.filter(l=>l.id===lesson.id).length,1);
  assert.deepEqual(lesson.levels,['A0','A1','A2','B1','B2','C1','C2']);
  assert.equal(lesson.conversationMode,'play');
  assert.equal(isFreeLesson(lesson.id),false);
  assert.equal(lessonAtPath(lesson.path+'/',lessons).id,lesson.id);
  assert.ok(existsSync('app'+lesson.path+'/page.tsx'));
  assert.ok(existsSync('public'+lesson.image));
});
