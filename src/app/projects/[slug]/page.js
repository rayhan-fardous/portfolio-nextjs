import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Code2, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} | Md Rayhan Ul Fardous` : "Project not found" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-base px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-t-secondary transition hover:text-indigo-500"><ArrowLeft size={17} /> Back to projects</Link>
        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--border-default)] bg-[var(--bg-card)] shadow-xl shadow-indigo-950/5">
          <div className={`relative min-h-72 overflow-hidden bg-gradient-to-br ${project.accent} p-8 sm:min-h-96 sm:p-12`}>
            <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/20 blur-2xl" />
            <div className="relative flex h-full min-h-56 flex-col justify-between text-white">
              <div className="flex items-center justify-between"><span className="rounded-full border border-white/30 bg-black/10 px-3 py-1 text-sm font-semibold backdrop-blur">{project.type}</span><span className="text-sm font-medium">{project.year}</span></div>
              <div><div className="mb-4 inline-flex rounded-2xl border border-white/20 bg-black/10 p-3 backdrop-blur"><Layers3 size={30} /></div><h1 className="font-[var(--font-heading)] text-4xl font-bold sm:text-6xl">{project.title}</h1></div>
            </div>
          </div>
          <div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-[1.4fr_.8fr]">
            <div><p className="text-lg leading-8 text-t-secondary">{project.description}</p><h2 className="mt-10 font-[var(--font-heading)] text-2xl font-bold text-t-primary">What I built</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3 text-sm font-medium text-t-secondary"><span className="rounded-full bg-emerald-500/15 p-1 text-emerald-500"><Check size={13} /></span>{feature}</li>)}</ul></div>
            <aside className="h-fit rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">Project snapshot</p><p className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-t-primary">{project.metric}</p><div className="my-6 h-px bg-[var(--border-default)]" /><div className="flex items-center gap-2 text-sm font-semibold text-t-primary"><Code2 size={17} className="text-indigo-500" /> Technology</div><div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] px-3 py-1.5 text-sm text-t-secondary">{item}</span>)}</div><Link href="/#contact" className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-4 py-3 text-sm font-semibold text-[var(--btn-primary-text)] transition hover:brightness-110">Start a project <ArrowUpRight size={16} /></Link></aside>
          </div>
        </section>
      </div>
    </main>
  );
}
