export type Language = "vi" | "en";

export const translations = {
  // Navigation
  nav: {
    home: { vi: "Trang Chủ", en: "Home" },
    about: { vi: "Giới Thiệu", en: "About" },
    products: { vi: "Sản Phẩm", en: "Products" },
    smarthome: { vi: "Smart Home", en: "Smart Home" },
    catalogue: { vi: "Catalogue", en: "Catalogue" },
    news: { vi: "Tin Tức", en: "News" },
    contact: { vi: "Liên Hệ", en: "Contact" },
  },

  // Hero
  hero: {
    subtitle: {
      vi: "Thiết Bị Điện Cao Cấp & Giải Pháp Nhà Thông Minh",
      en: "High-End Electrical Equipment & Smart Home Solutions",
    },
    description: {
      vi: "Nhà phân phối thiết bị điện cao cấp, hệ thống chiếu sáng, thiết bị nhà thông minh và thiết bị phòng tắm chuẩn châu Âu cho các công trình đẳng cấp.",
      en: "Premium distributor of high-end electrical equipment, lighting systems, smart home devices, and European-standard bathroom fixtures for prestigious projects.",
    },
    cta_products: { vi: "Khám Phá Sản Phẩm", en: "Explore Products" },
    cta_contact: { vi: "Liên Hệ Tư Vấn", en: "Contact Us" },
    scroll: { vi: "Khám Phá", en: "Discover" },
  },

  // About
  about: {
    label: { vi: "Về Chúng Tôi", en: "About Us" },
    subtitle: {
      vi: "Đơn vị chuyên cung cấp giải pháp thiết bị điện cao cấp tại Việt Nam",
      en: "Leading provider of premium electrical solutions in Vietnam",
    },
    desc1: {
      vi: "là nhà phân phối thiết bị điện cao cấp, hệ thống chiếu sáng, thiết bị nhà thông minh và thiết bị phòng tắm chuẩn châu Âu hàng đầu tại Việt Nam.",
      en: "is a leading distributor of high-end electrical equipment, lighting systems, smart home devices, and European-standard bathroom fixtures in Vietnam.",
    },
    desc2: {
      vi: "Với hơn một thập kỷ kinh nghiệm, chúng tôi tự hào là đối tác tin cậy cho các công trình đẳng cấp, mang đến những giải pháp tối ưu và tinh tế nhất cho không gian sống cao cấp.",
      en: "With over a decade of experience, we are proud to be a trusted partner for prestigious projects, delivering optimal and refined solutions for luxury living spaces.",
    },
    mission_label: { vi: "SỨ MỆNH", en: "MISSION" },
    mission: {
      vi: "Mang đến các giải pháp thiết bị điện và nhà thông minh đẳng cấp châu Âu cho các công trình sang trọng tại Việt Nam.",
      en: "Delivering European-class electrical and smart home solutions for luxury projects in Vietnam.",
    },
    stats: {
      experience: { vi: "Năm Kinh Nghiệm", en: "Years Experience" },
      projects: { vi: "Công Trình", en: "Projects" },
      brands: { vi: "Thương Hiệu Cao Cấp", en: "Premium Brands" },
      satisfaction: { vi: "Hài Lòng", en: "Satisfaction" },
    },
    projectTypes: {
      classical_villa: { vi: "Biệt thự cổ điển", en: "Classical Villa" },
      neoclassical_villa: { vi: "Biệt thự tân cổ điển", en: "Neoclassical Villa" },
      classical_castle: { vi: "Lâu đài cổ điển", en: "Classical Castle" },
      premium_villa: { vi: "Villa cao cấp", en: "Premium Villa" },
      resort: { vi: "Resort", en: "Resort" },
      hotel: { vi: "Khách sạn", en: "Hotel" },
    },
  },

  // Products
  products: {
    label: { vi: "Danh Mục", en: "Categories" },
    title: { vi: "Sản Phẩm Của Chúng Tôi", en: "Our Products" },
    subtitle: {
      vi: "Phân phối chính hãng các thiết bị điện cao cấp, chiếu sáng và nhà thông minh từ châu Âu",
      en: "Authorized distribution of premium European electrical equipment, lighting, and smart home devices",
    },
    items: [
      {
        title: { vi: "Công Tắc & Ổ Cắm Điện", en: "Switches & Sockets" },
        brand: { vi: "Thương hiệu ABE", en: "ABE Brand" },
        description: {
          vi: "Thiết kế sang trọng, độ bền cao với chất liệu cao cấp chuẩn châu Âu.",
          en: "Elegant design, high durability with premium European-standard materials.",
        },
        features: {
          vi: ["Thiết kế sang trọng", "Độ bền cao", "Chất liệu cao cấp", "Tiêu chuẩn EU"],
          en: ["Elegant Design", "High Durability", "Premium Materials", "EU Standard"],
        },
      },
      {
        title: { vi: "Hệ Thống Chiếu Sáng", en: "Lighting Systems" },
        brand: { vi: "Premium Lighting", en: "Premium Lighting" },
        description: {
          vi: "Đèn downlight, đèn chùm cao cấp và đèn trang trí nội thất cho không gian đẳng cấp.",
          en: "Downlights, premium chandeliers, and decorative interior lighting for prestigious spaces.",
        },
        features: {
          vi: ["Đèn downlight", "Đèn chùm cao cấp", "Đèn trang trí", "LED thông minh"],
          en: ["Downlights", "Premium Chandeliers", "Decorative Lights", "Smart LED"],
        },
      },
      {
        title: { vi: "Khoá Từ Thông Minh", en: "Smart Locks" },
        brand: { vi: "Smart Lock", en: "Smart Lock" },
        description: {
          vi: "Hệ thống khóa thông minh với nhiều phương thức mở khóa tiên tiến.",
          en: "Smart lock system with multiple advanced unlocking methods.",
        },
        features: {
          vi: ["Vân tay", "Điện thoại", "Mật khẩu", "Thẻ từ"],
          en: ["Fingerprint", "Smartphone", "Password", "Key Card"],
        },
      },
      {
        title: { vi: "Nhà Thông Minh Smart Home", en: "Smart Home System" },
        brand: { vi: "Smart Home System", en: "Smart Home System" },
        description: {
          vi: "Giải pháp nhà thông minh toàn diện – điều khiển mọi thứ qua smartphone.",
          en: "Comprehensive smart home solution – control everything via smartphone.",
        },
        features: {
          vi: ["Ánh sáng", "Rèm cửa", "Điều hòa", "Smartphone"],
          en: ["Lighting", "Curtains", "AC", "Smartphone"],
        },
      },
      {
        title: { vi: "Camera An Ninh Thông Minh", en: "Smart Security Cameras" },
        brand: { vi: "AI Security", en: "AI Security" },
        description: {
          vi: "Camera AI công nghệ cao với độ phân giải 4K Ultra HD, giám sát từ xa 24/7.",
          en: "High-tech AI cameras with 4K Ultra HD resolution, 24/7 remote monitoring.",
        },
        features: {
          vi: ["AI Camera", "4K Ultra HD", "Giám sát từ xa", "Lưu trữ cloud"],
          en: ["AI Camera", "4K Ultra HD", "Remote Monitor", "Cloud Storage"],
        },
      },
      {
        title: { vi: "Thiết Bị Phòng Tắm Châu Âu", en: "European Bathroom Fixtures" },
        brand: { vi: "FLOVA · RANGOS", en: "FLOVA · RANGOS" },
        description: {
          vi: "Vòi lavabo, sen tắm và phụ kiện phòng tắm cao cấp thương hiệu châu Âu.",
          en: "Premium European basin faucets, showers, and bathroom accessories.",
        },
        features: {
          vi: ["Vòi lavabo", "Sen tắm", "Phụ kiện", "Chuẩn EU"],
          en: ["Basin Faucets", "Showers", "Accessories", "EU Standard"],
        },
      },
    ],
  },

  // Smart Home
  smarthome: {
    label: { vi: "Công Nghệ", en: "Technology" },
    title: { vi: "Giải Pháp Smart Home", en: "Smart Home Solutions" },
    subtitle: {
      vi: "Hệ thống nhà thông minh tích hợp toàn diện – nơi công nghệ gặp gỡ sự xa xỉ",
      en: "Comprehensive integrated smart home system – where technology meets luxury",
    },
    features: [
      {
        title: { vi: "Điều Khiển Ánh Sáng", en: "Light Control" },
        desc: {
          vi: "Hệ thống dimmer thông minh tự động điều chỉnh ánh sáng theo thời gian và tâm trạng.",
          en: "Smart dimmer system automatically adjusts lighting based on time and mood.",
        },
      },
      {
        title: { vi: "Điều Khiển Rèm Cửa", en: "Curtain Control" },
        desc: {
          vi: "Rèm tự động đóng mở theo lịch trình hoặc điều khiển từ xa bằng giọng nói.",
          en: "Automated curtains that open/close on schedule or via voice control.",
        },
      },
      {
        title: { vi: "Điều Khiển Điều Hòa", en: "AC Control" },
        desc: {
          vi: "Kiểm soát nhiệt độ thông minh, tiết kiệm năng lượng tối ưu cho toàn ngôi nhà.",
          en: "Smart temperature control, optimizing energy savings for the entire home.",
        },
      },
      {
        title: { vi: "Hệ Thống Bảo Mật", en: "Security System" },
        desc: {
          vi: "Tích hợp camera AI, khóa thông minh và cảm biến chuyển động 24/7.",
          en: "Integrated AI cameras, smart locks, and 24/7 motion sensors.",
        },
      },
      {
        title: { vi: "Điều Khiển Smartphone", en: "Smartphone Control" },
        desc: {
          vi: "Quản lý toàn bộ ngôi nhà qua ứng dụng di động dù ở bất kỳ đâu trên thế giới.",
          en: "Manage your entire home via mobile app from anywhere in the world.",
        },
      },
      {
        title: { vi: "Kết Nối IoT", en: "IoT Connectivity" },
        desc: {
          vi: "Nền tảng IoT tiên tiến, kết nối liền mạch mọi thiết bị trong không gian sống.",
          en: "Advanced IoT platform, seamlessly connecting all devices in your living space.",
        },
      },
    ],
  },

  // Projects
  projectsSection: {
    label: { vi: "Portfolio", en: "Portfolio" },
    title: { vi: "Công Trình Tiêu Biểu", en: "Featured Projects" },
    subtitle: {
      vi: "Những công trình đẳng cấp đã được CT LUXURY trang bị thiết bị và giải pháp cao cấp",
      en: "Prestigious projects equipped with CT LUXURY's premium devices and solutions",
    },
    items: [
      { title: { vi: "Biệt Thự Cổ Điển", en: "Classical Villa" }, location: { vi: "Đồng Nai, Việt Nam", en: "Dong Nai, Vietnam" }, type: "Classical Villa" },
      { title: { vi: "Khách Sạn 5 Sao", en: "5-Star Hotel" }, location: { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" }, type: "Luxury Hotel" },
      { title: { vi: "Lâu Đài Cổ Điển", en: "Classical Castle" }, location: { vi: "Bình Dương, Việt Nam", en: "Binh Duong, Vietnam" }, type: "Classical Castle" },
      { title: { vi: "Phòng Tắm Cao Cấp", en: "Premium Bathroom" }, location: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam" }, type: "Premium Bathroom" },
      { title: { vi: "Villa Cao Cấp", en: "Luxury Villa" }, location: { vi: "Vũng Tàu, Việt Nam", en: "Vung Tau, Vietnam" }, type: "Luxury Villa" },
      { title: { vi: "Resort 5 Sao", en: "5-Star Resort" }, location: { vi: "Phú Quốc, Việt Nam", en: "Phu Quoc, Vietnam" }, type: "Luxury Resort" },
    ],
  },

  // News
  news: {
    label: { vi: "Tin Tức", en: "News" },
    title: { vi: "Tin Tức & Xu Hướng", en: "News & Trends" },
    readMore: { vi: "Đọc thêm", en: "Read more" },
    articles: [
      {
        title: {
          vi: "Xu Hướng Nhà Thông Minh 2025: Tương Lai Của Sự Sang Trọng",
          en: "Smart Home Trends 2025: The Future of Luxury",
        },
        excerpt: {
          vi: "Công nghệ Smart Home ngày càng phổ biến trong các biệt thự cao cấp tại Việt Nam, mang lại sự tiện nghi và đẳng cấp vượt trội.",
          en: "Smart Home technology is increasingly popular in premium villas in Vietnam, offering superior comfort and prestige.",
        },
        date: { vi: "15 Tháng 3, 2025", en: "March 15, 2025" },
        category: "Smart Home",
      },
      {
        title: {
          vi: "Thiết Kế Chiếu Sáng Biệt Thự: Nghệ Thuật Ánh Sáng Sang Trọng",
          en: "Villa Lighting Design: The Art of Luxury Illumination",
        },
        excerpt: {
          vi: "Hệ thống chiếu sáng đẳng cấp không chỉ là tiện ích, mà còn là yếu tố nghệ thuật tạo nên linh hồn cho không gian sống cao cấp.",
          en: "Premium lighting systems are not just functional—they are the artistic soul of luxury living spaces.",
        },
        date: { vi: "28 Tháng 2, 2025", en: "February 28, 2025" },
        category: { vi: "Chiếu Sáng", en: "Lighting" },
      },
      {
        title: {
          vi: "Thiết Bị Điện Châu Âu: Tiêu Chuẩn Vàng Cho Biệt Thự",
          en: "European Electrical Equipment: The Gold Standard for Villas",
        },
        excerpt: {
          vi: "Những thương hiệu thiết bị điện hàng đầu châu Âu mang đến tiêu chuẩn kỹ thuật và thẩm mỹ đỉnh cao cho các công trình cao cấp.",
          en: "Leading European electrical brands deliver the highest technical and aesthetic standards for premium projects.",
        },
        date: { vi: "10 Tháng 2, 2025", en: "February 10, 2025" },
        category: { vi: "Thiết Bị Điện", en: "Electrical" },
      },
    ],
  },

  // Contact
  contact: {
    label: { vi: "Liên Hệ", en: "Contact" },
    title: { vi: "Liên Hệ Với Chúng Tôi", en: "Contact Us" },
    subtitle: {
      vi: "Hãy để chúng tôi tư vấn giải pháp thiết bị điện cao cấp phù hợp nhất cho công trình của bạn",
      en: "Let us advise you on the best premium electrical solutions for your project",
    },
    hotline: { vi: "Hotline", en: "Hotline" },
    email: { vi: "Email", en: "Email" },
    address_label: { vi: "Địa Chỉ", en: "Address" },
    address: {
      vi: "6A, hẻm 738, đường Lý Văn Sâm, khu phố 5, Phường Tam Hiệp, Tỉnh Đồng Nai",
      en: "6A, Alley 738, Ly Van Sam Street, Quarter 5, Tam Hiep Ward, Dong Nai Province, Vietnam",
    },
    call_now: { vi: "Gọi Ngay", en: "Call Now" },
    chat_zalo: { vi: "Chat Zalo", en: "Chat Zalo" },
    form_title: { vi: "Yêu Cầu Tư Vấn", en: "Request Consultation" },
    form_name: { vi: "Họ Tên", en: "Full Name" },
    form_phone: { vi: "Điện Thoại", en: "Phone" },
    form_email: { vi: "Email", en: "Email" },
    form_project: { vi: "Loại Công Trình", en: "Project Type" },
    form_project_placeholder: { vi: "Chọn loại công trình", en: "Select project type" },
    form_project_options: {
      "biet-thu-co-dien": { vi: "Biệt thự cổ điển", en: "Classical Villa" },
      "biet-thu-tan-co-dien": { vi: "Biệt thự tân cổ điển", en: "Neoclassical Villa" },
      "lau-dai": { vi: "Lâu đài cổ điển", en: "Classical Castle" },
      villa: { vi: "Villa cao cấp", en: "Premium Villa" },
      resort: { vi: "Resort", en: "Resort" },
      "khach-san": { vi: "Khách sạn", en: "Hotel" },
    },
    form_message: { vi: "Nội Dung Tư Vấn", en: "Message" },
    form_submit: { vi: "Gửi Yêu Cầu Tư Vấn", en: "Submit Consultation Request" },
    form_success_title: { vi: "Cảm ơn bạn đã liên hệ!", en: "Thank you for contacting us!" },
    form_success_desc: {
      vi: "Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.",
      en: "We will respond within 24 business hours.",
    },
  },

  // Footer
  footer: {
    quick_menu: { vi: "Menu Nhanh", en: "Quick Menu" },
    contact_title: { vi: "Liên Hệ", en: "Contact" },
    slogan: { vi: "Luxury · Elegance · Excellence", en: "Luxury · Elegance · Excellence" },
    copyright: {
      vi: "© 2025 CT LUXURY HIGH-END ELECTRICAL EQUIPMENT COMPANY LIMITED. All rights reserved.",
      en: "© 2025 CT LUXURY HIGH-END ELECTRICAL EQUIPMENT COMPANY LIMITED. All rights reserved.",
    },
  },
} as const;

// Helper to get text from a translation entry
export function t(entry: { vi: string; en: string } | string, lang: Language): string {
  if (typeof entry === "string") return entry;
  return entry[lang];
}
