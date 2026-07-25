"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  ShieldCheck,
  KeyRound,
  Workflow,
  Cpu,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiDocker,
  SiPrisma,
  SiRedis,
} from "react-icons/si";
import { FaCss3Alt, FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { useTheme } from "@/components/ThemeProvider";

/* ─── Skill Categories & Items Data ───────────────────── */
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting intuitive, responsive, and pixel-perfect user interfaces",
    icon: Code2,
    skills: [
      { name: "HTML5", level: "Advanced", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", level: "Advanced", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", level: "Advanced", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", level: "Intermediate", icon: SiTypescript, color: "#3178C6" },
      { name: "React", level: "Advanced", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", level: "Advanced", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
      { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux Toolkit", level: "Intermediate", icon: SiRedux, color: "#764ABC" },
      { name: "Framer Motion", level: "Intermediate", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Architecting robust server-side logic and secure APIs",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Advanced", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
      { name: "REST API", level: "Advanced", icon: Cpu, color: "#06B6D4" },
      { name: "Authentication", level: "Intermediate", icon: ShieldCheck, color: "#10B981" },
      { name: "JWT", level: "Intermediate", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Designing scalable data models and efficient queries",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Advanced", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: "Intermediate", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", level: "Intermediate", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Modern developer tooling, deployment platforms, and design tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Advanced", icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: "Advanced", icon: SiGithub, color: "#181717", darkColor: "#FFFFFF" },
      { name: "VS Code", level: "Advanced", icon: VscCode, color: "#007ACC" },
      { name: "Vercel", level: "Advanced", icon: SiVercel, color: "#000000", darkColor: "#FFFFFF" },
      { name: "Netlify", level: "Intermediate", icon: SiNetlify, color: "#00C7B7" },
      { name: "Postman", level: "Intermediate", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", level: "Intermediate", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    id: "learning",
    title: "Currently Learning",
    description: "Expanding my technical horizons with cloud & DevOps tools",
    icon: Sparkles,
    skills: [
      { name: "Docker", level: "Learning", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", level: "Learning", icon: FaAws, color: "#FF9900" },
      { name: "CI/CD", level: "Learning", icon: Workflow, color: "#6366F1" },
      { name: "Prisma", level: "Learning", icon: SiPrisma, color: "#2D3748", darkColor: "#5A67D8" },
      { name: "Redis", level: "Learning", icon: SiRedis, color: "#DC382D" },
    ],
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ─── Main Component ──────────────────────────────────── */
export default function Stack() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [activeTab, setActiveTab] = useState("all");

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

    techCardBg: dark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.8)",
    techCardBorder: dark ? "rgba(255, 255, 255, 0.07)" : "rgba(99, 102, 241, 0.12)",

    tabActiveBg: "linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)",
    tabInactiveBg: dark ? "rgba(255, 255, 255, 0.04)" : "rgba(12, 14, 31, 0.05)",
    tabInactiveBorder: dark ? "rgba(255, 255, 255, 0.09)" : "rgba(12, 14, 31, 0.12)",
    tabInactiveText: dark ? "#A1A1AA" : "#475569",
  };

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  /* ── Level Badge Styles ───────────────────────────── */
  return (
    <section
      id="skills"
      className="relative py-28 px-6 sm:px-8 overflow-hidden transition-colors duration-500"
      style={{ background: t.bg }}
    >
      <span id="skills" className="absolute top-0" />

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
              <Cpu size={14} className="text-cyan-400" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: t.badgeText }}
              >
                Technical Skills
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight transition-colors duration-500"
            style={{ color: t.heading }}
          >
            Technologies I{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22D3EE 0%, #06B6D4 50%, #818CF8 100%)",
              }}
            >
              Work With
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500 max-w-2xl mx-auto"
            style={{ color: t.subheading }}
          >
            I enjoy building scalable, high-performance web applications using
            modern technologies and continuously expanding my skill set to solve
            complex challenges.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="flex flex-wrap justify-center items-center gap-2 pt-4"
          >
            <button
              onClick={() => setActiveTab("all")}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none"
              style={{
                background: activeTab === "all" ? t.tabActiveBg : t.tabInactiveBg,
                borderColor: activeTab === "all" ? "transparent" : t.tabInactiveBorder,
                color: activeTab === "all" ? "#FFFFFF" : t.tabInactiveText,
                borderWidth: "1px",
                boxShadow: activeTab === "all" ? "0 4px 15px rgba(6,182,212,0.25)" : "none",
              }}
            >
              All Categories
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none"
                style={{
                  background: activeTab === cat.id ? t.tabActiveBg : t.tabInactiveBg,
                  borderColor: activeTab === cat.id ? "transparent" : t.tabInactiveBorder,
                  color: activeTab === cat.id ? "#FFFFFF" : t.tabInactiveText,
                  borderWidth: "1px",
                  boxShadow: activeTab === cat.id ? "0 4px 15px rgba(6,182,212,0.25)" : "none",
                }}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Category Cards Grid ──────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 15 }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8"
          >
            {filteredCategories.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  variants={fadeUp}
                  custom={catIdx * 0.08}
                  className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] p-5 sm:p-7 rounded-3xl border backdrop-blur-xl transition-all duration-500 relative group flex flex-col justify-between"
                  style={{
                    background: t.cardBg,
                    borderColor: t.cardBorder,
                    boxShadow: t.cardShadow,
                  }}
                >
                  {/* Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="p-3 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: t.badgeBg,
                          borderColor: t.badgeBorder,
                          color: t.badgeText,
                        }}
                      >
                        <CategoryIcon size={22} />
                      </div>

                      <div>
                        <h3
                          className="text-xl font-bold tracking-tight transition-colors duration-500"
                          style={{ color: t.heading }}
                        >
                          {category.title}
                        </h3>
                        <span
                          className="text-xs transition-colors duration-500"
                          style={{ color: t.subheading }}
                        >
                          {category.skills.length} Technologies
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-xs leading-relaxed transition-colors duration-500 mb-6"
                      style={{ color: t.body }}
                    >
                      {category.description}
                    </p>

                    {/* Skill Cards Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2.5">
                      {category.skills.map((skill) => {
                        const IconComponent = skill.icon;
                        const iconColor =
                          dark && skill.darkColor ? skill.darkColor : skill.color;

                        return (
                          <motion.div
                            key={skill.name}
                            whileHover={{ y: -2, scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            className="p-1.5 sm:p-2 rounded-xl border backdrop-blur-sm flex items-center gap-3 transition-all duration-300 group/skill"
                            style={{
                              background: t.techCardBg,
                              borderColor: t.techCardBorder,
                            }}
                          >
                            <div className="flex min-w-0 items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/skill:scale-110"
                                style={{
                                  background: dark
                                    ? "rgba(255,255,255,0.05)"
                                    : "rgba(12,14,31,0.04)",
                                }}
                              >
                                <IconComponent size={21} style={{ color: iconColor }} />
                              </div>

                              <div className="min-w-0">
                                <span
                                  className="text-sm font-semibold leading-tight truncate transition-colors duration-500"
                                  style={{ color: t.heading }}
                                  title={skill.name}
                                >
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
