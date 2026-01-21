/**
 * vite.config.ts
 * Vite 构建工具配置，包含开发服务器和插件设置
 */
import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * 自定义插件：服务 public 目录下的多语言静态 HTML 页面
 * 使用 transformIndexHtml 确保 Vite 正确注入开发脚本
 */
function servePublicSubfolders(): Plugin {
  return {
    name: 'serve-public-subfolders',
    configureServer(server) {
      // 直接注册中间件（不要返回函数，否则会被当作清理回调）
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';

        // /fi/ 和 /sv/ 首页现在由 React 应用处理（通过 LanguageContext）
        if (url === '/fi/' || url === '/fi' || url === '/sv/' || url === '/sv') {
          try {
            const filePath = path.resolve(__dirname, 'index.html');
            let html = fs.readFileSync(filePath, 'utf-8');
            // 使用 Vite 的 transformIndexHtml 注入开发脚本
            html = await server.transformIndexHtml(url, html);
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(html);
            return;
          } catch (e) {
            console.error('Error transforming HTML:', e);
            next();
            return;
          }
        }

        // 处理 /fi/keywords/* 和 /sv/keywords/* 路径 (静态关键词页面)
        const langKeywordMatch = url.match(/^\/(fi|sv)\/keywords\/([^?#]+)/);
        if (langKeywordMatch) {
          const [, lang, slug] = langKeywordMatch;
          const cleanSlug = slug.replace(/\.html$/, '');
          const filePath = path.resolve(__dirname, `public/${lang}/keywords/${cleanSlug}.html`);
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync(filePath, 'utf-8'));
            return;
          }
        }

        next();
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      servePublicSubfolders(),
      react()
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
