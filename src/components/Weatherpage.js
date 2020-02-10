import React, { Component } from 'react'
import './Weatherpage.css'
import img from '../img.jpeg';
import axios from 'axios';
import { FormControl, FormCheck } from 'react-bootstrap';
const API_KEY = "c323716fb35e3c4ddfc4dfbadd4ade83";

export default class Weatherpage extends React.Component {
    
    state={
        city:"",
        country:"",
        temperature:"",
        humidity:"",
        description:""
    }

     handleSubmit = async (e) => {
        e.preventDefault()
        var result;
      

        const data= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},${e.target.country.value}&appid=${API_KEY}&units=metric`)
        .then(res => {
         // console.log(res);
         // console.log(res.data);
         result=res.data;
         console.log(result);

         this.setState({
            temperature :result.main.temp , 
            city:result.name ,
            country:result.sys.country,
            humidity:result.main.humidity,
            description:result.weather[0].description 
        });
        });
        
    }
        
  

   
    render() {
        return (
            <div className="container-fluid weather">
                <div className="row padding" >
                    <div className="col-sm-6 col-xs-12">
                            <img src={img} className="weather_img" alt="background image" />
                    </div>
                    <div className="col-sm-6 col-xs-12 weather_inputs">
                            <form  onSubmit={this.handleSubmit}>
                            <div className="row" >
                            <div className="col-sm-4 col-xs-12">
                                <input type="text" placeholder="city"name="city" className="dimensions"/>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <input type="text" placeholder="country" name="country" className="dimensions" />
                                </div>
                            <div className="col-sm-4 col-xs-12">
                                <button type="submit" className="button_dimension">Submit</button>
                                </div>
                            </div> 
                            </form>
                        <div className="col-sm-12 description_div">
        <p className="result">Temperature: {this.state.temperature} </p>
        <p className="result">city: {this.state.city}</p>
        <p className="result">country: {this.state.country}</p>
        <p className="result">Humidity: {this.state.humidity} </p>
        <p className="result">Description: {this.state.description}  </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}