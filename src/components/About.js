"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  animate,
} from "framer-motion";
import {
  Briefcase,
  Code2,
  MapPin,
  GraduationCap,
  Target,
  Languages,
  Rocket,
  Lightbulb,
  Zap,
  Users,
  FolderGit2,
  Award,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/* ─── Animated Counter ───────────────────────────────── */
function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value, 10);
      if (isNaN(numericValue)) return;
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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

/* ─── Data Definitions ───────────────────────────────── */
const highlightCards = [
  {
    icon: Briefcase,
    label: "Role",
    value: "Full Stack Developer",
    sub: "Specialized in MERN & Next.js",
  },
  {
    icon: Code2,
    label: "Experience",
    value: "Modern Web Apps",
    sub: "Full-cycle development",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    sub: "Available for Remote Work",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc. in Computer Science & Engineering",
    sub: "Strong CS fundamentals",
  },
  {
    icon: Target,
    label: "Focus Areas",
    tags: ["Full Stack", "UI/UX", "Performance", "Clean Architecture"],
  },
  {
    icon: Languages,
    label: "Languages",
    value: "Bangla (Native), English (Proficient), Hindi",
    sub: "Effective communicator",
  },
];

const stats = [
  {
    icon: Award,
    number: "7",
    suffix: "+",
    label: "Projects Completed",
    description: "Production & Client Apps",
  },
  {
    icon: BookOpen,
    number: "20",
    suffix: "+",
    label: "Technologies Learned",
    description: "Languages, Libs & Tools",
  },
  {
    icon: FolderGit2,
    number: "30",
    suffix: "+",
    label: "GitHub Repositories",
    description: "Open Source & Experiments",
  },
  {
    icon: Sparkles,
    number: "3",
    suffix: "+",
    label: "Years of Learning",
    description: "Continuous Growth",
  },
];

const coreValues = [
  {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Always exploring modern technologies, frameworks, and engineering best practices to stay ahead.",
    badge: "Growth Mindset",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Enjoy breaking down complex real-world challenges into simple, maintainable, and elegant solutions.",
    badge: "Analytical",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Obsessed with fast load times, clean code architecture, smooth animations, and optimized assets.",
    badge: "Optimization",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Thriving in team environments with transparent communication, git workflows, and clean documentation.",
    badge: "Team Player",
  },
];

/* ─── Main Component ──────────────────────────────────── */
export default function About() {
  const { theme } = useTheme();
  const dark = theme === "dark";

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
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 246, 255, 0.8) 100%)",
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
      id="about"
      className="relative py-28 px-6 sm:px-8 overflow-hidden transition-colors duration-500"
      style={{ background: t.bg }}
    >
      {/* ── Background Aesthetics ──────────────────────── */}
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

        {/* Cyan Ambient Glow — Left */}
        <div
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${t.glowCyan} 0%, transparent 70%)`,
          }}
        />

        {/* Indigo Ambient Glow — Right */}
        <div
          className="absolute bottom-10 -right-40 w-[600px] h-[600px] rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle at center, ${t.glowIndigo} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-block">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-500"
              style={{ borderColor: t.badgeBorder, background: t.badgeBg }}
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: t.badgeText }}
              >
                About Me
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight transition-colors duration-500"
            style={{ color: t.heading }}
          >
            Passionate About Building{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22D3EE 0%, #06B6D4 50%, #818CF8 100%)",
              }}
            >
              Digital Experiences
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500 max-w-2xl mx-auto"
            style={{ color: t.subheading }}
          >
            Full Stack Developer dedicated to solving real-world problems with
            clean architecture, high performance, and user-centric design.
          </motion.p>
        </motion.div>

        {/* ── Two-Column Main Content ──────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-24">
          {/* ── LEFT COLUMN: Story & Content ───────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <motion.div variants={fadeUp} custom={0} className="space-y-4">
              <h3
                className="text-2xl font-bold tracking-tight transition-colors duration-500 flex items-center gap-3"
                style={{ color: t.heading }}
              >
                <span className="w-8 h-1 rounded-full bg-cyan-500 inline-block" />
                Crafting Scalable Web Applications
              </h3>

              <p
                className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
                style={{ color: t.body }}
              >
                My journey in software development is driven by a deep passion
                for transforming complex ideas into intuitive, high-performance
                web applications. I specialize in the modern web stack—building
                scalable frontends with <strong className="font-semibold text-cyan-400">Next.js &amp; React</strong>,
                and architecting robust backends using <strong className="font-semibold text-cyan-400">Node.js, Express &amp; MongoDB</strong>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.1}>
              <p
                className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
                style={{ color: t.body }}
              >
                I strongly believe that good software goes beyond functional
                code—it requires clean architecture, seamless visual design,
                and optimal performance. I strive for code maintainability,
                rigorous debugging, and writing modular components that scale
                effortlessly over time.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.2}>
              <p
                className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
                style={{ color: t.body }}
              >
                With a continuous learning mindset, I consistently explore emerging web
                technologies, UI/UX trends, and system design practices. My goal
                is to build impactful, user-focused products and collaborate with
                forward-thinking engineering teams to create remarkable digital solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Highlight Information Cards ─ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx * 0.08}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 relative group overflow-hidden"
                  style={{
                    background: t.cardBg,
                    borderColor: t.cardBorder,
                    boxShadow: t.cardShadow,
                  }}
                >
                  {/* Subtle Top Border Gradient Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl border flex-shrink-0 transition-colors duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      style={{
                        background: t.tagBg,
                        borderColor: t.tagBorder,
                        color: t.tagText,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold tracking-wider uppercase transition-colors duration-500 mb-0.5"
                        style={{ color: t.subheading }}
                      >
                        {card.label}
                      </p>

                      {card.tags ? (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 text-xs font-medium rounded-md border backdrop-blur-sm"
                              style={{
                                background: t.tagBg,
                                borderColor: t.tagBorder,
                                color: t.tagText,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <>
                          <h4
                            className="text-sm sm:text-base font-bold tracking-tight truncate transition-colors duration-500"
                            style={{ color: t.heading }}
                          >
                            {card.value}
                          </h4>
                          {card.sub && (
                            <p
                              className="text-xs transition-colors duration-500 mt-0.5"
                              style={{ color: t.body }}
                            >
                              {card.sub}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Animated Statistics Cards ────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx * 0.1}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden group text-center flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    background: t.cardBg,
                    borderColor: t.cardBorder,
                    boxShadow: t.cardShadow,
                  }}
                >
                  <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
                    <Icon size={120} className="text-cyan-400" />
                  </div>

                  <div
                    className="p-3 rounded-xl border mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: t.tagBg,
                      borderColor: t.tagBorder,
                      color: t.tagText,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1"
                    style={{ color: t.heading }}
                  >
                    <Counter value={st.number} suffix={st.suffix} />
                  </h3>

                  <p
                    className="text-sm font-semibold tracking-wide transition-colors duration-500 mb-0.5"
                    style={{ color: t.heading }}
                  >
                    {st.label}
                  </p>

                  <p
                    className="text-xs transition-colors duration-500"
                    style={{ color: t.body }}
                  >
                    {st.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Core Values Section ──────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-500"
              style={{ color: t.heading }}
            >
              Core Development Values
            </h3>
            <p
              className="text-sm sm:text-base transition-colors duration-500"
              style={{ color: t.subheading }}
            >
              Principles that guide my engineering decisions and workflow daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx * 0.1}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden group flex flex-col justify-between transition-all duration-300"
                  style={{
                    background: t.cardBg,
                    borderColor: t.cardBorder,
                    boxShadow: t.cardShadow,
                  }}
                >
                  {/* Top Line Glow Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-xl border transition-colors duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        style={{
                          background: t.tagBg,
                          borderColor: t.tagBorder,
                          color: t.tagText,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border backdrop-blur-sm"
                        style={{
                          background: t.tagBg,
                          borderColor: t.tagBorder,
                          color: t.tagText,
                        }}
                      >
                        {val.badge}
                      </span>
                    </div>

                    <h4
                      className="text-lg font-bold tracking-tight mb-2 transition-colors duration-500"
                      style={{ color: t.heading }}
                    >
                      {val.title}
                    </h4>

                    <p
                      className="text-sm leading-relaxed transition-colors duration-500"
                      style={{ color: t.body }}
                    >
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
