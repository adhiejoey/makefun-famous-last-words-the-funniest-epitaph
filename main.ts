import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I died doing what I loved: ignoring the check engine light.";

// Keep the carving inside the gate: one line, plain text, well under 150 chars.
if (line.length > 145 || line.includes("\n") || line.trim().length === 0) {
  throw new Error("Epitaph does not fit the one-line limit.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
