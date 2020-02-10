import React from 'react'
import {Row,Col,Navbar ,Form, Nav, NavItem} from 'react-bootstrap'
import './navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Link as Linkss, animateScroll as scroll } from "react-scroll";

export default function navbar() {
    return (
        <Navbar bg="dark" variant="dark" id="navid">

<Navbar.Brand href="#home">
  <p className="txt_c"> <b>VACATION Travel Agency</b></p>

</Navbar.Brand>


<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav >

    <NavItem > <Link to="/Home"><b className=" home_input">Home</b></Link></NavItem>
    <NavItem> <Link to="/about"><b className=" link_input">About</b></Link> </NavItem>
    <NavItem> <Link to="/Destination"><b className=" link_input">Destination</b></Link> </NavItem>
    <NavItem> <Link to="/Contact"><b className="link_input">Contact</b></Link> </NavItem>
    <NavItem> <Linkss
    activeClass=""
    to="pages"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
><b className="link_input">CancelledTrains</b></Linkss> </NavItem>

  </Nav>
  <Form inline>

    <ul> <Link to="/Railways"><button class="booknow">Book Now</button></Link></ul>

  </Form>
</Navbar.Collapse>
</Navbar>
    )
}