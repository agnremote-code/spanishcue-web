import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
const require=createRequire(import.meta.url),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const built=await build({stdin:{contents:"export {ListeningSection} from './app/autoestudio/engine/Sections'; export {copyFor} from './app/autoestudio/engine/copy';",resolveDir:process.cwd()},bundle:true,format:'cjs',platform:'node',write:false,external:['react','react-dom','next/*'],loader:{'.css':'empty'},jsx:'automatic'});
const m={exports:{}};runInNewContext(`(function(require,module,exports){${built.outputFiles[0].text}\n})`,{console,URL})(require,m,m.exports);
const listening={title:'Consulta de horarios',context:'Escuchá la conversación.',speakers:[{id:'x',name:'Luna',voice:'es-AR-f'}],script:[{speaker:'x',text:'SECRETO DEL AUDIO INICIAL'}],stages:[{stage:'gist',prompt:'Escuchá',exercise:{id:'gist',type:'choice',prompt:'Elegí',items:[{q:'Tema',options:['Horario','Precio'],answer:0}]}}]};
test('listening is audio-first and discloses synthetic voices without unverified regional flags',()=>{
 const html=renderToStaticMarkup(React.createElement(m.exports.ListeningSection,{listening,ctx:{t:m.exports.copyFor('es'),showEnglish:false,audio:{}}}));
 assert.ok(!html.includes('SECRETO DEL AUDIO INICIAL'));assert.match(html,/voz sintética/);assert.doesNotMatch(html,/🇦🇷/);
});
