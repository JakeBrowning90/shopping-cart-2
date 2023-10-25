import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Removed Strict mode to prevent double API fetch
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
