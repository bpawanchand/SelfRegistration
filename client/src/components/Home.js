import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Form className='pt-5'>
        <Form.Group as={Row} controlId='firstName'>
          <Form.Label column sm='4'>
            First Name:
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='text' placeholder='First Name' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='lastName'>
          <Form.Label column sm='4'>
            Last Name:
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='text' placeholder='Last Name' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='dateOfBirth'>
          <Form.Label column sm='7'>
            Date of Birth:
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='date'
              placeholder='Date of Birth'
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='age'>
          <Form.Label column sm='4'>
            Age:
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='number' placeholder='Age'></Form.Control>
          </Col>
        </Form.Group>
        <Button variant='primary' type='submit' className='mt-5'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;
