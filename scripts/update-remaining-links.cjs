/**
 * 更新剩余关键词页面的内链
 * 处理结构不同的老页面
 */

const fs = require('fs');
const path = require('path');

const keywordsDir = path.join(__dirname, '../public/keywords');

// 热门指南链接
const popularGuides = [
    { href: '/keywords/corris-rivett', text: 'Corris Rivett' },
    { href: '/keywords/my-winter-car-beginner-guide', text: 'Beginner Guide' },
    { href: '/keywords/my-winter-car-parts', text: 'Parts Guide' },
    { href: '/keywords/job', text: 'Jobs' },
    { href: '/keywords/my-winter-car-survival', text: 'Survival' },
    { href: '/keywords/steam', text: 'Steam' },
    { href: '/keywords/mods', text: 'Mods' },
    { href: '/keywords/wiki', text: 'Wiki' },
];

// 生成 Popular Guides HTML
function generatePopularGuidesHtml() {
    const popularHtml = popularGuides.map(g =>
        `<a href="${g.href}" class="text-blue-400 hover:text-blue-300 text-sm">${g.text}</a>`
    ).join(' • ');

    return `
            <div class="mt-8 p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
                <p class="text-xs text-slate-500 mb-2">Popular Guides:</p>
                <div class="flex flex-wrap gap-x-3 gap-y-1">
                    ${popularHtml}
                </div>
            </div>
            <nav class="mt-6 text-sm">
                <a href="/" class="text-slate-400 hover:text-white">Home</a>
                <span class="text-slate-600 mx-2">›</span>
                <a href="/keywords" class="text-slate-400 hover:text-white">All Guides</a>
                <span class="text-slate-600 mx-2">›</span>
                <span class="text-slate-300">Current Page</span>
            </nav>`;
}

// 检查文件是否已有 Popular Guides
function hasPopularGuides(content) {
    return content.includes('Popular Guides:');
}

// 更新单个文件
function updateFile(filePath) {
    const fileName = path.basename(filePath, '.html');
    if (fileName === 'index') return false;

    let content = fs.readFileSync(filePath, 'utf-8');

    // 如果已有 Popular Guides，跳过
    if (hasPopularGuides(content)) {
        return false;
    }

    // 在 </article> 之前插入 Popular Guides
    const articleEndPattern = /<\/article>/;
    if (articleEndPattern.test(content)) {
        const newContent = generatePopularGuidesHtml();
        content = content.replace(articleEndPattern, newContent + '\n        </article>');
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
}

main();
