import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Routing from './Pages/routes';
import React, {useEffect, useState} from 'react';
// import $ from 'jquery';

function App() {
  const [backendData,setBackendData]=useState([{}])
  
  useEffect(()=>{
    fetch("/api").then(
      response=>response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])



  return (    
    <><Routing/></>
  );
}

export default App;
