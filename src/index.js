import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/home.css';
import Home from './pages/home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

