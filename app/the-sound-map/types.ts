export type ChoiceTask={type:'choice';prompt:string;options:string[];answer:number;explanation:string};
export type OrderTask={type:'order';prompt:string;items:string[];answer:number[];explanation:string};
export type OpenTask={type:'open';prompt:string;model:string;rubric:string[];explanation:string};
export type Task=ChoiceTask|OrderTask|OpenTask;
export type Scene={id:string;context:string;contextEn:string;glossary:string[][];segments:{speaker:string;voice:string;text:string}[];tasks:Task[];produce:string;produceEn:string;bank:string[];teacher:string};
export type Location={id:string;title:string;titleEn:string;sound:string;icon:string;color:string;position:number[]};
export type Content={locations:Location[];levels:Record<string,{focus:string;focusEn:string;scenes:Scene[]}>};
