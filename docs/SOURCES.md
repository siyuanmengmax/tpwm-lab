# 内容与素材来源

原始核对日期：2026-10-10。2026-10-11 再次读取个人主页，所选论文作者、链接及 FRGB3D 的 Accepted 状态与现有数据一致；未更改任职与招生信息。

2026-10-16：Max 确认 FRGB3D 正式上线并提供出版社 BibTeX。本站据此更新为已发表，正式引用为 2027 年、41 卷 1 期、文章编号 04026129；修正 DOI 为 `10.1061/JCCEE5.CPENG-7710`，作者姓名为 Pravar Parashar。引用年份沿用正式卷期的 2027 年；本次确认日期不作为线上首发日期。出版社页面在当前检索工具中仍无法读取，本次更新依据为作者提供的正式书目信息，替代初始 brief 和个人主页中的旧记录。

| 内容 | 来源 | 处理 |
|---|---|---|
| 研究定位、四方向、双语说明、研究边界 | 用户上传 TPWM Lab Website Brief v1.0（同目录 BRIEF.md） | 作为首要文案依据，已有基础与拓展分开 |
| 姓名、博士背景、代表论文作者/年份/链接 | https://siyuanmengmax.github.io/ | 读取公开页面并核对；未复制全部投稿信息 |
| MulDet3D | https://doi.org/10.1061/JTEPBS.TEENG-9741 | DOI 与个人主页、brief 一致；出版社链接在当前检索工具中未能读取 |
| FRGB3D | Max 于 2026-10-16 提供的出版社 BibTeX；https://doi.org/10.1061/JCCEE5.CPENG-7710 | 已发表；2027, 41(1), 04026129；作者、DOI 与正式卷期按所提供信息更新 |
| Road asset management | https://doi.org/10.1177/03611981261441294 | DOI 与个人主页、brief 一致 |
| I-WM | https://arxiv.org/abs/2604.17651 | arXiv 页面核实作者为 Siyuan Meng / Chengbo Ai，标明 vision paper；本站标注 Preprint / Vision |
| 学院英文名 | brief；https://qcyjt.wust.edu.cn/English.htm | 该英文页当前返回维护页面；沿用 brief 的名称并列入确认清单 |
| 发起人照片 | 用户现有个人网站源代码 max-profile.jpg | 复用用户个人照片，见发布前确认清单 |
| 交通示意 SVG 与 TPWM 字标 | 本项目原创 | 不含实测数据，不代表实验结果或已完成系统 |
| Pages 部署工作流 | https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages | 采用静态站点 upload-pages-artifact / deploy-pages 流程，默认仅手动触发 |

没有使用校徽、第三方摄影图库、未经授权的论文插图、学生照片或合作机构标识。无 Dr. Christofa / NEUTC 项目署名、基金获批或无人机数据授权的公开断言。

2026-10-11 补齐部署工作流时复核了 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) 与 [setup-node 官方仓库](https://github.com/actions/setup-node)。工作流保持 `workflow_dispatch` 手动触发，使用 Pages 返回的真实站点地址生成 SEO 元数据。

中文字体于 2026-10-11 按个人主页的 [chinese-typography.css](https://github.com/siyuanmengmax/siyuanmengmax.github.io/blob/main/assets/css/chinese-typography.css) 与 [portfolio.css](https://github.com/siyuanmengmax/siyuanmengmax.github.io/blob/main/assets/portfolio/portfolio.css) 对齐：使用同一系统无衬线字体栈，中文主标题字重 600，章节标题字重 500。

英文字体于 2026-10-11 更换为 [Inter](https://rsms.me/inter/)。正体和斜体变量字体来自官方仓库固定版本 [v4.1](https://github.com/rsms/inter/tree/v4.1/docs/font-files)，未经修改，以 WOFF2 格式存放在 `public/assets/fonts/`。随附官方 [SIL Open Font License 1.1](../public/assets/fonts/Inter-LICENSE.txt)；单文件离线预览同时嵌入字体及许可证。页面从本站加载字体，不调用外部字体服务；中文保留个人主页的系统字体栈。

## 新版简历同步（2026-10-18）

本次以 Max 提供的 `dist/cv/cv_zh.tex` 为主要依据，配套 `cv_en.tex` 用于核对英文书目与链接。两份原件已逐字节校验并保存在 `local/cv/`，该目录被 Git 忽略且不进入网站产物。`dist/` 会在构建时清空，因此后续简历更新应使用 `local/cv/`。

- **身份与联系方式：** 中文采用「特聘副教授（青年百人）」；英文简历列 Assistant Professor，Max 在本次对话中明确确认英文沿用这一名称。学院英文名称按英文简历采用 School of Automotive and Transportation Engineering。两份简历均写 2026 年 11 月起任，本次日期尚为 2026-10-18，网站保留拟入职 / Incoming，不将未来任职写为已发生事实。联系邮箱采用两份简历共同提供的 `siyuan_meng_max@163.com`。
- **研究内容：** 补充无监督三维检测、鲁棒多点跟踪、相机–LiDAR 标定漂移与着色误差、跟踪质量与冲突可检测性、电动汽车充电站选择与路径—充电调度、不确定性条件下的路网养护。保留三个核心方向与一个系统优化拓展方向；I-WM 继续作为研究愿景。
- **已有书目：** MulDet3D 补齐 152(10), 04026100；综合道路资产管理论文补充文章编号 03611981261441294，不把英文简历中的 0(0) 占位卷期写到网站。FRGB3D 沿用此前确认的 2027, 41(1), 04026129。
- **新增代表论文：** 2023 年路段分组论文的作者全名、29(1), 04022047 和 DOI 与[作者论文列表](https://siyuanmengmax.github.io/publications/)及[出版社条目](https://ascelibrary.com/doi/10.1061/JITSE4.ISENG-2175)核对。2024 年路网养护不确定性论文按[出版社页面](https://www.tandfonline.com/doi/abs/10.1080/10298436.2024.2340001)补全题名末尾的 “using chance-constrained programming”，作者为 Rui Cao、Siyuan Meng、Shengkai Feng、Shi Dong、Qiang Bai，25(1), 2340001。
- **来源差异：** 中文简历中的车辆冲突稿件列 Transportation Research Part C，英文简历仍列 Accident Analysis & Prevention。网站不展示该稿件的投稿期刊或审稿状态，只吸收对应研究主题。期刊分区、手机号、推荐人信息和完整简历文件未加入网站。

本次直接读取部分 DOI 入口受限；上述新增书目的网页核对使用出版社检索结果及作者公开书目，未将访问限制解释为论文或 DOI 无效。简历事实优先于较早的个人主页信息。

2026-10-18 后续措辞确认：Max 要求英文页面不出现「青年百人」或相关英文描述，当前英文任职说明已经符合该要求；中文个人简介中的校名改为「麻省大学阿默斯特分校 (UMass Amherst)」。中文职称仍沿用此前确认的「特聘副教授（青年百人）」。

2026-10-18 任职展示调整：Max 进一步明确要求中英文网站去掉即将担任、拟入职、Incoming 等表述，直接展示武汉科技大学的正式任职信息。网站简介据此仅列学校、学院与职称，不展示入职时间。该决定替代本页上文记录的初次发布措辞；简历中的工作起始月份仍为 2026-11，原始简历及日期未修改。
