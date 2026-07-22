import type { Locale } from "./config";
import { routePath } from "./routes";

export const navigation = (locale: Locale) => {
  const en = locale === "en";
  return {
    company: {
      title: en ? "Company" : "Kurumsal",
      href: routePath("about", locale),
      items: [
        [en ? "About Us" : "Hakkımızda", "about"], [en ? "Vision & Mission" : "Vizyon & Misyon", "visionMission"],
        [en ? "Quality Policy" : "Kalite Politikamız", "qualityPolicy"], [en ? "Certificates" : "Sertifikalar", "certificates"],
        [en ? "References" : "Referanslar", "references"],
      ] as const,
    },
    expertise: {
      title: en ? "Expertise" : "Uzmanlıklar",
      href: routePath("expertise", locale),
      items: [
        [en ? "Process Design and Simulation" : "Proses Tasarım ve Simülasyon", "processDesignSimulation"],
        [en ? "Mechanical Design" : "Mekanik Tasarım", "mechanicalDesign"],
        [en ? "3D Measurement and Quality Control" : "3D Ölçüm ve Kalite Kontrol", "measurementQuality"],
        [en ? "Precision Machining" : "Talaşlı İmalat", "precisionMachining"],
        [en ? "Mechanical and Electrical Manufacturing" : "Mekanik – Elektrik İmalat", "mechanicalElectricalManufacturing"],
        [en ? "Electrical Engineering" : "Elektrik Projelendirme", "electricalEngineering"],
        [en ? "Automation Software" : "Otomasyon Yazılımı", "automationSoftware"],
        [en ? "Robot Programming and Offline Programming" : "Robot Yazılımı ve Offline Programlama", "robotProgramming"],
        [en ? "System Installation and Commissioning" : "Sistem Kurulum ve Devreye Alma", "commissioning"],
      ] as const,
    },
    technologies: {
      title: en ? "Technologies" : "Teknolojiler",
      href: routePath("technologies", locale),
      items: [
        [en ? "Welding Technologies" : "Kaynak Teknolojileri", "weldingTechnologies"],
        [en ? "Material Handling Systems" : "Taşıma Sistemleri", "materialHandling"],
        [en ? "Assembly Systems" : "Montaj Sistemleri", "assemblySystems"],
        [en ? "Sealing and Dispensing Systems" : "Mastikleme / Dozajlama Sistemleri", "sealingDispensing"],
        [en ? "Collaborative Robot Systems" : "İşbirlikçi Robotlu Sistemler", "collaborativeRobots"],
      ] as const,
    },
    references: { title: en ? "References" : "Referanslar", href: routePath("references", locale) },
    contact: { title: en ? "Contact" : "İletişim", href: routePath("contact", locale) },
  };
};
