import {advancedChoices} from './advanced-levels';
import {choiceBank,type Choice} from './choices';
import type {CEFRLevel} from '../conversation-families/types';
import {gameDemand} from '../conversation-families/game-language';
const pairs:[Choice['category'],string,string,string,string,[string,string],string][]=[
 ['VIDA','Casa / Home','Parque / Park','En casa hay ruido. / Home is noisy.','En el parque llueve. / It rains in the park.',['Quiero ir a casa. / I want to go home.','Quiero ir al parque. / I want to go to the park.'],'¿Dónde descansas?'],
 ['VIAJES','Tren / Train','Autobús / Bus','El tren es caro. / The train is expensive.','El autobús tarda. / The bus is slow.',['Quiero ir en tren. / I want to go by train.','Quiero ir en autobús. / I want to go by bus.'],'¿Cómo viajas?'],
 ['TRABAJO','En casa / At home','En la oficina / At the office','En casa estás solo. / At home you are alone.','La oficina está lejos. / The office is far.',['Trabajo en casa. / I work at home.','Trabajo en la oficina. / I work at the office.'],'¿Dónde trabajas?'],
 ['PERSONAS','Solo / Alone','Con amigos / With friends','Solo no puedes hablar. / Alone you cannot talk.','Tus amigos llegan tarde. / Your friends arrive late.',['Quiero estar solo. / I want to be alone.','Quiero estar con amigos. / I want to be with friends.'],'¿Con quién sales?'],
 ['DINERO','Comprar / Buy','Ahorrar / Save','Comprar cuesta dinero. / Buying costs money.','Ahorrar necesita tiempo. / Saving takes time.',['Quiero comprar. / I want to buy.','Quiero ahorrar. / I want to save.'],'¿Qué quieres comprar?'],
 ['TECNOLOGÍA','Teléfono / Phone','Libro / Book','El teléfono no tiene batería. / The phone has no battery.','El libro es pesado. / The book is heavy.',['Quiero un teléfono. / I want a phone.','Quiero un libro. / I want a book.'],'¿Qué lees?'],
 ['DECISIONES','Café / Coffee','Té / Tea','El café está frío. / The coffee is cold.','El té cuesta más. / The tea costs more.',['Quiero café. / I want coffee.','Quiero té. / I want tea.'],'¿Qué bebes?'],
];
export function choiceAnswerModel(choice:Choice,selected?:number|null):string {
 const models=choice.answerModels;
 if(!models)return choice.follow;
 return selected===0||selected===1?models[selected]:`A: ${models[0]} · B: ${models[1]}`;
}
export function choicesFor(level:CEFRLevel):Choice[]{
 if(level==='B1')return choiceBank;
 if(['B2','C1','C2'].includes(level))return advancedChoices(level);
 const text=(s:string)=>level==='A0'?s:s.split(' / ')[0];
 return pairs.map(([category,a,b,first,second,models,personal])=>({category,depth:1,options:[text(a),text(b)],...(level==='A0'?{answerModels:models}:{}),follow:level==='A0'?`A: ${models[0]} · B: ${models[1]}`:`${personal} ${gameDemand[level]}`,condition1:{text:text(first),against:0,kind:'COMODIDAD'},afterCondition1:level==='A0'?`¿Cambias? / Do you change? A: ${models[0]} · B: ${models[1]}`:`¿Qué quieres ahora? ${level==='A2'?'Cuenta una experiencia parecida.':''}`,condition2:{text:text(second),against:1,kind:'TIEMPO'},finalPrompt:level==='A0'?`Dos problemas. / Two problems. A: ${models[0]} · B: ${models[1]}`:`Compara los dos problemas. ${gameDemand[level]}`}));
}
export function choiceExtras(level:CEFRLevel,base:{triples:{title:string;options:string[]}[];rankings:{title:string;items:string[]}[];ideal:string[][]}){
 if(level==='B1')return base;
 if(['B2','C1','C2'].includes(level))return {...base,triples:base.triples.map(c=>({...c,title:`${c.title}: ${gameDemand[level]}`})),rankings:base.rankings.map(c=>({...c,title:`${c.title}: ${level==='B2'?'Justifica el coste de tu prioridad.':level==='C1'?'Explicita tu criterio y una excepción.':'Cuestiona qué valor deja fuera esta clasificación.'}`})),ideal:base.ideal.map(([title,q])=>[title,`${q} ${gameDemand[level]}`])};
 const t=(s:string)=>level==='A0'?s:s.split(' / ')[0];
 return {triples:[{title:t('Un día libre / A free day'),options:['Casa / Home','Parque / Park','Cine / Cinema'].map(t)},{title:t('Una bebida / A drink'),options:['Agua / Water','Té / Tea','Café / Coffee'].map(t)}],rankings:[{title:t('Mi día / My day'),items:['Dormir / Sleep','Comer / Eat','Caminar / Walk','Hablar / Talk','Leer / Read'].map(t)},{title:t('Mi casa / My home'),items:['Luz / Light','Silencio / Quiet','Espacio / Space','Jardín / Garden','Amigos / Friends'].map(t)}],ideal:[['CASA / HOME',t('¿Casa o piso? Quiero una casa. / House or flat? I want a house.')],['TRABAJO / WORK',t('¿Dentro o fuera? Trabajo dentro. / Inside or outside? I work inside.')],['TIEMPO / TIME',t('¿Leer o caminar? Quiero leer. / Read or walk? I want to read.')],['PERSONAS / PEOPLE',t('¿Solo o con amigos? Con amigos. / Alone or with friends? With friends.')]].map(([title,q])=>[title,level==='A2'?`${q} ¿Cómo era antes?`:q])};
}
