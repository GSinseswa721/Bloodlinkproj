import React from "react";

const Donate = () => {
  return (
    <div>
      <div class="container rounded bg-white mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">Linda</span>
              <span class="text-black-50">LindaRabia@mail.com.</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <label class="labels">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                  />
                </div>
                {/* <div class="col-md-6">
                    <label class="labels">Surname</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="surname"
                    />
                  </div> */}
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email id"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Blood Group</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="blood group"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Location</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="district"
                  />
                </div>
                {/* <div class="col-md-6">
                    <label class="labels">Sector</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="sector"
                    />
                  </div> */}
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <p class="text-right p-2">Want to Register To Donate Blood.</p>
                <p class="text-right">
                  <a href="#" onClick={handleAnchorClick}>
                    {isFormVisible ? "Close Form" : "Click Here to Register"}
                  </a>{" "}
                </p>
              </div>
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
                <Form.Control type="number" />
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
  );
};

export default Donate;
