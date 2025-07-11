import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
function App() {


  return (
    <div className="App">

  <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/abut' element={<AboutUs/>}/>
   </Routes>
    </div>
  )
}

export default App
