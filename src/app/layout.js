import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import "./globals.css";

// Fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

// SEO
export const metadata = {
  title: "Marmar | Premium Ceramic & Marble",
  description: "Luxury surfaces for exceptional spaces.",
};

export default function RootLayout({ children, params }) {
  const lang = params?.lang ?? "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className="scroll-smooth">
      <body
        className={`
          ${cormorant.variable} ${dmSans.variable}
          font-body antialiased min-h-screen flex flex-col
          bg-[var(--bg-primary)] text-[var(--text-primary)]
        `}
      >
        <ThemeProvider>
          {/* Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50
              bg-[var(--accent)] text-white text-xs px-4 py-2 uppercase"
          >
            Skip to content
          </a>

          <Navbar lang={lang} />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}