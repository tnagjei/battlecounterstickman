#!/usr/bin/env node
/**
 * generate-i18n-pages.js
 * 批量生成多语言关键词页面
 * 
 * 功能：
 * 1. 读取英文 HTML 页面
 * 2. 提取文本内容
 * 3. 翻译为目标语言
 * 4. 生成新的 HTML 文件
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const keywordsDir = path.join(__dirname, '../public/keywords');

// 翻译映射表 - 芬兰语
const translationsFI = {
    // 通用文本
    'My Winter Car Wiki': 'My Winter Car Wiki',
    'Home': 'Koti',
    'Keywords': 'Avainsanat',
    'All Guides': 'Kaikki Oppaat',
    'Car Build': 'Auton Rakennus',
    'Mods': 'Modit',
    'Jobs': 'Työt',
    'FAQ': 'UKK',
    'Related Topics': 'Aiheeseen Liittyvää',
    'Popular Guides': 'Suositut Oppaat',
    'Game Info': 'Pelitiedot',
    'Jobs Guide': 'Työopas',
    'Survival': 'Selviytyminen',
    'Phone': 'Puhelin',
    'Steam': 'Steam',
    'Troubleshooting': 'Vianmääritys',
    'Wiki': 'Wiki',
    'Previous': 'Edellinen',
    'Next': 'Seuraava',
    'Blog': 'Blogi',
    'Help': 'Apua',
    'About': 'Tietoa',
    'Privacy': 'Tietosuoja',
    'Terms': 'Käyttöehdot',

    // 页面特定内容 - 标题
    'About the Corris Rivett': 'Tietoa Corris Rivettistä',
    'Car Components': 'Auton Osat',
    'Building Tips': 'Rakennusvinkkejä',
    'Key Features': 'Tärkeimmät Ominaisuudet',
    'Gameplay Elements': 'Pelielementit',
    'Early Access Status': 'Early Access -tila',
    'Staying Warm': 'Lämpimänä Pysyminen',
    'Warning Signs': 'Varoitusmerkit',

    // 常用短语
    'Complete Guide': 'Täydellinen Opas',
    'Build Guide': 'Rakennusopas',
    'The Ultimate Guide & Database': 'Täydellinen Opas ja Tietokanta',
};

// 翻译映射表 - 瑞典语
const translationsSV = {
    // 通用文本
    'My Winter Car Wiki': 'My Winter Car Wiki',
    'Home': 'Hem',
    'Keywords': 'Nyckelord',
    'All Guides': 'Alla Guider',
    'Car Build': 'Bilbygge',
    'Mods': 'Moddar',
    'Jobs': 'Jobb',
    'FAQ': 'Vanliga Frågor',
    'Related Topics': 'Relaterade Ämnen',
    'Popular Guides': 'Populära Guider',
    'Game Info': 'Spelinfo',
    'Jobs Guide': 'Jobbguide',
    'Survival': 'Överlevnad',
    'Phone': 'Telefon',
    'Steam': 'Steam',
    'Troubleshooting': 'Felsökning',
    'Wiki': 'Wiki',
    'Previous': 'Föregående',
    'Next': 'Nästa',
    'Blog': 'Blogg',
    'Help': 'Hjälp',
    'About': 'Om',
    'Privacy': 'Integritet',
    'Terms': 'Villkor',

    // 页面特定内容 - 标题
    'About the Corris Rivett': 'Om Corris Rivett',
    'Car Components': 'Bildelar',
    'Building Tips': 'Byggtips',
    'Key Features': 'Nyckelfunktioner',
    'Gameplay Elements': 'Spelelement',
    'Early Access Status': 'Early Access-status',
    'Staying Warm': 'Hålla Värmen',
    'Warning Signs': 'Varningssignaler',

    // 常用短语
    'Complete Guide': 'Komplett Guide',
    'Build Guide': 'Byggguide',
    'The Ultimate Guide & Database': 'Den Ultimata Guiden och Databasen',
};

/**
 * 翻译文本
 */
function translateText(text, lang) {
    const translations = lang === 'fi' ? translationsFI : translationsSV;
    let result = text;

    // 按长度排序，先替换长的短语
    const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);

    for (const key of sortedKeys) {
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        result = result.replace(regex, translations[key]);
    }

    return result;
}

/**
 * 更新 HTML 页面的语言属性和链接
 */
function updateHtmlForLanguage(html, lang, slug) {
    let result = html;

    // 1. 更新 html lang 属性
    result = result.replace(/lang="en"/, `lang="${lang}"`);

    // 2. 移除所有现有的 hreflang 标签（仅 hreflang 类型的 alternate）
    result = result.replace(/<link[^>]*rel="alternate"[^>]*hreflang="[^"]*"[^>]*>\s*/gi, '');

    // 3. 更新 canonical URL 指向当前语言版本
    result = result.replace(
        /href="https:\/\/mywintercar\.info\/keywords\//g,
        `href="https://mywintercar.info/${lang}/keywords/`
    );

    // 4. 添加正确的 hreflang 标签 (在 canonical 后面)
    const hreflangTags = `
    <link rel="alternate" hreflang="en" href="https://mywintercar.info/keywords/${slug}" />
    <link rel="alternate" hreflang="fi" href="https://mywintercar.info/fi/keywords/${slug}" />
    <link rel="alternate" hreflang="sv" href="https://mywintercar.info/sv/keywords/${slug}" />
    <link rel="alternate" hreflang="x-default" href="https://mywintercar.info/keywords/${slug}" />`;

    result = result.replace(
        /(rel="canonical"[^>]*>)/,
        `$1${hreflangTags}`
    );

    // 5. 更新 og:url 指向当前语言版本
    result = result.replace(
        /<meta property="og:url" content="https:\/\/mywintercar\.info\/keywords\/[^"]*"/g,
        `<meta property="og:url" content="https://mywintercar.info/${lang}/keywords/${slug}"`
    );

    // 6. 更新 JSON-LD mainEntityOfPage 指向当前语言版本
    result = result.replace(
        /"mainEntityOfPage":"https:\/\/mywintercar\.info\/keywords\/[^"]*"/g,
        `"mainEntityOfPage":"https://mywintercar.info/${lang}/keywords/${slug}"`
    );

    // 7. 更新内部关键词链接指向同语言版本
    result = result.replace(
        /href="\/keywords\/([^"]+)"/g,
        `href="/${lang}/keywords/$1"`
    );

    // 8. 更新 /keywords/ 索引链接
    result = result.replace(
        /href="\/keywords\/"/g,
        `href="/${lang}/keywords/"`
    );
    result = result.replace(
        /href="\/keywords\b"/g,
        `href="/${lang}/keywords/"`
    );

    // 9. 首页链接保持语言版本
    result = result.replace(
        /href="\/" class="([^"]*)"/g,
        `href="/${lang}/" class="$1"`
    );
    result = result.replace(
        /href="\/">Home/g,
        `href="/${lang}/">${lang === 'fi' ? 'Koti' : 'Hem'}`
    );

    // 10. 翻译页面内容
    result = translateText(result, lang);

    return result;
}

/**
 * 生成单个语言版本的页面
 */
function generatePage(slug, lang) {
    const sourcePath = path.join(keywordsDir, `${slug}.html`);
    const targetDir = path.join(__dirname, `../public/${lang}/keywords`);
    const targetPath = path.join(targetDir, `${slug}.html`);

    if (!fs.existsSync(sourcePath)) {
        console.log(`Skip: ${slug}.html (not found)`);
        return false;
    }

    let html = fs.readFileSync(sourcePath, 'utf-8');
    html = updateHtmlForLanguage(html, lang, slug);

    fs.writeFileSync(targetPath, html);
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
    const languages = ['fi', 'sv'];

    console.log(`Found ${pages.length} keyword pages`);
    console.log(`Generating pages for languages: ${languages.join(', ')}`);
    console.log('---');

    let successCount = 0;

    for (const lang of languages) {
        console.log(`\n[${lang.toUpperCase()}] Generating ${pages.length} pages...`);

        for (const slug of pages) {
            if (generatePage(slug, lang)) {
                successCount++;
            }
        }

        console.log(`[${lang.toUpperCase()}] Done!`);
    }

    console.log(`\n---`);
    console.log(`Total: ${successCount} pages generated`);
}

main();
