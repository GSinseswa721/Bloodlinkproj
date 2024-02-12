import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Donate.css'
import { useState } from "react";



const Donate_blood = () => {

  const [date, setDate] = useState(new Date());

  console.log("DATE", date);





    // const handleSubmit = async (e) => {
    //         e.preventDefault();
    //         try {
    //           const response = await fetch("http://localhost:4000/api/BL/v1/donate/intention", {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //           });
        
    //           if (response.ok) {
    //             alert('Form data submitted successfully!');
    //           } else {
    //             alert('Failed to submit form data');
    //           }
    //         } catch (error) {
    //           console.error('Error during form submission:', error.message);
    //         }
    //       };
  return (
    <>
    <div>
    <section className="section_donate">
                <div className="second_par">
                  <h1>Want to Donate Blood? This is the right place.</h1>
                  <h3>Volunteer’s details</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className='labels'>Full Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                      <Form.Label className='labels'>Age</Form.Label><br/>
                      <Form.Text className="text-muted">
                        Must be above 18 years.
                      </Form.Text>
                      <Form.Select size="md"></Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label className='labels'>Mobile Number</Form.Label><br/>
                      <Form.Text className="text-muted">
                        ID number will be sent to this phone number.
                      </Form.Text>
                      <Form.Control type="number" maxLength={10} />
                    </Form.Group>

                    <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className='labels'>City/Province</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className='labels'>District</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className='labels'>Cell</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className='labels'>Street Address</Form.Label>
                    <Form.Control placeholder="KG 101 St" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label className='labels'>
                    {" "}
                    Second Mobile Number in case of emergency.
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicAge">
                  <Form.Label className='labels'>Blood Group</Form.Label>
                  <br />
                  <Form.Text className="text-muted">Optional.</Form.Text>
                  <Form.Select size="sm">
                    <option value="A Positive">A+</option>
                    <option value="A Negative">A-</option>
                    <option value="B Positive">B+</option>
                    <option value="B Negative">B-</option>
                    <option value="AB Positive">AB+</option>
                    <option value="AB Negative">AB-</option>
                    <option value="O Positive">O+</option>
                    <option value="O Negative">O-</option>
                    <option value="None">None</option>
                  </Form.Select>

                </Form.Group>
                <Form.Label className='labels'>Pick your Appointment Date</Form.Label>
                  <br />
                  <Form.Text className="text-muted">Depends on your availability.</Form.Text>
                <Form.Group controlId="duedate">
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group><br/>

                    {/* Add more form fields as needed */}
                    
                    <Button variant="primary" type="button"  className="custom-button">
                      Submit
                    </Button>
                    {/* onClick={handleSubmit} */}
                  </Form>
                </div>
              </section>
    </div>
    </>
  )
}

export default Donate_blood