import React, { useState } from 'react';
import { searchMonster } from './apiInfo.js';
import SearchButton from '../Components/searchButton.js';

export default function ScrollBoxApp() {
  const [searchText, setSearchText] = useState('');
  const [isExact, setIsExact] = useState(false);
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
        <button class="open-button" onclick="openForm()">
          Open Form
        </button>
      </div>
      <section id="monsterResult"></section>
    </div>
  );

  return <>{scrollBar}</>;
}
