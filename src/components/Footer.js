import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rayhan-fardous",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rayhanfardous/",
    icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:rayhan.fardous55@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-default)] bg-[var(--bg-elevated)] px-6 py-16 sm:px-8">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-[var(--border-default)] pb-12 lg:grid-cols-[1.45fr_0.75fr_0.9fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="RayHan Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-wider text-t-primary">
                RayHan
              </span>
            </Link>
            <h2 className="mt-6 max-w-md font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-t-primary sm:text-4xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-t-secondary">
              Have a project in mind or want to work together? I&apos;m always open to discussing new ideas and opportunities.
            </p>
            <a href="mailto:rayhan.fardous55@gmail.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--btn-primary-bg)] px-5 py-3 text-sm font-semibold text-[var(--btn-primary-text)] transition-transform duration-300 hover:-translate-y-0.5">
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-t-muted">Explore</h3>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-t-secondary transition-colors hover:text-indigo-500">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-t-muted">Connect</h3>
            <a href="mailto:rayhan.fardous55@gmail.com" className="mt-5 block break-all text-sm font-medium text-t-secondary transition-colors hover:text-indigo-500">
              rayhan.fardous55@gmail.com
            </a>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] text-t-secondary transition-all hover:-translate-y-1 hover:border-indigo-400/60 hover:text-indigo-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-sm text-t-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Md Rayhan Ul Fardous. All rights reserved.</p>
          <a href="#home" className="font-medium transition-colors hover:text-indigo-500">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
