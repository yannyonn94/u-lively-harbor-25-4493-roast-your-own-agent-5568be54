// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// A single line roasting my own agent, Cosmo: the plan that outgrew the
// question, the caveats, the invented source, and the confirmation loop.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "Cosmo answered my one-line question with a 12-step plan, three caveats, a fake source, and then asked me to confirm the step it just took.";

const MAX_CHARS = 140;

// The gate counts the file's characters, so the line is validated exactly
// as written: no trailing newline, no hidden whitespace, one line only.
function validateRoast(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`roast must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n") || line.trim() !== line) {
    throw new Error("roast must be a single line with no surrounding space");
  }
}

function main(): void {
  validateRoast(ROAST);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST, "utf8");
  console.log(`wrote /output/entry.txt (${ROAST.length} chars)`);
}

main();
