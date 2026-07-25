"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import {
  ArrowUp,
  Mail,
  FileText,
  Heart,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rayhan-fardous",
    icon: FaGithub,
    tooltip: "github.com/rayhan-fardous",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rayhanfardous/",
    icon: FaLinkedin,
    tooltip: "linkedin.com/in/rayhanfardous",
  },
  {
    label: "Email",
    href: "mailto:rayhan.fardous55@gmail.com",
    icon: Mail,
    tooltip: "rayhan.fardous55@gmail.com",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1b3j6DEKZRIz9qoXtoiQ65MhQW9kO5ZLC/view?usp=sharing",
    icon: FileText,
    tooltip: "Download / Request Resume",
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Match the subtle grid opacity of Hero, About, and Skills sections
  const gridLine = isDark ? "rgba(255, 255, 255, 0.025)" : "rgba(99, 102, 241, 0.06)";

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const currentYear = new Date().getFullYear();

  // Scroll listener for Back-to-Top floating button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (targetId === "home" || !targetId) {
        scrollToTop();
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className={`relative overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDark
          ? "bg-[#050505] text-white border-t border-white/[0.08]"
          : "bg-[#f8faff] text-slate-900 border-t border-slate-200/80"
      }`}
    >
      {/* ── Background Grid & Radial Cyan Glow (Matching Hero/Skills subtle texture) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${gridLine} 1px, transparent 1px),
              linear-gradient(90deg, ${gridLine} 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Soft Radial Glow Orbs */}
        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[140px] bg-cyan-500/10 pointer-events-none" />
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-[400px] h-[250px] rounded-full blur-[130px] bg-cyan-400/10 pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── Top Section (Multi-column Desktop / Stacked Mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-14"
        >
          {/* Left Column: Personal Branding & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="inline-flex items-center gap-3 group w-fit"
            >
              <div
                className={`relative w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 border p-1 ${
                  isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white shadow-xs"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="RayHan Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span
                className={`text-xl font-extrabold tracking-tight transition-colors ${
                  isDark
                    ? "text-white group-hover:text-cyan-400"
                    : "text-slate-900 group-hover:text-cyan-600"
                }`}
              >
                Md Rayhan Ul Fardous
              </span>
            </Link>

            <p
              className={`text-sm leading-relaxed max-w-md ${
                isDark ? "text-zinc-300" : "text-slate-700"
              }`}
            >
              Full Stack Developer passionate about building modern, scalable, and user-focused web applications with clean architecture and exceptional design.
            </p>

            {/* Availability Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold w-fit backdrop-blur-md ${
                isDark
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-emerald-200 bg-emerald-50 text-emerald-800"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Opportunities</span>
            </div>
          </div>

          {/* Center Column: Quick Navigation */}
          <div className="lg:col-span-4 sm:col-span-6 flex flex-col gap-4">
            <h3
              className={`text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 ${
                isDark ? "text-cyan-400" : "text-cyan-700"
              }`}
            >
              <Sparkles size={14} />
              Quick Navigation
            </h3>
            <nav className="grid grid-cols-2 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {quickLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className={`group relative text-sm font-medium transition-colors duration-300 w-fit py-0.5 ${
                    isDark
                      ? "text-zinc-400 hover:text-cyan-300"
                      : "text-slate-700 hover:text-cyan-600"
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isDark ? "bg-cyan-400" : "bg-cyan-600"
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column: Connect & Social Links */}
          <div className="lg:col-span-3 sm:col-span-6 flex flex-col gap-4">
            <h3
              className={`text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-cyan-400" : "text-cyan-700"
              }`}
            >
              Connect
            </h3>
            <p className={`text-xs ${isDark ? "text-zinc-300" : "text-slate-600"}`}>
              Let&apos;s build something great together. Feel free to reach out via social media or email.
            </p>
            <div className="flex gap-3 pt-1">
              {socialLinks.map(({ label, href, icon: Icon, tooltip }) => (
                <div key={label} className="relative">
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    onMouseEnter={() => setHoveredSocial(label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
                      isDark
                        ? "border-white/10 bg-white/[0.05] text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                        : "border-slate-200 bg-white text-slate-700 hover:text-cyan-600 hover:border-cyan-500/50 hover:bg-cyan-50 shadow-xs"
                    }`}
                  >
                    <Icon size={19} />
                  </motion.a>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredSocial === label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5 }}
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-medium rounded-md shadow-xl whitespace-nowrap z-20 pointer-events-none ${
                          isDark
                            ? "text-white bg-[#18181b] border border-white/10"
                            : "text-white bg-slate-900 border border-slate-800"
                        }`}
                      >
                        {tooltip}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Middle Gradient Divider ── */}
        <div
          className={`h-px w-full bg-gradient-to-r my-2 ${
            isDark
              ? "from-transparent via-white/10 to-transparent"
              : "from-transparent via-slate-300 to-transparent"
          }`}
        />

        {/* ── Bottom Section (Copyright & Credits) ── */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDark ? "text-zinc-400" : "text-slate-600"
          }`}
        >
          {/* Left: Copyright & Tech Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} Md Rayhan Ul Fardous. All rights reserved.</p>
            <span className={`hidden sm:inline ${isDark ? "text-zinc-700" : "text-slate-300"}`}>•</span>
            <p className={`font-medium ${isDark ? "text-zinc-300" : "text-slate-800"}`}>
              Built with Next.js • React • Tailwind CSS
            </p>
          </div>

          {/* Right: Made with heart */}
          <div className={`flex items-center gap-1.5 font-medium ${isDark ? "text-zinc-300" : "text-slate-800"}`}>
            <span>Made with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>in Bangladesh</span>
          </div>
        </div>
      </div>

      {/* ── Floating Back to Top Button ── */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
              isDark
                ? "border-cyan-500/30 bg-[#111111]/90 text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
                : "border-cyan-500/40 bg-white/95 text-cyan-600 shadow-lg shadow-slate-300/50 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
            }`}
            title="Back to Top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
