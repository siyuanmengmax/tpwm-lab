# TPWM Lab 首次公开发布

发布日期：2026-10-11（Asia/Shanghai）。Max 已明确批准“推送源码并公开上线”。

- 网站：https://siyuanmengmax.github.io/tpwm-lab/
- 英文：https://siyuanmengmax.github.io/tpwm-lab/en/
- 中文：https://siyuanmengmax.github.io/tpwm-lab/zh/
- 源码：https://github.com/siyuanmengmax/tpwm-lab
- 首次部署提交：`c455931af72ee420241fe778836abd1401bbbb51`
- 成功的部署记录：https://github.com/siyuanmengmax/tpwm-lab/actions/runs/38071633657

Pages 使用 GitHub Actions（`build_type: workflow`），HTTPS 已启用。部署工作流 `.github/workflows/pages.yml` 保持 `workflow_dispatch` 手动触发；推送源码本身不会发布新版本。工作流从 Pages 获取真实站点地址，生成 canonical、hreflang、Open Graph URL 和 sitemap。

## 线上检查

根路径、英文页、中文页、CSS、JavaScript、头像、favicon 与 sitemap 共 8 个地址均返回 HTTP 200。语言页面包含正确的 `lang`、仓库子路径 canonical 和相对资源链接；sitemap 中的两个语言地址均指向正式网站。

本次发布沿用预览版本的研究内容、身份说明与招生边界。网站没有新增正式职称、招生名额或机构授权声明；后续确认项保留在 `REVIEW-CHECKLIST.md`。

## 后续发布

1. 修改 `src/content/` 或页面源文件。
2. 运行 `npm run build` 和 `npm run check`，按改动范围查看本地预览。
3. 提交并推送到本仓库 `main`。
4. 在仓库 Actions 中运行 **Deploy TPWM Lab**，选择 `main`。
5. 等待构建和部署成功，检查对应语言页面。

本文件之后的说明文档提交不改变首次部署的页面内容；无需仅为文档更新重跑网站部署。
