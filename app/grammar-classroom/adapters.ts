import type {Exercise, LessonContext, Rule} from './types';
import * as worlds from '../grammar-worlds/data';
import * as nextWorlds from '../grammar-worlds/data-next';
import * as phrases from '../phrase-labs/data';
import * as advanced from '../phrase-labs/data-advanced';
import * as c1 from '../phrase-labs/data-c1';
import * as syntax from '../syntax-labs/data';
import {verbalLessons} from '../verbal-system/lesson-data';

// Imported only by server lesson composition. Original banks remain intact.
const worldBank=Object.values({...worlds,...nextWorlds});
const phraseBank=[phrases.gruposConSentido,phrases.oracionesCompletas,phrases.describirConPrecision,phrases.oracionFlexible,advanced.decirSinRepetir,advanced.perifrasesDeCambio,advanced.precisionEditorial,advanced.verbosConConexion];
const c1Bank=[c1.ambiguedadC1,c1.arquitecturaVerbalC1];
const syntaxBank=Object.values(syntax);
const pick=<T,>(items:T[],indices:number[])=>indices.map(index=>{if(!items[index])throw new Error(`Invalid core index ${index}`);return items[index];});
const choice=(prompt:string,options:string[],answer:number,explanation:string,accepted?:number[]):Exercise=>({kind:'choice',prompt,options,answers:[...new Set([answer,...(accepted||[])])],explanation});
const open=(prompt:string,model:string,criterion:string):Exercise=>({kind:'open',prompt,model,criteria:[criterion,'Se aceptan otras formulaciones que conservan el significado y la estructura objetivo.']});

const choiceIndices:Record<number,number[]>={40:[0,1,2,3],41:[0,1,2,5],42:[0,1,6,7],43:[0,1,2,3],44:[0,1,2,7],45:[0,1,2,3],47:[0,1,2,4],110:[0,1,2,3],111:[0,1,2,3],112:[0,2,3],114:[0,1,2],115:[0,1,3,5],211:[0,2,3,5]};
const verbChoices:Record<number,number[]>={140:[0,4],143:[0,1,3,4],144:[0,1,3,4],145:[0],148:[0,2],149:[0,1,2,4],152:[1,2,3,4]};
const verbTransforms:Record<number,number[]>={143:[0,2],144:[0,2],145:[0],148:[1]};
const verbExtra:Record<number,Exercise[]>={
  140:[choice('Yo ___ en una oficina todos los días.',['trabajo','trabaja','trabajamos'],0,'Yo concuerda con trabajo en el presente habitual.'),choice('Tú ___ cerca del centro.',['viven','vives','vivimos'],1,'Tú corresponde a la terminación -es de vivir.')],
  145:[choice('Da una instrucción afirmativa con tú: ___ la puerta.',['Abre','Abres','Abrir'],0,'El imperativo afirmativo de abrir para tú es abre.'),choice('Da una instrucción negativa con tú para no tocar un cable: ___ el cable.',['No toca','No toques','No tocas'],1,'La instrucción negativa usa no + presente de subjuntivo.'),choice('Da una instrucción afirmativa con tú para organizar una visita.',['Ven mañana.','Vienes mañana.','Viene mañana.'],0,'Ven es el imperativo irregular afirmativo de venir para tú.'),open('Da dos instrucciones con tú: esperar aquí y no abrir la ventana.','Espera aquí. No abras la ventana.','Distingue la forma afirmativa y la negativa del imperativo de tú.')],
  148:[choice('Expresa una valoración de una acción ajena: es importante que tú ___ la dirección.',['confirmes','confirmas','confirmar'],0,'Es importante que introduce una valoración y selecciona subjuntivo.'),choice('Expresa un deseo para otra persona: espero que Ana ___ tiempo.',['tiene','tenga','tener'],1,'Espero que presenta un deseo y lleva subjuntivo.'),open('Pide que otra persona confirme una cita usando quiero que.','Quiero que confirmes la cita.','Usa subjuntivo con quiero que y una persona distinta; acepta confirme/confirmen según el destinatario.')],
};
const applications:Record<number,Exercise[]>={
  40:[open('Escribe en plural: una luz, una canción, un libro.','Unas luces, unas canciones, unos libros.','Conserva género y aplica -ces, -es y -s.'),open('Nombra dos objetos y un lugar de tu entorno con su artículo.','La mesa, el teléfono y la oficina.','Distingue nombres y mantiene el artículo correspondiente.')],
  41:[open('Cambia a plural: una oficina tranquila y grande.','Unas oficinas tranquilas y grandes.','Concuerdan sustantivo y adjetivos.'),open('Describe dos objetos reales con adjetivos distintos.','Mi mesa es pequeña. Mis sillas son cómodas.','Las cualidades concuerdan con el objeto descrito.')],
  42:[open('Presenta una tienda nueva y vuelve a mencionarla en otra frase.','Hay una tienda cerca. La tienda abre a las nueve.','Un/una presenta; el/la recupera el referente.'),open('Cambia al plural: Veo una ventana. La ventana está abierta.','Veo unas ventanas. Las ventanas están abiertas.','Mantiene primera y segunda mención y concordancia.')],
  43:[open('Señala un libro cerca de ti y unas sillas lejos de ambos.','Este libro y aquellas sillas.','La distancia y la concordancia coinciden con la situación.'),open('Pregunta por un objeto desconocido que está junto a tu docente.','¿Qué es eso?','Usa el neutro sin un sustantivo identificado.')],
  44:[open('Aclara quién es el propietario: Ana habla con Luis sobre su casa. La casa pertenece a Luis.','Ana habla con Luis sobre la casa de Luis.','Resuelve la ambigüedad de su.'),open('Di que tú y otra persona tienen dos bicicletas y una mesa.','Nuestras bicicletas y nuestra mesa.','El posesivo concuerda con lo poseído, no con el número de propietarios.')],
  45:[open('Tienes tiempo suficiente, pero poca comida. Describe ambas cantidades.','Tengo bastante tiempo y poca comida.','Distingue cantidad suficiente y escasa, con concordancia.'),open('Explica qué compras cada semana usando una cantidad exacta y todos/todas.','Compro dos botellas de agua y pan todas las semanas.','Incluye cantidad exacta y todo + artículo concordado.')],
  47:[open('Sitúa una cita: mañana, cerca de tu interlocutor, a las diez.','La cita es mañana, ahí, a las diez.','Conserva tiempo y lugar según la perspectiva indicada.'),open('Expresa intensidad con muy y cantidad de acción con mucho.','El curso es muy interesante y estudio mucho.','Distingue muy + adjetivo y verbo + mucho.')],
  110:[open('Amplía casa con una cualidad y un complemento con de, con o para.','Una casa luminosa con patio.','Conserva un núcleo reconocible y concordancia.'),open('Pasa a plural: un libro interesante de cocina.','Unos libros interesantes de cocina.','Concuerdan determinante, nombre y adjetivo; de cocina conserva su función.')],
  111:[open('Niega esta afirmación: Ana trabaja los lunes.','Ana no trabaja los lunes.','No se coloca antes del verbo.'),open('Pregunta por el lugar de esta actividad: Luis estudia en casa.','¿Dónde estudia Luis?','Pregunta por el dato solicitado y conserva la concordancia.')],
  112:[choice('Elige una descripción con concordancia.',['La gente está cansada.','La gente están cansados.'],0,'El núcleo colectivo gente es singular.'),open('Compara dos habitaciones por tamaño y describe una puerta con un participio.','Esta habitación es más grande que la otra. La puerta está cerrada.','Construye la comparación completa y hace concordar el participio.'),open('Pasa al plural: un restaurante recomendado y conocido.','Unos restaurantes recomendados y conocidos.','Mantiene concordancia en ambos participios adjetivales.')],
  114:[choice('Ya hablamos de dos propuestas. Evita repetir el nombre: Prefiero la propuesta de Ana a la propuesta de Luis.',['Prefiero la de Ana a la de Luis.','Prefiero de Ana a de Luis.'],0,'El artículo y el complemento permiten recuperar propuesta.'),open('Presenta a Clara, la única directora del centro, con una aposición.','Clara, la directora del centro, recibe al equipo.','La aposición añade información y se delimita con comas.'),open('De diez estudiantes, solo los que terminaron pueden salir. Reformula sin cambiar quién sale.','Los estudiantes que terminaron pueden salir.','La restricción selecciona parte del grupo; no se añaden comas que cambien el alcance.')],
  115:[open('Antes ibas al gimnasio, lo abandonaste y ahora regresas. Usa volver a.','Vuelvo a ir al gimnasio.','Expresa la reanudación, no el primer comienzo.'),open('Explica un hábito, una actividad que continúa y otra que abandonaste.','Suelo caminar. Sigo estudiando español. Dejé de fumar.','Distingue soler + infinitivo, seguir + gerundio y dejar de + infinitivo.')],
};

export function adaptCore(id:number,path:string,context:LessonContext):{grammar:Rule[];practice:Exercise[]}{
  if(context.grammar&&context.practice)return {grammar:context.grammar,practice:context.practice};
  const slug=path.split('/').at(-1);
  let grammar:Rule[]=[];let practice:Exercise[]=[];
  const world=worldBank.find(x=>x.slug===slug);
  const phrase=phraseBank.find(x=>x.slug===slug);
  const advancedPhrase=c1Bank.find(x=>x.slug===slug);
  const sentence=syntaxBank.find(x=>x.slug===slug);
  const verb=verbalLessons.find(x=>x.id===id);
  const indices=context.coreIndices||[0,1,2];
  if(world){
    grammar=pick(world.stations,indices).map(x=>({title:x.title,form:x.formulas.join(' · '),meaning:x.rule,examples:x.examples.map(e=>e.es),contrast:x.note}));
    if(id===40)grammar[0].title='Personas, lugares, objetos e ideas';
    practice=pick(world.practice,choiceIndices[id]||[0,1,2,3]).map(x=>choice(`${x.context?x.context+' ':''}${id===42&&x.prompt.includes('cerrar')?'Ambos ven una única ventana abierta. ':''}${x.prompt}`,x.options,x.answer,x.why));
  }else if(phrase||advancedPhrase){
    const source=phrase||advancedPhrase!;
    const rules:{title:string;formula:string;explanation:string;examples:string[]}[]=phrase?phrase.principles:advancedPhrase!.chapters;
    grammar=pick(rules,indices).map(x=>({title:x.title,form:x.formula,meaning:x.explanation,examples:x.examples}));
    practice=pick(source.choices,choiceIndices[id]||[0,1,2,3]).map(x=>choice(x.prompt,x.options,x.correct,x.explanation));
  }else if(sentence){
    grammar=pick(sentence.patterns,indices).map(x=>({title:x.label,form:x.formula,meaning:x.explanation,examples:[x.example]}));
    const decisions=pick(sentence.decisions,choiceIndices[id]||[0,1,2,3]);
    practice=decisions.map(x=>choice(`${x.prompt} ${x.left} … ${x.right}`.trim(),x.options,x.correct,x.feedback,x.accepted));
    if(id===220){
      const shared=practice[1];
      if(shared.kind==='choice'){shared.answers=[0,1];shared.explanation='Esté trata la cancelación compartida como objeción de fondo; está vuelve a afirmarla. Compartir el dato no obliga por sí solo a usar subjuntivo. Explica la perspectiva elegida.';}
    }
    // Repairs already carry meaning-specific prompts. Accept alternate solutions manually.
    practice.push(...sentence.repairs.slice(0,2).map(x=>open(`${x.prompt} Frase que revisar: «${x.original}»`,x.options[x.correct],x.feedback)));
  }else if(verb){
    grammar=[{title:'Formación y perspectiva',form:verb.formula,meaning:verb.formation.join(' '),examples:verb.examples.slice(0,2).map(x=>x.es),contrast:verb.core},...pick(verb.uses,indices.filter(i=>i<verb.uses.length)).map(x=>({title:x.title,form:verb.formula,meaning:x.explanation,examples:[x.example.es]}))];
    practice=pick(verb.practice,verbChoices[id]||[0,1,2,3]).map(x=>choice(x.prompt,x.options,x.answer,x.why));
    const extra=verbExtra[id]||[];
    practice.push(...extra.filter(x=>x.kind==='choice'));
    practice.push(...pick(verb.transform,verbTransforms[id]||[0,1]).map(x=>open(x.prompt,x.answer,x.why)),...extra.filter(x=>x.kind==='open'));
  }
  if(applications[id])practice.push(...applications[id]);
  return {grammar:context.grammar||grammar,practice:context.practice||practice};
}
