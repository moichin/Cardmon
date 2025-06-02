import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './components/Container'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container></Container>
  </StrictMode>,
)
