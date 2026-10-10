# TPWM Lab — Academic Website

**Transportation Perception & World Modeling Lab**

交通感知与世界建模研究组

A bilingual academic website with English and Chinese pages, structured research and publication data, and a static build for GitHub Pages. The design follows [Siyuan (Max) Meng's personal website](https://siyuanmengmax.github.io/), with an independent TPWM wordmark, an original transportation concept illustration, expandable research descriptions, publication search and filters, and responsive navigation.

**Live since October 11, 2026:** [English](https://siyuanmengmax.github.io/tpwm-lab/en/) · [中文](https://siyuanmengmax.github.io/tpwm-lab/zh/)

See the [deployment record](docs/DEPLOYMENT.md) and [content review checklist](docs/REVIEW-CHECKLIST.md) for release details and items awaiting confirmation. Supporting documents in `docs/` are currently in Chinese.

## Local development

Requires **Node.js 20 or later**. There are no third-party dependencies; `npm install` is not needed.

```bash
npm run build
npm run check
npm run dev
```

Open `http://localhost:4173/`. The root redirects to the English page; `/en/` and `/zh/` provide separate, shareable language routes. After editing source files, run `npm run build` again and refresh the browser. To use another port, run `PORT=8080 npm run dev`.

## Offline preview

Run `npm run build`, then open `preview/TPWM-Lab-Preview.html` directly in a browser. This generated file embeds the styles, scripts, and profile photo. Language switching, expandable sections, publication search and filters, and the concept animation work offline; external publication and personal website links require an internet connection.

Edit the source files rather than the generated preview. Both `preview/` and `dist/` are excluded from Git and are created by the build.

## Project structure

The site uses Node.js built-in modules to generate static HTML and a small amount of vanilla JavaScript for browser interactions. It requires no backend or database. Page content remains readable with JavaScript disabled. CSS and JavaScript filenames include content hashes so browsers request updated assets when a new version is published. Shared templates and content records can also support future project pages.

```text
src/
  content/
    site.json          # Bilingual copy, site settings, and personal website links
    research.json      # Four research areas: foundations, future work, starter topics
    people.json        # Confirmed members; currently the founding PI only
    publications.json  # Titles, authors, years, types, statuses, and DOI/arXiv links
    opportunities.json # Recruitment settings; no confirmed openings
    news.json          # Reserved for future content; currently []
    projects.json      # Reserved for future content; currently []
  components/
    page.mjs           # Semantic HTML templates
    scene.mjs          # Original SVG concept illustration
public/assets/
  site.css             # Colors, typography, and responsive layouts
  site.js              # Navigation, search, filters, animation, and language switching
  favicon.svg          # Original TPWM wordmark
  max-profile.jpg      # PI photo reused from the personal website
scripts/
  build.mjs            # Content to static pages and a standalone preview
  serve.mjs            # Static server for local previews
  check.mjs            # Content, syntax, and link checks
.github/workflows/
  pages.yml            # GitHub Pages deployment; manually triggered
preview/               # Generated standalone bilingual preview; not tracked
dist/                  # Generated deployment files; not tracked
docs/                  # Design brief, sources, review checklist, QA, and handoff notes
```

## Updating content

Content files are in `src/content/`. Rebuild the site after making changes.

- **Publications:** Edit `publications.json`. The `type` field accepts `journal` or `vision`. Titles, authors, and DOI links share one record across languages; status and topic labels have English and Chinese fields. Filter counts update automatically.
- **Research:** Edit `research.json`. Keep established work in `foundation` and proposed work in `future`. Preserve existing `id` values where possible, as they are used in shared deep links.
- **People:** Edit `people.json` and place photos in `public/assets/`. Add only confirmed members with permission to display their information and images.
- **News and projects:** `news.json` and `projects.json` are empty placeholders and are not rendered. When real records become available, add the corresponding sections to `page.mjs`.
- **Recruitment:** `opportunities.json` reserves settings for future announcements. No openings are currently rendered. Once recruitment eligibility and positions are confirmed, add bilingual announcements and extend the templates. Changing `recruitmentConfirmed` alone does not publish an opening.
- **Colors and typography:** Edit `public/assets/site.css`. Chinese pages use the personal website's system sans-serif font stack, including PingFang SC and Microsoft YaHei, with heading weights of 600 and 500. English pages retain their separate typography. No external font service is required.
- **Contact:** Contact links currently point to the PI's personal website. Confirm any email address before adding it to the site.

## Deploying to GitHub Pages

The site is published from [siyuanmengmax/tpwm-lab](https://github.com/siyuanmengmax/tpwm-lab), a repository separate from the PI's personal website. GitHub Pages is configured to use **GitHub Actions**.

1. Review the [content checklist](docs/REVIEW-CHECKLIST.md), then run `npm run build` and `npm run check`.
2. Commit and push the source changes to this repository. Include source files, assets, scripts, configuration, and documentation; generated `dist/` and `preview/` files are excluded.
3. In the repository's **Actions** tab, select **Deploy TPWM Lab** and choose **Run workflow** on `main`.
4. The workflow builds and checks the site, uploads `dist/`, and deploys it to GitHub Pages.

**Pushing a commit does not deploy the site.** The workflow currently uses `workflow_dispatch` only. Automatic deployment can be enabled later by adding a `push` trigger for `main` in `.github/workflows/pages.yml`.

Internal links and assets use relative paths, so the site supports a repository subpath such as `https://USERNAME.github.io/REPOSITORY/`. The workflow uses the URL returned by GitHub Pages for canonical links, hreflang links, Open Graph URLs, and the sitemap. To override it, set the repository Actions variable `SITE_URL` under **Settings → Secrets and variables → Actions → Variables**. Local builds without a configured site URL omit the final deployment domain.

## Git workflow

The working repository already has Git and `origin` configured. Review changes before committing:

```bash
git status
git diff
npm run build && npm run check
git add <files-you-reviewed>
git commit -m "Update TPWM Lab website"
git push origin main
```

Replace `<files-you-reviewed>` with the paths you intend to commit. To publish website changes, run the deployment workflow after pushing.

## Content and asset policy

Research descriptions are based on the [design brief](docs/BRIEF.md) and the PI's personal website. Sources and discrepancies are documented in [SOURCES.md](docs/SOURCES.md). Established research and emerging directions are kept distinct. The site does not claim unconfirmed members, funding, equipment, recruitment openings, or a completed world-model system.

The original SVG is a conceptual illustration, not experimental data or algorithm output. I-WM is labeled **Preprint / Vision**. The profile photo is reused from the PI's personal website and was approved by Max for this release. The site does not use university logos, unauthorized publication figures, or UAV collaboration branding.

## Validation

The recorded checks cover the build, source and embedded JavaScript syntax, bilingual content, 52 page references, relative paths, and key content constraints. On October 11, 2026, 56 browser checks passed in Chrome, covering both languages at widths of 320, 390, 768, and 1440 pixels, keyboard interactions, search and filters, deep links, the offline preview, disabled JavaScript, and reduced-motion preferences. Subsequent checks confirmed Chinese font rendering and asset cache invalidation.

See [QA-REPORT.md](docs/QA-REPORT.md) for details. Screenshots from the local review are stored in `preview/screenshots/` and are not tracked in Git. Safari, Firefox, physical touch devices, and screen readers have not undergone dedicated testing.

## License

No open-source license has been specified. Rights to the profile photo and publication content are handled separately.
