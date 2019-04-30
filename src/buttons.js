import React,{ Component } from 'react';
import {Button} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Buttons extends Component { 
render(){
  return(
    <div>
      <Button color="primary">Register</Button>{' '}
      <Button color="secondary">Login</Button>{' '}
      <Button color="success">Success</Button>{' '}
      <Button color="warning">Offences</Button>{' '}
      <Button color="danger">Armed Robbery</Button>{' '}
      <h2>Armed Robbery Offences - Filtered</h2>
      <Button color="info">Area</Button>{' '}
      <Button color="info">Age</Button>{' '}
      <Button color="info">Year</Button>{' '}
    </div>
    );
  }
}

export default Buttons;
