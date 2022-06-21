import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const mountNode = document.getElementById('container');
const root = ReactDom.createRoot(mountNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);