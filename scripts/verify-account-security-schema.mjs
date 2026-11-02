import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the account-sharing tables (drizzle/0020) that PRO lesson opens write and Admin → Seguridad reads.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const tables=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(tables,['account_daily_usage','account_devices'],'account security tables must match drizzle/0020');
console.log('Verified account security tables: '+tables.join(', ')+'.');
