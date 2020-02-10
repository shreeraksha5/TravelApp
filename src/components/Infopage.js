import React, { Component } from 'react'
import './Weatherpage.css'
import bg from '../bg.jpg';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { FormControl, FormCheck } from 'react-bootstrap';
//const API_KEY = "c323716fb35e3c4ddfc4dfbadd4ade83";

export default class Infopage extends React.Component {
    
  /*  state={
        Login:"",
        Id:"",
        followers:"",
        created_at:"",
        img:""
    }*/

    state={
        datas:[]
    }
    
    componentDidMount(){

        this.getAllGithubUsers();
         
      }
  

      getAllGithubUsers(){
        axios.get(`https://api.github.com/users?since=10`)
        .then(res=>{
            var data=[];
            data=res.data;
            const userInfo=data.map((result)=>{
              return  <div className="col-sm-4">
                        <div className="card" >
                                <img className="card-img-top img_class " src={result.avatar_url}/>
                        <div className="card-body background">
                            <h4 className="card-title p_colorchange">Name:{result.login}</h4>
                            <p className="p_colorchange">Id:{result.id}</p>
                            
                            <p className="p_colorchange">URL:{result.url}</p>
                            <button type="submit" className="p_colorchange">Goto Profile</button>
                        </div>
                            </div>
                            <br></br>
                    </div>
                    

            })

            this.setState({datas:userInfo})

        })
    }
    




handleSubmit = async (e) => {
    e.preventDefault()
    if(e.target.elements.inputnumber.value !=""){
  await axios.get(`https://api.github.com/users/${e.target.elements.inputnumber.value}`)
.then(res => {
    var result=[];
    result=res.data;
    console.log(result)
    var card=   <div className="col-sm-4">
                    <div className="card" >
                            <img className="card-img-top img_class " src={result.avatar_url}/>
                    <div className="card-body background">
                        <h4 className="card-title p_colorchange">Name:{result.login}</h4>
                        <p className="p_colorchange">Id:{result.id}</p>
                        
                        <p className="p_colorchange">URL:{result.url}</p>
                        <button type="submit" className="p_colorchange">Goto Profile</button>  
                    

                    </div>
                        </div>
                </div>

   
    this.setState({datas:card})

})}
else{
    this.getAllGithubUsers();
}


  
/*this.setState({name:result.name,username:result.login, repos:result.public_repos,url:result.url,image:result.avatar_url});*/


 
}

render() {
    return (
            <div className="background_img">
                <div class="container">
                    <div>
                    <center>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                 <p className="color_change">GitFetch - Profile Finder</p>
                    <p className="color_change">for Github</p>
                    <p className="p_style">Check out the repos,followers and more. </p>
                    <p className="p_style">Just By Entering Username!</p>
                    <img src={this.state.image} class="img_class"/>
            
                </center>

                    </div>
                    <form  onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-4">

                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                            <div className="col-sm-4">
                                <input type="text" name="inputnumber" className="input_text" placeholder="EnterName"/>

                              
                            </div>
                            <div class="col-sm-8">
                                <button className="button_Style">Search</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                    {this.state.datas}
                   
                     </div>
                
            </div>
        </div>
   ) 







}}















/*

 render() {
        return (
            <div className="backgroung_img">
            <div className="container ">
                <form onSubmit={this.handleSubmit} >
            <div className="row ">
            <div className="col-sm-6  info_inputs">
                <input type="text" placeholder="name"  name="name" className="dimensions1"/>
                  </div>  
                  <div className="col-sm-6 col-xs-12 info_inputs">
                                <button type="submit" className="button_dimension1">Submit</button>
                                </div>
                                </div> 
                                </form>  
                                </div>  
            <div className="container">
                <div className="row">
                <div className="col-sm-3">
                <div className="carddim">
                <img className="card-img-top" src={this.state.img}/>
                <div className="card">
                <h4 className="card-title">Name:{this.state.Login}</h4>
                <p className="card-text">Url:{this.state.Id}</p>
                <p className="card-text">Followers:{this.state.followers}</p>
                <p className="card-text">Url:{this.state.created_at}</p>
                <a href="#" class="btn btn-primary">See Profile</a>
                </div>
            </div>
           </div>
           </div>
            </div>
            </div>
        
        );
    }
}

*/