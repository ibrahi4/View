"use client";

import { useState, useId, useRef, useEffect } from "react";

/* ═══════════════════════════════════════════════════════
   CONTACT SECTION — فيو (View)
   ▸ Split layout: info sidebar + contact form
   ▸ Floating labels, per-field live validation
   ▸ Google Maps embed (Dammam)
   ▸ WhatsApp FAB (fixed, pulsing)
   ▸ Dark / light CSS token support
═══════════════════════════════════════════════════════ */

const PHONE        = "+966 50 000 0000";
const WHATSAPP_URL = "https://wa.me/966500000000";
const EMAIL        = "info@view.sa";
const ADDRESS_AR   = "الدمام، المنطقة الشرقية، المملكة العربية السعودية";
/* Google Maps embed for Dammam city centre */
const MAP_EMBED    =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115944.7929658!2d49.9227!3d26.3927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a3e40c64a669%3A0xaa97bcb15edb7f3!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000";

/* ───────────────────────────────────────────────────── */
export default function ContactSection() {
  return (
    <>
      <style>{CSS}</style>

      <section
        id="contact"
        className="relative overflow-hidden py-0"
        style={{ background: "var(--bg-primary)" }}
        dir="rtl"
        aria-label="تواصل معنا"
      >
        {/* Geometric texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={PATTERN} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[700px]">
          <InfoSidebar />
          <FormPanel />
        </div>
      </section>

      <WhatsAppFab />
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   INFO SIDEBAR
═══════════════════════════════════════════════════════ */
function InfoSidebar() {
  const ref = useRef(null);
  useScrollReveal(ref, 0);

  return (
    <aside
      ref={ref}
      className="sv-item flex flex-col gap-0 lg:w-[42%] p-8 sm:p-12 lg:p-14 xl:p-16"
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* ── Eyebrow ── */}
      <div className="flex items-center gap-3 mb-6">
        <span className="block w-9 h-0.5 flex-shrink-0" style={{ background: "var(--accent)" }} />
        <span className="ct-label-en">Contact</span>
      </div>

      {/* ── Heading ── */}
      <h2 className="ct-heading mb-3">
        تواصل{" "}
        <span style={{ color: "var(--accent)" }}>معنا</span>
      </h2>
      <p className="ct-body mb-10">
        فريقنا جاهز للإجابة على استفساراتك وتقديم أفضل الحلول لمشروعك.
      </p>

      {/* ── Contact details ── */}
      <div className="flex flex-col gap-5 mb-10">
        {[
          {
            icon: <PhoneIcon />,
            labelEn: "Phone",
            value: PHONE,
            href: `tel:${PHONE.replace(/\s/g, "")}`,
          },
          {
            icon: <MailIcon />,
            labelEn: "Email",
            value: EMAIL,
            href: `mailto:${EMAIL}`,
          },
          {
            icon: <PinIcon />,
            labelEn: "Location",
            value: ADDRESS_AR,
            href: null,
          },
        ].map(({ icon, labelEn, value, href }) => (
          <div key={labelEn} className="flex items-start gap-4">
            <span className="ct-icon-wrap" aria-hidden="true">{icon}</span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="ct-label-en" style={{ fontSize: "0.58rem" }}>{labelEn}</span>
              {href ? (
                <a
                  href={href}
                  className="ct-contact-link truncate"
                >
                  {value}
                </a>
              ) : (
                <span className="ct-body" style={{ fontSize: "0.88rem" }}>{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── WhatsApp CTA ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ct-wa-btn mb-10"
      >
        <WAIconLarge />
        تواصل عبر واتساب الآن
        <ArrowLeftIcon />
      </a>

      {/* ── Google Maps embed ── */}
      <div className="ct-map-wrap">
        <div className="ct-map-label">
          <PinIcon size={11} />
          <span>الدمام، المنطقة الشرقية</span>
        </div>
        <iframe
          src={MAP_EMBED}
          title="موقع فيو على الخريطة — الدمام"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="ct-map-iframe"
        />
        {/* copper corner accents */}
        <CornerAccents />
      </div>
    </aside>
  );
}

/* ═══════════════════════════════════════════════════════
   FORM PANEL
═══════════════════════════════════════════════════════ */
function FormPanel() {
  const ref = useRef(null);
  useScrollReveal(ref, 120);

  const [values, setValues]   = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (vals) => {
    const e = {};
    if (!vals.name.trim())
      e.name = "الاسم الكريم مطلوب";
    else if (vals.name.trim().length < 2)
      e.name = "الاسم يجب أن يكون حرفين على الأقل";

    if (!vals.phone.trim())
      e.phone = "رقم الهاتف مطلوب";
    else if (!/^[\d\s\+\-\(\)]{7,16}$/.test(vals.phone.trim()))
      e.phone = "تأكد من صحة رقم الهاتف";

    if (!vals.message.trim())
      e.message = "الرسالة مطلوبة";
    else if (vals.message.trim().length < 10)
      e.message = "الرسالة يجب أن تكون ١٠ أحرف على الأقل";

    return e;
  };

  const handleChange = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setValues({ name: "", phone: "", message: "" });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <div
      ref={ref}
      className="sv-item flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-14 xl:p-16"
      style={{ "--card-delay": "120ms" }}
    >
      {/* Panel header */}
      <div className="mb-10">
        <h3 className="ct-form-heading">أرسل لنا رسالة</h3>
        <p className="ct-body mt-2" style={{ fontSize: "0.88rem" }}>
          وسنتواصل معك في أقرب وقت ممكن.
        </p>
      </div>

      {submitted ? (
        <SuccessState onReset={handleReset} />
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="نموذج التواصل">
          <div className="flex flex-col gap-6">

            {/* الاسم */}
            <FloatingField
              id="f-name"
              label="الاسم الكريم"
              labelEn="Full Name"
              type="text"
              value={values.name}
              error={touched.name ? errors.name : ""}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              autoComplete="name"
              required
            />

            {/* رقم الهاتف */}
            <FloatingField
              id="f-phone"
              label="رقم الهاتف"
              labelEn="Phone Number"
              type="tel"
              value={values.phone}
              error={touched.phone ? errors.phone : ""}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              autoComplete="tel"
              required
              inputMode="tel"
              dir="ltr"
              placeholder="+966 5X XXX XXXX"
            />

            {/* الرسالة */}
            <FloatingField
              id="f-message"
              label="الرسالة"
              labelEn="Message"
              type="textarea"
              value={values.message}
              error={touched.message ? errors.message : ""}
              onChange={handleChange("message")}
              onBlur={handleBlur("message")}
              required
              rows={4}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="ct-submit-btn"
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <SpinnerIcon />
                  جارٍ الإرسال...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  <SendIcon />
                  إرسال الرسالة
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   FLOATING FIELD
═══════════════════════════════════════════════════════ */
function FloatingField({
  id, label, labelEn, type, value, error, onChange, onBlur,
  autoComplete, required, inputMode, dir, placeholder, rows,
}) {
  const isTextarea = type === "textarea";
  const isFilled   = value.length > 0;
  const isOk       = isFilled && !error;

  const sharedProps = {
    id,
    value,
    onChange,
    onBlur,
    autoComplete,
    required,
    inputMode,
    dir,
    "aria-describedby": error ? `${id}-err` : undefined,
    "aria-invalid": !!error,
    className: `ct-field ${error ? "ct-field--error" : ""} ${isOk ? "ct-field--ok" : ""}`,
    placeholder: placeholder ?? " ",
  };

  return (
    <div className="ct-field-wrap">
      {isTextarea ? (
        <textarea {...sharedProps} rows={rows ?? 4} style={{ resize: "none" }} />
      ) : (
        <input {...sharedProps} type={type} />
      )}

      {/* Floating label */}
      <label htmlFor={id} className={`ct-float-label ${isFilled ? "ct-float-label--filled" : ""}`}>
        <span>{label}</span>
        <span className="ct-float-label-en"> · {labelEn}</span>
      </label>

      {/* Focus underline */}
      <span className="ct-focus-line" aria-hidden="true" />

      {/* Validation state icon */}
      <span className="ct-field-icon" aria-hidden="true">
        {isOk && <OkIcon />}
        {error && <ErrIcon />}
      </span>

      {/* Error message */}
      {error && (
        <p id={`${id}-err`} className="ct-error-msg" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SUCCESS STATE
═══════════════════════════════════════════════════════ */
function SuccessState({ onReset }) {
  return (
    <div className="ct-success" role="status" aria-live="polite">
      <span className="ct-success-icon" aria-hidden="true">
        <CheckBigIcon />
      </span>
      <h4 className="ct-form-heading" style={{ fontSize: "1.4rem" }}>
        تم الإرسال بنجاح! 🎉
      </h4>
      <p className="ct-body mt-2 mb-6" style={{ textAlign: "center" }}>
        شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت.
      </p>
      <button onClick={onReset} className="ct-reset-btn">
        إرسال رسالة أخرى
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   WHATSAPP FAB (fixed, portal-level)
═══════════════════════════════════════════════════════ */
function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="ct-wa-fab"
    >
      <span className="ct-wa-fab-pulse" aria-hidden="true" />
      <WAIconLarge size={26} />
    </a>
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
          setTimeout(() => el.classList.add("sv-visible"), delayMs);
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
   CORNER ACCENTS DECORATION
═══════════════════════════════════════════════════════ */
function CornerAccents() {
  const corners = [
    "top-0 right-0 border-t border-r",
    "top-0 left-0 border-t border-l",
    "bottom-0 right-0 border-b border-r",
    "bottom-0 left-0 border-b border-l",
  ];
  return (
    <>
      {corners.map((cls) => (
        <span
          key={cls}
          className={`absolute ${cls} w-5 h-5 pointer-events-none`}
          style={{ borderColor: "var(--accent)", opacity: 0.55 }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════ */
const ic = (d, opts = {}) => {
  const Icon = (size = 16) =>
    <svg width={size} height={size} viewBox="0 0 24 24" fill={opts.fill ? "currentColor" : "none"} stroke={opts.fill ? "none" : "currentColor"} strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d={d} /></svg>;
  Icon.displayName = "Icon";
  return Icon;
};

function PhoneIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );
}

function MailIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function PinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WAIconLarge({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="ct-spin" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function OkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ErrIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CheckBigIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" strokeWidth="2.2" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
const PATTERN = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 0l4 4-4 4-4-4 4-4zm12 12l4 4-4 4-4-4 4-4zM12 12l4 4-4 4-4-4 4-4zM24 24l4 4-4 4-4-4 4-4z' fill='%23c96a20' fill-opacity='1'/%3E%3C/svg%3E")`,
};

/* ═══════════════════════════════════════════════════════
   ALL COMPONENT CSS (scoped via class names)
═══════════════════════════════════════════════════════ */
const CSS = `
/* ── Scroll reveal ── */
.sv-item {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1);
  transition-delay: var(--card-delay, 0ms);
}
.sv-item.sv-visible { opacity: 1; transform: none; }

/* ── Typography ── */
.ct-heading {
  font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.35;
  color: var(--text-primary);
  margin: 0;
}
.ct-form-heading {
  font-family: var(--font-arabic,'Noto Naskh Arabic',serif);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.ct-body {
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}
.ct-label-en {
  font-size: 0.62rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  color: var(--accent);
  font-weight: 500;
}

/* ── Icon wrap ── */
.ct-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent);
  border: 1px solid var(--border);
  background: var(--bg-primary);
}

/* ── Contact link ── */
.ct-contact-link {
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.9rem;
  color: var(--text-primary);
  text-decoration: none;
  transition: color .2s;
}
.ct-contact-link:hover { color: var(--accent); }

/* ── WhatsApp inline CTA ── */
.ct-wa-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: #25D366;
  color: #fff;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity .2s, transform .15s;
}
.ct-wa-btn:hover { opacity: .9; transform: translateX(-3px); }

/* ── Map wrapper ── */
.ct-map-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.ct-map-label {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  font-size: 11px;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  background: var(--bg-primary);
  border: 1px solid var(--border);
  color: var(--accent);
}
.ct-map-iframe { display: block; width: 100%; height: 100%; }

/* ── Floating field ── */
.ct-field-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}

.ct-field {
  width: 100%;
  padding: 20px 16px 8px;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  outline: none;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.95rem;
  color: var(--text-primary);
  transition: border-color .25s;
  appearance: none;
}
.ct-field:focus { border-color: var(--accent); }
.ct-field::placeholder { opacity: 0; }

/* Error / ok states */
.ct-field--error { border-color: #ef4444 !important; }
.ct-field--ok    { border-color: #22c55e; }

/* Copper animated underline on focus */
.ct-focus-line {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(to left, var(--accent), #e4863a);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform .35s cubic-bezier(.22,1,.36,1);
  pointer-events: none;
}
.ct-field:focus ~ .ct-focus-line { transform: scaleX(1); }

/* Floating label */
.ct-float-label {
  position: absolute;
  top: 14px;
  right: 16px;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.9rem;
  color: var(--text-muted, #9a8f84);
  pointer-events: none;
  transition: top .22s, font-size .22s, color .22s;
  white-space: nowrap;
}
.ct-float-label-en {
  font-size: 0.68em;
  opacity: 0.6;
  font-style: italic;
}
.ct-field:focus + .ct-float-label,
.ct-float-label--filled {
  top: 5px;
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}

/* Field icon (ok / err) */
.ct-field-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
textarea ~ .ct-field-icon { top: 20px; transform: none; }

/* Error message */
.ct-error-msg {
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.72rem;
  color: #ef4444;
  margin: 4px 16px 0;
}

/* ── Submit button ── */
.ct-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 20px;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: opacity .2s, transform .15s;
  position: relative;
  overflow: hidden;
}
.ct-submit-btn:hover:not(:disabled) { opacity: .88; }
.ct-submit-btn:active:not(:disabled) { transform: scale(.98); }
.ct-submit-btn:disabled { cursor: not-allowed; opacity: .75; }

/* ── Success ── */
.ct-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
}
.ct-success-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22c55e;
  background: rgba(34,197,94,.1);
  border: 1px solid rgba(34,197,94,.25);
  margin-bottom: 1.25rem;
}

/* ── Reset btn ── */
.ct-reset-btn {
  padding: 10px 24px;
  border: 1px solid var(--border);
  background: transparent;
  font-family: var(--font-sans,'Tajawal',sans-serif);
  font-size: 0.88rem;
  color: var(--text-primary);
  cursor: pointer;
  transition: border-color .2s, color .2s;
}
.ct-reset-btn:hover { border-color: var(--accent); color: var(--accent); }

/* ── WhatsApp FAB ── */
.ct-wa-fab {
  position: fixed;
  bottom: 28px;
  left: 28px;
  z-index: 100;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 18px rgba(37,211,102,.4);
  text-decoration: none;
  transition: transform .2s, box-shadow .2s;
}
.ct-wa-fab:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(37,211,102,.55); }

/* Pulse ring */
.ct-wa-fab-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #25D366;
  animation: fabPulse 2.2s ease-out infinite;
  pointer-events: none;
}
@keyframes fabPulse {
  0%   { transform: scale(1);   opacity: .7; }
  70%  { transform: scale(1.6); opacity: 0;  }
  100% { transform: scale(1.6); opacity: 0;  }
}

/* ── Spinner ── */
@keyframes spin { to { transform: rotate(360deg); } }
.ct-spin { animation: spin .9s linear infinite; }
`;