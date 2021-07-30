import React, { Fragment } from 'react';

import { Header, Message } from '../../styled/layout/NotFound';
const NotFound = () => {
  return (
    <Fragment>
      <Header>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </Header>
      <Message>Sorry, this page does not exist</Message>
    </Fragment>
  );
};

export default NotFound;
