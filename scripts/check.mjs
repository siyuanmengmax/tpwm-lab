import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const read = name => fs.readFile(path.join(dist, name), 'utf8');
const content = async name => JSON.parse(await fs.readFile(path.join(root, 'src/content', `${name}.json`)));
const [people, publications, areas] = await Promise.all(['people', 'publications', 'research'].map(content));
let references = 0;
for (const lang of ['en', 'zh']) {
  const file = `${lang}/index.html`;
  const html = await read(file);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${lang}: duplicate IDs`);
  assert.equal((html.match(/<h1>/g) || []).length, 1);
  assert(html.includes(`lang="${lang === 'zh' ? 'zh-CN' : 'en'}"`));
  assert.equal((html.match(/class="person"/g) || []).length, people.length);
  assert.equal((html.match(/class="publication"/g) || []).length, publications.length);
  assert.equal((html.match(/<details>/g) || []).length, areas.length);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (value.startsWith('#')) {
      assert(ids.includes(value.slice(1)), `${file}: missing anchor ${value}`);
    } else if (/^https:\/\//.test(value)) {
      new URL(value.replaceAll('&amp;', '&'));
    } else {
      assert(!value.startsWith('/'), `${file}: root-relative path fails project hosting: ${value}`);
      const target = path.resolve(dist, lang, value);
      const stat = await fs.stat(target);
      if (stat.isDirectory()) await fs.access(path.join(target, 'index.html'));
    }
    references++;
  }
  assert(html.includes('aria-expanded="false"'));
  assert(html.includes('Preprint / Vision') || html.includes('预印本 / 研究愿景'));
  assert(!html.includes('mailto:'));
  assert(!html.includes('Assistant Professor'));
}
assert.equal(areas.filter(area => area.kind === 'core').length, 3);
assert.equal(areas.filter(area => area.kind === 'extension').length, 1);
for (const area of areas) for (const lang of ['en', 'zh']) {
  assert(area[lang].foundation && area[lang].future && area[lang].projects.length);
}
assert(people.length >= 1);
const preview = await fs.readFile(path.join(root, 'preview/TPWM-Lab-Preview.html'), 'utf8');
assert(preview.includes('data:image/'));
assert(!preview.includes('<link rel="stylesheet"'));
assert(!preview.includes('src="../assets/'));
assert(preview.includes('showLanguage'));
for (const html of [preview, await read('index.html')]) {
  for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new Script(match[1]);
}
for (const file of ['scripts/build.mjs', 'scripts/serve.mjs', 'scripts/check.mjs', 'src/components/page.mjs', 'src/components/scene.mjs', 'public/assets/site.js']) {
  execFileSync(process.execPath, ['--check', path.join(root, file)]);
}
await assert.rejects(fs.access(path.join(dist, '.DS_Store')));
const workflow = await fs.readFile(path.join(root, '.github/workflows/pages.yml'), 'utf8');
assert(workflow.includes('workflow_dispatch:'));
assert(!/^\s+(push|pull_request):/m.test(workflow), 'Publication must remain manually triggered.');
console.log(`PASS: ${references} references; bilingual routes, ${areas.length} research areas, ${people.length} member(s), ${publications.length} publications, source/inline JavaScript syntax, and self-contained preview.`);
console.log('Static checks passed. Recorded browser verification: docs/QA-REPORT.md.');
