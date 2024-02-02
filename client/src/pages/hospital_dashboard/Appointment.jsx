import React ,{ useState, useEffect }from 'react'
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-calendar/dist/Calendar.css';
import '../../styles/appointment.css'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Appointments = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const handleAnchorClick = () => {
    setFormVisibility(!isFormVisible);
  };

  const [value, onChange] = useState(new Date());

  useEffect(() =>{
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    anime.timeline({loop: true})
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

  });




    

  return (
    <>
    <div>
      <div className='app_bars'>
      <h1 class="ml6">
        <span class="text-wrapper">
          <span class="letters">Don't Miss out! Book your Appointment Now!</span>
        </span>
      </h1>
      <div className='app_bars1'>
      <p>Review your Availability to book your next place and Save lives!</p><br/>
            <Calendar
                onChange={onChange}
                value={value}

            />
      <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-center align-items-center mb-3">
                  <p class="text-right p-2">
                    Want to Register To Donate Blood.
                  </p>
                  <p class="text-right">
                    <a href="#" onClick={handleAnchorClick} >
                      {isFormVisible ? 'Close Form' : 'Click Here to Register'}
                    </a>{" "}
                  </p>
                </div>
              </div>
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
                  <br />
                  <Form.Text className="text-muted">
                    Must be above 18 years.
                  </Form.Text>
                  <Form.Select size="sm"></Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Text className="text-muted">
                    <br />
                    ID number will be sent to this phone number.
                  </Form.Text>
                  <Form.Control type="number" maxLength={10} />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City/Province</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>District</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cell</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control placeholder="KG 101 St" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label>
                    {" "}
                    Second Mobile Number in case of emergency.
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Blood Group</Form.Label>
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

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </section>
        )}

      </div>
    </div>
    </>
  )
}

export default Appointments