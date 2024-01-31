import React,{useState}from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Group 2410logo.svg'
import '../styles/login.css'

const Login = () => {
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
        
       
          <div className='input1'><input type='text' placeholder='username'/>
          </div>
          <div  className='input2'>
          <input type='password' placeholder='password'/>
          </div> 
          <form className='input3' placeholder="Role">
           <select value={selectedOption} onChange={handleOptionChange}>
            <option value="Role"></option>
            <option value="User">user</option>
            <option value="Admin">Admin</option>
            <option value="Hospital">Hospital</option>
           </select>
           </form>
           <p className='text'>Forgot password? <a href="">Click here</a></p>
           <button className='login-btn'onClick={handleButtonClick}>Login</button>
           <p className='text'>Don't have an account? <a href="/signup">Sign Up here</a></p>
           </div>
          
    
      
    </div>
    </>
  );
  }

export default Login
