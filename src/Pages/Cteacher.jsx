import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";

const Cteacher=()=>{
    return <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img src={Logo} alt="React" className="logo"/>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><NavLink to="/"><h6 className="menu-item">Home</h6></NavLink></li>
        <li className="nav-item"><NavLink to="/about"><h6 className="menu-item">About US</h6></NavLink></li>
        <li className="nav-item"><NavLink to="/service"><h6 className="menu-item">Services</h6></NavLink></li>
        <li className="nav-item"><NavLink to="/contact"><h6 className="menu-item">Contact US</h6></NavLink></li> 
        <li className="nav-item"><NavLink to="/help"><h6 className="menu-item">Help</h6></NavLink></li>
        <li className="nav-item"><button type="button" className="btn btn-light">Sign In</button></li>
        <li className="nav-item"><button type="button" className="btn btn-dark">Register</button></li>
    </ul>
    </div>
    </nav>
    </header>
    <h1>You can contact your mentor</h1>
    <footer className="text-center text-lg-start bg-white text-muted" id="footer-style">
  <section className=" social d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>TIPP
          </h6>
          <p>
            TIPP is a technical interview preparation platform that helps students in there preparation of technical interviews through which they will be able to crack a wonderful job with higher packages.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
          <NavLink to="/"><h6 className="menu-item">Home</h6></NavLink>
          </p>
          <p>
          <NavLink to="/about"><h6 className="menu-item">About us</h6></NavLink>
          </p>
          <p>
          <NavLink to="/contact"><h6 className="menu-item">Contact US</h6></NavLink>
          </p>
          <p>
          <NavLink to="/service"><h6 className="menu-item">Service</h6></NavLink>
          </p>
          <p>
          <NavLink to="/help"><h6 className="menu-item">Help</h6></NavLink>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            FEATURES
          </h6>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
          <NavLink to="/help"><h6 className="menu-item">Help</h6></NavLink>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> UCER, Praygraj</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="http://google.com/">Website Address</a>
  </div>
</footer>
    </>
};

export default Cteacher;