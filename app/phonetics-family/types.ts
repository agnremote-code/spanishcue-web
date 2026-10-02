export type Level='A1'|'A2'|'B1'|'B2'|'C1'|'C2';
export type Activity={id:string;stage:string;kind:'choice'|'group'|'connect'|'rebuild'|'ab'|'repeat'|'transfer';optional:boolean;prompt:string;text:string;options?:string[];answer?:number;tokens?:string[];target?:number[];explanation:string;transfer:string;teacher:string;clip:string;secondClip?:string;};
export type Content={level:Level;name:string;demand:string;objective:string;warmup:string;teacher:string;avoid:string;extension:string;route:{id:string;name:string;minutes:number}[];activities:Activity[];final:{prompt:string;steps:string[];support:string;criteria:string[]}};
export type AudioClip={id:string;text:string;src:string|null;status:string;};
export type WorldDefinition={id:string;title:string;tagline:string;description:string;art:string;mascot:string;contentFor:(level:string)=>Content;clips:Record<string,AudioClip>;audioNotice:string;guide?:MascotGuidance;mascotInArt?:boolean;artAlt?:string;studioLabel?:string;};

export type MascotGuidance={listen:string;react:string;produce:string;complete:string;teacher:string;poses:Record<'listen'|'react'|'produce'|'complete'|'teacher',string>};
