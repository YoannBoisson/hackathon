import Searchbar from "./components/SearchBar/Searchbar";
import Navbar from "./components/Navbar";
import Router from "./routes";
import ThemeSwitcher from './contexts/ThemeSwitcher';


function App() {
  return (
    <div className="app-container">
      <ThemeSwitcher />
      <Navbar />
      <Searchbar />
      <ThemeSwitcher />
      <Router />
    </div>
  );
}

export default App;
