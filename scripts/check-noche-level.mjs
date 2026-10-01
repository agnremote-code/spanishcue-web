// Lists the B1 strings a Noche Abierta level still leaves untouched.
// Usage: node scripts/check-noche-level.mjs A1
import { contentFor, untouched } from "../app/noche-abierta/levels.mjs";
const level = process.argv[2];
const left = untouched(level);
const base = contentFor("B1");
console.log(`${level}: ${left.length} B1 strings left untouched`);
for (const path of left.slice(0, 400)) console.log("  " + path);
void base;
