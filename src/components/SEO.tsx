import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_DOMAIN = "https://stranxx.com";
const DEFAULT_IMAGE = "https://stranxx.com/assets/images/logo.png";

export function SEO({
  title,
  description,
  canonicalPath = "/",
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (attribute: "name" | "property", value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update or create link tags
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${DEFAULT_DOMAIN}${cleanPath === "/" ? "" : cleanPath}`;

    // 2. Standard Meta Tags
    updateMeta("name", "description", description);
    updateMeta("name", "robots", "index, follow");
    updateLink("canonical", canonicalUrl);

    // 3. Open Graph Tags
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:site_name", "STRANXX LLP");
    updateMeta("property", "og:image", ogImage);

    // 4. Twitter Tags
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", ogImage);

    // 5. Structured Data (JSON-LD)
    const scriptId = "dynamic-json-ld";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Optional cleanup if component unmounts
    };
  }, [title, description, canonicalPath, ogType, ogImage, schema]);

  return null;
}
