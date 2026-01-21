/**
 * 批量添加 OG 和 JSON-LD 到关键词页面
 * Phase 2: 元数据补齐
 */

const fs = require('fs');
const path = require('path');

const keywordsDir = path.join(__dirname, '../public/keywords');
const baseUrl = 'https://mywintercar.info/keywords';

// 从文件名生成标题
function slugToTitle(slug) {
    return slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

// 生成 JSON-LD WebPage + BreadcrumbList
function generateJsonLd(slug, title, description) {
    return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "${baseUrl}/${slug}#webpage",
      "url": "${baseUrl}/${slug}",
      "name": "${title}",
      "description": "${description}",
      "isPartOf": { "@id": "https://mywintercar.info/#website" },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mywintercar.info/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://mywintercar.info/keywords/" },
        { "@type": "ListItem", "position": 3, "name": "${title}" }
      ]
    }
  ]
}
</script>`;
}

// 提取 meta description
function extractDescription(content) {
    const match = content.match(/<meta name="description"\s+content="([^"]+)"/);
    return match ? match[1] : 'My Winter Car guide and tips.';
}

// 更新单个文件
function updateFile(filePath) {
    const fileName = path.basename(filePath, '.html');
    if (fileName === 'index') return false;

    let content = fs.readFileSync(filePath, 'utf-8');
    const slug = fileName;
    const title = slugToTitle(slug);
    const description = extractDescription(content);

    let modified = false;

    // 检查是否缺少 og:url
    if (!content.includes('og:url')) {
        // 在 </head> 前插入 OG 标签
        const ogTags = `
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${baseUrl}/${slug}" />
    <meta property="og:title" content="${title} | MWC Wiki" />
    <meta property="og:description" content="${description}" />
    <meta property="og:site_name" content="My Winter Car Wiki" />
    <!-- Twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title} | MWC Wiki" />
    <meta name="twitter:description" content="${description}" />`;

        content = content.replace('</head>', ogTags + '\n</head>');
        modified = true;
    }

    // 检查是否缺少 JSON-LD
    if (!content.includes('application/ld+json')) {
        const jsonLd = generateJsonLd(slug, title, description);
        content = content.replace('</head>', jsonLd + '\n</head>');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated: ${fileName}`);
        return true;
    }

    return false;
}

// 主函数
function main() {
    const files = fs.readdirSync(keywordsDir)
        .filter(f => f.endsWith('.html') && f !== 'index.html');

    let updated = 0;
    for (const file of files) {
        const filePath = path.join(keywordsDir, file);
        if (updateFile(filePath)) {
            updated++;
        }
    }

    console.log(`\nTotal files updated: ${updated}`);
    console.log(`Total files checked: ${files.length}`);
}

main();
