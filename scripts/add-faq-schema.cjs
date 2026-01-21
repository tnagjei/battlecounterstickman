// input: public/keywords/*.html（读取 FAQ 区块）
// output: 在 <head> 注入 FAQPage JSON-LD
// pos: scripts/add-faq-schema.cjs（更新规则：文件变更需同步本注释与所属目录 README）
/**
 * 为所有带 FAQ 部分的页面添加 FAQPage Schema
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const keywordsDir = path.join(__dirname, '../public/keywords');

// 提取 FAQ 数据
function extractFAQs($) {
    const faqs = [];

    // 查找所有 FAQ 问答对
    $('div.bg-slate-800\\/30.rounded-lg.p-4').each((i, el) => {
        const $el = $(el);
        const questionEl = $el.find('h3').first();
        const answerEl = $el.find('p').first();

        if (questionEl.length && answerEl.length) {
            let question = questionEl.text().trim();
            let answer = answerEl.text().trim();

            // 清理 Q: 和 A: 前缀
            if (question.startsWith('Q:')) {
                question = question.substring(2).trim();
            }
            if (answer.startsWith('A:')) {
                answer = answer.substring(2).trim();
            }

            if (question && answer) {
                faqs.push({ question, answer });
            }
        }
    });

    return faqs;
}

// 生成 FAQPage JSON-LD
function generateFAQSchema(faqs) {
    if (faqs.length === 0) return null;

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// 处理单个文件
function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content);

    // 检查是否已有 FAQPage schema
    let hasFAQSchema = false;
    $('script[type="application/ld+json"]').each((i, el) => {
        const text = $(el).html();
        if (text && text.includes('"FAQPage"')) {
            hasFAQSchema = true;
        }
    });

    if (hasFAQSchema) {
        return { status: 'skipped', reason: 'already has FAQPage schema' };
    }

    // 提取 FAQ
    const faqs = extractFAQs($);
    if (faqs.length === 0) {
        return { status: 'skipped', reason: 'no FAQs found' };
    }

    // 生成 schema
    const schema = generateFAQSchema(faqs);
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;

    // 在 </head> 前插入
    const newContent = content.replace('</head>', `${schemaScript}\n</head>`);

    fs.writeFileSync(filePath, newContent, 'utf-8');

    return { status: 'updated', faqCount: faqs.length };
}

// 主函数
function main() {
    const files = fs.readdirSync(keywordsDir)
        .filter(f => f.endsWith('.html') && f !== 'index.html');

    let updated = 0;
    let skipped = 0;

    for (const file of files) {
        const filePath = path.join(keywordsDir, file);
        const result = processFile(filePath);

        if (result.status === 'updated') {
            console.log(`✅ ${file}: Added FAQPage schema (${result.faqCount} Q&As)`);
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
