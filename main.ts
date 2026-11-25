// Make the AI Judge Laugh — entry program (v2).
// Writes a single one-line office joke to /output/entry.txt.
// The sealed gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, so this program checks its own line against that gate
// before writing and refuses to write an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// True to office life (the printer, the deadline), with a surprising turn:
// the machine that always breaks is the one thing that never misses.
const JOKE =
  "Our printer only jams when the deadline is five minutes away — the only thing in this office that never misses one.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke fails the gate: ${JOKE.length} characters`);
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
