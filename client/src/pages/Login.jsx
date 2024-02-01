import React,{useState}from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Group 2410logo.svg'
import '../styles/login.css'
import { Alert } from 'bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

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

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
    
  // };
  // console.log(handleOptionChange());

  const handleButtonClick = () => {
    // Use a switch or if-else statement to determine the destination based on the selected option
    switch (selectedOption) {
      case 'User':
        navigate('/main_dashboard');
        break;
      case 'Hospital':
        navigate('#');
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

      <header >
      <div className='logo'>
        <img  className='img'src={Logo} alt="logo" />
        </div>
      </header>
    <div className='cover'>
        <h1>SignIn</h1>
        
       
          <div className='input1'><input type='text' name="email" value={formData.email} onChange={handleChange} placeholder='username'/>
          </div>
          <div  className='input2'>
          <input type='password'  name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
          </div> 
          <form className='input3' placeholder="Role" onSubmit={handleSubmit}>
           <select >
            <option value="Role"></option>
            <option value="User">user</option>
            <option value="Admin">Admin</option>
            <option value="Hospital">Hospital</option>
           </select>
           <button className='login-btn' type="submit" >Login</button>
           </form>
           <p className='text'>Forgot password? <a href="">Click here</a></p>
           {/* <button className='login-btn' type="submit" >Login</button> */}
           <p className='text'>Don't have an account? <a href="/signup">Sign Up here</a></p>
           </div>
          
    
      
    </div>
    </>
  );
  }

export default Login
