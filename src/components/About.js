"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaCheckCircle,
  FaFileDownload,
  FaLaptopCode,
} from "react-icons/fa";

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
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-indigo-500 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-pink-500 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            About Me
          </h2>
          <p className="mt-2 text-lg" style={{ color: "var(--text-muted)" }}>
            My Introduction
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <div className="relative w-75 h-75 md:w-105 md:h-105">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent-indigo),var(--accent-rose))",
                }}
              />

              <div
                className="relative w-full h-full rounded-3xl overflow-hidden border"
                style={{
                  borderColor: "var(--border-default)",
                }}
              >
                <Image
                  src="/rayhan-about.png"
                  alt="Rayhan Fardous"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
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
                <div
                  key={idx}
                  className="p-5 rounded-2xl backdrop-blur-md border text-center transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <div
                    className="text-xl mb-3 flex justify-center"
                    style={{ color: "var(--accent-indigo)" }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="font-semibold text-sm md:text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-xs md:text-sm mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.subtitle}
                  </p>
                </div>
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
            <a
              href="https://drive.google.com/file/d/1b3j6DEKZRIz9qoXtoiQ65MhQW9kO5ZLC/view?usp=sharing"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-default)",
              }}
            >
              Download Resume
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
