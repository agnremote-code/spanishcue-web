import {readConsent} from '../privacy/consent';
let pending=false;
/** The signed reference waits in the URL until the visitor opts into marketing.
 * No cookie, localStorage or account attribution is written before that choice. */
export async function capturePartnerReferral() {
 if(pending||!readConsent()?.marketing)return;
 const url=new URL(window.location.href),referral=url.searchParams.get('partner_ref');
 if(!referral||referral.length>500||!/^[A-Za-z0-9_.-]+$/.test(referral))return;
 pending=true;
 try {const response=await fetch('/api/partners/touch',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({referral})});
 if(response.ok){url.searchParams.delete('partner_ref');window.history.replaceState(window.history.state,'',url.pathname+url.search+url.hash);}
 }catch{/* A temporary failure can retry on a later consent event or navigation. */}finally{pending=false;}
}
