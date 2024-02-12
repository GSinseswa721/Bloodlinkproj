import React from 'react'
import '../styles/Side_bar.css'
import "../assets/assets_1/vendor/boxicons/css/boxicons.min.css" 
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
    {/* <div>
    <div class="Side_Bar">
        <div class="logo-dashboard">

          <div className='logoo'><img src={logo} alt="Checkbox" /></div>

        </div>

        <figure class="Menu">
          <figcaption>OVERVIEW</figcaption>
            <div className="LinkSs">
              <MdDashboard className='icon'/>
              <Link to="/main_dashboard" className="LinkS"><a>Dashboard</a></Link>
            </div>
            <div className="LinkSs">
              <FaCalendarAlt className='icon' />
              <Link to="/main_dashboard/appointment"className="LinkS"> <a>Appointments</a></Link>
            </div>
            <div className="LinkSs">
              <IoNotificationsCircle className='icon'/>
              <Link to="/main_dashboard/notification" className="LinkS" ><a>Notifications</a> </Link>
            </div >
        </figure>
        <figure class="settings">
          <figcaption>SETUP</figcaption>
            <div className="LinkSs">
              <AiFillProfile className='icon'/>
              <Link to="/main_dashboard/profile" className="LinkS"> Profile</Link>
            </div>
            <div className="LinkSs">
              <FiLogOut className='icon'/>
              <Link to="" className="LinkS" onClick={logOut}> Log out</Link>
            </div>
        </figure>
      </div>
    </div> */}
    <nav>
      <div class="logo">
        <i class="bx bx-menu menu-icon"></i>
        <span class="logo-name">CodingLab</span>
      </div>
      <div class="sidebar">
        <div class="logo">
          <i class="bx bx-menu menu-icon"></i>
          <span class="logo-name">CodingLab</span>
        </div>
        <div class="sidebar-content">
          <ul class="lists">
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-home-alt icon"></i>
                <span class="link">Dashboard</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-bar-chart-alt-2 icon"></i>
                <span class="link">Revenue</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-bell icon"></i>
                <span class="link">Notifications</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-message-rounded icon"></i>
                <span class="link">Messages</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-pie-chart-alt-2 icon"></i>
                <span class="link">Analytics</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-heart icon"></i>
                <span class="link">Likes</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-folder-open icon"></i>
                <span class="link">Files</span>
              </a>
            </li>
          </ul>
          <div class="bottom-cotent">
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-cog icon"></i>
                <span class="link">Settings</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-log-out icon"></i>
                <span class="link">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
    <section class="overlay"></section>
      
    </>
  );
}

export default Side_bar