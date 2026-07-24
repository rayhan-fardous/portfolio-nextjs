"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaLightbulb, FaRocket } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    skills: [
      "Responsive Web Design",
      "Component-Based Architecture",
      "Single Page Applications",
      "UI/UX Implementation",
      "State Management",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    skills: [
      "REST API Development",
      "Authentication & Authorization",
      "CRUD Operations",
      "Database Design",
      "API Integration",
      "Error Handling",
    ],
  },
  {
    title: "Problem Solving",
    icon: <FaLightbulb />,
    skills: [
      "Debugging",
      "Troubleshooting",
      "Algorithmic Thinking",
      "Code Refactoring",
      "Clean Code Practices",
      "Technical Research",
    ],
  },
  {
    title: "Development Workflow",
    icon: <FaRocket />,
    skills: [
      "Git Version Control",
      "Team Collaboration",
      "Agile Development",
      "Code Review",
      "Technical Documentation",
      "Deployment & Maintenance",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Modern Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
        linear-gradient(var(--border-default) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-default) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Dot Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
      {/* Background Glow */}
      <div className="absolute top-50 left-20 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-indigo-500 pointer-events-none" />
      <div className="absolute bottom-50 right-20 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-pink-500 pointer-events-none" />
      
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/50 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 backdrop-blur">
            Professional Skills
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            What I
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Bring to the Table
            </span>
          </h2>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400 md:text-lg">
            Combining technical expertise, problem-solving abilities, and modern
            development practices to create scalable and high-performance web
            applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
group
relative
overflow-hidden
rounded-3xl
border
border-zinc-200
dark:border-zinc-800
bg-white/80
dark:bg-zinc-900/40
p-7
backdrop-blur-xl
shadow-sm
hover:shadow-lg
transition-all
"
            >
              {/* Hover Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-cyan-500/10
                    via-transparent
                    to-purple-500/10
                  "
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div
                    className="
  flex h-14 w-14 items-center justify-center
  rounded-2xl
  border border-zinc-200 dark:border-zinc-800
  bg-zinc-100 dark:bg-zinc-900
  text-cyan-500
  text-2xl
"
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                      rounded-full
                      border
                      border-zinc-200
                      dark:border-zinc-700
                      bg-zinc-100
                      dark:bg-zinc-800/50
                      px-4
                      py-2
                      text-sm
                      text-zinc-700
                      dark:text-zinc-300
                      transition-all
                      duration-300
                      hover:border-cyan-500/40
                      hover:bg-cyan-500/10
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["4", "Skill Areas"],
            ["10+", "Projects Built"],
            ["1+", "Years Experience"],
            ["∞", "Learning Mindset"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="
        rounded-2xl
        border
        border-zinc-200 dark:border-zinc-800
bg-white/80 dark:bg-zinc-900/40
        p-6
        text-center
        backdrop-blur-xl
      "
            >
              <h3 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {value}
              </h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
