import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Text } from '../../styled/shared/Text';
import { Description } from '../../styled/shared/Description';
import { Form, FormGroup } from '../../styled/shared/Form';
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, phone, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ firstName, lastName, email, phone, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <Text type='primary'>Sign Up</Text>
      <Description>
        <i className='fas fa-user' /> Create Your Account
      </Description>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type='number'
            placeholder='Phone Number'
            name='phone'
            value={phone}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </FormGroup>

        <input type='submit' value='Register' />
      </Form>
      <Description>
        Already have an account? <Link to='/login'>Sign In</Link>
      </Description>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
