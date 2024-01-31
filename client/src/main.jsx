import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Documentation from './pages/Documentation.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'


import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/services' element={<Services/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/documentation' element={<Documentation/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
          </Routes>
        </Router>
      </React.StrictMode>
);