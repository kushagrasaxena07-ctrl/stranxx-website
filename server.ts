import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Homepage -->
  <url>
    <loc>https://stranxx.com/</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Products Overview -->
  <url>
    <loc>https://stranxx.com/products</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Servo Voltage Stabilisers -->
  <url>
    <loc>https://stranxx.com/servo</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Electrical Panels (LT, APFC, AMF, Synchronising) -->
  <url>
    <loc>https://stranxx.com/panels</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Battery Energy Storage Systems (BESS & Solar + BESS) -->
  <url>
    <loc>https://stranxx.com/bess</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- DG Sets (Diesel & Gas Generators) -->
  <url>
    <loc>https://stranxx.com/dg</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- About STRANXX LLP -->
  <url>
    <loc>https://stranxx.com/about-us</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Case Studies -->
  <url>
    <loc>https://stranxx.com/case-studies</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Careers -->
  <url>
    <loc>https://stranxx.com/careers</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
`;

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://stranxx.com/sitemap.xml
`;

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const isProduction = process.env.NODE_ENV === 'production' || fs.existsSync(path.resolve(__dirname, 'dist'));

  // Ensure sitemap.xml and robots.txt are served with correct Content-Type and HTTP 200 BEFORE any SPA routing
  app.get(['/sitemap.xml', '/sitemap'], (_req, res) => {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.status(200);

    const publicPath = path.resolve(__dirname, 'public/sitemap.xml');
    const distPath = path.resolve(__dirname, 'dist/sitemap.xml');

    if (fs.existsSync(publicPath)) {
      return res.sendFile(publicPath);
    }
    if (fs.existsSync(distPath)) {
      return res.sendFile(distPath);
    }
    return res.send(SITEMAP_XML);
  });

  app.get('/robots.txt', (_req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.status(200);

    const publicPath = path.resolve(__dirname, 'public/robots.txt');
    const distPath = path.resolve(__dirname, 'dist/robots.txt');

    if (fs.existsSync(publicPath)) {
      return res.sendFile(publicPath);
    }
    if (fs.existsSync(distPath)) {
      return res.sendFile(distPath);
    }
    return res.send(ROBOTS_TXT);
  });

  if (!isProduction) {
    // Development mode: Mount Vite dev server middlewares
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve dist assets and SPA fallback
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
