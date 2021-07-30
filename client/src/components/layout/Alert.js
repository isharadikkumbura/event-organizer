import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AlertDiv } from '../../styled/shared/Alert';
const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <AlertDiv key={alert.id} type={alert.alertType}>
      {alert.msg}
    </AlertDiv>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
