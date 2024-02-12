import React, { useState } from "react";
import { useNavigate  } from "react-router-dom"; 
import "../styles/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import signuppic from '../assets/signuppic.gif'
// import {Link} from 'react-router-dom'
// import bigsignuppic1 from '../assets/signuppic1.png'

function Signup() {
const [formData, setFormData] = useState({
        fullName: '',
        bloodGroup: '',
        email:'',
        age: '',
        phoneNumber: '',
        location: '',
        role:'',
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
          const response = await fetch("http://localhost:4000/api/BL/v1/auth/signup", {
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
            <section className="aline">
                <div className="aline1">
                    {/* <h3>Net Blood Safe Lives</h3> */}
                    <img src={signuppic} alt="image1" className="image1"/>
                    {/* <img src={bigsignuppic1} alt="image2bg" /> */}
                    {/* <p>
                        Our Mission is to fill the gap between blood <br /> donors and
                        recipients, Providing a seamless
                        <br /> and efficient encounter for both parties. A reliable <br />{" "}
                        source, providing you the best experience.
                    </p> */}
                </div>
                <div className="hey">
                    <div className="aline21">
                        <h3 className="signup">Sign Up</h3> 
                        <br />
                        <form action="#" className="frm" onSubmit={handleSubmit}>
                            <label for="Role">Choose A Role:</label>
                            <select id="Role" name="Role" onChange={handleSubmit}>
                                <option value="User">User</option>
                                <option value="Hospital">
                                  Hospital
                                  </option>

                            </select>
                            <br />
                            <br />
                            <div className="cont">
                            <div className="full">
                            <label for="FullName">Full name:</label>
                            <br />
                            <input
                                type="text"
                                name="fullName"
                                id="FullName"
                                placeholder="FullName"
                                required
                                className="signup-input"
                                value={formData.fullName} 
                                onChange={handleChange}
                            />  
                            </div> 
                            <br />
                            <div className="ag">
                            <label for="Age">Age:</label>
                            <br />
                            <input
                                type="text"
                                name="age"
                                id="Age"
                                placeholder="Age"
                                required
                                className="signup-input"
                                value={formData.age} 
                                onChange={handleChange}
                            />{" "}
                            </div>
                            </div>
                            <br />
                            <div className="all">
                            <div className="phone">
                            <label for="Phone number">Phone Number:</label>
                            <br />
                            <input
                                type="text"
                                name="phoneNumber"
                                id="Phone number"
                                placeholder="Phone number"
                                required
                                className="signup-input"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />{" "}
                            </div>
                            <br />
                            <div className="loc">
                            <label for="Location">Location:</label>
                            <br />
                            <input
                                type="text"
                                name="location"
                                id="Location"
                                placeholder="Location"
                                required
                                className="signup-input"
                                value={formData.location}
                                onChange={handleChange}

                            />{" "}
                            </div>
                            </div>
                            <br />
                            <div className="all1">
                            <div className="em">
                            <label for="Email">Email:</label>
                            <br />
                            <input
                                type="text"
                                name="email"
                                id="Email"
                                placeholder="Email"
                                required
                                className="signup-input"
                                value={formData.email}
                                onChange={handleChange}
                            />{" "}
                            </div>
                            <br />
                            <div className="pass">
                            <label for="PassWord">PassWord:</label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                id="Password"
                                placeholder="Password"
                                required
                                className="signup-input"
                                value={formData.password}
                                onChange={handleChange}
                            />{" "}
                            </div>
                            </div>
                            <br />
                          
                            <label for="Blood Group">Choose A Blood Group:</label>
                            <select className="alinebloodgroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                                <option value="A Positive">A+</option>
                                <option value="A Negative">A-</option>
                                <option value="B Positive">B+</option>
                                <option value="B Negative">B-</option>
                                <option value="AB Positive">AB+</option>
                                <option value="AB Negative">AB-</option>
                                <option value="O Positive">O+</option>
                                <option value="O Negative">O-</option>
                                <option value="None">None</option>
                            </select>
                            <br />
                            <br />
                           
                            {/* <input type="checkbox" className="alinecheckk" /> */}
                            {/* <span className="checkbox-agree"><input type="checkbox" className="box1" /> 
                             Agree To Terms and Conditions</span>
                          <br /> */}
                            <button className="alinesignn" type="submit">Create Account</button>
                            <br />
                            {/* <p>
                                already have an Account?{" "}
                                <a href="/login" className="alinelink">
                                    Log in here!
                                </a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );

                  }
export default Signup;

