"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-500"
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
      {/* Background Radial Glowing Spheres */}
      <div className="absolute top-1/4 left-1/4 w-75 md:w-125 h-75 md:h-125 rounded-full glow-a blur-[80px] md:blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
      <div className="absolute bottom-70 right-25 w-62.5 md:w-100 h-62.5 md:h-100 rounded-full glow-b blur-[80px] md:blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2 transition-all duration-500" />

      {/* Hero Grid Container */}
      <div className="w-full max-w-6xl px-6 md:px-8 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-7 order-2 lg:order-1">
            <div className="space-y-2.5">
              <p
                className="text-lg md:text-xl font-medium tracking-wide transition-colors duration-500"
                style={{ color: "var(--text-muted)" }}
              >
                Hey, I&apos;m
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none transition-colors duration-500"
                style={{ color: "var(--text-primary)" }}
              >
                Rayhan Fardous
              </h1>
          
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight pt-1"
                style={{ color: "var(--text-primary)" }}
              >
                I am a{" "}
                <span style={{ color: "var(--accent-indigo)" }}>
                  <Typewriter
                    words={["Web Developer", "Web Designer", "Problem Solver"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p
              className="max-w-xl text-base sm:text-lg leading-relaxed font-normal transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              Crafting scalable, responsive, and user-centric web applications
              with modern technologies. Specialized in MERN Stack and Next.js,
              transforming ideas into high-performance digital solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href="#contacts"
                className="btn-primary w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                Say Hello
              </Link>
              <a
                href="https://drive.google.com/file/d/1b3j6DEKZRIz9qoXtoiQ65MhQW9kO5ZLC/view?usp=sharing"
                download
                className="btn-secondary w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {/* GitHub */}
              <a
                href="https://github.com/rayhan-fardous"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center justify-center w-11 h-11 rounded-full border hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rayhanfardous/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center justify-center w-11 h-11 rounded-full border hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center justify-center w-11 h-11 rounded-full border hover:scale-110 transition-all duration-300"
                aria-label="Facebook Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Rotating Profile Picture */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-75 h-75 sm:w-90 sm:h-90 md:w-110 md:h-110 flex items-center justify-center">
              {/* Outer Rotating Dashed Ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed animate-[spin_120s_linear_infinite] transition-colors duration-500"
                style={{ borderColor: "var(--border-default)" }}
              />

              {/* Profile Image Container Mask */}
              <div
                className="absolute inset-4 rounded-full overflow-hidden border transition-all duration-500"
                style={{
                  background: "var(--avatar-bg)",
                  borderColor: "var(--avatar-border)",
                  boxShadow:
                    "inset 0 0 30px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="/rayhan.jpg"
                  alt="Md Rayhan Ul Fardous Profile"
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 360px, 440px"
                  priority
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Decorative Subtle Glowing Rings */}
              <div
                className="absolute -inset-1 rounded-full blur-sm pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-green), var(--accent-rose))",
                  opacity: 0.12,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
