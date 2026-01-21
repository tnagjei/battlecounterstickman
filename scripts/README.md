# scripts
- 用途：批量处理关键词页内容与结构化数据
- 关键入口：`node scripts/<script>.cjs` / `node scripts/<script>.js`
- 边界/依赖：仅处理 `public/keywords/` 静态页面，部分脚本依赖 `cheerio`
> 一旦本目录内容变化，请更新本文件

## Files
- add-breadcrumb-schema.cjs：为关键词页注入 BreadcrumbList JSON-LD
- add-faq-schema.cjs：为包含 FAQ 的页面注入 FAQPage JSON-LD
- add-howto-schema.cjs：为教程页面注入 HowTo JSON-LD
- add-itemlist-schema.cjs：为 /keywords/index.html 目录页注入 ItemList JSON-LD
- add-hreflang-to-english.js：为英文关键词页补充 hreflang
- add-og-jsonld.cjs：补齐 OG 与基础 JSON-LD 元数据
- expand-batch2.cjs：批量扩展建车/零件等页面正文内容
- expand-batch2-more.cjs：继续扩展 Batch2 页面到 600-800 词
- fix-breadcrumb-schema.cjs：修复面包屑最后一项缺失 URL
- generate-i18n-pages.js：批量生成多语言关键词页面
- update-internal-links.cjs：增强 Related Topics 与 Popular Guides 内链
- update-keywords.js：统一关键词页导航/锚点/上下篇
- update-remaining-links.cjs：补齐旧结构页面的内链与 Popular Guides
