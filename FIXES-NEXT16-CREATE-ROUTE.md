# EasyBiodataMaker - Next.js 16 runtime fixes

## Fixed
- Moved the `ssr: false` dynamic import for `BiodataBuilder` into
  `src/app/create/BiodataBuilderClient.tsx`, which is a Client Component.
- Kept `src/app/create/page.tsx` as a Server Component so it can export SEO metadata.
- Updated the Node.js engine requirement to >=22 because the install log reports
  `nanoid@6.0.2` requires Node.js 22, 24, or 26+.

## Recommended Windows setup
Install Node.js 22 LTS, then open a fresh CMD in the project root:

```bat
node -v
rmdir /s /q node_modules
del package-lock.json
npm install
npm run typecheck
npm run build
npm run dev
```

The `Turbopack has seen frequent file updates` messages are informational during
large dependency installs. They are not the compilation error.

The `24 vulnerabilities` output is an npm audit report, not the cause of the
`/create` 500. Review `npm audit` separately; do not run `npm audit fix --force`
blindly because it can introduce breaking dependency upgrades.
