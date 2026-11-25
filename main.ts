// The Router Confesses — make.fun one-liner entry.
// Writes a single excuse line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The router speaks in its own voice: it didn't crash at the climax, it was
// holding its breath along with the viewer — and forgot to breathe back.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I didn't crash, I was holding my breath with you — I just forgot to breathe back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check, kept in the program so a bad line can never ship silently:
// the entry must be 1-200 characters of real text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
