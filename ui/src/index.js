import React, { StrictMode } from 'react';
import './overAllStyle.css';
import { createRoot } from 'react-dom/client';
import Navie from './nav.js';

// loads the page component with React
const root = createRoot(document.getElementById('root'));

root.render(
  <div style={{ display: 'grid' }}>
    <StrictMode>
      <Navie />
      <br />
      <div id="container">
        {/* <div id="buttonAdd" className="inactive">
          <CreateCharacter />
        </div>
        <div id="buttonList" className="inactive">
          <ScrollBoxApp />
        </div>
        <div id="buttonSearch" className="spaced, inactive">
          <SearchApp />
        </div> */}
        <h2>Start Your Quest</h2>
      </div>
    </StrictMode>
  </div>
);
