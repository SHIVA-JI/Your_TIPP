import React from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Help from './Help';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Project from './project';
import Interview from './Interview';
import Cteacher from './Cteacher';
import Profile from './Profile';
import Progress from './Progress';
import Result from "../MockTest/result";
import MockHome from "../MockTest/MockHome";
import Quiz from "../MockTest/Quiz";
import LoginForm from "./LoginForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Routing =()=>{
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Services />}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/project-diary" element={<Project />}/>
      <Route path="/interview-prep" element={<Interview/>}/>
      <Route path="/contact-mentor" element={<Cteacher/>}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/progress" element={<Progress />} />
      {/* <Route path="/result" element={<Result />}/> */}
      {/* mock test pages */}
      <Route path="/mocktest" element={<MockHome/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/result" element={<Result />}/>
    </Routes>
    </BrowserRouter>

    );
    
}
export default Routing;