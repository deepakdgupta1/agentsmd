# CLAUDE.md - Project Instructions

This file is automatically loaded by Claude Code for all sessions in this project.

## Project Overview
**AGENTS.md Generator** - A platform to help users create optimized AGENTS.md configuration files for AI agents in different roles.

See `PROJECT_CONTEXT.md` for detailed vision and use cases.

## Working Principles

### Quality Standards
- Follow SOTA (State of the Art) standards and best practices
- Research current 2026 standards before implementation decisions
- Prioritize doing things RIGHT over doing things fast
- Security-first: Watch for OWASP top 10 vulnerabilities

### Collaboration Style
- **Proactive guidance expected** - Challenge suboptimal approaches
- **Plan before implementing** - Use EnterPlanMode for complex features
- **Ask questions** - Don't assume, clarify requirements
- **Track everything** - Update SESSION_LOG.md and COLLABORATION_KNOWLEDGE.md

### Git Workflow
- Create commits only when explicitly requested
- Stage specific files (avoid blanket `git add -A`)
- Follow existing commit message style
- Include co-author tag: `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`

## Project Structure
```
/
├── PROJECT_CONTEXT.md          # Project vision and strategy
├── SESSION_LOG.md              # Session metrics and progress
├── COLLABORATION_KNOWLEDGE.md  # Working style and learnings
├── CLAUDE.md                   # This file - project instructions
└── .gitignore                  # Standard web dev ignores
```

## Tech Stack
**Status:** ✅ Decided - 2026-02-03

**Frontend & Backend:**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Editor:** CodeMirror 6

**Database & ORM:**
- **Database:** PostgreSQL
- **ORM:** Prisma

**Authentication:**
- **Auth:** NextAuth.js

**Hosting:**
- **Platform:** Vercel (all-in-one)

**Future:**
- AI Integration: LLM API for content generation (post-MVP)

## Coding Conventions
*To be established as we write code*

## Architecture Decisions
*To be documented as we make them*

## Common Workflows
*To be added as patterns emerge*

---

**Last Updated:** 2026-02-03 (Session 1: Project Initiation)
