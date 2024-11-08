import React, { useState } from 'react';
import { searchMonster } from '../APIScrollBox/apiInfo.js';
import FilterForm from '../APIScrollBox/filterPop.js';

export default function ScrollBoxPage() {
  const [searchText, setSearchText] = useState([]);
  const [isExact, setIsExact] = useState(false);

  function openForm() {
    document.getElementById('FilterForm').style.display = 'inline-block';
  }

  const scrollBar = (
    <div className="monster">
      <h2>Monster Search</h2>
      <div style={{ flexDirection: 'row' }}>
        <input
          type="text"
          id="monsterInput"
          placeholder="Enter a monster name"
        />
        <button type="submit" id="searchButton" onClick={searchMonster}>
          {' '}
          Search{' '}
        </button>{' '}
        {/* A button to open the popup form */}{' '}
        <button className="open-button" onClick={openForm}>
          Filters
        </button>
        <input type="checkbox" onClick={(e) => setIsExact(true)}></input>
        {/* The Filter form */ <FilterForm setSearchText={setSearchText} />}
      </div>
      <section id="monsterResult"></section>
    </div>
  );

  return <>{scrollBar}</>;
}
