import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/Group 2410logo.svg'
import '../styles/login.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Login = () => {
  // these are the backend functions to initiate the database
  const [formData, setFormData] = useState({
    email: '',
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
      const response = await fetch("http://localhost:4000/api/BL/v1/auth/signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        alert('Form data submitted successfully!');
      } else {
        console.log(response)
        alert('Email or password are incorrect');
        // console.error('Failed to submit form data:', );
      }
    } catch (error) {
      // console.log("Email or password are incorrect")
      // alert(res.error.message);

      // console.error('Error during form submission:', error.message);
    }
  };
  // alert(JSON.stringify(formData, null, 2));
  // window.alert(formData);

  console.log('Form submitted!', formData);

  // these are the frontend functions to navigate the pages of the dashboards when logged in
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    // Use a switch or if-else statement to determine the destination based on the selected option
    switch (selectedOption) {
      case 'User':
        navigate('/main_dashboard');
        break;
      case 'Hospital':
        navigate('/main_hospital_dashboard');
        break;
      // Add more cases as needed
      default:
        // Default case, navigate to a default page or handle accordingly
        navigate('/home');
    }
  };

  return (
    <>
    <Navigation />
      <div className='mt-5'>
        <div className='cover'>

          <form action="" method="post" className='input3' onSubmit={handleSubmit}>
            <Link to={'/home'}>
            <section className="section_sign_in">
              <div className="logo">
                <img className="img" src={Logo} alt="logo" />
              </div>
            </section>
            </Link>
            
            <h2>Sign in</h2>
            <input type='text' className='form-control' name="email" value={formData.email} onChange={handleChange} placeholder='username' /><br />
            <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='password' /><br />
            <p className='text'>Forgot password? <a href="" style={{color:"#f82424"}}>Click here</a></p><br />
            <button className='login-btn' style={{background:"#f82424"}} type="submit" onClick={handleButtonClick}>Login</button><br />
            <p className='text'>Don't have an account? <a href="/hospitalsignup1">Sign Up here</a></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
