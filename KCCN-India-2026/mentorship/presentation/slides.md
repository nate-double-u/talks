---
marp: true
theme: cncf
paginate: true
footer: 'CC BY 4.0 - Cloud Native Computing Foundation'
title: "Getting Started with CNCF Mentorship: A Guide for Future Mentees"
author: Nate Waddington
---

<!--
Page numbers sit bottom-left in the base cncf theme, where they collide with
the footer. Move them bottom-right for this deck.
-->
<style>
section::after {
  left: auto;
  right: 30px;
}

/* Consistent, generous spacing below every H1 title.
   The base theme sets h1 margin-bottom:0, so the gap depended on the next
   element's top margin (0 for h2/tables, ~1em for paragraphs/lists). Fix it by
   giving h1 one bottom margin and zeroing the following element's top margin. */
h1 {
  margin-top: 0;
  margin-bottom: 28px;
}
h1 + * {
  margin-top: 0;
}
</style>

<!-- _class: title -->
<!-- _footer: "" -->
<!-- _paginate: false -->
<!-- SLIDE 1 · Act 1: Why Mentorship -->

# Getting Started with CNCF Mentorship

## A Guide for Future Mentees

**Nate W.**
Head of Mentorship & Documentation, CNCF

KubeCon + CloudNativeCon India 2026 · Mumbai

<small>June 18, 2026</small>

<!--
Speaker notes:
1. Welcome; warm hello to the newcomers
2. Poll the room: "contributed to open source before? want to?"
3. Promise: "you'll leave with a step-by-step plan", lots of Q&A at the end
-->

---

<!-- SLIDE 2 -->

# Who I Am & Why This Talk

I run the **CNCF Mentorship program** and administer **LFX Mentorship** for&nbsp;the&nbsp;CNCF.

Every term I see the same thing:

- Hundreds of people who want to participate in cloud native
- All asking the same question: **where do I start?**

Mentorship is one of the most direct ways in. This talk is the map I wish everyone had.

<!--
Speaker notes:
1. Credibility: I read the apps, I see who gets picked and why
2. I see the avoidable mistakes too, this talk helps you dodge them
3. Humble: mentors and mentees are the heroes, I just run the program
-->

---

<!-- SLIDE 3 -->

# "I Want to Contribute... Where Do I Even Start?"

Cloud native is **huge**: hundreds of projects across the [landscape](https://landscape.cncf.io/). That's exciting, and it's intimidating.

> "At first I didn't really know about CNCF. I read about it, and to be honest, I didn't understand any of the projects at first."
> — Mariam Fahmy, who is now a **Kyverno maintainer**

<br>

If that's you, you're in exactly the right place. Mariam started where you are.

<!--
Speaker notes:
1. Emotional hook, almost everyone feels this, name it out loud
2. Mariam = our through-line: one line on who she is (GSoC newcomer → Kyverno maintainer), then follow her across the talk
3. "The gap between 'want to' and 'doing it' is real; mentorship closes it"
4. CHECK: ~200 CNCF projects if you want a hard number
-->

---

<!-- SLIDE 4 -->

# What Mentorship Actually Means at the CNCF

It's not a course. It's not an internship at a company. It's a **structured, paid, hands-on project** working on a real CNCF project with an experienced mentor.

<br>

It's a starting point, not a finish line:

- Many mentees grow from **mentee → contributor → mentor**, and sometimes even **maintainer**
- The real win isn't one merged feature, it's joining the community and&nbsp;staying

<!--
Speaker notes:
1. Not school, not an unpaid internship, real work with a real mentor
2. The path: mentee → contributor → mentor → maybe maintainer
3. Real win = staying in the community, not one feature (sets up next slide)
-->

---

<!-- SLIDE 5 -->

# It Works at Scale

| Metric | Figure |
| --- | --- |
| Successful mentorships in 2025 | **187** |
| Mentees still contributing a year later | **More than half** (2025) |
| CNCF projects mentees have contributed to | Dozens, across the landscape |
| Mentees who became CNCF maintainers since 2020 | **25** |

<!--
Speaker notes:
1. Flywheel = growing the community, that's the goal
2. Real win = retention: 55–59% of 2025 mentees still contributing a year later (only ~25 ever became maintainers)
3. Figures are a floor, last reported and the program's grown [4][5]
4. Don't dwell on numbers, Mariam's story lands harder
-->

---

<!-- SLIDE 6 · Act 2: The Programs -->

# The Programs CNCF Supports

| | LFX Mentorship | Google Summer of Code | Outreachy |
| --- | --- | --- | --- |
| **Run by** | Linux Foundation | Google | Software Freedom Conservancy |
| **Cadence** | 3 terms a year | Once a year (summer) | Twice a year |
| **Who** | Students **and** professionals | Open source beginners | Underrepresented groups in tech |
| **Paid?** | Yes | Yes | Yes |

<br>

CNCF participates in all of these. Today, we'll focus on **LFX Mentorship**.

<!--
Speaker notes:
1. More than one program; we focus on LFX (don't belabor why)
2. GSoC has its own eligibility rules on top of CNCF's (next slide)
3. Don't read the table, let them photograph it, hit highlights
-->

---

<!-- SLIDE 7 -->

# LFX Mentorship: What It Is

**LFX Mentorship** is the Linux Foundation's mentorship platform.

- The CNCF uses it to run paid mentorships **across its projects**
- Mentees pair with a mentor to do real, scoped work over a **~3-month term**
- Everything happens **remotely**, in the open, on the project's real repos

<!--
Speaker notes:
1. "In the open" = public portfolio, valuable later
2. Remote + global, no relocation (big for India)
-->

---

<!-- SLIDE 8 -->

# What LFX Mentorship Offers

- **A dedicated mentor.** An experienced maintainer whose job for the term is to help *you* succeed.
- **A community.** Work alongside the project's maintainers and contributors, not on the outside.
- **Structure.** A defined project, a timeline, and milestones, not "go figure it&nbsp;out."
- **Real, merged contributions.** Code, docs, and tests in projects people actually run, yours to point to.
- **A stipend.** It supports your time so you can focus on learning; it's not a&nbsp;salary.

<!--
Speaker notes:
1. Getting paid is nice, but the real value = structured time with mentors + community
2. Stipend ≠ salary; DON'T quote numbers (being adjusted, not public)
3. Merged work = public track record, how Mariam got hired at Nirmata
-->

---

<!-- SLIDE 9 -->

# Who It's For

- Students **and** working professionals (we don't limit it to students) <sup>[1][3]</sup>
- **No prior contribution required**: everyone starts somewhere
- All you need:
  - The time to commit: it's a **full-time** program (be honest, it's real work)
  - A genuine willingness to learn
  - The ability to engage **respectfully, collaboratively, and professionally** (we all follow the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md))

More experienced candidates may have an edge on complex projects, but there are projects at **every** level.

<!--
Speaker notes:
1. Knock down "I'm not a student" / "never contributed", neither blocks you
2. Full-time = 32–40 hrs/week; be real about it, disappearing hurts you and your mentor
3. Respect & collaboration count as much as skill
-->

---

<!-- SLIDE 10 -->

# Timelines: Three Terms a Year

LFX Mentorship runs on a predictable cadence:

| Term | Roughly |
| --- | --- |
| **Term 1** | March – May |
| **Term 2** | June – August |
| **Term 3** | September – November |

Applications open **a few weeks before** each term starts.

**Next mentee window (Term 3, 2026):** applications **Aug 3 – Aug 18** · info sessions around **Jul 21**.

<br>

Confirm dates at [github.com/cncf/mentoring](https://github.com/cncf/mentoring).

<!--
Speaker notes:
1. Windows are SHORT and close fast, miss by a day = wait months
2. Term 3 2026: apps Aug 3–18 (close 18:00 UTC), info ~Jul 21; still "Planning", confirm on repo
3. Never miss it: watch cncf/mentoring, join #cncf-mentoring
4. We're in Term 2 now, target Term 3
-->

---

<!-- SLIDE 11 -->

# A Quick Word on GSoC

Google Summer of Code is another great option. A couple of things to&nbsp;know:

- **Annual and summer-timed**, for those newer to open source
- It has its **own eligibility rules**

<br>

> **Plan your path.** Some programs limit you if you've already done another. Check the rules *before* you apply so you don't lock yourself out.

<!--
Speaker notes:
1. Just awareness: LFX isn't the only option
2. "Plan your path": some programs lock you out, read the rules
3. GSoC timing → its official site
-->

---

<!-- SLIDE 12 · Act 3: How to Get In -->
<!-- _class: lead -->
<!-- _footer: "" -->

# From Curious to Contributor

### Find a project → Participate → Apply → Grow

<!--
Speaker notes:
1. Heart of the talk; signal the shift: "here's the actual plan"
2. Preview the four beats
3. Lead divider, only a few seconds on screen
-->

---

<!-- SLIDE 13 -->

# Step 1: Find the Right Project

Don't start with the biggest, most famous project. Start with the **right** one for&nbsp;you.

- Browse the **[CNCF Landscape](https://landscape.cncf.io/)** to see the whole ecosystem
- Pick by **interest** and the **skills** you have or want to build
- **Approachable beats prestigious**: a smaller, well-documented project teaches you more, faster
- **Get to know it**: read the docs and try the project before you contribute <sup>[8]</sup>

> Mariam chose Kyverno over Kubernetes because it felt more approachable, and *"the documentation was very, very good."*

<!--
Speaker notes:
1. Counter the "go straight to Kubernetes" instinct, too big for a first contribution
2. "Approachable beats prestigious", say it twice
3. Good docs = values newcomers (a real signal)
4. Pick the project FIRST, then engage
5. Understand it before contributing [8], how Mariam started; CNCF Glossary for jargon
-->

---

<!-- SLIDE 14 -->

# Step 2: Get Involved

- **Pick one good starting point**: a `good first issue`, a docs fix, or a task from [CLOTributor](https://clotributor.dev/)
- **Start small**: see one contribution all the way through review before taking on more
- **Be responsive**: address feedback, iterate, follow the project's CONTRIBUTING guide
- Contributing **isn't only code**: solid bug reports, reviewing others' work, and joining discussions all count

> Mariam went **deep, not wide**: one project, explored thoroughly, led by&nbsp;curiosity.

<!--
Speaker notes:
1. How you engage > how much; quality over quantity
2. Win = depth + responsiveness, not PR count (mentors look at merge ratio, engagement)
3. Don't flood with low-effort/AI PRs: each = real maintainer work; use AI to learn, reviewers can tell [6]
4. Teaching moment, not a scolding (Arthur ignores PR count; Bartek: spamming hurts you)
5. Mariam = depth over breadth; sets up her closing quote ("pick something small, explore it deeply")
-->

---

<!-- SLIDE 15 · Show Up (engagement) -->

# Show Up: Engagement Is More Than PRs

The best way to stand out isn't code volume, it's being a real community&nbsp;member.

- **Join the meetings**: community calls, SIG meetings, office hours
- **Review others' work**: reading PRs is one of the fastest ways to learn
- **Help others & share**: team up, blog, or give a lightning talk
- **Go to events**: KCDs, meetups

> Prometheus & Thanos tell mentees exactly this: take part in the project's&nbsp;life. <sup>[6][7]</sup>

<!--
Speaker notes:
1. The antidote to PR-farming: show up, don't spam. Push KCDs (local, accessible in India)
2. Prometheus/Thanos say the same: conferences, blog, even speak [7]
3. Reviewing PRs = fastest way to learn the code and norms
4. Events = meet mentors face to face; relationships beat a pile of PRs, not just big events like this one
-->

---

<!-- SLIDE 16 -->

# Step 3: Prepare a Strong Application

When the window opens, you'll write a **Cover Letter** (statement of purpose). Make it count:

- **Show you've engaged**: link the issues, PRs, or docs you've already touched
- **Be specific**: why *this* project, why *you*, what you want to learn
- **Be honest about your experience and your time**: overcommitting or underselling sets you (and your mentor) up for a rough term
- Apply to projects you can realistically grow into

Remember: mentors pick the **best fit**, weighing skills *and* the ability to&nbsp;collaborate.

<!--
Speaker notes:
1. Cover Letter = your one shot; generic copy-paste gets ignored
2. Link prior contributions (ties Step 1 to Step 3, why you start early)
3. Honesty protects YOU; be straight about experience/location/availability, misrepresenting can cost you a spot
4. They read for collaboration too; diversity is only a tie-breaker
-->

---

<!-- SLIDE 17 -->

# Step 4: Apply on the LFX Platform

The mechanics are simple. Here's the flow: <sup>[2]</sup>

1. Create a mentee profile at **[mentorship.lfx.linuxfoundation.org](https://mentorship.lfx.linuxfoundation.org)**
2. Open **Mentorships** → filter to **"Accepting Applications"**
3. Apply to the projects you've prepared for, **up to 3 per term**
4. Submit your Cover Letter, Resume, and any prerequisites
5. Your application stays **Pending** through the application phase

<!--
Speaker notes:
1. Platform's easy; the WORK is everything before this slide
2. Max 3/term, choose deliberately, don't spray-and-pray
3. "Pending" is normal, NOT rejected; resist re-applying
4. Offer a live walkthrough in Q&A if asked
-->

---

<!-- SLIDE 18 · What Tips the Decision -->

# What Tips the Decision

Mentors read every completed application, shortlist a few, and interview only their **top**&nbsp;candidates. <sup>[6]</sup>

It comes down to fit, not PR count:

- **Genuine motivation**: *"why this project, not the other 100?"* is a real&nbsp;question
- **A specific, honest application**: show you understand what the project&nbsp;needs
- **Clear communication**: it matters as much as raw skill
- **Realistic commitment**: it's a **full-time** program, so be upfront about the time you can give

<!--
Speaker notes:
1. IMPORTANT: NOT everyone gets an interview (shortlist ~30%, then top few); don't promise the room one [6]
2. For those interviewed: Arthur ignores PR count, decides on the interview, fit wins [6]
3. Most are judged on the application alone, so make it specific & sincere
4. "Why this project, not the other 100?" filters generic/AI apps fast
5. Match motivation to the project (red flag: tech-writing app that only talks databases)
6. Full-time = 32–40 hrs/week; make sure they can realistically give it
-->

---

<!-- SLIDE 19 -->

# Mariam's Path: The Flywheel in One Story

| When | What happened |
| --- | --- |
| 2022 | GSoC on PostgreSQL, first taste of open source |
| Then | Curiosity: Docker → Kubernetes → discovers Kyverno |
| **Term 1, 2023** | Accepted as **LFX mentee** on Kyverno; mentor **Jim Bugwadia** |
| During term | Ships major features; invited to **co-mentor** the next term |
| ~10 months later | PR adding her as a **Kyverno maintainer** is merged |
| Today | Mentors LFX terms herself, **bringing in the next generation** |

Mentee → contributor → mentor → maintainer. Now she brings in the next generation, that's the flywheel.

<!--
Speaker notes:
1. The payoff; tell it as a story, don't read the table
2. Good mentorship: Jim helped her discover answers, didn't hand them over
3. She co-mentored before she was a maintainer (mentor → maybe maintainer)
4. The win isn't the title, it's that she stayed and brings others in = flywheel
5. Full story: CNCF blog [5]
-->

---

<!-- SLIDE 20 -->

# If You're Not Selected (Yet)

These programs are **competitive**: hundreds apply for a handful of spots. Not getting picked is **not** a verdict on your worth.

- **Keep contributing** anyway: it's the single best thing you can do
- **Apply again** next term
- **Don't expect individual feedback**: at this volume, mentors can't provide it. It's not personal.
- **Don't compare yourself** to who got selected; mentors weigh factors you may not be able to see

Those who keep showing up are the ones who eventually get in.

<!--
Speaker notes:
1. Most won't be selected, that's math, not failure
2. CRITICAL: do NOT tell them to ask for feedback, no one can give it at this volume; say so kindly
3. Those who keep showing up often get in next round (I see it every term)
4. Don't compare to who got picked; mentors weigh things you can't see
-->

---

<!-- SLIDE 21 -->

# Common Mistakes to Avoid

- ❌ **Don't pester mentors about selection**: DMing, pinging, or emailing to ask if you've been picked won't help, in public or private. If you're shortlisted, they'll reach&nbsp;out.
- ❌ **Don't disparage other applicants**: their wins aren't your loss, you're on the same side.
- ❌ **Don't ghost**: if life happens, communicate; silence burns trust
- ❌ **Don't wait for permission**: start (thoughtfully) contributing before any window opens
- ❌ **Don't mass-produce AI PRs or applications**: reviewers can tell, and volume backfires <sup>[6]</sup>

<!--
Speaker notes:
1. Pestering about selection = the common mistake; no channel helps (DM/ping/email/public). Mentors reach out if you're shortlisted
2. "Disparage": keep it generous, you're all on the same side
3. The avoidable mistakes from the top, most rejections trace to one
4. Keep it light: "how not to trip," not a lecture
-->

---

<!-- SLIDE 22 -->

# Where to Get Help

You are not doing this alone. Use these channels:

- **CNCF Slack** → join at [slack.cncf.io](https://slack.cncf.io), then the **#cncf-mentoring** channel
- **GitHub Discussions** → [github.com/cncf/mentoring/discussions](https://github.com/cncf/mentoring/discussions)
- **Email** → `mentoring@cncf.io` (for things that can't be asked publicly)

<br>

> **Ask in public when you can.** Public answers help the next person too, and that's the whole spirit of open source.

<!--
Speaker notes:
1. The community WANTS you to succeed; asking in public is a strength
2. Public over DMs; email is for private matters only
3. One channel per question (don't fragment answers)
4. Slack: #cncf-mentoring
-->

---

<!-- SLIDE 23 · Close: Your Next Step -->

# Your Next Step (Start This Week)

You don't have to wait for an application window to begin.

1. **Pick one project.** Browse the [CNCF Landscape](https://landscape.cncf.io/) or [CLOTributor](https://clotributor.dev/) for something approachable.
2. **Make one contribution.** Find a `good first issue` or a docs fix. Open one PR. That's the whole job.
3. **Watch for the window.** Star [github.com/cncf/mentoring](https://github.com/cncf/mentoring) and join **#cncf-mentoring** on Slack for the next term.
4. **Engage like a community member.** Thank people who help you, review others' work, own your mistakes. This is what mentors select for.

<!--
Speaker notes:
1. Concrete & small: one project, one PR, one repo to watch
2. The journey starts today, before the application, for free
3. Step 4 = the how: one thoughtful contribution beats a stack of PRs
4. "Take a photo" action slide
-->

---

<!-- SLIDE 24 -->
<!-- _class: lead -->
<!-- _footer: "" -->
<!-- _paginate: false -->

# Questions?

### *"You're not supposed to know everything, just take the first step, and keep learning. It's okay to be lost in the beginning."*

**— Mariam Fahmy**, Kyverno maintainer

<!--
Speaker notes:
1. Open the floor, ~20 min here
2. Read Mariam's quote, let it land, then take questions
3. Q&A prep:
   - Next window dates? → have them ready
   - Student required? → no
   - Stipend in India? → PPP-based, don't quote a number
   - Still "Pending"? → normal, keep contributing, don't re-apply
   - Multiple projects? → yes, up to 3/term
   - Not selected last term? → keep contributing, apply again
-->

---

<!-- SLIDE 25 -->

# Resources

### Start here
- **CNCF Mentoring** (hub for everything): [github.com/cncf/mentoring](https://github.com/cncf/mentoring)
- **LFX Mentorship platform**: [mentorship.lfx.linuxfoundation.org](https://mentorship.lfx.linuxfoundation.org)
- **Getting started guide**: [contribute.cncf.io/contributors/getting-started](https://contribute.cncf.io/contributors/getting-started/)

### Find a project & read Mariam's story
- **CNCF Landscape**: [landscape.cncf.io](https://landscape.cncf.io/) · **CLOTributor**: [clotributor.dev](https://clotributor.dev/)
- **The Mentorship Flywheel** (CNCF blog): [cncf.io/blog/2025/12/18](https://www.cncf.io/blog/2025/12/18/the-mentorship-flywheel-how-cncf-is-growing-the-next-generation-of-cloud-native-leaders/)

<!--
Speaker notes:
1. "Take a photo" moment, everything to start is here
2. cncf/mentoring = the one essential link
-->

---

<!-- SLIDE 26 (References 1/2) -->
<!-- _class: references -->

# References

**[1]** "Am I Eligible?" LFX Mentorship Documentation, The Linux Foundation.
https://docs.linuxfoundation.org/lfx/mentorship/mentee-guide/am-i-eligible

**[2]** "How to Apply to the Mentorship Program." LFX Mentorship Documentation, The Linux Foundation.
https://docs.linuxfoundation.org/lfx/mentorship/mentees/apply-to-a-project

**[3]** "Become a Mentee." CNCF Mentoring.
https://github.com/cncf/mentoring/tree/main/mentees

**[4]** "LFX Mentorship." CNCF Mentoring.
https://github.com/cncf/mentoring/tree/main/programs/lfx-mentorship

---

<!-- SLIDE 27 (References 2/2) -->
<!-- _class: references -->

# References (continued)

**[5]** Waddington, N. "The Mentorship Flywheel: How CNCF Is Growing the Next Generation of Cloud Native Leaders." CNCF Blog, December 18, 2025.
https://www.cncf.io/blog/2025/12/18/the-mentorship-flywheel-how-cncf-is-growing-the-next-generation-of-cloud-native-leaders/

**[6]** Sens, A. & Płotka, B. "What We Learned After Mentoring 30+ Mentees." KubeCon EU 2026.
https://www.youtube.com/watch?v=rUvwnbhn2ZQ

**[7]** "Thanos & Prometheus Mentorship." Thanos Documentation.
https://thanos.io/tip/contributing/mentorship.md/

**[8]** Kleinhans, R. "Start Contributing to Open Source." CNCF Contributor Site.
https://contribute.cncf.io/contributors/getting-started/

---

<!-- SLIDE 28 (Colophon) -->
<!-- _class: references -->
<!-- _footer: "" -->
<!-- _paginate: false -->

# Colophon

This presentation was built with [Marp](https://marp.app/) and is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

<br>

**Source:** [github.com/nate-double-u/talks](https://github.com/nate-double-u/talks)
**Path:** `KCCN-India-2026/mentorship/presentation/slides.md`
**Theme:** CNCF (`themes/cncf/cncf.css`)



