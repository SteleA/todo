import React from 'react';
import { Grid } from 'react-bootstrap';

export default props => (
  <Grid fluid>
    {props.children}
  </Grid>
);
