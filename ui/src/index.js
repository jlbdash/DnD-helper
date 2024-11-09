import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import NavigavtionBar from './Components/NavigationBar';
import { RouterApp } from './Router';
import './overAllStyle.css';

// loads the page component with React
const root = createRoot(document.getElementById('root'));

root.render(
  <div style={{ display: 'grid' }}>
    <React.StrictMode>
      <NavigavtionBar />
      <RouterProvider>
        <RouterApp />
      </RouterProvider>
    </React.StrictMode>
  </div>
);
