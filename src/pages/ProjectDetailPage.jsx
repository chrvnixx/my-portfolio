import { ArrowUpRight, ChevronLeft, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <PageTransition className="flex min-h-[60vh] items-center justify-center">
        <div className="max-w-xl rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-8 text-center shadow-[var(--shadow-soft)]">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
            Missing Project
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text-primary)]">
            That project case study could not be found.
          </h1>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">
            The link may be outdated, or the project data may have changed.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/projects" variant="secondary">
              Back to projects
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-5xl">
        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--text-primary)]"
          to="/projects"
        >
          <ChevronLeft className="size-4" />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
              {project.focus}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--text-secondary)]">
              {project.heroBlurb}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={project.githubUrl} variant="secondary">
                GitHub
                <Github className="size-4" />
              </Button>
              <Button href={project.liveUrl}>
                Live Demo
                <ArrowUpRight className="size-4" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
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

          <aside className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Type
                </dt>
                <dd className="mt-2 text-base font-medium text-[color:var(--text-primary)]">
                  {project.type}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Role
                </dt>
                <dd className="mt-2 text-base font-medium text-[color:var(--text-primary)]">
                  {project.role}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Timeline
                </dt>
                <dd className="mt-2 text-base font-medium text-[color:var(--text-primary)]">
                  {project.period}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Focus
                </dt>
                <dd className="mt-2 text-base font-medium text-[color:var(--text-primary)]">
                  {project.focus}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
              Problem
            </p>
            <p className="mt-5 text-base leading-7 text-[color:var(--text-secondary)]">
              {project.problem}
            </p>
          </section>

          <section className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
              Approach
            </p>
            <p className="mt-5 text-base leading-7 text-[color:var(--text-secondary)]">
              {project.approach}
            </p>
          </section>
        </div>

        <section className="mt-6 rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
            Challenges
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {project.challenges.map((challenge) => (
              <div
                key={challenge}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] p-4"
              >
                <p className="text-sm leading-6 text-[color:var(--text-secondary)]">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
            Outcome
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--text-secondary)]">
            {project.outcome}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {project.impact.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-4 text-sm leading-6 text-[color:var(--text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
