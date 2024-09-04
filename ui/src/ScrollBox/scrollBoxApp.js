import React from 'react';
import { movement } from './scrollingMischief.js';
import { scrollInfo } from './scrollInfo.js';

export default function ScrollBoxApp() {
  {
    movement;
  }

  const scrollBar = (
    <div className="monster">
      <h2>Monster Search</h2>
      <input type="text" id="monsterInput" placeholder="Enter a monster name" />
      <button type='submit' id="searchButton" > Search </button>
      <div id="monsterResult" class="monster-result"></div>
    </div>
  );

  return (
    <>
      {scrollBar} <br /> {scrollInfo}
    </>
  );
}
