import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from '../../styled/shared/Text';
import { Description } from '../../styled/shared/Description';
const Dashboard = ({ auth: { user } }) => {
  return (
    <Fragment>
      <Text type='primary'>Dashboard</Text>
      <Description>
        <i className='fas fa-user' /> Welcome {user && user.loadUser.firstName}
      </Description>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Dashboard);
