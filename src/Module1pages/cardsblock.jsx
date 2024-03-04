import React from "react";
import card1 from "./card1.svg";
import card2 from "./card2.svg";
import card3 from "./card3.svg";
import card4 from "./card4.svg";
import { NavLink } from "react-router-dom";
import "./page.css";


const Cardblock=()=>{
    return <>
    <div className="container" id="body-cont">
    <div className="row row-cols-1 row-cols-md-2">
  <div className="col">
    <div className="card">
      <img src={card1} className="card-img-top"
        alt="card1" />
      <div className="card-body">
        <h5 className="card-title">VIDEOS</h5>
        <p className="card-text">
          This section is for the recorded HR and TR videos.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={card2} className="card-img-top"
        alt="card2" />
      <div className="card-body">
        <NavLink  className="Navlink" to="/mocktest">
        <h5 className="card-title">Mock Test</h5>
        <p className="card-text">
          This section is for the time restricted practice tests.
        </p>
        </NavLink>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={card3} className="card-img-top"
        alt="card3" />
      <div className="card-body">
        <h5 className="card-title">Practice Test</h5>
        <p className="card-text">This section is for the practice tests.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={card4} className="card-img-top"
        alt="card4" />
      <div className="card-body">
        <h5 className="card-title">Practice Interview</h5>
        <p className="card-text">
          This section is for the practice Interviews.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    </>
}

export default Cardblock;