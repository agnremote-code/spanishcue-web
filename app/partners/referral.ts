export const PARTNER_COOKIE='spanishcue_partner';
export const PARTNER_TTL=30*86400;
export type Referral={code:string;clickedAt:number};
const codePattern=/^sc_[a-f0-9]{24}$/;
const encode=(data:Uint8Array)=>btoa(String.fromCharCode(...data)).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');
const decode=(value:string)=>Uint8Array.from(atob(value.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0));
async function key(secret:string) {return crypto.subtle.importKey('raw',new TextEncoder().encode(`spanishcue:partners:v1:${secret}`),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);}
export async function signReferral(ref:Referral,secret:string) {
 if(secret.length<32||!codePattern.test(ref.code)||!Number.isSafeInteger(ref.clickedAt))throw new Error('partner_cookie_unavailable');
 const payload=encode(new TextEncoder().encode(JSON.stringify(ref)));
 return `${payload}.${encode(new Uint8Array(await crypto.subtle.sign('HMAC',await key(secret),new TextEncoder().encode(payload))))}`;
}
export async function verifyReferral(value:string|null,secret:string,now=Math.floor(Date.now()/1000)):Promise<Referral|null> {
 if(!value||value.length>500||secret.length<32)return null;
 try {const [payload,sig,...extra]=value.split('.');if(!payload||!sig||extra.length)return null;
 if(!await crypto.subtle.verify('HMAC',await key(secret),decode(sig),new TextEncoder().encode(payload)))return null;
 const ref=JSON.parse(new TextDecoder().decode(decode(payload)));
 return codePattern.test(ref.code)&&Number.isSafeInteger(ref.clickedAt)&&ref.clickedAt<=now&&ref.clickedAt>now-PARTNER_TTL?ref:null;
 }catch{return null;}
}
export function partnerCookieValue(header:string|null) {return header?.split(/;\s*/).find(v=>v.startsWith(`${PARTNER_COOKIE}=`))?.slice(PARTNER_COOKIE.length+1)??null;}
