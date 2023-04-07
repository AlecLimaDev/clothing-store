import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ClothingProvider } from '../contexts/ClothingContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClothingProvider>
    <App />
    </ClothingProvider>
  </React.StrictMode>
)
