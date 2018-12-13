import React, { Component } from 'react';
//import logo from '';
import './Navbar.css';
import { Button,Navbar,FormGroup,FormControl,  } from 'react-bootstrap';

class Dognav extends Component {
  render() {
    return (
      <div className="Dognav">
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Brand</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>;
      </div>
    );
  }
}

export default Dognav;