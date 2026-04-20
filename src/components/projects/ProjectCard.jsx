import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

import Button from "../ui/Button";

export default function ProjectCard({ index = 0, project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(240,109,55,0.16), rgba(240,109,55,0.08) 22%, transparent 60%)`;

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  return (
    <motion.article
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-colors duration-300"
      initial={{ opacity: 0, y: 18 }}
      onPointerMove={handlePointerMove}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.2, once: true }}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent-strong),var(--accent-secondary),transparent)] opacity-80" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
              {project.focus}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--text-primary)]">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-3 py-1 text-xs text-[color:var(--text-muted)]">
            {project.period}
          </span>
        </div>

        <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">
          {project.summary}
        </p>

        <p className="mt-4 text-sm leading-6 text-[color:var(--text-muted)]">
          {project.heroBlurb}
        </p>

        <div className="mt-6 grid gap-3">
          {project.impact.slice(0, 2).map((item, impactIndex) => (
            <div
              key={item}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3 text-sm leading-6 text-[color:var(--text-secondary)]"
            >
              <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-tertiary)]">
                0{impactIndex + 1}
              </span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[color:var(--text-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-3">
        <Button className="pr-4" to={`/projects/${project.id}`} variant="secondary">
          Case Study
          <ArrowRight className="size-4" />
        </Button>
        <Button className="pr-4" href={project.githubUrl} variant="ghost">
          GitHub
          <Github className="size-4" />
        </Button>
        <Button className="pr-4" href={project.liveUrl} variant="ghost">
          Live Demo
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </motion.article>
  );
}
