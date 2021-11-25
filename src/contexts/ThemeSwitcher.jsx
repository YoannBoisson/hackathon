import { useContext } from "react";
import "./theme-switcher.css";
import ThemeContext from "./themeContext";

function ThemeSwitcher() {
 const { toggleTheme } = useContext(ThemeContext);

   return (
       <input type="checkbox" onChange={toggleTheme} />
   );
}

export default ThemeSwitcher;
