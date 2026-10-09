'use client';
import type{ClassroomLesson}from'../types';
import TeacherStudio,{type StudioDesign}from'./TeacherStudio';
import NounScene from './NounScene';
import{nounEnglish}from'./noun-english';
const design:StudioDesign={
 title:['La fábrica','de los nombres.'],
 subtitle:['Personas, lugares, objetos e ideas. Todo empieza con un nombre.','People, places, objects and ideas. Everything starts with a name.'],
 cues:[['¿Cómo se llama lo que ves?','What do you call what you see?'],['Una caja llena de palabras.','A box full of words.'],['Un nombre. Un artículo. Uno o varios.','A noun. An article. One or several.'],['Elige, transforma y explica.','Choose, transform and explain.'],['¿Qué hay y qué falta?','What is there and what is missing?'],['Prepara una oficina con tu profesor.','Set up an office with your teacher.'],['Una nota que ayuda a organizar.','A note that helps organize things.'],['Ponle nombre a lo aprendido.','Name what you have learned.']],
 openingTask:['Elige el lápiz. Oculta su nombre y pasa de uno a varios. ¿Qué cambia en la palabra?','Choose the pencil. Hide its name and switch from one to several. What changes in the word?'],
 readingNote:['Busca los nombres de objetos, personas y lugares. Encuentra en la mesa las palabras que aparecen en el texto.','Find the names of objects, people and places. Find the words from the text on the workbench.'],
 listeningNote:['Escucha las cantidades. Después compara los objetos del pedido con las muestras de la mesa.','Listen for quantities. Then compare the objects in the order with the samples on the workbench.'],
 closingTask:['Oculta los nombres. Elige un objeto y di su artículo y plural. Después elige una persona, un lugar o una idea y explica por qué también es un sustantivo.','Hide the names. Choose an object and give its article and plural. Then choose a person, place or idea and explain why it is also a noun.'],
};
export default function NounClassroom({lesson}:{lesson:ClassroomLesson}){return <TeacherStudio lesson={lesson} english={nounEnglish} design={design} scene={<NounScene/>} grammarVisual={<div className="ob-table-wrap"><table><caption>Tres caminos al plural / Three routes to the plural</caption><thead><tr><th>Final / Ending</th><th>Cambio / Change</th><th>Ejemplo / Example</th></tr></thead><tbody><tr><th>Vocal / Vowel</th><td>+ s</td><td>libro → libros<br/><small>book → books</small></td></tr><tr><th>Consonante / Consonant</th><td>+ es</td><td>ciudad → ciudades<br/><small>city → cities</small></td></tr><tr><th>z</th><td>z → ces</td><td>lápiz → lápices<br/><small>pencil → pencils</small></td></tr></tbody></table></div>}/>;}
