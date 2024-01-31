import React from 'react'
import Logo from '../assets/Group 2410logo.svg'
import '../styles/login.css'

const Login = () => {
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
           <select >
            <option value="Role"></option>
            <option value="User">user</option>
            <option value="Admin">Admin</option>
            <option value="Hospita">Hospital</option>
           </select>
           </form>
           <p className='text'>Forgot password? <a href="">Click here</a></p>
           <button className='login-btn'>Login</button>
           <p className='text'>Don't have an account? <a href="/signup">Sign Up here</a></p>
           </div>
          
    
      
    </div>
    </>
  )
}

export default Login
