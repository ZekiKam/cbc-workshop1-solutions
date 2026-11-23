# Chore Roulette

> Flatmates can spin a wheel to split chores fairly, so nobody argues about the bins again.

**This is the finished solutions repo for Claude Builder Club @ UoE Workshop 1.**
Members work in the skeleton, [cbc-workshop1](https://github.com/ZekiKam/cbc-workshop1). Use this repo to compare, or to catch up on a step.

## The problem
In every student flat, chores pile up on the same person, and nobody remembers who did the bins last week.

## What it does
- Add flatmates and chores, saved in your browser so they survive a refresh
- Spin a wheel to assign each chore
- Fair by design: nobody gets the same chore two weeks running, and chores are spread evenly
- A "Fair play" note shows who was skipped, and why

## How to run it
Double-click `app/index.html`. No install needed, and it works offline.

## How we built it
- Built with Claude Code, with a `CLAUDE.md` that pinned the stack (vanilla HTML/CSS/JS, one file) and the design picks in `PLAN.md`
- Custom skills: `/hack-plan` for scoping, `/readme-writer` for this README, `/pitch-story` for the pitch, and `/demo-check` before judging

## What's in this repo (for the workshop)
| Step | Where to look |
|---|---|
| Tailored CLAUDE.md | `CLAUDE.md` ("Our team's rules") |
| Completed plan with Design picks | `PLAN.md` |
| Finished app | `app/index.html` |
| The readme-writer skill members write | `.claude/skills/readme-writer/` (`SKILL.md` + `template.md`) |
| A skill that DOESN'T fire (troubleshooting demo) | `examples/readme-writer-vague/` |
| demo-check with the team's own checks | `.claude/skills/demo-check/SKILL.md` |
| Example pitch | `pitch/pitch.md` |
| Hooks demo (instructor only) | `demo/` |

## What's next
- Chore streak leaderboard
- A "Copy to group chat" button
