import Searchbar from "./components/SearchBar/Searchbar";
import Navbar from "./components/Navbar";
import Router from "./routes";
import EmojiWheel from "./components/EmojiWheel/EmojiWheel";
import ThemeSwitcher from './contexts/ThemeSwitcher';


function App() {
  return (
    <div className="app-container">
      <ThemeSwitcher />
      <Navbar />
      <EmojiWheel />
      <Searchbar />
      <Router />
    </div>
  );
}

export default App;
