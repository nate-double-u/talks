---
marp: true
theme: maintainer-summit-2026
paginate: true
footer: 'CC BY 4.0 — Cloud Native Computing Foundation |'
title: "Agentic AI for Maintainers: Getting the Most from GitHub Copilot Enterprise"
author: Nate Waddington
---

<!-- _class: title -->
<!-- _footer: "" -->
<!-- _paginate: false -->
<!-- SLIDE 1 — Act 1: Why This Matters
=== DW ===
Consider cueing the listeners to help organize the talk -- Explicitly put
"Part 1: Why This Matters" on each of the Act 1 slides (and similarly for
Acts 2 and 3).

In general, I think it's a solid talk. Given that your audience is maintainers, the
best way I can see to keep the talk shorter is to omit or abbreviate tangential
technical details, and just be prepared to discuss them if they come up. If you're
giving out the slides (or not the slides but a handout) after the preso, include
notes about those things along with the references. Prioritize the main points.
They'll be curious (they're programmers) but they don't need to know everything today!
=== /DW ==

-->

![bg](images/bg-title.png)

# Agentic AI for Maintainers

## Getting the Most from GitHub Copilot Enterprise

**Nate Waddington**
Head of Mentorship & Documentation, CNCF

Maintainer Summit — KubeCon + CloudNativeCon Europe 2026

<small>March 22, 2026 · DRAFT</small>

<!--
Speaker notes:
- Welcome, introduce yourself
- Frame the session: practical strategies, not a product pitch
- "By the end of this, you'll have concrete things to take back to your projects"
-->

---

<!-- SLIDE 2 -->

![bg](images/bg-content.png)

# The CNCF + GitHub Partnership

CNCF has partnered with GitHub to provide **Copilot Enterprise** to project maintainers.

### What's in the bundle:

- **Copilot Coding Agent** — autonomous, async task execution
- **Copilot Code Review** — automated PR analysis
- **Contextual Chat** — codebase-aware Q&A

### How to get access:

Apply at **[servicedesk.cncf.io](https://servicedesk.cncf.io)** → Program Management

<!-- 
=== DW ===
I find it difficult to keep track of my place in preso speaker notes, so I try to
foolproof them to the extent possible.
I'd split your speaker notes into:
- Points you want to talk about, and
- Supporting info / optional / rebuttal material
YMMV, you've done a lot more of this than I have. Maybe you can navigate speaker notes easily.
But, important point since it's a concern:
This will also help shorten your talk; you'll know what you can skip.
=== /DW ==

Speaker notes:
Don't linger — the audience wants to know HOW to use it, not WHAT it is
1. Quick context: this exists, it's free for maintainers, here's what's in it
2. Mention eligibility: verified against maintainers.cncf.io
---
- Blog announcement: [12] contribute.cncf.io
- If they haven't applied yet, the link is on the references slide at the end
-->

---

<!-- SLIDE 3 -->

![bg](images/bg-content.png)

# Augmentation, Not Automation

### Two findings from Stanford's Digital Economy Lab (2025):

- In occupations where AI **automates** work, early-career workers experienced a **16% relative employment decline**. <sup>[1]</sup>
- In occupations where AI **augments** work, employment growth remained stable — even in the most AI-exposed roles. <sup>[1]</sup>

### What this means for maintainers:

- The goal is **increased agency**, not replacement
- AI generates; **humans improve and approve**
- Your expertise, judgment, and project knowledge remain essential

<!--
Speaker notes:
1. This is the through-line for the entire talk
2. Every tool I'm about to show you keeps the human in the loop
3. The KubeStellar experiment proved this: 52% of Copilot PRs needed human intervention — and that's the POINT
=== DW ===
What KubeStellar experiment? You haven't introduced it yet.
=== /DW ==
---
- Source: Brynjolfsson, Chandar & Chen, "Canaries in the Coal Mine?" (Nov 2025), pp. 11, 16
  https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf
- The 16% figure is from p.16 (Fact 4): "most AI-exposed occupations" after firm-time controls
- The automate vs augment split is from p.11 (Fact 3, Figure 3 Panels B & C)
- If challenged: "The 16% is about exposed occupations broadly; the paper separately shows the decline concentrates in automative applications, not augmentative ones."
-->

---

<!-- SLIDE 4 — Act 2: The Toolkit -->
=== DW ===
Act 1 is short! More of a prelude, really.
=== /DW ==

![bg](images/bg-content.png)

# The Agentic Spectrum

| | Completions | Chat | Agent Mode | Coding Agent | Agentic Workflows |
|---|---|---|---|---|---|
| **Where** | Editor | Editor sidebar | Editor | GitHub cloud | GitHub Actions |
| **Interaction** | Keystroke | Conversational | Real-time loop | Async / background | Scheduled / event-driven |
| **Autonomy** | You drive | You ask, it answers | It plans and acts; you steer | It works alone; you review | It runs continuously; you oversee |
| **Output** | Code snippets | Answers + code | Multi-file changes | Branch + PR | PRs, labels, comments, reports |

Today we're focusing on the right side: **agent mode**, the **coding agent**, and **agentic workflows**.

=== DW ===
- Good slide, good table. Very clear progression less -> more autonomy.
- Nit: "You drive" (and later in preso "You steer"; maybe others): avoid vague metaphor. "You ask, it answers" is much better.
- I suspect your audience is more familiar with Agent Mode that you're giving them credit for. Might be able to shave some time
  by touching on this more lightly in the next couple slides.
=== /DW ==

<!--
Speaker notes:
- This is a quick visual overview — don't spend more than 90 seconds here
1. The progression left to right is: increasing autonomy, decreasing real-time oversight
2. Most maintainers are already using completions and chat (and maybe Agent Mode in Cursor or the equivalent?)
3. New column: Agentic Workflows (technical preview, Feb 2026) — the "Continuous AI" layer
   - Think of it as CI/CD for AI-assisted maintenance: triage, docs sync, test improvement
   - Authored in Markdown, executed by coding agents in GitHub Actions
   - Read-only by default with safe outputs — strong guardrails by design
---
- Sets up the next three slides
-->

---

<!-- SLIDE 5 -->


![bg](images/bg-content.png)

# Agent Mode: Your Pair Programmer

**Synchronous, in your editor.** You give it a goal in natural language; it plans, edits files, runs commands, reads failures, fixes them, and loops — while you watch and steer.
=== DW ===
Again, "steer" is vague. "While you direct, edit, and approve"?
Some kind of visual cue would be helpful tying the phrase "Agent Mode" to the third column of the table. Maybe use color? Similarly for Coding Agent and Agentic Workflows.
=== /DW ==

### When to reach for agent mode:

- Exploring an unfamiliar codebase
- Prototyping a feature or fixing interactively
- Debugging — let it read errors and iterate
- Refactoring with immediate feedback

<!--
Speaker notes:
- SHOW a screenshot or short recording here: agent mode tackling a real task
1. This is the "senior dev pair programming with you" metaphor
2. Key point: you're in the loop the whole time — this is augmentation
3. Agent mode supports multiple models — mention the model picker briefly
-->

---

<!-- SLIDE 6 -->

![bg](images/bg-content.png)

# Agent Mode: Tips for Better Results

- **Be specific:** "Add a health check endpoint to the API server" beats "help with the API"
- **Seed context:** Point it at the spec file, paste a schema, reference an issue
- **Extend with MCP:** Connect external tools (databases, APIs, other repos) <sup>[2]</sup>

<!--
Speaker notes:
---
- MCP = Model Context Protocol, an open standard for connecting AI to external tools
- [2] = GitHub blog on MCP, add to references
-->

---

<!-- SLIDE 7 -->

![bg](images/bg-content.png)

# Coding Agent: Your Async Teammate

**Asynchronous, in the cloud.** Assign a GitHub issue to Copilot. It spins up a workspace via GitHub Actions, writes code, runs tests, and opens a PR for your review.

### The workflow:

1. Create or select an issue with clear acceptance criteria
2. Assign the issue to **Copilot**
3. Copilot creates a branch, implements, runs CI
4. You get a PR — review, comment, request changes, or merge

<!--
Speaker notes:
- This is the "diligent teammate clearing the backlog" metaphor
- SHOW a screenshot here: an issue assigned to Copilot → the resulting PR
- Emphasize: it runs YOUR CI pipeline, YOUR linters, YOUR tests — it follows your rules
- Built-in security: CodeQL, secret scanning, dependency checks run automatically [3]
- Each run consumes GitHub Actions minutes AND premium requests — be strategic
- [3] = GitHub changelog on security validation
-->

---

<!-- SLIDE 8 -->

![bg](images/bg-content.png)

# Coding Agent: What Works
## (and What Doesn't)

### Sweet-spot tasks:

- Adding or extending tests
- Small refactors (extract helpers, rename services)
- Documentation updates and fixes
- Bug fixes in well-tested repos

### Not yet ideal for:
=== DW ===
"Not yet ideal" sounds too coy to me. "Less helpful for"? "Not yet ready for"?
=== /DW ==

- Massive rewrites or architectural changes
- Repos with zero test coverage

<!--
Speaker notes:
- Stress: pick something small and well-tested for the first try
---
- The coding agent can also see images in issues (screenshots, mockups) via vision models
=== DW ===
Omit this point for time? Is it important?
=== /DW ==

-->

---

<!-- SLIDE 9 -->

![bg](images/bg-content.png)

# Agentic Workflows: Continuous AI

**Automated, in-GitHub Actions.** Define maintenance tasks in Markdown. Coding agents execute them on a schedule — daily, on events, or on demand. <sup>[10]</sup>

### What it looks like:

1. Author a workflow in `.github/workflows/my-workflow.md`
2. Describe the goal in plain language (not YAML)
3. It runs via GitHub Actions using a coding agent
4. Results appear as comments, labels, issues, or PRs 
5. You review

<!--
Speaker notes:
- "Continuous AI" — GitHub Next's framing, parallel to CI/CD
- Guardrails: read-only by default, safe outputs constrain what the agent can do
  (specific labels only, title-prefixed PRs only, never merges)
- Technical preview as of Feb 2026
- [10] = GitHub blog on agentic workflows
-->

---

<!-- SLIDE 10 -->

![bg](images/bg-content.png)

# Agentic Workflows: Maintainer Use Cases

- **Continuous triage** — label, summarize, and route new issues
- **Continuous documentation** — keep READMEs aligned with code changes
- **Continuous testing** — assess coverage and add high-value tests
- **Continuous quality** — investigate CI failures and propose fixes
- **Backlog processing** — systematically work through stale issues <sup>[11]</sup>

<!--
Speaker notes:
1 Don Syme's Repo Assist is a concrete example: cleared years of backlog
  across 4 F# repos in a weekend using this
2 Repo Memory: the workflow remembers where it left off between runs,
  so it works systematically through your backlog
3 Cost: each run typically uses 2 premium requests with Copilot defaults
4 [11] = Don Syme's blog post on Repo Assist
=== DW ===
Point 2: Interesting, but not vital; cut for time
Point 3: No context here. Is that a lot? What is a premium request and how many do I have?
  Also not a vital point.
=== /DW ==

-->

---

<!-- SLIDE 11 -->

![bg](images/bg-content.png)

# When to Use Which

| | Agent Mode | Coding Agent | Agentic Workflows |
|---|---|---|---|
| **You want to...** | Explore, prototype, debug | Clear backlog, batch work | Automate ongoing maintenance |
| **Your role** | Steering in real time | Reviewing a PR later | Overseeing a continuous process |
| **Best when...** | You need tight feedback loops | The task is well-scoped with tests | The work is repetitive and recurring |
| **Think of it as...** | Pair programming | Delegating a ticket | Hiring a night shift |
=== DW ===
I like this table too, especially "Think of it as ..."
But, "Best when" is weak, IMO. Replace with "What it's for" from Key takeaways below?
=== /DW ==

### The combined workflow:

**Prototype in agent mode** → **file an issue** → **coding agent implements** → **agentic workflows maintain** → **code review catches issues** → **you merge** <sup>[4]</sup>

<!--
Speaker notes:
- This is the "peanut butter and jelly" slide — they're meant to be used together
- Walk through the power pattern with a concrete example:
  "I used agent mode to spike a health check endpoint, got it working, then filed issues
   for the coding agent to add tests and update the README. Agentic workflows keep
   the docs in sync and triage new issues going forward."
- Cite: [4] GitHub blog on agent mode vs coding agent
- Key takeaway: agent mode for novel work, coding agent for well-defined work,
  agentic workflows for the recurring stuff nobody wants to do manually
-->

---

<!-- SLIDE 12 -->

![bg](images/bg-content.png)

# Teaching Copilot Your Project

Two files that change everything:

1. `.github/copilot-instructions.md`
2. `AGENTS.md`

=== DW ===
You try to put too much on some of these slides. This is one of them. Separate it here.
More slides is not necessarily a longer preso. "Two files" by itself will take 5 sec.
=== /DW ==
### `.github/copilot-instructions.md` — Your project's house rules

Copilot reads this on every interaction. Put your conventions here:
- Language, framework, and version constraints
- Code style and naming patterns
- Testing requirements and preferred frameworks
- Architectural decisions and legacy constraints

<!--
Speaker notes:
- This is where the talk gets actionable — these are files they can add TODAY
- copilot-instructions.md: first 4,000 characters matter most for code review
- SHOW a real example from the companion repo here
- You can also use path-specific instructions (.github/instructions/*.instructions.md)
  with applyTo frontmatter for rules that only apply to certain file types/paths
- [5] = GitHub docs on custom instructions
-->

---

<!-- SLIDE 13 -->

![bg](images/bg-content.png)

# Teaching Copilot Your Project

### `AGENTS.md` — What the coding agent can and can't do

Defines the agent's persona, available commands, and boundaries:
- What to run: `npm test`, `make lint`, etc.
- File boundaries: "never edit files in `/legacy`"
- Behavioral constraints: "never commit secrets"

Both live in your repo, versioned alongside your code. <sup>[5]</sup> <sup>[6]</sup>
=== DW ===
Re "Both": copilot-instructions.md isn't mentioned on this slide.
=== /DW ==

<!--
Speaker notes:
- AGENTS.md: think of it like onboarding instructions for a new contributor
- SHOW a real example from the companion repo here
- [6] = GitHub blog on writing great AGENTS.md
-->

---

<!-- SLIDE 14 -->

![bg](images/bg-content.png)

# Custom Agents

### Specialist personas for your project

Define them in `.github/agents/*.agent.md` — you create whatever specialists your project needs. Examples:
- A **docs agent** that only touches documentation files
- A **test agent** that writes and maintains test suites
- A **triage agent** that labels and categorizes issues
=== DW ===
Is agents/*.agent.md an alternative to AGENTS.md? If so, can you combine the slides and mention them once to save time?
And if not -- really? They gave the same name to two different config files?
Where does AGENTS.md live, anyway?
=== /DW ==

Each has its own persona, commands, and file boundaries. <sup>[7]</sup>

<!--
Speaker notes:
- Custom agents are powerful for large projects with distinct areas of concern
- Example: KubeStellar used label-driven routing to direct work — custom agents formalize this
- [7] = GitHub docs on creating custom agents
=== DW ===
You still haven't introduced KubeStellar. You're going to spend more time than you want explaining it if you
give it as an example before you introduce it.
=== /DW ==

-->

---

<!-- SLIDE 15 -->

![bg](images/bg-content.png)

# Cross-Repo Workflows with MCP
=== DW ===
Maybe a one-sentence description of what MCP is here, then say "It's used in Agent Mode
  only to provide visibility into other repos and resources"
I feel like this could be a very brief slide -- something you want to mention but not belabor.
=== /DW ==

The Model Context Protocol gives agent mode *research access* across your organization:
- Search issues, PRs, and code in other repos you have access to
- Check CI status and review workflow results in related repositories
- Query external systems (APIs, databases, project trackers)

MCP enables cross-repo **understanding** — research and context, not multi-repo edits. <sup>[2]</sup>

<!--
Speaker notes:
- IMPORTANT NUANCE on cross-repo:
  - MCP gives agent mode "eyes" into other repos (search, read, check status) via the GitHub API
  - But the actual code edits from agent mode still happen in your local workspace
  - The coding agent works within ONE repo per task — it doesn't hop between repos
  - Cross-repo workflow in practice: use MCP in agent mode to investigate across repos,
    then file separate issues for the coding agent in each repo
  - Neither tool does true "edit repo A and repo B in one atomic operation"
- MCP is configured via .vscode/mcp.json — the GitHub MCP server is first-party
- For the audience: "Think of MCP as giving Copilot read access across your org,
  while the coding agent handles the writes one repo at a time"
- Don't go too deep on MCP setup — point to the docs, show the companion repo example
-->

---

<!-- SLIDE 16 (cut candidate) -->
=== DW ===
Maybe move this slide to the end and present it if there's time? It definitely
interrupts the flow here.
=== /DW ==

![bg](images/bg-content.png)

# The Broader Ecosystem: AAIF

In December 2025, the Linux Foundation created the **Agentic AI Foundation (AAIF)** — a sibling foundation to the CNCF.

### Three foundational projects:

- **MCP** (Model Context Protocol) — the open standard for connecting agents to external tools. Contributed by Anthropic.
- **AGENTS.md** — the standard for agent instruction files. Contributed by OpenAI.
- **Goose** — an open-source, local-first agent runtime. Contributed by Block.

MCP and AGENTS.md aren't GitHub-only concepts — they're **open standards** governed by the Linux Foundation, the same umbrella as the CNCF. <sup>[9]</sup>

<!--
Speaker notes:
- This slide positions the talk as "not a GitHub sales pitch" — the standards are open
=== DW ===
Gotta say, if that's the case then "copilot-instructions.md" is an unfortunate name for the control file.
=== /DW ==
- AAIF is to agentic AI what CNCF is to cloud infrastructure
- Goose is interesting but out of scope for today — it's a local agent runtime,
  model-agnostic (works with any LLM), Apache 2.0 licensed
- If someone asks about Goose: "It's an open-source alternative to agent mode that
  runs on your machine with whatever model you choose. Worth exploring, but today
  we're focused on what's included in the CNCF's Enterprise bundle."
- AAIF had 146 member organizations by Feb 2026 — growing fast
- David Nalley (AWS, former CNCF experience) chairs the governing board
- [9] = LF press release on AAIF formation
- TODO: This slide is a candidate for cutting if we need to tighten timing.
-->

---

<!-- SLIDE 17 -->

![bg](images/bg-content.png)

# Security Is Built In

### What runs automatically on every coding agent PR:

- **CodeQL** security analysis
- **Secret scanning** — catches accidentally committed keys and tokens
- **Dependency checks** against the GitHub Advisory Database
- **Automated code review** for quality issues

The agent attempts to fix issues before submitting the PR. <sup>[3]</sup>

**You still review PRs.**

<!--
Speaker notes:
- This is where you tie security back to augmentation: the tooling catches a lot, but YOU are the reviewer
- The security checks run without extra licensing — included in Enterprise
- [3] = GitHub changelog on security validation
- TODO: Review CodeQL docs to be able to explain it in detail if asked:
  https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql
  Key points: static analysis engine, treats code as queryable data, finds security vulns (not style),
  free for public repos, supports Go/Python/JS/TS/Java/C++ and more.
-->

---

<!-- SLIDE 18 -->

![bg](images/bg-content.png)

# Security Is Built In
## What You Should Know

- Review all agent-generated PRs — agents accelerate, they don't replace your judgment
- Enterprise code is **not** used to train Copilot models
- The LF AI policy <sup>[8]</sup> is the baseline — projects can add stricter guidance, but not looser

<!--
Speaker notes:
- IP considerations: Microsoft provides indemnification for unmodified Copilot suggestions,
  but maintainers should still review for license compatibility
- LF AI guidance core principles: AI contributions accepted, but contributors must ensure
  no licensing conflicts and must attribute third-party materials. This is the FLOOR —
  projects can tighten (e.g., "no AI-generated code without review") but can't be looser.
  ---
- Invisible character attacks are a known research concern — compromised upstream code
  could influence suggestions. Good reason to review carefully.
- [8] = LF generative AI policy
-->

---

<!-- SLIDE 19 -->

![bg](images/bg-content.png)

# Real-World: KubeStellar's Agentic Experiment

A CNCF sandbox project put these tools to the test with Andy Anderson and Ashley Wolf:

| Metric | Result |
|---|---|
| **PRs merged** | 952 in 5 weeks (1,302 opened) |
| **Issues auto-detected** | 75% (173 of 229) |
| **Copilot PRs merged** | 101 — 52% acceptance rate |
| **GitHub Actions runs** | 67,262 |

The 52% acceptance rate is the point — not a failure. Half the work was fully automated; the other half was **augmented** by giving reviewers a head start.

<!--
Speaker notes:
- SET THE SCENE: KubeStellar Console had massive contribution volume — 1,300+ PRs
  in 6 weeks, 229 issues filed. Small maintainer team couldn't keep up manually.
- WALK THE NUMBERS: 952 PRs merged total. 75% of issues were auto-detected by CI
  workflows — not humans finding them. Copilot generated 101 PRs that got merged.
- LAND THE PUNCHLINE: 52% acceptance rate. Tie back to Slide 3 (augmentation):
  "That's not a failing grade. It means half the work was fully handled, and for the
  other half, Copilot gave reviewers a starting point instead of a blank page.
  That's augmentation."
- CREDIT: "This work was done with Andy Anderson and Ashley Wolf."
- If time is tight, speed through the numbers and focus on the 52% takeaway
- DCO NOTE (for your info, not on slide): DCO + AI-generated code is still actively debated.
  The core issue: DCO requires you to certify you have the right to submit the code, but
  U.S. Copyright Office says purely AI-generated works aren't copyrightable. So who signs?
  Community is splitting: some require disclosure trailers (Assisted-by:), some require
  human review/transformation, some projects (QEMU) have restricted pure AI contributions.
  A March 2026 blog post "DCO and AI is a no-go" (brokenco.de/2026/03/02/copyright-ai.html)
  lays out the argument directly. Red Hat also has a good writeup:
  redhat.com/en/blog/ai-assisted-development-and-open-source-navigating-legal-issues
-->

---

<!-- SLIDE 20 -->

![bg](images/bg-content.png)

# The Pattern That Works

### Detection → Auto-Fix → Human Review → Loop

```
Bug detected
  → Issue created
    → Copilot assigned automatically
      → PR opened
        → CI validates
          → Human reviews and merges
```

This loop ran **67,262 times** in 5 weeks on a single CNCF project.

The same pattern works at any scale — start with one workflow and grow.

<!--
Speaker notes:
- This is the pipeline diagram from the KubeStellar work
- Walk through each step briefly — the audience should see how it maps to the tools
  you just explained (coding agent = the auto-fix, code review = CI validates)
- "Goodnight agent" example: an agent that runs nightly to update documentation
- The key insight: the loop is fully automated, but a human is always the final gate
- Encourage the audience: "You don't need 37 workflows to start. Pick one pain point,
  write one workflow, and let the coding agent handle the fixes."
- This is the bridge to Act 3 — "here's how to start"
-->

---

<!-- SLIDE 21 — Act 3: Your Next Move -->
=== DW ===
Act 3 is very short as well. :D
=== /DW ==

![bg](images/bg-content.png)

# Your Next Monday Back

Three things you can do when you're back at your desk:

### 1. Get access

Apply at **[servicedesk.cncf.io](https://servicedesk.cncf.io)** → Program Management. Provide your GitHub handle.

### 2. Add `copilot-instructions.md` to one repo

Write your project's conventions in `.github/copilot-instructions.md`. Start simple — you can iterate.

### 3. Try the coding agent on one small issue

Pick a well-scoped issue (a docs fix, a missing test, a lint violation), assign it to Copilot, and review the PR it opens.

<!--
Speaker notes:
- Keep this punchy — these are concrete, low-risk actions
- Step 1 is for anyone who hasn't applied yet
- Step 2 is the lowest-effort, highest-value thing — even without the coding agent,
  copilot-instructions.md improves every Copilot interaction in that repo
- Step 3 is where they see the magic — but stress: pick something small and well-tested
  for the first try. Don't start with a massive refactor.
- If they already have access, they can skip to steps 2 and 3
-->

---

<!-- SLIDE 22 -->

![bg](images/bg-content.png)

# Resources

### CNCF + GitHub Partnership
- Apply for access: [servicedesk.cncf.io](https://servicedesk.cncf.io)
- Blog post: [contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers](https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers)

### GitHub Docs & Blog Posts
- Custom instructions: [docs.github.com/en/copilot/tutorials/use-custom-instructions](https://docs.github.com/en/copilot/tutorials/use-custom-instructions) <sup>[5]</sup>
- Writing great AGENTS.md: [github.blog/.../how-to-write-a-great-agents-md...](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) <sup>[6]</sup>
- Agent mode vs. coding agent: [github.blog/.../less-todo-more-done...](https://github.blog/developer-skills/github/less-todo-more-done-the-difference-between-coding-agent-and-agent-mode-in-github-copilot/) <sup>[4]</sup>
- Agentic workflows auth setup: [github.github.io/gh-aw/reference/auth/](https://github.github.io/gh-aw/reference/auth/)

<!--
Speaker notes:
- This is the "take a photo of this slide" moment
- All the references are also on the next slides with full citations
- TODO: Add companion repo section back once repo is created. Include working examples
  of copilot-instructions.md, AGENTS.md, custom agents, and MCP config — they can fork and adapt
-->

---

<!-- SLIDE 23 -->
<!-- _class: lead -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](images/bg-closing.png)

# Questions?

<!--
Speaker notes:
- Open for Q&A — aim for ~5 minutes
- Likely questions to prep for:
  - "How does this work with CLAs/DCOs?" (see your Slide 12 notes)
  - "What about CodeQL?" (see your Slide 11 notes)
  - "Can I use this with [other AI tool]?" — MCP is an open standard, AGENTS.md is too
  - "What models does it use?" — model picker lets you choose; Auto mode recommended
  - "Is my code used for training?" — No, Enterprise code is not used for training
-->

---

<!-- SLIDE 24 (References 1/4) -->
<!-- _class: references -->

![bg](images/bg-content.png)

# References

**[1]** Brynjolfsson, E., Chandar, B., & Chen, R. "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence." Stanford Digital Economy Lab, November 2025.
https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf

**[2]** "5 Ways to Transform Your Workflow Using GitHub Copilot and MCP." GitHub Blog.
https://github.blog/ai-and-ml/github-copilot/5-ways-to-transform-your-workflow-using-github-copilot-and-mcp/

**[3]** "Copilot Coding Agent Now Automatically Validates Code Security and Quality." GitHub Changelog, October 2025.
https://github.blog/changelog/2025-10-28-copilot-coding-agent-now-automatically-validates-code-security-and-quality/

---

<!-- SLIDE 25 (References 2/4) -->
<!-- _class: references -->

![bg](images/bg-content.png)

# References (continued)

**[4]** "The Difference Between Coding Agent and Agent Mode in GitHub Copilot." GitHub Blog.
https://github.blog/developer-skills/github/less-todo-more-done-the-difference-between-coding-agent-and-agent-mode-in-github-copilot/

**[5]** "Using Custom Instructions to Unlock the Power of Copilot." GitHub Docs.
https://docs.github.com/en/copilot/tutorials/use-custom-instructions

**[6]** "How to Write a Great agents.md: Lessons from Over 2,500 Repositories." GitHub Blog.
https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/

---

<!-- SLIDE 26 (References 3/4) -->
<!-- _class: references -->

![bg](images/bg-content.png)

# References (continued)

**[7]** "Creating Custom Agents for Copilot Coding Agent." GitHub Docs.
https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents

**[8]** "Policy Guidance Regarding Use of Generative AI Tools for Open Source Software Development." The Linux Foundation.
https://www.linuxfoundation.org/legal/generative-ai

**[9]** "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF)." The Linux Foundation, December 2025.
https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation

---

<!-- SLIDE 27 (References 4/4) -->
<!-- _class: references -->

![bg](images/bg-content.png)

# References (continued)

**[10]** "Automate Repository Tasks with GitHub Agentic Workflows." GitHub Blog, February 2026.
https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/

**[11]** Syme, D. "Repo Assist: A Repository Assistant." February 2026.
https://dsyme.net/2026/02/25/repo-assist-a-repository-assistant/

**[12]** "GitHub Copilot Enterprise for CNCF Maintainers." CNCF Contributor Blog, December 2025.
https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers
