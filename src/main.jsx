import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // <-- Import this
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">  {/* Or set a subfolder like "/my-app" if needed */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

