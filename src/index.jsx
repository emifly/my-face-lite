import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pals from './pages/Pals'
import Stuff from './pages/Stuff'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'

export const LoginContext = React.createContext({
  loggedIn: false,
  username: null,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pals' element={<Pals />} />
        <Route path='/stuff' element={<Stuff />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
