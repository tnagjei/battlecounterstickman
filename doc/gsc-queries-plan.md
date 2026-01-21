# GSC 查询词内页扩展计划
> 基于近两天 GSC 查询截图提出的初版计划；由于未拿到原始查询列表，以下部分标注为 [Unverified]/[Inference]。

## 目标
- 为 GSC 查询词逐一创建可索引内页，提高长尾覆盖与主题权重。
- 建立 EN/FI/SV 多语言内页体系，统一结构与内链策略。
- 保证移动端体验与 SEO 基础指标（H1/H2/Canonical/Meta/内链结构）。

## 约束
- 遵循 `AGENTS.md`：最小 diff、可读性优先、避免过度设计。
- SEO 规范：单页严格 600-800 词、1 个 H1 + 多个 H2、Canonical 必须存在、Title/Meta/URL 含关键词。
- 严格每个词一个页；已存在的 EN 内页跳过，仅新增缺失页。
- 建立多语言内页（/fi/keywords/ 与 /sv/keywords/）。
- 目录规范：`/doc` 目录变更需更新 `doc/README.md`。

## 现状
- 已有关键词内页：`public/keywords/*.html`（约 50 页）。
- 关键词数据源：`src/data/seo-pages.ts`（用于生成静态内页的基础数据）。
- 站点索引：`public/keywords/index.html`；站点地图：`public/sitemap.xml`。

## 已确认事项
- GSC 查询词来自截图，需要解析为文本清单并落盘。
- 严格每个词一个页；已存在 EN 内页则忽略，只新增缺失页。
- 建立多语言内页（EN/FI/SV）。
- 每页严格 600-800 词。

## 假设与缺口
- 需要原始截图文件以进行 OCR；若 OCR 不可用，则改为人工录入查询词。 [Unverified]
- 多语言页面将基于 EN 内容翻译生成，并保持同等字数范围。 [Inference]

## 方案对比
### 方案 A：纯手工新增静态页
- 做法：在 `public/keywords/` 逐个新增 HTML。
- 优点：最小改动，部署路径最短。
- 风险：难维护、易出错、批量更新困难。

### 方案 B：扩展 `src/data/seo-pages.ts` + 构建期生成
- 做法：将 GSC 词扩展为数据表，构建时生成 HTML。
- 优点：结构化、可复用、便于迭代。
- 风险：需要引入生成脚本与构建流程改动。

### 方案 C（推荐）：数据驱动 + 一次性静态导出
- 做法：用脚本读取 GSC CSV -> 标准化/分组 -> 生成 HTML 到 `public/keywords/`，不改运行时。
- 优点：保留当前静态结构，批量产出且可复用模板，改动可控。
- 风险：需要一次性脚本与模板维护，但不影响线上运行。

## 执行计划
### Phase 1：输入与清洗
- 接收 GSC 截图原图并进行 OCR 解析，输出 `doc/gsc-queries.txt`（一行一个查询词）。 [Unverified]
- 人工复核 OCR 结果：去重、去空格、统一大小写、移除明显噪声词。
- 生成 slug：统一 kebab-case；对已存在 EN 内页的 slug 标记为“跳过新增”。 
- 输出清单：`query -> slug -> 是否已存在 -> 主题分类`。

### Phase 2：模板与内容策略
- 复用现有关键词页模板（头部 meta / JSON-LD / CTA / Related Topics / Popular Guides）。
- 每页严格 600-800 词，包含：What/Why/How/FAQ 等基础段落。
- 多语言策略：
  - EN 作为主语言内容基底；FI/SV 使用翻译版正文与元信息。
  - 各语言页保持同结构与字数范围，并加入 hreflang 互链。 [Inference]
- 内链策略：
  - 正文中嵌入 2-4 个指向主词页/功能页链接。
  - Related Topics 按聚类输出（同主题 4-6 条）。
  - Popular Guides 使用固定高价值入口，避免自链接。

### Phase 3：生成与落盘
- 对缺失 EN 词条生成 `public/keywords/<slug>.html`。
- 为所有词条生成 `/fi/keywords/<slug>.html` 与 `/sv/keywords/<slug>.html`。 [Inference]
- 更新 `public/keywords/index.html` 分组列表（新增词条）。
- 更新 `public/sitemap.xml`（新增 URL + lastmod + priority，含多语言目录）。

### Phase 4：校验与回归
- 链接校验：无 404 / 无自链接 / 内链覆盖完整。
- SEO 校验：每页 H1/H2/Canonical/Meta/Title/URL 完整。
- 质量抽检：抽样 10-20 页检查内容唯一性与可读性。

## 验证方式
- 本地静态检查：
  - `rg --files-without-match "<h1" public/keywords/*.html`（确保 H1）
  - `rg --files-without-match "canonical" public/keywords/*.html`（确保 canonical）
  - `rg --files-without-match "hreflang" public/fi/keywords/*.html public/sv/keywords/*.html`（多语言互链）
- 抽样浏览 5-10 页：检查布局、内链、CTA、移动端可读性。

## 回滚策略
- 删除新增的 `public/keywords/*.html` 与 `public/fi/keywords/*.html`、`public/sv/keywords/*.html`。
- 回退 `public/keywords/index.html` 与 `public/sitemap.xml` 到前一版。

## 依赖/待提供
- GSC 截图原图文件（PNG/JPG），用于 OCR 解析；否则需要你提供词表文本。 [Unverified]
