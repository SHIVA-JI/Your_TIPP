import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";
import "./style.css";

const Horizontal =()=>{
    return <>
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img src={Logo} alt="React" className="logo"/>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbarcustom navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><NavLink className="Navlink" to="/home"><h6 className="menu_item"><b>Home</b></h6></NavLink></li>
        <li className="nav-item navlistcustom"><NavLink className="Navlink" to="/about"><h6 className="menu_item"><b>About US</b></h6></NavLink></li>
        <li className="nav-item "><NavLink className="Navlink" to="/service"><h6 className="menu_item"><b>Services</b></h6></NavLink></li>
        <li className="nav-item "><NavLink className="Navlink" to="/contact"><h6 className="menu_item"><b>Contact US</b></h6></NavLink></li> 
        <li className="nav-item "><NavLink className="Navlink" to="/help"><h6 className="menu_item"><b>Help</b></h6></NavLink></li>
        <li className="nav-item "><button type="button" className="btn btn-light logout"><NavLink className="Navlink" to="/"><b>Logout</b></NavLink></button></li>
        {/* <li className="nav-item "><button type="button" className="btn btn-dark">Register</button></li> */}
    </ul>
    </div>
    </nav>
    </header>
    </>
}
export default Horizontal;