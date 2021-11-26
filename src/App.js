import Navbar from "./components/Navbar/Navbar";
import Router from "./routes";
import ThemeSwitcher from "./contexts/ThemeSwitcher";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="app-container">
      <Title />
      <ThemeSwitcher />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
