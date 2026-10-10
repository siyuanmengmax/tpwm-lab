# TPWM Lab Website — Content & Design Brief v1.0

> **用途：** 直接交给 ChatGPT Work，用于设计、开发并预览 TPWM Lab 的首版中英双语学术网站。  
> **版本：** v1.0 · 2026-10-10  
> **文档状态：** 策划与建站简报（不是已经获批的机构实验室介绍）  
> **建议先做：** 高质量、可维护、可扩展的 MVP 网站；随后再完善内容、科研项目和招生信息。

---

## 0. 给 ChatGPT Work 的执行指令（可直接使用）

请基于本文件为我创建一套 **TPWM Lab（Transportation Perception & World Modeling Lab）** 的中英双语学术研究组网站。网站优先面向未来研究生、跨学科学生、科研合作者和同行学者。**请尽可能直接完成可运行的网站，而不是只提供设计建议或静态效果图。**

工作要求：

1. 先参考我的个人主页 <https://siyuanmengmax.github.io/>，延续其**简洁、克制、专业、研究导向**的视觉风格；Lab 网站应有独立品牌，但与个人主页保持家族感。
2. 请完成响应式网页（桌面/移动端）、清晰的导航、真正可用的中文/英文切换，以及基础 SEO、可访问性和性能优化。
3. 首屏保持简洁。用 **Research / People / Publications / Join Us** 展示研究方向、PI 学术背景和潜在的学生研究机会。只展示已经确认的事实；不编造经费、学生、合作项目、设备、获奖或招生名额。
4. 网站须区分 **established research（已有积累）** 和 **emerging directions（正在拓展）**：多 LiDAR 感知、跟踪、安全分析属于已有基础；语义世界模型、VLM/VLA、空地协同属于研究方向与未来计划。
5. 优先使用现有个人主页真实可访问的论文链接和已取得授权的论文配图；没有图片时使用原创的轻量 SVG/示意图或精致文字排版，**不要制造看起来像真实实验结果的假图片**。
6. 内容应便于持续维护，优先采用结构化数据或 Markdown/MDX，避免未来添加论文、成员、新闻时需要大规模修改页面代码。
7. 建议采用适用于 GitHub Pages 的静态部署方案，并说明如何通过 Git 管理与发布。**先预览/交付源码，在我确认目标仓库及发布权限前不要擅自公开发布或覆盖现有个人主页。**
8. 中文名称中的“研究组”与“实验室”尚须根据学校实际命名/认定情况确认：首版建议使用 **“交通感知与世界建模研究组（TPWM Lab）”**，英文品牌维持 TPWM Lab；若正式获批实验室名称，再切换为“交通感知与世界建模实验室”。
9. 若必要信息缺失，请使用清晰的待确认标注或暂时隐藏模块，不要自动补写虚构信息。先以本文件的默认决策做出可展示的网站初稿。

**期望交付：** 完整网站源码、可查看的网页预览、README（维护/本地运行/部署说明）、内容数据文件及待确认信息清单。

---

## 1. 定位与命名

| 项目 | 建议 | 说明 |
| --- | --- | --- |
| 英文名称 | **Transportation Perception & World Modeling Lab** | 首选，正式全称；简称 **TPWM Lab** |
| 中文公开名称（初期） | **交通感知与世界建模研究组** | 入职初期使用，避免暗示校方已正式设立机构实验室 |
| 中文获批后的备选名称 | 交通感知与世界建模实验室 | 仅在获得确认之后使用 |
| 简写/Logo 字标 | **TPWM** 或 **TPWM Lab** | 采用清晰字标，避免过度复杂的图形 Logo |
| 核心定位 | Trustworthy Multimodal Transportation Perception & World Modeling | **可信多模态交通感知与世界建模** |
| 特色标签 | Quality-aware · Multimodal · Physics-grounded · Semantics-aware · Safety-oriented | 可用作页面标签，不必在首屏一次全部展示 |
| 英文标语（推荐） | **Perceive. Understand. Predict. Safeguard.** | 对应感知、理解、预测和安全 |
| 中文标语 | **感知交通 · 理解场景 · 预测演化 · 守护安全** | 与英文标语语义相近，非强求逐字直译 |

### 1.1 核心使命

研究对象**不是某一种传感器或某一类道路场景**，而是复杂交通系统中的感知、场景演化、交互行为与安全决策。团队的核心科学兴趣是：当观测质量不均、信息不完备、交通主体动态交互且未来存在不确定性时，如何可靠地理解和预测交通世界。

**一句话定位：** 从多模态交通感知出发，通过物理与语义协同的世界建模，支持可信的交通风险预测与智能决策。

**不要将 TPWM Lab 描述为已完成完整交通世界模型或 VLA 控制系统。** 这些是长期发展方向。

### 1.2 网站读者与信息优先级

1. **潜在学生：** 研究什么、可以参与哪些项目、适合什么背景、如何交流。
2. **潜在合作者：** PI 已有科研基础、研究议题、代表性论文、可以合作的方向。
3. **同行与学术机构：** 学术身份、研究脉络、论文与联系方式。

重点强调研究方向的**学术连续性**：博士期间的质量感知多 LiDAR 感知与安全分析 → 不确定性驱动的可靠风险预测 → 物理/语义协同交通世界模型 → 面向空地协同等场景的未来拓展。

---

## 2. 网站信息架构与 MVP

### 2.1 推荐导航

`Home | Research | Publications | People | Join Us` + `中文 / EN` + 个人主页快捷链接。

首页可以采用**单页多区块的研究型落地页**，但代码结构须允许以后扩展为独立路径：

- **Home：** 品牌标识、简洁 Hero、核心愿景、3 大主线 + 1 拓展、精选论文、Join CTA。
- **Research：** 4 个研究方向的解释、关键词、可研究课题、彼此关联图。
- **Publications：** 基于 PI 本人已有公开成果的精选论文（后续独立管理 Lab Publications）。
- **People：** 起步时只有 PI；不要创建虚构学生、校友或成员卡片。
- **Join Us：** 研究方向、适合的学术背景、建议的学生入门项目和联系说明；**不承诺当前有招生名额**。
- **News / Projects：** 先设计数据结构，但信息尚少时可以不显示在导航里。

**首页建议顺序：** Hero → Research Areas → Research Philosophy / Connected Research Flow → Selected Publications → PI → Prospective Students & Collaborators → Footer。

### 2.2 首页首屏（设计原则）

- 顶部小尺寸 TPWM 字标、导航与语言切换。
- 醒目但不过大的 `Transportation Perception & World Modeling Lab`。
- 1–2 句研究定位，不在首屏堆砌履历、技术名词和长篇摘要。
- 两个有效入口：`Explore Research` / `Prospective Students`（中文为“探索研究方向”/“了解学生研究机会”）。
- 轻量抽象视觉：交通场景示意、轨迹/几何/语义关联图；用真实已授权科研图片更佳。
- 大幅留白、清晰层级、克制动效；不采用过度商业化/营销风格。

---

## 3. 四大研究方向（面向公开网页）

三大核心方向 + 一个拓展方向的组织方式：**Perception → World Modeling → Safety → Systems**。第四项是现有优化研究经验的延伸，不是必须与前三项投入等量资源。

### 3.1 Multimodal Perception & Sensor Fusion

**中文：多模态交通感知与传感器融合**  
**定位：** 当前可依托博士研究直接开展的主力方向。

研究多源异构传感器条件下的三维交通场景感知，包括 LiDAR、Camera、Radar、UAV 和 V2X 等观测来源，关注检测、跟踪、跨视角融合、质量评估与不确定性建模。

**关键词：** 3D Object Detection; Multi-object Tracking; Multi-sensor Fusion; Cross-view Perception; Quality-aware Sensing; Uncertainty Estimation。

**适合学生的起步项目示例：** 多模态目标检测比较、时空配准与融合、遮挡情况下的轨迹鲁棒性评估、感知质量测量。

### 3.2 Transportation World Models & Scene Intelligence

**中文：交通世界模型与场景智能**  
**定位：** 长期重点布局的前沿方向；当前为研究愿景和逐步积累阶段。

探索交通环境的统一时空表示、多主体行为与交互、物理运动约束和道路语义联合建模、未来场景演化预测与反事实推演。VLM、LLM、生成式模型等作为按需采用的方法，不以技术名词代替科学问题。

**关键词：** Spatiotemporal Representation; Multi-agent Interaction; Trajectory Prediction; Semantic Scene Graphs; Physics-grounded Modeling; Generative World Models。

**适合学生的起步项目示例：** 交通场景图、交互感知轨迹预测、物理约束状态预测、小规模多模态场景表示学习。

**边界：** VLA 与闭环决策是潜在中长期拓展，不能宣传为现有成熟系统。

### 3.3 Traffic Safety & Risk Intelligence

**中文：交通安全与风险智能分析**  
**定位：** 交通工程学科特色最鲜明的主力方向，亦是拟议青基研究的关键基础。

研究机动车、骑行者、行人等交通参与者的交互行为与潜在冲突，关注观测误差、轨迹不确定性与交通规则等因素如何影响冲突指标及未来风险判断的可靠性。

**关键词：** Traffic Conflicts; Vulnerable Road Users; Surrogate Safety; Risk Prediction; Uncertainty Propagation; Reliability & Calibration。

**适合学生的起步项目示例：** TTC/PET 等代理安全指标的误差敏感性、骑行者—车辆交互分析、风险概率校准、轨迹缺失下的稳健评估。

**边界：** 不将冲突代理指标自动等同于真实碰撞事故风险。

### 3.4 Intelligent Mobility & Infrastructure Optimization

**中文：智能交通系统与基础设施优化**  
**定位：** 与既有交通系统优化、道路资产管理研究衔接的特色拓展方向。

研究数据驱动的交通管理、交通基础设施维护与优化、多目标决策，以及未来智能网联交通与空地协同系统的运行管理问题。

**关键词：** Transportation Systems Optimization; Infrastructure Asset Management; Data-driven Decisions; Connected Mobility; Ground–Air Coordination。

**适合学生的起步项目示例：** 多目标道路资产管理、交通运行优化、感知信息支撑的交通管理、交通基础设施决策。

**边界：** 低空交通方向属于候选应用拓展，不应声称已有具体低空研究平台或飞行器数据集。

### 3.5 横贯四个方向的长期科学主题

**Trustworthiness / Reliability（可信性与可靠性）** 是跨方向的研究主线，包括观测质量、误差传播、不确定性表达、预测概率校准、物理一致性与安全评估可靠性。**语义建模与物理建模相结合**是有潜力的技术路线，但具体 LLM/VLM/VLA 方案仍需由科学问题和实证结果决定。

---

## 4. 可以直接上站的文案：中文

### 4.1 Home — Hero

**TPWM Lab**  
**交通感知与世界建模研究组**  
**感知交通 · 理解场景 · 预测演化 · 守护安全**

我们关注复杂交通系统中的多模态感知、动态场景理解、交通安全与智能决策，致力于研究在异构观测、信息缺失与不确定性条件下，如何构建可靠的交通场景表示与预测方法。

### 4.2 About / Mission

交通系统的智能化不仅依赖更准确的目标检测和轨迹估计，也需要理解交通参与者之间的交互、预测环境的未来变化，并评估预测结果的可信程度。TPWM Lab 致力于探索以交通科学问题为导向的多模态感知与世界建模方法，逐步连接物理状态、场景语义、动态演化与交通安全评估。

### 4.3 Research Areas — 首页四张卡片简述

- **多模态交通感知与传感器融合：** 面向 LiDAR、视觉、雷达与空中观测的目标感知、跨视角融合和质量评估。
- **交通世界模型与场景智能：** 面向动态交通场景的时空表示、多主体交互、语义理解与未来预测。
- **交通安全与风险智能分析：** 研究不确定条件下的交通冲突、弱势道路使用者安全与风险可靠预测。
- **智能交通系统与基础设施优化：** 研究数据驱动的交通运行、资产管理和系统优化，并关注空地协同等新场景。

### 4.4 PI / People

**蒙思源（Siyuan “Max” Meng）, Ph.D.**  
拟入职：武汉科技大学汽车与交通工程学院（计划于 2026 年 11 月入职；网站上线时需更新为核实后的正式身份）。

蒙思源于 2026 年获得美国马萨诸塞大学阿默斯特分校土木工程博士学位（交通工程方向）。博士研究围绕质量感知的多路侧 LiDAR 交通感知与安全分析，涵盖交通背景建模、三维目标检测、多目标跟踪及交通冲突分析。其研究兴趣正在向可信多模态感知、交通世界模型、交通安全与交通系统优化等方向拓展。

**个人主页：** <https://siyuanmengmax.github.io/>

> 入职前建议页面仅采用「研究组发起人 / Founding PI（拟入职）」或待确认措辞；如学校身份及头衔已正式生效，按学校正式任职信息更新。不要添加未确认的英文职称或校方授权标识。

### 4.5 Join Us

**欢迎对智能交通与人工智能交叉研究感兴趣的同学交流！**

我们关注多模态交通感知、交通场景与世界模型、交通安全分析及交通系统优化等方向。欢迎交通运输工程、计算机科学、人工智能、自动化、车辆工程、土木工程、数学及相关专业背景的同学交流科研想法。我们尤其重视主动探索问题的能力、编程与数学基础、学术诚信，以及对真实交通问题的兴趣。

**研究交流与正式招生应予以区分。** 学生招生资格、招生专业、名额和具体申请程序，以武汉科技大学相关政策及未来正式公告为准。目前网站可邀请有兴趣的同学通过个人主页联系交流，不应写“正在招收硕士/博士若干名”。

### 4.6 Collaboration

我们欢迎围绕交通多模态感知、轨迹分析、弱势道路使用者安全、交通场景建模及智能交通系统优化等主题开展学术讨论与科研合作。具体合作方向以双方研究兴趣及数据/资源条件为基础共同确定。

---

## 5. Website-ready English Copy

### 5.1 Home — Hero

**Transportation Perception & World Modeling Lab**  
**TPWM Lab**  
**Perceive. Understand. Predict. Safeguard.**

We study multimodal transportation perception, dynamic scene understanding, traffic safety, and intelligent decision-making. Our research aims to develop reliable representations and predictions of complex traffic environments under heterogeneous, incomplete, and uncertain observations.

### 5.2 About / Mission

Intelligent transportation systems require more than accurate object detection and tracking. They must understand interactions among road users, anticipate how traffic scenes may evolve, and assess the reliability of their predictions. TPWM Lab explores transportation-centered approaches that connect multimodal sensing, physical dynamics, scene semantics, uncertainty, and safety assessment.

### 5.3 Research Areas — Short Summaries

- **Multimodal Perception & Sensor Fusion:** Detection, tracking, cross-view fusion, and quality assessment using LiDAR, cameras, radar, and aerial sensing.
- **Transportation World Models & Scene Intelligence:** Spatiotemporal scene representation, multi-agent interaction, semantics-aware understanding, and future-state prediction.
- **Traffic Safety & Risk Intelligence:** Traffic conflicts, vulnerable road user safety, uncertainty propagation, and reliable risk prediction.
- **Intelligent Mobility & Infrastructure Optimization:** Data-driven transportation management, infrastructure asset management, system optimization, and emerging ground–air mobility applications.

### 5.4 People — Founding PI

**Siyuan (Max) Meng, Ph.D.**

Siyuan (Max) Meng earned his Ph.D. in Civil Engineering (Transportation Engineering) from the University of Massachusetts Amherst in 2026. His doctoral research developed quality-aware approaches for roadside multi-LiDAR traffic perception and safety analysis, spanning background modeling, object detection, tracking, and traffic conflict analysis. His broader research interests include trustworthy multimodal perception, transportation world models, traffic safety, and transportation systems optimization.

**Affiliation note:** Expected to join the School of Automobile and Traffic Engineering, Wuhan University of Science and Technology, in November 2026. Confirm the official title and affiliation before publication.

**Personal Website:** <https://siyuanmengmax.github.io/>

### 5.5 Prospective Students & Collaborators

We welcome research conversations with students interested in the intersection of transportation engineering and artificial intelligence. Relevant backgrounds include transportation engineering, computer science, AI, automation, vehicle engineering, civil engineering, mathematics, and related fields. We value curiosity, sound quantitative and programming foundations, research integrity, and motivation to tackle real transportation challenges.

**Prospective students:** Research inquiries are welcome. Formal student recruitment, degree programs, eligibility, and available positions are subject to university policies and future official announcements. No current opening or guaranteed supervision is implied.

**Collaborators:** We are interested in discussing collaborative research on multimodal sensing, road-user interactions, traffic safety, transportation world modeling, and intelligent transportation systems.

---

## 6. Selected Research / Publications（PI 已有成果，不等于 Lab 成果）

首版可以采用 **“Selected Publications of the Founding PI” / “研究组发起人代表性成果”**，而不是虚构为成立后的实验室成果。请优先从个人主页读取最新、准确的 DOI、作者、期刊与发表状态：<https://siyuanmengmax.github.io/>。

建议首页精选：

1. **MulDet3D: Multi-Objective Optimization-Based Unsupervised Object Detection for Multiple Roadside LiDARs** — *Journal of Transportation Engineering, Part A: Systems* (2026). DOI: <https://doi.org/10.1061/JTEPBS.TEENG-9741>.
2. **FRGB3D: Fast Reliability-Weighted Gaussian Background Modeling for Roadside LiDAR Traffic Monitoring** — *Journal of Computing in Civil Engineering* (2026). DOI: <https://doi.org/10.1061/JCCEE5/CPENG-7710>. 请再次核实最终卷期页及线上出版状态。
3. **A Multi-Objective Optimization Method for Integrated Road Asset Management Considering Traffic Dynamics and Environmental Impacts** — *Transportation Research Record* (2026). DOI: <https://doi.org/10.1177/03611981261441294>.
4. **Infrastructure-Centric World Models: Bridging Temporal Depth and Spatial Breadth for Roadside Perception** — arXiv preprint (2026). <https://arxiv.org/abs/2604.17651>. **必须标注 Preprint / Vision，不能表述为已验证的完整世界模型成果。**

可选补充：早期 *Journal of Infrastructure Systems* 的道路资产管理优化研究，以保持研究方向 4 的学术连续性。

**图片规则：** 使用论文作者可授权提供的架构图、示例图或截取自公开 PDF 的插图时，核对图像再利用权限；未核实权限时使用文献链接 + 中性自制示意图，不要生成模拟结果当作真实论文 Figure。

---

## 7. 招生定位与潜在学生画像（网站设计依据）

**核心宣传语：** 研究问题由交通科学驱动，研究方法融合机器学习、计算机视觉、多模态感知、概率建模与优化，不以单一传感器限制课题。

**学生可能的成长路径：**

- **AI / CS 背景：** 从检测、跟踪、跨视角感知、场景图与轨迹预测入手，逐步进入交通世界模型与可靠性研究。
- **交通工程背景：** 从轨迹、交通流、冲突指标、交通安全机理入手，逐步学习数据驱动的建模和预测方法。
- **自动化 / 车辆 / 数学背景：** 从状态估计、动力学、多主体预测、不确定性传播与优化入手，衔接物理约束场景理解。

**首版网站不应出现：** “招生已开放”“招收 N 名研究生”“提供全奖学金”“已有博士生/硕士生团队”等未经明确确认的信息。

**实际发布前要确认：** 导师资格、招生专业/项目类别、名额与时点、正式联系方式、学校关于研究组网站的使用规定。

---

## 8. 研究方向关联的视觉概念

建议用一张**非实验结果**的概念性图示贯穿页面：

```text
Heterogeneous Sensing
LiDAR · Camera · Radar · UAV · V2X
               ↓
Quality-Aware Perception & Representation
Detection · Tracking · Fusion · Uncertainty
               ↓
Transportation World Modeling
Spatiotemporal State · Interaction · Physics · Semantics
               ↓
Safety Intelligence & System Decisions
Risk Prediction · Conflict Analysis · Optimization
```

这是一张**研究路线概念图**，不是已建成系统架构。视觉上建议使用现代、清晰的线条、节点、少量柔和色块，不要画成满屏复杂箭头的基金申请书技术路线。

可在 Research 页面用专门的小标签说明：`Established Foundations`（路侧多 LiDAR 感知、交通安全分析）与 `Emerging Research`（语义世界模型、空地协同、闭环决策），提升可信度。

---

## 9. 视觉风格与交互要求

**关键词：** Academic · Minimal · Modern · Credible · Research-first · Calm。保留现有个人主页简洁学术网站的气质，但使 Lab 识别度稍强。

- **配色建议：** 深海军蓝 / slate 作为主要文字与结构色；克制的 teal/cyan 作为强调色；浅灰与白色提供留白。可参考 `#172B42`、`#0D8C8D`、`#F6F8FA`（均为建议，不是强制设计令牌）。
- **字体：** 支持简体中文与英文的开源或系统字体，良好中文排版；不要依赖字体文件上传。
- **版式：** 首页首屏不过度占高；中等内容宽度；卡片间距充足；不使用冗长轮播或自动播放视频。
- **图形：** 概念性 BEV 轨迹、点云/道路几何、场景图、时空交互图。优先真实研究图；不可得到时做原创 SVG 抽象图。
- **动效：** 轻微 hover 与渐入即可，并尊重 reduced-motion 设置。
- **可访问性：** 语义化 HTML、合理标题结构、键盘导航、图片替代文字、足够对比度。
- **响应式：** 手机端菜单可用，研究卡片自然叠排，双语切换不破坏布局。
- **交互：** 研究卡片可进入详细介绍；论文 DOI / arXiv 外链可用；人物卡片链接至 PI 主页；Join CTA 指向真实联系渠道而非无效表单。

---

## 10. 实施建议（给 Work / 开发 Agent）

- **静态网站优先：** Astro、Next.js 静态导出或其他易部署到 GitHub Pages 的静态技术栈均可；如果没有明确需求，选择维护成本更低的一种并说明理由。
- **GitHub Pages：** 可以新建独立仓库部署，也可以作为个人 Pages 的 project site；不要假定最终域名或擅自覆盖 <https://siyuanmengmax.github.io/>。如使用 project site，正确配置 `base` 路径和资产相对路径。
- **双语：** 推荐显式 `/en/` 与 `/zh/` 两个语言路由（或等效结构），每个页面均能切换语言，且 URL 可分享；配置 `lang`、页面标题及 SEO 元数据。
- **内容管理：** 研究方向、人员、论文、新闻、招生信息放在独立 Markdown/JSON/YAML 数据文件；未来无需改组件即可添加记录。
- **禁止伪造：** 不伪造实验指标、科研项目、团队成员、研究经费、学校授权身份、招生名额。
- **预览测试：** 检查双语链接、按钮跳转、移动端溢出、浏览器刷新、外链、无图片回退、首页加载速度。
- **发布步骤：** 优先交付可运行源代码 + 预览；发布前由 PI 确认仓库、身份与招生文案。

### 推荐目录（可调整）

```text
src/
  pages/
    en/
    zh/
  components/
    Header, Hero, ResearchCards, PublicationList, People, Join, Footer
  content/
    research.en.md / research.zh.md
    people.json
    publications.json
    news.json
public/
  images/    # 真实授权图、概念示意图和已确认头像
README.md
```

---

## 11. 信息核查与禁止自动补全清单

| 信息 | 现阶段处理 | 上线前行动 |
| --- | --- | --- |
| 研究组/实验室正式机构名称 | 用“研究组”；英文 TPWM Lab 作为工作品牌 | 若校方对命名有要求，按规定调整 |
| 蒙思源的正式职称 | 暂不硬编码未核实英文职称 | 根据入职材料更新 |
| 2026 年 11 月入职 | 作为计划，不作已发生事实 | 入职后更新 |
| 学生招生资格与名额 | 不承诺，只欢迎学术交流 | 取得确认后独立发布招生机会 |
| Dr. Christofa / NEUTC 无人机数据 | 仅是潜在可用的未来研究资源 | 公开后核实数据许可与实际可用范围；未授权不署名合作项目 |
| 2027 国自然青基 | 研究构想阶段 | 未获资助前不得写成 funded project |
| VLM、VLA、世界模型系统 | 未来研究兴趣与探索 | 不写成已经部署完成的系统 |
| Lab People | 仅有发起人/PI | 学生加入后征得同意再展示 |
| Contact Email | 不自动采用可能变化的旧邮箱 | 由 PI 最终确认对外邮箱；在此之前链接个人主页 |
| 机构 Logo 与摄影图片 | 不默认有使用授权 | 按学校规定与图片版权核实 |

---

## 12. 真实外部参考（2026-10-10 已检查）

- 个人主页（PI 学术资料与论文链接的优先公开来源）：<https://siyuanmengmax.github.io/>
- 武汉科技大学汽车与交通工程学院官网：<https://qcyjt.wust.edu.cn/>
- 学院英文页（英文院名核对）：<https://qcyjt.wust.edu.cn/English.htm>
- I-WM 愿景预印本：<https://arxiv.org/abs/2604.17651>

**注：** 官网和个人网站公开信息可能随时间更新。Work 在实际生成和发布前应重新核实动态字段，若与本文有冲突，应显式列出差异并请 PI 决策。Lab 的新方向与建议文案属于我们共同讨论的**研究规划**，不是学校或基金机构发布的事实。

---

## 13. MVP 完成标准（Acceptance Criteria）

- [ ] TPWM Lab 名称、定位与四个方向在网站上呈现清楚，并突出前三项核心方向。
- [ ] 首页简洁、视觉统一，并与 <https://siyuanmengmax.github.io/> 风格协调。
- [ ] 中文与英文内容齐全，语言切换、深链接与移动端导航可用。
- [ ] People 仅出现真实、确认的 PI 信息，不含假成员。
- [ ] Publications 标识为 PI 代表性成果，论文 DOI/arXiv 可点击。
- [ ] Join Us 吸引相关背景学生，但**不虚构招生资格和开放岗位**。
- [ ] 世界模型、空地协同等明确属于 emerging / exploratory directions。
- [ ] 页面可在 GitHub Pages 静态部署，提供源代码与维护说明。
- [ ] 外链、SEO、图片替代文本、键盘操作与移动版基本检查通过。
- [ ] 公布前有一份尚待 PI 确认的信息清单。

---

## 14. 未来版本路线（不属于 MVP 必做）

**V1.1：** 补充经授权的论文配图、研究组发起人头像、真实研究案例；正式更新入职职称与学校联系方式。  
**V1.2：** 如获得招生资格，独立发布 Research Opportunities、学生项目建议和明确申请流程。  
**V2.0：** 随着真实成员和项目增加，再扩展 People、Projects、Datasets/Code、News、Teaching 与 GitHub 代码链接。  
**长期：** 构建面向空地协同、多模态世界模型及交通安全研究的完整研究组门户；公开内容始终以可验证事实为准。

---

## 15. 设计底线与一句话决策

> **TPWM Lab 不是“路侧 LiDAR 实验室”的改名版本，而是以质量感知和可信交通智能为学术基础、面向多模态感知、世界建模、交通安全与系统优化的长期研究平台。**

**先把它做成一个可信、清爽、有科研特色、可以持续更新的招生与合作门户；不为了显得成熟而制造不存在的实验室规模。**
