import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { siteConfig } from "../../data/site";
import { cn } from "../../utils/cn";
import ThemeToggle from "../ui/ThemeToggle";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link className="flex items-center gap-3" to="/">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-sm font-semibold tracking-[0.16em] text-[color:var(--accent-strong)]">
              AA
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-[color:var(--text-primary)]">
                {siteConfig.name}
              </p>
              <p className="text-xs text-[color:var(--text-muted)]">
                {siteConfig.role}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                      : "text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-elevated)] hover:text-[color:var(--text-primary)]",
                  )
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex size-11 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] text-[color:var(--text-primary)] transition-all duration-200 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)] md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.nav
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden border-t border-[color:var(--border)] md:hidden"
              exit={{ opacity: 0, height: 0 }}
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-2 px-4 py-4 sm:px-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                          : "text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-elevated)] hover:text-[color:var(--text-primary)]",
                      )
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
