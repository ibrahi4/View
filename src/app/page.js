import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import Testimonials from "./components/sections/Testimonials";

import Link from "next/link";
import ContactSection from "./components/sections/ContactSection";

export const metadata = {
  title: "فيو | سيراميك ورخام فاخر في السعودية والخليج",
  description:
    "فيو تقدم أرقى أنواع السيراميك والرخام الإيطالي والأحواض الفاخرة مع خدمات التوريد والتركيب الاحترافية في المملكة العربية السعودية.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  // غيّرها لاحقًا حسب نظام اللغة (next-intl أو غيره)
  const lang = "ar";

  return (
    <>
      {/* Hero */}
      <HeroSection lang={lang} />

      {/* Services - خدماتنا */}
      <ServicesSection lang={lang} />

      {/* Portfolio - معرض الأعمال */}
      <PortfolioSection lang={lang} />

  
      <ContactSection lang={lang} />
          {/* Testimonials - آراء العملاء */}
      <Testimonials lang={lang} />
     
    </>
  );
}