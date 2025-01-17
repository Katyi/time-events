import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import App from './App';

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
