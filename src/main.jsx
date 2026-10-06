import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/Card'
import './styles/index.css'
import Home from './pages/Home'
import { Button as ShadCNbutton } from './components/ui/button'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Card/>
    <ShadCNbutton variant='destructive'> this is a button</ShadCNbutton>

   
    
  </StrictMode>,
)
