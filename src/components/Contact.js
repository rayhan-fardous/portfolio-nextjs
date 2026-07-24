"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import emailjs from "emailjs-com";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rayhan-fardous",
    icon: FaGithub,
    color: "hover:text-white hover:border-white/30",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rayhanfardous/",
    icon: FaLinkedin,
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    label: "Email",
    href: "mailto:rayhan.fardous55@gmail.com",
    icon: Mail,
    color: "hover:text-indigo-400 hover:border-indigo-400/40",
  },
];

const inputBase =
  "w-full rounded-2xl border px-5 py-3.5 text-sm outline-none transition-all duration-300 bg-transparent placeholder:text-[var(--text-muted)] text-[var(--text-primary)] border-[var(--border-default)] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block rounded-full border px-4 py-2 text-sm backdrop-blur mb-4"
            style={{
              borderColor: "var(--border-default)",
              background: "var(--bg-elevated)",
              color: "var(--text-muted)",
            }}
          >
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s Work{" "}
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Have a project in mind, a question, or just want to say hello?
            Drop me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ── Left info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Info cards */}
            {[
              {
                icon: Mail,
                title: "Email",
                value: "rayhan.fardous55@gmail.com",
                href: "mailto:rayhan.fardous55@gmail.com",
              },
              {
                icon: MessageSquare,
                title: "Response Time",
                value: "Within 24 hours",
                href: null,
              },
            ].map(({ icon: Icon, title, value, href }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-default)",
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-indigo-400"
                  style={{
                    background: "rgba(99,102,241,0.08)",
                    borderColor: "rgba(99,102,241,0.2)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {title}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium transition-colors hover:text-indigo-400"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 ${color}`}
                    style={{
                      background: "var(--bg-card)",
                      borderColor: "var(--border-default)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right form panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-3"
          >
            <div
              className="relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl shadow-xl"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-default)",
              }}
            >
              {/* Subtle gradient shine */}
              <div
                className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)" }}
              />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle2 size={40} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Message Sent!
                      </h3>
                      <p
                        className="mt-2 text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Thanks for reaching out. I&apos;ll reply within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 rounded-full px-6 py-2.5 text-sm font-semibold border transition-all hover:scale-105"
                      style={{
                        borderColor: "var(--border-default)",
                        background: "var(--bg-elevated)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 flex flex-col gap-5"
                    noValidate
                  >
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Send a Message
                    </h3>

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <User
                            size={15}
                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"
                            style={{ color: "var(--text-muted)" }}
                          />
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Rayhan Fardous"
                            value={form.name}
                            onChange={handleChange}
                            className={`${inputBase} pl-9`}
                            autoComplete="name"
                          />
                        </div>
                        {errors.name && (
                          <p className="flex items-center gap-1 text-xs text-rose-400">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-email"
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail
                            size={15}
                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"
                            style={{ color: "var(--text-muted)" }}
                          />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className={`${inputBase} pl-9`}
                            autoComplete="email"
                          />
                        </div>
                        {errors.email && (
                          <p className="flex items-center gap-1 text-xs text-rose-400">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="Project inquiry, Collaboration…"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputBase}
                      />
                      {errors.subject && (
                        <p className="flex items-center gap-1 text-xs text-rose-400">
                          <AlertCircle size={12} /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project or idea…"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputBase} resize-none`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-xs text-rose-400">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-400"
                      >
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or email me directly.
                      </motion.div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                      whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                      className="flex items-center justify-center gap-2.5 rounded-2xl px-8 py-3.5 text-sm font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.9), rgba(168,85,247,0.85))",
                        color: "#fff",
                        boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                      }}
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
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
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
