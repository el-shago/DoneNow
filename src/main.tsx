import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AccountMenu from './pages/AccountMenu.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccountMenu />
    <App />
  </React.StrictMode>,
)
