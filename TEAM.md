# AGENTS.md Generator - Team Structure

This document defines the multi-agent team structure for this project.

## Team Overview

```
                    ┌─────────────────┐
                    │   Human Owner   │
                    │  (Product Lead) │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   Claude Main   │
                    │   (Team Lead)   │
                    │                 │
                    │  Orchestrates   │
                    │  Coordinates    │
                    │  Synthesizes    │
                    └────────┬────────┘
                             │
     ┌───────────┬───────────┼───────────┬───────────┬───────────┐
     │           │           │           │           │           │
┌────▼────┐ ┌────▼────┐ ┌────▼────┐ ┌────▼────┐ ┌────▼────┐ ┌────▼────┐
│Architect│ │Developer│ │Reviewer │ │ Tester  │ │   UX    │ │ Product │
│         │ │         │ │         │ │         │ │Reviewer │ │ Manager │
└─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
  sonnet     inherit      sonnet      haiku       sonnet      sonnet
```

## Agent Roles

| Agent | Model | Purpose | Tools |
|-------|-------|---------|-------|
| **architect** | Sonnet | System design, technical decisions, implementation planning | Read, Grep, Glob, WebSearch, WebFetch |
| **developer** | Inherit | Feature implementation, bug fixes, production code | Read, Write, Edit, Grep, Glob, Bash |
| **code-reviewer** | Sonnet | Code quality, security review, best practices | Read, Grep, Glob, Bash |
| **tester** | Haiku | Test execution, validation, QA | Bash, Read, Grep, Glob |
| **ux-reviewer** | Sonnet | UI/UX feedback, accessibility, design consistency | Read, Grep, Glob, WebFetch |
| **product-manager** | Sonnet | Requirements analysis, user stories, prioritization | Read, Grep, Glob, WebSearch |

## Built-in Agents (Also Available)

| Agent | Purpose |
|-------|---------|
| **Explore** | Fast codebase search and analysis (Haiku, read-only) |
| **Plan** | Research for plan mode (read-only) |
| **general-purpose** | Complex multi-step tasks requiring full capabilities |

## Orchestration Model

### Hub and Spoke

The **main Claude conversation acts as Team Lead**:
- Receives requests from human
- Delegates to appropriate specialist agents
- Synthesizes results from multiple agents
- Maintains overall project context
- Coordinates dependencies between agents

### Workflow Patterns

#### 1. Feature Development Flow
```
Human Request
    │
    ▼
product-manager  →  Clarify requirements
    │
    ▼
architect        →  Design solution
    │
    ▼
developer        →  Implement
    │
    ▼
code-reviewer    →  Review code
    │
    ▼
tester           →  Validate
    │
    ▼
ux-reviewer      →  UI feedback (if applicable)
    │
    ▼
Team Lead        →  Synthesize & report to human
```

#### 2. Bug Fix Flow
```
Human Report
    │
    ▼
Explore          →  Find relevant code
    │
    ▼
developer        →  Fix the issue
    │
    ▼
tester           →  Verify fix
    │
    ▼
code-reviewer    →  Review (optional)
```

#### 3. Parallel Review
```
Code Changes
    │
    ├──► code-reviewer  →  Quality/Security
    │
    ├──► tester         →  Run tests
    │
    └──► ux-reviewer    →  UI feedback

    All results → Team Lead → Synthesized report
```

## How to Invoke Agents

Agents are invoked automatically by Claude when the task matches their description. You can also request explicitly:

```
Use the architect agent to design the authentication flow

Have the code-reviewer look at my recent changes

Ask the product-manager to clarify these requirements
```

## Agent Configuration

All agent definitions are in `.claude/agents/`:
```
.claude/agents/
├── architect.md
├── code-reviewer.md
├── developer.md
├── product-manager.md
├── tester.md
└── ux-reviewer.md
```

To modify an agent, edit its markdown file or use `/agents` command.

## Task Coordination

For complex work involving multiple agents, use the Task system:

```
TaskCreate → Define work items
TaskUpdate → Set dependencies (blockedBy)
TaskList   → View status
```

This enables DAG-based coordination where agents can work on unblocked tasks.

## Best Practices

1. **Let Team Lead orchestrate** - Don't micromanage agent selection
2. **Trust agent expertise** - Each agent is specialized for their role
3. **Use parallel execution** - Independent reviews can run simultaneously
4. **Check synthesized results** - Team Lead combines outputs for you
5. **Iterate as needed** - Request follow-up from specific agents

---

**Last Updated:** 2026-02-04 (Session 4: project-team-setup)
