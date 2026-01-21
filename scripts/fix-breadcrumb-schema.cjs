// input: public/keywords/*.html（扫描 BreadcrumbList 片段）
// output: 为 position=3 缺少 item 的条目补齐 URL
// pos: scripts/fix-breadcrumb-schema.cjs（更新规则：文件变更需同步本注释与所属目录 README）
/**
 * 修复已注入的 BreadcrumbList Schema - 为最后一项添加 item URL
 */

const fs = require('fs');
const path = require('path');

const keywordsDir = path.join(__dirname, '../public/keywords');

// 主函数
function main() {
    const files = fs.readdirSync(keywordsDir)
        .filter(f => f.endsWith('.html'));

    let fixed = 0;

    for (const file of files) {
        const filePath = path.join(keywordsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // 查找缺少 item 的 BreadcrumbList 最后一项
        // 匹配模式: "position": 3,\n                "name": "..." 后面没有 "item"
        const pattern = /("@type": "ListItem",\s*"position": 3,\s*"name": "[^"]+")(\s*\})/g;

        if (pattern.test(content)) {
            const slug = file.replace('.html', '');
            const pageUrl = `https://mywintercar.info/keywords/${slug}`;

            // 重置 regex
            pattern.lastIndex = 0;

            // 替换为包含 item 的版本
            const newContent = content.replace(pattern, `$1,\n                "item": "${pageUrl}"$2`);

            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf-8');
                console.log(`✅ ${file}: Fixed BreadcrumbList`);
                fixed++;
            }
        }
    }

    console.log(`\n✅ Fixed: ${fixed} files`);
}

main();
