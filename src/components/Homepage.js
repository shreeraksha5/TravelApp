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
//import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Navbar, Nav, NavItem, NavDropdown,Row,Col ,MenuItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bg_3 from '../images/bg_3.jpg';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import kerala from '../images/kerala.jpeg';
import kolkata from '../images/kolkata.jpg';
import odisha from '../images/odisha.jpg';
import ramaT from '../images/ramaT.jpg';
import murdeshwara from '../images/murdeshwara.jpg';
import chennai from '../images/chennai.jpg';
import goa from '../images/goa.jpg';
import hydrabad from '../images/hydrabad.jpeg';
import mangalore from '../images/mangalore.jpg';
import Rajasthan from '../images/Rajasthan.jpg';
import p9 from '../images/p9.jpg';
import punjab from '../images/punjab.jpg';
import p10 from '../images/p10.jpg';
import swaps from '../images/swap.png';
import p11 from '../images/p11.jpg';
import p12 from '../images/p12.jpg';
import meghesh from '../images/meghesh.jpg';
import vidya from '../images/vidya.jpg';
import raksha from '../images/raksha.jpg';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import placeholder from '../images/placeholder.png';
import arrow from '../images/arrow.png';
import call from '../images/call.png';
import email1 from '../images/email1.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../components/Railways/Railstaticcomponents/footer.js'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './Travelpage.css'
var dateFormat = require('dateformat');


// import Navbarss from './navbar.js'




export default class Travel extends React.Component {
  state = {
    startDate: new Date()
  };
  onFromTagsChange = (event, values) => {
    localStorage.clear();

    let str1 = values.title;
    const str = str1;
    const words = str.split('-');
    const arr = words.length
    console.log(words[arr - 1]);
    localStorage.setItem("OrgFrom", str1);
    localStorage.setItem("From", words[arr - 1]);
}

onToTagsChange = (event, values) => {
    let str1 = values.title;
    let str = str1;
    let words = str.split('-');
    const arr = words.length
    console.log(words[arr - 1]);
    localStorage.setItem("OrgTo", str1);
    localStorage.setItem("To", words[arr - 1]);
    this.setState({ to: str1 });

}
getTraininfos1=()=>{
  var now = this.textInput.value;
  localStorage.setItem("Date",now);
  console.log(now);
}
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    const top100Films = [
      { title: 'Mangaluru Junction-MAJN' },
      { title: 'Mangalore Central-MAQ' },
      { title: 'Panvel-PNVL' },
      { title: 'Delhi-NZM' },
      { title: 'Bhubaneswar-BBS.' },
      { title: "VASAI ROAD-BSR" },
      { title: 'Bangalore-SBC' },
      { title: 'Ratnagiri-RN' },
      { title: 'Madgaon-MAO' },
      { title: 'Baroda-BRC' },
      { title: 'Gorakhpur Jn-GKP' },
      { title: 'JAMMU TAWI-JAT' },
      { title: 'DEHRADUN-DDN' },
      { title: 'Pune-Pune' }
  ];
    return (
      <>
        <div className="container-fluid1">
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

          <div>
            <p className="nav_text input"><b>Travel to the any corner of the world, without going around in circles</b></p>
            <p className="text_a">Make Your Tour Amazing</p>
            <p className="text_b">With Us</p>
          </div>
      </div>
      <div className="container pading_sides">
      <div className="modify">
                                    <div className="container pad">

                                        <Row>
                                            <div className="col-sm-6 col-xs-12 line_left1">
                                                <Row>
                                                    <div className="col-sm-5 auto_pads">
                                                    
                                                        <Autocomplete id="combo-box-demo"
                                                            options={top100Films}
                                                            defaultValue={localStorage.getItem("OrgFrom")}
                                                            onChange={this.onFromTagsChange}
                                                            name="from" className="auto_buttons autocompletes"
                                                            getOptionLabel={option => option.title}
                                                            style={{ width: 200 }}
                                                            renderInput={params => (
                                                                <TextField {...params} classname="label_white" label="From" variant="outlined" fullWidth />
                                                            )} />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <img src={swaps} className="swap" />


                                                    </div>
                                                    <div className="col-sm-5">
                                                        <Autocomplete id="combo-box-demo"
                                                            options={top100Films}
                                                            onChange={this.onToTagsChange}
                                                            defaultValue={localStorage.getItem("OrgTo")}

                                                            name="to"
                                                            className="auto_buttons autocompletes"
                                                            getOptionLabel={option => option.title}
                                                            style={{ width: 200 }}
                                                            renderInput={params => (
                                                                <TextField {...params} classname="label_white" label="To" variant="outlined" fullWidth />
                                                            )} />

                                                    </div>
                                                </Row>
                                            </div>
                                            <div className="col-sm-3 borders">
                                                <Col sm={12} >
                                                    <p className="p_journey">Journey Date</p>
                                                </Col>
                                                <Col sm={12}>

                                                    <input type="date" name="dates" id="date_condss" ref={(input) => this.textInput = input} />
                                                    {/* <input type="date" name="calender"  id="date_conds" ref={(input) =>console.log(input)}/>                                                              "/>           */}
                                                    {/* <input type="date" name="dates" id="date_conds"  ref={(input) =>this.textInput=input}/> */}
                                                    {/* <DatePicker onChange={this.onChange} value={date} /> */}
                                                </Col>
                                            </div>
                                            <div className="col-sm-2 mod_button">
                                                <Col sm={12}> <Link to="/Railways">    <button onClick={this.getTraininfos1} className="button_modify" placeholder="MODIFY">MODIFY</button> </Link></Col>
                                            </div>
                                        </Row>


                                    </div>
                                </div>
      </div>



        <div className="container-fluid back noo">

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


              <h className="icon_head"> adventure </h>
              <p className="icon_body">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
               in which roasted parts of sentences fly into your mouth.<br /><br />

                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named
               Duden flows by their place and supplies it with the necessary regelialia.</p><br />
              <Form inline>
              <Button className="search_button"><b>Search Destination</b></Button>
              </Form>
            </div>
          </div>
        </div>




        <div className="container-fluid back">
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


        <div className="container-fluid destiny ">
          <p className="headaboutclass"><b>Best Place Destination</b></p>
          <div className="destiny caro_class">
          <Carousel>
            <Carousel.Item>
              <CardGroup className="groupcard">
              
                <Card>
                  <Card.Img className="caro_class1" src={mangalore} />
                  <Card.Body>
                    <Card.Title className="caro_class2"></Card.Title>
                    <button type="button" className="btn btn-outline-primary" >mangalore</button>
                   
                  </Card.Body>
                  </Card>

               
                <Card>
                  <Card.Img className="caro_class1" src={kolkata} />

                  <Card.Body>
                    <Card.Title className="caro_class2"></Card.Title>
                    <button type="button" className="btn btn-outline-primary" >kolkata</button>
                   
                  </Card.Body>


                </Card>
                <Card>
                  <Card.Img className="caro_class1" src={chennai} />
                  <Card.Body>
                    <Card.Title className="caro_class2"></Card.Title>
                    <button type="button" className="btn btn-outline-primary" >chennai</button>
                    
                  </Card.Body>

                </Card>
              </CardGroup>
            </Carousel.Item>


            <Carousel.Item>
              <CardGroup className="groupcard">
      
                <Card>
                  <Card.Img className="caro_class1" src={murdeshwara} />
                  <Card.Body>
                    <Card.Title className="caro_class2"></Card.Title>
                    <button type="button" className="btn btn-outline-primary" >Mysore</button>
                   
                  </Card.Body>


                </Card>
              
                <Card>
                  <Card.Img className="caro_class1" src={punjab} />

                  <Card.Body>
                    <Card.Title className="caro_class2"></Card.Title>
                    <button type="button" className="btn btn-outline-primary" >Punjab</button>
                   
                  </Card.Body>
                  </Card>
            
                <Card>
                  <Card.Img className="caro_class1" src={Rajasthan} />
                  <Card.Body>
                    <Card.Title className="caro_class2"></Card.Title>
                    <button type="button" className="btn btn-outline-primary" >Rajasthan</button>
                   
                  </Card.Body>

                </Card>
              </CardGroup>
            </Carousel.Item>


          </Carousel>
        </div></div>





        <div className="container-fluid">
          <p className="headclass"><b>Tourist Feedback</b></p>
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

          <div className="container-fluid">
            <p className="headclass"><b>Recent Post</b></p>
            <CardDeck>
              <Card  >
                <Card.Img className="card_img1" src={p10} />
                <Card.Body >
                  <Card.Text>
                    <Button variant="outline-success" className="person_input1"><b>21-2019-August</b></Button>
                    <p className="card_text4"> Why Lead Generation is Key for Business Growth</p>
                    <p className="card_text5"> A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img className="card_img1" src={p11} />
                <Card.Body >
                  <Card.Text>
                    <Button variant="outline-success" className="person_input1"><b>21-2019-August</b></Button>
                    <p className="card_text4"> Why Lead Generation is Key for Business Growth</p>
                    <p className="card_text5"> A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                  </Card.Text>
                </Card.Body>

              </Card>
              <Card>
                <Card.Img className="card_img1" src={p12} />
                <Card.Body >
                  <Card.Text>
                    <Button variant="outline-success" className="person_input1"><b>21-2019-August</b></Button>
                    <p className="card_text4"> Why Lead Generation is Key for Business Growth</p>
                    <p className="card_text5"> A small river named Duden flows by their place and supplies it with the necessary regelialia</p>

                  </Card.Text>
                </Card.Body>

              </Card>
            </CardDeck>

          </div>
        </div>











        <Footer />
     </>




    )
  }
}
