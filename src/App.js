import Navbar from "./components/Navbar";
import Router from "./routes";
import ThemeSwitcher from './contexts/ThemeSwitcher';


function App() {
  return (
    <div className="app-container">
      <ThemeSwitcher />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
