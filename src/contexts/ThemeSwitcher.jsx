import { useContext } from "react";
import "./theme-switcher.css";
import ThemeContext from "./ThemeContext";

function ThemeSwitcher() {
 const { toggleTheme } = useContext(ThemeContext);

   return (
       <input type="checkbox" className="check-theme" onChange={toggleTheme} />
   );
}

export default ThemeSwitcher;
