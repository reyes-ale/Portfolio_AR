import React from 'react';
import ReactDOM from 'react-dom/client';

// Estilos globales primero, para que los CSS Modules de cada componente los sobrescriban.
import './styles/fonts.js';
import './styles/index.css';

import App from './App.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
