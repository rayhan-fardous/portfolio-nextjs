"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderKanban, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useTheme } from "@/components/ThemeProvider";

export default function Projects() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleImageSwitch = (slug, index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => ({ ...prev, [slug]: index }));
  };

  /* ── Theme Tokens ─────────────────────────────────── */
  const t = {
    bg: dark ? "#050505" : "#f8faff",
    gridLine: dark ? "rgba(255, 255, 255, 0.025)" : "rgba(99, 102, 241, 0.06)",
    glowCyan: dark ? "rgba(6, 182, 212, 0.10)" : "rgba(6, 182, 212, 0.14)",
    glowIndigo: dark ? "rgba(99, 102, 241, 0.08)" : "rgba(99, 102, 241, 0.10)",

    badgeBorder: dark ? "rgba(6, 182, 212, 0.25)" : "rgba(6, 182, 212, 0.35)",
    badgeBg: dark ? "rgba(6, 182, 212, 0.08)" : "rgba(6, 182, 212, 0.10)",
    badgeText: "#06B6D4",

    heading: dark ? "#FFFFFF" : "#0C0E1F",
    subheading: dark ? "#A1A1AA" : "#475569",
    body: dark ? "#A1A1AA" : "#64748b",

    cardBg: dark
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 246, 255, 0.85) 100%)",
    cardBorder: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(99, 102, 241, 0.14)",
    cardShadow: dark
      ? "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
      : "0 10px 30px rgba(15, 23, 70, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",

    tagBg: dark ? "rgba(6, 182, 212, 0.10)" : "rgba(6, 182, 212, 0.08)",
    tagBorder: dark ? "rgba(6, 182, 212, 0.22)" : "rgba(6, 182, 212, 0.25)",
    tagText: dark ? "#67E8F9" : "#0891B2",
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-6 sm:px-8 overflow-hidden transition-colors duration-500"
      style={{ background: t.bg }}
    >
      {/* ── Background Aesthetics & Grid Texture ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundImage: `
              linear-gradient(${t.gridLine} 1px, transparent 1px),
              linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Soft Cyan Radial Glow — Top Left */}
        <div
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${t.glowCyan} 0%, transparent 70%)`,
          }}
        />

        {/* Soft Indigo Radial Glow — Bottom Right */}
        <div
          className="absolute -bottom-40 -right-32 w-[650px] h-[650px] rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${t.glowIndigo} 0%, transparent 70%)`,
          }}
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-500"
              style={{ borderColor: t.badgeBorder, background: t.badgeBg }}
            >
              <FolderKanban size={14} className="text-cyan-400" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: t.badgeText }}
              >
                Selected Work
              </span>
            </div>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight transition-colors duration-500"
            style={{ color: t.heading }}
          >
            Projects built to{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22D3EE 0%, #06B6D4 50%, #818CF8 100%)",
              }}
            >
              move ideas forward.
            </span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500 max-w-2xl mx-auto"
            style={{ color: t.subheading }}
          >
            A selection of full-stack products where thoughtful interfaces meet reliable systems.
          </p>

          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500 hover:scale-105"
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
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
                  style={{
                    background: t.cardBg,
                    borderColor: t.cardBorder,
                    boxShadow: t.cardShadow,
                  }}
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
                      <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
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
                              ? "bg-cyan-500 text-white"
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
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                        {project.type}
                      </p>
                      <h3 className="font-[var(--font-heading)] text-2xl font-bold text-t-primary">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className="mt-1 shrink-0 text-t-muted transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
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
                        className="rounded-full px-2.5 py-1 text-xs font-semibold border backdrop-blur-sm transition-colors duration-300"
                        style={{
                          background: t.tagBg,
                          borderColor: t.tagBorder,
                          color: t.tagText,
                        }}
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
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border p-8 backdrop-blur-md transition-all duration-300"
          style={{
            background: t.cardBg,
            borderColor: t.cardBorder,
            boxShadow: t.cardShadow,
          }}
        >
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
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-600/20 transition hover:bg-cyan-500 hover:scale-105"
          >
            Explore All Projects <Sparkles size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
