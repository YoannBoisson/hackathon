import Searchbar from "./components/SearchBar/Searchbar";
import Navbar from "./components/Navbar";
import Router from "./routes";
import EmojiWheel from "./components/EmojiWheel/EmojiWheel";


function App() {
  return (
    <div className="app-container">
      <Searchbar />
      <Navbar />
      <EmojiWheel />
      <Router />
    </div>
  );
}

export default App;
