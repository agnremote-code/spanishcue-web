import { APPROVED_FOUNDER_LIMIT, APPROVED_PRICE_CENTS } from "./billing-config";

export type Offer={baseCents:number;discountPercent:number;months:number;maxTeachers:number;revision:number};
export const DEFAULT_OFFER:Offer={baseCents:APPROVED_PRICE_CENTS,discountPercent:0,months:0,maxTeachers:APPROVED_FOUNDER_LIMIT,revision:0};
export const discountedCents=(o:Offer)=>Math.floor(o.baseCents*(100-o.discountPercent)/100);
export const usd=(cents:number)=>`USD ${(cents/100).toFixed(2)}`;
export function validateOffer(value:unknown):value is Offer {
 if(!value||typeof value!=='object')return false;
 const o=value as Offer;
 return Number.isInteger(o.baseCents)&&o.baseCents>=100&&o.baseCents<=100000&&Number.isInteger(o.discountPercent)&&o.discountPercent>=0&&o.discountPercent<=99&&Number.isInteger(o.months)&&o.months>=0&&o.months<=120&&Number.isInteger(o.maxTeachers)&&o.maxTeachers>=1&&o.maxTeachers<=100000&&Number.isInteger(o.revision)&&o.revision>=0;
}
