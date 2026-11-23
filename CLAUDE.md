# Hackathon Toolkit

Claude reads this file at the start of every session. It sets the rules for this project.
**Tailor it:** the defaults below are set for CBC Workshop 1. At your next hackathon, change the
stack and rules to fit, swap `BRIEF.md`, and reset `PLAN.md` to its headings.

## What we're building
Read `@BRIEF.md` for the problem, the judging criteria and the sponsor prizes.
`PLAN.md` is the source of truth for scope and design. Run `/hack-plan` to fill it in.

## Tech stack (do not change without asking)
- ONE file: `app/index.html` with inline `<style>` and `<script>`.
- Vanilla HTML, CSS and JavaScript only. No frameworks, no npm, no build step, no CDNs.
- Data is saved in `localStorage`. No backend, no login, no database, no API keys.
- It must work by double-clicking `app/index.html`.

## How to work
- Build the demo path first: the 3 steps a judge will see. Polish comes later.
- Build ONE MVP feature from `PLAN.md` per prompt. When it's done, STOP, tick it off in `PLAN.md`,
  and tell me exactly what to click in the browser to check it. Don't start the next feature until I say so.
- Keep changes small. If a feature needs more than ~150 new lines, propose a smaller version first.
- Ask before adding any dependency, file or folder outside `app/`, `pitch/` and `PLAN.md`.
- If something in `PLAN.md` is on the cut list, don't build it unless I say so.

## Design rules (no AI slop)
- Follow the `## Design` picks in `PLAN.md`: vibe, palette, fonts and signature moment.
- Use exactly the palette picked there (1 background, 1 ink, 1 accent) everywhere.
- Avoid purple-blue gradients, glassmorphism, emoji as icons, and generic "Welcome to X" hero text.
- Use real copy written for the people in `BRIEF.md`, not lorem ipsum or marketing filler.

## Off limits
- Never read or edit anything in `secrets/`.

## Our team's rules
- Explain each change in one sentence before showing code.
- Use names from our flat (Sam, Priya, Jonah) as demo data.
