import React from 'react';
import { movement } from './scrollingMischief.js';
import { scrollInfo } from './scrollInfo.js';

export default function ScrollBoxApp() {
  {
    movement;
  }

  const scrollBar = (
    <div className="">
      <h1>Monster Search</h1>
      <input type="text" id="monsterInput" placeholder="Enter a monster name" />
      <button id="searchButton">Search</button>
      <div id="monsterResult" class="monster-result"></div>
    </div>
  );

  return (
    <>
      {scrollBar} <br /> {scrollInfo}
    </>
  );
}
