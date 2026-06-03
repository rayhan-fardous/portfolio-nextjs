"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaCheckCircle,
  FaFileDownload,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
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
      

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="
    absolute
    left-1/2
    top-20
    -translate-x-1/2
    h-96
    w-96
    rounded-full
    bg-indigo-500/10
    blur-[140px]
    pointer-events-none
  "
        />
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="
    text-4xl
    md:text-5xl
    font-bold
    tracking-tight
  "
            style={{ color: "var(--text-primary)" }}
          >
            About
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Me
            </span>
          </h2>
          <p className="mt-2 text-lg" style={{ color: "var(--text-muted)" }}>
            My Introduction
          </p>
        </div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <motion.div
              className="group relative w-75 h-75 md:w-105 md:h-105"
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
  type: "spring",
  stiffness: 120,
  damping: 18,
}}
            >
              <div
                className="
    absolute
    -inset-4
    rounded-4xl
    bg-linear-to-r
    from-cyan-500/20
    via-indigo-500/20
    to-purple-500/20
    blur-3xl
    opacity-50
    group-hover:opacity-80
    transition-all
    duration-700
  "
              />

              <div
                className="
    relative
    w-full
    h-full
    rounded-3xl
    overflow-hidden
    border
    transition-all
    duration-500
    group-hover:-translate-y-2
    group-hover:shadow-[0_25px_80px_rgba(99,102,241,0.25)]
  "
                style={{
                  borderColor: "var(--border-default)",
                }}
              >
                <Image
                  src="/rayhan-about.png"
                  alt="Rayhan Fardous"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="
    object-contain
    transition-transform
    duration-700
    ease-out
    group-hover:scale-105
  "
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: <FaBriefcase />,
                  title: "Experience",
                  subtitle: "1+ Years",
                },
                {
                  icon: <FaCheckCircle />,
                  title: "Projects",
                  subtitle: "10+ Completed",
                },
                {
                  icon: <FaLaptopCode />,
                  title: "Technologies",
                  subtitle: "20+ Used",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="
    group
    relative
    overflow-hidden
    p-5
    rounded-2xl
    backdrop-blur-xl
    border
    text-center
  "
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <div
                    className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-700
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
                  <div
                    className="
    mb-3
    relative
    z-10
    flex
    justify-center
    text-2xl
    transition-all
    duration-500
    group-hover:scale-110
  "
                    style={{
                      color: "var(--accent-indigo)",
                      filter: "drop-shadow(0 0 12px rgba(99,102,241,.5))",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="relative z-10 font-semibold text-sm md:text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="relative z-10 text-xs md:text-sm mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <p
              className="leading-relaxed text-base md:text-lg mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              I'm a passionate Full-Stack Web Developer specializing in the MERN
              Stack and Next.js. I enjoy building scalable, responsive, and
              user-focused web applications that solve real-world problems. With
              a strong foundation in modern web technologies and clean code
              practices, I strive to create seamless digital experiences that
              combine performance, functionality, and great design.
            </p>

            {/* Resume Button */}
            <motion.a
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}
              href="https://drive.google.com/file/d/1b3j6DEKZRIz9qoXtoiQ65MhQW9kO5ZLC/view?usp=sharing"
              download
              className="
group
inline-flex
items-center
gap-2
px-6
py-3
rounded-xl
font-medium
shadow-lg
hover:shadow-[0_15px_40px_rgba(99,102,241,.25)]
transition-shadow
duration-500
"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,.12), rgba(168,85,247,.12))",
                color: "var(--text-primary)",
                border: "1px solid var(--border-default)",
              }}
            >
              Download Resume
              <FaFileDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.a>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
