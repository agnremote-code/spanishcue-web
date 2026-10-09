import {consentFor} from '../privacy/consent';
import {EXPERIMENT_ID} from './policy.mjs';
const key = 'spanishcue.marketing.funnel.v1';
export function funnelContext():Record<string,string> {
  if(typeof window==='undefined'||!consentFor('analytics'))return {};
  const query=new URLSearchParams(window.location.search);
  const variant=query.get('sc_variant');
  if(query.get('sc_exp')===EXPERIMENT_ID&&(variant==='a'||variant==='b')){
    const context={experiment_id:EXPERIMENT_ID,variant};
    try{window.sessionStorage.setItem(key,JSON.stringify(context));}catch{}
    document.cookie=`spanishcue-city-variant=${variant}; Path=/; SameSite=Lax; Secure`;
    return context;
  }
  try{
    const saved=JSON.parse(window.sessionStorage.getItem(key)||'null');
    if(saved?.experiment_id===EXPERIMENT_ID&&(saved.variant==='a'||saved.variant==='b'))return saved;
  }catch{}
  return {};
}
/** Propagate explicit campaign parameters in links; no storage or tracking before consent. */
export function campaignLink(path:string,search:string):string{
  const target=new URL(path,'https://spanishcue.com');
  const source=new URLSearchParams(search);
  for(const name of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','lang','sc_exp','sc_variant']){
    const value=source.get(name);if(value)target.searchParams.set(name,value.slice(0,180));
  }
  return target.pathname+target.search+target.hash;
}
