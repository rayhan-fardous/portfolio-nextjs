"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  ExternalLink, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers3, 
  Sparkles,
  Code2,
  FolderKanban,
  CheckCircle2
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "@/components/ThemeProvider";

export default function AllProjectsPage() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const gridLine = dark ? "rgba(255, 255, 255, 0.025)" : "rgba(99, 102, 241, 0.06)";
  const glowCyan = dark ? "rgba(6, 182, 212, 0.10)" : "rgba(6, 182, 212, 0.14)";
  const glowIndigo = dark ? "rgba(99, 102, 241, 0.08)" : "rgba(99, 102, 241, 0.10)";

  const cardBg = dark
    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 246, 255, 0.85) 100%)";
  const cardBorder = dark ? "rgba(255, 255, 255, 0.08)" : "rgba(99, 102, 241, 0.14)";
  const cardShadow = dark
    ? "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
    : "0 10px 30px rgba(15, 23, 70, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)";

  const tagBg = dark ? "rgba(6, 182, 212, 0.10)" : "rgba(6, 182, 212, 0.08)";
  const tagBorder = dark ? "rgba(6, 182, 212, 0.22)" : "rgba(6, 182, 212, 0.25)";
  const tagText = dark ? "#67E8F9" : "#0891B2";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState({}); // { slug: index }
  
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);
  
  // Lightbox state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
    caption: ""
  });

  const categories = ["All", "Full-Stack", "E-Commerce", "SaaS", "Developer Tools"];

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleImageSwitch = (slug, index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => ({ ...prev, [slug]: index }));
  };

  const openLightbox = (images, index, title, captions, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      title,
      captions: captions || []
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const nextLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8faff] dark:bg-[#050505] transition-colors duration-500">
      <Navbar />

      <main className="relative grow pt-32 pb-24 px-5 sm:px-8 overflow-hidden">
        {/* Background Aesthetics & Grid Texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundImage: `
                linear-gradient(${gridLine} 1px, transparent 1px),
                linear-gradient(90deg, ${gridLine} 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-20 -left-32 w-[650px] h-[650px] rounded-full transition-all duration-500"
            style={{
              background: `radial-gradient(circle at center, ${glowCyan} 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute bottom-40 -right-32 w-[650px] h-[650px] rounded-full transition-all duration-500"
            style={{
              background: `radial-gradient(circle at center, ${glowIndigo} 0%, transparent 70%)`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header Section */}
          <div
            className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 mb-12 backdrop-blur-md transition-all duration-300"
            style={{
              background: cardBg,
              borderColor: cardBorder,
              boxShadow: cardShadow,
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            
            <div className="relative max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                <FolderKanban size={15} /> Full-Stack Portfolio
              </div>
              <h1 className="font-[var(--font-heading)] text-4xl sm:text-6xl font-bold tracking-tight text-t-primary">
                All Projects &amp; Software Systems
              </h1>
              <p className="mt-4 text-lg text-t-primary leading-relaxed">
                Explore complete full-stack web applications, SaaS dashboards, e-commerce platforms, and real-time developer tools. Each project features multi-image breakdowns of user interfaces and underlying system architecture.
              </p>

              {/* Stats Bar */}
              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[var(--border-subtle)] text-sm">
                <div className="flex items-center gap-2 font-semibold text-t-primary">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>{projects.length} Completed Projects</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-t-primary">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                    <Code2 size={16} />
                  </span>
                  <span>2 Images Per Project</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-t-primary">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/15 text-rose-400">
                    <Sparkles size={16} />
                  </span>
                  <span>Live Demos &amp; Codebases</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div
            className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all duration-300"
            style={{
              background: cardBg,
              borderColor: cardBorder,
              boxShadow: cardShadow,
            }}
          >
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-t-muted" size={18} />
              <input
                type="text"
                placeholder="Search by project name, tech stack (e.g. Next.js, Stripe, Socket.io)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-base)] pl-10 pr-4 py-2.5 text-sm text-t-primary placeholder-t-muted outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-t-muted hover:text-t-primary"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-bold uppercase tracking-wider text-t-muted mr-1 hidden lg:inline flex items-center gap-1">
                <Filter size={13} /> Filter:
              </span>
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                        : "bg-[var(--bg-base)] border border-[var(--border-default)] text-t-secondary hover:text-t-primary hover:border-cyan-500/40"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between text-sm text-t-secondary px-1">
            <p>
              Showing <span className="font-bold text-t-primary">{paginatedProjects.length > 0 ? (currentPage - 1) * projectsPerPage + 1 : 0}-{Math.min(currentPage * projectsPerPage, filteredProjects.length)}</span> of <span className="font-bold text-t-primary">{filteredProjects.length}</span> projects
            </p>
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-xs font-semibold text-cyan-400 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div
              className="rounded-3xl border border-dashed p-16 text-center backdrop-blur-md"
              style={{ background: cardBg, borderColor: cardBorder }}
            >
              <Layers3 className="mx-auto text-t-muted mb-4" size={48} />
              <h3 className="text-xl font-bold text-t-primary">No matching projects found</h3>
              <p className="mt-2 text-sm text-t-secondary max-w-md mx-auto">
                Try adjusting your search terms or selecting a different category filter above.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-cyan-500"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2">
                {paginatedProjects.map((project, idx) => {
                const currentImgIdx = activeImageIndex[project.slug] || 0;
                const activeImgSrc = project.images[currentImgIdx];
                const activeCaption = project.imageCaptions?.[currentImgIdx] || `Screenshot ${currentImgIdx + 1}`;

                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="group flex flex-col overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                    style={{
                      background: cardBg,
                      borderColor: cardBorder,
                      boxShadow: cardShadow,
                    }}
                  >
                    {/* Top Image Preview Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                      <Image
                        src={activeImgSrc}
                        alt={`${project.title} screenshot ${currentImgIdx + 1}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />

                      {/* Accent Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                          {project.year}
                        </span>
                      </div>

                      {/* Expand / Lightbox Trigger Button */}
                      <button
                        onClick={(e) => openLightbox(project.images, currentImgIdx, project.title, project.imageCaptions, e)}
                        className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-black/60 text-white backdrop-blur-md transition hover:bg-cyan-600 hover:scale-110 cursor-pointer"
                        title="View full-screen lightbox"
                      >
                        <Maximize2 size={16} />
                      </button>

                      {/* 2-Image Switcher Tabs */}
                      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-black/60 p-1.5 backdrop-blur-md border border-white/10">
                        {project.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={(e) => handleImageSwitch(project.slug, imgIdx, e)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                              currentImgIdx === imgIdx
                                ? "bg-cyan-500 text-white shadow-sm font-semibold"
                                : "text-zinc-300 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            Image {imgIdx + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Image Caption Bar */}
                    <div className="bg-[var(--bg-elevated)] px-6 py-2 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs text-t-muted font-medium">
                      <span className="truncate">📷 {activeCaption}</span>
                      <span className="shrink-0 text-cyan-400 font-semibold">{project.metric}</span>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="mb-3">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400 mb-1">
                          {project.type}
                        </p>
                        <Link href={`/projects/${project.slug}`}>
                          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-t-primary transition hover:text-cyan-400 flex items-center gap-2 group/title">
                            {project.title}
                            <ArrowUpRight size={20} className="opacity-0 -translate-x-2 transition duration-200 group-hover/title:opacity-100 group-hover/title:translate-x-0 text-cyan-400" />
                          </h2>
                        </Link>
                      </div>

                      <p className="text-sm leading-relaxed text-t-primary mb-6 line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full px-3 py-1 text-xs font-semibold border backdrop-blur-sm transition-colors duration-300"
                              style={{
                                background: tagBg,
                                borderColor: tagBorder,
                                color: tagText,
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between gap-3 pt-2">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-cyan-500 hover:shadow-cyan-600/20"
                          >
                            Read Case Study <ArrowUpRight size={15} />
                          </Link>

                          <div className="flex items-center gap-2">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] text-t-secondary transition hover:text-t-primary hover:border-cyan-500/40"
                                title="View Codebase on GitHub"
                              >
                                <FaGithub size={16} />
                              </a>
                            )}
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] text-t-secondary transition hover:text-cyan-400 hover:border-cyan-500/40"
                                title="Live Demo"
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-base)] text-t-secondary transition hover:text-t-primary hover:border-cyan-500/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition cursor-pointer ${
                        currentPage === i + 1
                          ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                          : "border border-[var(--border-default)] bg-[var(--bg-base)] text-t-secondary hover:text-t-primary hover:border-cyan-500/40"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-base)] text-t-secondary transition hover:text-t-primary hover:border-cyan-500/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-xl"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col max-w-5xl w-full max-h-[90vh] rounded-3xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl"
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div>
                  <h3 className="text-lg font-bold text-white">{lightbox.title}</h3>
                  <p className="text-xs text-zinc-400">
                    Image {lightbox.currentIndex + 1} of {lightbox.images.length}: {lightbox.captions[lightbox.currentIndex]}
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="rounded-full bg-white/10 p-2 text-zinc-300 hover:bg-white/20 hover:text-white transition cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Lightbox Image View */}
              <div className="relative flex-1 min-h-[400px] w-full bg-black flex items-center justify-center">
                <Image
                  src={lightbox.images[lightbox.currentIndex]}
                  alt={lightbox.title}
                  fill
                  className="object-contain p-4"
                  unoptimized
                />

                {/* Prev/Next Navigation Controls */}
                {lightbox.images.length > 1 && (
                  <>
                    <button
                      onClick={prevLightboxImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition hover:bg-cyan-600 cursor-pointer"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextLightboxImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition hover:bg-cyan-600 cursor-pointer"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
