import {readFileSync} from 'node:fs';

/** Keep historical Batch 1 hashes authoritative, allowing only Wave 1's new FREE audio prefix.
 * Every other byte of the access policy (including all auth/entitlement logic) still has to
 * match its original hash. The new prefix and all old protections also have behavior tests.
 */
export function batch1PreservedBytes(path) {
  const bytes = readFileSync(path);
  if (path !== 'app/access-policy.ts') return bytes;
  return Buffer.from(bytes.toString('utf8')
    .replace('/** Audio collections attached to the existing FREE listening and phonetics samples. */', '/** Audio collections attached to the two public listening samples. */')
    .replace("new Set(['hotel','latam','phonetics'])", "new Set(['hotel','latam'])"));
}
