import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";
// import Logo from "./Logo.png";
//import Card from "./Card.js";
//import $ from 'jquery';
import "./toggle.jsx";
import Footer from "./Footer.jsx";
import Horizontal from "./Horizontal";


const Home =()=>{
    return <>
    <Horizontal/>
    <section className="sec-2">
        <div className="img_banner">
            <div className="blur"></div>
        </div>
        <div className="bg-text">
            <h1 className="txt">PRACTICE.BETTER.LEARN.BETTER</h1>
            <p className="intro-text">This is your personal technical interview preparation platform</p>
            {/* <ul className="ban_btn">
                <li className="btn_1"><button type="button" className="btn btn-light">Sign In</button></li>
                <li className="btn_1"><button type="button" className="btn btn-dark">Register</button></li>
            </ul> */}
        </div>
    </section>
    <section className="sec-3">
        <div className="container-fluid home_block">
            <div className="row heading">
                <h1>FEATURES</h1> 
            </div>
            <div className="row slide ">
                <div className="col-3">
                <div className="card" >
                    <div className="card-body">
                    <h5 className="card-title">FEATURE ONE:</h5>
                    <p className="card-text">Interview Preparation</p>
                    <NavLink to="/interview-prep"><button type="button" className="btn btn-primary">Feature One</button></NavLink>                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" >
                    <div className="card-body">
                    <h5 className="card-title">FEATURE TWO:</h5>
                    <p className="card-text">Chat Section</p>
                    <NavLink to="/contact-mentor"><button type="button" className="btn btn-primary">Feature Two</button></NavLink>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" >
                    <div className="card-body">
                    <h5 className="card-title">FEATURE THREE:</h5>
                    <p className="card-text">Project Diary</p>
                    <NavLink to="/project-diary"><button type="button" className="btn btn-primary">Feature Three</button></NavLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
};

export default Home;



