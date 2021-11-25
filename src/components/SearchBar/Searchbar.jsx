import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";
import SearchResult from '../SearchResult/SearchResult';

function Searchbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const result = e.target.value;
    setSearch(result);
  };

  window.addEventListener("click", (e) => {
    if (document.getElementById("searchbar").contains(e.target)) {
      const clear = "";
      setSearch(clear);
    } else {
      const clear = "";
      setSearch(clear);
    }
  });

  return (
    <form action="">
      <input
        type="search"
        required
        id="searchbar"
        value={search}
        onChange={handleSearch}
      />
      <SearchIcon className="fa"/>
      {search && <SearchResult search={search} />}
    </form>
  );
}

export default Searchbar;
