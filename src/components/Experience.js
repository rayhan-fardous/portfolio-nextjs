"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Calendar,
  MapPin,
  Building2,
  Sparkles,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/* ─── Timeline Data ───────────────────────────────────── */
const timelineItems = [
  {
    id: "exp-1",
    category: "experience",
    type: "Experience",
    typeColor: "cyan",
    icon: Briefcase,
    title: "Full Stack Developer",
    organization: "Independent & Client Projects",
    location: "Remote / Bangladesh",
    period: "2023 – Present",
    status: "Active",
    description:
      "Designing and developing high-performance, full-stack web applications using modern web technologies. Focused on scalable frontend architecture, secure backend API design, and seamless user experiences.",
    achievements: [
      "Engineered 15+ responsive web applications with sub-second page loads and high Lighthouse scores.",
      "Architected RESTful APIs with Node.js, Express, and MongoDB featuring JWT session authentication.",
      "Built custom glassmorphism design systems with Tailwind CSS and Framer Motion micro-interactions.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Redux Toolkit",
    ],
  },
  {
    id: "edu-1",
    category: "education",
    type: "Education",
    typeColor: "indigo",
    icon: GraduationCap,
    title: "B.Sc. in Computer Science & Engineering",
    organization: "University Degree",
    location: "Bangladesh",
    period: "2020 – 2024",
    status: "Completed",
    description:
      "Completed a rigorous 4-year Computer Science program focusing on software engineering principles, data structures & algorithms, database management systems, computer networks, and modern web application development.",
    achievements: [
      "Completed capstone software project with distinction.",
      "Mastered OOP concepts, relational database design, and algorithmic problem solving.",
      "Led student study groups on frontend architecture and web technologies.",
    ],
    technologies: ["C", "C++", "Java", "JavaScript", "Python", "SQL", "Git", "Data Structures"],
  },
  {
    id: "exp-2",
    category: "experience",
    type: "Experience",
    typeColor: "cyan",
    icon: Code2,
    title: "Frontend Engineering & UI/UX Development",
    organization: "Open Source & Intensive Learning",
    location: "Remote",
    period: "2022 – 2023",
    status: "Milestone",
    description:
      "Deepened frontend engineering skills by building complex single-page applications, component libraries, and interactive web tools adhering to modern JavaScript (ES6+) standards and clean code practices.",
    achievements: [
      "Built multi-page React applications with complex state management and router integrations.",
      "Optimized DOM rendering performance and implemented responsive UI patterns across all device viewports.",
      "Collaborated on GitHub open-source repositories and utility libraries.",
    ],
    technologies: ["JavaScript ES6+", "React", "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub", "Figma"],
  },
  {
    id: "mile-1",
    category: "milestones",
    type: "Milestone",
    typeColor: "emerald",
    icon: Award,
    title: "Graduation & Full Stack Portfolio Launch",
    organization: "Career Milestone",
    location: "Bangladesh",
    period: "2024",
    status: "Achieved",
    description:
      "Successfully graduated with a CSE degree and launched a feature-rich, production-ready Full Stack portfolio featuring full EmailJS integration, dual-theme dark/light UI, and 15+ showcase web applications.",
    achievements: [
      "Graduated with B.Sc. in Computer Science & Engineering.",
      "Engineered Next.js 15 portfolio with zero build errors and 100% responsive layout.",
    ],
    technologies: ["Next.js 15", "React 19", "Framer Motion", "Tailwind CSS", "EmailJS", "Vercel"],
  },
];

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ─── Main Component ──────────────────────────────────── */
export default function Experience() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("all");

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
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 246, 255, 0.85) 100%)",
    cardBorder: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(99, 102, 241, 0.14)",
    cardShadow: dark
      ? "0 12px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
      : "0 12px 32px rgba(15, 23, 70, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)",

    timelineLine: dark
      ? "linear-gradient(to bottom, #06B6D4, #818CF8, rgba(6,182,212,0.1))"
      : "linear-gradient(to bottom, #0891B2, #6366F1, rgba(99,102,241,0.15))",

    nodeBg: dark ? "#09090b" : "#ffffff",
    nodeBorder: dark ? "rgba(255, 255, 255, 0.15)" : "rgba(99, 102, 241, 0.3)",

    tabActiveBg: "linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)",
    tabInactiveBg: dark ? "rgba(255, 255, 255, 0.04)" : "rgba(12, 14, 31, 0.05)",
    tabInactiveBorder: dark ? "rgba(255, 255, 255, 0.09)" : "rgba(12, 14, 31, 0.12)",
    tabInactiveText: dark ? "#A1A1AA" : "#475569",

    techTagBg: dark ? "rgba(6, 182, 212, 0.10)" : "rgba(6, 182, 212, 0.08)",
    techTagBorder: dark ? "rgba(6, 182, 212, 0.22)" : "rgba(6, 182, 212, 0.25)",
    techTagText: dark ? "#67E8F9" : "#0891B2",
  };

  const filteredItems =
    activeFilter === "all"
      ? timelineItems
      : timelineItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="experience"
      className="relative py-28 px-6 sm:px-8 overflow-hidden transition-colors duration-500"
      style={{ background: t.bg }}
    >
      {/* ── Background Aesthetics ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
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

        {/* Cyan Ambient Glow */}
        <div
          className="absolute top-1/3 -left-40 w-[650px] h-[650px] rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${t.glowCyan} 0%, transparent 70%)`,
          }}
        />

        {/* Indigo Ambient Glow */}
        <div
          className="absolute bottom-20 -right-40 w-[650px] h-[650px] rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${t.glowIndigo} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── Section Header ────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-block">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-500"
              style={{ borderColor: t.badgeBorder, background: t.badgeBg }}
            >
              <Rocket size={14} className="text-cyan-400" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: t.badgeText }}
              >
                Journey
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight transition-colors duration-500"
            style={{ color: t.heading }}
          >
            Experience &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22D3EE 0%, #06B6D4 50%, #818CF8 100%)",
              }}
            >
              Education
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500 max-w-2xl mx-auto"
            style={{ color: t.subheading }}
          >
            A chronicle of my academic foundation, hands-on web development
            experience, and key milestones in building scalable digital applications.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="flex flex-wrap justify-center items-center gap-2 pt-4"
          >
            {[
              { key: "all", label: "All Journey" },
              { key: "experience", label: "Experience" },
              { key: "education", label: "Education" },
              { key: "milestones", label: "Milestones" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none"
                style={{
                  background: activeFilter === tab.key ? t.tabActiveBg : t.tabInactiveBg,
                  borderColor: activeFilter === tab.key ? "transparent" : t.tabInactiveBorder,
                  color: activeFilter === tab.key ? "#FFFFFF" : t.tabInactiveText,
                  borderWidth: "1px",
                  boxShadow: activeFilter === tab.key ? "0 4px 15px rgba(6,182,212,0.25)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Timeline Container ───────────────────────── */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line (Desktop & Mobile) */}
          <div
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 rounded-full pointer-events-none"
            style={{ background: t.timelineLine }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 15 }}
              variants={staggerContainer}
              className="space-y-12 md:space-y-16"
            >
              {filteredItems.map((item, idx) => {
                const IconComponent = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    custom={idx * 0.1}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Central Glowing Node Bullet */}
                    <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div
                        className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-xl shadow-lg transition-transform duration-300 hover:scale-110"
                        style={{
                          background: t.nodeBg,
                          borderColor: t.nodeBorder,
                          boxShadow: "0 0 18px rgba(6,182,212,0.25)",
                        }}
                      >
                        <IconComponent size={18} className="text-cyan-400" />
                      </div>
                    </div>

                    {/* Content Card Container */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="p-6 sm:p-7 rounded-3xl border backdrop-blur-xl transition-all duration-300 relative group overflow-hidden"
                        style={{
                          background: t.cardBg,
                          borderColor: t.cardBorder,
                          boxShadow: t.cardShadow,
                        }}
                      >
                        {/* Hover Gradient Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Top Metadata Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider"
                              style={{
                                background: t.badgeBg,
                                borderColor: t.badgeBorder,
                                color: t.badgeText,
                              }}
                            >
                              {item.type}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {item.status}
                            </span>
                          </div>

                          <div
                            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-500"
                            style={{ color: t.subheading }}
                          >
                            <Calendar size={13} className="text-cyan-400" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Title & Organization */}
                        <h3
                          className="text-lg sm:text-xl font-bold tracking-tight mb-1 transition-colors duration-500"
                          style={{ color: t.heading }}
                        >
                          {item.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs mb-4 font-medium" style={{ color: t.subheading }}>
                          <span className="inline-flex items-center gap-1">
                            <Building2 size={13} className="text-cyan-400" />
                            {item.organization}
                          </span>
                          {item.location && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={13} className="text-indigo-400" />
                              {item.location}
                            </span>
                          )}
                        </div>

                        {/* Main Description */}
                        <p
                          className="text-xs sm:text-sm leading-relaxed mb-4 transition-colors duration-500"
                          style={{ color: t.body }}
                        >
                          {item.description}
                        </p>

                        {/* Key Achievements Bullet List */}
                        {item.achievements && item.achievements.length > 0 && (
                          <div className="space-y-1.5 mb-5 border-t pt-3" style={{ borderColor: t.cardBorder }}>
                            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: t.subheading }}>
                              Key Highlights
                            </p>
                            {item.achievements.map((ach, achIdx) => (
                              <div key={achIdx} className="flex items-start gap-2 text-xs" style={{ color: t.body }}>
                                <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 text-[11px] font-medium rounded-md border backdrop-blur-sm transition-colors duration-500"
                              style={{
                                background: t.techTagBg,
                                borderColor: t.techTagBorder,
                                color: t.techTagText,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
