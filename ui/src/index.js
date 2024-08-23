
import React, { StrictMode } from 'react';
import './overAllStyle.css';
import { createRoot } from 'react-dom/client';
import SearchApp from './Table/SearchApp.js';
import CreateCharacter from './Addition/CreateCharacterApp.js';
import ScrollBoxApp from './ScrollBox/scrollBoxApp.js';
import { changing } from './changer.js';

// loads the Game component with React
const root = createRoot(document.getElementById('root'));
let drop = document.getElementById('container');

console.log(document.getElementById('navHome').className);
if (document.getElementById('navHome').className === 'active') {
  drop.innerHTML = <br />;
} else if (document.getElementById('navAdd').className === 'active') {
  drop.innerHTML = <CreateCharacter />;
} else if (document.getElementById('navList').className === 'active') {
  drop.innerHTML = <SearchApp />;
} else {
  drop.innerHTML = <ScrollBoxApp />;
}

root.render(
  <div style={{ display: 'flex' }}>
    <StrictMode>
      {
        <div id='container' className="spaced">
          {/* <CreateCharacter />
        <br />
        <div>
          <ScrollBoxApp className="inactive" />
        </div>
      </div>
      <div style={{ width: '50px' }}></div>
      <div className="spaced, inactive">
        <SearchApp /> */}
        </div>
      }
    </StrictMode>
  </div>
);
