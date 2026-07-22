"use client";

import Link from "next/link";
import { ArrowUpRight, FolderKanban, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500">
              <FolderKanban size={16} /> Selected work
            </div>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-t-primary sm:text-5xl">Projects built to move ideas forward.</h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-t-secondary">A selection of full-stack products where thoughtful interfaces meet reliable systems.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <Link href={`/projects/${project.slug}`} className="group block h-full rounded-3xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className={`mb-7 flex aspect-[16/10] items-end justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} p-5`}>
                  <div className="rounded-xl border border-white/20 bg-black/10 p-3 text-white backdrop-blur-md"><Layers3 size={25} /></div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">{project.year}</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-500">{project.type}</p><h3 className="font-[var(--font-heading)] text-2xl font-bold text-t-primary">{project.title}</h3></div>
                  <ArrowUpRight className="mt-1 shrink-0 text-t-muted transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-indigo-500" size={22} />
                </div>
                <p className="mt-4 text-sm leading-6 text-t-secondary">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs font-medium text-t-secondary">{item}</span>)}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
