import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import villaImg from "@/assets/villa-classic.jpg";
import hotelImg from "@/assets/hotel-lobby.jpg";
import heroBgImg from "@/assets/hero-bg.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";

const ProjectsPage = () => {
  const { lang } = useLanguage();

  const heroData = lang === "vi"
    ? { label: "Portfolio", title: "Công Trình", subtitle: "Những công trình đẳng cấp đã được CT LUXURY trang bị thiết bị và giải pháp cao cấp", bc: "Công Trình" }
    : { label: "Portfolio", title: "Projects", subtitle: "Prestigious projects equipped with CT LUXURY's premium devices and solutions", bc: "Projects" };

  const projects = lang === "vi" ? [
    {
      title: "Biệt Thự Cổ Điển Châu Âu", type: "Classical Villa", location: "Đồng Nai, Việt Nam", year: "2023",
      description: "Công trình biệt thự cổ điển với diện tích 800m², được trang bị toàn bộ hệ thống điện cao cấp ABE, đèn chùm pha lê và hệ thống Smart Home.",
      services: ["Công tắc ổ cắm ABE cao cấp", "Đèn chùm pha lê đại sảnh", "Hệ thống Smart Home toàn nhà", "Camera an ninh 4K AI"],
      image: villaImg,
    },
    {
      title: "Khách Sạn Boutique 5 Sao", type: "Luxury Hotel", location: "TP. Hồ Chí Minh", year: "2023",
      description: "Khách sạn boutique 120 phòng với hệ thống điện thông minh, chiếu sáng nghệ thuật và thiết bị phòng tắm FLOVA cho tất cả phòng VIP.",
      services: ["Hệ thống chiếu sáng lobby đại sảnh", "Khóa từ thông minh 120 phòng", "Thiết bị phòng tắm FLOVA", "Điều khiển rèm tự động"],
      image: hotelImg,
    },
    {
      title: "Lâu Đài Cổ Điển", type: "Classical Castle", location: "Bình Dương, Việt Nam", year: "2022",
      description: "Công trình lâu đài phong cách hoàng gia với diện tích 1.500m², sử dụng hệ thống chiếu sáng đẳng cấp và thiết bị điện cao cấp nhất.",
      services: ["Đèn chùm pha lê 3 tầng đại sảnh", "Hệ thống dimmer thông minh toàn nhà", "Công tắc cảm ứng mạ vàng", "Camera giám sát 360°"],
      image: heroBgImg,
    },
    {
      title: "Villa Nghỉ Dưỡng Cao Cấp", type: "Premium Villa", location: "Vũng Tàu, Việt Nam", year: "2024",
      description: "Khu villa nghỉ dưỡng 10 căn bên bờ biển, được trang bị Smart Home hoàn chỉnh và thiết bị phòng tắm RANGOS.",
      services: ["Smart Home điều khiển qua app", "Thiết bị phòng tắm RANGOS", "Hệ thống chiếu sáng cảnh quan", "Camera an ninh outdoor"],
      image: smartHomeImg,
    },
    {
      title: "Phòng Tắm Penthouse Thượng Lưu", type: "Premium Bathroom", location: "Đà Nẵng, Việt Nam", year: "2024",
      description: "Dự án thiết kế phòng tắm cho tầng penthouse của tòa nhà cao cấp, sử dụng toàn bộ thiết bị FLOVA và RANGOS.",
      services: ["Sen tắm massage FLOVA", "Vòi lavabo cảm ứng", "Phụ kiện mạ chrome cao cấp", "Hệ thống sưởi khăn tắm"],
      image: bathroomImg,
    },
    {
      title: "Resort 5 Sao Ven Biển", type: "Luxury Resort", location: "Phú Quốc, Việt Nam", year: "2022",
      description: "Resort 5 sao với 80 phòng bungalow và villa, được trang bị đầy đủ hệ thống điện thông minh và thiết bị phòng tắm cao cấp.",
      services: ["Hệ thống Smart Home 80 phòng", "Chiếu sáng cảnh quan resort", "Khóa từ thông minh toàn bộ", "Thiết bị phòng tắm châu Âu"],
      image: villaImg,
    },
  ] : [
    {
      title: "European Classical Villa", type: "Classical Villa", location: "Dong Nai, Vietnam", year: "2023",
      description: "800m² classical villa fully equipped with premium ABE electrical systems, crystal chandeliers, and whole-house Smart Home.",
      services: ["Premium ABE switches & sockets", "Grand hall crystal chandeliers", "Whole-house Smart Home", "4K AI security cameras"],
      image: villaImg,
    },
    {
      title: "5-Star Boutique Hotel", type: "Luxury Hotel", location: "Ho Chi Minh City", year: "2023",
      description: "120-room boutique hotel with smart electrical systems, artistic lighting, and FLOVA bathroom fixtures for all VIP rooms.",
      services: ["Grand lobby lighting system", "Smart locks for 120 rooms", "FLOVA bathroom fixtures", "Automated curtain control"],
      image: hotelImg,
    },
    {
      title: "Classical Castle", type: "Classical Castle", location: "Binh Duong, Vietnam", year: "2022",
      description: "Royal-style 1,500m² castle using the most premium lighting systems and electrical equipment.",
      services: ["3-tier crystal chandelier in grand hall", "Whole-house smart dimmer system", "Gold-plated touch switches", "360° surveillance cameras"],
      image: heroBgImg,
    },
    {
      title: "Premium Resort Villa", type: "Premium Villa", location: "Vung Tau, Vietnam", year: "2024",
      description: "10-unit beachside resort villas fully equipped with Smart Home and RANGOS bathroom fixtures.",
      services: ["App-controlled Smart Home", "RANGOS bathroom fixtures", "Landscape lighting", "Outdoor security cameras"],
      image: smartHomeImg,
    },
    {
      title: "Luxury Penthouse Bathroom", type: "Premium Bathroom", location: "Da Nang, Vietnam", year: "2024",
      description: "Bathroom design project for penthouse floors using complete FLOVA and RANGOS fixtures.",
      services: ["FLOVA massage showers", "Sensor basin faucets", "Premium chrome accessories", "Towel warming systems"],
      image: bathroomImg,
    },
    {
      title: "5-Star Beachfront Resort", type: "Luxury Resort", location: "Phu Quoc, Vietnam", year: "2022",
      description: "5-star resort with 80 bungalows and villas, fully equipped with smart electrical systems and premium bathroom fixtures.",
      services: ["Smart Home for 80 rooms", "Resort landscape lighting", "Smart locks throughout", "European bathroom fixtures"],
      image: villaImg,
    },
  ];

  const categories = lang === "vi"
    ? ["Tất cả", "Biệt thự", "Khách sạn & Resort", "Phòng tắm"]
    : ["All", "Villas", "Hotels & Resorts", "Bathrooms"];

  return (
    <PageLayout>
      <PageHero
        label={heroData.label}
        title={heroData.title}
        subtitle={heroData.subtitle}
        breadcrumb={[
          { label: lang === "vi" ? "Trang Chủ" : "Home", path: "/" },
          { label: heroData.bc, path: "/projects" },
        ]}
      />

      {/* Projects Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat, i) => (
              <button key={cat} className={`text-xs tracking-wider uppercase px-6 py-2.5 border transition-all duration-300 ${i === 0 ? "border-gold bg-gold text-black" : "border-gold/30 text-gold/70 hover:border-gold hover:text-gold"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-20">
            {projects.map((project, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                {/* Image */}
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="relative overflow-hidden rounded-lg group">
                    <img src={project.image} alt={project.title} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-gold" />
                    <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-gold" />

                    {/* Type badge */}
                    <div className="absolute top-6 left-6">
                      <span className="text-xs font-bold tracking-widest px-4 py-1.5 bg-gold/90 text-black rounded-full">{project.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 hover:text-gold transition-colors duration-300">{project.title}</h2>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={14} className="text-gold/70" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} className="text-gold/70" />
                      {project.year}
                    </div>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">{project.description}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                      {lang === "vi" ? "Hạng Mục Thực Hiện" : "Scope of Work"}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.services.map((srv) => (
                        <div key={srv} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span className="text-foreground/60 text-sm">{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 2%))" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-gold mb-4">
            {lang === "vi" ? "Bạn Có Dự Án Cần Tư Vấn?" : "Have a Project to Discuss?"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm">
            {lang === "vi"
              ? "CT LUXURY sẵn sàng tư vấn và cung cấp giải pháp thiết bị điện cao cấp cho công trình của bạn."
              : "CT LUXURY is ready to consult and provide premium electrical solutions for your project."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0889271571" className="btn-luxury text-sm tracking-[0.2em] rounded-none px-10 py-4">
              {lang === "vi" ? "Gọi Ngay: 0889.271.571" : "Call Now: 0889.271.571"}
            </a>
            <a href="https://zalo.me/0889271571" target="_blank" rel="noreferrer" className="btn-luxury-outline text-sm tracking-[0.2em] rounded-none px-10 py-4">
              Chat Zalo
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
