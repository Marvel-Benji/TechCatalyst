import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");

    return savedTheme 
      ? JSON.parse(savedTheme)
      : false;
  });

  // Add/remove the dark class
  useEffect (() => {
    document.documentElement.classList.toggle 
    (
      "dark",
      darkMode
    );
  }, [darkMode]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;