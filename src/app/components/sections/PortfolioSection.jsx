"use client";

import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard.jsx";

const filters = ["الكل", "رخام", "سيراميك", "أحواض"];

export default function PortfolioSection() {
  const [active, setActive] = useState("الكل");

  const filtered =
    active === "الكل" ? projects : projects.filter((p) => p.type === active);

  return (
    <section className="py-20 px-4 md:px-8" id="projects" dir="rtl">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="w-14 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent mb-3" />
          <p className="text-xs font-bold tracking-widest text-yellow-500 uppercase mb-2">
            Portfolio — معرض الأعمال
          </p>
          <h2 className="text-4xl font-black text-neutral-900 dark:text-neutral-100">
            مشاريع نفتخر بإنجازها
          </h2>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            أكثر من عقد من الخبرة في تشطيبات الرخام والسيراميك والأحواض الفاخرة في المنطقة الشرقية.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200
                ${active === f
                  ? "bg-yellow-500 border-yellow-500 text-neutral-900"
                  : "bg-white dark:bg-neutral-900 border-black/10 dark:border-white/10 text-neutral-500 dark:text-neutral-400 hover:border-yellow-500 hover:text-yellow-500"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-neutral-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm font-medium">لا توجد مشاريع في هذه الفئة</p>
          </div>
        )}

      </div>
    </section>
  );
}