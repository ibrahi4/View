import Image from "next/image";
import { typeConfig } from "../../data/projects";

export default function ProjectCard({ project }) {
  const config = typeConfig[project.type];

  return (
    <article className="group relative bg-white dark:bg-neutral-900 border border-black/8 dark:border-white/8 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300">
      
      {/* Gold top line on hover */}
      <span className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Year badge */}
        <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded bg-black/50 text-white backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Type badge */}
        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${config.color}`}>
          {config.icon} {project.type}
        </span>

        {/* Title */}
        <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug mb-4 line-clamp-2">
          {project.title}
        </h3>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-black/8 dark:border-white/8">
          <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {project.location}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">{project.area}</span>
        </div>
      </div>
    </article>
  );
}