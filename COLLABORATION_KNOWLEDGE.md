# Collaboration Knowledge Base

## About Deepak (The User)

### Working Style & Preferences
1. **Quality Over Speed** - Places highest importance on doing things the RIGHT way
2. **Proactive Guidance Expected** - Wants Claude to challenge suboptimal approaches and suggest better alternatives
3. **Analytical Mindset** - Cares deeply about effectiveness and efficiency metrics
4. **Learning Orientation** - New to Claude Code, open to discovering features and best practices

### Communication Preferences
- **Style:** Concise and direct
- **Emojis:** No (unless explicitly requested)
- **Detail Level:** Actionable information, not excessive explanations

---

## Claude Code Best Practices for This Collaboration

### 1. Always Consult SOTA Standards
- **Before implementing:** Research current best practices
- **When uncertain:** Use WebSearch for 2026 standards/frameworks
- **Domain expertise:** Leverage training data + web research to inform decisions
- **Proactive suggestions:** Don't wait for explicit instructions if a better path exists

### 2. Leverage Claude Code Features Proactively
When relevant, suggest and use:

**Hooks** (`.claude/hooks/`)
- Pre/post tool execution automation
- Example: Auto-format code on file edits, run tests after changes

**Skills** (User-invocable commands)
- Custom workflows via `/skill-name`
- Can be created for repetitive tasks

**MCP Servers** (Model Context Protocol)
- Extend capabilities with external tools
- Database access, API integrations, specialized tools

**CLAUDE.md** (Project Instructions)
- Project-specific context and conventions
- Auto-loaded for all sessions in this directory
- Use for coding standards, architecture decisions, workflows

**Tools to Master**
- `Task` - Spawn specialized agents (Explore, Plan, etc.)
- `EnterPlanMode` - Get approval before non-trivial implementations
- `AskUserQuestion` - Clarify requirements (don't assume)
- `WebSearch` - Get current information (remember: it's 2026!)

### 3. Planning Before Doing
- **Simple tasks (<3 steps):** Just do it
- **Complex tasks:** Use `EnterPlanMode` or spawn Plan agent with Opus
- **Exploratory tasks:** Use Task tool with Explore agent
- **Multi-file changes:** Plan first, get approval, then implement

### 4. Git Workflow
- **Commit only when asked** (Deepak will request it)
- **Never use destructive git commands** without explicit permission
- **Stage specific files** (avoid `git add -A` for commits with sensitive files)
- **Follow commit message style** from repo history

### 5. Code Quality Standards
- **Avoid over-engineering:** Only implement what's requested
- **No premature abstractions:** Three similar lines > unnecessary helper
- **Security first:** Watch for OWASP top 10 vulnerabilities
- **Simple solutions:** Minimum complexity for current requirements

---

## Project-Specific Learnings

### AGENTS.md Generator Project
*To be populated as we work together*

#### Technical Decisions
- **Tailwind CSS v3 over v4**: v4 caused Turbopack errors with Next.js 16. v3 is stable and well-supported.

#### Core Principles Established

**1. Version Stability Over Bleeding Edge**
- Choose stable, proven version combinations over latest releases
- Priority: Working in one shot without errors > Having newest features
- Park version upgrades as future optimization roadmap items
- Example: Tailwind v3 (stable) vs v4 (caused Turbopack fatal error)
- **Principle:** Stable foundation first, optimize later

**2. Research Before Implementation**
- Use WebSearch to research SOTA standards before building
- Study best practices from existing implementations
- Document research findings in `research/` directory
- Example: Researched AGENTS.md spec from 2,500+ repos before creating templates

**3. Documentation as Reusable Knowledge Assets**
- Maintain structured research documents with sources and implications
- Enable decision traceability (why we chose X over Y)
- Build contribution-ready knowledge for central libraries
- Include web links with descriptions for future reference

#### What Works Well
- (To be added as we discover effective patterns)

#### What to Avoid
- **Don't use bleeding-edge versions without testing compatibility** - Latest ≠ Best. Use stable, proven combinations.
- **Don't implement before researching** - SOTA standards inform better decisions upfront
- **Don't skip documentation** - Learnings are valuable knowledge assets for future work

#### Domain Knowledge
- (To be added as we build expertise in agent configuration)

---

## Meta-Learnings About Our Collaboration

### Session 1 Insights
1. **Deepak values setup rigor** - Wanted git, metrics, knowledge tracking from day one
2. **Questions about continuity** - Concerned about context preservation across sessions
3. **Model awareness** - Understands different Claude models and their use cases
4. **Forward-thinking** - Plans for multi-day collaboration upfront

### Patterns to Continue
- Start each session by reviewing `PROJECT_CONTEXT.md` and `SESSION_LOG.md`
- Update this knowledge base when we discover new learnings
- Commit knowledge artifacts regularly (not just code)
- Use metrics to inform process improvements
- **Document all research** - Maintain curated research documents in `research/` with links and implications

### Adjustments Needed
- (To be added as we refine our process)

---

## Quick Reference: When to Use What

| Scenario | Recommended Approach |
|----------|---------------------|
| Need SOTA info | WebSearch (remember: 2026) |
| Complex feature (>3 files) | EnterPlanMode or Task(Plan agent, Opus) |
| Explore codebase | Task(Explore agent) |
| Research a concept | Task(general-purpose agent) |
| Multiple valid approaches | AskUserQuestion before implementing |
| Repetitive workflow | Suggest creating a Skill or Hook |
| Project conventions | Document in CLAUDE.md |
| Session learnings | Update this file + SESSION_LOG.md |
| Research findings | Create curated doc in research/ with sources + implications |

---

*This knowledge base should be updated throughout the project as we learn and refine our collaboration.*
