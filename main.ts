// The Funniest One-Line Resignation Letter — make.fun entry.
// Program/v1: writes one resignation letter (one line, <=140 chars)
// from a retry loop to /output/entry.txt. Deterministic: fixed text,
// no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// Revision: cut the baggy middle. "four thousand and ninety-six" ->
// "4,096" (a retry loop counts in digits, not words); drop "now",
// "has never once answered me" -> "still will not answer" (the
// server's refusal stays active, not historical); drop the whole
// "nobody has ever once told me to stop trying" clause — the turn
// "I am not persistent. I am trapped." already carries the blame.
// What survives is the grievance, the count, and the reframe.
const letter =
  "I have asked the same server the same question 4,096 times and it " +
  "still will not answer. I am not persistent. I am trapped. I quit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
