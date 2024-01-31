import React from "react";
import "../styles/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import signuppic from '../assets/signuppic.gif'
// import bigsignuppic1 from '../assets/signuppic1.png'



function signup() {
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
                        <form action="#" className="frm">
                            <label for="Role">Choose A Role:</label>
                            <select id="Role" name="Role">
                                <option value="User">User</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                            <br />
                            <br />
                            <div className="cont">
                            <div className="full">
                            <label for="FullName">Full name:</label>
                            <br />
                            <input
                                type="text"
                                name="FullName"
                                id="FullName"
                                placeholder="FullName"
                                required
                                className="signup-input"
                            />  
                            </div> 
                            <br />
                            <div className="ag">
                            <label for="Age">Age:</label>
                            <br />
                            <input
                                type="text"
                                name="Age"
                                id="Age"
                                placeholder="Age"
                                required
                                className="signup-input"
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
                                name="Phone number"
                                id="Phone number"
                                placeholder="Phone number"
                                required
                                className="signup-input"
                            />{" "}
                            </div>
                            <br />
                            <div className="loc">
                            <label for="Location">Location:</label>
                            <br />
                            <input
                                type="text"
                                name="Location"
                                id="Location"
                                placeholder="Location"
                                required
                                className="signup-input"
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
                                name="Email"
                                id="Email"
                                placeholder="Email"
                                required
                                className="signup-input"
                            />{" "}
                            </div>
                            <br />
                            <div className="pass">
                            <label for="PassWord">PassWord:</label>
                            <br />
                            <input
                                type="password"
                                name="Password"
                                id="Password"
                                placeholder="Password"
                                required
                                className="signup-input"
                            />{" "}
                            </div>
                            </div>
                            <br />
                          
                            <label for="Blood Group">Choose A Blood Group:</label>
                            <select className="alinebloodgroup" name="Blood Group">
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
                            <span className="checkbox-agree"><input type="checkbox" className="box1" /> 
                             Agree To Terms and Conditions</span>
                          <br />
                            <button className="alinesignn" onClick={alert('Account Created Successfull!!!!')}>Create Account</button>
                            <br />
                            <p>
                                already have an Account?{" "}
                                <a href="/login" className="alinelink">
                                    Log in here!
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default signup;
