import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllEvents } from '../../actions/event';
import Spinner from '../layout/Spinner';
import { Text } from '../../styled/shared/Text';
import { Description } from '../../styled/shared/Description';
const Events = ({ getAllEvents, event: { events, loading } }) => {
  const [event_index, setEventIndex] = useState(0);

  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  let optionItems = events.map((event) => (
    <option key={event._id}>{event.title}</option>
  ));

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Text>Events</Text>
          <Description className='lead'>
            <i className='fas fa-user' /> Get all events and display the
            selected one
          </Description>
          <select
            onChange={(e) => setEventIndex(e.target.options.selectedIndex)}
          >
            {optionItems}
          </select>
        </Fragment>
      )}
    </Fragment>
  );
};

Events.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  event: state.event,
});

export default connect(mapStateToProps, { getAllEvents })(Events);
