import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findMissingAssets } from './check-dist-assets.mjs';

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
