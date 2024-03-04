import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarcss.css";
import Logo from "./Logo.png";
import Cardblock from "./cardsblock";


const Vertical =()=>{
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
    <div className="row">
        <div className="col-3 collapse show d-md-flex  pt-2 pl-0 min-vh-100 min-vw-50" id="sidebar">
            <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item logo_item"><img src={Logo} alt="React" className="logo"/></li>
                <li className="nav-item item">
                    <NavLink to="/" className="nav-link text-truncate"><i className="fa fa-home"></i><h6 className="d-none d-sm-inline menu-item">Home</h6></NavLink>
                </li>
                <li className="nav-item "><NavLink to="/profile" className="nav-link text-truncate"><i className="fa-light fa-id-card"></i><h6 className="menu-item d-none d-sm-inline">Profile</h6></NavLink></li>
                <li className="nav-item"><NavLink to="/progress" className="nav-link text-truncate"><i className="fa-solid fa-chart-waterfall"></i><h6 className="menu-item d-none d-sm-inline">Progress</h6></NavLink></li>
                <li className="nav-item"><NavLink to="/result" className="nav-link text-truncate"><i className="fa-regular fa-square-poll-vertical"></i><h6 className="menu-item d-none d-sm-inline">Test Result</h6></NavLink></li>
            </ul>
        </div>
        <div className="col pt-2">
            <Cardblock />
        </div>
    </div>
    </div>
    </nav>
    </>
}

export default Vertical;