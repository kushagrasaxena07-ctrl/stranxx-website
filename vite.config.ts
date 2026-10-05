import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, type Plugin} from 'vite';

function sitemapRobotsPlugin(): Plugin {
  return {
    name: 'sitemap-robots-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/sitemap.xml' || url === '/sitemap') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.statusCode = 200;
          const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
          return res.end(fs.readFileSync(sitemapPath, 'utf-8'));
        }
        if (url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.statusCode = 200;
          const robotsPath = path.resolve(__dirname, 'public/robots.txt');
          return res.end(fs.readFileSync(robotsPath, 'utf-8'));
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/sitemap.xml' || url === '/sitemap') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.statusCode = 200;
          const sitemapPath = path.resolve(__dirname, 'dist/sitemap.xml');
          const fallbackPath = path.resolve(__dirname, 'public/sitemap.xml');
          const p = fs.existsSync(sitemapPath) ? sitemapPath : fallbackPath;
          return res.end(fs.readFileSync(p, 'utf-8'));
        }
        if (url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.statusCode = 200;
          const robotsPath = path.resolve(__dirname, 'dist/robots.txt');
          const fallbackPath = path.resolve(__dirname, 'public/robots.txt');
          const p = fs.existsSync(robotsPath) ? robotsPath : fallbackPath;
          return res.end(fs.readFileSync(p, 'utf-8'));
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), sitemapRobotsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
