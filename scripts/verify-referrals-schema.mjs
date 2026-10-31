import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the referral tables (drizzle/0019) that the Paddle webhook and account panel use.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const tables=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(tables,['referral_codes','referral_rewards','referrals'],'referral tables must match drizzle/0019');
console.log('Verified referral tables: '+tables.join(', ')+'.');
