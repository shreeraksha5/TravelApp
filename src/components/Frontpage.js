
import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Row, Col,Tooltip,OverlayTrigger} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import weather from'../images/weatherupdates.jpg'
import './Frontpage.css'


export default class Front extends React.Component {
    render() {
        return (

            <div className="front_img">
                <p className="front_text"><b>React Application</b></p> 
                <div className="conatiner">

                   
                    <div className="row ">
                    <div className="col-sm-4">
                    <OverlayTrigger placement="right" overlay={(<Tooltip id="hi" className="show"></Tooltip>)} triggerType="hover">
                    <Link to="/Weather"> <Button variant="primary"  className="front_btn1">
                                Weather App
                                </Button></Link>
           </OverlayTrigger>
                         

                    </div> 
                    <div className="col-sm-4">
                           <Link to="/Info"> <Button variant="primary" size="lg" className="front_btn2">
                                Profile App
                                </Button></Link>

                    </div> 
                    <div className="col-sm-4">
                           <Link to="/Home"> <Button variant="primary" size="lg" className="front_btn3">
                                Search Train App
                                </Button></Link>

                    </div> 

                   </div>

                </div>
            </div>
        

       


        )
    }
}




