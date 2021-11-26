import React, { useState, useCallback, createContext, useMemo } from "react";


const THEMES = {
  light: {
    color: "#000",
    backgroundColor: "#fff",
    border: "#000",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#000",
    border: "#fff",
  },
};

const THEMESTITLE = {
  light: {
    color: "#000",
  },
  dark: {
    color: "#fff",
  },
};

const ThemeContext = createContext({
  theme: THEMES.dark,
  themeTitle: THEMESTITLE.dark,
  toggleTheme: () => {}
})

export const ThemeContextProvider= ({children}) => {
  const [theme, setTheme] = useState("light");
  const [themeTitle, setThemeTitle] = useState("light");

  const toggleTheme = useCallback(function () {
    setTheme((t) => (t === "light" ? "dark" : "light"));
    setThemeTitle((t) => (t === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(function (){
    return {
      theme: theme === "light" ? THEMES.light : THEMES.dark,
      themeTitle: themeTitle === "light" ? THEMESTITLE.light : THEMESTITLE.dark,
      toggleTheme
    }
  }, [toggleTheme, themeTitle, theme])


  return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
  );
}


export default ThemeContext;
