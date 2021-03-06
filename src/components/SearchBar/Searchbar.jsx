import React, { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchResult from "../SearchResult/SearchResult";
import ThemeContext from "../../contexts/ThemeContext";
import "./searchbar.css";

function Searchbar() {
  const [search, setSearch] = useState("");
  const { theme, themeTitle } = useContext(ThemeContext);

  const handleSearch = (e) => {
    const result = e.target.value;
    setSearch(result);
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default Searchbar;
