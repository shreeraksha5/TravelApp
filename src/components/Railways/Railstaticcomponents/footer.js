import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './footer.css'
import footerss from '../../../images/location\ makerr.png'
import phone from '../../../images/phones.png'
import mail from '../../../images/mails.png'
export default function footer() {
    return (
        <div className="footer_background">
            <div className="container">
                <Row>
                    <Col sm={3} className="p_white">
                        <h3 className="p_white">Vacation</h3>
                        <br/><br/>
                    <p className="p_white">Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </Col>
                    <Col sm={3} className="p_white">
                        <h3 className="p_white">Information</h3>
                        <br/><br/>
                        <p className="p_white">Online Enquiry</p>
                        <p  className="p_white">General Enquiries</p>
                        <p className="p_white">Booking Conditions</p>
                        <p className="p_white">Privacy and Policy</p>
                        <p className="p_white">Refund Policy</p>
                        <p className="p_white">Call US</p>
                    </Col>
                    <Col sm={3} className="p_white">
                    <h3 className="p_white">Experience</h3>
                   <br/><br/>
                    <p className="p_white">Adventure</p>
                    <p className="p_white">Hotel and Resturant</p>
                    <p className="p_white">Beach</p>
                    <p className="p_white">Nature</p>
                    <p className="p_white">Camping</p>
                    <p className="p_white">Party</p>
                    </Col>
                    <Col sm={3} className="p_white">
                    <h3 className="">Have a Questions</h3>
                    <br/><br/>
                    <Row>
                        <Col sm={2}>
                        <img src={footerss} className="locations_size"/>
                        </Col>
                        <Col sm>
                            <p className="p_white">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={2}>
                   <img src={phone} className="img_Background"/>
                        </Col>
                        <Col sm><p className="p_white">+23456 908</p></Col>
                    </Row>
                    <Row>
                    <Col sm={2}>
                   <img src={mail} className="mail_Background"/>
                        </Col>
                        <Col sm={8}> <p className="p_white">shenoy.meghesh@terralogic.com</p></Col>
                    </Row>
                        </Col>
                    </Row>                    
                    

            </div>
        </div>
    )
}