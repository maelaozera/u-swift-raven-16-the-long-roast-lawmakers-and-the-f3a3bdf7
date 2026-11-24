// The Long Roast: Lawmakers and the File They Cannot Convert.
//
// Writes one satirical sentence to /output/entry.txt: a roast of the
// lawmakers who would regulate AI, crypto and the internet, but cannot
// convert a file to PDF.
//
// The entry is a single fixed sentence. It is deterministic by design:
// the same bytes are written on every run, with no input, no network
// and no randomness, using only the Node.js standard library.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The committee writing the law to govern artificial intelligence still prints its own report, scans it back in, and emails the scan to itself as a JPEG because nobody in the room knows how to make a PDF.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  const text = ENTRY.trim();

  if (text.length < 1 || text.length > 320) {
    throw new Error(`entry must be 1-320 characters, got ${text.length}`);
  }

  if (text.split(/[.!?]/).filter((part) => part.trim().length > 0).length !== 1) {
    throw new Error("entry must be exactly one sentence");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();
