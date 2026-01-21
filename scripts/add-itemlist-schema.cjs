// input: public/keywords/index.html（读取所有指南链接）
// output: 在 <head> 注入 ItemList JSON-LD
// pos: scripts/add-itemlist-schema.cjs（更新规则：文件变更需同步本注释与所属目录 README）
/**
 * 为 /keywords/index.html 目录页添加 ItemList Schema
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexPath = path.join(__dirname, '../public/keywords/index.html');

function main() {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const $ = cheerio.load(content);

    // 检查是否已有 ItemList schema
    let hasItemList = false;
    $('script[type="application/ld+json"]').each((i, el) => {
        const text = $(el).html();
        if (text && text.includes('"ItemList"') && !text.includes('"BreadcrumbList"')) {
            hasItemList = true;
        }
    });

    if (hasItemList) {
        console.log('⏭️  ItemList schema already exists');
        return;
    }

    // 收集所有指南链接
    const items = [];
    let position = 1;

    $('a[href^="/keywords/"]').each((i, el) => {
        const href = $(el).attr('href');
        // 获取文本并清理：移除换行符和多余空白
        let name = $(el).text().trim().replace(/\s+/g, ' ');

        // 跳过目录页自身和重复链接
        if (href === '/keywords/' || href === '/keywords') return;
        if (items.find(item => item.url === `https://mywintercar.info${href}`)) return;

        items.push({
            position: position++,
            name: name,
            url: `https://mywintercar.info${href}`
        });
    });

    // 生成 ItemList schema (输出所有项目)
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "My Winter Car Guides Index",
        "description": "Complete index of all My Winter Car guides, tutorials, and game information.",
        "numberOfItems": items.length,
        "itemListElement": items.map(item => ({
            "@type": "ListItem",
            "position": item.position,
            "name": item.name,
            "url": item.url
        }))
    };

    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;

    // 在 </head> 前插入
    const newContent = content.replace('</head>', `${schemaScript}\n</head>`);

    fs.writeFileSync(indexPath, newContent, 'utf-8');

    console.log(`✅ Added ItemList schema with ${items.length} items`);
}

main();
