# Runtime layout repair — 2026-11-03

## Confirmed root cause
`src/app/layout.tsx` was accidentally truncated to an empty file during the previous branding edit. Next.js therefore had no valid default-exported React root layout and returned:
`The default export is not a React Component in "/layout"`.

## Repair
- Restored the complete root layout from the preceding audited project source.
- Re-applied the new SVG/ICO/PNG favicon metadata and warm theme color.
- Kept the updated brand logo, favicon, PWA icons and manifest.
- Confirmed the restored layout contains `export default function RootLayout`.

## Offline verification
`npm run verify:all` passed all 5 offline verification scripts:
- Source integrity (173 source files)
- Build readiness
- Template gallery (19 templates)
- SEO static checks (66 indexable routes)
- E-E-A-T checks (19 blog routes)

A fresh TypeScript check, ESLint run, unit test run and production build were not run in this environment because dependencies were not installed here.

## Local machine requirements
The project declares Node.js >=22. The supplied terminal log shows Node 20.19.0.
Install Node.js 22 LTS, close and reopen CMD, then verify `node -v`.

Then run:
```cmd
npm install
npm run verify:all
npm run typecheck
npm run lint
npm test
npm run build
```

Do not use `npm audit fix --force` as a blanket fix. Review `npm audit` findings and update affected packages in compatible groups.
