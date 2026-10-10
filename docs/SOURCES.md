# 内容与素材来源

原始核对日期：2026-10-10。2026-10-11 再次读取个人主页，所选论文作者、链接及 FRGB3D 的 Accepted 状态与现有数据一致；未更改任职与招生信息。

| 内容 | 来源 | 处理 |
|---|---|---|
| 研究定位、四方向、双语说明、研究边界 | 用户上传 TPWM Lab Website Brief v1.0（同目录 BRIEF.md） | 作为首要文案依据，已有基础与拓展分开 |
| 姓名、博士背景、代表论文作者/年份/链接 | https://siyuanmengmax.github.io/ | 读取公开页面并核对；未复制全部投稿信息 |
| MulDet3D | https://doi.org/10.1061/JTEPBS.TEENG-9741 | DOI 与个人主页、brief 一致；出版社链接在当前检索工具中未能读取 |
| FRGB3D | https://doi.org/10.1061/JCCEE5/CPENG-7710 | 个人主页为 Accepted；未能独立获取出版社最终卷期信息，保留待核实标记 |
| Road asset management | https://doi.org/10.1177/03611981261441294 | DOI 与个人主页、brief 一致 |
| I-WM | https://arxiv.org/abs/2604.17651 | arXiv 页面核实作者为 Siyuan Meng / Chengbo Ai，标明 vision paper；本站标注 Preprint / Vision |
| 学院英文名 | brief；https://qcyjt.wust.edu.cn/English.htm | 该英文页当前返回维护页面；沿用 brief 的名称并列入确认清单 |
| 发起人照片 | 用户现有个人网站源代码 max-profile.jpg | 复用用户个人照片，见发布前确认清单 |
| 交通示意 SVG 与 TPWM 字标 | 本项目原创 | 不含实测数据，不代表实验结果或已完成系统 |
| Pages 部署工作流 | https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages | 采用静态站点 upload-pages-artifact / deploy-pages 流程，默认仅手动触发 |

没有使用校徽、第三方摄影图库、未经授权的论文插图、学生照片或合作机构标识。无 Dr. Christofa / NEUTC 项目署名、基金获批或无人机数据授权的公开断言。

2026-10-11 补齐部署工作流时复核了 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) 与 [setup-node 官方仓库](https://github.com/actions/setup-node)。工作流保持 `workflow_dispatch` 手动触发，使用 Pages 返回的真实站点地址生成 SEO 元数据。

中文字体于 2026-10-11 按个人主页的 [chinese-typography.css](https://github.com/siyuanmengmax/siyuanmengmax.github.io/blob/main/assets/css/chinese-typography.css) 与 [portfolio.css](https://github.com/siyuanmengmax/siyuanmengmax.github.io/blob/main/assets/portfolio/portfolio.css) 对齐：使用同一系统无衬线字体栈，中文主标题字重 600，章节标题字重 500。
