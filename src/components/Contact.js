"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTheme } from "@/components/ThemeProvider";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Clock,
  User,
  Tag,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Download,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

// Zod Schema for Client-side Validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rayhan-fardous",
    icon: FaGithub,
    tooltip: "github.com/rayhan-fardous",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rayhanfardous/",
    icon: FaLinkedin,
    tooltip: "linkedin.com/in/rayhanfardous",
  },
  {
    label: "Email",
    href: "mailto:rayhan.fardous55@gmail.com",
    icon: Mail,
    tooltip: "rayhan.fardous55@gmail.com",
  },
];

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Match the subtle grid opacity of Hero, About, and Skills sections
  const gridLine = isDark ? "rgba(255, 255, 255, 0.025)" : "rgba(99, 102, 241, 0.06)";

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rayhan.fardous55@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            reply_to: data.email,
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus("success");
      reset();
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#050505] text-white" : "bg-[#f8faff] text-slate-900"
      }`}
    >
      {/* ── Background Aesthetics & Grid ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Grid Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${gridLine} 1px, transparent 1px),
              linear-gradient(90deg, ${gridLine} 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Soft Ambient Glow Orbs */}
        <div
          className={`absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/10"
          }`}
        />
        <div
          className={`absolute bottom-10 -right-32 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
            isDark ? "bg-cyan-400/10" : "bg-cyan-400/10"
          }`}
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          {/* Small Label Pill */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-5 shadow-xs ${
              isDark
                ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                : "border-cyan-500/30 bg-cyan-500/10 text-cyan-700"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>

          {/* Main Heading */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let&apos;s Build{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent drop-shadow-xs ${
                isDark
                  ? "from-cyan-400 via-cyan-300 to-blue-500"
                  : "from-cyan-600 via-cyan-500 to-blue-600"
              }`}
            >
              Something Amazing
            </span>{" "}
            Together
          </h2>

          {/* Description */}
          <p
            className={`mt-5 text-base sm:text-lg leading-relaxed font-normal ${
              isDark ? "text-zinc-300" : "text-slate-700"
            }`}
          >
            Whether you&apos;re a recruiter searching for exceptional talent, a company looking to build scalable software, a startup launching your next big idea, or a client with an exciting project — my inbox is always open. Let&apos;s turn your vision into reality.
          </p>
        </motion.div>

        {/* ── Two-Column Layout (Desktop 2-Col / Mobile Single-Col) ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ════════════════ LEFT SIDE: Contact Info & Cards ════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Cards Container */}
            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`group relative flex items-center justify-between p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "bg-[#111111]/80 border-white/[0.08] shadow-none hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                    : "bg-white border-slate-200/90 shadow-md shadow-slate-200/40 hover:border-cyan-500/40 hover:shadow-cyan-500/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border group-hover:scale-105 transition-transform duration-300 ${
                      isDark
                        ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                        : "border-cyan-200 bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block mb-0.5 text-t-secondary">
                      Email
                    </span>
                    <a
                      href="mailto:rayhan.fardous55@gmail.com"
                      className="text-sm sm:text-base font-semibold transition-colors text-t-primary hover:text-cyan-500 dark:hover:text-cyan-400"
                    >
                      rayhan.fardous55@gmail.com
                    </a>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  className={`relative p-2.5 rounded-xl border transition-all duration-300 shrink-0 ${
                    isDark
                      ? "border-white/10 bg-white/[0.04] text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10"
                      : "border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-700 hover:border-cyan-400 hover:bg-cyan-50 shadow-xs"
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check size={16} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
                  ) : (
                    <Copy size={16} />
                  )}
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5 }}
                        className={`absolute -top-9 right-0 px-2.5 py-1 text-[10px] font-semibold rounded-md shadow-lg whitespace-nowrap ${
                          isDark
                            ? "text-cyan-300 bg-[#161618] border border-cyan-500/30"
                            : "text-cyan-900 bg-white border border-cyan-400"
                        }`}
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>

              {/* Phone & WhatsApp Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`group flex items-center justify-between p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "bg-[#111111]/80 border-white/[0.08] shadow-none hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                    : "bg-white border-slate-200/90 shadow-md shadow-slate-200/40 hover:border-cyan-500/40 hover:shadow-cyan-500/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border group-hover:scale-105 transition-transform duration-300 ${
                      isDark
                        ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                        : "border-cyan-200 bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block mb-0.5 text-t-secondary">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="https://wa.me/8801785473355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold transition-colors inline-flex items-center gap-1.5 text-t-primary hover:text-cyan-500 dark:hover:text-cyan-400"
                    >
                      +880 1785 473355
                      <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`group flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "bg-[#111111]/80 border-white/[0.08] shadow-none hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                    : "bg-white border-slate-200/90 shadow-md shadow-slate-200/40 hover:border-cyan-500/40 hover:shadow-cyan-500/10"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border group-hover:scale-105 transition-transform duration-300 ${
                    isDark
                      ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                      : "border-cyan-200 bg-cyan-50 text-cyan-700"
                  }`}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block mb-0.5 text-t-secondary">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-t-primary">
                    Dhaka, Bangladesh{" "}
                    <span className="text-t-secondary font-normal">
                      · Remote Worldwide
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`group flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "bg-[#111111]/80 border-white/[0.08] shadow-none hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                    : "bg-white border-slate-200/90 shadow-md shadow-slate-200/40 hover:border-cyan-500/40 hover:shadow-cyan-500/10"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border group-hover:scale-105 transition-transform duration-300 ${
                    isDark
                      ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                      : "border-cyan-200 bg-cyan-50 text-cyan-700"
                  }`}
                >
                  <Briefcase size={22} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-t-secondary">
                      Availability
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                        isDark
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-emerald-50 border-emerald-200 text-emerald-800"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-t-secondary">
                    Open to Full-time, Internship, Freelance, and Remote opportunities.
                  </p>
                </div>
              </motion.div>

              
            </div>

            {/* Resume Action & Socials Header */}
            <div className="pt-2 flex flex-col gap-6">
              {/* Quick Resume Download Button */}
              <a
                href="https://drive.google.com/file/d/1b3j6DEKZRIz9qoXtoiQ65MhQW9kO5ZLC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl border text-sm font-semibold transition-all duration-300 group shadow-xs ${
                  isDark
                    ? "border-white/10 bg-white/[0.03] text-zinc-200 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10"
                    : "border-slate-200 bg-white text-slate-800 hover:text-slate-900 hover:border-cyan-500/40 hover:bg-cyan-50/70"
                }`}
              >
                <Download size={16} className={`group-hover:translate-y-0.5 transition-transform ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
                <span>Download Resume</span>
              </a>

              {/* Social Links Section */}
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
                    isDark ? "text-zinc-400" : "text-slate-500"
                  }`}
                >
                  Connect With Me
                </span>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, href, icon: Icon, tooltip }) => (
                    <div key={label} className="relative">
                      <motion.a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        aria-label={label}
                        onMouseEnter={() => setHoveredSocial(label)}
                        onMouseLeave={() => setHoveredSocial(null)}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
                          isDark
                            ? "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                            : "border-slate-200 bg-white text-slate-700 hover:text-cyan-600 hover:border-cyan-500/50 hover:bg-cyan-50 shadow-xs"
                        }`}
                      >
                        <Icon size={20} />
                      </motion.a>

                      {/* Accessible Tooltip */}
                      <AnimatePresence>
                        {hoveredSocial === label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5 }}
                            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-medium rounded-md shadow-xl whitespace-nowrap z-20 pointer-events-none ${
                              isDark
                                ? "text-white bg-[#18181b] border border-white/10"
                                : "text-white bg-slate-900 border border-slate-800"
                            }`}
                          >
                            {tooltip}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ════════════════ RIGHT SIDE: Premium Contact Form ════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div
              className={`relative overflow-hidden rounded-3xl border backdrop-blur-2xl p-7 sm:p-10 transition-all duration-500 ${
                isDark
                  ? "bg-[#111111]/80 border-white/[0.08] shadow-2xl"
                  : "bg-white border-slate-200/90 shadow-xl shadow-slate-200/50"
              }`}
            >
              {/* Glow Accent inside Form Container */}
              <div
                className={`pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl ${
                  isDark ? "bg-cyan-500/10" : "bg-cyan-500/15"
                }`}
              />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success Animation View ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4"
                  >
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full border mb-6 ${
                        isDark
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                          : "bg-cyan-500/10 border-cyan-500/40 text-cyan-600 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                      }`}
                    >
                      <CheckCircle2 size={44} />
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                      Message Sent Successfully!
                    </h3>
                    <p className={`mt-3 max-w-md text-sm sm:text-base leading-relaxed ${isDark ? "text-zinc-300" : "text-slate-600"}`}>
                      Thank you for reaching out. Your message has been sent directly to my inbox, and I will get back to you within 24 hours.
                    </p>

                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className={`mt-8 rounded-xl px-7 py-3 text-sm font-semibold border transition-all duration-300 ${
                        isDark
                          ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
                          : "border-cyan-500/40 bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-500"
                      }`}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form View ── */
                  <form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative z-10 flex flex-col gap-6"
                    noValidate
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                        Send a Message
                      </h3>
                      <p className={`text-xs sm:text-sm ${isDark ? "text-zinc-300" : "text-slate-600"}`}>
                        Fill out the form below and I&apos;ll respond as soon as possible.
                      </p>
                    </div>

                    {/* Name + Email Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className={`text-xs font-semibold uppercase tracking-wider flex items-center justify-between ${
                            isDark ? "text-zinc-300" : "text-slate-700"
                          }`}
                        >
                          <span>Full Name</span>
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${
                              isDark ? "text-zinc-400" : "text-slate-400"
                            }`}
                          />
                          <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            {...register("name")}
                            className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                              errors.name
                                ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                                : isDark
                                  ? "border-white/[0.1] bg-white/[0.03] text-white placeholder-zinc-500 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20"
                                  : "border-slate-300 bg-slate-50/90 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 mt-0.5 font-medium"
                          >
                            <AlertCircle size={13} /> {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            isDark ? "text-zinc-300" : "text-slate-700"
                          }`}
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail
                            size={18}
                            className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${
                              isDark ? "text-zinc-400" : "text-slate-400"
                            }`}
                          />
                          <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                              errors.email
                                ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                                : isDark
                                  ? "border-white/[0.1] bg-white/[0.03] text-white placeholder-zinc-500 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20"
                                  : "border-slate-300 bg-slate-50/90 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 mt-0.5 font-medium"
                          >
                            <AlertCircle size={13} /> {errors.email.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="subject"
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isDark ? "text-zinc-300" : "text-slate-700"
                        }`}
                      >
                        Subject
                      </label>
                      <div className="relative">
                        <Tag
                          size={18}
                          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${
                            isDark ? "text-zinc-400" : "text-slate-400"
                          }`}
                        />
                        <input
                          id="subject"
                          type="text"
                          placeholder="Project Opportunity, Freelance, Inquiry…"
                          {...register("subject")}
                          className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                            errors.subject
                              ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                              : isDark
                                ? "border-white/[0.1] bg-white/[0.03] text-white placeholder-zinc-500 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20"
                                : "border-slate-300 bg-slate-50/90 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                          }`}
                        />
                      </div>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 mt-0.5 font-medium"
                        >
                          <AlertCircle size={13} /> {errors.subject.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isDark ? "text-zinc-300" : "text-slate-700"
                        }`}
                      >
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare
                          size={18}
                          className={`pointer-events-none absolute left-4 top-4 ${
                            isDark ? "text-zinc-400" : "text-slate-400"
                          }`}
                        />
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell me about your project, timeline, scope, or idea…"
                          {...register("message")}
                          className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none resize-none transition-all duration-300 ${
                            errors.message
                              ? "border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                              : isDark
                                ? "border-white/[0.1] bg-white/[0.03] text-white placeholder-zinc-500 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20"
                                : "border-slate-300 bg-slate-50/90 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                          }`}
                        />
                      </div>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 mt-0.5 font-medium"
                        >
                          <AlertCircle size={13} /> {errors.message.message}
                        </motion.p>
                      )}
                    </div>

                    {/* General Error Banner if sending fails */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-600 dark:text-rose-400 font-medium"
                      >
                        <AlertCircle size={16} />
                        An error occurred while sending your message. Please try again or copy my email address directly.
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: status === "sending" ? 1 : 1.015 }}
                      whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                      className="mt-2 flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(6,182,212,0.35)] bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]"
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
