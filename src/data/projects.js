export const projects = [
  {
    id: "opsboard",
    title: "OpsBoard",
    focus: "Product dashboard",
    type: "Full-stack dashboard",
    period: "6-week build",
    role: "Frontend-focused full-stack developer",
    featured: true,
    summary:
      "A support operations dashboard that turned a noisy internal workflow into a clearer, faster interface for daily triage.",
    heroBlurb:
      "Built to replace spreadsheet-driven triage with a cleaner product experience and a single source of truth for support teams.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/chrvnixx/opsboard",
    liveUrl: "https://opsboard-demo.vercel.app",
    problem:
      "Support leads were switching between spreadsheets, chat threads, and email updates just to understand queue health. That slowed down handoffs and made SLA risk hard to spot early.",
    approach:
      "I designed role-based views, queue filters, audit logs, and backend endpoints around the way operations leads actually review work. The main focus was making the interface feel fast to scan, calm under pressure, and easy to trust.",
    challenges: [
      "Keeping filtered lists responsive without over-fetching data.",
      "Designing an activity log that stayed useful without becoming noisy.",
      "Balancing optimistic updates in the UI with trustworthy backend state.",
    ],
    outcome:
      "The result was a faster triage flow, clearer ownership across the queue, and an internal tool that felt like a polished product instead of a stitched-together workflow.",
    impact: [
      "Unified triage, notes, and SLA monitoring in one view.",
      "Improved visibility for queue health and ownership.",
      "Reduced context switching during daily ops reviews.",
    ],
  },
  {
    id: "ledgerflow-api",
    title: "LedgerFlow API",
    focus: "Backend systems",
    type: "Transaction service",
    period: "5-week build",
    role: "Full-stack developer",
    featured: false,
    summary:
      "A backend service for wallet transactions, webhook processing, and reconciliation with clear auditability.",
    heroBlurb:
      "Designed for the edge cases that usually break finance flows: retries, duplicates, partial failure, and traceability.",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "REST APIs"],
    githubUrl: "https://github.com/chrvnixx/ledgerflow-api",
    liveUrl: "https://ledgerflow-api.onrender.com",
    problem:
      "Transaction flows often work on the happy path but become messy when retries, duplicate webhooks, and reconciliation enter the picture. I wanted to build a service that handled those realities cleanly.",
    approach:
      "I focused on idempotent endpoints, explicit transaction states, predictable webhook handling, and logging that made failures easy to trace. Documentation stayed close to the implementation so the service was easier to onboard to.",
    challenges: [
      "Modeling transaction states clearly enough for both developers and operators.",
      "Handling retries without accidental double processing.",
      "Keeping logs useful for debugging without leaking sensitive data.",
    ],
    outcome:
      "The final service was easier to reason about, easier to test, and much safer around the operational edge cases that teams usually discover too late.",
    impact: [
      "Made transaction state transitions explicit and easier to debug.",
      "Reduced accidental duplicate processing with idempotent request handling.",
      "Created a cleaner foundation for future reporting and reconciliation work.",
    ],
  },
  {
    id: "hireloop",
    title: "HireLoop",
    focus: "Frontend product UX",
    type: "Recruiting workspace",
    period: "4-week build",
    role: "Frontend / full-stack developer",
    featured: true,
    summary:
      "A lightweight recruiting workspace focused on scan-friendly UI, candidate movement, and a smoother hiring workflow.",
    heroBlurb:
      "Built to make hiring pipelines easier to scan, easier to update, and easier for small teams to collaborate around.",
    stack: ["React", "React Router", "Tailwind CSS", "Supabase", "Framer Motion"],
    githubUrl: "https://github.com/chrvnixx/hireloop",
    liveUrl: "https://hireloop-demo.vercel.app",
    problem:
      "Early-stage teams often track hiring in scattered documents. That works until candidate volume increases and interview context starts getting lost between teammates.",
    approach:
      "I designed the app around quick scanning: clear stage columns, candidate timelines, compact notes, and smooth interactions that supported the workflow without turning it into a heavy enterprise tool. Most of the work centered on layout clarity, interaction polish, and keeping dense information approachable.",
    challenges: [
      "Keeping the UI dense enough for speed while still feeling approachable.",
      "Designing transitions that added orientation without becoming distracting.",
      "Structuring candidate data so notes and stage history stayed easy to follow.",
    ],
    outcome:
      "The product made candidate pipelines easier to understand at a glance and showed my ability to pair UI polish with practical workflow thinking.",
    impact: [
      "Made applicant stage movement easier to understand across the team.",
      "Reduced the need for separate notes documents and status spreadsheets.",
      "Demonstrated thoughtful UX in a workflow-heavy interface.",
    ],
  },
  {
    id: "stockpilot",
    title: "StockPilot",
    focus: "Data-rich interface",
    type: "Inventory tracking app",
    period: "5-week build",
    role: "Frontend-focused full-stack developer",
    featured: true,
    summary:
      "An inventory tracking app that helped small sellers monitor stock levels, restock timing, and trends through a clean, readable dashboard.",
    heroBlurb:
      "Created for teams that need operational visibility through a lightweight interface instead of oversized retail software.",
    stack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/chrvnixx/stockpilot",
    liveUrl: "https://stockpilot-demo.vercel.app",
    problem:
      "Small sellers usually know when stock is running low, but not always which products are actually driving useful revenue or creating replenishment risk.",
    approach:
      "I combined transaction summaries, restock alerts, and visual trend reporting in one interface so store owners could make better stocking decisions without learning a complicated BI tool. The goal was to make data-heavy screens feel immediately understandable.",
    challenges: [
      "Turning sales data into clear trends without overcomplicating the interface.",
      "Making summary cards meaningful for both daily checks and weekly reviews.",
      "Keeping charts readable on small screens.",
    ],
    outcome:
      "The final product turned raw stock movement into something actionable and gave me another strong example of frontend-heavy product design paired with a practical backend.",
    impact: [
      "Surfaced low-stock and slow-moving products quickly.",
      "Turned daily inventory checks into a faster routine.",
      "Created a cleaner bridge between raw data and useful decisions.",
    ],
  },
];
