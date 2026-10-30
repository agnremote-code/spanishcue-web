import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
// Refuses a Worker release whose D1 lacks the newsletter table (drizzle/0018) that /api/newsletter uses.
const batches=JSON.parse(readFileSync(process.argv[2],'utf8'));
const columns=batches.flatMap(batch=>batch.results||[]).map(row=>row.name).sort();
assert.deepEqual(columns,['consent_at','created_at','email','id','normalized_email','source_path','status','unsubscribe_token','unsubscribed_at','updated_at'],'newsletter_subscribers must match drizzle/0018');
console.log('Verified newsletter_subscribers columns: '+columns.join(', ')+'.');
