import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';

const result = await build({stdin:{contents:`export * from './app/conversation-families/catalog'; export * from './app/conversation-families/types'; export * from './app/conversation-families/navigation'; export {availableLevels} from './app/library-filters.mjs';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const api = await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const levels = ['A0','A1','A2','B1','B2','C1','C2'];
test('conversation level order includes absolute beginners',()=>assert.deepEqual(api.CEFR_LEVELS,levels));
for (const family of api.conversationFamilies) {
  test(`${family.id}: all seven levels are discoverable and have valid level URLs`,()=>{
    assert.deepEqual(family.availableLevels, levels);
    for (const level of levels) {
      assert.equal(api.resolveConversationLevel(family,level),level);
      assert.ok(family.variants[level].communicativeObjectives.length);
      assert.equal(api.conversationLevelUrl(`https://spanishcue.com${family.canonicalPath}?lang=en#activity`,family,level),`${family.canonicalPath}?lang=en&level=${level}#activity`);
    }
  });
}
test('conversation catalogue exposes A0 in filter options',()=>assert.deepEqual(api.availableLevels(api.catalogLessons,'Conversación'),levels));
test('USA has a single catalogue family preserving both historical IDs',()=>{
  const usa=api.conversationFamilies.filter(f=>f.legacyLessonIds.includes(36)||f.legacyLessonIds.includes(26));
  assert.equal(usa.length,1);
  assert.deepEqual(usa[0].legacyLessonIds,[36,26]);
  assert.equal(usa[0].canonicalPath,'/estados-unidos-a2-b1');
});
