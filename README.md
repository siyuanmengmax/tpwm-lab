# TPWM Lab — Academic Website v1

交通感知与世界建模研究组 / Transportation Perception & World Modeling Lab

简洁、可维护的中英双语静态学术网站。米白、深绿与克制的青绿色延续个人主页风格；独立 TPWM 字标、交通概念示意、研究方向展开、代表成果检索与筛选、吸顶导航与移动菜单提供研究组的独立识别。

**当前状态：本地预览稿，未公开部署。** 请先看 [发布前确认清单](docs/REVIEW-CHECKLIST.md)。本项目不包含虚构成员、招生名额、经费、设备或已建成世界模型的声明。

## 立即预览

直接双击 `preview/TPWM-Lab-Preview.html`：中英文切换、展开内容、论文检索与筛选、概念动画均可运行；样式、脚本和照片全部内嵌。外部论文与个人主页链接需要联网。这个文件由构建器生成，不应直接作为长期维护源文件。

## 本地开发

需要 Node.js 20 或更高版本。无第三方依赖，无需 `npm install`。

```bash
npm run build
npm run check
npm run dev
```

浏览器打开 `http://localhost:4173/`。根路径默认进入英文页面；中文首页为 `http://localhost:4173/zh/`。访问 `/en/` 与 `/zh/` 可查看独立可分享的语言路由。修改源码后重新运行 `npm run build` 并刷新浏览器。`PORT=8080 npm run dev` 可更换端口。

## 为什么采用这个结构

使用 Node.js 内置能力生成静态 HTML，浏览器只加载少量原生 JavaScript。相比引入大型框架，本版没有安装依赖、服务端或数据库的维护成本。正文提前生成，即使 JavaScript 禁用仍可阅读。后续如增加独立项目页，可在构建器中复用组件与内容，不必重录数据。

```text
src/
  content/
    site.json          # 双语页面文案、站点配置、个人主页入口
    research.json      # 四个研究方向：已有基础 / 未来方向 / 入门题目
    people.json        # 真实人物数据；当前仅发起人
    publications.json  # 论文、作者、年份、类型、状态、DOI/arXiv
    opportunities.json # 招生配置，当前未确认资格、无岗位
    news.json          # 预留数据，当前 []
    projects.json      # 预留数据，当前 []
  components/
    page.mjs           # 语义化页面模板
    scene.mjs          # 原创 SVG 概念示意
public/assets/
  site.css             # 配色、字体、响应式布局
  site.js              # 菜单、检索与筛选、动效、导航定位与语言切换
  favicon.svg          # TPWM 原创字标
  max-profile.jpg      # 用户个人主页现有照片
scripts/
  build.mjs            # 数据 → 静态页面 + 单文件预览
  serve.mjs            # 仅供本地预览的静态服务器
  check.mjs            # 内容与链接结构检查
.github/workflows/
  pages.yml            # 默认仅手动触发，不会推送即发布
preview/               # 可直接打开的双语预览
dist/                 # GitHub Pages 部署文件（由构建器生成）
docs/                  # brief、来源、发布清单、Codex 交接
```

## 更新内容

- **论文**：编辑 `publications.json`。`type` 支持 `journal` / `vision`。论文标题、作者和 DOI 共用一份记录；状态与分类有 en/zh 字段。添加后运行构建；筛选数量由脚本自动计算。
- **研究方向**：编辑 `research.json`。保持 `foundation` 与 `future` 的边界；`id` 是稳定锚点，已分享后尽量不要更改。
- **人员**：编辑 `people.json`，图片放到 `public/assets/`；添加真实成员前取得展示许可。
- **新闻/项目**：`news.json` 与 `projects.json` 是预留空数组，当前模板不渲染。未来增加真实记录时，再在 `page.mjs` 添加对应区块，不会凭空生成内容。
- **招生**：`opportunities.json` 是未来接口，当前不渲染岗位。正式资格确认后，更新双语公告并扩展模板；仅修改 `recruitmentConfirmed` 不会自动发布岗位。
- **颜色与字体**：编辑 `site.css` 顶部变量。使用系统字体，无第三方字体服务。
- **联系**：当前所有联系入口指向个人主页；不要直接复制可能变更的旧邮箱。

## GitHub Pages：独立仓库

远程仓库已配置为 [siyuanmengmax/tpwm-lab](https://github.com/siyuanmengmax/tpwm-lab)，与个人主页仓库独立。

1. 使用上述研究组仓库；不要使用 `siyuanmengmax.github.io` 仓库作为部署目标。
2. 将本目录完整内容提交到该新仓库。包含 `src/`、`scripts/`、`public/`、`package.json`、`.github/` 和文档；不必提交 `dist/`、`preview/`。
3. Repository → Settings → Pages → Source 选择 **GitHub Actions**。
4. 检查 `docs/REVIEW-CHECKLIST.md`。确认可正式发布后，手动运行 **Deploy TPWM Lab** 工作流。此操作才会公开网站。
5. 工作流构建 `dist/` 并发布至该仓库的 Pages。所有链接和资源使用相对路径，支持 `https://USERNAME.github.io/REPOSITORY/`，无需修改资源前缀。
6. 工作流使用 GitHub Pages 返回的站点地址生成 canonical、hreflang、Open Graph URL 与 sitemap。如需覆盖，Repository → Settings → Secrets and variables → Actions → Variables 中设置 `SITE_URL`（例如 `https://USERNAME.github.io/REPOSITORY`）。本地构建未设置地址时不会写入最终域名。
7. 如果以后需要 push 自动部署，再自行在 workflow 的 `on:` 下增加 `push: {branches: [main]}`；本版默认仅 `workflow_dispatch`。

工作流中的 Actions 版本按官方 Pages 示例设置。若 GitHub 后续有版本更新，交给本地 Codex 检查后升级。

## 本地 Git 管理

本目录已经初始化 Git，并配置了 `origin`，无需重复 `git init` 或 `git remote add`。提交前先查看修改并通过检查：

```bash
git status
npm run build && npm run check
git add .
git commit -m "Update TPWM Lab website"
git push -u origin main
```

首次推送不会触发本项目的部署工作流。后续每次修改前用 `git status` 检查，修改后运行 `npm run build && npm run check`。

## 内容与素材边界

研究内容来自上传 brief 与用户个人主页。引用和差异见 `docs/SOURCES.md`。SVG 是原创概念示意，无实测数据、实验指标或算法输出；I-WM 明确为预印本/愿景。照片由用户现有个人主页复用；请本人确认继续对外使用。未使用校徽、未经授权的论文插图或无人机合作项目标识。

## 验证范围

构建、源文件及内嵌 JavaScript 语法、双语静态内容、52 处页面引用、相对路径与关键内容边界已检查。2026-10-11 使用本机 Chrome 完成 56 项浏览器检查，覆盖中英文页面的 320/390/768/1440px 布局、键盘交互、筛选与检索、深链接、离线预览、禁用 JavaScript 与 reduced-motion。详细记录见 [QA-REPORT.md](docs/QA-REPORT.md)，页面截图位于 `preview/screenshots/`。Safari、Firefox、真机触摸与屏幕阅读器尚未专项测试。

本项目未设置开源许可证；公开仓库前由 Max 决定代码许可证，个人照片和论文内容权利单独处理。
