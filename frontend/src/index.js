import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './index.css'; // Assuming you have this file for base styles

// 1. Get a reference to the div with id "root"
const rootElement = document.getElementById('root');

// 2. Create a root for the React app
const root = ReactDOM.createRoot(rootElement);

// 3. Render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);