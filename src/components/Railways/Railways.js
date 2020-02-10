import React, { Component } from 'react'
import './Railways.css'
import Footers from './Railstaticcomponents/footer'
import { Navbar, Dropdown, Container, Nav, Button,NavItem,Form, Table, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import trains2 from '../../images/train2.png'
import trains1 from '../../images/Train1.png'
import trains4 from '../../images/trains4.png'
import trains5 from '../../images/trains5.png'
import arrow from '../../images/next.png'
import arrowsup from '../../images/upload.png'
import swaps from '../../images/swap.png';
import Calendar from 'react-calendar';
import swap from '../../images/swap.png'
import Nvbr from '../Railways/Railstaticcomponents/navbar.js'
import uparrow from '../../images/upload.png'
import { Link as Linkss, animateScroll as scroll } from "react-scroll";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Paging from './Railstaticcomponents/apitest.js'
var dateFormat = require('dateformat');




export default class railways extends Component {
    state = {
        loading: true,
        Data: [],
        travelquotes: [],
        from: "",
        to: "",
        date: new Date(),
        onload: false,
        allinone: [],
        rajdhani: [],
        duronto: [],
        superfast: [],
        express: [],

    }
    componentDidMount() {
        var quotes = [];
        var stringss = "";
        quotes[0] = "“The World is a book and those who do not travel read only a page.” ~ Saint Augustine"
        quotes[1] = "“Life is either a daring adventure or nothing at all” ~ Helen Keller"
        quotes[2] = "“Take only memories, leave only footprints” ~ Chief Seattle"
        quotes[3] = "” The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.” ~ Jeevan Sir"
        quotes[4] = "“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta"
        this.setState({ travelquotes: quotes });
        // statess={this.state.travelquotes[Math.random()]
        if(localStorage.getItem("OrgFrom")){
        this.loadtrains(); 
        }
        // var froms=localStorage.getItem("from");
        // var tos=localStorage.getItem("to");
        // if(froms==null &tos==null){
        // this.setState({onload:false});
        // }
        // else
        // {
        // this.setState({from:froms,to:tos,onload:true});
        // }
    }
    loadtrains = async () => {
        var i = 0;
        var day = [];
        var dayss;
        var dest_time;
        var arr_time;
        var dest_arr;
        var ari_arr;
        var deptpm, arrpm;
        var froms = localStorage.getItem("OrgFrom");
        var end = localStorage.getItem("OrgTo");
        const words = froms.split('-');
        const arr = words.length
        const dester =
            console.log(words[arr - 1]);
        // localStorage.setItem("OrgFrom", str1);
        localStorage.setItem("From", words[arr - 1]);
        var now = localStorage.getItem("Date");
        if(now==null)
        {
            now="07-02-2020"
            console.log(now);
        }
        else{
         now = dateFormat(now, "dd-mm-yyyy");}
        const wordss = end.split('-');
        const arrs = wordss.length
        console.log(words[arrs - 1]);
        // localStorage.setItem("OrgFrom", str1);
        localStorage.setItem("To", wordss[arrs - 1]);


        await axios.get(`https://api.railwayapi.com/v2/between/source/${localStorage.getItem("From")}/dest/${localStorage.getItem("To")}/date/${now}/apikey/0gd8z8xa2u/`).then(res => {
            var datass = [];
            datass = res.data.trains;
            this.setState({ loading: false })
            console.log(datass);
            const userInfo = res.data.trains.map((result) => {
                dest_time = result.src_departure_time;
                arr_time = result.dest_arrival_time;
                dest_arr = dest_time.split(":");;
                ari_arr = arr_time.split(":");
                console.log(typeof dest_time);
                if (dest_arr[0] >= 12) {
                    deptpm = "PM"
                }
                else {

                    deptpm = "AM"
                }
                if (ari_arr[0] >= 12) {
                    arrpm = "PM"
                }
                else {
                    arrpm = "AM"
                }
                console.log(typeof dest_time);
                if (result.name.match(/ DURONTO /i)) {

                    return (<>
                        <tr>
                            <td className="width_alter"><img src={trains4} className="train4_logo" /></td>
                            <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                            <td className="width_pro"><Row>
                                <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                            </Row>
                                <Row>

                                    <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                </Row>
                            </td>
                            <td className="width_alter"><Row>
                                {

                                    result.days.map(results => {

                                        if (results.runs == "Y" || results.runs == "y") {
                                            return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                        }



                                    }
                                    )

                                }
                            </Row></td>
                            <td className="width_classes">
                                <Row>

                                    {

                                        result.classes.map(results => {


                                            return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                {results.code}</p></Col>);
                                        }
                                        )

                                    }

                                </Row>
                            </td>
                        </tr>
                    </>);

                }
                else {
                    if (result.name.match(/ RAJDHANI /i)) {
                        { i = i + 1; }

                        return (
                            <tr>
                                <td className="width_alter"><img src={trains4} className="train4_logo" /></td>
                                <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                <td className="width_pro"><Row>
                                    <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                    <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                    <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                </Row>
                                    <Row>

                                        <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                    </Row>
                                </td>
                                <td><Row>
                                    {

                                        result.days.map(results => {

                                            if (results.runs == "Y" || results.runs == "y") {
                                                return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                            }



                                        }
                                        )

                                    }
                                </Row></td>
                                <td className="width_classes"><Row>

                                    {

                                        result.classes.map(results => {


                                            return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                {results.code}</p></Col>);
                                        }
                                        )

                                    }

                                </Row>
                                </td>
                            </tr>);
                    }
                    else {
                        if (result.name.match(/ SF /i)) {


                            return (
                                <tr>
                                    <td className="width_alter"><img src={trains5} className="trains3_logo" /></td>
                                    <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                    <td className="width_pro"><Row>
                                        <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                        <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                        <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                    </Row>
                                        <Row>

                                            <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                        </Row>
                                    </td>
                                    <td><Row>
                                        {

                                            result.days.map(results => {

                                                if (results.runs == "Y" || results.runs == "y") {
                                                    return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                                }



                                            }
                                            )

                                        }
                                    </Row></td>
                                    <td className="width_classes">
                                        <Row>

                                            {

                                                result.classes.map(results => {


                                                    return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                        {results.code}</p></Col>);
                                                }
                                                )

                                            }

                                        </Row></td>
                                </tr>);
                        }
                        else {

                            { i = i + 1; }

                            return (
                                <tr>
                                    <td className="width_alter"><img src={trains1} className="trains3_logo" /></td>
                                    <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                    <td className="width_pro"><Row>
                                        <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                        <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                        <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                    </Row>
                                        <Row>

                                            <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                        </Row>
                                    </td>
                                    <td className="width_classes"><Row>
                                        {

                                            result.days.map(results => {

                                                if (results.runs == "Y" || results.runs == "y") {
                                                    return (<Col sm={6}> <Button variant="warning" className="days_button">{results.code}</Button>{' '}</Col>);
                                                }



                                            }
                                            )

                                        }
                                    </Row></td>
                                    <td><Row>

                                        {

                                            result.classes.map(results => {


                                                return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                    {results.code}</p></Col>);
                                            }
                                            )

                                        }

                                    </Row></td>
                                </tr>);

                        }
                    }








                }

            }
            )
            this.setState({ Data: userInfo });

        });
    }



    getTraininfo1 = async (e) => {
        // if(onload)
        e.preventDefault();
        var start = localStorage.getItem("From");
        var end = localStorage.getItem("To");
        var now = this.textInput.value;
        localStorage.setItem("Date",now)
        console.log(now);
        var dest_time;
        var arr_time;
        var dest_arr;
        var ari_arr;
        var deptpm;
        var arrpm;
        now = dateFormat(now, "dd-mm-yyyy");
        console.log("start", start);
        console.log("end", end);
        console.log("time", now)
        console.log(now);
        var i = 0;
        var day = [];
        var dayss;
        var rajdhanis, durontos, superfasts, expresss = [];
        console.log("start", start);
        console.log("end", end);
        console.log("now", now);
        await axios.get(`https://api.railwayapi.com/v2/between/source/${start}/dest/${end}/date/${now}/apikey/0gd8z8xa2u/`).then(res => {
            if (res == null) {
                const userinfo = <tr>
                    <td colspan="5">No Trains on This Route</td>
                </tr>;
                this.setState({ Data: userinfo });
            }
            else {
                var datass = [];
                datass = res.data.trains;
                this.setState({ loading: false })
                console.log(datass);
                const userInfo = res.data.trains.map((result) => {
                    dest_time = result.src_departure_time;
                    arr_time = result.dest_arrival_time;
                    dest_arr = dest_time.split(":");;
                    ari_arr = arr_time.split(":");
                    console.log(typeof dest_time);
                    if (dest_arr[0] >= 12) {
                        deptpm = "PM"
                    }
                    else {

                        deptpm = "AM"
                    }
                    if (ari_arr[0] >= 12) {
                        arrpm = "PM"
                    }
                    else {
                        arrpm = "AM"
                    }


                    if (result.name.match(/ DURONTO /i)) {

                        durontos = <>
                            <tr>
                                <td className="width_alter"><img src={trains2} className="trains2_logo" /></td>
                                <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                <td className="width_pro"><Row>
                                    <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                    <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                    <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                </Row>
                                    <Row>

                                        <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                    </Row>
                                </td>
                                <td className="width_alter"><Row>
                                    {

                                        result.days.map(results => {

                                            if (results.runs == "Y" || results.runs == "y") {
                                                return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                            }



                                        }
                                        )

                                    }
                                </Row></td>
                                <td className="width_classes">
                                    <Row>

                                        {

                                            result.classes.map(results => {


                                                return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                    {results.code}</p></Col>);
                                            }
                                            )

                                        }

                                    </Row>
                                </td>
                            </tr>
                        </>
                        return (durontos);

                    }
                    else {
                        if (result.name.match(/ RAJDHANI /i)) {
                            { i = i + 1; }

                            rajdhanis =
                                <tr>
                                    <td className="width_alter"><img src={trains4} className="train4_logo" /></td>
                                    <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                    <td className="width_pro"><Row>
                                        <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                        <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                        <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                    </Row>
                                        <Row>

                                            <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>


                                        </Row>
                                    </td>
                                    <td><Row>
                                        {

                                            result.days.map(results => {

                                                if (results.runs == "Y" || results.runs == "y") {
                                                    return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                                }



                                            }
                                            )

                                        }
                                    </Row></td>
                                    <td className="width_classes"><Row>

                                        {

                                            result.classes.map(results => {


                                                return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                    {results.code}</p></Col>);
                                            }
                                            )

                                        }

                                    </Row>
                                    </td>
                                </tr>
                            return (rajdhanis);
                        }
                        else {
                            if (result.name.match(/ SF /i)) {
                                { i = i + 1; }

                                superfasts = <tr>
                                    <td className="width_alter"><img src={trains5} className="trains3_logo" /></td>
                                    <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                    <td className="width_pro"><Row>
                                        <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                        <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                        <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                    </Row>
                                        <Row>

                                            <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                        </Row>
                                    </td>
                                    <td><Row>
                                        {

                                            result.days.map(results => {

                                                if (results.runs == "Y" || results.runs == "y") {
                                                    return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                                }



                                            }
                                            )

                                        }
                                    </Row></td>
                                    <td className="width_classes">
                                        <Row>

                                            {

                                                result.classes.map(results => {


                                                    return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                        {results.code}</p></Col>);
                                                }
                                                )

                                            }

                                        </Row></td>
                                </tr>
                                return (superfasts);
                            }
                            else {

                                { i = i + 1; }

                                expresss =
                                    <tr>
                                        <td className="width_alter"><img src={trains1} className="trains3_logo" /></td>
                                        <td><Row><Col sm><p className="p_trainname">{result.name}</p></Col></Row><Row><Col sm><p className="p_number">{result.number}</p></Col></Row></td>
                                        <td className="width_pro"><Row>
                                            <Col sm={1}><p className="p_font">{result.src_departure_time + deptpm}</p></Col>
                                            <Col sm={3} className="arrow_right"><img src={arrow} className="arrow_alter" /></Col>
                                            <Col sm={1} className="margin_left"><p className="p_font">{result.dest_arrival_time + arrpm}</p></Col>
                                        </Row>
                                            <Row>

                                                <p className="p_totaltime">Total Time:{result.travel_time}hrs</p>

                                            </Row>
                                        </td>
                                        <td className="width_classes"><Row>
                                            {

                                                result.days.map(results => {

                                                    if (results.runs == "Y" || results.runs == "y") {
                                                        return (<Col sm={6}> <Button variant="warning">{results.code}</Button>{' '}</Col>);
                                                    }



                                                }
                                                )

                                            }
                                        </Row></td>
                                        <td><Row>

                                            {

                                                result.classes.map(results => {


                                                    return (<Col sm={6}><p className="p_font"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                        {results.code}</p></Col>);
                                                }
                                                )

                                            }

                                        </Row></td>
                                    </tr>
                                return (expresss);

                            }
                        }








                    }

                }
                )
                this.setState({ Data: userInfo, allinone: userInfo });
                this.setState({ rajdhani: rajdhanis });
                this.setState({ duronto: durontos });
                this.setState({ superfast: superfasts });
            } this.setState({ express: expresss });
        })
            ;


    }

    onChange = date => this.setState({ date })



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

    handleSelect = function (evtKey, evt) {

        if (evtKey == "duranto") {
            var dur = this.state.duronto;
            this.setState({ Data: dur });
            this.render();
        }
        else {
            if (evtKey == "rajdhani") {
                var raj = this.state.rajdhani;
                this.setState({ Data: raj })
                this.render();
            }
            else {
                if (evtKey == "superfast") {
                    var sup = this.state.superfast;
                    this.setState({ Data: raj })
                }
                else {
                    var exp = this.state.allinone;
                    this.setState({ Data: exp })

                }

            }

        }

    }

    render() {
        var statess;
        var i = 0;
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
        if (this.state.loading == true) {
            statess = <>
                <div className="bbck_ground">
                    <div className="displayss">
                        <Navbar bg="dark" expand="lg">
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home" className="Home_side">Home</Nav.Link>
                                    <Nav.Link href="#features" className="About_side">ABOUT</Nav.Link>
                                    <Nav.Link href="#pricing" className="About_side" >Destination</Nav.Link>
                                    
                                    <Nav.Link href="#pricing" className="About_side">Contact</Nav.Link>{' '}
                                    <Button variant="warning" className="About_side">Book Now</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    </div>
                    <div className="displays">
                        <Nvbr />
                    </div>

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
                                                style={{ width: 250 }}
                                                renderInput={params => (
                                                    <TextField {...params} classname="label_white" label={localStorage.getItem("OrgFrom")} variant="outlined" fullWidth />
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
                                                style={{ width: 250 }}
                                                renderInput={params => (
                                                    <TextField {...params} classname="label_white" label={localStorage.getItem("OrgTo")} variant="outlined" fullWidth />
                                                )} />

                                        </div>
                                    </Row>
                                </div>
                                <div className="col-sm-2 borders">
                                    <Col sm={12} >
                                        <p className="p_journey">Journey Date</p>
                                    </Col>
                                    <Col sm={12}>

                                        
                                        {/* <input type="date" name="calender"  id="date_conds" <input type="date" name="dates" id="date_conds" value={localStorage.getItem("Date")} ref={(input) => this.textInput = input} />ref={(input) =>console.log(input)}/>                                                              "/>           */}
                                        {/* <input type="date" name="dates" id="date_conds"  ref={(input) =>this.textInput=input}/> */}
                                        {/* <DatePicker onChange={this.onChange} value={date} /> */}
                                    </Col>
                                </div>
                                <div className="col-sm-2 mod_button">
                                    <Col sm={12}>     <button onClick={this.getTraininfo1} className="button_modify" placeholder="MODIFY">MODIFY</button> </Col>
                                </div>
                            </Row>


                        </div>
                    </div>


                    <center>
                        <img src="https://www.animatedimages.org/data/media/75/animated-train-image-0043.gif" border="0" alt="animated-train-image-0043" />
                        <p className="p_text"><i>
                            {this.state.travelquotes[Math.floor((Math.random() * 4) + 1)]}</i></p>

                    </center>



                    <Footers />

            </>
                }
        else {

                    statess = <>
                        <div>
                            
                            <div className="bbck_ground">
                                <div className="displayss">
                                    <Navbar bg="dark" expand="lg">
                                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                            <NavItem > <Link to="/Home"><b className=" home_input">Home</b></Link></NavItem>
    <NavItem> <Link to="/about"><b className=" link_inputss">about</b></Link> </NavItem>
    <NavItem> <Link to="/Destination"><b className=" link_inputss">Destination</b></Link> </NavItem>
    <NavItem> <Link to="/Contact"><b className="link_inputss">Contact</b></Link> </NavItem>
    <Form inline>

<ul> <Link to="/Railways"><button class="booknow">Book Now</button></Link></ul>

</Form>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                                <div className="displays">
                                    <Nvbr />
                                </div>

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
                                                            style={{ width: 250 }}
                                                            renderInput={params => (
                                                                <TextField {...params} classname="label_white" label={localStorage.getItem("OrgFrom")} variant="outlined" fullWidth />
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
                                                            style={{ width: 250 }}
                                                            renderInput={params => (
                                                                <TextField {...params} classname="label_white" label={localStorage.getItem("OrgTo")} variant="outlined" fullWidth />
                                                            )} />

                                                    </div>
                                                </Row>
                                            </div>
                                            <div className="col-sm-2 borders">
                                                <Col sm={12} >
                                                    <p className="p_journey">Journey Date</p>
                                                </Col>
                                                <Col sm={12}>

                                                    <input type="date" name="dates" id="date_conds" value={localStorage.getItem("Date")} ref={(input) => this.textInput = input} />
                                                    {/* <input type="date" name="calender"  id="date_conds" ref={(input) =>console.log(input)}/>                                                              "/>           */}
                                                    {/* <input type="date" name="dates" id="date_conds"  ref={(input) =>this.textInput=input}/> */}
                                                    {/* <DatePicker onChange={this.onChange} value={date} /> */}
                                                </Col>
                                            </div>
                                            <div className="col-sm-2 mod_button">
                                                <Col sm={12}>     <button onClick={this.getTraininfo1} className="button_modifys" placeholder="MODIFY">MODIFY</button> </Col>
                                            </div>
                                        </Row>


                                    </div>
                                </div>
                                <Container>
                                    <div>
                                        <p className="p_types">Types of Trains</p>
                                        <Row className="row_styles">
                                            <Col sm={3}>
                                                <Col sm={12} >
                                                    <img src={trains2} className="trains2_logos" />
                                                </Col>
                                                <Col sm={12} className="margin_dur">
                                                    <p className="train_name">Duronto</p>
                                                </Col>
                                            </Col>
                                            <Col sm={3}>
                                                <Col sm={12}>
                                                    <img src={trains4} className="trains4_logos" />
                                                </Col>
                                                <Col sm={12} className="margin_raj">
                                                    <p className="train_name">Rajdhani</p>
                                                </Col>

                                            </Col>
                                            <Col sm={3}>
                                                <Col sm={12}>
                                                    <img src={trains5} className="trains5_logos" />
                                                </Col>
                                                <Col sm={12} className="margin_sup">
                                                    <p className="train_name">SuperFast Express</p>
                                                </Col>

                                            </Col>
                                            <Col sm={3}>
                                                <Col sm={6}>
                                                    <img src={trains1} className="trains1_logos" />
                                                </Col>
                                                <Col sm={6} className="margin_exp">
                                                    <p className="train_name">Express</p>
                                                </Col>

                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                                <div className="container table_container">
                                    <Table striped responsive="sm" hover size="sm" className="table_boxshadow">
                                        <thead>
                                            <tr>
                                                <th>Trains</th>
                                                <th className="width_prob">Train Name</th>
                                                <th>Departure/Arrival Time</th>
                                                <th>Available Days</th>
                                                <th>Classes Available</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.Data}
                                        </tbody>
                                    </Table>
                                <Linkss    activeClass="active"
    to="navid"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
><img src={uparrow} className="img_arrow"/></Linkss>
                                </div>
                                <div className="paging">
                                    <Paging />
                                </div>
                                <br /><br /><br />
                                <br /><br /><br />
                                <Footers />
                            </div>
                        </div>
                    </>

                } return (
            <div>
                    {statess}
                </div>

                )
            }
        }