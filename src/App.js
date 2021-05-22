import React from 'react';
import "./styles/global.css"
import Routes from "../src/routes"


import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  return (
    <>  
      <Router>
        <Navbar/>
          <Routes/>
      </Router>
    </>
  )
}