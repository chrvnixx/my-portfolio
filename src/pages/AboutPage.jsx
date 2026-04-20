import PageTransition from "../components/layout/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import { aboutHighlights, siteConfig, techGroups } from "../data/site";

const workingStyle = [
  "I prefer frontend work that feels intentional, fast, and easy for people to understand.",
  "I enjoy balancing product polish with practical engineering tradeoffs.",
  "I care about maintainability because clean UI and clean code both matter long after launch.",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            description="I like work that starts with a real problem and ends with something calm, useful, and easy to maintain."
            eyebrow="About"
            title="Frontend developer with a practical product mindset."
          />

          <div className="mt-8 space-y-4 text-base leading-7 text-[color:var(--text-secondary)]">
            <p>
              I&apos;m {siteConfig.name}, a developer who enjoys turning messy
              requirements into software that feels thoughtful and easy to use. Most
              of my energy goes into frontend implementation, interface structure,
              and the small interaction details that make a product feel more
              polished and complete.
            </p>
            <p>
              I still value backend knowledge because good frontend work depends on
              sensible data flow, clean integrations, and Node.js systems that do
              not fight the user experience. I like being able to bridge both sides,
              even though the frontend is where I do my strongest work.
            </p>
          </div>
        </div>

        <aside className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
            What teammates can expect
          </p>

          <div className="mt-6 space-y-3">
            {workingStyle.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-4 text-sm leading-6 text-[color:var(--text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {aboutHighlights.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
              {item.title}
            </p>
            <p className="mt-5 text-base leading-7 text-[color:var(--text-secondary)]">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <SectionHeading
          description="I keep my stack focused on tools that support strong frontend delivery, smooth collaboration, and reliable Node.js-backed implementation."
          eyebrow="Tech Stack"
          title="Relevant tools, grouped by the work they help me do."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="flex h-full flex-col rounded-[26px] border border-[color:var(--border)] bg-[color:var(--surface-elevated)] p-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
                {group.title}
              </p>

              <p className="mt-4 text-sm leading-6 text-[color:var(--text-secondary)]">
                {group.description}
              </p>

              <div className="mt-5 grid gap-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-3 text-sm font-medium text-[color:var(--text-secondary)]"
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
