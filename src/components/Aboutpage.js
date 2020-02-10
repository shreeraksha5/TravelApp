import React from 'react';
import { FormControl, FormCheck, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from '../components/Railways/Railstaticcomponents/footer.js'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bg_2 from '../images/bg_2.jpg';
import p1 from '../images/p1.jpg';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import meghesh from '../images/meghesh.jpg';
import vidya from '../images/vidya.jpg';
import raksha from '../images/raksha.jpg';


// import Navbars from './navbar.js'
import './Aboutpage.css'

export default class About extends React.Component {
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
                <NavItem> <Link to="/about"><b className=" linput">About</b></Link> </NavItem>
                <NavItem> <Link to="/Destination"><b className=" linput">Destination</b></Link> </NavItem>
                <NavItem> <Link to="/Contact"><b className=" linput">Contact</b></Link> </NavItem>

              </Nav>
              <Form inline>

                <ul> <Link to="/Railways"><button class="booknow">Book Now</button></Link></ul>

              </Form>
            </Navbar.Collapse>
          </Navbar>
          <p className="txt_about"><b>About Us</b></p>
          </div>   
          <div className="container-fluid back"><br/><br/>
            
          <div className="row " >
                    <div className="col-sm-6 col-xs-12 ">
                    <div className="row " >
                    <div className="col-sm-6 col-xs-12 ">
                    <img src={icon1} className="icon_img_class" alt="background image" />
                    <h1 className="icon_class">Activities</h1>
                    <p className="icon_text_class"> A small river named Duden flows by their place and supplies it with the necessary</p>


                    </div>
                    <div className="col-sm-6 col-xs-12 ">
                    <img src={icon2} className="icon_img_class" alt="background image" />
                            <h1 className="icon_class">Travel Arrangements </h1>
                            <p className="icon_text_class">A small river named Duden flows by their place and supplies it with the necessary</p>
             </div>
                      </div>
                    <div className="row " >
                    <div className="col-sm-6 col-xs-12 ">
                    <img src={icon3} className="icon_img_class" alt="background image" />
                    <h1 className="icon_class">Private Guide</h1>
                    <p className="icon_text_class"> A small river named Duden flows by their place and supplies it with the necessary</p>


                    </div>
                    <div className="col-sm-6 col-xs-12 ">
                    <img src={icon4} className="icon_img_class" alt="background image" />
                            <h1 className="icon_class">Location Manager </h1>
                            <p className="icon_text_class">A small river named Duden flows by their place and supplies it with the necessary </p>
                    </div>
                    </div>
                     </div>
             <div className="col-sm-6 col-xs-12 ">
                  <h className="icon_head">It's time to start your</h>
                        <br></br>
                                    <h className="icon_head"> adventure </h>
                                    <p  className="icon_body">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
                                    in which roasted parts of sentences fly into your mouth.<br/><br/>

                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named
                                    Duden flows by their place and supplies it with the necessary regelialia.</p><br/>
                                    <Form inline>
                                    <Button className="search_button"><b>Search Destination</b></Button>
                                        </Form>
                                        </div>
            </div>
            </div>


             <div className="container-fluid back"><br/><br/>
  <div className="row " >
  <div className="col-sm-1"></div>
                  <div className="col-sm-5 col-xs-12 ">
                          <img src={p1} className="weather_img_class" alt="background image" />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5 col-xs-12 text_1">
                    <p className="text_1"><b>Make Your Tour Memorable and Safe With Us</b></p>
                  <p className="text_2"><b>Far far away, behind the word mountains, far from the
                   countries Vokalia and Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right at the coast of the
                    Semantics, a large language ocean.</b></p> 
                 
               <div className="container">
              <div className="row " >
                  <div className="col-sm-4 col-xs-12 "> 
                  <p className="text_3"><b>300</b></p>  
                  <p className="text_4">Successful Tours</p>    
                  </div>
                  <div className="col-sm-4 col-xs-12 "> 
                  <p className="text_3"><b>24,000</b></p>  
                  <p className="text_4">Happy Tourist</p>    
                  </div>
                  <div className="col-sm-4 col-xs-12 "> 
                  <p className="text_3"><b>200</b></p>  
                  <p className="text_4">Place Explored</p>    
                  </div>
                  </div>
                  </div>
               </div>
 </div>
</div>



<div className="container-fluid">
          <p className="headaboutclass"><b>Tourist Feedback</b></p>
          <CardDeck>
            <Card  >
              <Card.Body >
                <Card.Text>
                  <p className="card_text4"> Why Lead Generation is Key for Business Growth</p>
                  <p className="card_text5"> A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                </Card.Text>
                <Card.Img className="feedback_img1" src={meghesh} />
                <p className="feedback_text">Meghesh</p>
              </Card.Body>
            </Card>
            <Card  >
              <Card.Body >
                <Card.Text>
                  <p className="card_text4"> Why Lead Generation is Key for Business Growth</p>
                  <p className="card_text5"> A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                </Card.Text>
                <Card.Img className="feedback_img" src={raksha} />
                <p className="feedback_text">Shreeraksha</p>
              </Card.Body>
            </Card>
            <Card  >
              <Card.Body >
                <Card.Text>
                  <p className="card_text4"> Why Lead Generation is Key for Business Growth</p>
                  <p className="card_text5"> A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                </Card.Text>
                <Card.Img className="feedback_img" src={vidya} />
                <p className="feedback_text">Vidya</p>
              </Card.Body>
            </Card>
          </CardDeck>

          </div>
          <Footer />
          </div>


          )
          }
          }
          
                                  
