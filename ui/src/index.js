import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CharacterSearchPage from './Pages/CharacterSearchPage.js';
import CreateCharacterPage from './Pages/CreateCharacterPage.js';
import ScrollBoxPage from './Pages/ScrollBoxPage.js';
import Navie from './nav.js';
import './overAllStyle.css';

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
          <CreateCharacterPage />
        </div>
        <div id="containernavList" className="inactive">
          <CharacterSearchPage />
        </div>
        <div id="containernavSearch" className="inactive">
            <ScrollBoxPage />
        </div>
      </div>
    </StrictMode>
  </div>
);
