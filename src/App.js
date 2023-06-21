import React from 'react'
import Headermain from './components/Headermain'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Image from "./components/Image.js"
import Header from './components/Header'
import Electronics from './pages/Electronics'
import Home from './pages/Home'
import Motors from './pages/Motors'
import Fashion from './pages/Fashion'
import Sports from './pages/Sports'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Cart from './pages/Cart'
import Notfound from './pages/Notfound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='electronics' element={<Electronics/>}/>
  <Route path='motors' element={<Motors/>}/>
  <Route path='fashion' element={<Fashion/>}/>
  <Route path='sports' element={<Sports/>}/>
  <Route path='signin' element={<Signin/>}/>
  <Route path='signup' element={<Signup/>}/>
  <Route path='cart' element={<Cart/>}/>
  <Route path='*' element={<Notfound/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App