import Searchbar from "./components/SearchBar/Searchbar";
import ThemeSwitcher from "./contexts/ThemeSwitcher";
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Searchbar />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
