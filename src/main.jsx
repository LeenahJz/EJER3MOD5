import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { worker } from './mocks/browser';
worker.start();

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
