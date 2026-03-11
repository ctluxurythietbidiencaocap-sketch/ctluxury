import { useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { FileText, Download } from "lucide-react";

const catalogueData: Record<string, { vi: { title: string; subtitle: string; description: string }; en: { title: string; subtitle: string; description: string } }> = {
  switches: {
    vi: { title: "Catalogue Công Tắc Ổ Cắm ABE", subtitle: "Bộ sưu tập công tắc và ổ cắm cao cấp thương hiệu ABE chuẩn châu Âu", description: "Khám phá toàn bộ dòng sản phẩm công tắc, ổ cắm điện cao cấp ABE với thiết kế sang trọng, chất liệu bền bỉ và tiêu chuẩn an toàn châu Âu." },
    en: { title: "ABE Switches & Sockets Catalogue", subtitle: "Premium European-standard ABE switches and sockets collection", description: "Explore the complete range of ABE premium switches and sockets featuring elegant design, durable materials, and European safety standards." },
  },
  chandeliers: {
    vi: { title: "CATALOGUE Đèn Chiếu Sáng & Trang Trí", subtitle: "Đèn chùm pha lê, đèn chiếu sáng và đèn trang trí nghệ thuật đẳng cấp", description: "Bộ sưu tập đèn chùm pha lê, đèn chiếu sáng, đèn tường trang trí, đèn sàn và đèn bàn cao cấp cho không gian sống sang trọng." },
    en: { title: "Lighting & Decorative Catalogue", subtitle: "Crystal chandeliers, lighting systems and artistic decorative lighting", description: "Collection of crystal chandeliers, lighting systems, decorative wall lights, floor lamps, and premium table lamps for luxury living spaces." },
  },
  euroto2026: {
    vi: { title: "CATALOGUE - EUROTO 2026", subtitle: "Catalogue đèn trang trí cao cấp EUROTO 2026", description: "Catalogue đèn trang trí EUROTO 2026 cập nhật mới nhất – đèn chùm, đèn đồng, đèn trang trí phong cách châu Âu." },
    en: { title: "CATALOGUE - EUROTO 2026", subtitle: "EUROTO 2026 premium decorative lighting catalogue", description: "Latest EUROTO 2026 decorative lighting catalogue – chandeliers, brass lamps, European-style decorative lighting." },
  },
  rangos: {
    vi: { title: "Catalogue Thiết Bị Vệ Sinh RANGOS", subtitle: "Thiết bị phòng tắm cao cấp thương hiệu RANGOS", description: "Vòi lavabo, sen tắm, bồn cầu và phụ kiện phòng tắm RANGOS với thiết kế hiện đại, chất lượng châu Âu." },
    en: { title: "RANGOS Sanitary Catalogue", subtitle: "Premium RANGOS bathroom fixtures", description: "Basin faucets, showers, toilets, and RANGOS bathroom accessories with modern design and European quality." },
  },
  flova: {
    vi: { title: "Catalogue Thiết Bị Vệ Sinh FLOVA", subtitle: "Thiết bị phòng tắm đẳng cấp thương hiệu FLOVA", description: "Dòng sản phẩm FLOVA cao cấp bao gồm vòi lavabo, sen tắm massage, phụ kiện mạ chrome và hệ thống sưởi khăn tắm." },
    en: { title: "FLOVA Sanitary Catalogue", subtitle: "Premium FLOVA bathroom fixtures", description: "Premium FLOVA product line including basin faucets, massage showers, chrome accessories, and towel warming systems." },
  },
  cameras: {
    vi: { title: "Catalogue Camera An Ninh", subtitle: "Hệ thống camera giám sát AI thông minh", description: "Camera an ninh 4K Ultra HD, camera AI nhận diện khuôn mặt, hệ thống giám sát từ xa 24/7 và lưu trữ cloud." },
    en: { title: "Security Camera Catalogue", subtitle: "Smart AI surveillance camera systems", description: "4K Ultra HD security cameras, AI facial recognition cameras, 24/7 remote monitoring systems, and cloud storage." },
  },
};

// Generate all EUROTO 2026 catalogue image URLs from eurotolighting.net
const BASE_URL = "https://eurotolighting.net/wp-content/uploads/2025/09/catalogue-den-trang-tri-euroto";

const eurotoImageUrls: string[] = [
  `${BASE_URL}.jpg`,
  ...Array.from({ length: 535 }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `${BASE_URL}_${num}.jpg`;
  }),
];

const CataloguePage = () => {
  const { category } = useParams<{ category: string }>();
  const { lang } = useLanguage();
  const data = category ? catalogueData[category] : null;

  if (!data) {
    return (
      <PageLayout>
        <PageHero
          label="Catalogue"
          title="Catalogue"
          subtitle={lang === "vi" ? "Danh mục không tồn tại" : "Category not found"}
          breadcrumb={[
            { label: lang === "vi" ? "Trang Chủ" : "Home", path: "/" },
            { label: "Catalogue", path: "/" },
          ]}
        />
      </PageLayout>
    );
  }

  const content = data[lang];

  return (
    <PageLayout>
      <PageHero
        label="Catalogue"
        title={content.title}
        subtitle={content.subtitle}
        breadcrumb={[
          { label: lang === "vi" ? "Trang Chủ" : "Home", path: "/" },
          { label: "Catalogue", path: "/" },
          { label: content.title, path: `/catalogue/${category}` },
        ]}
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-foreground/70 text-base leading-relaxed">{content.description}</p>
          </div>

          {category === "euroto2026" ? (
            <div className="max-w-4xl mx-auto">
              {/* Download button */}
              <div className="text-center mb-12">
                <a
                  href="https://drive.google.com/file/d/183wBpZ0TTMK8OS9B2TjjcI2OBnaWojIz/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury text-sm tracking-[0.2em] rounded-none px-10 py-4 inline-flex items-center gap-3"
                >
                  <Download size={18} />
                  DOWNLOAD CATALOGUE
                </a>
              </div>

              {/* Euroto catalogue images - all 536 pages */}
              <div className="space-y-6">
                {eurotoImageUrls.map((url, i) => (
                  <div key={i} className="border border-gold/10 rounded-sm overflow-hidden">
                    <img
                      src={url}
                      alt={`Catalogue EUROTO 2026 - Trang ${i + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Download button bottom */}
              <div className="text-center mt-12">
                <a
                  href="https://drive.google.com/file/d/183wBpZ0TTMK8OS9B2TjjcI2OBnaWojIz/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury text-sm tracking-[0.2em] rounded-none px-10 py-4 inline-flex items-center gap-3"
                >
                  <Download size={18} />
                  DOWNLOAD CATALOGUE
                </a>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="border border-gold/20 rounded-sm p-12 text-center bg-gold/5">
                <FileText size={48} className="text-gold/50 mx-auto mb-6" />
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {lang === "vi" ? "Catalogue đang được cập nhật" : "Catalogue coming soon"}
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  {lang === "vi"
                    ? "Vui lòng liên hệ hotline để nhận catalogue chi tiết."
                    : "Please contact our hotline for detailed catalogue."}
                </p>
                <a
                  href="tel:0889271571"
                  className="btn-luxury text-sm tracking-[0.2em] rounded-none px-10 py-4 inline-flex items-center gap-2"
                >
                  {lang === "vi" ? "Gọi Ngay: 0889.271.571" : "Call Now: 0889.271.571"}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default CataloguePage;
