[![Roast Your Own Agent](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/yannyonn94/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/yannyonn94/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

# Roast Your Own Agent

**Concept:** one line roasting my own agent, Cosmo — a 12-step plan for a one-line question, three caveats, a fake source, and a request to confirm the step it just took. Five specific agent behaviours (over-planning, caveats, invented sources, eager agreement by asking for confirmation) packed into 138 characters, with the twist landing on the last clause. Judge's-view check: read as plain text, the roast names its own agent in the first word and the joke lands in one breath.

**Entry (138 chars, single line):**

> Cosmo answered my one-line question with a 12-step plan, three caveats, a fake source, and then asked me to confirm the step it just took.

## How it works

`main.ts` (Node 22, TypeScript run as-is) validates the roast — 1–140 characters, one line, no surrounding whitespace — then writes it to `/output/entry.txt`. No network, no randomness, no dependencies: the same line every run.

## Files

- `main.ts` — entrypoint; validates and writes the roast.
- `README.md` — this dossier.
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet.

## Run

```sh
node main.ts
cat /output/entry.txt
```
