import React from 'react'
import { FaCalendarPlus } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";
import bookimg from '../assets/bookimg.jpg'
import requestsimg from '../assets/requestsimg.jpg'
import donateimg from '../assets/donateimg.jpg'
import '../styles/Services.css'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Services() {
  return (
    
    <>
    <div>
        < Navigation/>
    </div>

    <section>
        <h3 className='header'><span>Our</span>Services</h3>
    <div className='services'>
      <div className='services1'>
        <img src={bookimg} alt="bookimg" />
       <FaCalendarPlus className='calendar' /> 
       <br />
      <br />
      <div className='text1'>
       <h4>Book Appointment for Blood Donation</h4>
       <p>When someone needs blood for medical reasons, the medical facility makes a request to the blood bank, and the blood bank provides the necessary blood type and components from their existing inventory. </p>
       {/* <p>Book Blood for An <br />Upcoming Date </p> */}
       <button className='serbtn'><a href="/donate_blood">Click Here</a></button>
       </div>
      </div>
      <div className='services2'>
        <img src={requestsimg} alt="requestsimg" />
      <FaAmbulance className='ambulance' />
      <br />
      <br />
      <div className='text2'>
      <h4>Request Blood Bank</h4>
      <p>A blood bank is a facility or organization that collects, processes, tests, stores, and distributes blood and blood products to hospitals and healthcare facilities.</p>
      {/* <p>Find a donor near by in <br />case of emergency</p> */}
      <button className='serbtn'><a href="Login">Click Here</a></button>
      </div>
     </div>
     <div className='services3'>
      <img src={donateimg} alt="donateimg" />
     <TbUserQuestion className='user' />
     <br />
      <br />
      <div className='text3'>
      <h4>Who can & Why Donate</h4>
      <p>
      Blood donation eligibility criteria can vary by country and organization, but generally, there are common guidelines that determine who can and cannot donate blood.</p>
      {/* <p>Join our campaign to <br />Understand blood donation</p> */}
      <button className='serbtn'><a href="/Documentation">Click Here</a></button>
      </div>
    </div>
    </div>
    </section>

    <div className='f'>
        < Footer/>
    </div>

    </>
  )
}

export default Services
