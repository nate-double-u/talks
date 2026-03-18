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
<!-- SLIDE 1 — Act 1: Why This Matters -->

![bg](images/bg-title.png)

# Agentic AI for Maintainers

## Getting the Most from GitHub Copilot Enterprise

**Nate Waddington**
Head of Mentorship & Documentation, CNCF

Maintainer Summit — KubeCon + CloudNativeCon Europe 2026

<small>March 22, 2026 · DRAFT</small>

<!--
Speaker notes:
1. Welcome, introduce yourself
2. Frame the session: practical strategies, not a product pitch
3. "By the end of this, you'll have concrete things to take back to your projects"
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
---
- Source: Brynjolfsson, Chandar & Chen, "Canaries in the Coal Mine?" (Nov 2025), pp. 11, 16
  https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf
- The 16% figure is from p.16 (Fact 4): "most AI-exposed occupations" after firm-time controls
- The automate vs augment split is from p.11 (Fact 3, Figure 3 Panels B & C)
- If challenged: "The 16% is about exposed occupations broadly; the paper separately shows the decline concentrates in automative applications, not augmentative ones."
-->

---

<!-- SLIDE 4 — Act 2: The Toolkit -->

![bg](images/bg-content.png)

# The Agentic Spectrum

| | Completions | Chat | Agent Mode | Coding Agent | Agentic Workflows |
|---|---|---|---|---|---|
| **Where** | Editor | Editor sidebar | Editor | GitHub cloud | GitHub Actions |
| **Interaction** | Keystroke | Conversational | Real-time loop | Async / background | Scheduled / event-driven |
| **Autonomy** | You write, it suggests | You ask, it answers | It plans and acts, you guide and approve | It works alone; you review | It runs continuously; you oversee |
| **Output** | Code snippets | Answers + code | Multi-file changes | Branch + PR | PRs, labels, comments, reports |

Today we're focusing on the right side: **agent mode**, the **coding agent**, and **agentic workflows**.

<!--
Speaker notes:
- This is a quick visual overview — don't spend more than 90 seconds here
1. The progression left to right is: increasing autonomy, decreasing real-time oversight
2. Most maintainers are already using completions and chat
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

**Synchronous, in your editor.** You give it a goal in natural language; it plans, edits files, runs commands, reads failures, fixes them, and loops — while you direct, edit, and approve.

### When to reach for agent mode:

- Exploring an unfamiliar codebase
- Prototyping a feature or fixing interactively
- Debugging — let it read errors and iterate
- Refactoring with immediate feedback

<!--
Speaker notes:
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
1. This is the "diligent teammate clearing the backlog" metaphor
2. Emphasize: it runs YOUR CI pipeline, YOUR linters, YOUR tests — it follows your rules
---
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

### Less helpful for:

- Massive rewrites or architectural changes
- Repos with zero test coverage

<!--
Speaker notes:
1. Stress: pick something small and well-tested for the first try
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
1. "Continuous AI" — GitHub Next's framing, parallel to CI/CD
2. Guardrails: read-only by default, safe outputs constrain what the agent can do
   (specific labels only, title-prefixed PRs only, never merges)
---
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
1. Don Syme's Repo Assist is a concrete example: cleared years of backlog
   across 4 F# repos in a weekend using this
---
3. [11] = Don Syme's blog post on Repo Assist
-->

---

<!-- SLIDE 11 -->

![bg](images/bg-content.png)

# When to Use Which

| | Agent Mode | Coding Agent | Agentic Workflows |
|---|---|---|---|
| **You want to...** | Explore, prototype, debug | Clear backlog, batch work | Automate ongoing maintenance |
| **Your role** | Steering in real time | Reviewing a PR later | Overseeing a continuous process |
| **What it's for** | Tight feedback loops | Well-scoped, well-tested tasks | Repetitive, recurring work |
| **Think of it as...** | Pair programming | Delegating a ticket | Hiring a night shift |

### The combined workflow:

**Prototype in agent mode** → **file an issue** → **coding agent implements** → **agentic workflows maintain** → **code review catches issues** → **you merge** <sup>[4]</sup>

<!--
Speaker notes:
1. This is the "peanut butter and jelly" slide — they're meant to be used together
2. Key takeaway: agent mode for novel work, coding agent for well-defined work,
   agentic workflows for the recurring stuff nobody wants to do manually
---
- Cite: [4] GitHub blog on agent mode vs coding agent
-->

---

<!-- SLIDE 12 -->

![bg](images/bg-content.png)

# Teaching Copilot Your Project

Two files that change everything:

1. `.github/copilot-instructions.md`
2. `AGENTS.md`

<!--
Speaker notes:
1. This is where the talk gets actionable — these are files they can add TODAY
-->

---

<!-- SLIDE 13 -->

![bg](images/bg-content.png)

# Teaching Copilot Your Project

### `.github/copilot-instructions.md` — Your project's house rules

Copilot reads this on every interaction. Put your conventions here:
- Language, framework, and version constraints
- Code style and naming patterns
- Testing requirements and preferred frameworks
- Architectural decisions and legacy constraints

<!--
Speaker notes:
1. copilot-instructions.md: first 4,000 characters matter most for code review
2. SHOW a real example from the companion repo here
---
- You can also use path-specific instructions (.github/instructions/*.instructions.md)
  with applyTo frontmatter for rules that only apply to certain file types/paths
- [5] = GitHub docs on custom instructions
-->

---

<!-- SLIDE 14 -->

![bg](images/bg-content.png)

# Teaching Copilot Your Project

### `AGENTS.md` — What the coding agent can and can't do

Lives at your repo root. Defines the agent's persona, available commands, and boundaries:
- What to run: `npm test`, `make lint`, etc.
- File boundaries: "never edit files in `/legacy`"
- Behavioral constraints: "never commit secrets"

### Custom agents — Specialists for larger projects

Define them in `.github/agents/*.agent.md` to create focused personas: <sup>[7]</sup>
- For example: a **test agent** that writes and maintains test suites

<!--
Speaker notes:
1. AGENTS.md at repo root: think of it like onboarding instructions for a new contributor —
   general rules that apply to everything
2. Custom agents in .github/agents/ extend AGENTS.md with specialist personas —
   they inherit the base rules but add their own scope and constraints
3. All agent files live in your repo, versioned alongside your code — easy to review in PRs
---
- AGENTS.md is an open standard (AAIF/LF), not GitHub-specific — same file works with other tools
-->

---

<!-- SLIDE 15 -->

![bg](images/bg-content.png)

# Cross-Repo Workflows with MCP

**MCP (Model Context Protocol)** is an open standard for connecting AI agents to external tools and data sources. <sup>[2]</sup> In agent mode, it gives you access across your organization:
- Search issues, PRs, and code in other repos
- Check CI status and review workflow results
- Create issues and PRs in related repositories
- Query external systems (APIs, databases, project trackers)

<!--
Speaker notes:
1. Don't go too deep on MCP setup — point to the docs, show the companion repo example
2. IMPORTANT NUANCE on cross-repo:
   - MCP gives agent mode "eyes" into other repos (search, read, check status) via the GitHub API
   - But the actual code edits from agent mode still happen in your local workspace
   - The coding agent works within ONE repo per task — it doesn't hop between repos
3. For the audience: "Think of MCP as giving Copilot read access across your org,
   while the coding agent handles the writes one repo at a time"
---
- Cross-repo workflow in practice: use MCP in agent mode to investigate across repos,
  then file separate issues for the coding agent in each repo
- Neither tool does true "edit repo A and repo B in one atomic operation"
- MCP is configured via .vscode/mcp.json — the GitHub MCP server is first-party
-->

---

<!-- SLIDE 16 -->

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
1. This is where you tie security back to augmentation: the tooling catches a lot, but YOU are the reviewer
2. The security checks run without extra licensing — included in Enterprise
---
- [3] = GitHub changelog on security validation
- TODO: Review CodeQL docs to be able to explain it in detail if asked:
  https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql
  Key points: static analysis engine, treats code as queryable data, finds security vulns (not style),
  free for public repos, supports Go/Python/JS/TS/Java/C++ and more.
-->

---

<!-- SLIDE 17 -->

![bg](images/bg-content.png)

# Security Is Built In
## What You Should Know

- Review all agent-generated PRs — agents accelerate, they don't replace your judgment
- The LF AI policy <sup>[8]</sup> is the baseline — projects can add stricter guidance, but not looser

<!--
Speaker notes:
1. IP considerations: Microsoft provides indemnification for unmodified Copilot suggestions,
   but maintainers should still review for license compatibility
2. LF AI guidance core principles: AI contributions accepted, but contributors must ensure
   no licensing conflicts and must attribute third-party materials. This is the FLOOR —
   projects can tighten (e.g., "no AI-generated code without review") but can't be looser.
---
- Invisible character attacks are a known research concern — compromised upstream code
  could influence suggestions. Good reason to review carefully.
- [8] = LF generative AI policy
-->

---

<!-- SLIDE 18 -->

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
1. SET THE SCENE: KubeStellar Console had massive contribution volume — 1,300+ PRs
   in 6 weeks, 229 issues filed. Small maintainer team couldn't keep up manually.
2. WALK THE NUMBERS: 952 PRs merged total. 75% of issues were auto-detected by CI
   workflows — not humans finding them. Copilot generated 101 PRs that got merged.
3. LAND THE PUNCHLINE: 52% acceptance rate. Tie back to Slide 3 (augmentation):
   "That's not a failing grade. It means half the work was fully handled, and for the
   other half, Copilot gave reviewers a starting point instead of a blank page.
   That's augmentation."
4. CREDIT: "This work was done with Andy Anderson and Ashley Wolf."
---
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

<!-- SLIDE 19 -->

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
1. This is the pipeline diagram from the KubeStellar work
2. Walk through each step briefly — the audience should see how it maps to the tools
   you just explained (coding agent = the auto-fix, code review = CI validates)
3. The key insight: the loop is fully automated, but a human is always the final gate
4. Encourage the audience: "You don't need 37 workflows to start. Pick one pain point,
   write one workflow, and let the coding agent handle the fixes."
---
- "Goodnight agent" example: an agent that runs nightly to update documentation
- This is the bridge to Act 3 — "here's how to start"
-->

---

<!-- SLIDE 20 — Act 3: Your Next Move -->

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
1. Keep this punchy — these are concrete, low-risk actions
2. Step 1 is for anyone who hasn't applied yet
3. Step 2 is the lowest-effort, highest-value thing — even without the coding agent,
   copilot-instructions.md improves every Copilot interaction in that repo
4. Step 3 is where they see the magic — but stress: pick something small and well-tested
   for the first try. Don't start with a massive refactor.
---
- If they already have access, they can skip to steps 2 and 3
-->

---

<!-- SLIDE 21 -->

![bg](images/bg-content.png)

# Resources

### CNCF + GitHub Partnership
- Apply for access: [servicedesk.cncf.io](https://servicedesk.cncf.io)
- Blog post: [contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers](https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers)

<!--
Speaker notes:
1. This is the "take a photo of this slide" moment
2. All the references are also on the next slides with full citations
---
- TODO: Add companion repo section back once repo is created. Include working examples
  of copilot-instructions.md, AGENTS.md, custom agents, and MCP config — they can fork and adapt
-->

---

<!-- SLIDE 22 -->

![bg](images/bg-content.png)

# Resources (continued)

### GitHub Docs & Blog Posts
- Custom instructions: [docs.github.com/en/copilot/tutorials/use-custom-instructions](https://docs.github.com/en/copilot/tutorials/use-custom-instructions) <sup>[5]</sup>
- Writing great AGENTS.md: [github.blog/.../how-to-write-a-great-agents-md...](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) <sup>[6]</sup>
- Agent mode vs. coding agent: [github.blog/.../less-todo-more-done...](https://github.blog/developer-skills/github/less-todo-more-done-the-difference-between-coding-agent-and-agent-mode-in-github-copilot/) <sup>[4]</sup>
- Agentic workflows auth setup: [github.github.io/gh-aw/reference/auth/](https://github.github.io/gh-aw/reference/auth/)

---

<!-- SLIDE 23 -->

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
1. This slide positions the talk as "not a GitHub sales pitch" — the standards are open
2. AAIF is to agentic AI what CNCF is to cloud infrastructure
---
- Goose is interesting but out of scope for today — it's a local agent runtime,
  model-agnostic (works with any LLM), Apache 2.0 licensed
- If someone asks about Goose: "It's an open-source alternative to agent mode that
  runs on your machine with whatever model you choose. Worth exploring, but today
  we're focused on what's included in the CNCF's Enterprise bundle."
- AAIF had 146 member organizations by Feb 2026 — growing fast
- David Nalley (AWS, former CNCF experience) chairs the governing board
- [9] = LF press release on AAIF formation
-->

---

<!-- SLIDE 24 -->
<!-- _class: lead -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](images/bg-closing.png)

# Questions?

<!--
Speaker notes:
1. Open for Q&A — aim for ~5 minutes
---
- Likely questions to prep for:
  - "How does this work with CLAs/DCOs?" (see your Slide 12 notes)
  - "What about CodeQL?" (see your Slide 11 notes)
  - "Can I use this with [other AI tool]?" — MCP is an open standard, AGENTS.md is too
  - "What models does it use?" — model picker lets you choose; Auto mode recommended
  - "Is my code used for training?" — No, Enterprise code is not used for training
-->

---

<!-- SLIDE 25 (References 1/4) -->
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

<!-- SLIDE 26 (References 2/4) -->
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

<!-- SLIDE 27 (References 3/4) -->
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

<!-- SLIDE 28 (References 4/4) -->
<!-- _class: references -->

![bg](images/bg-content.png)

# References (continued)

**[10]** "Automate Repository Tasks with GitHub Agentic Workflows." GitHub Blog, February 2026.
https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/

**[11]** Syme, D. "Repo Assist: A Repository Assistant." February 2026.
https://dsyme.net/2026/02/25/repo-assist-a-repository-assistant/

**[12]** "GitHub Copilot Enterprise for CNCF Maintainers." CNCF Contributor Blog, December 2025.
https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers
