export const supportedLocales = ["en", "tr"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const siteConfig = {
  name: "Rota Robotik Sistemler",
  brand: "Rota Robotik",
  baseUrl: import.meta.env.SITE || "https://rotarobotik.com",
  phoneDisplay: "+90 538 778 81 18",
  phoneE164: "+905387788118",
  whatsapp: "https://wa.me/905387788118",
  email: "info@rotarobotik.com",
  linkedin: "https://www.linkedin.com/company/rota-robotik-sistemler/",
  address: {
    tr: "Yarış Çıkmazı Sokak No:1\nBağımsız Bölüm No:347\nİSTİM Tuzla / İstanbul",
    en: "Yarış Çıkmazı Sokak No:1\nIndependent Unit No:347\nİSTİM Tuzla / Istanbul\nTürkiye",
  },
  certificates: {
    quality: "/media/certificates/quality-management-system.pdf",
    environmental: "/media/certificates/environmental-management-system.pdf",
  },
} as const;
