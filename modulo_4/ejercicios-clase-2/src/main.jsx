import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExtraInfo from './components/ExtraInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById("extra-info")).render(
  <StrictMode>
    <ExtraInfo />
  </StrictMode>,
);
