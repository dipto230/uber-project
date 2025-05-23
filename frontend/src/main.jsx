import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import CaptainProvider from './context/CaptainContext'; // ✅ Rename import here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainProvider> {/* ✅ Use the correct name */}
      <BrowserRouter>
        <UserContext>
          <App />
        </UserContext>
      </BrowserRouter>
    </CaptainProvider>
  </StrictMode>
);
