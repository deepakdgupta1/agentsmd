# AGENTS.md Specification (2026)

**Research Date:** 2026-02-03
**Category:** AI Agent Configuration Standards
**Related Topics:** Agent Instructions, Configuration Files

## Research Question
What is the AGENTS.md specification and what are the best practices for creating effective agent configuration files in 2026?

## Key Findings

### 1. What is AGENTS.md?
AGENTS.md is a **simple, open format for guiding coding agents** - essentially a "README for agents":
- Lives in repository root (or home directory)
- Acts as a briefing packet for AI coding agents
- Standard Markdown format with flexible structure
- Complements README.md (which is for humans)

### 2. Purpose & Use Case
**README.md** = For humans (quick starts, project descriptions, contribution guidelines)

**AGENTS.md** = For AI agents (build steps, tests, conventions that might clutter README or aren't relevant to human contributors)

Contains the extra, sometimes detailed context coding agents need to work effectively on your project.

### 3. Governance & Standards
- **Emerged from collaborative efforts** across AI software development ecosystem
- Partners: OpenAI Codex, Amp, Jules from Google, Cursor, Factory
- **Stewarded by Agentic AI Foundation** under the Linux Foundation
- **Adopted by 60,000+ repositories** as of 2026

### 4. File Format & Structure
**Format:** Standard Markdown - use any headings you like; agents parse the text

**Common Sections:**
- Build & Test commands
- Architecture Overview
- Security guidelines
- Git Workflows
- Conventions & Patterns

**Filename:** Must be uppercase `AGENTS.md` (not lowercase) for consistency across OS/tools

### 5. Best Practices (from 2,500+ repository analysis)

#### Keep It Concise
- **Aim for ≤ 150 lines**
- Long files slow agents and bury signal
- Focus on essential context

#### Commands First
- Put executable commands in early sections
- Include specific flags and options: `npm test`, `npm run build`, `pytest -v`
- Not just tool names - full commands agents can run

#### Code Examples Over Explanations
- One real code snippet showing style > three paragraphs describing it
- Show, don't tell

#### Set Clear Boundaries
- Define what agents should never touch
- Specify security constraints
- List restricted operations

### 6. File Placement & Hierarchy
- Agents automatically read the nearest file in directory tree
- **Closest file takes precedence**
- Every subproject can ship tailored instructions
- Place at root for project-wide instructions

### 7. Tool Support (2026)
Supported by multiple AI coding tools:
- Kilo Code
- Cursor
- Windsurf
- VS Code (with custom instructions)
- GitHub Copilot
- And more...

### 8. Related Standards: Agent Skills (SKILL.md)
**Agent Skills** = Modular capabilities packaged as Markdown with YAML frontmatter

**Structure:**
- Each skill is a folder containing `SKILL.md`
- Metadata: name, description (minimum)
- Instructions for specific tasks
- **Progressive disclosure**: agents load only name/description at startup; full instructions loaded when needed

**Portability:** Open standard enabling portability across different AI agents

## Sources

### Official Specification & Documentation

1. **[AGENTS.md - Official Website](https://agents.md/)**
   The official website for the AGENTS.md standard and specification.

2. **[GitHub - agentsmd/agents.md](https://github.com/agentsmd/agents.md)**
   Official GitHub repository describing AGENTS.md as a simple, open format for guiding coding agents.

3. **[AGENTS.md - Factory Documentation](https://docs.factory.ai/cli/configuration/agents-md)**
   Factory.ai's official documentation on configuring and using AGENTS.md files.

4. **[Custom instructions with AGENTS.md - OpenAI Developers](https://developers.openai.com/codex/guides/agents-md/)**
   OpenAI Codex guide on using AGENTS.md for custom agent instructions.

### Best Practices & Analysis

5. **[How to write a great agents.md - The GitHub Blog](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)**
   GitHub's analysis of over 2,500 repositories revealing best practices for writing effective AGENTS.md files.

6. **[A Complete Guide To AGENTS.md - AI Hero](https://www.aihero.dev/a-complete-guide-to-agents-md)**
   Comprehensive guide covering all aspects of AGENTS.md creation and usage.

7. **[AGENTS.md: One File to Guide Them All - Layer5](https://layer5.io/blog/ai/agentsmd-one-file-to-guide-them-all)**
   Blog post explaining the concept and importance of AGENTS.md as a unified agent configuration approach.

### Tool-Specific Documentation

8. **[AGENTS.md Files - Kilo Code Docs](https://kilo.ai/docs/agent-behavior/agents-md)**
   Kilo Code's documentation on how their AI coding tool uses AGENTS.md files.

9. **[Builder | AGENTS.md - Builder.io](https://www.builder.io/c/docs/agents-md)**
   Builder.io's implementation and documentation for AGENTS.md support.

10. **[Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)**
    VS Code documentation on using AGENTS.md for custom instructions with GitHub Copilot.

### Enterprise & Standards

11. **[AGENTS.md Configuration - Skywork AI](https://skywork.ai/blog/agent/agents-md-configuration-standardizing-ai-agent-instructions-across-teams/)**
    Enterprise perspective on standardizing AI agent instructions across teams using AGENTS.md.

### Research & Analysis

12. **[On the Impact of AGENTS.md Files - arXiv](https://arxiv.org/html/2601.20404)**
    Academic research on the impact of AGENTS.md files on AI coding agent efficiency.

13. **[Decoding the Configuration of AI Coding Agents - arXiv](https://arxiv.org/pdf/2511.09268)**
    Research paper analyzing configuration approaches for AI coding agents.

14. **[Some notes on AI Agent Rule / Instruction / Context files - GitHub Gist](https://gist.github.com/0xdevalias/f40bc5a6f84c4c5ad862e314894b2fa6)**
    Community-contributed notes on various agent configuration file formats.

### Related Standards

15. **[Use Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills)**
    Documentation on Agent Skills (SKILL.md) standard for modular agent capabilities.

## Implications for AGENTS.md Generator

### Template Structure
Each template should include these common sections:
1. **Project Context** - Brief description of agent's role
2. **Build & Test Commands** - Executable commands with flags
3. **Architecture Overview** - Key patterns and structure
4. **Conventions** - Code style, naming, patterns
5. **Security Guidelines** - What NOT to do
6. **Git Workflow** - Branch naming, commit style
7. **Boundaries** - Restricted operations

### Template Best Practices
- **≤ 150 lines per template** - Keep it concise
- **Commands early** - Most actionable info first
- **Code examples** - Show actual patterns
- **Clear constraints** - Define boundaries explicitly

### Template Categories
Based on common agent roles:
- Software Testing (QA, test generation)
- Software Architecture (design, review)
- Digital Marketing (content, strategy)
- Time Management (scheduling, productivity)
- DevOps (deployment, infrastructure)
- Documentation (technical writing)

### Our MVP Templates (1-2)
1. **Software Tester Agent** - Comprehensive testing agent template
2. **Software Architect Agent** OR **Digital Marketing Agent** (choose based on research quality)

### Editor Features Needed
- **Line counter** - Show current line count (warn at 150)
- **Section templates** - Pre-populate common sections
- **Command validator** - Highlight executable commands
- **Example inserter** - Easy way to add code examples

## Related Research
- [AI Code Generation Architecture (2026)](./ai-code-generation-2026.md) - AI-powered generation approaches
- [Config Generator Platforms (2026)](./config-generator-platforms-2026.md) - Template platform best practices

---

*Research conducted: 2026-02-03*
*Next review: Before creating additional templates*
*Status: Complete - ready for template creation*
