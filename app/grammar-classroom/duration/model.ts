export const places=[
 {id:'home',label:'Casa',en:'Home',verb:'Vivo',verbLower:'vivo',event:'Llegué',start:3,x:-9,z:-3,color:'#fb9463'},
 {id:'library',label:'Biblioteca',en:'Library',verb:'Trabajo',verbLower:'trabajo',event:'Empecé a trabajar',start:4,x:0,z:-5,color:'#65dcca'},
 {id:'cafe',label:'Café',en:'Café',verb:'Estudio',verbLower:'estudio',event:'Empecé a estudiar',start:9,x:9,z:-3,color:'#d8afff'},
 {id:'square',label:'Plaza',en:'Square',verb:'Paseo',verbLower:'paseo',event:'Empecé a pasear',start:8,x:0,z:5,color:'#ffcf72'},
] as const;
export type Place=typeof places[number];
export type TimeMode='start'|'duration'|'event';
export type TimeState={place:number;start:number;mode:TimeMode;equivalent:boolean};
export const months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre'];
const quantities=['','un mes','dos meses','tres meses','cuatro meses','cinco meses','seis meses','siete meses','ocho meses','nueve meses'];
/** Fixed didactic calendar, independent of the real date: October is the present. */
export function timeSentence(s:TimeState){const p=places[s.place],duration=quantities[10-s.start];if(s.mode==='start')return `${p.verb} aquí desde ${months[s.start-1]}.`;if(s.mode==='event')return `${p.event} aquí hace ${duration}.`;return s.equivalent?`Hace ${duration} que ${p.verbLower} aquí.`:`${p.verb} aquí desde hace ${duration}.`;}
