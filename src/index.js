import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 için doğru import
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
