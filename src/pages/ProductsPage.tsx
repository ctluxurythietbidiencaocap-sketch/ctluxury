import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { Zap, Lightbulb, Lock, Home, Camera, Droplets, Check, ArrowRight } from "lucide-react";
import smartHomeImg from "@/assets/smart-home.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

const ProductsPage = () => {
  const { lang } = useLanguage();

  const heroData = lang === "vi"
    ? { label: "Danh Mục Sản Phẩm", title: "Sản Phẩm", subtitle: "Phân phối chính hãng các thiết bị điện cao cấp, chiếu sáng và nhà thông minh từ châu Âu", bc: "Sản Phẩm" }
    : { label: "Product Catalog", title: "Products", subtitle: "Authorized distribution of premium European electrical equipment, lighting, and smart home devices", bc: "Products" };

  const products = lang === "vi" ? [
    {
      icon: <Zap size={36} />, badge: "ABE", title: "Công Tắc & Ổ Cắm Điện Cao Cấp", brand: "Thương hiệu ABE (Việt Nam)",
      description: "ABE là thương hiệu Việt Nam chuyên sản xuất công tắc và ổ cắm điện cao cấp. Sản phẩm được thiết kế theo tiêu chuẩn châu Âu, mang đến sự sang trọng và an toàn tuyệt đối cho mọi công trình.",
      features: ["Thiết kế sang trọng, tinh tế", "Chất liệu PC/ABS cao cấp chống cháy", "Độ bền trên 40.000 lần đóng mở", "Tiếp điểm bạc nguyên chất", "Bảo hành chính hãng 10 năm", "Đa dạng màu sắc và kiểu dáng"],
      highlights: ["Tiêu chuẩn IEC quốc tế", "Chống cháy UL94-V0", "Công suất tải cao"],
      image: null,
    },
    {
      icon: <Lightbulb size={36} />, badge: "PRO", title: "Hệ Thống Chiếu Sáng Cao Cấp", brand: "Premium Lighting Solutions",
      description: "Hệ thống chiếu sáng đẳng cấp từ các thương hiệu châu Âu, bao gồm đèn downlight, đèn chùm pha lê, đèn trang trí nội thất và hệ thống LED thông minh.",
      features: ["Đèn downlight LED tiết kiệm năng lượng", "Đèn chùm pha lê cao cấp", "Đèn trang trí nội thất nghệ thuật", "Đèn LED dây trang trí", "Hệ thống dimmer thông minh", "Chiếu sáng cảnh quan sân vườn"],
      highlights: ["CRI > 95 cho ánh sáng tự nhiên", "Tuổi thọ 50.000+ giờ", "Tiết kiệm 80% điện năng"],
      image: null,
    },
    {
      icon: <Lock size={36} />, badge: "SMART", title: "Khoá Từ Thông Minh", brand: "Smart Lock Premium",
      description: "Hệ thống khóa thông minh thế hệ mới với công nghệ sinh trắc học tiên tiến, mang đến sự an toàn và tiện lợi tối đa cho gia đình.",
      features: ["Mở khóa bằng vân tay (độ chính xác 99.9%)", "Mở khóa qua ứng dụng điện thoại", "Mở khóa bằng mật khẩu", "Mở khóa bằng thẻ từ RFID", "Khóa tự động khi đóng cửa", "Cảnh báo chống xâm nhập"],
      highlights: ["Dung lượng 100+ vân tay", "Kết nối Bluetooth/WiFi", "Pin sử dụng 12 tháng"],
      image: null,
    },
    {
      icon: <Home size={36} />, badge: "IoT", title: "Hệ Thống Nhà Thông Minh Smart Home", brand: "Smart Home System",
      description: "Giải pháp nhà thông minh toàn diện cho biệt thự và căn hộ cao cấp. Điều khiển mọi thiết bị trong nhà qua smartphone, giọng nói hoặc tự động hóa theo kịch bản.",
      features: ["Điều khiển ánh sáng thông minh", "Điều khiển rèm cửa tự động", "Điều khiển điều hòa từ xa", "Hệ thống âm thanh đa phòng", "Tự động hóa theo kịch bản", "Tích hợp trợ lý ảo Google/Alexa"],
      highlights: ["Giao thức Zigbee/Z-Wave", "Tiết kiệm 30% năng lượng", "Cài đặt không dây"],
      image: smartHomeImg,
    },
    {
      icon: <Camera size={36} />, badge: "4K AI", title: "Camera An Ninh Thông Minh", brand: "AI Security System",
      description: "Hệ thống camera an ninh tích hợp AI tiên tiến, hỗ trợ nhận diện khuôn mặt, phát hiện xâm nhập và giám sát từ xa 24/7 qua smartphone.",
      features: ["Độ phân giải 4K Ultra HD", "Nhận diện khuôn mặt AI", "Tầm nhìn ban đêm hồng ngoại", "Phát hiện chuyển động thông minh", "Lưu trữ cloud an toàn", "Cảnh báo real-time qua app"],
      highlights: ["AI nhận diện 98% chính xác", "Chống nước IP67", "Góc quay 360°"],
      image: null,
    },
    {
      icon: <Droplets size={36} />, badge: "EU", title: "Thiết Bị Phòng Tắm Châu Âu", brand: "FLOVA · RANGOS",
      description: "Bộ sưu tập thiết bị phòng tắm cao cấp từ thương hiệu FLOVA và RANGOS – mang đến trải nghiệm tắm rửa sang trọng và đẳng cấp châu Âu.",
      features: ["Vòi lavabo đồng mạ chrome cao cấp", "Sen tắm nhiệt độ thông minh", "Bộ phụ kiện phòng tắm đồng bộ", "Vòi sen ceiling mount", "Hệ thống massage jet", "Chất liệu đồng thau nguyên chất"],
      highlights: ["Bảo hành 5 năm chính hãng", "Chống ăn mòn 10 năm", "Tiết kiệm 40% nước"],
      image: bathroomImg,
    },
  ] : [
    {
      icon: <Zap size={36} />, badge: "ABE", title: "Premium Switches & Sockets", brand: "ABE Brand (Vietnam)",
      description: "ABE is a Vietnamese brand specializing in premium switches and sockets. Products are designed to European standards, delivering elegance and absolute safety for every project.",
      features: ["Elegant, refined design", "Premium PC/ABS fire-resistant materials", "Durability over 40,000 operations", "Pure silver contacts", "10-year official warranty", "Diverse colors and styles"],
      highlights: ["IEC international standard", "UL94-V0 fire resistance", "High load capacity"],
      image: null,
    },
    {
      icon: <Lightbulb size={36} />, badge: "PRO", title: "Premium Lighting Systems", brand: "Premium Lighting Solutions",
      description: "World-class lighting from European brands including LED downlights, crystal chandeliers, decorative interior lights, and smart LED systems.",
      features: ["Energy-efficient LED downlights", "Premium crystal chandeliers", "Artistic interior decorative lights", "LED strip decorations", "Smart dimmer systems", "Landscape garden lighting"],
      highlights: ["CRI > 95 natural light", "50,000+ hour lifespan", "80% energy savings"],
      image: null,
    },
    {
      icon: <Lock size={36} />, badge: "SMART", title: "Smart Door Locks", brand: "Smart Lock Premium",
      description: "Next-generation smart lock systems with advanced biometric technology, providing maximum safety and convenience for your family.",
      features: ["Fingerprint unlock (99.9% accuracy)", "Smartphone app unlock", "Password unlock", "RFID card unlock", "Auto-lock on door close", "Anti-intrusion alerts"],
      highlights: ["100+ fingerprint capacity", "Bluetooth/WiFi connection", "12-month battery life"],
      image: null,
    },
    {
      icon: <Home size={36} />, badge: "IoT", title: "Smart Home System", brand: "Smart Home System",
      description: "Comprehensive smart home solutions for villas and premium apartments. Control all home devices via smartphone, voice, or automated scenarios.",
      features: ["Smart lighting control", "Automated curtain control", "Remote AC control", "Multi-room audio system", "Scenario automation", "Google/Alexa voice assistant integration"],
      highlights: ["Zigbee/Z-Wave protocol", "30% energy savings", "Wireless installation"],
      image: smartHomeImg,
    },
    {
      icon: <Camera size={36} />, badge: "4K AI", title: "Smart Security Cameras", brand: "AI Security System",
      description: "Advanced AI-integrated security camera systems supporting face recognition, intrusion detection, and 24/7 remote monitoring via smartphone.",
      features: ["4K Ultra HD resolution", "AI face recognition", "Infrared night vision", "Smart motion detection", "Secure cloud storage", "Real-time app alerts"],
      highlights: ["98% AI recognition accuracy", "IP67 waterproof", "360° viewing angle"],
      image: null,
    },
    {
      icon: <Droplets size={36} />, badge: "EU", title: "European Bathroom Fixtures", brand: "FLOVA · RANGOS",
      description: "Premium bathroom collection from FLOVA and RANGOS – delivering a luxurious European bathing experience.",
      features: ["Chrome-plated brass basin faucets", "Smart temperature showers", "Matching bathroom accessory sets", "Ceiling mount showerheads", "Massage jet systems", "Pure brass construction"],
      highlights: ["5-year official warranty", "10-year corrosion resistance", "40% water savings"],
      image: bathroomImg,
    },
  ];

  return (
    <PageLayout>
      <PageHero
        label={heroData.label}
        title={heroData.title}
        subtitle={heroData.subtitle}
        breadcrumb={[
          { label: lang === "vi" ? "Trang Chủ" : "Home", path: "/" },
          { label: heroData.bc, path: "/products" },
        ]}
      />

      {/* Product Cards */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 space-y-16">
          {products.map((product, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gold">{product.icon}</div>
                  <span className="text-xs font-bold tracking-widest px-3 py-1 border border-gold/40 text-gold rounded-full">{product.badge}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{product.title}</h2>
                <div className="text-gold/70 text-sm tracking-wider uppercase mb-4">{product.brand}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <Check size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground/70 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {product.highlights.map((hl) => (
                    <span key={hl} className="text-xs tracking-wider px-4 py-2 bg-gold/10 border border-gold/20 text-gold rounded-full">{hl}</span>
                  ))}
                </div>
              </div>

              {/* Image / Visual */}
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                {product.image ? (
                  <div className="relative overflow-hidden rounded-lg">
                    <img src={product.image} alt={product.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold" />
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold" />
                  </div>
                ) : (
                  <div className="card-luxury p-12 flex flex-col items-center justify-center h-[400px] text-center">
                    <div className="text-gold mb-6 opacity-40">{product.icon}</div>
                    <div className="text-gold font-serif font-bold text-4xl mb-2">{product.badge}</div>
                    <div className="text-muted-foreground text-xs tracking-[0.3em] uppercase">{product.brand}</div>
                    <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 2%))" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-gold mb-4">
            {lang === "vi" ? "Bạn Cần Tư Vấn Sản Phẩm?" : "Need Product Consultation?"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm">
            {lang === "vi"
              ? "Liên hệ với đội ngũ chuyên gia của CT LUXURY để được tư vấn giải pháp thiết bị điện phù hợp nhất cho công trình của bạn."
              : "Contact CT LUXURY's expert team for the best electrical equipment solutions for your project."}
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

export default ProductsPage;
