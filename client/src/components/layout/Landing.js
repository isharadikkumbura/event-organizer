import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  DarkOverlay,
  Inner,
  Heading,
  Buttons,
} from '../../styled/layout/Landing';
import { Description } from '../../styled/shared/Description';
import { Button } from '../../styled/shared/Button';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container>
      <DarkOverlay>
        <Inner>
          <Heading>Event Organizer</Heading>
          <Description>Create an account to organize events</Description>
          <Buttons>
            <Link to='/register'>
              <Button type='primary'>Sign Up</Button>
            </Link>
            <Link to='/login'>
              <Button type='light'>Login</Button>
            </Link>
          </Buttons>
        </Inner>
      </DarkOverlay>
    </Container>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
