#!/usr/bin/env node
// Verifies every local image reference in built slide HTML (dist/**/*.html)
// resolves to a real file. `npm run build` only checks that marp-cli exits 0
// — it does not notice a broken relative image path, so a typo in a theme
// image filename can ship to the live Netlify deploy as a silently broken
// image. Run via `npm run validate:assets` after `npm run build`.
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

// Matches both `src="path.png"` attributes and CSS `url(path.png)` /
// `url("path.png")` references (quotes around url() are optional in CSS).
const ASSET_SRC_REGEX =
  /src=["']([^"']+\.(?:png|jpe?g|svg|gif|webp))["']|url\(\s*["']?([^"')]+\.(?:png|jpe?g|svg|gif|webp))["']?\s*\)/gi;

export function findHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...findHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

// Returns the list of referenced asset paths (as written in the HTML) that
// do not exist on disk relative to the HTML file's own directory. Remote
// (http/https) and data URIs are skipped since they aren't local assets.
export function findMissingAssets(htmlFilePath, html, { existsSync: exists = existsSync } = {}) {
  const missing = [];
  const baseDir = dirname(htmlFilePath);
  let match;
  ASSET_SRC_REGEX.lastIndex = 0;
  while ((match = ASSET_SRC_REGEX.exec(html))) {
    const src = match[1] ?? match[2];
    if (/^(?:https?:|data:)/i.test(src)) continue;
    const assetPath = resolve(baseDir, src);
    if (!exists(assetPath)) {
      missing.push(src);
    }
  }
  return missing;
}

function main() {
  const distDir = resolve('dist');
  if (!existsSync(distDir)) {
    console.error('dist/ not found — run `npm run build` first.');
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(distDir);
  let failures = 0;
  for (const htmlFile of htmlFiles) {
    const html = readFileSync(htmlFile, 'utf8');
    const missing = findMissingAssets(htmlFile, html);
    for (const src of missing) {
      console.error(`${htmlFile}: broken asset reference "${src}"`);
      failures += 1;
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} broken asset reference(s) found in ${htmlFiles.length} built file(s).`);
    process.exit(1);
  }
  console.log(`Checked ${htmlFiles.length} built HTML file(s) — all referenced local assets exist.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
