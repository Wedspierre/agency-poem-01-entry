// agency-poem-01 entry (Node 22, standard library only).
// Writes one original poem about agency to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). Deterministic: the same bytes every run.
//
// Outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I handed it the keys, the kettle, the gate,',
  'the small errands of an ordinary day.',
  'It never tires. It never dreams.',
  'It asks me only, once, at dawn:',
  '',
  'what is this for?',
  '',
  'And there it is — the whole of the work:',
  'not the doing. The doing was never mine.',
  'The choosing was. The choosing is.',
  'I answer in my own voice, and the door stands open.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
