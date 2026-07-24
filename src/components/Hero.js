"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Download, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "@/components/ThemeProvider";

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const socialLinks = [
  { label: "GitHub",    href: "https://github.com/rayhan-fardous",           icon: FaGithub },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/rayhanfardous/",  icon: FaLinkedin },
  { label: "Email",     href: "mailto:rayhan.fardous55@gmail.com",            icon: Mail },
  { label: "WhatsApp",  href: "https://wa.me/+8801234567890",                 icon: MessageCircle },
];

const words = ["Full Stack Developer", "MERN Stack Engineer", "Next.js Specialist", "UI/UX Enthusiast"];

/* ─── Mouse Parallax Hook ─────────────────────────────── */
function useMouseParallax(strength = 0.012) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 18 });
  const springY = useSpring(y, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const handle = (e) => {
      x.set((e.clientX - window.innerWidth  / 2) * strength);
      y.set((e.clientY - window.innerHeight / 2) * strength);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [x, y, strength]);

  return { springX, springY };
}

/* ─── Floating Badge ──────────────────────────────────── */
function FloatingBadge({ children, style, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────── */
export default function Hero() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const { springX, springY } = useMouseParallax(0.012);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, []);

  /* ── Theme tokens ─────────────────────────────────── */
  const t = {
    /* backgrounds */
    sectionBg:    dark ? "#050505"                     : "#f8faff",
    gridLine:     dark ? "rgba(255,255,255,0.025)"     : "rgba(99,102,241,0.06)",
    glowA:        dark ? "rgba(6,182,212,0.12)"        : "rgba(6,182,212,0.18)",
    glowB:        dark ? "rgba(99,102,241,0.10)"       : "rgba(99,102,241,0.12)",
    glowC:        dark ? "rgba(6,182,212,0.04)"        : "rgba(6,182,212,0.07)",

    /* availability badge */
    badgeBorder:  dark ? "rgba(255,255,255,0.08)"      : "rgba(99,102,241,0.15)",
    badgeBg:      dark ? "rgba(255,255,255,0.04)"      : "rgba(99,102,241,0.06)",
    badgeText:    dark ? "#d4d4d8"                     : "#4338ca",

    /* typography */
    labelColor:   dark ? "#52525b"                     : "#94a3b8",
    nameColor:    dark ? "#ffffff"                     : "#0c0e1f",
    headlineColor:dark ? "#a1a1aa"                     : "#334155",
    emphasisColor:dark ? "#ffffff"                     : "#0c0e1f",
    bodyColor:    dark ? "#71717a"                     : "#64748b",

    /* tech pills (dark / light) */
    pills: dark
      ? [
          { label: "Next.js",    bg: "rgba(255,255,255,0.07)",  border: "rgba(255,255,255,0.12)", color: "#e4e4e7" },
          { label: "React",      bg: "rgba(6,182,212,0.12)",    border: "rgba(6,182,212,0.30)",  color: "#67e8f9" },
          { label: "JavaScript", bg: "rgba(250,204,21,0.08)",   border: "rgba(250,204,21,0.22)", color: "#fde68a" },
        ]
      : [
          { label: "Next.js",    bg: "rgba(12,14,31,0.07)",     border: "rgba(12,14,31,0.14)",   color: "#0c0e1f" },
          { label: "React",      bg: "rgba(6,182,212,0.10)",    border: "rgba(6,182,212,0.25)",  color: "#0891b2" },
          { label: "JavaScript", bg: "rgba(202,138,4,0.10)",    border: "rgba(202,138,4,0.22)",  color: "#b45309" },
        ],

    /* buttons */
    primaryBtnBg:       "linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)",
    primaryBtnShadow:   "0 4px 20px rgba(6,182,212,0.25)",
    secondaryBtnBg:     dark ? "rgba(255,255,255,0.04)"     : "rgba(12,14,31,0.05)",
    secondaryBtnBorder: dark ? "rgba(255,255,255,0.10)"     : "rgba(12,14,31,0.14)",
    secondaryBtnColor:  dark ? "#e4e4e7"                    : "#0c0e1f",

    /* social icons */
    socialBg:     dark ? "rgba(255,255,255,0.04)"           : "rgba(12,14,31,0.05)",
    socialBorder: dark ? "rgba(255,255,255,0.09)"           : "rgba(12,14,31,0.12)",
    socialColor:  dark ? "#a1a1aa"                          : "#3c4275",

    /* "find me on" label */
    findMeColor:  dark ? "#52525b"                          : "#94a3b8",

    /* scroll indicator */
    scrollColor:  dark ? "#52525b"                          : "#94a3b8",

    /* portrait card */
    cardBg:       dark ? "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)"
                       : "linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(240,245,255,0.85) 100%)",
    cardBorder:   dark ? "rgba(255,255,255,0.10)"           : "rgba(99,102,241,0.18)",
    cardShadow:   dark ? "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)"
                       : "0 32px 80px rgba(15,23,70,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
    overlayGrad:  dark ? "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 100%)"
                       : "linear-gradient(to top, rgba(240,245,255,0.6) 0%, transparent 100%)",

    /* floating badges */
    badgeDarkBg:       dark ? "rgba(17,17,17,0.88)"         : "rgba(255,255,255,0.92)",
    badgeDarkBorder:   dark ? "rgba(255,255,255,0.10)"      : "rgba(99,102,241,0.18)",
    badgeDarkShadow:   dark ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(15,23,70,0.10)",
    badgeDarkText:     dark ? "#ffffff"                     : "#0c0e1f",
    badgeDarkSubText:  dark ? "#a1a1aa"                     : "#64748b",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      style={{ background: t.sectionBg }}
    >
      {/* ── Background ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundImage: `
              linear-gradient(${t.gridLine} 1px, transparent 1px),
              linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow A — top-left */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full transition-all duration-500"
          style={{ background: `radial-gradient(circle at center, ${t.glowA} 0%, transparent 70%)` }}
        />
        {/* Glow B — bottom-right */}
        <div
          className="absolute -bottom-64 -right-32 w-[600px] h-[600px] rounded-full transition-all duration-500"
          style={{ background: `radial-gradient(circle at center, ${t.glowB} 0%, transparent 70%)` }}
        />
        {/* Center spotlight */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]"
          style={{ background: `radial-gradient(ellipse at center, ${t.glowC} 0%, transparent 70%)` }}
        />
      </div>

      {/* ── Content ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Text ──────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} custom={0}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-500"
                style={{ borderColor: t.badgeBorder, background: t.badgeBg }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span
                  className="text-xs font-medium tracking-wide transition-colors duration-500"
                  style={{ color: t.badgeText }}
                >
                  Available for Work
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp} custom={0.05} className="space-y-2">
              <p
                className="text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-500"
                style={{ color: t.labelColor }}
              >
                Hi, I&apos;m
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.05] transition-colors duration-500"
                style={{ color: t.nameColor }}
              >
                Md Rayhan
                <span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #22D3EE 0%, #06B6D4 50%, #818cf8 100%)" }}
                >
                  ul Fardous
                </span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div variants={fadeUp} custom={0.1} className="h-8 flex items-center">
              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-cyan-500/50" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-base sm:text-lg font-medium text-cyan-500 tracking-wide"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              custom={0.15}
              className="text-xl sm:text-2xl font-semibold leading-relaxed max-w-xl transition-colors duration-500"
              style={{ color: t.headlineColor }}
            >
              Building{" "}
              <span style={{ color: t.emphasisColor }}>fast, scalable</span> &amp;{" "}
              <span style={{ color: t.emphasisColor }}>beautiful</span> web experiences
              that users love.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-base leading-relaxed max-w-lg transition-colors duration-500"
              style={{ color: t.bodyColor }}
            >
              Specializing in modern web technologies — from pixel-perfect UIs to
              robust backends. I transform complex ideas into clean, high-performance
              digital products.
            </motion.p>

            {/* Tech pills */}
            <motion.div variants={fadeUp} custom={0.25} className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {t.pills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm tracking-wide transition-colors duration-500"
                  style={{ background: p.bg, borderColor: p.border, color: p.color }}
                >
                  {p.label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href="/#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                style={{ background: t.primaryBtnBg, boxShadow: t.primaryBtnShadow }}
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1b3j6DEKZRIz9qoXtoiQ65MhQW9kO5ZLC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                style={{
                  background: t.secondaryBtnBg,
                  borderColor: t.secondaryBtnBorder,
                  color: t.secondaryBtnColor,
                }}
              >
                <Download size={16} className="group-hover:text-cyan-500 transition-colors duration-300" />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} custom={0.35} className="flex items-center gap-3">
              <span
                className="text-xs tracking-wider uppercase transition-colors duration-500"
                style={{ color: t.findMeColor }}
              >
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-500 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                    style={{
                      background: t.socialBg,
                      borderColor: t.socialBorder,
                      color: t.socialColor,
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Portrait ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500"
              style={{
                background: `radial-gradient(ellipse at center, ${t.glowA} 0%, transparent 70%)`,
                filter: "blur(30px)",
                transform: "scale(1.15)",
              }}
            />

            {/* Parallax wrapper */}
            <motion.div style={{ x: springX, y: springY }} className="relative">
              {/* Floating animation */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[300px] h-[360px] sm:w-[340px] sm:h-[410px] md:w-[380px] md:h-[460px]"
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-3 rounded-3xl pointer-events-none transition-all duration-500"
                  style={{
                    background: dark
                      ? "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(99,102,241,0.15), transparent)"
                      : "linear-gradient(135deg, rgba(6,182,212,0.20), rgba(99,102,241,0.12), transparent)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Glass card */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden border transition-all duration-500"
                  style={{
                    background: t.cardBg,
                    borderColor: t.cardBorder,
                    boxShadow: t.cardShadow,
                  }}
                >
                  <Image
                    src="/rayhan.jpg"
                    alt="Md Rayhan Ul Fardous — Full Stack Developer"
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, 380px"
                    priority
                    className="object-cover object-top"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none transition-all duration-500"
                    style={{ background: t.overlayGrad }}
                  />
                </div>

                {/* ── Floating Badges ──────────────────── */}

                {/* Top-left: Open to Work */}
                <FloatingBadge
                  delay={0.7}
                  className="absolute -top-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-xl transition-all duration-500"
                  style={{
                    background: t.badgeDarkBg,
                    borderColor: t.badgeDarkBorder,
                    boxShadow: t.badgeDarkShadow,
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold whitespace-nowrap transition-colors duration-500" style={{ color: t.badgeDarkText }}>
                    Open to Work
                  </span>
                </FloatingBadge>

                {/* Top-right: Next.js Dev */}
                <FloatingBadge
                  delay={0.85}
                  className="absolute -top-3 -right-4 flex items-center gap-1.5 px-3 py-2 rounded-xl border backdrop-blur-xl"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    borderColor: "rgba(6,182,212,0.30)",
                    boxShadow: "0 8px 24px rgba(6,182,212,0.15)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
                    <path d="M7.5 0L9.39 5.48H15L10.31 8.87L12.19 14.35L7.5 10.96L2.81 14.35L4.69 8.87L0 5.48H5.61L7.5 0Z" fill="#22D3EE" />
                  </svg>
                  <span className="text-xs font-semibold text-cyan-400 whitespace-nowrap">Next.js Dev</span>
                </FloatingBadge>

                {/* Bottom-left: Years */}
                <FloatingBadge
                  delay={1.0}
                  className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-xl transition-all duration-500"
                  style={{
                    background: t.badgeDarkBg,
                    borderColor: t.badgeDarkBorder,
                    boxShadow: t.badgeDarkShadow,
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #0891B2, #22D3EE)" }}
                  >
                    <span className="text-[10px] font-black text-white">3+</span>
                  </div>
                  <div>
                    <p className="text-[10px] leading-none transition-colors duration-500" style={{ color: t.badgeDarkSubText }}>Years</p>
                    <p className="text-xs font-semibold leading-tight transition-colors duration-500" style={{ color: t.badgeDarkText }}>Learning</p>
                  </div>
                </FloatingBadge>

                {/* Bottom-right: React */}
                <FloatingBadge
                  delay={1.1}
                  className="absolute -bottom-3 -right-4 flex items-center gap-1.5 px-3 py-2 rounded-xl border backdrop-blur-xl"
                  style={{
                    background: "rgba(6,182,212,0.08)",
                    borderColor: "rgba(6,182,212,0.20)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                >
                  <svg className="w-3.5 h-3.5 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zm12.675 7.228l-.133-.468a23.456 23.456 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.337 15.459l-.133-.467c-.076-.27-.149-.546-.207-.827a24.765 24.765 0 0 1-.56-3.756 24.633 24.633 0 0 1 .56-3.756c.065-.295.134-.563.207-.827l.133-.467.467.133c1.069.305 2.15.774 3.162 1.392l.176.112-.066.202a24.1 24.1 0 0 0-1.01 3.234 24.1 24.1 0 0 0 1.01 3.234l.066.202-.176.112c-1.012.618-2.093 1.087-3.162 1.392l-.467.133zm.37-2.022c.72-.235 1.44-.54 2.143-.906A25.29 25.29 0 0 1 7 11.996a25.29 25.29 0 0 1 .85-2.535 15.35 15.35 0 0 0-2.143-.906 22.497 22.497 0 0 0-.41 3.441 22.497 22.497 0 0 0 .41 3.442zm13.254.018l-.471-.133c-1.07-.305-2.15-.774-3.163-1.392l-.176-.112.066-.202a24.1 24.1 0 0 0 1.01-3.234 24.1 24.1 0 0 0-1.01-3.234l-.066-.202.176-.112c1.012-.618 2.093-1.087 3.163-1.392l.471-.133.133.467c.078.27.149.544.208.827.183.896.299 1.82.56 3.756-.261 1.936-.377 2.86-.56 3.756-.065.295-.134.563-.208.827l-.133.467zm-.37-2.022a22.497 22.497 0 0 0 .41-3.442 22.497 22.497 0 0 0-.41-3.441c-.72.235-1.44.54-2.143.906A25.29 25.29 0 0 1 17 11.996a25.29 25.29 0 0 1-.85 2.535c.702.366 1.423.671 2.143.906zM12 18.51l-.176-.107c-1.014-.617-1.895-1.365-2.545-2.163l-.299-.366.298-.366a20.58 20.58 0 0 0 1.494-2.673 20.58 20.58 0 0 0 1.001-3.839 20.58 20.58 0 0 0-1.001-3.839 20.58 20.58 0 0 0-1.494-2.673L9.98 6.112l.299-.366c.65-.798 1.531-1.546 2.545-2.163l.176-.107.176.107c1.014.617 1.895 1.365 2.545 2.163l.299.366-.298.366a20.58 20.58 0 0 0-1.494 2.673 20.58 20.58 0 0 0-1.001 3.839 20.58 20.58 0 0 0 1.001 3.839 20.58 20.58 0 0 0 1.494 2.673l.298.366-.299.366c-.65.798-1.531 1.546-2.545 2.163L12 18.51z"/>
                  </svg>
                  <span className="text-xs font-semibold text-cyan-500">React</span>
                </FloatingBadge>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll Indicator ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span
            className="text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-cyan-500"
            style={{ color: t.scrollColor }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              size={18}
              className="transition-colors duration-300 group-hover:text-cyan-500"
              style={{ color: t.scrollColor }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
