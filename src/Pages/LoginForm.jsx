import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const navigate = useNavigate();
  const REACT_APP_SERVER_HOSTNAME = process.env.REACT_APP_SERVER_HOSTNAME; // Initialize useNavigate hook
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [responseMessageLogIn, setresponseMessageLogIn] = useState('');
  const [responseMessageRegister, setresponseMessageRegister] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setresponseMessageLogIn('');
    setresponseMessageRegister('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Make login API call
      try {
        const response = await fetch(`${REACT_APP_SERVER_HOSTNAME}/api/LogIn`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });
        const data = await response.json();
        setresponseMessageLogIn(data.message); // Set response message
        if (response.ok) {
          // Redirect to '/home' upon successful login
          navigate('/home');
        }
      } catch (error) {
        console.error('Error:', error);
        setresponseMessageLogIn('An error occurred while logging in.');
      }
    } else {
      // Make register API call
      try {
        const response = await fetch(`${REACT_APP_SERVER_HOSTNAME}/api/Register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
          })
        });
        const data = await response.json();
        setresponseMessageRegister(data.message); // Set response message
      } catch (error) {
        console.error('Error:', error);
        setresponseMessageRegister('An error occurred while registering.');
      }
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}>
        <h3>{isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && (
          <>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="First Name" id="firstname" name="firstName" value={formData.firstName} onChange={handleChange} />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Last Name" id="lastname" name="lastName" value={formData.lastName} onChange={handleChange} />             
          </>
        )}
        <label htmlFor="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="username" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange} />
        
        <button type="submit">{isLogin ? 'Log In' : 'Register'}</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
        <p onClick={toggleForm} className="toggle-link">
        {/* <b>{isLogin ? 'Don\'t have an account? Register here' : 'Already have an account? LOG In here'}</b> */}
        {isLogin ? (<span>Don't have an account? <b><span style={{ color: 'green' }}>Register here</span></b></span>) : 
                  (<span>Already have an account? <b> <span style={{ color: 'green' }}>Log in here</span></b></span>
              )}
        </p>
        {isLogin ? (responseMessageLogIn && <p><b style={{ color: 'red', fontSize: '20px' }}>{responseMessageLogIn}</b></p>) : 
                  (responseMessageRegister && <p><b style={{ color: 'red', fontSize: '20px' }}>{responseMessageRegister}</b></p>
              )}
        {} {/* Display API response message */}
      </form>
    </div>
  );
};

export default LoginForm;
