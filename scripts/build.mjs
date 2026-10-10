import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { page, esc } from '../src/components/page.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = async name => JSON.parse(await fs.readFile(path.join(root, 'src/content', `${name}.json`), 'utf8'));
const [site, research, people, publications] = await Promise.all(['site', 'research', 'people', 'publications'].map(read));
const data = { site, research, people, publications };
const languages = ['en', 'zh'];
if (!languages.includes(site.defaultLanguage)) throw new Error('defaultLanguage must be en or zh.');

// Validate configuration before replacing the last successful build.
const origin = (process.env.SITE_URL || site.siteUrl).replace(/\/+$/, '');
if (origin) {
  const url = new URL(origin);
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS URL with an optional project path, without credentials, query, or fragment.');
  }
}
const canonical = lang => origin ? `
<link rel="canonical" href="${esc(origin)}/${lang}/">
<link rel="alternate" hreflang="en" href="${esc(origin)}/en/">
<link rel="alternate" hreflang="zh-CN" href="${esc(origin)}/zh/">
<link rel="alternate" hreflang="x-default" href="${esc(origin)}/${site.defaultLanguage}/">
<meta property="og:url" content="${esc(origin)}/${lang}/">` : '';

const dist = path.join(root, 'dist');
await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(dist, { recursive: true });
await fs.cp(path.join(root, 'public'), dist, { recursive: true, filter: source => path.basename(source) !== '.DS_Store' });
await fs.writeFile(path.join(dist, '.nojekyll'), '');

for (const lang of languages) {
  const t = site[lang];
  await fs.mkdir(path.join(dist, lang), { recursive: true });
  await fs.writeFile(path.join(dist, lang, 'index.html'), `<!doctype html>
<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(t.title)}</title>
<meta name="description" content="${esc(t.description)}">
<meta name="theme-color" content="#193936">
<meta property="og:title" content="${esc(t.title)}">
<meta property="og:description" content="${esc(t.description)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="TPWM Lab">
<meta property="og:locale" content="${lang === 'zh' ? 'zh_CN' : 'en_US'}">
${canonical(lang)}
<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/site.css">
<script src="../assets/site.js" defer></script>
</head>
<body class="lang-${lang}">${page(data, lang)}</body>
</html>`);
}

await fs.writeFile(path.join(dist, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="0;url=./${site.defaultLanguage}/">
<title>TPWM Lab</title><meta name="description" content="${esc(site.en.description)}"></head>
<body><h1>TPWM Lab</h1><p><a href="./en/">English</a> · <a href="./zh/">中文</a></p>
<script>location.replace('./${site.defaultLanguage}/' + location.hash)</script></body></html>`);
await fs.writeFile(path.join(dist, '404.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found · TPWM Lab</title></head>
<body style="font:18px/1.8 system-ui;margin:12% auto;max-width:620px;padding:24px;background:#f6f5f0;color:#193936">
<p>TPWM Lab · 404</p><h1>Page not found<br><span lang="zh-CN">页面未找到</span></h1>
<p>Please use your browser’s Back button, or visit <a href="${esc(site.personalWebsite)}">the PI website</a>.</p>
<p lang="zh-CN">请返回上一页，或通过<a href="${esc(site.personalWebsite)}">个人主页</a>继续了解我们的研究。</p></body></html>`);
if (origin) {
  await fs.writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${languages.map(lang => `<url><loc>${esc(origin)}/${lang}/</loc></url>`).join('')}</urlset>`);
}

// A file:// preview keeps content readable without JavaScript or a local server.
const css = await fs.readFile(path.join(dist, 'assets/site.css'), 'utf8');
const js = await fs.readFile(path.join(dist, 'assets/site.js'), 'utf8');
const favicon = await fs.readFile(path.join(dist, 'assets/favicon.svg'));
const photos = await Promise.all(people.map(async person => [person.image, (await fs.readFile(path.join(dist, 'assets', person.image))).toString('base64')]));
const pages = Object.fromEntries(languages.map(lang => {
  let html = page(data, lang);
  for (const [name, base64] of photos) {
    const mime = /\.png$/i.test(name) ? 'image/png' : /\.webp$/i.test(name) ? 'image/webp' : 'image/jpeg';
    html = html.replaceAll(`../assets/${name}`, `data:${mime};base64,${base64}`);
  }
  return [lang, html];
}));
const embedded = JSON.stringify(pages).replaceAll('<', '\\u003c');
const titles = JSON.stringify(Object.fromEntries(languages.map(lang => [lang, site[lang].title]))).replaceAll('<', '\\u003c');
await fs.mkdir(path.join(root, 'preview'), { recursive: true });
await fs.writeFile(path.join(root, 'preview/TPWM-Lab-Preview.html'), `<!doctype html>
<html lang="${site.defaultLanguage === 'zh' ? 'zh-CN' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(site[site.defaultLanguage].title)}</title><meta name="robots" content="noindex">
<link rel="icon" href="data:image/svg+xml;base64,${favicon.toString('base64')}">
<style>${css}</style></head><body data-preview-language="${site.defaultLanguage}" class="lang-${site.defaultLanguage}">
<div id="preview-app">${pages[site.defaultLanguage]}</div>
<script>${js}
const pages = ${embedded};
const titles = ${titles};
const app = document.getElementById('preview-app');
let disposePreview = () => {};
function showLanguage(lang) {
  disposePreview();
  app.innerHTML = pages[lang];
  document.body.className = 'lang-' + lang;
  document.body.dataset.previewLanguage = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = titles[lang];
  disposePreview = initialize(app);
  app.querySelector('.language-switch').addEventListener('click', event => {
    event.preventDefault();
    showLanguage(lang === 'en' ? 'zh' : 'en');
    revealHashTarget(true);
  });
}
showLanguage('${site.defaultLanguage}');
addEventListener('hashchange', () => revealHashTarget());
revealHashTarget(true);
</script></body></html>`);
console.log('Built en/, zh/, root entry, assets, and a self-contained bilingual preview.');
