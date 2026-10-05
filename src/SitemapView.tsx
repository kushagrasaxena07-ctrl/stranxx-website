import { useEffect } from "react";

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

export function SitemapView() {
  useEffect(() => {
    // Force native browser fetch of server XML if client-side SPA router intercepted it
    if (window.location.pathname === '/sitemap.xml') {
      window.location.replace('/sitemap.xml');
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "20px" }}>
      <pre style={{
        margin: 0,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "13px",
        lineHeight: "1.5",
        whiteSpace: "pre-wrap",
        color: "#1a1a1a"
      }}>
        {SITEMAP_XML}
      </pre>
    </div>
  );
}
