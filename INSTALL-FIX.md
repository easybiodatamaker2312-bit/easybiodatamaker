# Dependency install fix

The previous install failed because `eslint-config-next@16.4.4` requires ESLint 9 or newer,
while this project declared ESLint 8.

The package.json has been corrected to use `eslint: ^9.0.0`.

On Windows, from the project root:

1. Close any running dev server.
2. Delete the old dependency install and lockfile (if generated from the failed install):
   - Delete the `node_modules` folder.
   - Delete `package-lock.json` if it exists.
3. Run:

```bat
npm install
npm run dev
```

If npm still reports a peer dependency conflict, do not use `--force` or `--legacy-peer-deps`;
share the new error so the actual incompatible package can be corrected.
