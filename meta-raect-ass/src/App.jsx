// import React from 'react'
import './App.css'

import Factorial from './components/Factorial'
import ReverseString from './components/ReverseString'
import Palindrome from './components/Palindrome'
import MaxMinValue from './components/MaxMinValue'
import Sorting from './components/Sorting'
import LoginForm from './components/LoginForm'
import Calculator from './components/Calculator'
import AreaCal from './components/AreaCal'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home(){
  return(
    <h1 className='home-heading'>React practice exercies </h1>

  )
}

function App() {

  return (
    <>
      <BrowserRouter>
      <nav className='Home-Nav'>
        <Link to="/" className="Nav-Link">Home</Link>
        <Link to="/Factorial" className="Nav-Link">Factorial</Link>
        <Link to="/ReverseString" className="Nav-Link">ReverseString</Link>
        <Link to="/Palindrome" className="Nav-Link">Palindrome</Link>
        <Link to="/MaxMinValue" className="Nav-Link">MaxMinValue</Link>
        <Link to="/Sorting" className="Nav-Link">Sorting</Link>
        <Link to="/LoginForm" className="Nav-Link">LoginForm</Link>
        <Link to="/Calculator" className="Nav-Link">Calculator</Link>
        <Link to="/area" className="Nav-Link">Area Calculator</Link>

      </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Factorial" element={<Factorial />}></Route>
          <Route path="/ReverseString" element={<ReverseString />}></Route>
          <Route path="/Palindrome" element={<Palindrome />}></Route>
          <Route path="/MaxMinValue" element={<MaxMinValue />}></Route>
          <Route path="/Sorting" element={<Sorting />}></Route>
          <Route path="/LoginForm" element={<LoginForm />}></Route>
          <Route path="/Calculator" element={<Calculator />}></Route>
          <Route path="/area" element={<AreaCal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
