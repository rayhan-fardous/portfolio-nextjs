import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Check, Code2, Layers3, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} | Case Study` : "Project Not Found" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Find index for next/prev project navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <main className="min-h-screen bg-base px-5 pb-24 pt-32 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Navigation back */}
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-t-secondary transition hover:text-indigo-400"
          >
            <ArrowLeft size={17} /> Back to all projects
          </Link>
          <span className="text-xs font-semibold text-t-muted uppercase tracking-widest">
            Case Study #{currentIndex + 1} of {projects.length}
          </span>
        </div>

        {/* Project Header Banner */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-xl shadow-indigo-950/5">
          <div className="relative min-h-72 overflow-hidden sm:min-h-96">
            {/* Dark gradient header — two-layer: deep slate base + subtle accent tint */}
            <div className="absolute inset-0 bg-[#0a0b14]" />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Decorative glow blob */}
            <div className={`absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${project.accent} opacity-25 blur-3xl`} />
            <div className={`absolute -left-12 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr ${project.accent} opacity-10 blur-3xl`} />
            <div className="relative z-10 flex h-full min-h-72 flex-col justify-between p-8 text-white sm:min-h-96 sm:p-12">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-md uppercase tracking-wider">
                  {project.category || project.type}
                </span>
                <span className="text-sm font-medium text-white/70">{project.year}</span>
              </div>
              <div className="mt-8">
                <div className="mb-4 inline-flex rounded-2xl border border-white/20 bg-black/20 p-3.5 backdrop-blur-md">
                  <Layers3 size={32} />
                </div>
                <h1 className="font-[var(--font-heading)] text-4xl font-bold sm:text-6xl tracking-tight">
                  {project.title}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-white/90 font-medium">
                  {project.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-[1.4fr_.8fr]">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-t-primary mb-4">
                Overview &amp; Architecture
              </h2>
              <p className="text-base leading-8 text-t-secondary">
                {project.description}
              </p>

              {/* Key Features */}
              <h3 className="mt-10 font-[var(--font-heading)] text-xl font-bold text-t-primary">
                Key Features &amp; System Capabilities
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-sm font-medium text-t-secondary"
                  >
                    <span className="shrink-0 rounded-full bg-emerald-500/15 p-1 text-emerald-400">
                      <Check size={14} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Details */}
            <aside className="h-fit rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
                Key Highlight
              </p>
              <p className="mt-2 font-[var(--font-heading)] text-3xl font-bold text-t-primary">
                {project.metric}
              </p>

              <div className="my-6 h-px bg-[var(--border-default)]" />

              <div className="flex items-center gap-2 text-sm font-semibold text-t-primary">
                <Code2 size={18} className="text-indigo-400" /> Technology Stack
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-t-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* External Links */}
              <div className="mt-8 flex flex-col gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500"
                  >
                    Launch Live Demo <ExternalLink size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] px-4 py-3 text-sm font-semibold text-t-primary transition hover:border-indigo-500/40"
                  >
                    View Source Code <FaGithub size={16} />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </section>

        {/* 2-Image Detailed Gallery Showcase */}
        <section className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                <Sparkles size={14} /> Multi-View Gallery
              </div>
              <h2 className="font-[var(--font-heading)] text-3xl font-bold text-t-primary">
                Project Screenshots &amp; Interfaces
              </h2>
            </div>
            <p className="hidden text-sm text-t-secondary sm:block">
              2 high-resolution visual previews
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {project.images.map((imgSrc, imgIdx) => (
              <div
                key={imgIdx}
                className="group overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--bg-card)] p-4 shadow-lg backdrop-blur-md transition hover:border-indigo-500/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} view ${imgIdx + 1}`}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-t-muted">
                    <span className="uppercase tracking-wider text-indigo-400">View #{imgIdx + 1}</span>
                    <span>{imgIdx === 0 ? "Primary Experience" : "Internal / System Console"}</span>
                  </div>
                  <h4 className="mt-1 font-[var(--font-heading)] text-lg font-bold text-t-primary">
                    {project.imageCaptions?.[imgIdx] || `Screenshot ${imgIdx + 1}`}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next / Previous Project Navigation Footer */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-default)] pt-8">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] px-5 py-4 text-sm font-semibold text-t-secondary transition hover:border-indigo-500/40 hover:text-indigo-400 w-full sm:w-auto"
          >
            <ArrowLeft size={18} />
            <div>
              <span className="block text-xs text-t-muted font-normal">Previous Project</span>
              <span>{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center justify-end gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] px-5 py-4 text-sm font-semibold text-t-secondary transition hover:border-indigo-500/40 hover:text-indigo-400 w-full sm:w-auto text-right"
          >
            <div>
              <span className="block text-xs text-t-muted font-normal">Next Project</span>
              <span>{nextProject.title}</span>
            </div>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
