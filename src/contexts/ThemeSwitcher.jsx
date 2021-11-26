import { useContext } from "react";
import "./theme-switcher.css";
import ThemeContext from "./ThemeContext";

function ThemeSwitcher() {
<<<<<<< HEAD
  const { toggleTheme } = useContext(ThemeContext);

  return <input type="checkbox" onChange={toggleTheme} />;
=======
 const { toggleTheme } = useContext(ThemeContext);
   return (
       <input type="checkbox" className="check-theme" onChange={toggleTheme} />
   );
>>>>>>> bdc334281deebd259d2b811e40a548beaea7117a
}

export default ThemeSwitcher;
