import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import App from './App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Documentation from './pages/Documentation.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/user_dashboard/Profile.jsx'
import Appointment from './pages/user_dashboard/Appointment.jsx'
import Notification from './pages/user_dashboard/Notification.jsx'
import Main_dashboard from './pages/user_dashboard/Main_dashboard.jsx'
import Main_page from './pages/Main_page.jsx'
import Hospitalsignup1 from './pages/hospitalsignup1.jsx'
import Main_hospital_dashboard from './pages/hospital_dashboard/Main_hospital_dashboard.jsx'
import Profiles from './pages/hospital_dashboard/Profile.jsx'
import Notifications from './pages/hospital_dashboard/Notification.jsx'
import Appointments from './pages/hospital_dashboard/Appointment.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Router>
          <Routes>
          {/* Public Pages */}
            <Route exact path='/' element={<Main_page/>}/>
              <Route exact path='/home' element={<Home/>}/>
              <Route exact path='/services' element={<Services/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/documentation' element={<Documentation/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/signup' element={<Signup/>}/>
              <Route exact path='/hospitalsignup1' element={<Hospitalsignup1/>}/>
            
            {/* Dashboard user_account pages  */}
          <Route path='/main_dashboard' element={<Main_dashboard/>}>
            <Route path='' element={<Profile />} />
            <Route path='/main_dashboard/appointment' element={<Appointment />} />
            <Route path='/main_dashboard/notification' element={<Notification />} />
            <Route path='/main_dashboard/profile' element={<Profile />} />
            
          </Route>
          <Route path='/main_hospital_dashboard' element={<Main_hospital_dashboard/>}>
            <Route path='' element={<Profiles />} />
            <Route path='/main_hospital_dashboard/appointments' element={<Appointments />} />
            <Route path='/main_hospital_dashboard/notifications' element={<Notifications />} />
            <Route path='/main_hospital_dashboard/profiles' element={<Profiles />} />
            
          </Route>
          </Routes>
        </Router>
      </React.StrictMode>
);