import { useEffect, useMemo, useState } from "react";

import {
  applyResolvedTheme,
  getInitialThemeState,
  getSystemTheme,
  resolveTheme,
  STORAGE_KEY,
  ThemeContext,
} from "./theme";

export function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState(getInitialThemeState);

  useEffect(() => {
    applyResolvedTheme(themeState.resolvedTheme);

    if (themeState.theme === "system") {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, themeState.theme);
  }, [themeState]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setThemeState((currentState) => {
        if (currentState.theme !== "system") {
          return currentState;
        }

        return {
          ...currentState,
          resolvedTheme: getSystemTheme(),
        };
      });
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const setTheme = (theme) => {
    setThemeState({
      theme,
      resolvedTheme: resolveTheme(theme),
    });
  };

  const value = useMemo(
    () => ({
      theme: themeState.theme,
      resolvedTheme: themeState.resolvedTheme,
      isDark: themeState.resolvedTheme === "dark",
      setTheme,
      toggleTheme: () =>
        setTheme(themeState.resolvedTheme === "dark" ? "light" : "dark"),
    }),
    [themeState],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
