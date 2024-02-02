import React,{useState}from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Group 2410logo.svg'
import '../styles/login.css'
import { Alert } from 'bootstrap';

const Login = () => {
  // these are the backend functions to initiate the database
  const [formData, setFormData] = useState({
    email: '',
    password:'',
    
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
      const response = await fetch("http://localhost:4002/api/BL/v1/auth/signin", {
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
    }  catch (error) {
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
      <div>
        <section className="section_sign_in">
          <div className="logo">
            <img className="img" src={Logo} alt="logo" />
          </div>
        </section>

        <div className='cover'>
        <form action="" method="post" className='input3
        ' placeholder="Role" onSubmit={handleSubmit}>
          <h2>SignIn</h2>
          <input type='text' name="email" value={formData.email} onChange={handleChange} placeholder='username'/><br/>
          <input type='password'  name="password" value={formData.password} onChange={handleChange} placeholder='password'/><br/>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="" disabled selected>Role</option>
            <option value="User">user</option>
            <option value="Admin">Admin</option>
            <option value="Hospital">Hospital</option>
           </select><br/>
          <p className='text'>Forgot password? <a href="">Click here</a></p><br/>
          <button className='login-btn' type="submit" onClick={handleButtonClick}>Login</button><br/>
          <p className='text'>Don't have an account? <a href="/signup">Sign Up here</a></p>
        </form>
        </div>

        {/* <form action="" method="post" className='input3' placeholder="Role" onSubmit={handleSubmit}>
          <h2 className='cover'>SignIn</h2>
          <input type='text' name="email" value={formData.email} onChange={handleChange} placeholder='username'/><br/>
          <input type='password'  name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="Role"></option>
            <option value="User">user</option>
            <option value="Admin">Admin</option>
            <option value="Hospital">Hospital</option>
           </select>
           <button className='login-btn' type="submit" onClick={handleButtonClick}>Login</button>
          <p className='text'>Forgot password? <a href="">Click here</a></p>
          <p className='text'>Don't have an account? <a href="/signup">Sign Up here</a></p>
        </form>
         */}

      </div>
    </>
  );
  }

export default Login
