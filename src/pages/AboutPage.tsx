import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { Gem, Award, Users, Globe, ShieldCheck, Star, Target, Heart } from "lucide-react";
import villaImg from "@/assets/villa-classic.jpg";
import hotelImg from "@/assets/hotel-lobby.jpg";
import logoImg from "@/assets/logo.png";

const AboutPage = () => {
  const { lang } = useLanguage();

  const heroData = lang === "vi"
    ? { label: "Về Chúng Tôi", title: "Giới Thiệu", subtitle: "Đơn vị chuyên cung cấp giải pháp thiết bị điện cao cấp hàng đầu tại Việt Nam", bc: "Giới Thiệu" }
    : { label: "About Us", title: "About", subtitle: "Leading provider of premium electrical solutions in Vietnam", bc: "About" };

  const values = lang === "vi" ? [
    { icon: <Star size={28} />, title: "Chất Lượng Đỉnh Cao", desc: "Chỉ phân phối sản phẩm từ các thương hiệu hàng đầu châu Âu, đảm bảo tiêu chuẩn quốc tế nghiêm ngặt nhất." },
    { icon: <ShieldCheck size={28} />, title: "Uy Tín & Tin Cậy", desc: "Hơn 10 năm xây dựng niềm tin với hàng trăm đối tác và chủ đầu tư trên khắp Việt Nam." },
    { icon: <Heart size={28} />, title: "Tận Tâm Phục Vụ", desc: "Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng từ khâu thiết kế đến lắp đặt và bảo hành." },
    { icon: <Target size={28} />, title: "Sáng Tạo & Đổi Mới", desc: "Luôn cập nhật xu hướng công nghệ mới nhất, mang đến giải pháp tiên tiến cho mọi công trình." },
  ] : [
    { icon: <Star size={28} />, title: "Premium Quality", desc: "Exclusively distributing products from top European brands, ensuring the strictest international standards." },
    { icon: <ShieldCheck size={28} />, title: "Trust & Reliability", desc: "Over 10 years of building trust with hundreds of partners and investors across Vietnam." },
    { icon: <Heart size={28} />, title: "Dedicated Service", desc: "Professional consulting team supporting customers from design to installation and warranty." },
    { icon: <Target size={28} />, title: "Innovation", desc: "Always updating the latest technology trends, delivering cutting-edge solutions for every project." },
  ];

  const timeline = lang === "vi" ? [
    { year: "2015", title: "Thành Lập Công Ty", desc: "CT LUXURY được thành lập với sứ mệnh mang thiết bị điện cao cấp châu Âu đến Việt Nam." },
    { year: "2017", title: "Mở Rộng Thị Trường", desc: "Trở thành nhà phân phối chính thức của các thương hiệu ABE, FLOVA, RANGOS tại khu vực miền Nam." },
    { year: "2019", title: "Ra Mắt Smart Home", desc: "Giới thiệu giải pháp nhà thông minh tích hợp, mở rộng danh mục sản phẩm và dịch vụ." },
    { year: "2021", title: "500+ Công Trình", desc: "Cán mốc 500 công trình đã thi công, bao gồm các biệt thự, resort và khách sạn 5 sao." },
    { year: "2024", title: "Dẫn Đầu Thị Trường", desc: "Khẳng định vị thế dẫn đầu trong lĩnh vực thiết bị điện cao cấp và nhà thông minh tại Việt Nam." },
  ] : [
    { year: "2015", title: "Company Founded", desc: "CT LUXURY was established with a mission to bring premium European electrical equipment to Vietnam." },
    { year: "2017", title: "Market Expansion", desc: "Became the official distributor of ABE, FLOVA, RANGOS brands in Southern Vietnam." },
    { year: "2019", title: "Smart Home Launch", desc: "Introduced integrated smart home solutions, expanding the product and service portfolio." },
    { year: "2021", title: "500+ Projects", desc: "Reached 500 completed projects, including villas, resorts, and 5-star hotels." },
    { year: "2024", title: "Market Leader", desc: "Solidified leadership position in premium electrical equipment and smart home solutions in Vietnam." },
  ];

  const stats = [
    { value: "10+", label: lang === "vi" ? "Năm Kinh Nghiệm" : "Years Experience" },
    { value: "500+", label: lang === "vi" ? "Công Trình Hoàn Thành" : "Completed Projects" },
    { value: "50+", label: lang === "vi" ? "Thương Hiệu Đối Tác" : "Brand Partners" },
    { value: "100%", label: lang === "vi" ? "Khách Hàng Hài Lòng" : "Client Satisfaction" },
    { value: "20+", label: lang === "vi" ? "Tỉnh Thành Phục Vụ" : "Provinces Served" },
    { value: "24/7", label: lang === "vi" ? "Hỗ Trợ Kỹ Thuật" : "Technical Support" },
  ];

  const projectTypes = lang === "vi"
    ? [
      { icon: "🏰", label: "Biệt thự cổ điển", desc: "Thiết bị điện và chiếu sáng cho biệt thự phong cách cổ điển châu Âu" },
      { icon: "🏛️", label: "Biệt thự tân cổ điển", desc: "Giải pháp tối ưu cho biệt thự kết hợp hiện đại và cổ điển" },
      { icon: "🗼", label: "Lâu đài cổ điển", desc: "Hệ thống chiếu sáng và điện hoàng gia cho lâu đài đẳng cấp" },
      { icon: "🌿", label: "Villa cao cấp", desc: "Thiết bị thông minh và hiện đại cho villa nghỉ dưỡng" },
      { icon: "🏖️", label: "Resort", desc: "Giải pháp toàn diện cho resort và khu nghỉ dưỡng cao cấp" },
      { icon: "🏨", label: "Khách sạn", desc: "Hệ thống điện và Smart Home cho khách sạn 4-5 sao" },
    ]
    : [
      { icon: "🏰", label: "Classical Villa", desc: "Electrical and lighting solutions for European classical-style villas" },
      { icon: "🏛️", label: "Neoclassical Villa", desc: "Optimal solutions for modern-classic hybrid villas" },
      { icon: "🗼", label: "Classical Castle", desc: "Royal lighting and electrical systems for prestigious castles" },
      { icon: "🌿", label: "Premium Villa", desc: "Smart and modern equipment for resort villas" },
      { icon: "🏖️", label: "Resort", desc: "Comprehensive solutions for premium resorts" },
      { icon: "🏨", label: "Hotel", desc: "Electrical and Smart Home systems for 4-5 star hotels" },
    ];

  return (
    <PageLayout>
      <PageHero
        label={heroData.label}
        title={heroData.title}
        subtitle={heroData.subtitle}
        breadcrumb={[
          { label: lang === "vi" ? "Trang Chủ" : "Home", path: "/" },
          { label: heroData.bc, path: "/about" },
        ]}
      />

      {/* Company Overview */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img src={villaImg} alt="CT Luxury" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />
              {/* Floating logo */}
              <div className="absolute bottom-8 right-8 card-luxury p-4 flex items-center gap-3">
                <img src={logoImg} alt="Logo" className="h-10 w-10 object-contain" />
                <div>
                  <div className="text-gold font-serif font-bold text-lg">CT LUXURY</div>
                  <div className="text-muted-foreground text-[10px] tracking-wider">SINCE 2015</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-gold mb-6 tracking-wider">
                {lang === "vi" ? "Câu Chuyện Của Chúng Tôi" : "Our Story"}
              </h2>
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                <strong className="text-gold">CT LUXURY</strong>{" "}
                {lang === "vi"
                  ? "là nhà phân phối thiết bị điện cao cấp, hệ thống chiếu sáng, thiết bị nhà thông minh và thiết bị phòng tắm chuẩn châu Âu hàng đầu tại Việt Nam. Được thành lập vào năm 2015, chúng tôi đã không ngừng phát triển và khẳng định vị thế trong ngành."
                  : "is a leading distributor of premium European electrical equipment, lighting systems, smart home devices, and bathroom fixtures in Vietnam. Founded in 2015, we have continuously grown and solidified our position in the industry."}
              </p>
              <p className="text-foreground/70 text-base leading-relaxed mb-6">
                {lang === "vi"
                  ? "Với triết lý \"Luxury Electrical Solutions for Elite Living\", CT LUXURY cam kết mang đến những sản phẩm và giải pháp tốt nhất cho các công trình đẳng cấp. Mỗi sản phẩm chúng tôi phân phối đều được chọn lọc kỹ lưỡng từ các thương hiệu hàng đầu thế giới."
                  : "With the philosophy of 'Luxury Electrical Solutions for Elite Living,' CT LUXURY is committed to providing the best products and solutions for prestigious projects. Every product we distribute is carefully selected from the world's leading brands."}
              </p>

              {/* Mission Box */}
              <div className="border border-gold/30 p-6 rounded-lg bg-gold/5">
                <div className="flex items-start gap-3">
                  <Gem className="text-gold mt-1 shrink-0" size={20} />
                  <div>
                    <div className="text-gold font-serif font-semibold mb-2 tracking-wider">
                      {lang === "vi" ? "SỨ MỆNH" : "MISSION"}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed italic">
                      "{lang === "vi"
                        ? "Mang đến các giải pháp thiết bị điện và nhà thông minh đẳng cấp châu Âu cho các công trình sang trọng tại Việt Nam."
                        : "Delivering European-class electrical and smart home solutions for luxury projects in Vietnam."}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 7%))" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card-luxury p-6 text-center hover-lift">
                <div className="text-3xl font-serif font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">{lang === "vi" ? "Giá Trị Cốt Lõi" : "Core Values"}</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="section-title text-gold-gradient">
              {lang === "vi" ? "Tại Sao Chọn CT LUXURY?" : "Why Choose CT LUXURY?"}
            </h2>
            <div className="gold-line mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="card-luxury p-8 text-center group hover-lift">
                <div className="w-16 h-16 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-5 rounded-xl group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  {val.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 7%))" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">{lang === "vi" ? "Hành Trình" : "Journey"}</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="section-title text-gold-gradient">
              {lang === "vi" ? "Hành Trình Phát Triển" : "Our Journey"}
            </h2>
            <div className="gold-line mb-6" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="card-luxury p-6 inline-block">
                    <div className="text-gold font-serif font-bold text-sm tracking-wider mb-1">{item.title}</div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-2 border-black z-10 mt-2" />

                {/* Year badge */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-[-2rem]">
                  <span className="text-gold font-serif font-bold text-2xl md:text-xl">{item.year}</span>
                </div>

                {/* Mobile content */}
                <div className="md:hidden ml-16 card-luxury p-5 flex-1">
                  <div className="text-gold font-serif font-bold text-sm mb-1">{item.title}</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types We Serve */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">{lang === "vi" ? "Lĩnh Vực" : "Sectors"}</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="section-title text-gold-gradient">
              {lang === "vi" ? "Lĩnh Vực Phục Vụ" : "Sectors We Serve"}
            </h2>
            <div className="gold-line mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((pt, i) => (
              <div key={i} className="card-luxury p-8 group hover-lift">
                <div className="text-4xl mb-4">{pt.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{pt.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
