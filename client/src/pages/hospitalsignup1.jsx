import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Group 2410logo.svg'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


function Hospitalsignup1() {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalCode: '',
    email: '',
    location: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/BL/v1/hospital/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form data submitted for Hospital');
      } else {
        console.log(response);
        alert('Enter the valid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log('Submitted form !', formData);

  const navigate = useNavigate();
  function handleNavigate(event) {
    event.preventDefault();
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'User':
        navigate('/signup');
        break;
      case 'Hospital':
        navigate('/hospitalsignup1');
        break;
      default:
        console.log('you reached to the default');
        return window.alert('Choose one of in given option');
    }
  }

  return (
    <>
    <Navigation />
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6  p-5 d-flex justify-content-center align-items-center" >
            <div className="text-center">
              <Link to="/home">
            <div className="logo"> 
              <img className="img" src={Logo} alt="logo" />
            </div>
            </Link>
              <h3 style={{color:"#f82424"}}>Net Blood Safe Lives</h3>
              <p>Our Mission is to fill the gap between blood donors and recipients, Providing a seamless and efficient encounter for both parties. A reliable source, providing you the best experience.</p>
            </div>
          </div>
          <div className="col-md-6 bg-light p-5">

            <h3 className="mb-4" style={{color:"#f82424"}}>Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="HospitalName" className="form-label">Hospital's Name:</label>
                <input type="text" className="form-control" id="HospitalName" name="hospitalName" placeholder="Hospital's Name" value={formData.hospitalName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="HospitalCode" className="form-label">Hospital's Code:</label>
                <input type="text" className="form-control" id="HospitalCode" name="hospitalCode" placeholder="Hospital's Code" value={formData.hospitalCode} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="Location" className="form-label">Location:</label>
                <input type="text" className="form-control" id="Location" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="Email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="Password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-danger" style={{ backgroundColor: "#f82424" }}>Create Account</button>
            </form>
            <p className='text my-3'>Already  have an account? <a href="/login" style={{color:"#f82424" }}>Sign in</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Hospitalsignup1;
