import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "../../data/site";

const socialLinks = [
  {
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
  },
  {
    href: siteConfig.githubUrl,
    icon: Github,
    label: "GitHub",
    value: "github.com/chrvnixx",
  },
  {
    href: siteConfig.linkedinUrl,
    icon: Linkedin,
    label: "LinkedIn",
    value: "Professional profile",
  },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
              {siteConfig.name}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-3xl">
              Building polished interfaces with practical Node.js backend support.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--text-secondary)]">
              {siteConfig.summary}
            </p>
          </div>

          <div className="grid gap-3">
            {socialLinks.map(({ href, icon: Icon, label, value }) => (
              <a
                key={label}
                className="group flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3 transition-all duration-200 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)]"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--text-primary)]">
                      {label}
                    </p>
                    <p className="text-sm text-[color:var(--text-muted)]">{value}</p>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-[color:var(--text-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-primary)]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Adeola Adekola</span>
          <span>Built with React, React Router, Tailwind CSS, and Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}
