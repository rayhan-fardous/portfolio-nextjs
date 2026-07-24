"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderKanban, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleImageSwitch = (slug, index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => ({ ...prev, [slug]: index }));
  };

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-400">
              <FolderKanban size={16} /> Selected Work
            </div>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-t-primary sm:text-5xl">
              Projects built to move ideas forward.
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-sm text-base leading-7 text-t-secondary md:text-right">
              A selection of full-stack products where thoughtful interfaces meet reliable systems.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:scale-105"
            >
              View Full List of Projects ({projects.length}) <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const currentImgIdx = activeImageIndex[project.slug] || 0;
            const activeImgSrc = project.images[currentImgIdx];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  {/* Image Display */}
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950">
                    <Image
                      src={activeImgSrc}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Image Switcher Pill */}
                    <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 rounded-full bg-black/70 p-1 backdrop-blur-md border border-white/10">
                      {project.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={(e) => handleImageSwitch(project.slug, imgIdx, e)}
                          className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full transition-all ${
                            currentImgIdx === imgIdx
                              ? "bg-indigo-500 text-white"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Img {imgIdx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-400">
                        {project.type}
                      </p>
                      <h3 className="font-[var(--font-heading)] text-2xl font-bold text-t-primary">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className="mt-1 shrink-0 text-t-muted transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-indigo-400"
                      size={22}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-t-secondary line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs font-medium text-t-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Footer Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-card)] p-8 shadow-lg backdrop-blur-md">
          <div>
            <h3 className="font-[var(--font-heading)] text-2xl font-bold text-t-primary">
              Want to see all projects with full case studies &amp; live demos?
            </h3>
            <p className="mt-1 text-sm text-t-secondary">
              Browse through all full-stack applications with dual screenshot galleries and interactive tech stack filters.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:bg-indigo-500 hover:scale-105"
          >
            Explore All Projects <Sparkles size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
