import React from "react";
// import './About.css';
import Horizontal from "./Horizontal";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Horizontal />
      <section className="about-section">
        <h1 style={{ color: 'white' , paddingLeft:'1.5%',margin:'2% 2% 2% 0%'}} >About Us</h1>
        <p style={{ color: 'white' , paddingLeft:'1.5%'}}> Welcome to our Technical Interview Preparation Platform! </p>
        <p style={{ color: 'white' , paddingLeft:'1.5%'}}>We provide a comprehensive suite of tools to help you ace your technical interviews.</p>
        <ul>
            <li></li>
            <li>Mock Tests - Simulate real interview scenarios to test your knowledge and readiness.</li>
            <li>Mock Interviews - Practice with industry experts to gain confidence and insights.</li>
        </ul>
        <p style={{ color: 'white' , paddingLeft:'1.5%' }}>Join us in your journey to landing your dream tech job!</p>
      </section>
      <Footer />
    </>
  );
};

export default About;
