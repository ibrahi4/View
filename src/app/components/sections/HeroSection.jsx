"use client";

import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────
   HeroSection — فيو (View)
   Split composition: content panel ← | → marble image
   RTL · Arabic-first · dark/light CSS vars · staggered entry
───────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      dir="rtl"
      aria-label="القسم الرئيسي"
    >
      {/* Keyframes injected once */}
      <style>{KEYFRAMES}</style>

      {/* ══════════════════════════
          CONTENT PANEL (right/start in RTL)
      ══════════════════════════ */}
      <div
        className="
          relative z-10 flex flex-col justify-center
          w-full lg:w-[54%]
          px-6 sm:px-10 lg:px-16 xl:px-24
          pt-32 pb-16 lg:py-0
          min-h-[68vh] lg:min-h-screen
        "
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Diagonal copper slash bridging the two panels */}
        <span
          className="hidden lg:block absolute -left-10 top-0 bottom-0 w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom right, transparent 49.5%, var(--accent) 49.5%, var(--accent) 51%, transparent 51%)",
            opacity: 0.18,
          }}
          aria-hidden="true"
        />

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-7"
          style={{ animation: "heroUp .65s cubic-bezier(.22,1,.36,1) 0ms both" }}
        >
          <span
            className="block w-10 h-0.5 flex-shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="text-[11px] tracking-[0.3em] uppercase font-medium"
            style={{ color: "var(--accent)", fontFamily: "var(--font-sans,'Tajawal',sans-serif)" }}
          >
            خبراء التشطيبات الفاخرة · المملكة العربية السعودية
          </span>
        </div>z

        {/* Headline */}
        <h1
          className="leading-[1.45] mb-5 font-bold"
          style={{
            animation: "heroUp .65s cubic-bezier(.22,1,.36,1) 85ms both",
            color: "var(--text-primary)",
            fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
            fontSize: "clamp(2.3rem, 4.8vw, 3.5rem)",
          }}
        >
          خبراء تركيب{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span style={{ color: "var(--accent)" }}>السيراميك</span>
            <svg
              className="absolute -bottom-1 right-0 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 3 Q25 0 50 3 Q75 6 100 3 Q125 0 150 3 Q175 6 200 3"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeOpacity="0.42"
              />
            </svg>
          </span>
          <br />
          والرخام
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-md"
          style={{
            animation: "heroUp .65s cubic-bezier(.22,1,.36,1) 170ms both",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
          }}
        >
          نقدم تشطيبات فاخرة للمنازل والفلل
          <br className="hidden sm:block" />
          بأعلى جودة وإتقان يليق بذوقك الرفيع.
        </p>

        {/* CTA Row */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: "heroUp .65s cubic-bezier(.22,1,.36,1) 255ms both" }}
        >
          <PrimaryButton />
          <WAButton />
        </div>

        {/* Trust stats */}
        <div
          className="flex flex-wrap items-center gap-6 mt-12 pt-6"
          style={{
            animation: "heroUp .65s cubic-bezier(.22,1,.36,1) 340ms both",
            borderTop: "1px solid var(--border)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline gap-1.5">
              <span
                className="text-2xl font-bold"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
                }}
              >
                {s.num}
              </span>
              <span
                className="text-xs"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════
          IMAGE PANEL (left/end in RTL)
      ══════════════════════════ */}
      <div className="relative w-full lg:w-[46%] min-h-[52vh] lg:min-h-screen order-first lg:order-last">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&q=85&auto=format&fit=crop"
          alt="سيراميك ورخام فاخر"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 46vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.84) saturate(1.1)" }}
        />

        {/* Edge blend toward content panel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0) 55%, rgba(0,0,0,0.4) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Light-mode warm copper wash */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,106,32,0.07) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />

        {/* Floating quality badge */}
        <div
          className="absolute bottom-8 left-6 sm:left-8 flex items-center gap-3 px-4 sm:px-5 py-3.5"
          style={{
            animation: "heroUp .6s cubic-bezier(.22,1,.36,1) 550ms both",
            background: "rgba(0,0,0,0.52)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <ShieldIcon />
          <div className="flex flex-col leading-none gap-1">
            <span
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
              }}
            >
              جودة مضمونة
            </span>
            <span
              className="text-sm font-semibold"
              style={{
                color: "#fff",
                fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
              }}
            >
              ضمان ٥ سنوات
            </span>
          </div>
        </div>

        {/* Copper slash on image right edge */}
        <span
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom left, transparent 49.5%, var(--accent) 49.5%, var(--accent) 51%, transparent 51%)",
            opacity: 0.2,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-[27%] lg:translate-x-0 flex flex-col items-center gap-2 z-20"
        style={{ animation: "heroUp .6s cubic-bezier(.22,1,.36,1) 620ms both" }}
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
          }}
        >
          اكتشف المزيد
        </span>
        <div className="w-px h-10 overflow-hidden relative">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              animation: "scrollDrop 1.9s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Extracted interactive button components ─── */

function PrimaryButton() {
  return (
    <Link
href="#contact"
      className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 overflow-hidden text-sm font-semibold tracking-wide transition-transform duration-150 active:scale-[.97]"
      style={{
        background: "var(--accent)",
        color: "#fff",
        fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
      }}
    >
      {/* Shine sweep on hover */}
      <span
        className="absolute inset-0 translate-x-full group-hover:-translate-x-0 transition-transform duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.13) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <PriceTagIcon />
      اطلب عرض سعر
    </Link>
  );
}

function WAButton() {
  function enter(e) {
    e.currentTarget.style.borderColor = "#25D366";
    e.currentTarget.style.color = "#25D366";
  }
  function leave(e) {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--text-primary)";
  }

  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[.97]"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
      }}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <WAIcon />
      تواصل عبر واتساب
    </a>
  );
}

/* ─── Data ─── */
const STATS = [
  { num: "+٥٠٠", label: "مشروع منجز" },
  { num: "+١٥",  label: "سنة خبرة"   },
  { num: "٩٨٪",  label: "رضا العملاء" },
];

/* ─── CSS keyframes ─── */
const KEYFRAMES = `
  @keyframes heroUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes scrollDrop {
    0%   { transform: translateY(-100%); opacity: 0; }
    35%  { opacity: 1; }
    100% { transform: translateY(220%);  opacity: 0; }
  }
`;

/* ─── SVG icons ─── */
function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PriceTagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(201,106,32,0.85)" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" strokeWidth="1.8" />
    </svg>
  );
}