import React from 'react';
import './Search.css'; // Import the CSS file

function Search({ setSearch }) {
  return (
    <div>
      <div className="searchBar">
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Search by Task Name..." 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <img src="./src/assets/search.svg" alt="Search" />
      </div>
    </div>
  );
}

export default Search;
