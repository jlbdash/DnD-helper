import React, { StrictMode } from 'react';
import './overAllStyle.css';
import { createRoot } from 'react-dom/client';
import SearchApp from './Table/SearchApp.js';
import CreateCharacter from './Addition/CreateCharacterApp.js';
import ScrollBoxApp from './ScrollBox/scrollBoxApp.js';

// loads the Game component with React
const root = createRoot(document.getElementById('root'));

async function Changing() {
  console.log(document.getElementById('navHome').className);
  if (document.getElementById('navHome').className === 'active') {
    return <br />;
  } else if (document.getElementById('navAdd').className === 'active') {
    return <CreateCharacter />;
  } else if (document.getElementById('navList').className === 'active') {
    return <SearchApp />;
  } else {
    return <ScrollBoxApp />;
  }
}

root.render(
  <div style={{ display: 'flex' }}>
    <StrictMode>
      {Changing()}
      {/* <div className="spaced">
        <CreateCharacter />
        <br />
        <div>
          <ScrollBoxApp className="inactive" />
        </div>
      </div>
      <div style={{ width: '50px' }}></div>
      <div className="spaced, inactive">
        <SearchApp />
      </div> */}
    </StrictMode>
  </div>
);
