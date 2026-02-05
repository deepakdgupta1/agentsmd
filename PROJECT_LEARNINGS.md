# Project-Specific Learnings

## AGENTS.md Generator Project

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CSS Framework | Tailwind v3 over v4 | v4 caused Turbopack errors with Next.js 16. v3 is stable and well-supported. |
| Editor Library | @uiw/react-codemirror | Thin React wrapper over CodeMirror 6. Requires `next/dynamic` with `ssr: false` (browser-only APIs). |
| Markdown Preview | react-markdown + rehype-sanitize | Defense-in-depth XSS prevention. Default GitHub schema strips scripts, onclick, javascript: URIs. |
| API Ownership Checks | Compound `where` clauses over check-then-act | `updateMany/deleteMany({ where: { id, userId } })` is atomic; avoids TOCTOU race conditions. |
| React State in Handlers | Refs over state dependencies in useCallback | Avoids re-creating handlers every keystroke. `contentRef.current` reads latest without triggering re-renders. |

### What Works Well
- Security review as a parallel subagent catches issues before they ship (found 22 items, 5 HIGH)
- Writing all components first, then running security review, then fixing -- more efficient than reviewing incrementally
- `useDeferredValue` for preview performance -- React 19 native, no debounce library needed

### What to Avoid
- **Subagent token waste has two causes -- fix both**: (1) The subagent prompt should specify a concise output format (e.g., "return ONLY a markdown table") to minimize the agent's response size. (2) `TaskOutput` returns the full JSONL conversation transcript, not just the final message. Mitigation for (2): instruct the subagent to write its findings to a scratchpad file, then read that file directly with the Read tool instead of calling TaskOutput. This bypasses the JSONL transcript entirely.
- **Mixing display concerns into props**: Don't modify `templateName` to include "Copied!" text -- use a separate visual indicator and `aria-live` region instead.
- **Check-then-act patterns in API routes**: Always use compound `where` clauses or transactions for ownership verification + mutation. Two separate queries are vulnerable to race conditions.

### Domain Knowledge
- CodeMirror 6 detects dark mode via `window.matchMedia`, not Tailwind's class strategy. If the app adds a manual dark mode toggle, the editor theme will need to sync via a shared context or prop.
- `rehype-sanitize` default schema is GitHub-flavored. If custom HTML elements are needed in templates later, the schema must be explicitly extended (not loosened).

---

*This file captures learnings specific to this project. Universal collaboration preferences are maintained in the [COLLABORATION_KNOWLEDGE gist](https://gist.github.com/deepakdgupta1/ef5b6bc76eacec99c43a41bc93012acb).*
