import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

export default function StackMarquee({
  className,
  items,
  reverse = false,
  tone = "accent",
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)] p-2 shadow-[var(--shadow-soft)]",
        className,
      )}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.2, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={cn("marquee-track", reverse ? "marquee-reverse" : "marquee-forward")}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={cn(
              "mr-3 inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium whitespace-nowrap",
              tone === "accent" &&
                "border-[color:var(--border)] bg-[color:var(--surface-elevated)] text-[color:var(--text-primary)]",
              tone === "warm" &&
                "border-transparent bg-[linear-gradient(135deg,rgba(240,109,55,0.14),rgba(245,179,74,0.18),rgba(103,196,111,0.12))] text-[color:var(--text-primary)]",
            )}
          >
            <span className="size-2 rounded-full bg-[color:var(--accent-tertiary)]" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
