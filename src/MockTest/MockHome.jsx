import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./mock.css"; 
import "./mockhome.css";


const MockHome=()=>{
    
    const inputRef=useRef(null)

    //  

    return <>
    <div className="container">
        <h1 className="title text-light">Mock Test</h1>

        <ol>
            <li >There will be 15 questions one after the another.</li>
            <li >This whole test is time restricted.</li>
            <li > You have to complete the test before 120sec.</li>
            <li >For every right answere you'll be rewarded with one marks.</li>
            <li >The result will be declared at the end of the quiz.</li>
        </ol>
        
        {/* this part will be replaced when profile option will be created  */}
        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder="Name"/>
        </form>

        <div className="start">
            <NavLink className="startbtn" to="/quiz" >Let's Go</NavLink>
        </div>

        <div className="text">
            <h3>All The Best!!</h3>
        </div>
    </div>
    </>
}

export default MockHome;