import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigavtionBar from './Components/navigationBar';
import { RouterApp } from './Router';
import './overAllStyle.css';
import configureStore from './redux/store';

// loads the page component with React
const root = createRoot(document.getElementById('root'));
const { store, persistor } = configureStore();

root.render(
  <div style={{ display: 'grid' }}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <NavigavtionBar />
        <Provider store={store}>
          <RouterApp />
        </Provider>
      </PersistGate>
    </React.StrictMode>
  </div>
);
