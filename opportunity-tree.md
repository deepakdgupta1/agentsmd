# Opportunity Tree — AGENTS.md Generator

**Created:** 2026-02-08
**Method:** Problem decomposition with devil's advocate hardening (see `product-discovery-approach.md`)

---

## Level 0: Core Problem

> A Product Manager wants to hand a PRD to a team of AI agents and get back a high-quality software product. The bottleneck is not coordination (assumed solved) — it's that each individual agent lacks the deep, role-specific expertise to perform its function at the level a world-class human specialist would. There's no readily available source of SOTA-level instruction sets to close that gap.

**Target User:** Product Manager building a complex, large software product who wants to delegate to a team of AI agents.

**Underlying Belief:** The quality ceiling of AI-assisted work is determined by the quality of instructions given to the agents, just as a product's quality ceiling is determined by the team's expertise. As AI models rapidly improve, the problem shifts from "can the model do X?" (HOW) to "does the model know what X to do?" (WHAT). Finding models with the right capabilities is no longer the challenge — equipping them with the right expertise is.

**Scope Assumption:** Team management, coordination, and collaboration aspects are already solved. The quality of output is a direct function of the quality and level of expertise each AI agent in the team has.

---

## Level 1: Sub-problems

**Hypothesis:** *If we solve these sub-problems, then AI agents will be able to perform specialized functions at SOTA level.*

### A+B. Expertise Definition & Codification (Combined — Iterative Loop)
**Priority:** HIGH

> For any given specialized role, there is no reliable process to (a) define what SOTA-level expertise looks like and (b) translate that into instructions that make an AI agent actually perform at that level. These are inseparable — you can only validate the definition by testing the instructions.

**Why combined:** A (defining expertise) and B (codifying into instructions) were initially separate but are tightly coupled. You can't validate that you've correctly defined expertise without codifying it into instructions and testing whether an agent actually performs better. They form a single iterative loop: define → codify → test → refine.

### C. Coverage Across Roles
**Priority:** MEDIUM

> A PM needs a complete team. Having a great architect instruction set but no QA, no security reviewer, no UX specialist still leaves critical gaps. The value is in the ensemble.

**Note:** Starts with one role done exceptionally well, but the long-term value proposition requires breadth.

### D. Staying Current
**Reclassified:** Not a standalone sub-problem — it is a **constraint** on solving A+B.

> SOTA moves. Frameworks change, best practices evolve, new tools emerge. An instruction set written today degrades over time.

**Implication:** The process for A+B must account for currency — instruction sets need a mechanism to stay current, not just be correct at time of creation.

### E. Discovery and Access
**Priority:** EXISTS TODAY, INTENSITY UNKNOWN

> Even if great instruction sets exist somewhere, the PM needs to find the right ones for their project context and team composition.

**Evidence that this is a real problem today:**
1. PMs ask AI to generate role instructions, but have no way of telling whether the AI-generated version is the best possible. Quality is limited to the model's training and the ability/extent of web search.
2. PMs perform Google searches to find existing instruction sets — hit or miss. No guarantee that found instructions were themselves created based on thorough research.

**Open question:** How acutely do PMs feel this pain? Intensity is unvalidated.

---

## Level 2: Sub-problems under A+B (Expertise Definition & Codification)

**Hypothesis:** *If we solve these sub-problems, then we can reliably produce SOTA-level instruction sets for any role.*

### A.1 Dimensions of Expertise
**Status:** Not yet decomposed

> For a given role, what are the axes that separate world-class from mediocre? Without a framework for what to look at, research is unfocused. A great code reviewer vs. an average one — is it about what they check, how they prioritize, how they communicate findings, or all of it?

### A.2 Research Depth and Sources
**Status:** Not yet decomposed

> Where does the knowledge come from? Industry standards, expert practitioners, academic literature, community wisdom? How deep is "deep enough" before diminishing returns?

### A.3 Translation Fidelity
**Status:** Not yet decomposed

> Expert knowledge includes tacit judgment — "this feels like a bad abstraction." Not all expertise is easily made explicit. Some of it may be lost in translation to written instructions.

### A.4 Validation
**Status:** Framework defined (see below)

> How do you know the instruction set actually produces SOTA-level output? Without a validation mechanism, the entire define → codify → test loop has no feedback signal.

---

## Deep Dive: A.4 — Validation Framework

### Output Dimension Categories

For any role, output quality is not a single score. Each role's output has multiple dimensions, and each dimension falls into one of two categories:

- **Artifact-verifiable** — Output can be objectively tested against concrete criteria (e.g., code compiles, tests pass, security vulnerabilities detected)
- **Judgment-dependent** — Output quality requires domain expertise to evaluate; no single objective metric (e.g., design soundness, communication clarity, strategic thinking)

Most roles have dimensions in both categories. The validation approach is standardized per category, not per role.

### Validation for Artifact-Verifiable Dimensions

Standardized approach:
1. Define concrete acceptance criteria upfront (what does "correct" look like?)
2. Run agent output against those criteria (automated where possible)
3. Produce a pass/fail or scored result

Example: Code Reviewer role → "catches security vulnerabilities" dimension → run against a codebase with known planted vulnerabilities → measure detection rate.

### Validation for Judgment-Dependent Dimensions

Four complementary mechanisms that run in parallel, providing a multi-dimensional confidence signal:

#### Mechanism 1: One-Shot Comparison Test
- AI model generates its own instruction set for the same role (using web search), without seeing the set being reviewed
- The same AI then compares its version against the reviewed set
- **Signal:** Material deficiencies found in the AI's self-generated version
- **Relies on:** Cognitive asymmetry — AI can *recognize* quality it can't *produce* (like a music critic who can't compose at Mozart's level but can hear the difference)

#### Mechanism 2: Iterative Comparison Test
- AI iteratively improves its own version (using web search), up to 3 iterations
- Re-performs the comparison after each iteration
- **Signal:** Token cost to reach parity, weighted by model strength
- **Stopping condition:** Max 3 iterations

#### Mechanism 3: Multi-Model Failure Rate
- Mechanisms 1 and 2 are repeated across multiple AI models of varying strength
- **Signal:** Percentage of models that fail to close the gap in 3 iterations, weighted by relative model strength
- **Interpretation:** The more strong models that fail to match the instruction set, the higher the confidence it is SOTA

#### Mechanism 4: Outcome-Based A/B Test
- Same agent, same task, with vs. without the SOTA instruction set
- Measure real-world outcome delta: time, cost, output quality
- Works at individual agent level (not just team level)
- **Signal:** Measurable improvement in outcomes
- **Strength:** Ground truth — answers "do these instructions actually produce better results?" not just "are they different?"

### How the Mechanisms Relate

- **Mechanisms 1-3** are lightweight, automated, and scalable. They answer: *"Are these instructions better than what AI can self-produce?"*
- **Mechanism 4** is heavier but answers the deeper question: *"Do these instructions actually produce better real-world results?"*
- If all four agree → high confidence
- If they diverge (e.g., 1-3 say SOTA but 4 shows no outcome improvement) → instructions may be sophisticated-sounding but not actually helpful. Mechanism 4 serves as ground truth.

### Why Not Human Expert Validation?

Two reasons:
1. **Conflict of interest** — If AI agents equipped with SOTA instruction sets increase competition for human experts' work, experts have limited incentive to help push the bar.
2. **Outcome supersedes endorsement** — SOTA recognition follows from output quality, not expert approval. If a team of AI agents with SOTA instructions produces results the world values (example: 16 AI agents building a Linux kernel in 2 weeks), the outcome itself is a bigger testimony than any human expert's testimonial.

---

## Next Steps

Decompose the remaining Level 2 sub-problems in priority order:
1. [ ] A.1 — Dimensions of expertise
2. [ ] A.2 — Research depth and sources
3. [ ] A.3 — Translation fidelity
4. [ ] Revisit Level 1 sub-problems C and E after A+B decomposition is complete
