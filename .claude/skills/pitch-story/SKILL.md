---
name: pitch-story
description: Writes a 90-second hackathon pitch script and a 5-slide outline tailored to the judging criteria and sponsor prizes. Use when the user asks for a pitch, presentation, demo script, slides or "what do we say to the judges".
allowed-tools: Read, Write, Glob, Grep
---

# Pitch story

Judges remember stories, not features. The code is just the proof.

## Steps
1. Read `BRIEF.md` (judging criteria and sponsors), `PLAN.md` (demo path) and the app in `app/`.
   Build the pitch only from what actually works. Never pitch a feature that isn't built.
2. Read [judging-playbook.md](judging-playbook.md) for the hook formulas and how to tailor for sponsors.
3. Write `pitch/pitch.md` with these sections:
   - **Script (90 seconds, about 220 words)**, using this structure:
     1. Hook (10s): a relatable moment or a surprising fact. Never start with "Hi, we're team X".
     2. Problem (15s): who hurts, and how often.
     3. Live demo (40s): follow the demo path from `PLAN.md`, and say what the judge should notice.
     4. How we built it (15s): name the CLAUDE.md, skills and workflow. This is aimed at the "Best use of Claude" prize.
     5. Ask / close (10s): what's next, plus a memorable last line that echoes the hook.
   - **Stage directions** in [brackets]: who's speaking, and when to click.
   - **5-slide outline:** 1) Hook, 2) Problem, 3) Demo (live), 4) How we built it, 5) What's next.
     Each slide gets a title of 6 words or fewer and one visual idea. Slides support the story and don't repeat it.
   - **Criteria check:** a table mapping each judging criterion to the line in the script that scores it.
4. In chat, show the hook line and the closing line, and suggest one way to make the hook stronger.
