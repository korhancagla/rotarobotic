import type { APIRoute } from "astro";
import { localizedRoutes, routeKeys } from "../i18n/routes";
import { siteConfig } from "../i18n/config";

const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const absolute = (path: string) => new URL(path, siteConfig.baseUrl).href;

export const GET: APIRoute = () => {
  const urls = routeKeys.flatMap((key) => (["en", "tr"] as const).map((locale) => {
    const pair = localizedRoutes[key];
    return `  <url>
    <loc>${escapeXml(absolute(pair[locale]))}</loc>
    <changefreq>${key === "home" ? "weekly" : "monthly"}</changefreq>
    <priority>${key === "home" ? "1.0" : key === "contact" ? "0.8" : "0.9"}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(absolute(pair.en))}" />
    <xhtml:link rel="alternate" hreflang="tr" href="${escapeXml(absolute(pair.tr))}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absolute(pair.en))}" />
  </url>`;
  })).join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
