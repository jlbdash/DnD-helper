import React, { useState } from 'react';
import FilterForm from '../Components/scrollBoxApiFilter.js';
import { searchMonster } from '../Components/scrollBoxApiInfo.js';

export default function ScrollBoxPage() {
  const [searchText, setSearchText] = useState([]);
  const [isExact, setIsExact] = useState(false);

  function openForm() {
    document.getElementById('FilterForm').style.display = 'inline-block';
  }

  const scrollBar = (
      <section>
        <div className="monster">
          <h2>Monster Search</h2>
          <div style={{ flexDirection: 'row' }}>
            <input
              type="text"
              id="monsterInput"
              placeholder="Enter a monster name"
            />
            <button className="scrollButton" type="submit" id="searchButton" onClick={searchMonster}>
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
      </section>
  );

  return <>{scrollBar}</>;
}
