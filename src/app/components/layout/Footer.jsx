import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   FOOTER — فيو (View)
   Premium Saudi construction company footer
   ▸ RTL Arabic layout · dark/light CSS tokens
   ▸ 4-column responsive grid
   ▸ Copper accent system
   ▸ Geometric Islamic-inspired background texture
═══════════════════════════════════════════════════════ */

/* ── Data ──────────────────────────────────────────── */
const COMPANY = {
  nameAr:    "فيو",
  nameEn:    "View",
  tagline:   "Marble · Ceramic · Luxury Sinks",
  desc:      "متخصصون في تركيب السيراميك والرخام والمغاسل الفاخرة للمشاريع السكنية والتجارية في المملكة العربية السعودية بأعلى معايير الجودة.",
  phone:     "+966 50 000 0000",
  whatsapp:  "https://wa.me/966500000000",
  tel:       "tel:+966500000000",
  email:     "info@view.sa",
  address:   "الدمام، المنطقة الشرقية",
  country:   "المملكة العربية السعودية",
};

const NAV_LINKS = [
  { label: "الرئيسية",         href: "/" },
  { label: "خدماتنا",         href: "/services",  en: "Services" },
  { label: "معرض الأعمال",     href: "/portfolio", en: "Portfolio" },
  { label: "من نحن",           href: "/about" },
  { label: "تواصل معنا",       href: "/contact",  en: "Contact" },
];

const SERVICES = [
  { label: "تركيب السيراميك",   href: "/services/ceramic" },
  { label: "تركيب الرخام",      href: "/services/marble" },
  { label: "المغاسل الفاخرة",   href: "/services/sinks" },
  { label: "تشطيبات الحمامات",  href: "/services/bathrooms" },
  { label: "صيانة الرخام",      href: "/services/maintenance" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href:  "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href:  "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href:  "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href:  COMPANY.whatsapp,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════ */
export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--footer-bg, var(--bg-secondary))" }}
      dir="rtl"
      aria-label="تذييل الصفحة"
    >
      <style>{FOOTER_CSS}</style>

      {/* ── Top copper gradient bar ── */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(to left, transparent 0%, var(--accent) 30%, #e4863a 60%, var(--accent) 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Geometric background texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={PATTERN_STYLE}
        aria-hidden="true"
      />

      {/* ════════════════════════════════
          MAIN GRID
      ════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 pb-10">
        <div className="footer-grid">

          {/* ── Col 1: Brand ── */}
          <div className="footer-brand">
            {/* Logo mark */}
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group" aria-label="فيو — الصفحة الرئيسية">
              <LogoMark />
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-arabic,'Noto Naskh Arabic',serif)",
                  }}
                >
                  {COMPANY.nameAr}
                </span>
                <span
                  className="text-[9px] tracking-[0.28em] uppercase mt-0.5"
                  style={{
                    color: "var(--text-muted, #9a8f84)",
                    fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
                  }}
                >
                  {COMPANY.tagline}
                </span>
              </div>
            </Link>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-6 max-w-[280px]"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
              }}
            >
              {COMPANY.desc}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2" role="list" aria-label="وسائل التواصل الاجتماعي">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="footer-social-icon"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <FooterColumn titleAr="روابط سريعة" titleEn="Quick Links">
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {NAV_LINKS.map(({ label, href, en }) => (
                <li key={href}>
                  <Link href={href} className="footer-link group">
                    <span className="footer-link-arrow" aria-hidden="true">←</span>
                    <span>
                      {label}
                      {en && (
                        <span
                          className="text-[10px] mr-1.5 italic opacity-50"
                          style={{ fontFamily: "var(--font-display,'Playfair Display',serif)" }}
                        >
                          {en}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* ── Col 3: Services ── */}
          <FooterColumn titleAr="خدماتنا" titleEn="Services">
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {SERVICES.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="footer-link group">
                    <span className="footer-link-arrow" aria-hidden="true">←</span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* ── Col 4: Contact ── */}
          <FooterColumn titleAr="تواصل معنا" titleEn="Contact">
            <ul className="flex flex-col gap-4 list-none p-0 m-0">

              {/* Phone */}
              <li>
                <a href={COMPANY.tel} className="footer-contact-row group">
                  <span className="footer-contact-icon"><PhoneIcon /></span>
                  <div className="flex flex-col gap-0.5">
                    <span className="footer-contact-label">هاتف · Phone</span>
                    <span className="footer-contact-value" dir="ltr">{COMPANY.phone}</span>
                  </div>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-row group"
                >
                  <span className="footer-contact-icon footer-contact-icon--wa"><WAIcon /></span>
                  <div className="flex flex-col gap-0.5">
                    <span className="footer-contact-label">واتساب · WhatsApp</span>
                    <span className="footer-contact-value" dir="ltr">{COMPANY.phone}</span>
                  </div>
                </a>
              </li>

              {/* Location */}
              <li>
                <div className="footer-contact-row">
                  <span className="footer-contact-icon"><PinIcon /></span>
                  <div className="flex flex-col gap-0.5">
                    <span className="footer-contact-label">الموقع · Location</span>
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
                      }}
                    >
                      {COMPANY.address}
                      <br />
                      <span style={{ color: "var(--text-muted, #9a8f84)", fontSize: "0.78rem" }}>
                        {COMPANY.country}
                      </span>
                    </span>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li>
                <a href={`mailto:${COMPANY.email}`} className="footer-contact-row group">
                  <span className="footer-contact-icon"><MailIcon /></span>
                  <div className="flex flex-col gap-0.5">
                    <span className="footer-contact-label">بريد إلكتروني · Email</span>
                    <span
                      className="footer-contact-value"
                      style={{ fontFamily: "monospace", fontSize: "0.82rem" }}
                    >
                      {COMPANY.email}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </div>

      {/* ════════════════════════════════
          BOTTOM BAR
      ════════════════════════════════ */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* Copper micro-line */}
        <div
          className="h-px w-full opacity-30"
          style={{ background: "linear-gradient(to left, transparent, var(--accent), transparent)" }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p
            className="text-xs text-center sm:text-start"
            style={{
              color: "var(--text-muted, #9a8f84)",
              fontFamily: "var(--font-sans,'Tajawal',sans-serif)",
            }}
          >
            <span dir="ltr" className="inline-block ml-1">© 2026 {COMPANY.nameEn}.</span>
            جميع الحقوق محفوظة ·{" "}
            <span dir="ltr" className="inline-block">All rights reserved.</span>
          </p>

          {/* Legal links */}
          <div
            className="flex items-center gap-4 text-xs"
            style={{ fontFamily: "var(--font-sans,'Tajawal',sans-serif)" }}
          >
            {[
              { label: "سياسة الخصوصية", href: "/privacy" },
              { label: "الشروط والأحكام",  href: "/terms" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="footer-legal-link"
              >
                {label}
              </Link>
            ))}

            {/* Flag */}
            <span
              className="text-base select-none"
              aria-label="المملكة العربية السعودية"
              title="Saudi Arabia"
            >
              🇸🇦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════ */

function FooterColumn({ titleAr, titleEn, children }) {
  return (
    <div>
      <h3 className="footer-col-heading">
        {titleAr}
        <span
          className="block text-[9px] tracking-[0.3em] uppercase mt-0.5 italic"
          style={{
            color: "var(--text-muted, #9a8f84)",
            fontFamily: "var(--font-display,'Playfair Display',serif)",
          }}
        >
          {titleEn}
        </span>
      </h3>
      {children}
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="flex-shrink-0">
      <rect x="4" y="4" width="28" height="28" rx="2" stroke="var(--accent)" strokeWidth="1.4" fill="none" />
      <rect
        x="10" y="10" width="16" height="16" rx="1"
        fill="var(--accent)" fillOpacity="0.12"
        stroke="var(--accent)" strokeWidth="0.9"
        transform="rotate(45 18 18)"
      />
      <text
        x="18" y="23"
        textAnchor="middle"
        fill="var(--accent)"
        fontSize="13"
        fontFamily="Noto Naskh Arabic, serif"
        fontWeight="700"
      >
        ف
      </text>
    </svg>
  );
}

/* ── Icons ── */
function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════ */
const PATTERN_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 4l6 6-6 6-6-6 6-6zm14 14l6 6-6 6-6-6 6-6zM14 18l6 6-6 6-6-6 6-6zM28 32l6 6-6 6-6-6 6-6z' fill='%23c96a20' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
};

const FOOTER_CSS = `
  /* ── Grid layout ── */
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--border);
  }
  @media (min-width: 640px) {
    .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
    .footer-brand { grid-column: span 2; }
  }
  @media (min-width: 1024px) {
    .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.4fr; gap: 2rem; }
    .footer-brand { grid-column: span 1; }
  }

  /* ── Column heading ── */
  .footer-col-heading {
    font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
    font-size: .95rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 1.1rem;
    padding-bottom: .6rem;
    border-bottom: 1px solid var(--border);
    position: relative;
  }
  .footer-col-heading::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0;
    width: 2rem;
    height: 2px;
    background: var(--accent);
  }

  /* ── Nav link ── */
  .footer-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-sans,'Tajawal',sans-serif);
    font-size: .88rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color .2s;
  }
  .footer-link:hover { color: var(--accent); }
  .footer-link-arrow {
    display: inline-block;
    font-size: .7rem;
    color: var(--accent);
    opacity: 0;
    transform: translateX(4px);
    transition: opacity .2s, transform .2s;
  }
  .footer-link:hover .footer-link-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* ── Contact row ── */
  .footer-contact-row {
    display: flex;
    align-items: flex-start;
    gap: 11px;
    text-decoration: none;
  }
  .footer-contact-icon {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    transition: background .2s, border-color .2s;
  }
  a.footer-contact-row:hover .footer-contact-icon {
    background: color-mix(in srgb, var(--accent) 16%, transparent);
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  }
  .footer-contact-icon--wa { color: #25D366; background: rgba(37,211,102,.08); border-color: rgba(37,211,102,.2); }
  a.footer-contact-row:hover .footer-contact-icon--wa { background: rgba(37,211,102,.16); }

  .footer-contact-label {
    font-family: var(--font-sans,'Tajawal',sans-serif);
    font-size: .6rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--accent);
    opacity: .8;
  }
  .footer-contact-value {
    font-family: var(--font-sans,'Tajawal',sans-serif);
    font-size: .88rem;
    color: var(--text-secondary);
    transition: color .2s;
  }
  a.footer-contact-row:hover .footer-contact-value { color: var(--text-primary); }

  /* ── Social icon ── */
  .footer-social-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    color: var(--text-muted, #9a8f84);
    text-decoration: none;
    transition: color .25s, border-color .25s, background .25s;
  }
  .footer-social-icon:hover {
    color: var(--accent);
    border-color: color-mix(in srgb, var(--accent) 45%, transparent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }

  /* ── Legal link ── */
  .footer-legal-link {
    color: var(--text-muted, #9a8f84);
    text-decoration: none;
    font-size: .72rem;
    transition: color .2s;
  }
  .footer-legal-link:hover { color: var(--accent); }
`;