import { useEffect, useRef } from "react";
import { Zap, Lightbulb, Lock, Home, Camera, Droplets } from "lucide-react";
import smartHomeImg from "@/assets/smart-home.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

const products = [
  {
    icon: <Zap size={32} />,
    title: "Công Tắc & Ổ Cắm Điện",
    brand: "Thương hiệu ABE",
    description: "Thiết kế sang trọng, độ bền cao với chất liệu cao cấp chuẩn châu Âu.",
    features: ["Thiết kế sang trọng", "Độ bền cao", "Chất liệu cao cấp", "Tiêu chuẩn EU"],
    image: null,
    badge: "ABE",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Hệ Thống Chiếu Sáng",
    brand: "Premium Lighting",
    description: "Đèn downlight, đèn chùm cao cấp và đèn trang trí nội thất cho không gian đẳng cấp.",
    features: ["Đèn downlight", "Đèn chùm cao cấp", "Đèn trang trí", "LED thông minh"],
    image: null,
    badge: "PRO",
  },
  {
    icon: <Lock size={32} />,
    title: "Khoá Từ Thông Minh",
    brand: "Smart Lock",
    description: "Hệ thống khóa thông minh với nhiều phương thức mở khóa tiên tiến.",
    features: ["Vân tay", "Điện thoại", "Mật khẩu", "Thẻ từ"],
    image: null,
    badge: "SMART",
  },
  {
    icon: <Home size={32} />,
    title: "Nhà Thông Minh Smart Home",
    brand: "Smart Home System",
    description: "Giải pháp nhà thông minh toàn diện – điều khiển mọi thứ qua smartphone.",
    features: ["Ánh sáng", "Rèm cửa", "Điều hòa", "Smartphone"],
    image: smartHomeImg,
    badge: "IoT",
  },
  {
    icon: <Camera size={32} />,
    title: "Camera An Ninh Thông Minh",
    brand: "AI Security",
    description: "Camera AI công nghệ cao với độ phân giải 4K Ultra HD, giám sát từ xa 24/7.",
    features: ["AI Camera", "4K Ultra HD", "Giám sát từ xa", "Lưu trữ cloud"],
    image: null,
    badge: "4K AI",
  },
  {
    icon: <Droplets size={32} />,
    title: "Thiết Bị Phòng Tắm Châu Âu",
    brand: "FLOVA · RANGOS",
    description: "Vòi lavabo, sen tắm và phụ kiện phòng tắm cao cấp thương hiệu châu Âu.",
    features: ["Vòi lavabo", "Sen tắm", "Phụ kiện", "Chuẩn EU"],
    image: bathroomImg,
    badge: "EU",
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 7%))" }}>
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Danh Mục</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">Sản Phẩm Của Chúng Tôi</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed scroll-animate">
            Phân phối chính hãng các thiết bị điện cao cấp, chiếu sáng và nhà thông minh từ châu Âu
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="scroll-animate card-luxury group hover-lift overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image if available */}
              {product.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              )}

              <div className="p-6">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest px-3 py-1 border border-gold/40 text-gold rounded-full">
                    {product.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <div className="text-gold/70 text-xs tracking-wider uppercase mb-3">{product.brand}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      <span className="text-xs text-foreground/60">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover line */}
                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
