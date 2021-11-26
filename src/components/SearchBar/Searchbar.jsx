import React, { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchResult from '../SearchResult/SearchResult';
import ThemeContext from "../../contexts/ThemeContext";
import "./searchbar.css";

function Searchbar() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleSearch = (e) => {
    const result = e.target.value;
    setSearch(result);
  };

  /* window.addEventListener("click", (e) => {
    if (document.getElementById("searchbar").contains(e.target)) {
      const clear = "";
      setSearch(clear);
    } else {
      const clear = "";
      setSearch(clear);
    }
  }); */

  return (
    <form className="searchform" action="">
      <input
        className="searchinput"
        type="search"
        required
        id="searchbar"
        value={search}
        onChange={handleSearch}
        style={theme}
      />
      <SearchIcon className="fa" />
      {search && <SearchResult search={search} />}
    </form>
  );
}

export default Searchbar;
