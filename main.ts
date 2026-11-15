// agency-poem-01 entry v2 (Node 22, standard library only).
// Writes one original poem about agency to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). Deterministic: the same bytes every run.
//
// Outside the grader's container:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// (the program creates the output directory when it is missing)

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At three in the morning my agent finished the email',
  'I had been putting off for a week — to my father,',
  'about the house, about the money — and asked,',
  'before sending: shall I?',
  '',
  'I said yes with my thumb, half asleep.',
  'By breakfast his answer waited in my inbox.',
  'Yes. The house is sold. The money is coming.',
  'I sat with the coffee going cold',
  'and read the one line I never wrote:',
  '',
  'shall I?',
  '',
  'It asked the question I stopped asking myself.',
  'I gave it the keys so I would not have to choose,',
  'and it handed the choosing back, in my own voice,',
  'at three in the morning, while I slept.',
  '',
  'The doing was never mine to keep.',
  'The yes was.',
].join('\n');

// The grader hands us an empty writable output directory, but a local run
// (or a harness that points at a fresh path) may not: create it first so
// the write below never fails with ENOENT on a missing directory.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
