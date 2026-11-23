---
name: demo-check
description: Runs a pre-demo readiness check for a hackathon project and writes a go/no-go checklist. Use when the user asks if they are ready to demo or present, or wants a final check before judging.
allowed-tools: Read, Glob, Grep
---

# Demo check

Goal: nothing surprises you on stage.

## Steps
1. Read `PLAN.md` (the demo path and design picks) and `app/index.html`.
2. Walk through the demo path in the code, and flag anything that could break live:
   - an empty state (no data yet): does the app crash or look broken?
   - console errors, unfinished TODOs, or placeholder text
   - anything that needs the internet
   - layout at phone width (360px)
3. Run every check in **Our team's extra checks** below as well.
4. Print one checklist in chat, marking each item ✅, ⚠️ or ❌ with a one-line reason:
   - [ ] The demo path works from a fresh page load
   - [ ] Demo data is pre-filled, or quick to add
   - [ ] It works offline (no network needed)
   - [ ] Nothing in the UI says TODO or lorem ipsum
   - [ ] It matches the Design picks in `PLAN.md`
   - [ ] There's a backup: a screen recording or screenshots of the demo
   - [ ] The pitch script exists (`pitch/pitch.md`)
   - [ ] Who talks and who clicks has been agreed
   - [ ] Every check from "Our team's extra checks"
5. Finish with **GO** or **NO-GO**, plus the single most important fix if it's a NO-GO.

Don't edit any files. This skill only reports.

## Our team's extra checks
- The wheel's pointer lands on the same person the message announces.
- Names up to 20 characters fit on the wheel and in the rota without overlapping.
- Clicking "Spin" twice quickly doesn't assign two chores at once.
- Clearing localStorage and reloading shows a friendly empty state, not a broken page.
