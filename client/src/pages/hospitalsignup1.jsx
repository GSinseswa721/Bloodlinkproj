import React, {useState}from 'react'
import {useNavigate} from "react-router-dom"
// import Logo fr

import '../styles/hospitalsignup.css'
import {Alert} from 'bootstrap';


function Hospitalsignup1() {
  const [formData, setFormData] = useState({
    hospitalName:'',
    hospitalCode:'',
    email:'',
    location:'',
    password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
   ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5274/api/BL/v1/hospital/register', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok){
        alert('Form data submitted for Hospital');
      } else {
        console.log(response);
        alert('Enter the valid email or password')
      }
    } catch (error) {
      
    }
  };

  console.log('Submitted form !', formData)

  const navigate = useNavigate();
  function handleNavigate(event) {
    event.preventDefault();
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case "User":
        navigate("/signup");
        break;
      case "Hospital":
        navigate("/hospitalsignup1");
        break;
      default:
        console.log("you reached to the default");
        return window.alert("Choose one of in given option");
    }
  }
  return (
  <>
  <section className='hospital'>
     <div className='hospital1'>
     <h3>Net Blood Safe Lives</h3>
     <p>Our Mission is to fill the gap between blood <br /> donors and recipients, Providing a seamless<br /> and efficient encounter for both parties. A reliable <br /> source, providing you the best experience.</p>
     </div>
      <div className='hospital2'>
      <h3 className='signup'>Sign Up</h3>
      <br />
     <form action="#" onSubmit={handleSubmit}>
      <div className='input'>
      <div className='hosname'>
     <label for="Hospital's Name">Hospital's Name:</label><br/>
     <input type="text" name="hospitalName" id="HospitalName" placeholder='HospitalName' value={formData.hospitalName} 
                                onChange={handleChange} required/> <br/>
     </div>
     <div className='hoscode'>
     <label for="Hospital's Code">Hospital's Code:</label><br/>
     <input type="text" name="hospitalCode" id="Hospital's Code" placeholder="Hospital's Code" value={formData.hospitalCode} 
                                onChange={handleChange}  required/> <br/>
     </div>
     <div className='hosloc'>
     <label for="Location">Location:</label><br/>
     <input type="text" name="location" id="Location" placeholder='Location' value={formData.location} 
                                onChange={handleChange} required/> <br/>
     </div>
     <div className='hosem'>
     <label for="Email">Email:</label><br/>
    <input type="text" name="email" id="Email" placeholder='Email' value={formData.email} 
                                onChange={handleChange} required  />  <br />
    </div>
    <div className='hospass'>
     <label for="PassWord">PassWord:</label><br/>
     <input type="password" name="password" id="Password" placeholder='Password' value={formData.password} 
                                onChange={handleChange} required /> <br />
     </div>
     </div>
     <br />
     <input type="checkbox" className='check1'/> Agree To Terms and Conditions <br />
    <br />
     <button className='sign' type='submit'>Create Account</button>
     <br />
     {/* <p>already have an Account? <a href="#" className='link1'>Log in here!</a></p> */}

    </form>

     </div>
     </section>
  </>
  )
}


export default Hospitalsignup1

