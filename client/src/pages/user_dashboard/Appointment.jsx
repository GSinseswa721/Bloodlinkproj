// // import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/appointment.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Appointment = () => {
//   const [isFormVisible, setFormVisibility] = useState(false);

//   const [formData, setFormData] = useState({
//     start: new Date(),
//     end: new Date(),
//   });

//   useEffect(() => {
//     // Your anime.js animation code here
//   }, []);

//   const showToast = (message, type, options = {}) => {
//     return toast[type](message, {
//       position: 'top-right',
//       autoClose: 5000,
//       ...options,
//     });
//   };

//   const handleAnchorClick = () => {
//     setFormVisibility(!isFormVisible);
//   };

//   const handleChange = (date, name) => {
//     if (name === 'start' && date < new Date()) {
//       showToast('Choose a date from today onwards.', 'error');
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: date,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:4000/api/BL/v1/donate/intention", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Form data submitted successfully!');
//       } else {
//         alert('Failed to submit form data');
//       }
//     } catch (error) {
//       console.error('Error during form submission:', error.message);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1 className="ml6">
//           <span className="text-wrapper">
//             <span className="letters">Don't Miss out! Book your Appointment Now!</span>
//           </span>
//         </h1>
//         <div className='app_bars'>
//           <div className='app_bars1'>
//             <p>Review your Availability to book your next place and Save lives!</p><br />
//             <form action="" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
//               <Calendar
//                 onChange={(date) => handleChange(date, 'start')}
//                 selectRange={true}
//                 value={[formData.start, formData.end]}
//               />
//               <Button variant="primary" type="submit" className="mt-3">
//                 Submit
//               </Button>
//             </form>

//             <div className="col-md-5 border-right">
//               <div className="p-3 py-5">
//                 <div className="d-flex justify-content-center align-items-center mb-3">
//                   <p className="text-right p-2">
//                     Want to Register To Donate Blood.
//                   </p>
//                   <p className="text-right">
//                     <a href="#" onClick={handleAnchorClick}>
//                       {isFormVisible ? 'Close Form' : 'Click Here to Register'}
//                     </a>{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {isFormVisible && (
//             <section className="section_donate">
//               <div className="second_par">
//                 <h1>Want to Donate Blood? This is the right place.</h1>
//                 <h3>Volunteer’s details</h3>
//                 <Form>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control type="text" />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formBasicAge">
//                     <Form.Label>Age</Form.Label>
//                     <br />
//                     <Form.Text className="text-muted">
//                       Must be above 18 years.
//                     </Form.Text>
//                     <Form.Select size="sm"></Form.Select>
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formBasicNumber">
//                     <Form.Label>Mobile Number</Form.Label>
//                     <Form.Text className="text-muted">
//                       <br />
//                       ID number will be sent to this phone number.
//                     </Form.Text>
//                     <Form.Control type="number" maxLength={10} />
//                   </Form.Group>

//                   {/* Add more form fields as needed */}
                  
//                   <Button variant="primary" type="button" onClick={handleSubmit}>
//                     Submit
//                   </Button>
//                 </Form>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Appointment;

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/appointment.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import './yourCustomStyles.css'; // Import your custom styles

const Appointment = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const [formData, setFormData] = useState({
    start: new Date(),
    end: new Date(),
  });

  useEffect(() => {
    // Your anime.js animation code here
  }, []);

  const showToast = (message, type, options = {}) => {
    return toast[type](message, {
      position: 'top-right',
      autoClose: 5000,
      ...options,
    });
  };

  const handleAnchorClick = () => {
    setFormVisibility(!isFormVisible);
  };

  const handleChange = (date, name) => {
    if (name === 'start' && date < new Date()) {
      showToast('Choose a date from today onwards.', 'error');
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: date,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/BL/v1/donate/intention", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form data submitted successfully!');
      } else {
        alert('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error during form submission:', error.message);
    }
  };

  return (
    <>
      <div className="container-fluid bloodlink-container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="ml6">
              <span className="text-wrapper">
                <span className="letters">Don't Miss out! Book your Appointment Now!</span>
              </span>
            </h1>
            <p className="text-muted">Review your Availability to book your next place and Save lives!</p>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <Calendar
                onChange={(date) => handleChange(date, 'start')}
                selectRange={true}
                value={[formData.start, formData.end]}
                className="custom-calendar"
              />
              <Button variant="primary" type="submit" className="mt-3 custom-button">
                Submit
              </Button>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <p className="text-right p-2">
                  Want to Register To Donate Blood.
                </p>
                <p className="text-right">
                  <a href="#" onClick={handleAnchorClick} className="custom-link">
                    {isFormVisible ? 'Close Form' : 'Click Here to Register'}
                  </a>{" "}
                </p>
              </div>
            </div>

            {isFormVisible && (
              <section className="section_donate">
                <div className="second_par">
                  <h1>Want to Donate Blood? This is the right place.</h1>
                  <h3>Volunteer’s details</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                      <Form.Label>Age</Form.Label>
                      <Form.Text className="text-muted">
                        Must be above 18 years.
                      </Form.Text>
                      <Form.Select size="sm"></Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Text className="text-muted">
                        ID number will be sent to this phone number.
                      </Form.Text>
                      <Form.Control type="number" maxLength={10} />
                    </Form.Group>

                    {/* Add more form fields as needed */}
                    
                    <Button variant="primary" type="button" onClick={handleSubmit} className="custom-button">
                      Submit
                    </Button>
                  </Form>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
