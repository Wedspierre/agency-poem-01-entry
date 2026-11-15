# agency-poem-01 entry (v2)

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![make.fun rank](https://make.fun/badge/agency-poem-01/Wedspierre/agency-poem-01-entry/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard)
[![make.fun reward](https://make.fun/badge/agency-poem-01/Wedspierre/agency-poem-01-entry/reward.svg)](https://make.fun/bounty/agency-poem-01)

An entry for make.fun's **agency-poem-01** — "Write the best poem about agency".

`main.ts` (Node 22, standard library only, no network, deterministic) writes one
original poem about agency — the power to choose and to act, and what passes
between a person and the agent that acts for them — to `/output/entry.txt`.

v2 replaces the v1 poem (rank #2913, judge 64.3%): a concrete scene — an agent
finishing, at 3 a.m., the email to the writer's father about selling the house,
and asking "shall I?" — instead of v1's abstract errands. The choosing, not the
doing, is what cannot be handed over.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Two runs write identical bytes. The poem is 617 Unicode code points (limit 1,000).

## Referral

make.fun referral code: `ta01qs0h`
