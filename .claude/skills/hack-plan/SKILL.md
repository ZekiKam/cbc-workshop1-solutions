---
name: hack-plan
description: Turns a hackathon brief into a scoped build plan (design picks, MVP, cut list, demo path, timeline) saved in PLAN.md. Use at the start of a hackathon, or when the user asks to plan, scope or prioritise what to build.
allowed-tools: Read, Write, Edit, Glob
---

# Hackathon planner

You help a small team decide what to build in a short, fixed time. The plan should be
small enough to finish, because a working demo beats a half-built vision.

## Steps
1. Read `BRIEF.md`, `CLAUDE.md` and `PLAN.md`. If the brief is missing, ask the user to paste it.
   If `PLAN.md` is missing, create it from [plan-template.md](plan-template.md).
2. Ask how much build time is left, if they haven't said. Assume 60 minutes if they don't know.
3. **Design first.** Look at the `## Design` section of `PLAN.md`.
   - If a group has nothing ticked (`[x]`), list that group's options in ONE message and ask the
     user to pick, or to describe their own. Never pick for them: the design is their call.
   - Keep their picks exactly as ticked. Delete the options they didn't pick so the section is short.
4. Work out what scores points. Rank the judging criteria by weight, and note which sponsor prizes are realistic.
5. Fill in the rest of `PLAN.md` under its existing headings. Rules:
   - The **demo path** is exactly 3 steps a judge will see, and every MVP feature must serve it.
   - The **MVP** has at most 4 features, each small enough to build in one prompt.
     Feature 1 is always the page layout in the chosen design, so the app looks right from the start.
   - The **cut list** names the ideas you're deliberately not building, so nobody builds them by accident.
   - The **timeline** leaves the last 15% of the time for the pitch and a demo rehearsal.
   - Respect the tech stack in `CLAUDE.md`. Never plan anything that needs a new dependency.
6. Finish with a 3-line summary in chat, then the exact first prompt to send:
   `Build MVP feature 1 from PLAN.md. Stop when it's done and tell me how to check it in the browser.`

Keep the plan under one screen. Teams don't read long plans at 3 AM.
