"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaCss3Alt,
} from "react-icons/fa";

import { VscCode } from "react-icons/vsc";
/* -----------------------------
   Animation Variants
------------------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* -----------------------------
   Tech Data
------------------------------ */

const techCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    technologies: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

/* -----------------------------
   3D Tilt Card
------------------------------ */

function TiltCard({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const reset = () => {
    if (!ref.current) return;

    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/4
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-indigo-500/40
        hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]
      "
      style={{
        transformStyle: "preserve-3d",
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,.18), transparent 40%)",
          }}
        />
      </div>

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* -----------------------------
   Component
------------------------------ */

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-indigo-400 text-sm">
            My Tech Stack
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Technologies I Use
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            A collection of modern technologies, frameworks,
            tools, and platforms I use to build fast,
            scalable, and user-friendly web applications.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-indigo-500/20 bg-indigo-500/10">
            <span className="text-2xl font-bold text-indigo-400">
              18+
            </span>
            <span className="text-gray-300">
              Technologies Used
            </span>
          </div>
        </div>

        {/* Categories */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
            >
              <TiltCard>
                {/* Title */}

                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl text-indigo-400">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        group/item
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-xl
                        bg-white/5
                        border
                        border-white/10
                        hover:border-indigo-500/40
                        hover:bg-indigo-500/10
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      <span className="text-lg text-indigo-400">
                        {tech.icon}
                      </span>

                      <span className="text-sm text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}