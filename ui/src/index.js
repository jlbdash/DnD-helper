import React, { StrictMode } from 'react';
import './overAllStyle.css';
import { createRoot } from 'react-dom/client';
import Navie from './nav.js';
import SearchApp from './Table/SearchApp.js';
import CreateCharacter from './Addition/CreateCharacterApp.js';
import ScrollBoxApp from './ScrollBox/scrollBoxApp.js';

// loads the page component with React
const root = createRoot(document.getElementById('root'));

root.render(
  <div style={{ display: 'grid' }}>
    <StrictMode>
      <Navie />
      <br />
      <div id="container">
        <div id="containernavHome" className="active">
          <h2>Start Your Quest</h2>
        </div>
        <div id="containernavAdd" className="inactive">
          <CreateCharacter />
        </div>
        <div id="containernavList" className="inactive">
          <SearchApp />
        </div>
        <div id="containernavSearch" className="inactive">
          <ScrollBoxApp />
        </div>
      </div>
    </StrictMode>
  </div>
);
