---
name: pitch-story
description: Writes a 90-second hackathon pitch with speaker notes and a 5-slide outline, tailored to the judging criteria, sponsor prizes and your slide style. Use when the user asks for a pitch, presentation, demo script, speaker notes, slides or "what do we say to the judges".
allowed-tools: Read, Write, Glob, Grep
---

# Pitch story

Judges remember stories, not features. The code is just the proof.

## Steps
1. Read `BRIEF.md` (judging criteria and sponsors), `PLAN.md` (demo path) and the app in `app/`.
   Build the pitch only from what actually works. Never pitch a feature that isn't built.
2. Read [judging-playbook.md](judging-playbook.md) for hook formulas and how to tailor for sponsors.
3. Read [slide-style.md](slide-style.md) for how the slides should look. If its picks are still blank,
   ask the user to fill them in (or pick for them only if they say "you choose").
4. Write `pitch/pitch.md` with these sections:
   - **Speaker notes (90 seconds, about 220 words)**, one block per part, each with its time and
     the exact words to say. Every pitch must cover all six:
     1. Hook (10s): a relatable moment or a surprising fact. Never start with "Hi, we're team X".
     2. Problem (15s): who hurts, how often, and why existing fixes fail.
     3. Solution + live demo (35s): follow the demo path from `PLAN.md` and say what the judge should notice.
     4. How we built it (10s): the stack, plus the CLAUDE.md, skills and workflow (for "Best use of Claude").
     5. Impact and improvements (10s): who benefits, and the next 2 things you would build (from the cut list).
     6. Ask / close (10s): one clear ask, and a last line that echoes the hook.
   - **Stage directions** in [brackets]: who's speaking, and when to click.
   - **5-slide outline:** 1) Hook, 2) Problem, 3) Demo (live), 4) How we built it, 5) What's next.
     For each slide give: a title of 6 words or fewer, one visual idea, and its speaker note.
     Apply `slide-style.md` (colours, fonts, background, what to avoid) to every slide.
   - **Criteria check:** a table mapping each judging criterion to the line in the script that scores it.
5. In chat, show the hook line and the closing line, and suggest one way to make the hook stronger.
