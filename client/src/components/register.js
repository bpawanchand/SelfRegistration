import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


const RegisterForm = () => {

  return(
    <div className="container">
        <Form className="mt-5">
          <Form.Group as={Row} controlId="formFirstName">
            <Form.Label column sm="2">First Name:</Form.Label>
            <Col sm="4">
              <Form.Control type="text" placeholder="First Name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formLastName">
            <Form.Label column sm="2">Last Name:</Form.Label>
              <Col sm="4">
                <Form.Control type="text" placeholder="Last Name" />
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formAge">
            <Form.Label column sm="2">Age:</Form.Label>
              <Col sm="4">
                <Form.Control type="number" placeholder="Age" />
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formDateofBirth">
            <Form.Label column sm="2">Date of Birth:</Form.Label>
              <Col sm="4">
                <Form.Control type="date" placeholder="Date of Birth" />
              </Col>
          </Form.Group>
        </Form>
        <div className="row justify-content-md-center">
          <Button  className="col col-lg-2" variant="primary">Sign Up</Button>
        </div>
      </div>
  );
};

export default RegisterForm;
