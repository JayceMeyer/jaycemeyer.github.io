import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import './css/main.css'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
