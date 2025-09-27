import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './LoginPage'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import MainPage from './MainPage'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={ <LoginPage /> }/>
        <Route path='/main' element={ <MainPage /> }/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
