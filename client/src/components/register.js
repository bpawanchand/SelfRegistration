import React, { Fragment, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RegisterUser } from '../actions/RegisterUser';

const RegisterForm = ({ RegisterUser }) => {
  const [formData, setRegisterUser] = useState({
    fname: '',
    lname: '',
    location: '',
    age: ''
  });
  const { fname, lname, location, age } = formData;

  const onChange = e => {
    setRegisterUser({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(`Action is getting invoked`);
    RegisterUser({ fname, lname, location, age });
    console.log(`Action is invoked`);
  };
  return (
    <Fragment>
      <div className='container'>
        <Form className='mt-5'>
          <Form.Group as={Row} controlId='formFirstName'>
            <Form.Label column sm='2'>
              First Name:
            </Form.Label>
            <Col sm='4'>
              <Form.Control
                type='text'
                placeholder='First Name'
                name='fname'
                value={fname}
                onChange={e => onChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formLastName'>
            <Form.Label column sm='2'>
              Last Name:
            </Form.Label>
            <Col sm='4'>
              <Form.Control
                type='text'
                name='lname'
                value={lname}
                placeholder='Last Name'
                onChange={e => onChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formAge'>
            <Form.Label column sm='2'>
              Age:
            </Form.Label>
            <Col sm='4'>
              <Form.Control
                type='number'
                placeholder='Age'
                name='age'
                value={age}
                onChange={e => onChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formDateofBirth'>
            <Form.Label column sm='2'>
              Location:
            </Form.Label>
            <Col sm='4'>
              <Form.Control
                type='text'
                name='location'
                value={location}
                placeholder='Location'
                onChange={e => onChange(e)}
              />
            </Col>
          </Form.Group>
        </Form>
        <div className='row justify-content-md-center'>
          <Button
            className='col col-lg-2'
            variant='primary'
            onClick={e => onSubmit(e)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { RegisterUser }
)(RegisterForm);
