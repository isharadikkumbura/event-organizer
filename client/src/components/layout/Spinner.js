import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';
import { Image } from '../../styled/layout/Spinner';
const Spinner = () => (
  <Fragment>
    <Image src={spinner} alt='Loading...' />
  </Fragment>
);

export default Spinner;
