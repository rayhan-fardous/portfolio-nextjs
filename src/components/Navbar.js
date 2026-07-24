"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { clsx } from "clsx";

const navItems = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const { scrollY } = useScroll();

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 120 && latest > previous + 5) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5"
    >
      {/* Container */}
      <nav
        className={clsx(
          "w-full max-w-[1280px] h-[72px] rounded-2xl border px-5 sm:px-6 flex items-center justify-between transition-all duration-300",
          scrolled
            ? theme === "dark"
              ? "bg-[#050505]/80 border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-white/80 border-zinc-200/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : theme === "dark"
              ? "bg-[#050505]/40 border-white/[0.05] backdrop-blur-md"
              : "bg-white/40 border-zinc-200/50 backdrop-blur-md",
        )}
      >
        {/* Brand / Logo */}
        <Link
          href="/#home"
          onClick={() => setActiveSection("home")}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-lg p-1"
          aria-label="RayHan Portfolio Home"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="RayHan Logo"
              width={32}
              height={32}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
              priority
            />
          </motion.div>
          
          <div className="flex items-center gap-1">
            <span
              className={clsx(
                "text-lg font-bold tracking-tight transition-colors duration-300 font-sans",
                theme === "dark" ? "text-white" : "text-zinc-900",
              )}
            >
              RayHan
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE] animate-pulse" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] dark:bg-white/[0.03] p-1.5 rounded-full border border-white/[0.05]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={clsx(
                  "relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
                  isActive
                    ? theme === "dark"
                      ? "text-cyan-300"
                      : "text-cyan-600"
                    : theme === "dark"
                      ? "text-zinc-400 hover:text-white"
                      : "text-zinc-600 hover:text-zinc-900",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className={clsx(
                      "absolute inset-0 rounded-full border shadow-sm",
                      theme === "dark"
                        ? "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                        : "bg-cyan-500/10 border-cyan-500/30",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Tools: CTA, Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA Link */}
          <Link
            href="/#contact"
            className={clsx(
              "hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
              theme === "dark"
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                : "bg-cyan-500/10 border-cyan-500/30 text-cyan-700 hover:bg-cyan-500/20",
            )}
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={clsx(
              "relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
              theme === "dark"
                ? "border-white/10 bg-white/5 text-amber-400 hover:bg-white/10 hover:border-white/20"
                : "border-zinc-200 bg-zinc-100 text-cyan-600 hover:bg-zinc-200 hover:border-zinc-300",
            )}
            aria-label="Toggle Dark/Light Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -6, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 6, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Sun size={17} className="stroke-[2.2]" />
                ) : (
                  <Moon size={17} className="stroke-[2.2]" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "flex md:hidden items-center justify-center w-9 h-9 rounded-full border transition-all hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
              theme === "dark"
                ? "border-white/10 bg-white/5 text-zinc-300 hover:text-white"
                : "border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-zinc-900",
            )}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={clsx(
              "fixed inset-x-4 top-[84px] md:hidden rounded-2xl border p-6 backdrop-blur-2xl shadow-2xl z-50 overflow-hidden",
              theme === "dark"
                ? "border-white/10 bg-[#050505]/95 shadow-cyan-950/20"
                : "border-zinc-200 bg-white/95 shadow-zinc-300/40",
            )}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      className={clsx(
                        "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                        isActive
                          ? theme === "dark"
                            ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 font-semibold"
                            : "text-cyan-700 bg-cyan-500/10 border border-cyan-500/20 font-semibold"
                          : theme === "dark"
                            ? "text-zinc-400 hover:text-white hover:bg-white/5"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/[0.08]">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 active:scale-98 transition-transform"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
