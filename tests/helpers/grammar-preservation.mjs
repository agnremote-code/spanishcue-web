import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const approved=JSON.parse(readFileSync(new URL('../../docs/audits/grammar-preservation-20261007.json',import.meta.url),'utf8'));
export const grammarSharedFiles=Object.keys(approved.sourceEdits);
export function beforeGrammarBytes(path,bytes){
  const edits=approved.sourceEdits[path];if(!edits)return bytes;
  let text=bytes.toString('utf8');
  for(const {after,before} of edits){
    assert.equal(text.split(after).length-1,1,`one exact grammar edit in ${path}`);
    text=text.replace(after,before);
  }
  return Buffer.from(text);
}
export function beforeGrammarLessons(lessons){
  return lessons.filter(x=>!approved.newIds.includes(x.id)).map(lesson=>{
    const repair=approved.metadata.find(x=>x.id===lesson.id);if(!repair)return lesson;
    const restored={...lesson};
    for(const [key,value] of Object.entries(repair.fields)){
      assert.deepEqual(lesson[key],value.after,`reviewed grammar ${lesson.id}.${key}`);
      if(value.hadBefore)restored[key]=value.before;else delete restored[key];
    }
    return restored;
  });
}
