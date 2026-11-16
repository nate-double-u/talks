import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { findMissingAssets, findHtmlFiles } from './check-dist-assets.mjs';

test('findHtmlFiles finds .html files at the top level of a directory', () => {
  const dir = mkdtempSync(join(tmpdir(), 'check-dist-assets-'));
  try {
    writeFileSync(join(dir, 'index.html'), '<html></html>');
    writeFileSync(join(dir, 'notes.txt'), 'not html');
    const found = findHtmlFiles(dir).sort();
    assert.deepEqual(found, [join(dir, 'index.html')]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('findHtmlFiles recurses into nested subdirectories', () => {
  const dir = mkdtempSync(join(tmpdir(), 'check-dist-assets-'));
  try {
    const nested = join(dir, 'kccn-eu-2026');
    mkdirSync(nested);
    writeFileSync(join(dir, 'root.html'), '<html></html>');
    writeFileSync(join(nested, 'index.html'), '<html></html>');
    const found = findHtmlFiles(dir).sort();
    assert.deepEqual(found, [join(dir, 'root.html'), join(nested, 'index.html')].sort());
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('findHtmlFiles ignores non-.html files', () => {
  const dir = mkdtempSync(join(tmpdir(), 'check-dist-assets-'));
  try {
    writeFileSync(join(dir, 'image.png'), '');
    writeFileSync(join(dir, 'script.mjs'), '');
    const found = findHtmlFiles(dir);
    assert.deepEqual(found, []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('findMissingAssets flags a referenced image that does not exist', () => {
  const html = '<section style="background-image: url(images/bg-title.png)"></section>';
  const missing = findMissingAssets('/dist/kccn-eu-2026/index.html', html, {
    existsSync: () => false,
  });
  assert.deepEqual(missing, ['images/bg-title.png']);
});

test('findMissingAssets returns nothing when all referenced assets exist', () => {
  const html = '<img src="images/bg-content.png"><section style="background-image: url(images/bg-title.png)"></section>';
  const missing = findMissingAssets('/dist/kccn-eu-2026/index.html', html, {
    existsSync: () => true,
  });
  assert.deepEqual(missing, []);
});

test('findMissingAssets ignores remote and data URIs', () => {
  const html = '<img src="https://example.com/logo.png"><img src="data:image/png;base64,AAA.png">';
  const missing = findMissingAssets('/dist/kccn-eu-2026/index.html', html, {
    existsSync: () => false,
  });
  assert.deepEqual(missing, []);
});
