"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiGit,
  SiTypescript,
} from "react-icons/si";

/* -----------------------------
   Framer Variants
------------------------------*/
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* -----------------------------
   3D Tilt Card (optimized)
------------------------------*/
function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  /* -----------------------------
     3D Tilt
  ------------------------------*/
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

    /* -----------------------------
       Spotlight position
    ------------------------------*/
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`
        group relative overflow-hidden rounded-2xl border p-5 sm:p-6
        backdrop-blur-xl transition-transform duration-200
        will-change-transform
        hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]
        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {/* 🌟 Spotlight Glow Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.25), transparent 40%)",
          }}
        />
      </div>

      {/* Content stays above glow */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* -----------------------------
   Data
------------------------------*/
const techStack = [
  { name: "JavaScript", icon: <SiJavascript />, desc: "ES6+, async, FP" },
  { name: "React", icon: <SiReact />, desc: "Component UI system" },
  { name: "Next.js", icon: <SiNextdotjs />, desc: "SSR + full-stack apps" },
  { name: "Tailwind", icon: <SiTailwindcss />, desc: "Utility-first UI" },
  { name: "Node.js", icon: <SiNodedotjs />, desc: "Backend runtime" },
  { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL database" },
  { name: "Express", icon: <SiExpress />, desc: "REST APIs" },
  { name: "Firebase", icon: <SiFirebase />, desc: "Auth & backend tools" },
  { name: "Git", icon: <SiGit />, desc: "Version control" },
  { name: "TypeScript", icon: <SiTypescript />, desc: "Type-safe JS" },
];

/* -----------------------------
   Component
------------------------------*/
export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[120px] opacity-10 bg-indigo-500" />
      <div className="absolute bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[120px] opacity-10 bg-purple-500" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span
            className="text-xs sm:text-sm tracking-[0.3em] uppercase"
            style={{ color: "var(--accent-indigo)" }}
          >
            My Stack
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3"
            style={{ color: "var(--text-primary)" }}
          >
            Technologies I Use
          </h2>

          <p
            className="max-w-2xl mx-auto mt-4 text-sm sm:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            A curated set of modern tools I use to build scalable, fast, and
            maintainable web applications.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid gap-4 sm:gap-5
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          "
        >
          {techStack.map((tech, i) => (
            <motion.div key={i} variants={item}>
              <TiltCard
                className="
                  h-full min-h-35
                  flex flex-col justify-between
                  bg-white/5 border-white/10
                "
              >
                {/* Icon */}
                <div
                  className="text-3xl sm:text-4xl transition-transform group-hover:scale-110"
                  style={{ color: "var(--accent-indigo)" }}
                >
                  {tech.icon}
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3
                    className="text-base sm:text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {tech.name}
                  </h3>

                  <p
                    className="text-xs sm:text-sm mt-1 opacity-70 group-hover:opacity-100 transition"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {tech.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}