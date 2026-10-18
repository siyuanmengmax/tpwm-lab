# 给本地 Codex 的交接说明

目标：接管 TPWM Lab 的静态双语学术网站；保持简洁学术风格和内容真实性。当前网站已于 2026-10-11 经 Max 确认公开发布。远程仓库为 `https://github.com/siyuanmengmax/tpwm-lab.git`，正式网址为 `https://siyuanmengmax.github.io/tpwm-lab/`。

## 第一次接手

1. 阅读 `README.md`、`docs/BRIEF.md`、`docs/REVIEW-CHECKLIST.md`、`docs/SOURCES.md`。
2. 运行 `npm run build`、`npm run check`、`npm run dev`。无第三方依赖，无需安装框架。
3. 在真实浏览器检查 `/en/`、`/zh/`，覆盖 320/390/768/1440px；使用键盘和 reduced-motion；按清单报告。
4. `origin` 已指向独立的 `siyuanmengmax/tpwm-lab` 仓库。不要覆盖个人主页；Pages 仍为手动发布。

## 不变约束

- 中文称「研究组」，不宣称学校已批准独立实验室。
- 姓名：蒙思源 / Siyuan (Max) Meng。
- 职称和学校身份按本人确认更新；2026-10-18 中文简历确认为「特聘副教授（青年百人）」，Max 确认英文使用 Assistant Professor。Max 随后明确要求网站直接展示正式任职信息，个人简介仅列学校、学院与职称，不再使用拟入职 / Incoming / Expected to join 等表述。简历中的起始月份 2026-11 保留在来源记录中，网页简介不展示入职时间。
- 英文页面不出现「青年百人」或该计划的英文描述；中文校名统一为「麻省大学阿默斯特分校 (UMass Amherst)」（Max 于 2026-10-18 确认）。
- 仅有一个真实发起人；不添加假学生、项目、经费、设备或招生名额。
- 已有工作和未来方向分开；VLA、语义世界模型、空地协同属于探索。
- 论文是发起人既有成果；I-WM 标注 Preprint / Vision。
- 不复制可能陈旧的稿件投稿状态或邮箱。
- 当前对外邮箱来自 2026-10-18 新版简历，存于 `opportunities.json`。简历原件保存在 Git 忽略的 `local/cv/`，不要放回会被构建清空的 `dist/`。
- 维护 `src/content/`，不要手改 `dist/` 或单文件预览；构建会覆盖它们。
- en/zh 内容同步；所有内部路径保持相对路径，支持 Pages project site。

## 下一步的合理顺序

本机 Chrome 基本验收与首次发布已完成（2026-10-11，详见 `QA-REPORT.md` 和 `DEPLOYMENT.md`）。后续按实际研究进展更新 JSON 内容，运行构建与检查后提交；GitHub Pages 工作流保持手动触发。部署时自动使用 Pages 返回的正式 URL 生成 SEO 元数据。

可在不改模板的情况下添加论文和人物。News、Projects、正式岗位仅预留数据接口，没有渲染实现；未来有真实内容再扩展。没有后端、数据库、追踪脚本或表单。

## 本地完善记录（2026-10-11）

补齐 `.github/workflows/pages.yml` 与 `.gitignore`；加入论文多词检索、双语主题检索、组合筛选空状态、吸顶导航和当前区块提示。离线预览切换语言时清理旧事件监听，修复无效 URL fragment 导致的脚本异常。构建配置先校验再替换产物，过滤 macOS 元数据；静态服务器提供双语 404 和端口占用提示。部署仍为手动触发。随后按 Max 的明确批准推送至已配置的独立仓库，并完成首次公开上线。
