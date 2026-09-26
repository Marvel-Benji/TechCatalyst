import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavoritesProvider from './context/FavoritesContext';
import ThemeProvider from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </StrictMode>
)
