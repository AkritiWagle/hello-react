// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CustomerProvider from './customerContext';
import { ThemeProvider } from './themeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
