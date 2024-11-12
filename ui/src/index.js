import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './overAllStyle.css';
import configureStore from './redux/store';
import { RouterApp } from './Router';

// loads the page component with React
const root = createRoot(document.getElementById('root'));
const { store, persistor } = configureStore();

root.render(
  <div style={{ display: 'grid' }}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterApp future={{ v7_relativeSplatPath: true }} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </div>
);
