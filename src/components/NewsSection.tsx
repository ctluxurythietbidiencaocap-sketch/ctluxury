import { useEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import villaImg from "@/assets/villa-classic.jpg";
import hotelImg from "@/assets/hotel-lobby.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";

const articles = [
  {
    title: "Xu Hướng Nhà Thông Minh 2025: Tương Lai Của Sự Sang Trọng",
    excerpt: "Công nghệ Smart Home ngày càng phổ biến trong các biệt thự cao cấp tại Việt Nam, mang lại sự tiện nghi và đẳng cấp vượt trội.",
    date: "15 Tháng 3, 2025",
    category: "Smart Home",
    image: smartHomeImg,
  },
  {
    title: "Thiết Kế Chiếu Sáng Biệt Thự: Nghệ Thuật Ánh Sáng Sang Trọng",
    excerpt: "Hệ thống chiếu sáng đẳng cấp không chỉ là tiện ích, mà còn là yếu tố nghệ thuật tạo nên linh hồn cho không gian sống cao cấp.",
    date: "28 Tháng 2, 2025",
    category: "Chiếu Sáng",
    image: hotelImg,
  },
  {
    title: "Thiết Bị Điện Châu Âu: Tiêu Chuẩn Vàng Cho Biệt Thự",
    excerpt: "Những thương hiệu thiết bị điện hàng đầu châu Âu mang đến tiêu chuẩn kỹ thuật và thẩm mỹ đỉnh cao cho các công trình cao cấp.",
    date: "10 Tháng 2, 2025",
    category: "Thiết Bị Điện",
    image: villaImg,
  },
];

const NewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="news" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Tin Tức</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">Tin Tức & Xu Hướng</h2>
          <div className="gold-line mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div
              key={article.title}
              className="scroll-animate card-luxury group hover-lift overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold tracking-widest px-3 py-1 bg-gold/90 text-black rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar size={12} />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-gold text-xs group-hover:gap-3 transition-all duration-300">
                  <span className="tracking-wider uppercase">Đọc thêm</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
