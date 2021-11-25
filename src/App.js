import Searchbar from "./components/SearchBar/Searchbar";
import Navbar from "./components/Navbar";
import Router from "./routes";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Router />
      <Searchbar />
    </div>
  );
}

export default App;
