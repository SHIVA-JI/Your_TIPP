import React from "react";
import { NavLink } from "react-router-dom";
import style from"./style.css";


const Footer=()=>{
    return <>
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
          <NavLink className="Navlink" to="/"><h6 className="Navlink menu-item">Home</h6></NavLink>
          </p>
          <p>
          <NavLink className="Navlink" to="/about"><h6 className="Navlink menu-item">About us</h6></NavLink>
          </p>
          <p>
          <NavLink className="Navlink" to="/contact"><h6 className="Navlink menu-item">Contact US</h6></NavLink>
          </p>
          <p>
          <NavLink className="Navlink" to="/service"><h6 className="Navlink menu-item">Service</h6></NavLink>
          </p>
          <p>
          <NavLink className="Navlink" to="/help"><h6 className="Navlink menu-item">Help</h6></NavLink>
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
            <a href="#!" className="Navlink text-reset">Settings</a>
          </p>
          <p>
          <NavLink className="Navlink" to="/help"><h6 className="menu-item">Help</h6></NavLink>
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
}

export default Footer;