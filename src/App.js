import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
 Route,
  Link
} from "react-router-dom";
import Front from './pages/Front';
import Weather from './pages/weather';
import Info from './pages/Info';
import Travel from './pages/Travel';

import Home from './pages/Home';
import About from './pages/About';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import Railways from './components/Railways/Railways';


// import {Platform , StyleSheet , Text , view} from 'react-native';





function App() {
  return (
   <>
  
       <Router>
        <Switch>
            
          <Route exact path="/">
            <Front/>
         </Route>



          <Route exact path="/Weather">
            <Weather/>
         </Route>

         <Route exact path="/info">
            <Info/>
         </Route>

         <Route exact path="/Travel">
         <Travel/>
         </Route>

        <Route exact path="/Home">
         <Home/>
         </Route>


         <Route exact path="/About">
         <About/>
         </Route>
         <Route exact path="/Destination">
         <Destination/>
         </Route>



         <Route exact path="/Contact">
         <Contact/>
         </Route>

        
         <Route exact path="/Railways">
         <Railways/>
         </Route>
            
         
        </Switch>
     </Router>
   </>
  );
}

export default App;






