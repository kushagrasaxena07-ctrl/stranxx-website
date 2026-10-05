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
  const isProduction = process.env.NODE_ENV === 'production';

  // Ensure sitemap.xml and robots.txt are served with correct Content-Type and HTTP 200 BEFORE any SPA routing
  app.all(['/sitemap.xml', '/sitemap'], (_req, res) => {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200);

    const distPath = path.resolve(__dirname, 'dist/sitemap.xml');
    const publicPath = path.resolve(__dirname, 'public/sitemap.xml');

    if (fs.existsSync(distPath)) {
      return res.sendFile(distPath);
    }
    if (fs.existsSync(publicPath)) {
      return res.sendFile(publicPath);
    }
    return res.type('application/xml').send(SITEMAP_XML);
  });

  app.all(['/robots.txt', '/robots'], (_req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200);

    const distPath = path.resolve(__dirname, 'dist/robots.txt');
    const publicPath = path.resolve(__dirname, 'public/robots.txt');

    if (fs.existsSync(distPath)) {
      return res.sendFile(distPath);
    }
    if (fs.existsSync(publicPath)) {
      return res.sendFile(publicPath);
    }
    return res.type('text/plain').send(ROBOTS_TXT);
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

  // Support Cloud Run PORT env var (e.g. 8080) and AI Studio container (port 3000)
  const portArgIndex = process.argv.indexOf('--port');
  const portArg = portArgIndex !== -1 ? process.argv[portArgIndex + 1] : undefined;
  const initialPort = parseInt(portArg || process.env.APP_PORT || process.env.PORT || '3000', 10);

  function startListening(port: number) {
    const server = app.listen(port, '0.0.0.0', () => {
      console.log(`Server listening on http://0.0.0.0:${port}`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE' && port !== 3000) {
        console.warn(`Port ${port} in use, falling back to port 3000...`);
        startListening(3000);
      } else {
        console.error('Server error:', err);
        process.exit(1);
      }
    });
  }

  startListening(initialPort);
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
