import React,{useState} from "react";
import './searchbar.css';

function Searchbar() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
      const result = e.target.value;
      setSearch(result);
    };
  
    window.addEventListener('click', (e) => {
      if (document.getElementById('searchbar').contains(e.target)) {
        const clear = '';
        setSearch(clear);
      } else {
        const clear = '';
        setSearch(clear);
      }
    });


  return (
    <form action="">
      <input type="search" required id="searchbar" />
      <i class="fa fa-search"></i>
    </form>
  );
}

export default Searchbar;
