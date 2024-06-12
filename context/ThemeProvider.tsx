"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

// create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");
  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <NextTopLoader
        color="#ff7000"
        crawlSpeed={700}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={700}
        shadow="0 0 10px #ff7000,0 0 5px #ff7000"
      />

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
