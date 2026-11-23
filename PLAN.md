# PLAN: Chore Roulette

**One-liner:** Flatmates can spin a wheel to split chores fairly, so nobody argues about the bins again.

## Design
- Vibe: [x] Flat noticeboard: warm paper, bold ink, one bright accent, chunky shadows
- Palette: [x] Paper `#F4EFE4` / Ink `#1D1B16` / Tomato `#D9482B`
- Fonts: [x] Georgia serif headings + system sans body
- Signature moment: [x] A big spinning wheel with a satisfying slow-down, plus a "Fair play" note
- Must look good on: [x] Phone (360px wide) [x] Laptop

## Demo path (what judges see, in order)
1. Add 3 flatmates and 3 chores.
2. Spin: the wheel lands, and the rota fills in.
3. Click "New week" and spin bins: last week's person is skipped, with a "Fair play" note.

## MVP (build in this order)
- [x] 1. Page layout in the chosen design, plus add/remove flatmates and chores: chips appear, duplicates are ignored
- [x] 2. Spinning wheel that assigns the next chore: the pointer lands on the winner
- [x] 3. Fairness: no repeats from last week, and loads stay even
- [x] 4. Save to localStorage: everything survives a refresh

## Cut list (not building, on purpose)
- Accounts, sharing links, notifications
- Chore streak leaderboard (stretch)
- Copy to group chat (stretch)

## Points strategy
| Criterion | Weight | How we score it |
|---|---|---|
| Impact | 30% | Every student flat has this argument |
| Demo | 30% | The wheel spin is the money shot, and the fairness note proves the logic |
| Design | 20% | Noticeboard look: warm paper, bold ink, one accent colour |
| Technical | 20% | Fair assignment search, persistence, works offline in one file |

## Timeline
| Time | Goal |
|---|---|
| 0:21–0:24 | Plan |
| 0:24–0:34 | MVP features 1–4 |
| 0:49–0:57 | Pitch |
