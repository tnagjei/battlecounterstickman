/**
 * 批量更新关键词页面内链
 * 为每个关键词页面添加增强的 Related Topics 和 Popular Guides
 */

const fs = require('fs');
const path = require('path');

const keywordsDir = path.join(__dirname, '../public/keywords');

// 热门指南链接 - 这些链接会出现在每个页面
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

// 主题集群 - 相关页面分组
const topicClusters = {
    build: [
        '/keywords/my-winter-car-build',
        '/keywords/corris-rivett-build',
        '/keywords/my-winter-car-how-to-build-car',
        '/keywords/my-winter-car-assembly',
        '/keywords/my-winter-car-engine-tutorial',
        '/keywords/corris-rivett-build-guide',
        '/keywords/how-to-build-corris-rivett',
        '/keywords/my-winter-car-car-build',
    ],
    parts: [
        '/keywords/my-winter-car-parts',
        '/keywords/my-winter-car-parts-catalog',
        '/keywords/my-winter-car-parts-locations',
        '/keywords/corris-rivett-parts',
        '/keywords/my-winter-car-ordering-parts',
        '/keywords/my-winter-car-junkyard',
        '/keywords/my-winter-car-all-parts',
    ],
    jobs: [
        '/keywords/job',
        '/keywords/my-winter-car-job-guide',
        '/keywords/my-winter-car-best-job',
        '/keywords/my-winter-car-taxi-job',
        '/keywords/my-winter-car-mailer-job',
        '/keywords/my-winter-car-firewood-delivery',
        '/keywords/how-to-get-money-in-my-winter-car',
    ],
    survival: [
        '/keywords/my-winter-car-survival',
        '/keywords/my-winter-car-temperature',
        '/keywords/my-winter-car-sauna',
        '/keywords/body-temp',
        '/keywords/sauna',
    ],
    guides: [
        '/keywords/my-winter-car-beginner-guide',
        '/keywords/my-winter-car-start-guide',
        '/keywords/my-winter-car-walkthrough',
        '/keywords/my-winter-car-tips',
        '/keywords/my-winter-car-manual',
        '/keywords/my-winter-car-controls',
    ],
    location: [
        '/keywords/rivett-location',
        '/keywords/car-location',
        '/keywords/my-winter-car-rivett-location',
        '/keywords/my-winter-car-corris-location',
        '/keywords/my-winter-car-gas-station',
        '/keywords/mwc-map',
    ],
    wiki: [
        '/keywords/wiki',
        '/keywords/mwc-wiki',
        '/keywords/my-winter-car-wikipedia',
        '/keywords/my-winter-car-fandom',
        '/keywords/my-winter-car-wikia',
        '/keywords/winter-car-wiki',
    ],
    mods: [
        '/keywords/mods',
        '/keywords/mod',
        '/keywords/nexus-mods',
        '/keywords/nexusmods',
        '/keywords/mwc-loader',
        '/keywords/my-winter-car-trainer',
        '/keywords/my-winter-car-save-editor',
    ],
    phone: [
        '/keywords/phone',
        '/keywords/phone-numbers',
        '/keywords/my-winter-car-phone-number',
        '/keywords/my-winter-car-rivett-number',
        '/keywords/my-winter-car-corris-number',
    ],
};

// 根据页面 slug 获取相关链接
function getRelatedLinks(slug) {
    const pagePath = `/keywords/${slug}`;
    let related = [];

    // 查找页面所属的主题集群
    for (const [cluster, pages] of Object.entries(topicClusters)) {
        if (pages.includes(pagePath)) {
            // 添加同集群的其他页面（排除自己）
            related = related.concat(pages.filter(p => p !== pagePath));
        }
    }

    // 如果没找到集群，使用通用链接
    if (related.length === 0) {
        related = [
            '/keywords/corris-rivett',
            '/keywords/my-winter-car-beginner-guide',
            '/keywords/my-winter-car-parts',
            '/keywords/job',
            '/keywords/wiki',
        ];
    }

    // 限制数量并去重
    related = [...new Set(related)].slice(0, 6);

    return related;
}

// 生成增强的 footer HTML
function generateEnhancedFooter(slug) {
    const relatedLinks = getRelatedLinks(slug);

    const relatedHtml = relatedLinks.map(href => {
        const name = href.replace('/keywords/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return `<a href="${href}" class="px-3 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded-full text-sm text-slate-300 transition-colors">${name}</a>`;
    }).join('\n                    ');

    const popularHtml = popularGuides.map(g =>
        `<a href="${g.href}" class="text-blue-400 hover:text-blue-300 text-sm">${g.text}</a>`
    ).join(' • ');

    return `
            <div class="mt-12 p-6 bg-slate-800/30 rounded-xl">
                <h3 class="text-lg font-semibold text-white mb-4">Related Topics</h3>
                <div class="flex flex-wrap gap-2">
                    ${relatedHtml}
                </div>
            </div>
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

// 更新单个文件
function updateFile(filePath) {
    const fileName = path.basename(filePath, '.html');
    if (fileName === 'index') return; // 跳过 index.html

    let content = fs.readFileSync(filePath, 'utf-8');

    // 查找并替换 Related Topics 部分
    const oldRelatedPattern = /<div class="mt-12 p-6 bg-slate-800\/30 rounded-xl">[\s\S]*?<\/div>\s*<\/article>/;
    const newFooter = generateEnhancedFooter(fileName) + '\n        </article>';

    if (oldRelatedPattern.test(content)) {
        content = content.replace(oldRelatedPattern, newFooter);
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
