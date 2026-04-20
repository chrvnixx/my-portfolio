import { createContext } from "react";

export const STORAGE_KEY = "portfolio-theme";
export const ThemeContext = createContext(null);

export function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(theme) {
  return theme === "system" ? getSystemTheme() : theme;
}

export function applyResolvedTheme(resolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolvedTheme === "dark");
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
}

export function getInitialThemeState() {
  if (typeof window === "undefined") {
    return { theme: "system", resolvedTheme: "dark" };
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  const theme =
    storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";

  return {
    theme,
    resolvedTheme: resolveTheme(theme),
  };
}
