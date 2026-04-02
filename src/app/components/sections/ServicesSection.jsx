"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "ceramic",
    number: "٠١",
    titleAr: "تركيب السيراميك",
    labelEn: "Ceramic Installation",
    descAr:
      "نوفّر تركيب السيراميك بدقة متناهية للأرضيات والجدران، مع مراعاة أدق التفاصيل لضمان نتيجة احترافية تدوم طويلاً.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    href: "/services/ceramic",
  },
  {
    id: "marble",
    number: "٠٢",
    titleAr: "تركيب الرخام",
    labelEn: "Marble Installation",
    descAr:
      "رخام طبيعي فاخر يُجلب من أجود المصادر العالمية، ويُركَّب بيد خبراء متخصصين يحولون مساحتك إلى لوحة فنية خالدة.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop",
    href: "/services/marble",
  },
  {
    id: "sinks",
    number: "٠٣",
    titleAr: "المغاسل الفاخرة",
    labelEn: "Luxury Sinks",
    descAr:
      "تشكيلة حصرية من المغاسل المصنوعة من الرخام والحجر الطبيعي والخزف الفاخر، مصممة لتكون محور جمالي في حمامك.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&auto=format&fit=crop",
    href: "/services/sinks",
  },
  {
    id: "bathrooms",
    number: "٠٤",
    titleAr: "تشطيبات الحمامات",
    labelEn: "Bathroom Finishing",
    descAr:
      "تصميم وتنفيذ متكامل لتشطيبات الحمامات الفاخرة، من اختيار المواد إلى التركيب النهائي بمعايير جودة عالمية.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80&auto=format&fit=crop",
    href: "/services/bathrooms",
  },
  {
    id: "maintenance",
    number: "٠٥",
    titleAr: "صيانة الرخام",
    labelEn: "Marble Maintenance",
    descAr:
      "خدمات صيانة وتلميع الرخام المتخصصة للحفاظ على بريقه الأصلي وجماله الدائم، مع معالجة الخدوش والبقع بأحدث التقنيات.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&auto=format&fit=crop",
    href: "/services/maintenance",
  },
];

/* ─────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      dir="rtl"
      id="services"
      aria-label="خدماتنا"
    >
      <style>{SECTION_STYLES}</style>

      {/* Subtle pattern texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={PATTERN_STYLE} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Section header ── */}
        <SectionHeader />

        {/* ── Services grid ── */}
        <ServicesGrid />

        {/* ── Bottom CTA ── */}
        <BottomCta />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────────────────── */
function SectionHeader() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("sv-visible"); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="sv-item mb-16 md:mb-20 max-w-xl">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-5">
        <span className="block w-10 h-0.5 flex-shrink-0" style={{ background: "var(--accent)" }} />
        <span
          className="text-[10px] tracking-[0.35em] uppercase font-medium"
          style={{ color: "var(--accent)", fontFamily: "var(--font-sans,'Tajawal',sans-serif)" }}
        >
          Services
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold leading-[1.4] mb-4"
        style={{
          color: "var(--text-primary)",
          fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
        }}
      >
        خدماتنا{" "}
        <span style={{ color: "var(--accent)" }}>المتميزة</span>
      </h2>
      <p
        className="text-base leading-relaxed max-w-sm"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
        }}
      >
        نقدم طيفاً متكاملاً من خدمات التركيب والتشطيب لكل ما يتعلق بالسيراميك والرخام.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SERVICES GRID
───────────────────────────────────────────────────────── */
function ServicesGrid() {
  return (
    /*
      Custom grid:
        mobile  → 1 col
        tablet  → 2 col
        desktop → 3 col, 5th card spans 2 cols for editorial asymmetry
    */
    <div className="services-grid">
      {SERVICES.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("sv-visible"), index * 90);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  /* last card (index 4) spans 2 cols on desktop for asymmetry */
  const isWide = index === 4;

  return (
    <article
      ref={ref}
      className={`sv-item service-card group ${isWide ? "service-card--wide" : ""}`}
      style={{ "--card-delay": `${index * 90}ms` }}
    >
      <Link href={service.href} className="block relative h-full" tabIndex={0} aria-label={service.titleAr}>

        {/* ── Image wrapper ── */}
        <div className="service-card__img-wrap">
          <Image
            src={service.image}
            alt={service.titleAr}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            style={{ filter: "brightness(0.78) saturate(1.05)" }}
          />

          {/* Dark overlay, lifts on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Copper overlay wash on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "rgba(201,106,32,0.1)" }}
            aria-hidden="true"
          />
        </div>

        {/* ── Arabic number watermark ── */}
        <span
          className="service-card__number"
          aria-hidden="true"
        >
          {service.number}
        </span>

        {/* ── Card content ── */}
        <div className="service-card__content">

          {/* En label pill */}
          <span className="service-card__label">
            {service.labelEn}
          </span>

          {/* Arabic title */}
          <h3 className="service-card__title">
            {service.titleAr}
          </h3>

          {/* Description — hidden until hover, slides up */}
          <p className="service-card__desc">
            {service.descAr}
          </p>

          {/* CTA arrow row */}
          <div className="service-card__cta">
            <span
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ fontFamily: "var(--font-sans,'Tajawal',sans-serif)", color: "rgba(255,255,255,0.55)" }}
            >
              اعرف المزيد
            </span>
            <ArrowIcon />
          </div>

          {/* Copper line that "draws" on hover */}
          <span className="service-card__copper-line" aria-hidden="true" />
        </div>
      </Link>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────
   BOTTOM CTA
───────────────────────────────────────────────────────── */
function BottomCta() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("sv-visible"); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="sv-item mt-16 flex flex-col sm:flex-row items-center gap-4 justify-center">
      <Link
        href="#contact"
        className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[.97]"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      >
        احصل على استشارة مجانية
        <ArrowIcon color="#fff" />
      </Link>

      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide border transition-all duration-200"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--text-primary)";
        }}
      >
        Portfolio
        <ArrowIcon />
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   ICON
───────────────────────────────────────────────────────── */
function ArrowIcon({ color = "currentColor" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {/* RTL: points left */}
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────── */
const PATTERN_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 0l4 4-4 4-4-4 4-4zm12 12l4 4-4 4-4-4 4-4zM12 12l4 4-4 4-4-4 4-4zM24 24l4 4-4 4-4-4 4-4z' fill='%23c96a20' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
};

const SECTION_STYLES = `
  /* ── Scroll reveal ── */
  .sv-item {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1);
    transition-delay: var(--card-delay, 0ms);
  }
  .sv-item.sv-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Grid layout ── */
  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background-color: var(--border);
  }

  @media (min-width: 640px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    /* 5th card: span 2 cols for editorial weight */
    .service-card--wide {
      grid-column: span 2;
    }
  }

  /* ── Card shell ── */
  .service-card {
    position: relative;
    background: var(--bg-card, var(--bg-secondary));
    overflow: hidden;
    cursor: pointer;
  }

  /* ── Image wrapper ── */
  .service-card__img-wrap {
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
  }

  @media (min-width: 640px) {
    .service-card__img-wrap { height: 300px; }
  }

  @media (min-width: 1024px) {
    .service-card__img-wrap { height: 340px; }
    .service-card--wide .service-card__img-wrap { height: 340px; }
  }

  /* ── Arabic number watermark ── */
  .service-card__number {
    position: absolute;
    top: 1rem;
    left: 1.25rem;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
    color: rgba(255,255,255,0.08);
    font-family: var(--font-arabic, 'Noto Naskh Arabic', serif);
    pointer-events: none;
    user-select: none;
    transition: color 0.4s ease;
    z-index: 2;
  }
  .service-card:hover .service-card__number {
    color: rgba(201,106,32,0.22);
  }

  /* ── Content block ── */
  .service-card__content {
    position: absolute;
    bottom: 0; right: 0; left: 0;
    padding: 1.25rem 1.5rem 1.5rem;
    z-index: 3;
    overflow: hidden;
  }

  /* ── En label pill ── */
  .service-card__label {
    display: inline-block;
    font-size: 0.6rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    font-family: var(--font-sans, 'Tajawal', sans-serif);
    color: rgba(255,255,255,0.45);
    margin-bottom: 0.4rem;
  }

  /* ── Arabic title ── */
  .service-card__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 0 0;
    line-height: 1.4;
    font-family: var(--font-arabic, 'Noto Naskh Arabic', serif);
    transition: transform 0.4s cubic-bezier(.22,1,.36,1);
  }
  .service-card:hover .service-card__title {
    transform: translateY(-4px);
  }

  /* ── Description — slides up from below on hover ── */
  .service-card__desc {
    font-size: 0.82rem;
    line-height: 1.65;
    color: rgba(255,255,255,0.72);
    margin: 0;
    font-family: var(--font-sans, 'Tajawal', sans-serif);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateY(10px);
    transition:
      max-height 0.45s cubic-bezier(.22,1,.36,1),
      opacity 0.4s ease,
      transform 0.45s cubic-bezier(.22,1,.36,1);
    transition-delay: 0.03s;
  }
  .service-card:hover .service-card__desc {
    max-height: 120px;
    opacity: 1;
    transform: translateY(0);
    margin-top: 0.6rem;
  }

  /* ── CTA row ── */
  .service-card__cta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.4s cubic-bezier(.22,1,.36,1) 0.08s,
      opacity 0.35s ease 0.08s,
      margin-top 0.4s ease;
  }
  .service-card:hover .service-card__cta {
    max-height: 40px;
    opacity: 1;
    margin-top: 0.75rem;
  }

  /* ── Copper line that "draws" across the bottom ── */
  .service-card__copper-line {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(to left, #c96a20, #e4863a);
    transition: width 0.5s cubic-bezier(.22,1,.36,1);
    display: block;
  }
  .service-card:hover .service-card__copper-line {
    width: 100%;
  }

  /* ── Focus visible ring ── */
  .service-card a:focus-visible {
    outline: 2px solid var(--accent, #c96a20);
    outline-offset: -2px;
  }
`;