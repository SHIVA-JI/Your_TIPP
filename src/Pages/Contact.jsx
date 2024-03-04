import React from "react";
import style from"./style.css";
import "./form.css";
import Footer from "./Footer.jsx";
import Horizontal from "./Horizontal";

const Contact =()=>{
    return <>
    <Horizontal/>
<section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row form">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="fullname"
              />
              <label htmlfor="floatingInput" id="lbl">Full Name</label>           
              
            </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="contact number"
              />
              <label htmlfor="floatingInput" id="lbl">Contact Number</label>           
              
            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="email"
              />
              <label htmlfor="floatingInput" id="lbl">Email</label>           
              
            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                    <div className="form-floating">
  <textarea className="form-control" placeholder="subject" id="floatingTextarea"></textarea>
  <label htmlfor="floatingTextarea" id="lbl" >Subject</label>
</div>

                    </div>
                </div>
            </form>
            <div className=" btn-sub text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>//Address</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>//Phone no</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>//email id</p>
                </li>
            </ul>
        </div>
    </div>
</section>
<Footer/>
</>
};

export default Contact;