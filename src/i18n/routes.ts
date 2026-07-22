import type { Locale } from "./config";

export const localizedRoutes = {
  home: { en: "/", tr: "/tr/" },
  about: { en: "/about-us/", tr: "/tr/hakkimizda/" },
  visionMission: { en: "/vision-and-mission/", tr: "/tr/vizyon-misyon/" },
  qualityPolicy: { en: "/quality-policy/", tr: "/tr/kalite-politikamiz/" },
  certificates: { en: "/certificates/", tr: "/tr/sertifikalar/" },
  references: { en: "/references/", tr: "/tr/referanslar/" },
  expertise: { en: "/expertise/", tr: "/tr/uzmanliklar/" },
  processDesignSimulation: { en: "/expertise/process-design-and-simulation/", tr: "/tr/uzmanliklar/proses-tasarim-ve-simulasyon/" },
  mechanicalDesign: { en: "/expertise/mechanical-design/", tr: "/tr/uzmanliklar/mekanik-tasarim/" },
  measurementQuality: { en: "/expertise/3d-measurement-and-quality-control/", tr: "/tr/uzmanliklar/3d-olcum-ve-kalite-kontrol/" },
  precisionMachining: { en: "/expertise/precision-machining/", tr: "/tr/uzmanliklar/talasli-imalat/" },
  mechanicalElectricalManufacturing: { en: "/expertise/mechanical-and-electrical-manufacturing/", tr: "/tr/uzmanliklar/mekanik-elektrik-imalat/" },
  electricalEngineering: { en: "/expertise/electrical-engineering/", tr: "/tr/uzmanliklar/elektrik-projelendirme/" },
  automationSoftware: { en: "/expertise/automation-software/", tr: "/tr/uzmanliklar/otomasyon-yazilim/" },
  robotProgramming: { en: "/expertise/robot-programming-and-offline-programming/", tr: "/tr/uzmanliklar/robot-yazilimi-ve-offline-programlama/" },
  commissioning: { en: "/expertise/system-installation-and-commissioning/", tr: "/tr/uzmanliklar/sistem-kurulum-ve-devreye-alma/" },
  technologies: { en: "/technologies/", tr: "/tr/teknolojiler/" },
  weldingTechnologies: { en: "/technologies/welding-technologies/", tr: "/tr/teknolojiler/kaynak-teknolojileri/" },
  materialHandling: { en: "/technologies/material-handling-systems/", tr: "/tr/teknolojiler/tasima-sistemleri/" },
  assemblySystems: { en: "/technologies/assembly-systems/", tr: "/tr/teknolojiler/montaj-sistemleri/" },
  sealingDispensing: { en: "/technologies/sealing-and-dispensing-systems/", tr: "/tr/teknolojiler/mastikleme-dozajlama-sistemleri/" },
  collaborativeRobots: { en: "/technologies/collaborative-robot-systems/", tr: "/tr/teknolojiler/isbirlikci-robotlu-sistemler/" },
  contact: { en: "/contact/", tr: "/tr/iletisim/" },
} as const;

export type RouteKey = keyof typeof localizedRoutes;

const entries = Object.entries(localizedRoutes) as [RouteKey, (typeof localizedRoutes)[RouteKey]][];

export const routeKeys = entries.map(([key]) => key);
export const routePath = (key: RouteKey, locale: Locale) => localizedRoutes[key][locale];

export const routeKeyFromPath = (pathname: string): RouteKey | undefined =>
  entries.find(([, paths]) => paths.en === pathname || paths.tr === pathname)?.[0];

export const alternatePath = (pathname: string, locale: Locale): string => {
  const key = routeKeyFromPath(pathname);
  return key ? localizedRoutes[key][locale === "en" ? "tr" : "en"] : localizedRoutes.home[locale === "en" ? "tr" : "en"];
};

const legacyPairs: [string, RouteKey][] = [
  ["/en/", "home"],
  ["/kurumsal/", "about"],
  ["/hakkimizda/", "about"], ["/vizyon-misyon/", "visionMission"], ["/kalite-politikamiz/", "qualityPolicy"],
  ["/sertifikalar/", "certificates"], ["/referanslar/", "references"], ["/uzmanliklar/", "expertise"],
  ["/uzmanliklar/proses-tasarim-ve-simulasyon/", "processDesignSimulation"], ["/uzmanliklar/mekanik-tasarim/", "mechanicalDesign"],
  ["/uzmanliklar/3d-olcum-ve-kalite-kontrol/", "measurementQuality"], ["/uzmanliklar/talasli-imalat/", "precisionMachining"],
  ["/uzmanliklar/mekanik-elektrik-imalat/", "mechanicalElectricalManufacturing"], ["/uzmanliklar/elektrik-projelendirme/", "electricalEngineering"],
  ["/uzmanliklar/otomasyon-yazilim/", "automationSoftware"], ["/uzmanliklar/robot-yazilimi-ve-offline-programlama/", "robotProgramming"],
  ["/uzmanliklar/sistem-kurulum-ve-devreye-alma/", "commissioning"], ["/teknolojiler/", "technologies"],
  ["/teknolojiler/kaynak-teknolojileri/", "weldingTechnologies"], ["/teknolojiler/tasima-sistemleri/", "materialHandling"],
  ["/teknolojiler/montaj-sistemleri/", "assemblySystems"], ["/teknolojiler/mastikleme-dozajlama-sistemleri/", "sealingDispensing"],
  ["/teknolojiler/isbirlikci-robotlu-sistemler/", "collaborativeRobots"], ["/iletisim/", "contact"],
];

export const legacyRedirects = Object.fromEntries(legacyPairs.map(([from, key]) => [from, routePath(key, key === "home" ? "en" : "tr")])) as Record<string, string>;

export const localizeLegacyPath = (href: string, locale: Locale): string => {
  if (!href.startsWith("/")) return href;
  const hashIndex = href.indexOf("#");
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) || "/" : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const key = routeKeyFromPath(path) ?? legacyPairs.find(([legacy]) => legacy === path)?.[1];
  return key ? `${routePath(key, locale)}${hash}` : href;
};

export const staticLocalePaths = (locale: Locale) => entries.map(([key, paths]) => ({ key, path: paths[locale] }));
