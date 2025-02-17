import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import { UsersApp } from './pages/users/UsersApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>,
)
