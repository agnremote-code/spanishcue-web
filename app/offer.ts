export type Offer={baseCents:number;discountPercent:number;months:number;maxTeachers:number;revision:number};
export const DEFAULT_OFFER:Offer={baseCents:1499,discountPercent:50,months:12,maxTeachers:100,revision:0};
export const discountedCents=(o:Offer)=>Math.floor(o.baseCents*(100-o.discountPercent)/100);
export const usd=(cents:number)=>`USD ${(cents/100).toFixed(2)}`;
export function validateOffer(value:unknown):value is Offer {
 if(!value||typeof value!=='object')return false;
 const o=value as Offer;
 return Number.isInteger(o.baseCents)&&o.baseCents>=100&&o.baseCents<=100000&&Number.isInteger(o.discountPercent)&&o.discountPercent>=1&&o.discountPercent<=99&&Number.isInteger(o.months)&&o.months>=1&&o.months<=120&&Number.isInteger(o.maxTeachers)&&o.maxTeachers>=1&&o.maxTeachers<=100000&&Number.isInteger(o.revision)&&o.revision>=0;
}
