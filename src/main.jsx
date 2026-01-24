/**
 * Point d'entrée principal de l'application React
 * 
 * Ce fichier initialise l'application React et la monte dans le DOM.
 * StrictMode aide à identifier les problèmes potentiels dans l'application pendant le développement.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Créer la racine React et rendre l'application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
