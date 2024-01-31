import React from 'react'
import '../styles/hospitalsignup.css'


function Hospitalsignup1() {
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
     <form action="#">
      <div className='input'>
      <div className='hosname'>
     <label for="Hospital's Name">Hospital's Name:</label><br/>
     <input type="text" name="HospitalName" id="HospitalName" placeholder='HospitalName' required/> <br/>
     </div>
     <div className='hoscode'>
     <label for="Hospital's Code">Hospital's Code:</label><br/>
     <input type="text" name="Hospital's Code" id="Hospital's Code" placeholder="Hospital's Code"  required/> <br/>
     </div>
     <div className='hosloc'>
     <label for="Location">Location:</label><br/>
     <input type="text" name="Location" id="Location" placeholder='Location' required/> <br/>
     </div>
     <div className='hosem'>
     <label for="Email">Email:</label><br/>
    <input type="text" name="Email" id="Email" placeholder='Email' required  />  <br />
    </div>
    <div className='hospass'>
     <label for="PassWord">PassWord:</label><br/>
     <input type="password" name="Password" id="Password" placeholder='Password' required /> <br />
     </div>
     </div>
     <br />
     <input type="checkbox" className='check1'/> Agree To Terms and Conditions <br />
    <br />
     <button className='sign'>Create Account</button>
     <br />
     {/* <p>already have an Account? <a href="#" className='link1'>Log in here!</a></p> */}

    </form>

     </div>
     </section>
  </>
  )
}


export default Hospitalsignup1

