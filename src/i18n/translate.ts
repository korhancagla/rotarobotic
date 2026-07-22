import type { Locale } from "./config";
import { localizeLegacyPath } from "./routes";
import { englishContent } from "./content-en";

const en: Record<string, string> = {
  ...englishContent,
  "Ana Sayfa": "Home", "Kurumsal": "Company", "Hakkımızda": "About Us", "Vizyon & Misyon": "Vision & Mission",
  "Kalite Politikamız": "Quality Policy", "Sertifikalar": "Certificates", "Sertifikalarımız": "Our Certificates",
  "Referanslar": "References", "Referanslarımız": "Our References", "Uzmanlıklar": "Expertise", "Uzmanlıklarımız": "Our Expertise",
  "Teknolojiler": "Technologies", "Teknolojilerimiz": "Our Technologies", "İletişim": "Contact", "Geri": "Back",
  "İletişim Formu": "Contact Form", "Tüm hakları saklıdır": "All rights reserved", "Sayfa yolu": "Breadcrumb",
  "Sonraki Sayfa": "Next Page", "Sonraki Uzmanlık": "Next Area of Expertise", "Önceki Sayfa": "Previous Page",
  "Detayları inceleyin": "View Details", "Projenizi değerlendirelim": "Let’s Discuss Your Project", "İletişime Geçin": "Contact Us",
  "Yukarı dön": "Back to Top", "Menüyü aç": "Open menu", "Menüyü kapat": "Close menu", "Sosyal medya": "Social media",
  "Masaüstü menüsü": "Desktop menu", "Ana menü": "Main menu", "Bize Ulaşın": "Contact Us", "E-posta": "Email", "Adres": "Address",
  "MÜHENDİSLİKLE GELECEĞİ TASARLIYORUZ": "ENGINEERING THE FUTURE", "GELECEĞİN ÜRETİMİNİ TASARLAMAK": "ENGINEERING THE FUTURE OF MANUFACTURING",
  "Akıllı Mühendislik": "Intelligent Engineering", "Deneyim": "Experience", "Hassas teslimat": "Precision Delivery",
  "Yenilikçi çözümler": "Innovative Solutions", "Maliyet etkin": "Cost-Effective", "Tüm Uzmanlıklarımız": "Explore Our Expertise",
  "Tüm Teknolojilerimiz": "Explore All Technologies", "Tüm Referanslarımız": "View All References", "Tüm Sertifikaları İncele": "View All Certificates",
  "Uluslararası Standartlarda Üretim": "Manufacturing to International Standards", "Birlikte Tasarlayalım": "Let’s Engineer Together",
  "Birlikte Tasarlayalım.": "Let’s Engineer Together.", "Birlikte tasarlayalım.": "Let’s Engineer Together.",
  "Üretimi dönüştüren robotik sistemler.": "Robotic Systems Transforming Production.", "Fikirden üretime. Uçtan uca mühendislik.": "From Concept to Production. End-to-End Engineering.",
  "Güvenle büyüyen iş birlikleri.": "Partnerships Built on Trust.", "Otomotiv Projeleri": "Automotive Projects", "Beyaz Eşya Projeleri": "Home Appliance Projects",
  "Rota Robotik Sistemler, 2023 yılında İstanbul’da robot entegratörü olarak kuruldu. 20 yıllık deneyime sahip mühendislik ekibimizle, robotik sistemlerin tasarımından devreye alınmasına kadar tüm süreci yönetiyor; endüstriyel robot ve kontrol sistemleri entegrasyonuyla üretimi daha verimli hâle getiriyoruz.": "Rota Robotic Systems was founded in Istanbul in 2023 as a robot integrator. Backed by an engineering team with 20 years of experience, we manage the entire process from robotic system design to commissioning and make production more efficient through industrial robot and control system integration.",
  "Kullanımı kolay, verimli ve güvenilir sistemler geliştiriyor; güçlü robotik entegrasyon, modern teknolojiler ve doğru ihtiyaç analiziyle müşterilerimize sürdürülebilir çözümler sunuyoruz. Kaliteli mühendisliğin fark yarattığına inanıyoruz.": "We develop efficient, reliable and easy-to-use systems, delivering sustainable solutions through robust robotic integration, modern technologies and accurate requirements analysis. We believe quality engineering makes the difference.",
  "Tasarım, yazılım, imalat ve devreye alma süreçlerini tek çatı altında yöneterek, robotik sistemlerin her aşamasında mühendislik gücümüzü ortaya koyuyoruz.": "By managing design, software, manufacturing and commissioning under one roof, we bring engineering expertise to every stage of a robotic system.",
  "Farklı üretim ihtiyaçlarına yönelik robotik, otomasyon ve ileri üretim teknolojileri geliştiriyor; verimlilik, kalite ve esneklik sağlıyoruz.": "We develop robotics, automation and advanced manufacturing technologies for diverse production needs, improving efficiency, quality and flexibility.",
  "Punta Kaynak": "Spot Welding", "Gazaltı Kaynak": "Arc Welding", "Robotik Taşıma": "Robotic Material Handling", "Paletleme": "Palletizing",
  "Mastikleme & Dozajlama": "Sealing & Dispensing", "Yüksek tekrarlanabilirlik ve hassas proses kontrolü.": "High repeatability and precise process control.",
  "Esnek, güvenilir ve otomasyona hazır kaynak çözümleri.": "Flexible, reliable and automation-ready welding solutions.",
  "Üretim akışını hızlandıran akıllı taşıma sistemleri.": "Intelligent handling systems that accelerate production flow.",
  "Yüksek kapasiteli ve güvenli robotik paletleme.": "High-capacity, safe robotic palletizing.",
  "Hatlar arasında kesintisiz ve kontrollü ürün transferi.": "Continuous, controlled product transfer between lines.",
  "Hassas montaj süreçleri için entegre otomasyon.": "Integrated automation for precision assembly processes.",
  "Kontrollü uygulama ve kararlı proses kalitesi.": "Controlled application and consistent process quality.",
  "Robotik Kaynak Hücreleri": "Robotic Welding Cells", "Montaj Hatları": "Assembly Lines", "Taşıma ve Konveyör Sistemleri": "Material Handling and Conveyor Systems",
  "Kaynak Teknolojileri": "Welding Technologies", "Taşıma Sistemleri": "Material Handling Systems", "Montaj Sistemleri": "Assembly Systems",
  "Mastikleme / Dozajlama Sistemleri": "Sealing and Dispensing Systems", "İşbirlikçi Robotlu Sistemler": "Collaborative Robot Systems",
  "Punta Kaynak Sistemleri": "Spot Welding Systems", "Gazaltı Kaynak Sistemleri": "Arc Welding Systems", "Robotik Taşıma Sistemleri": "Robotic Material Handling Systems",
  "Paletleme Sistemleri": "Palletizing Systems", "Konveyör Sistemleri": "Conveyor Systems", "Mastikleme ve Dozajlama": "Sealing and Dispensing",
  "Proses Tasarım ve Simülasyon": "Process Design and Simulation", "Mekanik Tasarım": "Mechanical Design", "3D Ölçüm ve Kalite Kontrol": "3D Measurement and Quality Control",
  "Talaşlı İmalat": "Precision Machining", "Mekanik – Elektrik İmalat": "Mechanical and Electrical Manufacturing", "Elektrik Projelendirme": "Electrical Engineering",
  "Otomasyon Yazılımı": "Automation Software", "Robot Yazılımı ve Offline Programlama": "Robot Programming and Offline Programming", "Sistem Kurulum ve Devreye Alma": "System Installation and Commissioning",
  "Proses": "Process", "Tasarım": "Design", "Kalite": "Quality", "İmalat": "Manufacturing", "Elektrik": "Electrical", "Otomasyon": "Automation", "Robotik": "Robotics", "Saha": "On-site Services",
  "Kaynak": "Welding", "Taşıma": "Material Handling", "Montaj": "Assembly", "Dozaj": "Dispensing",
  "Mühendislik Yetkinlikleri": "Engineering Capabilities", "Tüm uzmanlıklarımız.": "Our Areas of Expertise.", "Tek Ekip, Uçtan Uca Sorumluluk": "One Team, End-to-End Responsibility",
  "Fikrinizi çalışan bir sisteme dönüştürelim.": "Let’s Turn Your Idea into a Working System.", "Projenizi Konuşalım": "Let’s Discuss Your Project",
  "Teknoloji Kütüphanesi": "Technology Portfolio", "Tüm teknolojilerimiz.": "Our Technologies.", "Doğru Teknoloji, Doğru Sistem": "The Right Technology, the Right System",
  "Üretim hedefinizi birlikte tasarlayalım.": "Let’s Engineer Your Production Goals Together.", "Yıllık Deneyim": "Years of Experience", "Temel Disiplin": "Core Disciplines",
  "Uzmanlık Alanı": "Areas of Expertise", "Teknoloji Alanı": "Technology Areas", "Üretim Disiplini": "Manufacturing Disciplines",
  "Birlikte": "Together", "tasarlayalım.": "let’s engineer.", "Fikirden üretime": "From concept to production", "uçtan uca mühendislik.": "end-to-end engineering.",
  "Üretimi dönüştüren": "Transforming production with", "akıllı sistemler.": "intelligent systems.", "İstanbul Ofisi": "Istanbul Office", "İletişim Kanalı": "Contact Channels",
  "İletişim Merkezi": "Contact Center", "Projenizi konuşalım.": "Let’s Discuss Your Project.", "Mesaj Gönderin": "Send a Message", "Size dönüş yapalım.": "Let Us Get Back to You.",
  "Adınız": "Name", "Telefonunuz": "Phone", "E-posta adresiniz": "Email Address", "Mesajınız": "Message", "Gönder": "Send Message", "Web sitesi": "Website",
  "Haritada yol tarifi alın": "Get Directions", "Sosyal Kanallar": "Social Channels", "Bizi takip edin.": "Connect with Us.",
  "Yaklaşımımız": "Our Approach", "Sağlam bir projenin ortak noktaları.": "The Foundations of a Successful Project.", "Nasıl çalışıyoruz?": "How We Work",
  "Deneyimli Ekip": "Experienced Team", "Uçtan Uca Çözüm": "End-to-End Solutions", "Saha Odaklılık": "Field-Proven Engineering", "Sürekli Gelişim": "Continuous Improvement",
  "Akıllı Mühendislik ile <span>Üretime Yön Veriyoruz</span>": "Shaping Production Through <span>Intelligent Engineering</span>",
  "Fikirden çalışan sisteme, uçtan uca mühendislik.": "End-to-End Engineering, from Concept to a Fully Operational System.",
  "Mühendislikle <span>Geleceğin Üretimini Tasarlıyoruz</span>": "Engineering the <span>Future of Manufacturing</span>",
  "Geleceğin üretiminde güvenilir çözüm ortağı olmak.": "To Be a Trusted Partner in the Future of Manufacturing.",
  "Vizyonumuz": "Our Vision", "Misyonumuz": "Our Mission", "Değerimiz": "Our Values", "Odağımız": "Our Focus", "Bizi yönlendiren yaklaşım.": "The Principles That Guide Us.",
  "Kaliteyi Tasarımın <span>İlk Adımında Kuruyoruz</span>": "Quality Begins at the <span>First Step of Design</span>",
  "Her detayda izlenebilir, güvenilir ve sürdürülebilir kalite.": "Traceable, Reliable and Sustainable Quality at Every Stage.",
  "Doğru Kapsam": "Clearly Defined Scope", "Kontrollü Süreç": "Controlled Process", "Saha Doğrulaması": "On-Site Validation", "Sürekli İyileştirme": "Continuous Improvement", "Kalite anlayışımız.": "Our Approach to Quality.",
  "Yetkinliğimizi <span>Belgelendirilmiş Süreçlerle Destekliyoruz</span>": "Supporting Our Expertise with <span>Certified Processes</span>",
  "Doküman yönetiminde açıklık ve izlenebilirlik.": "Transparency and Traceability in Document Management.", "Uluslararası standartlarla doğrulanmış sistemler.": "Systems Verified to International Standards.",
  "Kalite Dokümanları": "Quality Documentation", "Teknik Uygunluk": "Technical Compliance", "Saha Güvenliği": "On-Site Safety", "Belge Talebi": "Document Requests",
  "Kalite Yönetim Sistemi": "Quality Management System", "Çevre Yönetim Sistemi": "Environmental Management System", "Sertifikayı Görüntüle / PDF İndir": "View Certificate / Download PDF",
  "Proje Kütüphanesi": "Project Portfolio", "Tüm referanslarımız": "All Our References", "Referans kategorisi": "Reference Category", "Referans kategorisi seçin": "Select a Reference Category",
  "Tüm Referanslar": "All References", "Tümü": "All", "Filtre Seçeneği": "Filter Options", "Referans Firma": "Reference Companies", "Yeni Bir Proje": "A New Project",
  "İş Ortakları": "Partners", "Teknoloji iş ortağı": "Technology Partner", "Müşteri": "Customer", "Çatı kuruluş": "Parent Organization",
  "Yalnızca tüm referanslarda": "Shown under All References only", "Mühendisliği": "Engineering", "sahada": "proven in the field", "kanıtlayan": "delivers", "projeler.": "results.",
  "Geometrik Doğrulama": "Geometric Validation", "Mühendislik Yetkinliği": "Engineering Capability", "Robotik Üretim Teknolojisi": "Robotic Production Technology", "Esnek Otomasyon": "Flexible Automation",
  "Uzmanlık ve Çözüm Alanları": "Capabilities and Solutions", "Entegre Yaklaşım": "Integrated Approach", "Dört Aşamalı Yaklaşım": "Four-Stage Approach", "Uygulama Süreci": "Implementation Process",
  "Uygulama Alanları": "Applications", "Kullanım Alanları": "Application Areas", "Sektörel Kullanım": "Industry Applications", "Ölçüm Yetkinlikleri": "Measurement Capabilities",
  "Sahada Ölçüm": "On-Site Measurement", "Ölçüm Süreci": "Measurement Process", "Fotoğrafı büyüt": "Enlarge Image",
  "Önceki fotoğraf": "Previous Image", "Sonraki fotoğraf": "Next Image", "Galeriyi kapat": "Close Gallery", "Galeri": "Gallery",
};

export const t = (locale: Locale, value: string): string => locale === "en" ? (en[value] ?? value) : value;

export const localizeDeep = <T>(value: T, locale: Locale): T => {
  if (typeof value === "string") {
    const localized = value.startsWith("/") ? localizeLegacyPath(value, locale) : t(locale, value);
    return localized as T;
  }
  if (Array.isArray(value)) return value.map((item) => localizeDeep(item, locale)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localizeDeep(item, locale)])) as T;
  }
  return value;
};
