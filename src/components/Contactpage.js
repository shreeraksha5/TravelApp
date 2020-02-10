import React from 'react';
import { FormControl, FormCheck, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import dartrain from '../images/dartrain.jpg';
import placeholder from '../images/placeholder.png';
import call from '../images/call.png';
import email from '../images/email.png';
import domain from '../images/domain.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import { Grid, Row, Col } from 'react-bootstrap';
import meghesh from '../images/meghesh.jpg';
import vidya from '../images/vidya.jpg';
import raksha from '../images/raksha.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Navbars from './navbar.js'
import email1 from '../images/email1.png';
import './Contactpage.css'
import Footer from '../components/Railways/Railstaticcomponents/footer.js'


export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid about">
          <Navbar bg="light" expand="lg" className="navbar-inner">

            <Navbar.Brand href="#home">
              <p className="txt_c"> <b>VACATION Travel Agency</b></p>

            </Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav >

                <NavItem > <Link to="/Home"><b className=" hinput">Home</b></Link></NavItem>
                <NavItem> <Link to="/about"><b className=" linput">about</b></Link> </NavItem>
                <NavItem> <Link to="/Destination"><b className=" linput">Destination</b></Link> </NavItem>
                <NavItem> <Link to="/Contact"><b className=" linput">Contact</b></Link> </NavItem>

              </Nav>
              <Form inline>

                <ul> <Link to="/Railways"><button class="booknow">Book Now</button></Link></ul>

              </Form>
            </Navbar.Collapse>
          </Navbar>
          <p className="txt_about"><b>Contact Us</b></p>
        </div>


        <div className="container-fluid form_class">
         <div className="container">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="First_Name" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Last_Name" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Email Id</Form.Label>
              <Form.Control placeholder="Email Id" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
          </div>
        </div>
        <Footer />
      </div>




    )
  }
}
