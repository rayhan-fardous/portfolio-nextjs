"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 md:px-6">
      {/* Navbar Container */}
      <nav
        className={clsx(
          "w-full max-w-6xl rounded-full border px-6 py-3 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.15)]",
          theme === "dark"
            ? "border-white/10 bg-[#060814]/40 shadow-indigo-950/20"
            : "border-zinc-200/80 bg-white/65 shadow-slate-200/40"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-1.5 text-xl font-bold tracking-wide">
            <span className="text-emerald-400 font-extrabold">&lt;</span>
            <span
              className={clsx(
                "font-black tracking-wider transition-colors duration-300",
                theme === "dark" ? "text-white" : "text-zinc-900"
              )}
            >
              RAYHAN
            </span>
            <span className="text-rose-500 font-extrabold">/&gt;</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={clsx(
                    "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                    isActive
                      ? theme === "dark"
                        ? "text-white bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        : "text-zinc-900 bg-zinc-950/5 border border-zinc-950/10 shadow-[0_0_15px_rgba(0,0,0,0.02)]"
                      : theme === "dark"
                        ? "text-zinc-400 hover:text-white"
                        : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side Tools: Theme Toggler & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Animated Theme Toggler */}
            <button
              onClick={toggleTheme}
              className={clsx(
                "relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer",
                theme === "dark"
                  ? "border-white/10 bg-white/5 text-amber-400 hover:bg-white/10 hover:border-white/20"
                  : "border-zinc-200 bg-zinc-100/80 text-indigo-600 hover:bg-zinc-200/80 hover:border-zinc-300"
              )}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -8, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 8, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? <Sun size={18} className="stroke-[2]" /> : <Moon size={18} className="stroke-[2]" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "flex lg:hidden items-center justify-center p-2 rounded-full border transition-all hover:scale-105 cursor-pointer",
                theme === "dark"
                  ? "border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                  : "border-zinc-200 bg-zinc-100/80 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={clsx(
                "lg:hidden mt-4 rounded-3xl border p-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
                theme === "dark"
                  ? "border-white/5 bg-[#030014]/90 shadow-indigo-950/20"
                  : "border-zinc-200/80 bg-white/95 shadow-slate-200/30"
              )}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.name);
                        setIsOpen(false);
                      }}
                      className={clsx(
                        "px-4 py-2.5 text-base font-medium rounded-2xl transition-all duration-200",
                        isActive
                          ? theme === "dark"
                            ? "text-white bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                            : "text-zinc-900 bg-zinc-950/5 border border-zinc-950/10"
                          : theme === "dark"
                            ? "text-zinc-400 hover:text-white hover:bg-white/5"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-950/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
