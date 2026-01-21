# Codex SEO 审查问题修复计划

> 创建日期: 2026-01-02
> 更新日期: 2026-01-02 (v10 - 最终版)
> 状态: **已确认，待执行**

---

## 翻译范围

| 范围 | 状态 |
|------|------|
| React 首页组件 (14个) | ✅ 已完成 |
| 关键词索引页 (3个) | 🔧 待翻译 |
| 关键词内页 (~196个) | ⏸️ 暂不处理，接受 lang 信号冲突风险 |

---

## 步骤 0: Vercel 配置 🔧

更新 `vercel.json` (合并现有 headers):
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    { "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "index, follow" }] }
  ],
  "redirects": [
    { "source": "/keywords/:path*.html", "destination": "/keywords/:path*", "permanent": true },
    { "source": "/:lang(fi|sv)/keywords/:path*.html", "destination": "/:lang/keywords/:path*", "permanent": true },
    { "source": "/keywords/index.html", "destination": "/keywords", "permanent": true },
    { "source": "/fi/keywords/index.html", "destination": "/fi/keywords", "permanent": true },
    { "source": "/sv/keywords/index.html", "destination": "/sv/keywords", "permanent": true },
    { "source": "/about.html", "destination": "/about", "permanent": true },
    { "source": "/help.html", "destination": "/help", "permanent": true },
    { "source": "/privacy.html", "destination": "/privacy", "permanent": true },
    { "source": "/terms.html", "destination": "/terms", "permanent": true },
    { "source": "/blog.html", "destination": "/blog", "permanent": true }
  ]
}
```

---

## 步骤 1: 修复链接格式 🔧

- React 组件移除 `.html` 后缀
- 索引页 canonical 统一无尾斜杠
- sitemap.xml 同步更新

---

## 步骤 2: 修复 hreflang + og:url 🔧

**涉及文件**:
- `public/keywords/index.html`
- `public/fi/keywords/index.html`
- `public/sv/keywords/index.html`
- 生成脚本 `generate-i18n-pages.js`

**修复内容**:
- FI/SV 页面移除重复 hreflang
- og:url 指向当前语言版本
- hreflang x-default 统一指向英文版

---

## 步骤 3: 翻译关键词索引页 🔧

手动翻译 3 个索引页：
- `public/fi/keywords/index.html` → 芬兰语
- `public/sv/keywords/index.html` → 瑞典语

---

## 执行顺序

| 步骤 | 内容 | 状态 |
|------|------|------|
| 0 | Vercel 配置 | 待执行 |
| 1 | 修复链接格式 | 待执行 |
| 2 | 修复 hreflang + og:url | 待执行 |
| 3 | 翻译 3 个索引页 | 待执行 |

---

**等待用户指令: "写代码" 后开始执行**
