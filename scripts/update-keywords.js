#!/usr/bin/env node
/**
 * update-keywords.js
 * 批量更新关键词内页的内链结构 (ES Module 版本)
 * 
 * 优化内容：
 * 1. 统一 Header 导航
 * 2. 为 H2 添加锚点 ID
 * 3. 添加上一篇/下一篇导航
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const keywordsDir = path.join(__dirname, '../public/keywords');

// 页面分类和排序（用于上下篇导航）
const pageGroups = {
    car: ['corris-rivett', 'corris-rivett-car', 'car-location', 'rivett-location', 'how-to-get-car', 'talbot-1510'],
    survival: ['body-temp', 'sauna', 'firewood', 'cant-sleep', 'ice-scraper', 'scrape-window', 'how-to-scrape-window'],
    money: ['job', 'work', 'main-job', 'taxi'],
    mods: ['mods', 'mod', 'nexus', 'nexus-mods', 'nexusmods', 'mwc-loader', 'mwc-editor', 'editor', 'sorbet'],
    info: ['game', 'steam', 'release', 'release-date', 'wiki', 'mwc-wiki', 'free', 'my-summer-car', 'amistech', 'mwc', 'myscwintercar'],
    tech: ['phone', 'phone-numbers', 'card-pin', 'credit-card-pin', 'pin-code', 'save', 'cheat', 'controller'],
    help: ['problem', 'reijo', 'reddit', 'mwc-map']
};

// 统一的 Header HTML
const headerHTML = `<header class="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" class="flex items-center gap-2"><img src="/logo2.png" alt="MWC Wiki" class="w-8 h-8" /><span
                    class="font-bold text-lg">My Winter Car Wiki</span></a>
            <nav class="hidden md:flex gap-6 text-sm text-slate-400">
                <a href="/keywords/" class="hover:text-white">All Guides</a>
                <a href="/keywords/corris-rivett" class="hover:text-white">Car Build</a>
                <a href="/keywords/mods" class="hover:text-white">Mods</a>
                <a href="/keywords/job" class="hover:text-white">Jobs</a>
                <a href="/#faq" class="hover:text-white">FAQ</a>
            </nav>
        </div>
    </header>`;

// 获取所有关键词页面
function getKeywordPages() {
    const files = fs.readdirSync(keywordsDir);
    return files.filter(f => f.endsWith('.html') && f !== 'index.html').map(f => f.replace('.html', ''));
}

// 找到上一篇和下一篇
function findPrevNext(slug) {
    for (const [group, pages] of Object.entries(pageGroups)) {
        const idx = pages.indexOf(slug);
        if (idx !== -1) {
            return {
                prev: idx > 0 ? pages[idx - 1] : null,
                next: idx < pages.length - 1 ? pages[idx + 1] : null,
                group
            };
        }
    }
    return { prev: null, next: null, group: null };
}

// 生成上下篇导航 HTML
function generatePrevNextNav(slug) {
    const { prev, next } = findPrevNext(slug);
    if (!prev && !next) return '';

    let html = `
            <div class="mt-12 flex justify-between items-center border-t border-slate-700/30 pt-6">`;

    if (prev) {
        html += `
                <a href="/keywords/${prev}" class="text-blue-400 hover:text-blue-300 text-sm">← Previous: ${prev.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</a>`;
    } else {
        html += `<span></span>`;
    }

    if (next) {
        html += `
                <a href="/keywords/${next}" class="text-blue-400 hover:text-blue-300 text-sm">Next: ${next.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} →</a>`;
    } else {
        html += `<span></span>`;
    }

    html += `
            </div>`;

    return html;
}

// 更新单个页面
function updatePage(slug) {
    const filePath = path.join(keywordsDir, `${slug}.html`);
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. 更新 Header（替换现有 header）
    content = content.replace(/<header[\s\S]*?<\/header>/, headerHTML);

    // 2. 为 H2 添加锚点 ID
    content = content.replace(/<h2 class="([^"]*)">(.*?)<\/h2>/g, (match, classes, title) => {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return `<h2 id="${id}" class="${classes}">${title}</h2>`;
    });

    // 3. 添加上下篇导航（在 Related Topics 之前）
    const prevNextNav = generatePrevNextNav(slug);
    if (prevNextNav && !content.includes('← Previous:') && !content.includes('Next:')) {
        content = content.replace(
            /(<div class="mt-12 p-6 bg-slate-800\/30)/,
            prevNextNav + '\n\n            $1'
        );
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${slug}.html`);
}

// 主函数
function main() {
    const pages = getKeywordPages();
    console.log(`Found ${pages.length} keyword pages`);

    pages.forEach(updatePage);

    console.log('Done!');
}

main();
