import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { MetaMaskInpageProvider } from "@metamask/providers";
import MetaMaskAccountProvider from './providers/MetaMaskProvider';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MetaMaskAccountProvider>
        <App />
      </MetaMaskAccountProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
