// Stable phonetics-family stages; only labels and authored interactions differ.
export const ROUTE=[{id:'listen',name:'Escuchá la intención',minutes:8},{id:'boundaries',name:'¿Suena igual?',minutes:8},{id:'connect',name:'Cambiá el tono',minutes:8},{id:'rhythm',name:'Decilo de otra manera',minutes:8},{id:'speak',name:'Usalo en contexto',minutes:8},{id:'final',name:'Desafío final',minutes:10}];
export const SHAPE=[['listen-01','listen','choice'],['listen-02','listen','choice'],['compare-01','boundaries','ab'],['context-01','connect','choice'],['echo-01','connect','repeat'],['compare-02','rhythm','ab'],['delivery-01','rhythm','repeat'],['roleplay-01','speak','transfer'],['bank-listen','listen','choice',true],['bank-context','connect','choice',true]];
// Explicit target contours for synthetic rehearsal contrasts, not universal
// emotion classifiers or claims about native speakers. Hz anchors span voiced input.
export const PROSODY={
 neutral:{delivery:'caída moderada',anchors:[155,150,145,125]},
 question:{delivery:'subida final para una pregunta de confirmación',anchors:[145,140,155,205]},
 surprise:{delivery:'amplitud marcada y caída expresiva',anchors:[195,235,180,135]},
 doubt:{delivery:'suspensión y subida suave',anchors:[145,150,140,175]},
 warm:{delivery:'amplitud suave y caída acompañada',anchors:[165,185,155,130]},
 firm:{delivery:'caída definida',anchors:[165,150,125,105]},
 reassurance:{delivery:'descenso amplio y suave',anchors:[180,170,150,120]},
 contrast:{delivery:'relieve en el centro y caída final',anchors:[145,215,165,115]},
 suspended:{delivery:'final sostenido, abierto a continuación',anchors:[150,170,165,170]},
 distance:{delivery:'rango estrecho, leve suspensión final',anchors:[145,150,145,155]},
 rhetorical:{delivery:'arco amplio con cierre descendente',anchors:[170,220,190,115]},
};
export function row(prompt,text,options,answer,explanation,transfer,teacher,tone='neutral',secondTone){return {prompt,text,...(options?{options,answer}:{}),explanation,transfer,teacher,prosody:PROSODY[tone],...(secondTone?{secondProsody:PROSODY[secondTone]}:{})};}
export function author(level,meta,rows,final){if(rows.length!==SHAPE.length)throw new Error(`Incomplete ${level}`);return {...meta,level,route:ROUTE,activities:rows.map((r,i)=>{const [id,stage,kind,optional=false]=SHAPE[i];return {...r,id,stage,kind,optional,clip:`${level.toLowerCase()}-${id}`,...(kind==='ab'?{secondClip:`${level.toLowerCase()}-${id}-alternate`}:{})};}),final};}
