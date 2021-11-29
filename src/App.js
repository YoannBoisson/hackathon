import {useContext} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes";
import ThemeSwitcher from "./contexts/ThemeSwitcher";
import Title from "./components/Title/Title";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app-container" style={theme}>
      <Title />
      <ThemeSwitcher />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
