import React from "react";
import { NavLink } from "react-router-dom";
// import Logo from "./Logo.png";
import "./services.css";
import "./style.css";
import Footer from "./Footer.jsx";
import Horizontal from "./Horizontal";
const Services =()=>{
    return <>
    <Horizontal/>

<section className="content-section  text-white text-center">
   <div className="container px-4 px-lg-5">
       <div className="content-section-heading">
        <h3 className="text-secondary mb-0">Services</h3>
        <h2 className="mb-5">We Offer</h2>
       </div>
       <div className="card">
          <h5 className="card-header">Feature 1:</h5>
          <div className="card-body">
            <h5 className="card-title"><strong>Interview Preparation</strong></h5>
            <p className="card-text">Features in this modules will help you in technical Interview Preparation!</p>
            <NavLink to="/interview-prep"><button type="button" className="btn btn-outline-primary">Begin your Prep</button></NavLink>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Feature 2:</h5>
          <div className="card-body">
            <h5 className="card-title"><strong>Contact Teacher</strong></h5>
            <p className="card-text">Features in this modules will help to get in touch with your mentor more efficiently!</p>
            <NavLink to="/contact-mentor"><button type="button" className="btn btn-outline-primary">Reach Out your Mentor</button></NavLink>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Feature 3:</h5>
          <div className="card-body">
            <h5 className="card-title"><strong>Project Diary</strong></h5>
            <p className="card-text">Features in this module will provide a digital form of project diary</p>
            <NavLink to="/project-diary"><button type="button" className="btn btn-outline-primary">See your Progress</button></NavLink>
          </div>
        </div>
    </div> 
</section>
<Footer/>

</>;
};

export default Services;