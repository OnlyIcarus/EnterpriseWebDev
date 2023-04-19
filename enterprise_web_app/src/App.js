import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

export default function App() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()
  const loginEmailRef = useRef()
  const loginPassRef = useRef()
  const casualWorkersRef = useRef()
  const casualWorkerPayRef = useRef()
  const averageCasualHoursRef = useRef()
  const standardWorkersRef = useRef()
  const standardWorkerPayRef = useRef()
  const averageStandardHoursRef = useRef()
  const expertWorkersRef = useRef()
  const expertWorkerPayRef = useRef()
  const averageExpertHoursRef = useRef()
  const quoteName = useRef()
  const physicalAssetsRef = useRef()
  let holdEmail;

  function handleRegister() {
    let username = usernameRef.current.value
    let password = passwordRef.current.value
    let email = emailRef.current.value

    fetch("api/users",
    {
      headers: {'Content-Type': 'application/json'},
      type: 'cors',
      method: "POST",
      body: JSON.stringify( { name: username, password: password, email: email} )
    }).then(function (response) {
      alert("Succesfully Registered User");
    }).catch(function (error) {
      alert("Something went wrong, please try again");
    })

  }

  function switchPageLogin() {
    if (document.getElementById('register-container')) {

      if (document.getElementById('register-container').style.display === 'none') {
          document.getElementById('register-container').style.display = 'block';
          document.getElementById('login-container').style.display = 'none';
          document.getElementById('register-button').textContent = 'Already a User? Login Here';
      }
      else {
          document.getElementById('register-container').style.display = 'none';
          document.getElementById('login-container').style.display = 'block';
          document.getElementById('register-button').textContent = 'Back to Registration';
      }
    }
  }

  function handleLogin() {
    const email = loginEmailRef.current.value;
    const password = loginPassRef.current.value;

    fetch("auth/signin",
    {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify( { email: email, password: password} )
    }).then(function (response) {
      if (response.status === 401) {
        alert ("Wrong email and password combination");
      } else {
        alert("You have logged in succesfully");
        holdEmail = loginEmailRef.current.value;
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('register-button').style.display = 'none';
        document.getElementById('main-body').style.display = 'block';
      }
    })
  }

  function handleSignout() {
    if (window.confirm('Are you sure you want to sign out?') === true) {
      console.log('Signed Out')
      fetch("auth/signout",
      {
        headers: {'Content-Type': 'application/json'},
        method: "GET"
      }).then(function (response) {
        alert('Succesfully signed out')
        document.getElementById('register-container').style.display = 'block';
        document.getElementById('register-button').style.display = 'block';
        document.getElementById('signout-button').style.display = 'none';
      })
    } else {
      return;
    }
    return;
  }

  function saveQuote() {
    const name = quoteName.current.value;
    const casualWorkers = casualWorkersRef.current.value;
    const casualWorkerPay = casualWorkerPayRef.current.value;
    const averageCasualHours = averageCasualHoursRef.current.value;
    const standardWorkers = standardWorkersRef.current.value;
    const standardWorkerPay = standardWorkerPayRef.current.value;
    const averageStandardHours = averageStandardHoursRef.current.value;
    const expertWorkers = expertWorkersRef.current.value;
    const expertWorkerPay = expertWorkerPayRef.current.value;
    const averageExpertHours = averageExpertHoursRef.current.value;
    const email = holdEmail;

    fetch("api/quote",
    {
      headers: {'Content-Type': 'application/json'},
      type: 'cors',
      method: "POST",
      body: JSON.stringify( { 
        name: name,
        email: email,
        casual_workers: casualWorkers, 
        casual_worker_pay: casualWorkerPay, 
        average_casual_hours: averageCasualHours, 
        standard_workers: standardWorkers, 
        standard_worker_pay: standardWorkerPay, 
        average_standard_hours: averageStandardHours, 
        expert_workers: expertWorkers, 
        expert_worker_pay: expertWorkerPay, 
        average_expert_hours: averageExpertHours
      })
    }).then(function (response) {
      alert("Succesfully Input Quote");
    }).catch(function (error) {
      alert("Something went wrong, please try again");
    })
  }

  return (
    <div id="container">
      <div id="login-page">
        <div id="login-button-container">
          <div id="register-button" className="buttons" onClick={switchPageLogin}>Already a User? Login Here</div>
        </div>
        <div id="register-container">
          <div id="register-input">
            <input ref={usernameRef} type="text" placeholder="Username..." className="inputLogin" />
            <br />
            <input ref={passwordRef} type="password" placeholder="Password..." className="inputLogin" />
            <br />
            <input ref={emailRef} type="text" placeholder="E-Mail..." className="inputLogin" />
          </div>
          <button id="register-button" className="buttons" onClick={handleRegister}>Register</button>
        </div>
        <div id="login-container">
          <div id="login-input">
            <input ref={loginEmailRef} type="text" placeholder="Email..." className="inputLogin" />
            <br />
            <input ref={loginPassRef} type="password" placeholder="Password..." className="inputLogin" />
          </div>
          <button id="register-button" className="buttons" onClick={handleLogin}>Log In</button>
        </div>
      </div>
      <div id="main-body">
        <div id="calculate-form">
          <div id="inputs">
            <input id="quote-name" className="inputCalculate" ref={quoteName} type="text" placeholder="Name for your quote" />
            <br />
            <input id="casual-workers" className="inputCalculate topLine" ref={casualWorkersRef} type="number" placeholder="Number of Casual Workers" />
            <input id="casual-worker-pay" className="inputCalculate topLine" ref={casualWorkerPayRef} type="number" placeholder="Average pay for casual workers" />
            <input id="average-casual-hours" className="inputCalculate topLine hoursWidth" ref={averageCasualHoursRef} type="number" placeholder="Average hours worked by casual workers" />
            <br />
            <input id="standard-workers" className="inputCalculate" ref={standardWorkersRef} type="number" placeholder="Number of Standard Workers" />
            <input id="standard-worker-pay" className="inputCalculate" ref={standardWorkerPayRef} type="number" placeholder="Average pay for standard workers" />
            <input id="average-standard-hours" className="inputCalculate hoursWidth" ref={averageStandardHoursRef} type="number" placeholder="Average hours worked by standard workers" />
            <br />
            <input id="expert-workers" className="inputCalculate" ref={expertWorkersRef} type="number" placeholder="Number of Expert Workers" />
            <input id="expert-worker-pay" className="inputCalculate" ref={expertWorkerPayRef} type="number" placeholder="Average pay for expert workers" />
            <input id="average-expert-hours" className="inputCalculate hoursWidth" ref={averageExpertHoursRef} type="number" placeholder="Average hours worked by expert workers" />
          </div>
          <button id="calculate" className="buttons" onClick={saveQuote}>Save</button>
        </div>
        <div id="center">
          <div id="signout-button" className="buttons" onClick={handleSignout}>Sign Out</div>
        </div>
      </div>
    </div>
  )
}