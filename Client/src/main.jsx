import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="837831568495-l16amai1gh8336akpfn4e314nefc33gn.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </StrictMode>,
)
