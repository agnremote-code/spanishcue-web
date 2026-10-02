import type { ShareSession } from './progress/server-adapter';
/** Only call on headers rebuilt by worker/index.ts; never on raw browser requests. */
export function shareSessionFromHeaders(headers: Headers): ShareSession | null {
  const passId=headers.get('x-autoestudio-pass-id');
  const learnerId=headers.get('x-autoestudio-learner-id');
  const level=headers.get('x-autoestudio-level');
  const revision=Number(headers.get('x-autoestudio-revision'));
  let alias='';try{alias=decodeURIComponent(headers.get('x-autoestudio-alias')||'');}catch{return null;}
  return passId && learnerId && level && /^(a1|a2|b1|b2|c1|c2)$/.test(level) && alias && Number.isInteger(revision) && revision>=1 ? {passId,learnerId,level,alias,revision} : null;
}
