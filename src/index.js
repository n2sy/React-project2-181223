import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CandidatContextProvider } from './store/CandidatsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CandidatContextProvider>
    <App />
  </CandidatContextProvider>
);

