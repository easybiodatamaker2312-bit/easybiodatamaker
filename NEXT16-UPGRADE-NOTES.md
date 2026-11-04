# Next.js 16 upgrade

This source project has been moved from Next.js 14.2.35 to the stable Next.js 16.4.4 line, with React/React DOM 19 and matching React type packages. Next.js 16 is the active LTS line according to the official support policy (checked 2026-11-03).

## Runtime requirements
- Node.js 20.9.0 or newer (Node 22 LTS recommended)
- npm 10+

## Install and verify
Because this archive intentionally omits the old Next.js 14 lockfile, generate a fresh lockfile for the upgraded dependency graph:

```bash
npm install
npm run typecheck
npm run lint
npm test
npm run build
```

## Important migration notes
- Next.js 16 uses Turbopack by default for `next dev` and `next build`.
- The old `next lint` command was removed; `npm run lint` now invokes ESLint directly.
- Next.js 16 requires async access for `cookies()`, `headers()`, `draftMode()`, route `params`, and page `searchParams` where used.
- Review any third-party libraries and custom build configuration if installation or build reports compatibility warnings.
- This project was updated at the dependency/configuration level in this environment. A complete install, typecheck, test suite, and production build could not be executed because npm registry access timed out. Do not deploy until the verification commands above pass.
