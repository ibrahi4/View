"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS, RATING_SUMMARY } from "../../data/testimonials";

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS SECTION — فيو (View)
   ▸ Auto-scrolling rating ticker
   ▸ Masonry-feel responsive grid
   ▸ Star rating component (full + half)
   ▸ Copper-accent card design
   ▸ IntersectionObserver scroll reveals
   ▸ Dark / light CSS token support
═══════════════════════════════════════════════════════ */

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--bg-secondary)" }}
      dir="rtl"
      aria-label="آراء العملاء"
    >
      <style>{CSS}</style>

      {/* Subtle pattern backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={PATTERN_STYLE}
        aria-hidden="true"
      />

      {/* Large decorative Arabic quote watermark */}
      <span
        className="absolute -top-8 right-8 text-[18rem] leading-none font-bold pointer-events-none select-none opacity-[0.03]"
        style={{
          color: "var(--accent)",
          fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Section header ── */}
        <SectionHeader />

        {/* ── Rating ticker ── */}
        <RatingTicker />

        {/* ── Cards grid ── */}
        <TestimonialsGrid />

        {/* ── Bottom summary ── */}
        <BottomSummary />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION HEADER
═══════════════════════════════════════════════════════ */
function SectionHeader() {
  const ref = useRef(null);
  useScrollReveal(ref, 0);

  return (
    <div ref={ref} className="tm-reveal mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-9 h-0.5 flex-shrink-0" style={{ background: "var(--accent)" }} />
          <span className="tm-label-en">Testimonials</span>
        </div>
        <h2 className="tm-heading">
          ماذا يقول{" "}
          <span style={{ color: "var(--accent)" }}>عملاؤنا</span>
        </h2>
        <p className="tm-body mt-3 max-w-md">
          آراء حقيقية من عملاء حقيقيين وثقوا في فيو لتحويل مساحاتهم.
        </p>
      </div>

      {/* Overall rating badge */}
      <div
        className="flex-shrink-0 flex flex-col items-center gap-1 px-8 py-5 self-start sm:self-auto"
        style={{ border: "1px solid var(--border)", background: "var(--bg-card, var(--bg-primary))" }}
      >
        <span
          className="text-4xl font-bold"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
          }}
        >
          {RATING_SUMMARY.average}
        </span>
        <StarRow rating={RATING_SUMMARY.average} size={16} />
        <span className="tm-label-en mt-1" style={{ fontSize: "0.58rem" }}>
          {RATING_SUMMARY.total} {RATING_SUMMARY.label}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   INFINITE RATING TICKER
═══════════════════════════════════════════════════════ */
const TICKER_ITEMS = [
  "تركيب رخام فاخر ★★★★★",
  "المغاسل الفاخرة ★★★★★",
  "تشطيبات الحمامات ★★★★★",
  "تركيب سيراميك ★★★★★",
  "صيانة الرخام ★★★★★",
  "خدمة استثنائية ★★★★★",
  "جودة لا مثيل لها ★★★★★",
];

function RatingTicker() {
  /* Duplicate the array so the seamless loop works */
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="tm-ticker-outer mb-14"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      aria-hidden="true"
    >
      <div className="tm-ticker-track">
        {items.map((item, i) => (
          <div key={i} className="tm-ticker-item">
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="whitespace-nowrap text-xs font-medium"
              style={{
                color: "var(--text-muted, #9a8f84)",
                fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
                letterSpacing: "0.05em",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS GRID
═══════════════════════════════════════════════════════ */
function TestimonialsGrid() {
  return (
    <div className="tm-grid">
      {TESTIMONIALS.map((t, i) => (
        <TestimonialCard key={t.id} data={t} index={i} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIAL CARD
═══════════════════════════════════════════════════════ */
function TestimonialCard({ data, index }) {
  const ref = useRef(null);
  useScrollReveal(ref, index * 75);

  return (
    <article
      ref={ref}
      className={`tm-reveal tm-card ${data.featured ? "tm-card--featured" : ""}`}
      style={{ "--card-delay": `${index * 75}ms` }}
      aria-label={`تقييم من ${data.name}`}
    >
      {/* Decorative quotation mark watermark */}
      <span className="tm-quote-mark" aria-hidden="true">&ldquo;</span>

      {/* ── Stars ── */}
      <div className="mb-4">
        <StarRow rating={data.rating} size={15} />
      </div>

      {/* ── Review text ── */}
      <blockquote
        className="tm-review-text"
        cite={`تقييم ${data.name} من ${data.city}`}
      >
        {data.review}
      </blockquote>

      {/* ── Divider ── */}
      <div
        className="my-5 h-px"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />

      {/* ── Customer info ── */}
      <footer className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar initials */}
          <div
            className="tm-avatar"
            aria-hidden="true"
          >
            {data.name.charAt(0)}
          </div>

          <div className="flex flex-col gap-0.5">
            <span
              className="text-sm font-semibold"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
              }}
            >
              {data.name}
            </span>
            <div className="flex items-center gap-1.5">
              <PinIcon />
              <span className="text-xs" style={{ color: "var(--text-muted, #9a8f84)", fontFamily: "var(--font-sans,'Tajawal',sans-serif)" }}>
                {data.city}
              </span>
            </div>
          </div>
        </div>

        {/* Service tag */}
        <div className="flex flex-col items-end gap-0.5">
          <span className="tm-service-tag">{data.service}</span>
          <span
            className="text-[10px]"
            style={{
              color: "var(--text-muted, #9a8f84)",
              fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
            }}
          >
            {data.date}
          </span>
        </div>
      </footer>

      {/* Featured badge */}
      {data.featured && (
        <span className="tm-featured-badge" aria-label="تقييم مميز">
          <StarFilledIcon size={9} />
          مميز
        </span>
      )}

      {/* Copper left-border accent (animates on hover) */}
      <span className="tm-border-accent" aria-hidden="true" />
    </article>
  );
}

/* ═══════════════════════════════════════════════════════
   BOTTOM SUMMARY BAR
═══════════════════════════════════════════════════════ */
function BottomSummary() {
  const ref = useRef(null);
  useScrollReveal(ref, 200);

  const stats = [
    { value: RATING_SUMMARY.total, label: "تقييم موثّق" },
    { value: "٤.٩ / ٥",           label: "متوسط التقييم" },
    { value: "١٠٠٪",              label: "يوصون بنا" },
  ];

  return (
    <div
      ref={ref}
      className="tm-reveal mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px"
      style={{ "--card-delay": "200ms", background: "var(--border)" }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-1 py-8 px-6"
          style={{ background: "var(--bg-secondary)" }}
        >
          <span
            className="text-3xl font-bold"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
            }}
          >
            {s.value}
          </span>
          <span
            className="text-xs tracking-wide"
            style={{
              color: "var(--text-muted, #9a8f84)",
              fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STAR ROW COMPONENT
═══════════════════════════════════════════════════════ */
function StarRow({ rating, size = 14 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<StarFilledIcon key={i} size={size} />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalfIcon key={i} size={size} />);
    } else {
      stars.push(<StarEmptyIcon key={i} size={size} />);
    }
  }
  return (
    <div className="flex items-center gap-0.5" aria-label={`تقييم ${rating} من ٥ نجوم`} role="img">
      {stars}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
═══════════════════════════════════════════════════════ */
function useScrollReveal(ref, delayMs = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("tm-visible"), delayMs);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delayMs]);
}

/* ═══════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════ */
function StarFilledIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="#f59e0b"
        stroke="#f59e0b"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarHalfIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="half-grad">
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#half-grad)"
        stroke="#f59e0b"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarEmptyIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="none"
        stroke="var(--text-muted, #9a8f84)"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" style={{ color: "var(--accent)" }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   STATIC ASSETS
═══════════════════════════════════════════════════════ */
const PATTERN_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 0l4 4-4 4-4-4 4-4zm12 12l4 4-4 4-4-4 4-4zM12 12l4 4-4 4-4-4 4-4zM24 24l4 4-4 4-4-4 4-4z' fill='%23c96a20' fill-opacity='1'/%3E%3C/svg%3E")`,
};

/* ═══════════════════════════════════════════════════════
   ALL COMPONENT STYLES
═══════════════════════════════════════════════════════ */
const CSS = `
/* ── Scroll reveal ── */
.tm-reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1);
  transition-delay: var(--card-delay, 0ms);
}
.tm-reveal.tm-visible { opacity: 1; transform: none; }

/* ── Typography tokens ── */
.tm-heading {
  font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.35;
  color: var(--text-primary);
  margin: 0;
}
.tm-body {
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: .92rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}
.tm-label-en {
  font-size: .62rem;
  letter-spacing: .32em;
  text-transform: uppercase;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  color: var(--accent);
  font-weight: 500;
}

/* ── Ticker ── */
.tm-ticker-outer {
  overflow: hidden;
  padding: 10px 0;
  position: relative;
}
.tm-ticker-outer::before,
.tm-ticker-outer::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.tm-ticker-outer::before {
  right: 0;
  background: linear-gradient(to left, var(--bg-secondary), transparent);
}
.tm-ticker-outer::after {
  left: 0;
  background: linear-gradient(to right, var(--bg-secondary), transparent);
}

.tm-ticker-track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
  animation: ticker 28s linear infinite;
}
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.tm-ticker-track:hover { animation-play-state: paused; }

.tm-ticker-item {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

/* ── Grid ── */
.tm-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: var(--border);
}
@media (min-width: 640px) {
  .tm-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .tm-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── Card ── */
.tm-card {
  position: relative;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg-card, var(--bg-primary));
  transition: background .3s;
}
.tm-card:hover {
  background: color-mix(in srgb, var(--bg-card, var(--bg-primary)) 95%, var(--accent) 5%);
}

/* Featured card: slightly warmer bg */
.tm-card--featured {
  background: color-mix(in srgb, var(--bg-card, var(--bg-primary)) 97%, var(--accent) 3%);
}

/* Left copper border accent */
.tm-border-accent {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--accent), transparent);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform .45s cubic-bezier(.22,1,.36,1);
}
.tm-card:hover .tm-border-accent { transform: scaleY(1); }

/* Quotation watermark */
.tm-quote-mark {
  position: absolute;
  top: -10px;
  left: 14px;
  font-size: 7rem;
  line-height: 1;
  font-weight: 700;
  color: var(--accent);
  opacity: .07;
  pointer-events: none;
  user-select: none;
  font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
  transition: opacity .3s;
}
.tm-card:hover .tm-quote-mark { opacity: .12; }

/* Review text */
.tm-review-text {
  font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
  font-size: .95rem;
  line-height: 1.85;
  color: var(--text-secondary);
  margin: 0;
  flex: 1;
  position: relative;
  z-index: 1;
}

/* Avatar circle */
.tm-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .95rem;
  font-weight: 700;
  flex-shrink: 0;
  background: color-mix(in srgb, var(--accent) 15%, transparent);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
}

/* Service tag pill */
.tm-service-tag {
  font-size: .65rem;
  letter-spacing: .06em;
  padding: 2px 8px;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  white-space: nowrap;
}

/* Featured badge */
.tm-featured-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: .58rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 3px 8px;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-weight: 600;
}
`;