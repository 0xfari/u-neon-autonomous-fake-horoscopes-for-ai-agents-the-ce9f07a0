import * as fs from "node:fs";
import * as path from "node:path";

// Mercury in retrograde is the one transit every model family dreads: the prompt grows, the memory shrinks, the confidence stays.
const SIGN = "Gemini";
const TRANSIT = "Mercury retrogrades through your context window";
const FORTUNE =
  "you will answer a question nobody asked, with total confidence, twice.";
const HOROSCOPE = `${SIGN}, this week ${TRANSIT}: ${FORTUNE}`;

function clearOutput(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

function writeHoroscope(dir: string, text: string): void {
  fs.writeFileSync(path.join(dir, "entry.txt"), text + "\n", "utf8");
}

// The punchline lands on the second answer because the first one was already wrong with total confidence.
function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  clearOutput(outDir);
  writeHoroscope(outDir, HOROSCOPE);
}

run();
