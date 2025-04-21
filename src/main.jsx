import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './globalStyles/globalStyles.js'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>
)
