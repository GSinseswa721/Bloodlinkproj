import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Donate.css";
import Navigation from "../components/Navigation";

const Donate_blood = () => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    mobileNumber: "",
    city: "",
    district: "",
    cell: "",
    streetAddress: "",
    emergencyNumber: "",
    bloodGroup: "",
    appointmentDate: new Date()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will log the collected form data
    // You can perform additional actions here, such as sending the data to a server
  };

  return (
    <>
      <Navigation />
      <section className=" h-screen d-flex align-items-center justify-content-center my-5">
        <div className="container">
          <div className="">
            <h1 className="text-center" style={{ color: "#E69598" }}>
              Want to Donate Blood? This is the right place.
            </h1>
            <h3 className="text-center" style={{ color: "#E69598" }}>
              Volunteer’s details
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label className="labels">Full Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicAge">
                  <Form.Label className="labels">Age</Form.Label>
                  <Form.Control type="number" />
                  <Form.Text className="text-muted">
                    Must be above 18 years.
                  </Form.Text>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicNumber">
                  <Form.Label className="labels">Mobile Number</Form.Label>
                  <Form.Control type="number" maxLength={10} />
                  <Form.Text className="text-muted">
                    ID number will be sent to this phone number.
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label className="labels">City/Province</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label className="labels">District</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicBloodGroup">
                <Form.Label className="labels">Blood Group</Form.Label>
                <Form.Control as="select" size="sm">
                  <option value="A Positive">A+</option>
                  <option value="A Negative">A-</option>
                  <option value="B Positive">B+</option>
                  <option value="B Negative">B-</option>
                  <option value="AB Positive">AB+</option>
                  <option value="AB Negative">AB-</option>
                  <option value="O Positive">O+</option>
                  <option value="O Negative">O-</option>
                  <option value="None">None</option>
                </Form.Control>
                <Form.Text className="text-muted">Optional.</Form.Text>
              </Form.Group>

              <Form.Group controlId="duedate">
                <Form.Label className="labels">
                  Pick your Appointment Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Depends on your availability.
                </Form.Text>
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                className="custom-button my-3  "
                style={{ backgroundColor: "#E69598" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate_blood;
