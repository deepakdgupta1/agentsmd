# Product Discovery Approach

## Method: Opportunity Solution Tree (Problem Decomposition)

A structured, top-down approach to discover what to build next — grounded in user problems, not solutions.

## Principles

1. **Problem space only** — No solution or feature language until the tree is complete. Stay in "what's the user struggling with?" not "what should we build?"
2. **Hierarchical decomposition** — Start at the top with the core problem. Each level breaks down into sub-problems connected by a hypothesis: *"If we solve sub-problems A, B, and C, then the parent problem is solved."*
3. **Evidence-grounded** — Each level is supported by evidence (usage data, competitor gaps, community signals, personal experience). No pure speculation.
4. **Prioritize before going deep** — At each level, rank which sub-problems matter most before decomposing further. Prevents the tree from exploding.

## Tree Structure

```
Level 0: Core Problem
  "What user pain does this project exist to solve, and for whom?"
    │
    ├── Level 1: Sub-problem A
    │     Hypothesis: "If A is solved, it contributes to solving Level 0 because..."
    │     Evidence: [what we know]
    │     Priority: [high/medium/low]
    │     │
    │     ├── Level 2: Sub-problem A.1
    │     └── Level 2: Sub-problem A.2
    │
    ├── Level 1: Sub-problem B
    │     Hypothesis: ...
    │     Evidence: ...
    │     Priority: ...
    │
    └── Level 1: Sub-problem C
          Hypothesis: ...
          Evidence: ...
          Priority: ...
```

## Devil's Advocate Rule

At every level of decomposition, challenge the assumptions and hypotheses. Actively look for:
- Flawed logic in how sub-problems connect to the parent problem
- Missing sub-problems that would invalidate the hypothesis
- Evidence that contradicts the stated belief
- Scope creep disguised as problem statements

This hardening process ensures only validated, defensible problems make it into the tree.

## Process

1. **Define Level 0** — Articulate the core problem and target user
2. **Decompose** — Break the current level into sub-problems
3. **Hypothesize** — State the connection: "If we solve these sub-problems, the parent problem is solved because..."
4. **Evidence check** — What do we know (or need to learn) to validate each sub-problem matters?
5. **Prioritize** — Rank sub-problems at this level before going deeper
6. **Repeat** — Decompose the highest-priority sub-problems into the next level
7. **Stop** — When sub-problems are concrete enough to map to solutions

## Output

The completed tree will be documented in a separate file (`opportunity-tree.md`) and used to drive the post-MVP roadmap.
