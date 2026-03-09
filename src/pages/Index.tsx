import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import SmartHomeSection from "@/components/SmartHomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta */}
      <title>CT LUXURY - Thiết Bị Điện Cao Cấp & Nhà Thông Minh Châu Âu | Đồng Nai</title>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <SmartHomeSection />
        <ProjectsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating contact buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Phone */}
        <a
          href="tel:0889271571"
          className="w-12 h-12 bg-gold flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-glow-pulse"
          title="Gọi điện"
        >
          <Phone size={20} className="text-black" />
        </a>
        {/* Zalo */}
        <a
          href="https://zalo.me/0889271571"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden bg-[#0068ff]"
          title="Chat Zalo"
        >
          <span className="text-white font-bold text-xs">Zalo</span>
        </a>
      </div>
    </div>
  );
};

export default Index;
