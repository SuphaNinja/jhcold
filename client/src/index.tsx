import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './providers/Providers';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <Toaster />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();