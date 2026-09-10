import { spawnSync } from 'node:child_process';

// Compile the maintained catalog/content directly; all generated HTML is verified before shipping.
const checks = [
  ['node_modules/typescript/bin/tsc', '--noEmit', '-p', 'tsconfig.app.json'],
  ['node_modules/typescript/bin/tsc', '--noEmit', '-p', 'tsconfig.node.json'],
  ['node_modules/typescript/bin/tsc', 'api/send-email.ts', 'middleware.ts', '--noEmit', '--moduleResolution', 'bundler', '--module', 'ESNext', '--target', 'ES2020', '--skipLibCheck', '--strict'],
  ['scripts/test-battery-estimate.mjs'],
  ['node_modules/vite/bin/vite.js', 'build'],
  ['scripts/validate-build.cjs'],
  ['scripts/validate-service-pages.cjs'],
  ['scripts/validate-money-page-links.cjs'],
  ['scripts/test-cost-guide.mjs'],
  ['scripts/test-split-comparison.mjs'],
  ['scripts/test-model-prices.mjs'],
  ['scripts/test-routing.mjs'],
  ['scripts/audit-content-quality.mjs', '--check'],
  ['scripts/test-indexnow.mjs'],
  ['scripts/test-indexnow-manifest.mjs'],
];
for (const args of checks) {
  const result = spawnSync(process.execPath, args, { stdio: 'inherit', shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
