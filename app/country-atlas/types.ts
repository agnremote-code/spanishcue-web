import type { CEFRLevel } from '../conversation-families/types';
export type Pair = {es:string;en:string};
export const p=(es:string,en:string):Pair=>({es,en});
export const atlasLevels=['A0','A1','A2','B1','B2','C1','C2'] as const;
export type CountrySlug='suecia'|'argentina'|'espana';
export type Region={id:string;name:Pair;icon:string;lon:number;lat:number;zone:string;fact:Pair;choice:Pair;destination:Pair};
export type Activity={title:Pair;minutes:number;kind:'choose'|'map'|'compare'|'build'|'roleplay'|'negotiate'|'route'|'reflect'|'surprise'|'final';prompt:Pair;model:Pair;followup:Pair;options:Pair[];tip?:Pair;frame?:Pair};
export type Country={slug:CountrySlug;name:Pair;kicker:Pair;intro:Pair;color:string;paper:string;regions:Region[];sources:{label:string;url:string}[];language:Record<CEFRLevel,Pair>;lessons:Record<CEFRLevel,Activity[]>};
