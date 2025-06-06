import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import {BrowserRouter} from "react-router"
import App from './App.jsx'
import { CopyProtectionProvider } from "./context/CopyProtectionContext";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CopyProtectionProvider> 
      <App />
    </CopyProtectionProvider>
  </BrowserRouter>
)





