import React from 'react';
import Search from './Search';
import Options from './Options';
import './Navbottom.css'; // Import the CSS file

function Navbottom({ setSearch, sortTasks }) {
  return (
    <div className="navbottom">
      <Search setSearch={setSearch} />
      <Options sortTasks={sortTasks} />
    </div>
  );
}

export default Navbottom;
