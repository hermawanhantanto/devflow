"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextProps {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");

  const handleChangeTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");

      document.documentElement.classList.add("dark");
      console.log(mode);
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
      console.log(mode);
    }
  };

  useEffect(() => {
    handleChangeTheme();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
