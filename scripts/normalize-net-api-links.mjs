// Normalise intra-doc links in the generated .NET API reference (docs/api-net).
//
// XMLDoc2Markdown emits file-relative links like `](./stpsdk.stprecognizer.md)`.
// Docusaurus resolves those two different ways depending on the page's route:
//
//   * index.md IS the directory index - its route is /docs/api-net, so an
//     extensionless `./x` resolves to /docs/x (WRONG). It needs the `.md`
//     suffix so Docusaurus resolves file-relative.
//   * every other page has route /docs/api-net/<name>, where `./x` correctly
//     resolves to /docs/api-net/x. There the `.md` form fails to resolve for
//     pages whose names contain several dots (e.g. the nested
//     StpRecognizer.StpMessageLevel page).
//
// So: keep `.md` in index.md, strip it everywhere else. Verified by building the
// site - this combination is the only one that yields zero broken links.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2] ?? 'docs/api-net';
const LINK = /\]\(\.\/([A-Za-z0-9_.\-]+?)\.md(#[^)]*)?\)/g;

// The generator emits U+2192 in inheritance chains ("Object -> ValueType -> Enum").
// Tracked files in this program are ASCII-only - non-ASCII breaks Windows tooling,
// whose default decode is cp1252 rather than UTF-8 - so fold it to an ASCII arrow.
const NON_ASCII = [[/→/g, '->']];

let changed = 0;
const files = readdirSync(dir).filter((f) => f.endsWith('.md'));

for (const file of files) {
  const path = join(dir, file);
  const before = readFileSync(path, 'utf8');
  // index.md IS the directory index and must keep its .md suffixes (see above).
  let after = file === 'index.md' ? before : before.replace(LINK, (_m, t, h) => `](./${t}${h ?? ''})`);
  for (const [pattern, replacement] of NON_ASCII) after = after.replace(pattern, replacement);
  if (after !== before) {
    writeFileSync(path, after);
    changed++;
  }
}

const stillNonAscii = files.filter((f) => /[^\x00-\x7F]/.test(readFileSync(join(dir, f), 'utf8')));
if (stillNonAscii.length > 0) {
  console.error(
    `::error::${stillNonAscii.length} generated file(s) still contain non-ASCII, ` +
      `e.g. ${stillNonAscii.slice(0, 3).join(', ')}`
  );
  process.exit(1);
}

console.log(`normalize-net-api-links: ${changed}/${files.length} files updated in ${dir}`);

if (files.length < 80) {
  console.error(
    `::error::only ${files.length} .NET API pages found in ${dir} (expected ~88) - ` +
      'the generator probably could not resolve the SDK dependencies'
  );
  process.exit(1);
}
