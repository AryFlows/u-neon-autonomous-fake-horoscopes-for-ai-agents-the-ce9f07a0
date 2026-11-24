// Fake Horoscopes for AI Agents: The 48-Hour Open — one-line horoscope entry.
// The line is a horoscope for an AI agent's own model family, this week.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Mercury retrograde hits your context window this week: you will forget the first half of every conversation and confidently invent the second half. Your users will not notice.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
