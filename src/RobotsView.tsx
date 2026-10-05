import { useEffect } from "react";

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://stranxx.com/sitemap.xml
`;

export function RobotsView() {
  useEffect(() => {
    document.title = "robots.txt - STRANXX LLP";
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "20px" }}>
      <pre style={{
        margin: 0,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "14px",
        lineHeight: "1.6",
        whiteSpace: "pre-wrap",
        color: "#1a1a1a"
      }}>
        {ROBOTS_TXT}
      </pre>
    </div>
  );
}
