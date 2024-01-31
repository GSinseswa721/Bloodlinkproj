import React from 'react'
import '../styles/Side_bar.css'
import logo from '../assets/Group 2410logo.svg'
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { AiFillProfile } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';


const Side_bar = () => {
    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.replace('/home');
    };
  return (
    <>
    <div>
    <div class="Side_Bar">
        <div class="logo-dashboard">

          <div className='logoo'><img src={logo} alt="Checkbox" /></div>

        </div>

        <figure class="Menu">
          <figcaption>OVERVIEW</figcaption>
            <div className="LinkS">
              <MdDashboard className='icon'/>
              <Link to="/main_dashboard" className="LinkS">Dashboard</Link>
            </div>
            <div className="LinkS">
              <FaCalendarAlt className='icon' />
              <Link to="/main_dashboard/appointment"className="LinkS"> Appointments</Link>
            </div>
            <div className="LinkS">
              <IoNotificationsCircle className='icon'/>
              <Link to="/main_dashboard/notification" className="LinkS" > Notifications</Link>
            </div >
        </figure>
        <figure class="settings">
          <figcaption>SETUP</figcaption>
            <div className="LinkS">
              <AiFillProfile className='icon'/>
              <Link to="/main_dashboard/profile" className="LinkS"> Profile</Link>
            </div>
            <div className="LinkS">
              <FiLogOut className='icon'/>
              <Link to="" className="LinkS" onClick={logOut}> Log out</Link>
            </div>
        </figure>
      </div>
    </div>
      
    </>
  );
}

export default Side_bar