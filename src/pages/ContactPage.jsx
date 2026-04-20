import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import { siteConfig } from "../data/site";

const contactMethods = [
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
    value: "linkedin.com/in/adeola-adekola",
  },
];

const inputStyles =
  "w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none transition-colors duration-200 placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent-strong)]";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name || "a recruiter"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatusMessage("Opening your default email app with the message prefilled.");
  };

  return (
    <PageTransition>
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            description="If you&apos;re hiring for an internship or junior role and want someone who cares about both reliability and usability, I&apos;d love to talk."
            eyebrow="Contact"
            title="Let&apos;s talk about the role, the team, and what you need built."
          />

          <div className="mt-10 grid gap-4">
            {contactMethods.map(({ href, icon: Icon, label, value }) => (
              <a
                key={label}
                className="flex items-center gap-4 rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-elevated)]"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-[color:var(--text-primary)]">
                    {label}
                  </p>
                  <p className="text-sm text-[color:var(--text-secondary)]">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
            Quick message
          </p>
          <p className="mt-4 text-sm leading-6 text-[color:var(--text-secondary)]">
            This form opens your email app with the details prefilled, which keeps
            the site simple and easy to deploy.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={inputStyles}
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Your name"
                required
                type="text"
                value={formData.name}
              />
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={inputStyles}
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="you@company.com"
                required
                type="email"
                value={formData.email}
              />
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`${inputStyles} min-h-36 resize-y`}
                id="message"
                name="message"
                onChange={handleChange}
                placeholder="Tell me about the role, team, or project."
                required
                value={formData.message}
              />
            </div>

            <Button className="w-full justify-center" type="submit">
              Send message
            </Button>
          </form>

          {statusMessage ? (
            <p className="mt-4 text-sm text-[color:var(--text-muted)]">{statusMessage}</p>
          ) : null}
        </div>
      </section>
    </PageTransition>
  );
}
