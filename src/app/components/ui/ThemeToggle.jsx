"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button 
      onClick={toggle}
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={isDark ? "الوضع الفاتح" : "الوضع الداكن"}
      className={`
        relative w-9 h-9 flex items-center justify-center rounded-full
        border transition-all duration-300 group
        border-token hover:border-copper-500
        ${className}
      `}
      style={{ borderColor: "var(--border)" }}
    >
      {/* Sun icon — shown in dark mode */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300
          ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"}`}
        aria-hidden="true"
      >
        <SunIcon />
      </span>

      {/* Moon icon — shown in light mode */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300
          ${!isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}
        aria-hidden="true"
      >
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}