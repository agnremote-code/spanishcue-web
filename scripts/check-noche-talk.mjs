// Editorial audit of Noche abierta's general conversation.
// node scripts/check-noche-talk.mjs [street-file-name]
import { auditNocheTalk, auditStreetFile } from '../app/noche-abierta/talk/check.mjs';

const only = process.argv[2];
const problems = only ? auditStreetFile(only) : auditNocheTalk();
for (const problem of problems) console.error(problem);
console.log(problems.length ? `NOCHE TALK: ${problems.length} problems` : 'NOCHE TALK: OK');
process.exitCode = problems.length ? 1 : 0;
