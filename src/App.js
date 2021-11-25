import Searchbar from "./components/SearchBar/Searchbar";
import Navbar from "./components/Navbar";
import Router from "./routes";


function App() {
  return (
    <div className="app-container">
      <Searchbar />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
