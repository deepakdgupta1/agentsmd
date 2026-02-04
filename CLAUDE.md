# CLAUDE.md - Project Instructions

This file is automatically loaded by Claude Code for all sessions in this project.

## Project Overview
**AGENTS.md Generator** - A platform to help users create optimized AGENTS.md configuration files for AI agents in different roles.

See `PROJECT_CONTEXT.md` for detailed vision and use cases.

## Session Start Protocol

**At the start of every session, immediately:**
1. Read `SESSION_LOG.md` - Present the "Next Session Goals" from the most recent session
2. Fetch universal collaboration preferences from gist and follow them:
   - URL: https://gist.githubusercontent.com/deepakdgupta1/ef5b6bc76eacec99c43a41bc93012acb/raw/COLLABORATION_KNOWLEDGE.md
   - Use WebFetch to retrieve and apply these guidelines
3. Prompt user to rename session if not already done (e.g., "Would you like to name this session?")

This is automatic - do not wait for user to ask.

## Working Principles

### Quality Standards
- Follow SOTA (State of the Art) standards and best practices
- Research current 2026 standards before implementation decisions
- Prioritize doing things RIGHT over doing things fast
- Security-first: Watch for OWASP top 10 vulnerabilities

### Collaboration Style
Collaboration preferences are fetched from the universal gist (see Session Start Protocol). Apply them consistently across all sessions.

### Git Workflow
- Create commits only when explicitly requested
- Stage specific files (avoid blanket `git add -A`)
- Follow existing commit message style
- Include co-author tag: `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`

## Project Structure
```
/
├── PROJECT_CONTEXT.md      # Project vision and strategy
├── SESSION_LOG.md          # Session metrics and progress
├── PROJECT_LEARNINGS.md    # Project-specific learnings and decisions
├── CLAUDE.md               # This file - project instructions
└── .gitignore              # Standard web dev ignores

# Universal (external):
# - COLLABORATION_KNOWLEDGE.md (GitHub Gist) - Working style preferences
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

**Last Updated:** 2026-02-04 (Session 3: Moved collaboration preferences to universal gist)
