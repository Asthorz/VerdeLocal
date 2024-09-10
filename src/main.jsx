import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rotas from './Rotas/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas/> 
  </StrictMode>,
)
