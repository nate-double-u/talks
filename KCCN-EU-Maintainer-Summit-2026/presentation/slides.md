---
marp: true
theme: default
paginate: true
title: "Agentic AI for Maintainers: Getting the Most from GitHub Copilot Enterprise"
author: Nate Waddington
---

<!-- _class: lead -->
<!-- SLIDE 1 — Act 1: Why This Matters -->

# Agentic AI for Maintainers

## Getting the Most from GitHub Copilot Enterprise

**Nate Waddington**
Head of Mentorship & Documentation, CNCF

Maintainer Summit — KubeCon + CloudNativeCon Europe 2026

<!--
Speaker notes:
- Welcome, introduce yourself
- Frame the session: practical strategies, not a product pitch
- "By the end of this, you'll have concrete things to take back to your projects"
-->

---

<!-- SLIDE 2 -->

# The CNCF + GitHub Partnership

CNCF has partnered with GitHub to provide **Copilot Enterprise** to project maintainers.

### What's in the bundle:

- **Copilot Coding Agent** — autonomous, async task execution
- **Copilot Code Review** — automated PR analysis
- **Contextual Chat** — codebase-aware Q&A

### How to get access:

Apply at **[servicedesk.cncf.io](https://servicedesk.cncf.io)** → Program Management

> [contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers](https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers)

<!--
Speaker notes:
- Quick context: this exists, it's free for maintainers, here's what's in it
- Don't linger — the audience wants to know HOW to use it, not WHAT it is
- Mention eligibility: verified against maintainers.cncf.io
- If they haven't applied yet, the link is on the resources slide at the end too
-->

---

<!-- SLIDE 3 -->

# Augmentation, Not Automation

**Two findings from Stanford's Digital Economy Lab (2025):**

- In occupations where AI **automates** work, early-career workers experienced a **16% relative employment decline**. [1]
- In occupations where AI **augments** work, employment growth remained stable — even in the most AI-exposed roles. [1]

### What this means for maintainers:

- The goal is **increased agency**, not replacement
- AI generates; **humans improve and approve**
- Your expertise, judgment, and project knowledge remain essential

<!--
Speaker notes:
- This is the through-line for the entire talk
- Every tool I'm about to show you keeps the human in the loop
- The KubeStellar experiment proved this: 52% of Copilot PRs needed human intervention — and that's the POINT
- Source: Brynjolfsson, Chandar & Chen, "Canaries in the Coal Mine?" (Nov 2025), pp. 11, 16
  https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf
- The 16% figure is from p.16 (Fact 4): "most AI-exposed occupations" after firm-time controls
- The automate vs augment split is from p.11 (Fact 3, Figure 3 Panels B & C)
- If challenged: "The 16% is about exposed occupations broadly; the paper separately shows the decline concentrates in automative applications, not augmentative ones."
-->

---

<!-- SLIDE 4 — Act 2: The Toolkit -->

# The Agentic Spectrum

| | Completions | Chat | Agent Mode | Coding Agent |
|---|---|---|---|---|
| **Where** | Editor | Editor sidebar | Editor | GitHub cloud |
| **Interaction** | Keystroke | Conversational | Real-time loop | Async / background |
| **Autonomy** | You drive | You ask, it answers | It plans and acts; you steer | It works alone; you review |
| **Output** | Code snippets | Answers + code | Multi-file changes | Branch + PR |

Today we're focusing on the right side: **agent mode** and the **coding agent**.

<!--
Speaker notes:
- This is a quick visual overview — don't spend more than 90 seconds here
- The progression left to right is: increasing autonomy, decreasing real-time oversight
- Most maintainers are already using completions and chat
- The new capabilities (agent mode and coding agent) are what this talk is about
- Sets up the next two slides
-->

---

<!-- SLIDE 5 -->

# Agent Mode: Your Pair Programmer

**Synchronous, in your editor.** You give it a goal in natural language; it plans, edits files, runs commands, reads failures, fixes them, and loops — while you watch and steer.

### When to reach for agent mode:

- Exploring an unfamiliar codebase
- Prototyping a feature or fix interactively
- Debugging — let it read errors and iterate
- Refactoring with immediate feedback

### Tips for better results:

- **Be specific:** "Add a health check endpoint to the API server" beats "help with the API"
- **Seed context:** Point it at the spec file, paste a schema, reference an issue
- **Extend with MCP:** Connect external tools (databases, APIs, other repos) [2]

<!--
Speaker notes:
- This is the "senior dev pair programming with you" metaphor
- SHOW a screenshot or short recording here: agent mode tackling a real task
- Key point: you're in the loop the whole time — this is augmentation
- MCP = Model Context Protocol, an open standard for connecting AI to external tools
- Agent mode supports multiple models — mention the model picker briefly
- [2] = GitHub blog on MCP, add to references
-->

---

<!-- SLIDE 6 -->

# Coding Agent: Your Async Teammate

**Asynchronous, in the cloud.** Assign a GitHub issue to Copilot. It spins up a workspace via GitHub Actions, writes code, runs tests, and opens a PR for your review.

### The workflow:

1. Create or select an issue with clear acceptance criteria
2. Assign the issue to **Copilot**
3. Copilot creates a branch, implements, runs CI
4. You get a PR — review, comment, request changes, or merge

### Sweet-spot tasks:

- Adding or extending tests
- Small refactors (extract helpers, rename services)
- Documentation updates and fixes
- Bug fixes in well-tested repos

### Not yet ideal for:

- Massive rewrites or architectural changes
- Repos with zero test coverage

<!--
Speaker notes:
- This is the "diligent teammate clearing the backlog" metaphor
- SHOW a screenshot here: an issue assigned to Copilot → the resulting PR
- Emphasize: it runs YOUR CI pipeline, YOUR linters, YOUR tests — it follows your rules
- Built-in security: CodeQL, secret scanning, dependency checks run automatically [3]
- Each run consumes GitHub Actions minutes AND premium requests — be strategic
- The coding agent can also see images in issues (screenshots, mockups) via vision models
- [3] = GitHub changelog on security validation
-->

---

<!-- SLIDE 7 -->

# When to Use Which

| | Agent Mode | Coding Agent |
|---|---|---|
| **You want to...** | Explore, prototype, debug | Clear backlog, batch work |
| **Your role** | Steering in real time | Reviewing a PR later |
| **Best when...** | You need tight feedback loops | The task is well-scoped with tests |
| **Think of it as...** | Pair programming | Delegating a ticket |

### The combined workflow:

**Prototype in agent mode** → **file an issue** → **coding agent implements** → **code review catches issues** → **you merge** [4]

<!--
Speaker notes:
- This is the "peanut butter and jelly" slide — they're meant to be used together
- Walk through the power pattern with a concrete example:
  "I used agent mode to spike a health check endpoint, got it working, then filed issues
   for the coding agent to add tests and update the README"
- Cite: [4] GitHub blog on agent mode vs coding agent
- Key takeaway: agent mode for novel work, coding agent for well-defined work
-->

---

<!-- SLIDE 8 -->

# Teaching Copilot Your Project

Two files that change everything:

### `.github/copilot-instructions.md` — Your project's house rules

Copilot reads this on every interaction. Put your conventions here:
- Language, framework, and version constraints
- Code style and naming patterns
- Testing requirements and preferred frameworks
- Architectural decisions and legacy constraints

### `AGENTS.md` — What the coding agent can and can't do

Defines the agent's persona, available commands, and boundaries:
- What to run: `npm test`, `make lint`, etc.
- File boundaries: "never edit files in `/legacy`"
- Behavioral constraints: "never commit secrets"

Both live in your repo, versioned alongside your code. [5] [6]

<!--
Speaker notes:
- This is where the talk gets actionable — these are files they can add TODAY
- copilot-instructions.md: first 4,000 characters matter most for code review
- AGENTS.md: think of it like onboarding instructions for a new contributor
- SHOW a real example from the companion repo here
- You can also use path-specific instructions (.github/instructions/*.instructions.md)
  with applyTo frontmatter for rules that only apply to certain file types/paths
- [5] = GitHub docs on custom instructions
- [6] = GitHub blog on writing great AGENTS.md
-->

---

<!-- SLIDE 9 -->

# Custom Agents & Cross-Repo Workflows

### Custom agents — specialist personas for your project

Define them in `.github/agents/*.agent.md` — you create whatever specialists your project needs. Examples:
- A **docs agent** that only touches documentation files
- A **test agent** that writes and maintains test suites
- A **triage agent** that labels and categorizes issues

Each has its own persona, commands, and file boundaries. [7]

### Cross-repo work with MCP

The Model Context Protocol gives agent mode *research access* across your organization:
- Search issues, PRs, and code in other repos you have access to
- Check CI status and review workflow results in related repositories
- Query external systems (APIs, databases, project trackers)

MCP enables cross-repo **understanding** — research and context, not multi-repo edits. [2]

<!--
Speaker notes:
- Custom agents are powerful for large projects with distinct areas of concern
- Example: KubeStellar used label-driven routing to direct work — custom agents formalize this
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
- [7] = GitHub docs on creating custom agents
-->

---

<!-- SLIDE 10 (cut candidate) -->

# The Broader Ecosystem: AAIF

In December 2025, the Linux Foundation created the **Agentic AI Foundation (AAIF)** — a sibling foundation to the CNCF.

### Three foundational projects:

- **MCP** (Model Context Protocol) — the open standard for connecting agents to external tools. Contributed by Anthropic.
- **AGENTS.md** — the standard for agent instruction files. Contributed by OpenAI.
- **Goose** — an open-source, local-first agent runtime. Contributed by Block.

### Why this matters:

The tools we've been discussing aren't GitHub-only concepts. MCP and AGENTS.md are **open standards** governed by the Linux Foundation — the same umbrella as the CNCF. [9]

<!--
Speaker notes:
- This slide positions the talk as "not a GitHub sales pitch" — the standards are open
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

<!-- SLIDE 11 -->

# Security Is Built In (But You Still Review)

### What runs automatically on every coding agent PR:

- **CodeQL** security analysis
- **Secret scanning** — catches accidentally committed keys and tokens
- **Dependency checks** against the GitHub Advisory Database
- **Automated code review** for quality issues

The agent attempts to fix issues before submitting the PR. [3]

### Your responsibilities:

- Review all agent-generated PRs — agents accelerate, they don't replace your judgment
- Enterprise code is **not** used to train Copilot models
- The LF AI policy [8] is the baseline — projects can add stricter guidance, but not looser

<!--
Speaker notes:
- This is where you tie security back to augmentation: the tooling catches a lot, but YOU are the reviewer
- The security checks run without extra licensing — included in Enterprise
- IP considerations: Microsoft provides indemnification for unmodified Copilot suggestions,
  but maintainers should still review for license compatibility
- Invisible character attacks are a known research concern — compromised upstream code
  could influence suggestions. Good reason to review carefully.
- LF AI guidance core principles: AI contributions accepted, but contributors must ensure
  no licensing conflicts and must attribute third-party materials. This is the FLOOR —
  projects can tighten (e.g., "no AI-generated code without review") but can't be looser.
- [8] = LF generative AI policy
- TODO: Review CodeQL docs to be able to explain it in detail if asked:
  https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql
  Key points: static analysis engine, treats code as queryable data, finds security vulns (not style),
  free for public repos, supports Go/Python/JS/TS/Java/C++ and more.
-->

---

<!-- SLIDE 12 -->

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

<!-- SLIDE 13 -->

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

<!-- SLIDE 14 — Act 3: Your Next Move -->

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

<!-- SLIDE 15 -->

# Resources

### CNCF + GitHub Partnership
- Apply for access: [servicedesk.cncf.io](https://servicedesk.cncf.io)
- Blog post: [contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers](https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers)

### GitHub Docs & Blog Posts
- Custom instructions: [docs.github.com/en/copilot/tutorials/use-custom-instructions](https://docs.github.com/en/copilot/tutorials/use-custom-instructions) [5]
- Writing great AGENTS.md: [github.blog/.../how-to-write-a-great-agents-md...](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) [6]
- Agent mode vs. coding agent: [github.blog/.../less-todo-more-done...](https://github.blog/developer-skills/github/less-todo-more-done-the-difference-between-coding-agent-and-agent-mode-in-github-copilot/) [4]

### Companion Repo
- TODO: Add companion repo link here

<!--
Speaker notes:
- This is the "take a photo of this slide" moment
- All the references are also on the next slide with full citations
- The companion repo has working examples of copilot-instructions.md, AGENTS.md,
  custom agents, and MCP config — they can fork it and adapt
-->

---

<!-- SLIDE 16 -->
<!-- _class: lead -->

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

<!-- SLIDE 17 (References — last slide) -->
<!-- _class: lead -->

**[1]** Brynjolfsson, E., Chandar, B., & Chen, R. "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence." Stanford Digital Economy Lab, November 2025.
https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf

**[2]** "5 Ways to Transform Your Workflow Using GitHub Copilot and MCP." GitHub Blog.
https://github.blog/ai-and-ml/github-copilot/5-ways-to-transform-your-workflow-using-github-copilot-and-mcp/

**[3]** "Copilot Coding Agent Now Automatically Validates Code Security and Quality." GitHub Changelog, October 2025.
https://github.blog/changelog/2025-10-28-copilot-coding-agent-now-automatically-validates-code-security-and-quality/

**[4]** "The Difference Between Coding Agent and Agent Mode in GitHub Copilot." GitHub Blog.
https://github.blog/developer-skills/github/less-todo-more-done-the-difference-between-coding-agent-and-agent-mode-in-github-copilot/

**[5]** "Using Custom Instructions to Unlock the Power of Copilot." GitHub Docs.
https://docs.github.com/en/copilot/tutorials/use-custom-instructions

**[6]** "How to Write a Great agents.md: Lessons from Over 2,500 Repositories." GitHub Blog.
https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/

**[7]** "Creating Custom Agents for Copilot Coding Agent." GitHub Docs.
https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents

**[8]** "Policy Guidance Regarding Use of Generative AI Tools for Open Source Software Development." The Linux Foundation.
https://www.linuxfoundation.org/legal/generative-ai

**[9]** "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF)." The Linux Foundation, December 2025.
https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
