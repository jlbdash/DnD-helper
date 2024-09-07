import React from 'react';
// import { movement } from './scrollingMischief.js';
import {searchMonster } from './apiInfo.js';

export default function ScrollBoxApp() {
  const scrollBar = (
    <div className="monster">
      <h2>Monster Search</h2>
      <input type="text" id="monsterInput" placeholder="Enter a monster name" />
      <button type="submit" id="searchButton" onClick={searchMonster}>
        {' '}
        Search{' '}
      </button>
      <div id="monsterResult"></div>
    </div>
  );

  return (
    <>
      {scrollBar}
    </>
  );
}
