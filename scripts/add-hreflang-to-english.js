#!/usr/bin/env node
/**
 * add-hreflang-to-english.js
 * 为英文关键词页面添加 hreflang 标签
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const keywordsDir = path.join(__dirname, '../public/keywords');

/**
 * 为页面添加 hreflang 标签
 */
function addHreflangTags(slug) {
    const filePath = path.join(keywordsDir, `${slug}.html`);

    if (!fs.existsSync(filePath)) {
        return false;
    }

    let html = fs.readFileSync(filePath, 'utf-8');

    // 检查是否已有 hreflang 标签
    if (html.includes('hreflang="fi"')) {
        console.log(`Skip: ${slug}.html (already has hreflang)`);
        return false;
    }

    // 在 canonical 后添加 hreflang 标签
    const hreflangTags = `
    <link rel="alternate" hreflang="en" href="https://mywintercar.info/keywords/${slug}" />
    <link rel="alternate" hreflang="fi" href="https://mywintercar.info/fi/keywords/${slug}" />
    <link rel="alternate" hreflang="sv" href="https://mywintercar.info/sv/keywords/${slug}" />
    <link rel="alternate" hreflang="x-default" href="https://mywintercar.info/keywords/${slug}" />`;

    html = html.replace(
        /(rel="canonical"[^>]*>)/,
        `$1${hreflangTags}`
    );

    fs.writeFileSync(filePath, html);
    return true;
}

/**
 * 获取所有关键词页面
 */
function getKeywordPages() {
    const files = fs.readdirSync(keywordsDir);
    return files.filter(f => f.endsWith('.html') && f !== 'index.html').map(f => f.replace('.html', ''));
}

/**
 * 主函数
 */
function main() {
    const pages = getKeywordPages();

    console.log(`Adding hreflang to ${pages.length} English keyword pages...`);
    console.log('---');

    let successCount = 0;

    for (const slug of pages) {
        if (addHreflangTags(slug)) {
            console.log(`Updated: ${slug}.html`);
            successCount++;
        }
    }

    console.log('---');
    console.log(`Total: ${successCount} pages updated`);
}

main();
