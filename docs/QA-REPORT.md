# TPWM Lab 浏览器验收记录

日期：2026-10-11（Asia/Shanghai）。环境：macOS、Node.js 25.4.0、Chrome 154.0.8037.98；使用独立临时浏览器配置，通过 Chrome DevTools Protocol 操作真实浏览器。没有安装网站依赖或引入运行时框架。

## 已验证

- `npm run build` 与 `npm run check` 通过。检查覆盖 52 处页面引用、双语路由、唯一 ID、标题结构、源文件和离线预览内嵌脚本语法、真实人员数量、论文状态及资源相对路径。
- 共 56 项浏览器断言通过，无浏览器 JavaScript 异常。
- 中英文页面分别在 320、390、768、1440px 宽度下无水平溢出；头像资源可加载。已查看桌面首屏及手机整页截图。
- 期刊筛选显示 3 项，预印本筛选显示 1 项；支持标题/作者/期刊/年份及中英文主题检索，多词检索与分类可组合；零匹配提示、重置按钮、结果数量和重置后焦点均正常。
- 原生研究方向展开支持 Enter；移动菜单支持打开、导航后关闭，以及 Escape 关闭后恢复按钮焦点。滚动后导航当前区块提示正常。
- 研究方向深链接会展开对应内容；语言切换保留 fragment；损坏的 URL 编码不会中断页面脚本。
- 概念动画可以暂停/恢复；模拟 `prefers-reduced-motion: reduce` 后默认暂停。
- 直接通过 `file://` 打开单文件预览，可以搜索、使用菜单、展开深链接并连续切换语言。
- 禁用 JavaScript 后，两种语言的正文、全部论文与移动导航可见，依赖 JavaScript 的检索控件隐藏。
- 根路径跳转默认英文页并保留 fragment。
- 本地服务器页面与资源返回 200，目录地址补充斜线；缺失地址返回双语 404 页面；HEAD、非 GET 方法及无效编码 URL 的响应已验证。
- 使用临时 `SITE_URL=https://example.org/tpwm-lab` 构建，确认 canonical、hreflang、Open Graph URL 和 sitemap 支持仓库子路径；测试后已恢复无目标域名的本地构建。

截图：`preview/screenshots/en-desktop.png`、`zh-desktop.png`、`en-mobile.png`、`zh-mobile.png`。截图和生成页面由 `.gitignore` 排除，内容源文件正常纳入版本管理。

## 验证范围

本次是 Chrome 基本功能和响应式验收，并非完整可访问性认证。Safari、Firefox、真机触摸、屏幕阅读器、打印和性能评分尚未专项测试。GitHub Actions 首次构建与部署已成功，线上中英文路由、静态资源、canonical 与 sitemap 均已检查，详见 `DEPLOYMENT.md`。外部论文链接沿用已核对的个人主页记录，未逐一验证出版社网站的访问状态。

任职、机构命名、招生及联系方式等内容确认项继续保留在 `REVIEW-CHECKLIST.md`。

## 中文字体对齐（2026-10-11）

中文字体栈与个人主页 `assets/css/chinese-typography.css` 一致。Chrome 通过字体检查确认主标题实际渲染为 `PingFangSC-Semibold`；320/390/768/1440px 布局无水平溢出，320/390px 下导航保持一行、首屏标题保持两行。离线预览切换中英文后应用对应字体；英文主标题仍为 Georgia。构建与既有静态检查通过。
