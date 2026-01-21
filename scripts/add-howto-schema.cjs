// input: public/keywords/*.html（读取教程标题与步骤列表）
// output: 在 <head> 注入 HowTo JSON-LD
// pos: scripts/add-howto-schema.cjs（更新规则：文件变更需同步本注释与所属目录 README）
/**
 * 为带步骤列表的教程页面添加 HowTo Schema
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const keywordsDir = path.join(__dirname, '../public/keywords');

// 目标页面列表 - 适合 HowTo 的教程页面
const howToPages = [
    'how-to-scrape-window.html',
    'how-to-get-car.html',
    'scrape-window.html',
    'ice-scraper.html',
    'sauna.html',
    'mwc-loader.html',
    'nexus-mods.html',
    'my-winter-car-parts-catalog.html',
    'phone.html',
];

// 提取步骤列表
function extractSteps($) {
    const steps = [];

    // 查找有序列表
    $('ol').first().find('li').each((i, el) => {
        const text = $(el).text().trim();
        if (text) {
            steps.push({
                position: i + 1,
                text: text
            });
        }
    });

    return steps;
}

// 生成 HowTo JSON-LD
function generateHowToSchema(title, description, steps) {
    if (steps.length === 0) return null;

    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "step": steps.map(step => ({
            "@type": "HowToStep",
            "position": step.position,
            "text": step.text
        }))
    };
}

// 处理单个文件
function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content);

    // 检查是否已有 HowTo schema
    let hasHowToSchema = false;
    $('script[type="application/ld+json"]').each((i, el) => {
        const text = $(el).html();
        if (text && text.includes('"HowTo"')) {
            hasHowToSchema = true;
        }
    });

    if (hasHowToSchema) {
        return { status: 'skipped', reason: 'already has HowTo schema' };
    }

    // 提取标题和描述
    const title = $('h1').first().text().trim() || $('title').text().trim();
    const description = $('meta[name="description"]').attr('content') || '';

    // 提取步骤
    const steps = extractSteps($);
    if (steps.length < 2) {
        return { status: 'skipped', reason: 'not enough steps' };
    }

    // 生成 schema
    const schema = generateHowToSchema(title, description, steps);
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;

    // 在 </head> 前插入
    const newContent = content.replace('</head>', `${schemaScript}\n</head>`);

    fs.writeFileSync(filePath, newContent, 'utf-8');

    return { status: 'updated', stepCount: steps.length };
}

// 主函数
function main() {
    let updated = 0;
    let skipped = 0;

    for (const file of howToPages) {
        const filePath = path.join(keywordsDir, file);

        if (!fs.existsSync(filePath)) {
            console.log(`⏭️  ${file}: file not found`);
            skipped++;
            continue;
        }

        const result = processFile(filePath);

        if (result.status === 'updated') {
            console.log(`✅ ${file}: Added HowTo schema (${result.stepCount} steps)`);
            updated++;
        } else {
            console.log(`⏭️  ${file}: ${result.reason}`);
            skipped++;
        }
    }

    console.log(`\n✅ Updated: ${updated} files`);
    console.log(`⏭️  Skipped: ${skipped} files`);
}

main();
