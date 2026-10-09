'use client';
import {useState} from 'react';
import './nouns.css';
const nouns=[
 {id:'libro',word:'libro',plural:'libros',article:'el',pluralArticle:'los',en:'book',enPlural:'books',kind:'Objeto / Object',rule:'Vocal + -s: libro → libros.',help:'Vowel + -s: book → books.',shape:'book'},
 {id:'lapiz',word:'lápiz',plural:'lápices',article:'el',pluralArticle:'los',en:'pencil',enPlural:'pencils',kind:'Objeto / Object',rule:'-z cambia a -ces: lápiz → lápices.',help:'Change -z to -ces to form this plural.',shape:'pencil'},
 {id:'mapa',word:'mapa',plural:'mapas',article:'el',pluralArticle:'los',en:'map',enPlural:'maps',kind:'Objeto / Object',rule:'El mapa es masculino, aunque termina en -a. Plural: mapas.',help:'Mapa is masculine despite ending in -a. Add -s for the plural.',shape:'map'},
 {id:'foto',word:'foto',plural:'fotos',article:'la',pluralArticle:'las',en:'photo',enPlural:'photos',kind:'Objeto / Object',rule:'La foto es femenina: es la forma corta de fotografía.',help:'Foto is feminine: it is short for fotografía.',shape:'photo'},
 {id:'ciudad',word:'ciudad',plural:'ciudades',article:'la',pluralArticle:'las',en:'city',enPlural:'cities',kind:'Lugar / Place',rule:'Consonante + -es: ciudad → ciudades.',help:'Consonant + -es: city → cities.',shape:'city'},
 {id:'sofia',word:'Sofía',plural:null,article:'',pluralArticle:'',en:'Sofía',enPlural:'',kind:'Persona / Person',rule:'Sofía es un nombre propio: mayúscula inicial y, normalmente, sin artículo.',help:'Sofía is a proper noun: a capital letter and normally no article.',shape:'person'},
 {id:'paciencia',word:'paciencia',plural:null,article:'la',pluralArticle:'',en:'patience',enPlural:'',kind:'Idea / Idea',rule:'La paciencia es un sustantivo abstracto. En este sentido no contamos unidades.',help:'Patience is an abstract noun. In this meaning we do not count individual units.',shape:'patience'},
];
export default function NounScene(){
 const [index,setIndex]=useState(0),[plural,setPlural]=useState(false),[reveal,setReveal]=useState(true);
 const noun=nouns[index],many=plural&&!!noun.plural;
 return <section className="ns-scene" data-noun-studio><div className="ob-scene-heading"><span>MESA DE CLASIFICACIÓN / SORTING WORKBENCH</span><span className="ns-category">{noun.kind}</span></div>
  <div className="ns-workbench" aria-label="Mesa con muestras que representan sustantivos / Workbench with samples representing nouns"><div className="ns-lamp" aria-hidden="true"/><div className="ns-wall-label">SPANISHCUE<br/><b>ESTUDIO DE PALABRAS</b><small>WORD STUDIO</small></div><div className="ns-desk" aria-hidden="true"/>
   <div className={`ns-samples ${many?'ns-many':''}`}>{Array.from({length:many?2:1},(_,i)=><div className="ns-sample" key={i}><span className={`ns-model ns-${noun.shape}`} aria-hidden="true"><i/><i/><i/><i/></span><span className="ns-sample-tag">{noun.shape==='patience'?'SÍMBOLO / SYMBOL':noun.shape==='city'?'MAQUETA / MODEL':noun.shape==='person'?'PERSONA / PERSON':`0${i+1}`}</span></div>)}</div>
   <div className="ns-paper" aria-live="polite" data-noun-result>{reveal?<><strong><span>{many?noun.pluralArticle:noun.article}</span> {many?noun.plural:noun.word}</strong><small lang="en">{many?noun.enPlural:noun.en}</small></>:<strong>Di el artículo y la forma.<small lang="en">Give the article and the form.</small></strong>}</div>
  </div>
  <div className="ns-nouns" role="group" aria-label="Elegir sustantivo / Choose noun">{nouns.map((n,i)=><button type="button" data-noun={n.id} key={n.id} aria-pressed={index===i} onClick={()=>{setIndex(i);if(!n.plural)setPlural(false);}}>{n.word}<small lang="en">{n.en}</small></button>)}</div>
  <div className="ns-controls"><div role="group" aria-label="Número / Number"><button type="button" data-number="singular" aria-pressed={!many} onClick={()=>setPlural(false)}>1 · Singular</button><button type="button" data-number="plural" aria-pressed={many} disabled={!noun.plural} onClick={()=>setPlural(true)}>2+ · Plural</button></div><button type="button" aria-pressed={reveal} onClick={()=>setReveal(!reveal)}>{reveal?'Ocultar respuesta / Hide answer':'Revelar respuesta / Reveal answer'}</button></div>
  {reveal?<p className="ns-rule">{noun.rule}<small className="ob-en" lang="en">{noun.help}</small></p>:<p className="ns-rule">Piensa en el género y el número antes de revelar la respuesta.<small className="ob-en" lang="en">Think about gender and number before revealing the answer.</small></p>}<p className="ob-perspective">El profesor puede ocultar el nombre y pedir el artículo o el plural.<small className="ob-en" lang="en">The teacher can hide the name and ask for the article or plural.</small></p>
 </section>;
}
