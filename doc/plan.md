# mywintercar.info 缺失清单与实施计划

## 范围与假设
- [Unverified] 你提供的流量信息表明芬兰用户占比最高，因此内容应考虑芬兰检索与语言体验。
- [Inference] 当前为 Vite + React 单页站点，无后端、无 CMS、无登录/数据库。
- [Inference] 目标为“游戏攻略/维基入口站”，以 mywintercar.info 为唯一权威域名。

## 目标
- 完整落地页结构（what/why/how/features/testimonials/faq/pricing + footer），内容可扫读、可索引。
- SEO 基础完善：Title/Description/Canonical/OG/Twitter/结构化数据/robots/sitemap/llms。
- 为 YouTube 博主视频模块预留数据结构与 SEO 标记，便于后续扩展。

## 约束
- 遵循 AGENTS.md 的文档/注释与 SEO 规范（600–800 词、1 个 H1、多 H2）。
- 最小依赖，不引入新库除非必要。
- 任何对外数据与宣传需可验证或标注 [Unverified]。

## 现状
- 单页结构：Navbar/Hero/QuickNav/Updates/页脚。
- 多处链接占位符 `#`，未建立真实页面或锚点。
- `index.html` 仅有基础 meta；`public/robots.txt`、`public/sitemap.xml`、`public/llms.txt` 不存在。
- `components/Updates.tsx` 里出现 mywintercar.com，与实际域名不符。
- `index.html` 引用了 `/index.css`，但文件不存在。

## 缺失清单（按优先级）
1. SEO 与站点基础
   - Title/Meta Description/Canonical/OG/Twitter/结构化数据缺失。
   - `robots.txt`、`sitemap.xml`、`llms.txt` 未提供。
   - 未设置 `hreflang` 与语言策略（若要覆盖芬兰用户）。
2. 内容与信息架构
   - 缺 what/why/how it works/features/testimonials/faq/pricing 等核心段落。
   - 站点页面缺失：About/Help/Privacy/Terms/Contact/Blog。
   - 文案缺少芬兰关键词与本地化表达（若定位芬兰用户）。
3. 导航与转化路径
   - 多处链接为占位 `#`，无法引导用户到对应内容。
   - 搜索框仅 UI，无可用路径或降级策略。
4. 视频模块（YouTube）
   - 无视频数据模型、无视频列表区块、无 VideoObject 结构化数据。
   - 未考虑 `youtube-nocookie.com` 与懒加载的隐私/性能要求。
5. 工程与规范
   - TS/TSX 文件未按 AGENTS 添加文件头注释。
   - `components/` 目录缺少 README。
   - `README.md` 与项目实际不一致，`metadata.json` 仍标注 clone。

## 方案（2–3 个）
A. 单页静态主站 + 静态信息页（推荐）
- 优点：最小改动、SEO 可控、无新增依赖。
- 风险：内容偏长，需要合理分区与锚点。

B. SPA 多页面（React Router）
- 优点：结构清晰、后续扩展方便。
- 风险：需新增依赖，SEO 需更多处理。

C. 主站 + 独立 Blog（Astro Paper）
- 优点：博客 SEO 最佳，符合 AGENTS 建议。
- 风险：工程复杂度高、需多项目协作。

## 执行计划（Plan → Code）
### Phase 1：基础与 SEO 落地
- 补全 `index.html` 元信息：Title/Description/Canonical/OG/Twitter。
- 增加结构化数据：WebSite + Organization/Person（视定位决定）。
- 新增 `public/robots.txt`、`public/sitemap.xml`、`public/llms.txt`。
- 修复 `/index.css` 缺失（补文件或移除引用）。

### Phase 2：内容结构与导航
- 新增落地页 Section：what/why/how/features/testimonials/faq/pricing。
- 将 Navbar/QuickNav/CTA 指向真实锚点或页面。
- 增加 About/Help/Privacy/Terms/Contact 页面或同页分区。

### Phase 3：YouTube 视频模块
- 建立 `VideoItem` 数据模型（标题、频道、语言、发布日期、链接、封面）。
- 新增视频区块组件，支持懒加载与 `youtube-nocookie.com`。
- 添加 `VideoObject` 结构化数据，提高视频可发现性。

### Phase 4：芬兰用户策略（可选）
- 若定位芬兰市场，提供完整的 fi 文案并设置 `hreflang`。
- 关键词与语气面向芬兰用户检索习惯（需进一步确认）。

### Phase 5：工程规范与文档
- 所有 TS/TSX 文件补文件头注释。
- 新增 `components/README.md` 并更新根 `README.md`。
- 更新 `metadata.json` 的 name/description 以反映真实项目。

## 验证清单
- `npm run dev` 可正常启动并渲染所有 Section。
- `npm run build` 通过，`npm run preview` 可访问。
- 访问 `/robots.txt`、`/sitemap.xml`、`/llms.txt` 可读。
- Title/Description/Canonical/OG/Twitter/JSON-LD 正常输出。
- 视频模块加载正常，链接指向 YouTube 且无强制追踪。

## 回滚方案
- 以最小 diff 逐步引入，若异常可回退到上一个阶段的提交。
- 视频模块可独立移除，不影响主站内容。

## 多语言追加计划（芬兰/瑞典）
### 目标
- 覆盖芬兰与瑞典搜索用户，新增 `/fi/`、`/sv/`，英文仍为默认入口。
- 每语言独立 Title/Description/Canonical/OG/Twitter/JSON-LD，避免混用。
- 保持内容结构一致，避免 SEO 判定为重复但低质量页面。

### 范围与约束
- 仅在翻译完整可用时上线对应语言，避免半成品影响用户与索引。
- 不新增依赖，优先采用 Vite 多入口/多页面构建。
- 游戏专有名词保持一致（如 Corris Rivett），必要时附短解释。
- [Unverified] 关键词与语气需按芬兰/瑞典用户检索习惯确认后再定稿。

### 路由与页面结构
- `/`（en）、`/fi/`、`/sv/` 三套入口；不做自动跳转，使用手动切换。
- 结构与 Section ID 保持一致，便于复用组件与锚点导航。

### 内容准备
- 建立语言内容字典（按页面区块拆分），覆盖 Hero/Features/FAQ/About/Legal 等。
- 统一术语表，避免同一概念在不同段落翻译不一致。
- 若需本地化示例（如芬兰冬季环境），需注明为示例而非官方设定。

### SEO 与结构化数据
- `hreflang`：`en`、`fi`、`sv` + `x-default` 指向英文主页。
- 每语言独立 meta 与 JSON-LD，`inLanguage` 与 Canonical 匹配。
- 更新 `sitemap.xml` 与 `llms.txt`，加入三语言路径与更新时间。
- Open Graph/Twitter 使用各语言文案与站点名变体。

### 语言切换与导航
- Navbar/FloatingMenu 增加语言入口（EN/FI/SV），并提供可访问性标签。
- 切换后保持在同一 Section（锚点一致）。

### YouTube 视频模块（多语言）
- 视频数据按语言分组，标题/简介与标签本地化。
- 使用 `youtube-nocookie.com` 与懒加载，降低隐私与性能负担。
- 为每语言输出 `VideoObject`，确保搜索可发现性。

### 验证清单
- `/`、`/fi/`、`/sv/` 可访问且内容完整。
- `hreflang` 互指正确，Canonical 指向对应语言版本。
- `sitemap.xml`/`llms.txt` 覆盖三语言入口。
- 视频模块在三语言下均能加载并生成正确 JSON-LD。

### 回滚
- 关闭 `/fi/`、`/sv/` 入口与 `hreflang`，保留英文主站。
- 多语言内容文件保留，等待后续重新启用。

## 移动端优化计划（已确认）
### 已确认输入
- Lighthouse（Mobile）目标分数 >= 95。
- SEO 选择最优方案：多路径静态页面（/、/fi/、/sv/）+ 每语独立 meta/hreflang。
- 搜索改为按钮；Navbar 与 FloatingMenu 以手机端浏览优先为原则由实施时定稿。
- 允许压缩/替换首屏图、减少字体字重、降低阴影/blur。
- 设备优先：iOS Safari、Android Chrome 作为最低支持范围（项目约定）。

### 计划
#### Phase 1：指标与基线
- 以 Lighthouse Mobile 95 为验收门槛，记录当前分数与主要瓶颈。
- 明确首屏关键资源清单并限定尺寸与数量。

#### Phase 2：导航与布局
- Navbar：移动端保留 Logo + 搜索按钮 + 语言入口，导航项折叠为菜单或次级入口。
- 搜索：改为按钮唤起的输入层/抽屉，避免占据顶部空间。
- FloatingMenu：移动端隐藏或改为底部轻量入口，避免遮挡内容。
- Section 排版：Hero 文案更短，CTA 置于首屏；卡片单列、间距更紧凑。

#### Phase 3：性能
- 图片：提供移动版小尺寸首屏图，非首屏图懒加载。
- 字体：减少字重，必要时子集化；确保 `font-display: swap`。
- 动效：降低 `backdrop-blur` 与阴影开销，减少同时进行的动画。
- 视频：移动端默认不加载 iframe，使用占位图点击后加载（youtube-nocookie）。

#### Phase 4：可访问性与可用性
- 触控目标 >= 44px；按钮与链接间距合理。
- 文字字号与行高适配小屏，避免过密。
- 视觉对比度与焦点样式保持一致。

#### Phase 5：验证与回滚
- iOS Safari 与 Android Chrome 上实测首屏与交互。
- Lighthouse Mobile >=95；如不达标，逐项回退视觉效果并记录原因。

### 回滚
- 保留桌面样式，移动端增强用条件样式控制；异常时移除移动端增强。

## 关键词内页计划（基于谷歌趋势关联词）
### 目标
- 为 `doc/谷歌趋势关联词.csv` 中每个关联词建立可索引内页。
- 每页满足 SEO 结构：1 个 H1、多 H2、约 600–800 词、含 Canonical。
- 形成可扩展的关键词内页体系，并纳入 sitemap/llms。

### 约束
- 不新增依赖，保持当前技术栈。
- 按 AGENTS 规范补齐目录 README 与文件头注释（TS/TSX/JS/JSX）。
- 内容真实可验证；无法验证的内容需标注 [Unverified]。
- 关键词包含敏感意图（如 free/cheat），内容必须合规且不引导违规。

### 现状
- 关键词来源：`doc/谷歌趋势关联词.csv`，含 TOP 与 RISING。
- 存在重复与变体：如 `my winter car mod/mods`、`problem my winter car` 复现、`mwc/msceditor`。
- 当前站点为单页结构，无关键词内页体系。

### 方案（2–3 个）
A. Vite 多入口静态内页（推荐）
- 每个关键词生成独立路径，SEO 最稳定。
- 构建产物多，但可控。

B. 数据驱动模板 + 批量生成静态页
- 维护成本更低；仍保持多页 SEO。

C. 单页前端路由渲染
- 开发快但 SEO 风险高，不建议作为主方案。

### 执行计划（Plan → Code）
#### Phase 1：关键词整理与规范化
- 解析 CSV 并去重，建立标准化列表（原词 + slug + 类别）。
- 合并同义/变体，设定主词与别名策略。
- 标注敏感词类别（free/cheat/pin 等）用于合规处理。

#### Phase 2：信息架构与目录规划
- 约定内页路径规则（建议 `/keywords/<slug>`）。
- 新增目录 README，列出内页文件清单。
- 定义统一页面结构（H1、Overview、How it works、FAQ、Related、CTA）。

#### Phase 3：内容模板与分类写法
- 建立 5–7 类模板：Mods/Tools、Jobs/Economy、Issues/How‑to、Vehicles/Items、Characters/Locations、Community/Meta、Release/Availability。
- 统一免责声明与来源说明，避免夸张与无法核实的断言。

#### Phase 4：内页内容生产
- 每个关键词独立 600–800 词正文，保证与主词强相关。
- 同义变体处理：
  - 内容高度重叠：主词页 + 变体页 Canonical 指向主词。
  - 必须“每词一页且独立内容”时，写差异化段落并避免重复。

#### Phase 5：SEO 与内链
- 每页独立 Title/Description/Canonical/OG/Twitter/JSON‑LD。
- 页面内加入“相关关键词”区块形成内链网络。
- 更新 `public/sitemap.xml` 与 `public/llms.txt` 覆盖所有内页路径。

#### Phase 6：质量与风险控制
- 避免 doorway pages：确保每页有实质内容与独特价值。
- 对 free/cheat 类页面强调合法途径与风险提示。
- 对第三方平台词条（nexus/reddit）标注非官方关系。

### 验证清单
- 每个关键词页面可访问且内容完整。
- Title/H1/Meta/Canonical/JSON‑LD 与关键词匹配。
- sitemap/llms 含全量内页路径。
- 内链可从主站或索引页进入。

### 回滚方案
- 如 SEO 风险或内容不足，先下线变体页，仅保留主词页。
- 关键词数据文件保留，待补足内容后再上线。

### 默认假设
- [Inference] 采用“主词页 + 变体 canonical”的策略处理重复词。
- [Inference] 内页先用英文，后续多语言方案确定后再翻译 fi/sv。
