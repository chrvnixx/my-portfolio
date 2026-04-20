import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import StackMarquee from "../components/home/StackMarquee";
import PageTransition from "../components/layout/PageTransition";
import ProjectCard from "../components/projects/ProjectCard";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";
import { recruiterSignals, siteConfig, techGroups } from "../data/site";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

const snapshotItems = [
  "Builds interfaces that are easy to scan, easy to trust, and pleasant to use.",
  "Comfortable owning the frontend experience while supporting it with practical Node.js backend implementation.",
  "Communicates clearly and ships with real users in mind.",
];

const marqueeRows = [
  [
    "React architecture",
    "Interaction design",
    "Motion systems",
    "Responsive layout thinking",
    "Accessible UI states",
    "Design-to-code fidelity",
    "Frontend storytelling",
  ],
  [
    "Node.js integrations",
    "REST APIs",
    "Reusable components",
    "Visual hierarchy",
    "Loading and empty states",
    "Product polish",
    "Shipping quality",
  ],
];

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text-secondary)] shadow-[var(--shadow-soft)]"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28 }}
          >
            <span className="size-2 rounded-full bg-[color:var(--accent-tertiary)]" />
            {siteConfig.availability}
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.32, delay: 0.05 }}
          >
            {siteConfig.name}
          </motion.h1>

          {/* <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.34, delay: 0.08 }}
          >
            {["UI-first thinking", "Modern interactions", "Node.js support"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </motion.div> */}

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-secondary)]"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.32, delay: 0.1 }}
          >
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5">
              {siteConfig.role}
            </span>
            <span>{siteConfig.location}</span>
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-3xl text-balance text-xl leading-8 text-[color:var(--text-secondary)] sm:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--text-muted)]"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: 0.25 }}
          >
            <Button to="/projects">
              View Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Me
              <ArrowUpRight className="size-4" />
            </Button>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {recruiterSignals.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-[26px] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)]"
                whileHover={{ y: -4 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--text-primary)]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] mt-10 border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.38, delay: 0.2 }}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
              Recruiter Snapshot
            </p>
            <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
              <Sparkles className="size-4" />
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[color:var(--text-primary)]">
            Frontend-focused, product-aware, and comfortable working with
            Node.js systems.
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">
            I pay close attention to how software feels in use: layout clarity,
            interaction quality, and the details that make a product feel
            production-ready. When needed, I can also handle the Node.js backend
            work that keeps the experience reliable.
          </p>

          <div className="mt-8 grid gap-3">
            {snapshotItems.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-4"
                initial={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3, delay: 0.32 + index * 0.06 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3, once: true }}
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[color:var(--accent-tertiary)]" />
                <p className="text-sm leading-6 text-[color:var(--text-secondary)]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </section>

      <section className="mt-12">
        <motion.div
          className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)] sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 0.2, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
                Frontend Playground
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-3xl">
                Signals that keep the frontend work grounded.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[color:var(--text-secondary)]">
              These are the patterns I keep in mind while building: responsive
              systems, motion that earns its place, and UI choices that still
              hold up once a product leaves the polished mockup stage.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <StackMarquee items={marqueeRows[0]} tone="warm" />
            <StackMarquee items={marqueeRows[1]} reverse />
          </div>
        </motion.div>
      </section>

      <section className="mt-24">
        <SectionHeading
          description="A few product-focused builds that make the strongest signal obvious quickly: clear problems, thoughtful implementation, and outcomes rooted in usability."
          eyebrow="Selected Work"
          title="Featured projects that feel like real products, not class exercises."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>

        <div className="mt-8">
          <Button to="/projects" variant="ghost">
            See all projects
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <section className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <SectionHeading
            description="I like turning messy requirements into clean product experiences. Most of my attention goes into interface clarity, interaction polish, and the Node.js-backed implementation decisions that keep the final result dependable."
            eyebrow="About"
            title="The work I enjoy most sits where strong frontend execution meets practical Node.js-backed product thinking."
          />

          <div className="mt-8">
            <Button to="/about" variant="secondary">
              More about me
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="flex h-full flex-col rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
                {group.title}
              </p>

              <p className="mt-4 text-sm leading-6 text-[color:var(--text-secondary)]">
                {group.description}
              </p>

              <div className="mt-6 grid gap-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-3 py-3 text-sm font-medium text-[color:var(--text-secondary)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-[color:var(--border)] pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  In Practice
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  {group.emphasis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
