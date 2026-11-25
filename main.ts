// The Long Roast: Lawmakers and the File They Cannot Convert.
//
// One satirical sentence roasting the lawmakers who would regulate AI,
// crypto and the internet, yet cannot convert a file to PDF. The joke
// turns on their authority: they write the law, then print, scan and
// email their own report as a JPEG. Fully deterministic — the same
// fixed sentence is written on every run, with no input, no network
// and no randomness, using only the Node.js standard library.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast, in two halves: the committee's grand job, then the small
// file it cannot convert.
const ROAST =
  "The committee writing the law to govern artificial intelligence still prints its own report, " +
  "scans it back in, and emails the scan to itself as a JPEG because nobody in the room knows how to make a PDF.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  const text = ROAST.trim();

  // The competition gate: exactly one sentence, 1-320 characters.
  if (text.length < 1 || text.length > 320) {
    throw new Error(`entry must be 1-320 characters, got ${text.length}`);
  }
  const sentences = text.split(/[.!?]/).filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error("entry must be exactly one sentence");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();
