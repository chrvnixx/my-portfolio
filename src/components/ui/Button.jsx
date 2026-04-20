import { Link } from "react-router-dom";

import { cn } from "../../utils/cn";

const variantStyles = {
  primary:
    "bg-[linear-gradient(135deg,var(--accent-strong),var(--accent-secondary))] text-white shadow-[0_18px_45px_rgba(219,90,45,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(219,90,45,0.35)]",
  secondary:
    "border border-[color:var(--border)] bg-[color:var(--surface-elevated)] text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)]",
  ghost:
    "border border-transparent bg-transparent text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-elevated)] hover:text-[color:var(--text-primary)]",
};

const sizeStyles = {
  md: "px-5 py-3 text-sm",
  sm: "px-4 py-2.5 text-sm",
};

function isExternalLink(href) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function Button({
  children,
  className,
  href,
  size = "md",
  to,
  variant = "primary",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = isExternalLink(href);

    return (
      <a
        className={classes}
        href={href}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
