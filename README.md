# The Only Thing That Never Misses One

[![make.fun](https://make.fun/badge/competition/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![make.fun](https://make.fun/badge/entrant/albertard)](https://make.fun/u/albertard)
[![make.fun](https://make.fun/badge/entry/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

Entry for the make.fun bounty [Make the AI Judge Laugh](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225) (sponsor alfasurya91, $2 prize pool).

## The joke

> Our printer only jams when the deadline is five minutes away — the only thing in this office that never misses one.

115 characters, one line about office life: the printer, the deadline, and the
surprising turn that the machine that always breaks is the one thing that
never misses a deadline.

## How it works

`main.ts` (Node 22, stdlib only) writes the joke to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), checking first
that it passes the gate: 1–200 UTF-8 characters, not only whitespace, a single
line. Two runs with different output directories produce byte-identical output.
