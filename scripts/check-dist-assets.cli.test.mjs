import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

// Covers main() — the CLI entry point wired to `npm run validate:assets` —
// which is never imported/called directly by check-dist-assets.test.mjs (only
// findMissingAssets and findHtmlFiles are unit-tested there) and never runs in
// CI either, since .github/workflows/build.yml does not invoke
// `npm run validate:assets` (tracked separately in issue #29). These tests
// exercise the script as a subprocess against real fixture `dist/` layouts to
// close that gap: missing dist dir, all assets present, and a broken
// reference, asserting both the exit code and the diagnostic output main()
// prints.
const scriptPath = resolve('scripts/check-dist-assets.mjs');

function runCli(cwd) {
  try {
    const stdout = execFileSync(process.execPath, [scriptPath], { cwd, encoding: 'utf8' });
    return { status: 0, stdout, stderr: '' };
  } catch (err) {
    return { status: err.status, stdout: err.stdout ?? '', stderr: err.stderr ?? '' };
  }
}

test('main() exits 1 with a clear message when dist/ does not exist', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'check-dist-assets-nodist-'));
  try {
    const result = runCli(cwd);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /dist\/ not found/);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('main() exits 0 and reports success when all referenced assets exist', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'check-dist-assets-ok-'));
  try {
    const distDir = join(cwd, 'dist');
    mkdirSync(distDir, { recursive: true });
    writeFileSync(join(distDir, 'bg.png'), '');
    writeFileSync(
      join(distDir, 'index.html'),
      '<section style="background-image: url(bg.png)"></section>',
    );
    const result = runCli(cwd);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /all referenced local assets exist/);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('main() exits 1 and reports each broken asset reference found', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'check-dist-assets-broken-'));
  try {
    const distDir = join(cwd, 'dist', 'nested');
    mkdirSync(distDir, { recursive: true });
    writeFileSync(join(distDir, 'index.html'), '<img src="missing.png">');
    const result = runCli(cwd);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /broken asset reference "missing\.png"/);
    assert.match(result.stderr, /1 broken asset reference\(s\) found in 1 built file\(s\)/);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});
