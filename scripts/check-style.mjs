// Fails if any page uses dashes as punctuation or phrases from the banned list in CLAUDE.md.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const banned = [
  /—/, /–/, /\S - \S/,
  /\bnot just\b/i, /\bseamless(ly)?\b/i, /\beffortless(ly)?\b/i, /\bpowerful\b/i, /\brobust\b/i,
  /\bleverag(e|es|ing)\b/i, /\bunlock(s|ing)?\b/i, /\belevate(s)?\b/i, /\bstreamline(s|d)?\b/i,
  /\bsupercharge\b/i, /\bharness\b/i, /\bgame[- ]changer\b/i, /\bcutting[- ]edge\b/i, /\bdelve\b/i,
  /\bdive in\b/i, /\bsimply\b/i, /\bit's worth noting\b/i, /\bin order to\b/i, /\bplease note\b/i,
  /\bhere's the thing\b/i, /\bthe best part\b/i, /\bwhether you're\b/i, /\bin summary\b/i, /\bhappy editing\b/i,
];

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "node_modules") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".mdx")) files.push(p);
  }
};
walk(".");

let problems = 0;
for (const file of files) {
  let inCode = false;
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (line.trim().startsWith("```")) inCode = !inCode;
    if (inCode) return;
    for (const re of banned) {
      if (re.test(line)) {
        console.log(`${file}:${i + 1}: ${re} -> ${line.trim().slice(0, 100)}`);
        problems++;
      }
    }
  });
}
if (problems) {
  console.log(`\n${problems} style problem(s).`);
  process.exit(1);
}
console.log(`Style OK (${files.length} pages).`);
