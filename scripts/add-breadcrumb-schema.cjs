// input: public/keywords/*.html（读取页面标题与 slug）
// output: 在 <head> 注入 BreadcrumbList JSON-LD
// pos: scripts/add-breadcrumb-schema.cjs（更新规则：文件变更需同步本注释与所属目录 README）
/**
 * 为缺少 BreadcrumbList Schema 的页面添加
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const keywordsDir = path.join(__dirname, '../public/keywords');

// 生成 BreadcrumbList JSON-LD
function generateBreadcrumbSchema(pageName, pageUrl) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mywintercar.info/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Guides",
                "item": "https://mywintercar.info/keywords/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": pageName,
                "item": pageUrl
            }
        ]
    };
}

// 处理单个文件
function processFile(filePath, filename) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content);

    // 检查是否已有 BreadcrumbList schema
    let hasBreadcrumb = false;
    $('script[type="application/ld+json"]').each((i, el) => {
        const text = $(el).html();
        if (text && text.includes('"BreadcrumbList"')) {
            hasBreadcrumb = true;
        }
    });

    if (hasBreadcrumb) {
        return { status: 'skipped', reason: 'already has BreadcrumbList' };
    }

    // 提取页面名称
    const h1 = $('h1').first().text().trim();
    const title = $('title').first().text().trim().split(' - ')[0].split(' | ')[0];
    const pageName = h1 || title || filename.replace('.html', '').replace(/-/g, ' ');

    // 生成 URL
    const slug = filename.replace('.html', '');
    const pageUrl = `https://mywintercar.info/keywords/${slug}`;

    // 生成 schema
    const schema = generateBreadcrumbSchema(pageName, pageUrl);
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;

    // 在 </head> 前插入
    const newContent = content.replace('</head>', `${schemaScript}\n</head>`);

    fs.writeFileSync(filePath, newContent, 'utf-8');

    return { status: 'updated', pageName: pageName };
}

// 主函数
function main() {
    const files = fs.readdirSync(keywordsDir)
        .filter(f => f.endsWith('.html'));

    let updated = 0;
    let skipped = 0;

    for (const file of files) {
        const filePath = path.join(keywordsDir, file);
        const result = processFile(filePath, file);

        if (result.status === 'updated') {
            console.log(`✅ ${file}: Added BreadcrumbList`);
            updated++;
        } else {
            // 只显示更新的，跳过的不显示
        }
    }

    console.log(`\n✅ Updated: ${updated} files`);
    console.log(`⏭️  Skipped: ${files.length - updated} files (already have BreadcrumbList)`);
}

main();
