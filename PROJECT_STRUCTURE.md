# Project Structure

**Last Updated:** 2026-02-03
**Tech Stack:** Next.js 16 + TypeScript + Tailwind CSS + Prisma

## Directory Structure

```
/
├── .claude/                    # Claude Code configuration
├── .next/                      # Next.js build output (gitignored)
├── app/                        # Next.js App Router
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                 # React components
├── lib/                        # Utility functions and shared code
├── prisma/                     # Database schema and migrations
├── public/                     # Static assets
├── research/                   # Research documents
│   ├── RESEARCH_INDEX.md
│   ├── ai-code-generation-2026.md
│   ├── config-generator-platforms-2026.md
│   └── community-rating-systems-2026.md
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore rules
├── CLAUDE.md                   # Project instructions for Claude Code
├── COLLABORATION_KNOWLEDGE.md  # Working style and learnings
├── MVP_SPEC.md                 # MVP specification
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── PROJECT_CONTEXT.md          # Project vision and context
├── PROJECT_STRUCTURE.md        # This file
├── SESSION_LOG.md              # Session metrics and progress
├── tailwind.config.ts          # Tailwind CSS configuration
├── TECH_STACK_OPTIONS.md       # Tech stack evaluation
└── tsconfig.json               # TypeScript configuration
```

## Key Files & Purposes

### Documentation (Root Level)
- **CLAUDE.md** - Auto-loaded project instructions
- **PROJECT_CONTEXT.md** - Project vision and use cases
- **MVP_SPEC.md** - MVP feature specification
- **SESSION_LOG.md** - Session tracking and metrics
- **COLLABORATION_KNOWLEDGE.md** - Best practices and learnings
- **PROJECT_STRUCTURE.md** - This file

### Next.js App Structure

#### `/app` Directory (App Router)
- **layout.tsx** - Root layout with metadata
- **page.tsx** - Home page
- Future routes will be added here:
  - `/app/browse/page.tsx` - Template browser
  - `/app/editor/page.tsx` - Template editor
  - `/app/api/` - API routes for backend logic

#### `/components` Directory
Reusable React components:
- UI components (buttons, cards, modals)
- Template-specific components
- Editor components
- Layout components

#### `/lib` Directory
Utility functions and shared code:
- Database utilities
- Helper functions
- Type definitions
- Constants

#### `/prisma` Directory
Database schema and migrations:
- `schema.prisma` - Database schema definition
- `migrations/` - Database migration files

#### `/public` Directory
Static assets served at root:
- Images
- Fonts
- Favicons

### Configuration Files

- **next.config.ts** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS theme and plugins
- **postcss.config.mjs** - PostCSS plugins
- **tsconfig.json** - TypeScript compiler options
- **.eslintrc.json** - ESLint rules
- **package.json** - Dependencies and npm scripts

## Development Commands

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linter
bun run lint
```

## Next Steps

1. **Set up Prisma** - Define database schema
2. **Install additional dependencies**:
   - NextAuth.js for authentication
   - CodeMirror 6 for editor
   - Markdown renderer
3. **Create initial templates** - Write 1-2 AGENTS.md templates
4. **Build core pages**:
   - Browse templates page
   - Editor page
   - Preview component
5. **Implement authentication**
6. **Add API routes** for CRUD operations

## Development Workflow

### Adding a New Feature
1. Create feature branch
2. Build components in `/components`
3. Add route in `/app`
4. Add API routes in `/app/api` if needed
5. Update types in `/lib/types.ts`
6. Test locally with `bun run dev`
7. Commit with descriptive message
8. Push to GitHub

### Database Changes
1. Modify `/prisma/schema.prisma`
2. Run `npx prisma migrate dev --name <migration-name>`
3. Run `npx prisma generate` to update client
4. Commit schema and migration files

## Deployment

**Platform:** Vercel

**Process:**
1. Push to GitHub
2. Vercel auto-deploys from main branch
3. Set environment variables in Vercel dashboard
4. Database hosted on Vercel Postgres or external provider

---

*Structure established: 2026-02-03*
*Next.js version: 16.1.6*
